import { siteConfig } from "@/config/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${siteConfig.name}.`,
};

export default function PrivacyPage() {
  return (
    <div className="container max-w-3xl py-16">
      <h1 className="font-heading text-3xl font-bold tracking-tight md:text-4xl">
        Privacy Policy
      </h1>
      <p className="mt-4 text-muted-foreground">
        Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
      </p>

      <div className="prose prose-zinc dark:prose-invert mt-10 max-w-none">
        <h2>1. Information We Collect</h2>
        <p>
          We collect information you provide directly to us, such as when you
          fill out a contact form, subscribe to our newsletter, or communicate
          with us. This may include your name, email address, phone number, and
          any message content you submit.
        </p>

        <h2>2. How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Respond to your inquiries and provide customer support</li>
          <li>Send you newsletters and marketing communications (with your consent)</li>
          <li>Improve our website and services</li>
          <li>Comply with legal obligations</li>
        </ul>

        <h2>3. Information Sharing</h2>
        <p>
          We do not sell, trade, or otherwise transfer your personal information
          to third parties. We may share information with trusted service
          providers who assist us in operating our website and conducting our
          business, so long as those parties agree to keep this information
          confidential.
        </p>

        <h2>4. Data Security</h2>
        <p>
          We implement appropriate security measures to protect your personal
          information. However, no method of transmission over the Internet or
          electronic storage is 100% secure, and we cannot guarantee absolute
          security.
        </p>

        <h2>5. Cookies and Analytics</h2>
        <p>
          Our website may use cookies and analytics tools to improve your
          browsing experience and understand how visitors interact with our
          site. You can control cookie settings through your browser
          preferences.
        </p>

        <h2>6. Your Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Access the personal data we hold about you</li>
          <li>Request correction of inaccurate data</li>
          <li>Request deletion of your data</li>
          <li>Opt out of marketing communications at any time</li>
        </ul>

        <h2>7. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us
          at{" "}
          <a href={`mailto:${siteConfig.contact.email}`}>
            {siteConfig.contact.email}
          </a>
          .
        </p>
      </div>
    </div>
  );
}
