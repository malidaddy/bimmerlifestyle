import { siteConfig } from "@/config/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of service for ${siteConfig.name}.`,
};

export default function TermsPage() {
  return (
    <div className="container max-w-3xl py-16">
      <h1 className="font-heading text-3xl font-bold tracking-tight md:text-4xl">
        Terms of Service
      </h1>
      <p className="mt-4 text-muted-foreground">
        Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
      </p>

      <div className="prose prose-zinc dark:prose-invert mt-10 max-w-none">
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing and using this website, you accept and agree to be bound
          by these Terms of Service. If you do not agree to these terms, please
          do not use our website.
        </p>

        <h2>2. Use of Website</h2>
        <p>
          You agree to use this website only for lawful purposes and in a manner
          that does not infringe the rights of, restrict, or inhibit anyone
          else&apos;s use and enjoyment of the website.
        </p>

        <h2>3. Intellectual Property</h2>
        <p>
          All content on this website, including text, graphics, logos, images,
          and software, is the property of {siteConfig.name} or its content
          suppliers and is protected by applicable intellectual property laws.
        </p>

        <h2>4. Disclaimer</h2>
        <p>
          This website and its content are provided &quot;as is&quot; without
          warranties of any kind, either express or implied. We do not warrant
          that the website will be uninterrupted, error-free, or free of
          viruses or other harmful components.
        </p>

        <h2>5. Limitation of Liability</h2>
        <p>
          In no event shall {siteConfig.name} be liable for any direct,
          indirect, incidental, special, or consequential damages arising out of
          or in connection with your use of this website.
        </p>

        <h2>6. Third-Party Links</h2>
        <p>
          Our website may contain links to third-party websites. We have no
          control over the content, privacy policies, or practices of these
          sites and assume no responsibility for them.
        </p>

        <h2>7. Changes to Terms</h2>
        <p>
          We reserve the right to modify these terms at any time. Changes will
          be effective immediately upon posting to this page. Your continued use
          of the website constitutes acceptance of the modified terms.
        </p>

        <h2>8. Contact Us</h2>
        <p>
          If you have any questions about these Terms of Service, please contact
          us at{" "}
          <a href={`mailto:${siteConfig.contact.email}`}>
            {siteConfig.contact.email}
          </a>
          .
        </p>
      </div>
    </div>
  );
}
