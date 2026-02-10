import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Separator } from "@/components/ui/separator";
import { NewsletterForm } from "@/components/forms/newsletter-form";

export function SiteFooter() {
  return (
    <footer className="bg-gradient-to-b from-zinc-900 to-zinc-950 text-zinc-300">
      <div className="container py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">
              {siteConfig.name}
            </h3>
            <p className="text-sm leading-relaxed text-zinc-400">
              {siteConfig.description}
            </p>
            {siteConfig.features.newsletter && (
              <div className="pt-2">
                <p className="text-sm font-medium text-zinc-300 mb-2">
                  Stay updated
                </p>
                <NewsletterForm />
              </div>
            )}
          </div>

          {/* Company links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-2">
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
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-2">
              {siteConfig.footerNav.services.map((item) => (
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

          {/* Legal + Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              Legal
            </h4>
            <ul className="space-y-2">
              {siteConfig.footerNav.legal.map((item) => (
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
            {siteConfig.contact.email && (
              <div className="pt-4">
                <p className="text-sm text-zinc-400">
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="hover:text-white transition-colors"
                  >
                    {siteConfig.contact.email}
                  </a>
                </p>
              </div>
            )}
          </div>
        </div>

        <Separator className="my-8 bg-zinc-800" />

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-zinc-500">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
            {process.env.NEXT_PUBLIC_BUILD_ID && (
              <span className="ml-2 text-zinc-600">v{process.env.NEXT_PUBLIC_BUILD_ID}</span>
            )}
          </p>
          <div className="flex items-center space-x-4">
            {siteConfig.social.twitter && (
              <a
                href={siteConfig.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            )}
            {siteConfig.social.linkedin && (
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            )}
            {siteConfig.social.github && (
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
            )}
            {siteConfig.social.instagram && (
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
            )}
            {siteConfig.social.facebook && (
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
            )}
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
            className="flex items-center space-x-2 text-xs text-[hsl(var(--accent))]"
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
    </footer>
  );
}
