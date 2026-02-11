import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { NewsletterForm } from "@/components/forms/newsletter-form";
import { LogoWatermark } from "@/components/shared/logo-watermark";
import { MapPin, Phone, Mail } from "lucide-react";

export function SiteFooter() {
  const { address } = siteConfig.contact;

  return (
    <footer className="relative overflow-hidden">
      {/* BMW tri-color gradient border */}
      <div
        className="h-1.5"
        style={{
          background:
            "linear-gradient(90deg, #16588E 0%, #16588E 33%, #81C4FF 33%, #81C4FF 66%, #E7222E 66%, #E7222E 100%)",
        }}
      />

      <div className="bg-gradient-to-b from-zinc-900 to-zinc-950 text-zinc-300">
        <LogoWatermark
          color="white"
          opacity={4}
          className="-right-24 top-8 w-[500px] rotate-[-12deg] md:w-[700px]"
        />
        <div className="container relative z-10 py-16">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {/* Brand column */}
            <div className="space-y-4">
              <Link href="/" className="inline-block">
                <Image
                  src={siteConfig.logo.src}
                  alt={siteConfig.logo.alt}
                  width={siteConfig.logo.width}
                  height={siteConfig.logo.height}
                  className="h-10 w-auto brightness-0 invert"
                />
              </Link>
              <p className="text-sm leading-relaxed text-zinc-400">
                {siteConfig.description}
              </p>
              {/* Social icons */}
              <div className="flex items-center gap-3 pt-2">
                {siteConfig.social.instagram && (
                  <a
                    href={siteConfig.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-800 text-zinc-400 transition-all hover:bg-[#16588E] hover:text-white"
                    aria-label="Instagram"
                  >
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </a>
                )}
                {siteConfig.social.facebook && (
                  <a
                    href={siteConfig.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-800 text-zinc-400 transition-all hover:bg-[#16588E] hover:text-white"
                    aria-label="Facebook"
                  >
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                )}
                {siteConfig.social.youtube && (
                  <a
                    href={siteConfig.social.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-800 text-zinc-400 transition-all hover:bg-[#E7222E] hover:text-white"
                    aria-label="YouTube"
                  >
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </a>
                )}
              </div>
            </div>

            {/* Company links */}
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-white uppercase tracking-widest">
                Company
              </h4>
              <ul className="space-y-2.5">
                {siteConfig.footerNav.company.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-zinc-400 transition-colors hover:text-white"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services links */}
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-white uppercase tracking-widest">
                Services
              </h4>
              <ul className="space-y-2.5">
                {siteConfig.footerNav.services.map((item) => (
                  <li key={item.title}>
                    <Link
                      href={item.href}
                      className="text-sm text-zinc-400 transition-colors hover:text-white"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact info */}
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-white uppercase tracking-widest">
                Contact
              </h4>
              <ul className="space-y-3">
                {address && (
                  <li>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${address.street}, ${address.city}, ${address.state}, ${address.country}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-2.5 text-sm text-zinc-400 transition-colors hover:text-white"
                    >
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#81C4FF]" />
                      <span>
                        {address.street}
                        <br />
                        {address.city}, {address.state}
                        {address.country && <><br />{address.country}</>}
                      </span>
                    </a>
                  </li>
                )}
                {siteConfig.contact.phone && (
                  <li>
                    <a
                      href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                      className="flex items-center gap-2.5 text-sm text-zinc-400 transition-colors hover:text-white"
                    >
                      <Phone className="h-4 w-4 shrink-0 text-[#81C4FF]" />
                      {siteConfig.contact.phone}
                    </a>
                  </li>
                )}
                <li>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="flex items-center gap-2.5 text-sm text-zinc-400 transition-colors hover:text-white"
                  >
                    <Mail className="h-4 w-4 shrink-0 text-[#81C4FF]" />
                    {siteConfig.contact.email}
                  </a>
                </li>
              </ul>

              {siteConfig.features.newsletter && (
                <div className="pt-3">
                  <p className="text-sm font-medium text-zinc-300 mb-2">
                    Stay updated
                  </p>
                  <NewsletterForm />
                </div>
              )}
            </div>
          </div>

          {/* Bottom bar */}
          <div
            className="mt-12 border-t border-zinc-800 pt-8 flex flex-col items-center justify-between gap-4 md:flex-row"
          >
            <div className="flex flex-col items-center gap-2 md:flex-row md:gap-4">
              <p className="text-sm text-zinc-500">
                &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
              </p>
              <div className="flex gap-4">
                {siteConfig.footerNav.legal.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-xs text-zinc-600 transition-colors hover:text-zinc-400"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* MaliDaddy branding */}
        <div className="border-t border-zinc-800/50 py-4">
          <div className="flex justify-center items-center opacity-40 hover:opacity-70 transition-opacity duration-300">
            <a
              href="https://malidaddy.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-xs text-zinc-500"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1207.04 127.58" className="w-20 h-auto fill-current">
                <polygon points="265.08 30.37 244.67 0 186.72 0 186.72 29.24 234.79 29.93 235.69 86.68 191.3 86.1 190 86.08 190 54.47 158.52 54.47 158.52 4.82 80.9 63.44 80.9 15.93 0 77.03 0 127.58 77.63 68.95 77.63 116.47 158.52 55.37 158.52 115.01 189.82 115.01 229.95 115.64 246.62 97.6 256.46 86.93 265.88 76.76 265.08 30.37" />
                <polygon points="352.04 105 327.22 50.32 327.22 105 304.9 105 304.9 22.59 337.45 22.59 364.01 81.44 391.32 22.59 423.37 22.59 423.37 105 401.04 105 401.04 50.55 375.98 105 352.04 105" />
                <polygon points="504.07 22.59 477.62 22.59 432.99 105 458.43 105 466.78 89 504.61 89 504.61 72.2 475.51 72.2 491.09 42.21 506.8 72.2 515.64 89 524 105 548.7 105 504.07 22.59" />
                <polygon points="854.12 22.59 827.67 22.59 783.04 105 808.48 105 816.84 89 854.66 89 854.66 72.2 825.56 72.2 841.14 42.21 856.85 72.2 865.7 89 874.05 105 898.75 105 854.12 22.59" />
                <polygon points="582.75 87.19 639.12 87.19 639.12 105 558.31 105 558.31 22.59 582.75 22.59 582.75 87.19" />
                <rect x="649.73" y="22.59" width="24.44" height="82.4" />
                <path d="M744.49,22.59h-53.36v82.41h53.36c26.94,0,40.41-7,40.41-41.15,0-34.15-13.47-41.26-40.41-41.26M744.37,86.84h-28.8v-37.83l-22.29-8.27h51.1c12.09,0,16.47,4.4,16.47,23.11-.02,18.48-4.15,22.99-16.48,22.99" />
                <path d="M963.54,22.59h-53.36v82.41h53.36c26.94,0,40.41-7,40.41-41.15,0-34.15-13.47-41.26-40.41-41.26M963.42,86.84h-28.8v-37.83l-22.29-8.27h51.1c12.09,0,16.47,4.4,16.47,23.11-.02,18.48-4.15,22.99-16.48,22.99" />
                <path d="M1065.38,22.59h-53.36v82.41h53.36c26.94,0,40.41-7,40.41-41.15s-13.47-41.26-40.41-41.26M1065.26,86.84h-28.8v-37.83l-22.29-8.27h51.1c12.09,0,16.47,4.4,16.47,23.11-.02,18.48-4.14,22.99-16.48,22.99" />
                <polygon points="1168.38 68.92 1168.38 105 1143.94 105 1143.94 68.7 1105.79 22.59 1132.6 22.59 1156.54 51.45 1180.6 22.59 1207.04 22.59 1168.38 68.92" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
