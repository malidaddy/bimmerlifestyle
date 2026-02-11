import { type SiteConfig } from "@/types/site";

export const siteConfig: SiteConfig = {
  // -- Identity --
  name: "Bimmer Lifestyle Autocare",
  shortName: "BMLAC",
  description:
    "Montego Bay's premier BMW & MINI specialist. Expert mechanical repair, performance tuning, and an exclusive loyalty rewards program. Serving Jamaica island-wide since 2000.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://bimmerlifestyle.com",
  ogImage: "/images/og-default.jpg",

  // -- Branding --
  logo: {
    src: "/images/logo.svg",
    alt: "Bimmer Lifestyle Autocare Logo",
    width: 160,
    height: 48,
  },

  // -- Navigation --
  mainNav: [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Services", href: "/services" },
    { title: "Rewards", href: "/rewards" },
    { title: "Contact", href: "/contact" },
  ],

  // -- Footer --
  footerNav: {
    company: [
      { title: "About Us", href: "/about" },
      { title: "Rewards Program", href: "/rewards" },
      { title: "Contact Us", href: "/contact" },
    ],
    services: [
      { title: "Diagnostics", href: "/services" },
      { title: "Engine Repair", href: "/services" },
      { title: "Performance Tuning", href: "/services" },
      { title: "Brakes & Suspension", href: "/services" },
    ],
    legal: [
      { title: "Privacy Policy", href: "/privacy" },
      { title: "Terms of Service", href: "/terms" },
    ],
  },

  // -- Social --
  social: {
    instagram: "https://instagram.com/scottsautomobay",
    facebook: "https://facebook.com/Scotts-Auto-Electrical-Supplies-280276578770966",
    youtube: "https://youtube.com/channel/UCBfMbi3G75jO26Ad8BZyfug",
  },

  // -- Contact --
  contact: {
    email: "info@scottsautoja.com",
    phone: "+1 (876) 971-1859",
    address: {
      street: "9 Church Hill Ave",
      city: "Montego Bay",
      state: "St. James",
      zip: "",
      country: "Jamaica",
    },
  },

  // -- Theme --
  theme: {
    accentName: "navy",
  },

  // -- Feature flags --
  features: {
    blog: false,
    newsletter: true,
    contactForm: true,
    animations: true,
  },

  // -- Contact form settings --
  contactForm: {
    autoResponder: {
      enabled: true,
      subject: "Thanks for contacting Bimmer Lifestyle Autocare!",
      message:
        "Thank you for reaching out to Bimmer Lifestyle Autocare. We've received your message and will get back to you within 24 hours. In the meantime, feel free to call us for immediate assistance.",
    },
  },
};
