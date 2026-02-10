import { Hero } from "@/components/sections/hero";
import { ContactForm } from "@/components/forms/contact-form";
import { LogoWatermark } from "@/components/shared/logo-watermark";
import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Bimmer Lifestyle Autocare. Reach us via WhatsApp, phone, or our contact form.",
};

const contactCards = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    lines: ["+1 (876) 402-0107"],
    href: "https://wa.me/18764020107",
    accent: true,
  },
  {
    icon: Phone,
    title: "Call Us",
    lines: ["+1 (876) 971-1859"],
    href: "tel:+18769711859",
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["info@scottsautoja.com"],
    href: "mailto:info@scottsautoja.com",
  },
  {
    icon: MapPin,
    title: "Location",
    lines: ["9 Church Hill Ave", "Montego Bay, St. James"],
    href: "https://maps.google.com/?q=9+Church+Hill+Ave+Montego+Bay+Jamaica",
  },
];

export default function ContactPage() {
  return (
    <>
      <Hero
        variant="centered"
        headline="Get in Touch"
        description="Ready to give your BMW the care it deserves? Reach out and our team will take care of the rest."
        image={{
          src: "https://images.unsplash.com/photo-1728060703475-d17c93c0b430?auto=format&fit=crop&w=1920&q=80",
          alt: "BMW headlights in the dark",
        }}
      />

      {/* Contact info cards */}
      <section
        className="py-16 md:py-20"
        style={{ backgroundColor: "#f0f5fa" }}
      >
        <div className="container">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {contactCards.map((card) => (
              <a
                key={card.title}
                href={card.href}
                target={card.href.startsWith("http") ? "_blank" : undefined}
                rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group rounded-xl bg-white p-8 text-center shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1"
              >
                <div
                  className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full"
                  style={{ backgroundColor: card.accent ? "#E7222E" : "#16588E" }}
                >
                  <card.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="font-heading text-lg font-bold uppercase">
                  {card.title}
                </h3>
                {card.lines.map((line) => (
                  <p
                    key={line}
                    className="mt-1 text-muted-foreground group-hover:text-[#16588E] transition-colors"
                  >
                    {line}
                  </p>
                ))}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Hours accent strip */}
      <section
        className="py-8"
        style={{ backgroundColor: "#E7222E" }}
      >
        <div className="container flex flex-col items-center text-center text-white">
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            <p className="text-lg font-semibold">
              Mon–Fri: 8am – 7pm &nbsp;&bull;&nbsp; Sat: 9am – 7pm &nbsp;&bull;&nbsp; Sun: Closed
            </p>
          </div>
          <p className="mt-1 text-sm text-white/80">
            Walk-ins welcome &bull; WhatsApp for fastest response
          </p>
        </div>
      </section>

      {/* Contact form section */}
      <section
        className="relative overflow-hidden py-16 md:py-24"
        style={{ backgroundColor: "#f5f8fc" }}
      >
        <LogoWatermark
          color="navy"
          opacity={4}
          className="-left-20 -bottom-12 w-[500px] rotate-[8deg] md:w-[650px]"
        />
        <div className="container relative z-10">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-8 text-center font-heading text-3xl font-extrabold uppercase tracking-tight text-[#16588E] md:text-4xl heading-accent">
              Send Us a Message
            </h2>
            <div className="rounded-xl bg-white p-8 shadow-sm md:p-10">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Quick contact CTA */}
      <section
        className="relative overflow-hidden py-16 md:py-20 text-white"
        style={{ background: "linear-gradient(135deg, #1a4a72 0%, #142d47 100%)", backgroundColor: "#142d47" }}
      >
        <LogoWatermark
          color="white"
          opacity={6}
          className="-right-16 -top-8 w-[400px] rotate-[-10deg] md:w-[550px]"
        />
        <div className="container relative z-10 text-center">
          <h2 className="font-heading text-2xl font-extrabold uppercase tracking-tight md:text-4xl">
            Prefer WhatsApp?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-lg text-white/85">
            Most of our customers reach us on WhatsApp for the fastest response. Tap below to start a conversation.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="https://wa.me/18764020107"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-lg inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-10 text-lg font-bold text-white shadow-lg shadow-[#25D366]/25 transition-all duration-300 hover:bg-[#20bd5a] hover:shadow-[#25D366]/40"
            >
              <MessageCircle className="h-6 w-6" />
              WhatsApp Us
            </a>
            <a
              href="tel:+18769711859"
              className="btn-lg inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/40 px-10 text-lg font-bold text-white transition-colors hover:bg-white/15"
            >
              <Phone className="h-5 w-5" />
              Call Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
