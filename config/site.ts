import { type SiteConfig } from "@/types/site";

export const siteConfig: SiteConfig = {
  // -- Identity --
  name: "MaliaWeb",
  shortName: "Malia",
  description: "Professional web presence for modern organizations.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://example.com",
  ogImage: "/images/og-default.jpg",

  // -- Branding --
  logo: {
    src: "/images/logo.svg",
    alt: "MaliaWeb Logo",
    width: 140,
    height: 40,
  },

  // -- Navigation --
  mainNav: [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Services", href: "/services" },
    { title: "Team", href: "/team" },
    { title: "Gallery", href: "/gallery" },
    { title: "Blog", href: "/blog" },
    { title: "Contact", href: "/contact" },
  ],

  // -- Footer --
  footerNav: {
    company: [
      { title: "About", href: "/about" },
      { title: "Team", href: "/team" },
      { title: "Careers", href: "/careers" },
    ],
    services: [
      { title: "Consulting", href: "/services#consulting" },
      { title: "Development", href: "/services#development" },
    ],
    legal: [
      { title: "Privacy Policy", href: "/privacy" },
      { title: "Terms of Service", href: "/terms" },
    ],
  },

  // -- Social --
  social: {
    twitter: "https://twitter.com/example",
    linkedin: "https://linkedin.com/company/example",
    github: "https://github.com/example",
  },

  // -- Contact --
  contact: {
    email: "hello@example.com",
    phone: "+1 (555) 000-0000",
    address: {
      street: "123 Business Ave",
      city: "San Francisco",
      state: "CA",
      zip: "94102",
      country: "USA",
    },
  },

  // -- Theme --
  theme: {
    accentName: "teal",
  },

  // -- Feature flags --
  features: {
    blog: true,
    newsletter: true,
    contactForm: true,
    animations: true,
  },

  // -- Contact form settings --
  contactForm: {
    autoResponder: {
      enabled: true,
      subject: "Thanks for reaching out!",
      message:
        "Thank you for contacting us. We've received your message and will get back to you within 24 hours.",
    },
  },
};
