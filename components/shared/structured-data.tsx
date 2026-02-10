import { siteConfig } from "@/config/site";

/**
 * JSON-LD structured data for Google rich results.
 * Includes AutoRepair + LocalBusiness schema for auto shop indexing.
 */
export function StructuredData() {
  const { contact, name, description, url } = siteConfig;
  const address = contact.address;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["AutoRepair", "LocalBusiness"],
    name,
    description,
    url,
    telephone: contact.phone,
    email: contact.email,
    image: `${url}/images/logo.svg`,
    logo: `${url}/images/logo.svg`,
    priceRange: "$$",
    currenciesAccepted: "JMD",
    paymentAccepted: "Cash, Credit Card",
    ...(address && {
      address: {
        "@type": "PostalAddress",
        streetAddress: address.street,
        addressLocality: address.city,
        addressRegion: address.state,
        addressCountry: address.country,
      },
    }),
    geo: {
      "@type": "GeoCoordinates",
      latitude: 18.4762,
      longitude: -77.9236,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "19:00",
      },
    ],
    sameAs: [
      siteConfig.social.instagram,
      siteConfig.social.facebook,
      siteConfig.social.youtube,
    ].filter(Boolean),
    areaServed: {
      "@type": "Country",
      name: "Jamaica",
    },
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 18.4762,
        longitude: -77.9236,
      },
      geoRadius: "50000",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "BMW & MINI Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "BMW Diagnostics",
            description: "Comprehensive BMW and MINI diagnostic scanning and fault analysis.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Engine Repair",
            description: "VANOS, timing chain, turbo rebuild, and complete engine overhaul.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Performance Tuning",
            description: "ECU remapping, intake and exhaust upgrades, suspension tuning.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Brakes & Suspension",
            description: "Brake pad and rotor replacement, suspension overhaul and upgrades.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Electrical Systems",
            description: "Battery registration, module coding, module cloning, key programming.",
          },
        },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "50",
      bestRating: "5",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
