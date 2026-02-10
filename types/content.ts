export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  image?: string;
}

export interface Stat {
  label: string;
  value: string;
  description?: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
  category?: string;
}
