import type { GoogleReview } from "@/types/content";

const GOOGLE_API_KEY = process.env.GOOGLE_PLACES_API_KEY || "";
const GOOGLE_PLACE_ID = process.env.GOOGLE_PLACE_ID || "";

interface PlaceDetailsResponse {
  result?: {
    rating?: number;
    user_ratings_total?: number;
    reviews?: Array<{
      author_name: string;
      rating: number;
      text: string;
      relative_time_description: string;
      time: number;
      profile_photo_url?: string;
    }>;
  };
  status: string;
}

/**
 * Fetch Google reviews for the business via the Places API.
 * Uses Next.js ISR — results are cached and revalidated every 24 hours.
 * Returns up to 5 reviews (Google API limit per request).
 */
export async function getGoogleReviews(): Promise<{
  reviews: GoogleReview[];
  rating: number;
  totalReviews: number;
}> {
  if (!GOOGLE_API_KEY || !GOOGLE_PLACE_ID) {
    return { reviews: [], rating: 0, totalReviews: 0 };
  }

  try {
    const url = new URL(
      "https://maps.googleapis.com/maps/api/place/details/json"
    );
    url.searchParams.set("place_id", GOOGLE_PLACE_ID);
    url.searchParams.set("fields", "rating,user_ratings_total,reviews");
    url.searchParams.set("reviews_sort", "newest");
    url.searchParams.set("key", GOOGLE_API_KEY);

    const res = await fetch(url.toString(), {
      next: { revalidate: 86400 }, // Re-fetch every 24 hours
    });

    if (!res.ok) {
      console.error("Google Places API error:", res.status);
      return { reviews: [], rating: 0, totalReviews: 0 };
    }

    const data: PlaceDetailsResponse = await res.json();

    if (data.status !== "OK" || !data.result) {
      console.error("Google Places API status:", data.status);
      return { reviews: [], rating: 0, totalReviews: 0 };
    }

    const reviews: GoogleReview[] = (data.result.reviews || [])
      .filter((r) => r.rating >= 4) // Only show 4+ star reviews
      .map((r, i) => ({
        id: `google-${r.time}-${i}`,
        name: r.author_name,
        rating: r.rating,
        quote: r.text,
        timeDescription: r.relative_time_description,
        image: r.profile_photo_url,
      }));

    return {
      reviews,
      rating: data.result.rating || 0,
      totalReviews: data.result.user_ratings_total || 0,
    };
  } catch (error) {
    console.error("Failed to fetch Google reviews:", error);
    return { reviews: [], rating: 0, totalReviews: 0 };
  }
}
