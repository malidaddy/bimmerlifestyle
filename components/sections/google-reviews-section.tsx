import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { SectionWrapper } from "./section-wrapper";
import { Star } from "lucide-react";
import type { GoogleReview } from "@/types/content";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating
              ? "fill-[#FBBC04] text-[#FBBC04]"
              : "fill-zinc-200 text-zinc-200"
          }`}
        />
      ))}
    </div>
  );
}

interface GoogleReviewsSectionProps {
  title?: string;
  description?: string;
  reviews: GoogleReview[];
  overallRating?: number;
  totalReviews?: number;
  fallbackTestimonials?: Array<{
    id: string;
    name: string;
    role: string;
    company: string;
    quote: string;
  }>;
}

export function GoogleReviewsSection({
  title = "What Our Customers Say",
  description,
  reviews,
  overallRating = 0,
  totalReviews = 0,
  fallbackTestimonials,
}: GoogleReviewsSectionProps) {
  const hasGoogleReviews = reviews.length > 0;

  // If no Google reviews, fall back to static testimonials
  if (!hasGoogleReviews && fallbackTestimonials) {
    return (
      <SectionWrapper
        title={title}
        description={description}
        className="bg-[#81C4FF]/[0.06]"
      >
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {fallbackTestimonials.map((t) => (
            <Card
              key={t.id}
              className="h-full border-2 border-foreground/8 shadow-[3px_3px_0_0_rgba(0,0,0,0.06)]"
            >
              <CardContent className="flex h-full flex-col p-6">
                <div className="mb-4 text-[#E7222E]">
                  <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <blockquote className="flex-1 text-muted-foreground leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="mt-6">
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {t.role}, {t.company}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionWrapper>
    );
  }

  if (!hasGoogleReviews) return null;

  return (
    <SectionWrapper
      title={title}
      description={description}
      className="bg-[#81C4FF]/[0.06]"
    >
      {/* Overall Google rating badge */}
      {overallRating > 0 && (
        <div className="mx-auto mb-10 flex max-w-md items-center justify-center gap-4 rounded-xl border-2 border-[#16588E]/10 bg-white px-6 py-4 shadow-[3px_3px_0_0_rgba(22,88,142,0.06)]">
          <div className="flex items-center gap-2">
            {/* Google "G" logo */}
            <svg className="h-6 w-6" viewBox="0 0 24 24">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            <span className="text-2xl font-extrabold text-foreground">
              {overallRating.toFixed(1)}
            </span>
          </div>
          <div className="flex flex-col">
            <StarRating rating={Math.round(overallRating)} />
            <p className="mt-0.5 text-xs text-muted-foreground">
              Based on {totalReviews.toLocaleString()} reviews
            </p>
          </div>
        </div>
      )}

      {/* Review cards */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {reviews.slice(0, 6).map((review) => (
          <Card
            key={review.id}
            className="h-full border-2 border-foreground/8 shadow-[3px_3px_0_0_rgba(0,0,0,0.06)]"
          >
            <CardContent className="flex h-full flex-col p-6">
              <div className="mb-3 flex items-center justify-between">
                <StarRating rating={review.rating} />
                <span className="text-xs text-muted-foreground">
                  {review.timeDescription}
                </span>
              </div>
              <blockquote className="flex-1 text-sm text-muted-foreground leading-relaxed line-clamp-5">
                &ldquo;{review.quote}&rdquo;
              </blockquote>
              <div className="mt-5 flex items-center gap-3">
                {review.image && (
                  <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full">
                    <Image
                      src={review.image}
                      alt={review.name}
                      fill
                      className="object-cover"
                      sizes="36px"
                    />
                  </div>
                )}
                <div>
                  <p className="text-sm font-semibold">{review.name}</p>
                </div>
                {/* Google "G" attribution */}
                <svg className="ml-auto h-5 w-5 shrink-0 opacity-40" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Google attribution */}
      <p className="mt-8 text-center text-xs text-muted-foreground">
        Reviews from Google &bull; Updated daily
      </p>
    </SectionWrapper>
  );
}
