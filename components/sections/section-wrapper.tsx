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
    <section id={id} className={cn("py-16 md:py-24", className)}>
      <div className="container">
        {(title || description) && (
          <div className="mx-auto mb-12 max-w-2xl text-center">
            {title && (
              <h2 className="font-heading text-3xl font-bold tracking-tight md:text-4xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-4 text-lg text-muted-foreground">{description}</p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
