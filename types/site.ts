export interface NavItem {
  title: string;
  href: string;
  disabled?: boolean;
  external?: boolean;
  icon?: string;
  description?: string;
}

export interface SiteConfig {
  name: string;
  shortName: string;
  description: string;
  url: string;
  ogImage: string;
  logo: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  mainNav: NavItem[];
  footerNav: {
    company: NavItem[];
    services: NavItem[];
    legal: NavItem[];
  };
  social: {
    twitter?: string;
    linkedin?: string;
    github?: string;
    instagram?: string;
    facebook?: string;
    youtube?: string;
  };
  contact: {
    email: string;
    phone?: string;
    address?: {
      street: string;
      city: string;
      state: string;
      zip: string;
      country: string;
    };
  };
  theme: {
    accentName: string;
  };
  features: {
    blog: boolean;
    newsletter: boolean;
    contactForm: boolean;
    animations: boolean;
  };
  contactForm: {
    autoResponder: {
      enabled: boolean;
      subject: string;
      message: string;
    };
  };
}
