import { Hero } from "@/components/sections/hero";
import { ContactForm } from "@/components/forms/contact-form";
import { siteConfig } from "@/config/site";
import { Mail, Phone, MapPin } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with us. We'd love to hear from you.",
};

export default function ContactPage() {
  return (
    <>
      <Hero
        variant="centered"
        headline="Contact Us"
        description="Have a question or want to work together? We'd love to hear from you."
      />
      <section className="container pb-16">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact info */}
          <div className="space-y-8">
            <div>
              <h2 className="font-heading text-2xl font-bold">
                Get in Touch
              </h2>
              <p className="mt-2 text-muted-foreground">
                Fill out the form and our team will get back to you within 24
                hours.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-primary/10 p-3">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>

              {siteConfig.contact.phone && (
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-primary/10 p-3">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <a
                      href={`tel:${siteConfig.contact.phone}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {siteConfig.contact.phone}
                    </a>
                  </div>
                </div>
              )}

              {siteConfig.contact.address && (
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-primary/10 p-3">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-muted-foreground">
                      {siteConfig.contact.address.street}
                      <br />
                      {siteConfig.contact.address.city},{" "}
                      {siteConfig.contact.address.state}{" "}
                      {siteConfig.contact.address.zip}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Contact form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
