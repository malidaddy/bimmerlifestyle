import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { SectionWrapper } from "./section-wrapper";
import type { Testimonial } from "@/types/content";

interface TestimonialsSectionProps {
  title?: string;
  description?: string;
  testimonials: Testimonial[];
}

export function TestimonialsSection({
  title = "What Our Clients Say",
  description,
  testimonials,
}: TestimonialsSectionProps) {
  return (
    <SectionWrapper title={title} description={description}>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.id} className="h-full">
            <CardContent className="flex h-full flex-col p-6">
              <div className="mb-4 text-primary">
                <svg
                  className="h-8 w-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <blockquote className="flex-1 text-muted-foreground leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div className="mt-6 flex items-center space-x-3">
                {testimonial.image && (
                  <div className="relative h-10 w-10 overflow-hidden rounded-full">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div>
                  <p className="text-sm font-semibold">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
