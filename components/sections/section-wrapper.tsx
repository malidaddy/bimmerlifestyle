import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  className?: string;
  id?: string;
}

export function SectionWrapper({
  children,
  title,
  description,
  className,
  id,
}: SectionWrapperProps) {
  return (
    <section id={id} className={cn("py-20 md:py-28", className)}>
      <div className="container">
        {(title || description) && (
          <div className="mx-auto mb-14 max-w-3xl text-center">
            {title && (
              <h2 className="font-heading text-3xl font-extrabold uppercase tracking-tight md:text-5xl heading-accent">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-5 text-lg text-muted-foreground md:text-xl leading-relaxed">
                {description}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
