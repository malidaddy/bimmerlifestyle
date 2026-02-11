import type { Metadata } from "next";
import { DM_Sans, Barlow_Condensed } from "next/font/google";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";
import { UmamiAnalytics } from "@/components/shared/analytics";
import { ThemeProvider } from "@/components/shared/theme-provider";
import { StructuredData } from "@/components/shared/structured-data";
import "./globals.css";

const fontSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontHeading = Barlow_Condensed({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "website",
    locale: "en_US",
    title: {
      default: siteConfig.name,
      template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [{ url: siteConfig.ogImage }],
  },
  twitter: {
    card: "summary_large_image",
    title: {
      default: siteConfig.name,
      template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords: [
    "BMW repair Jamaica",
    "BMW specialist Montego Bay",
    "MINI Cooper service Jamaica",
    "BMW diagnostics Jamaica",
    "BMW performance tuning Jamaica",
    "auto repair Montego Bay",
    "BMW mechanic St James",
    "Bimmer Lifestyle",
    "BMW ECU coding Jamaica",
    "BMW battery registration",
  ],
  alternates: {
    canonical: "/",
  },
  other: {
    "geo.region": "JM-08",
    "geo.placename": "Montego Bay",
    "geo.position": "18.4762;-77.9236",
    ICBM: "18.4762, -77.9236",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <StructuredData />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontHeading.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
        <UmamiAnalytics />
      </body>
    </html>
  );
}
