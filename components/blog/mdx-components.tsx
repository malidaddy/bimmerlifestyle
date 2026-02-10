import Image from "next/image";
import Link from "next/link";
import { Callout } from "./callout";
import type { MDXComponents } from "mdx/types";

export const mdxComponents: MDXComponents = {
  h1: ({ children, ...props }) => (
    <h1 className="font-heading mt-10 mb-4 text-3xl font-bold" {...props}>
      {children}
    </h1>
  ),
  h2: ({ children, ...props }) => (
    <h2 className="font-heading mt-10 mb-3 text-2xl font-bold" {...props}>
      {children}
    </h2>
  ),
  h3: ({ children, ...props }) => (
    <h3 className="font-heading mt-8 mb-3 text-xl font-semibold" {...props}>
      {children}
    </h3>
  ),
  a: ({ href, children, ...props }) => {
    if (href?.startsWith("/")) {
      return (
        <Link
          href={href}
          className="text-primary underline underline-offset-4"
          {...props}
        >
          {children}
        </Link>
      );
    }
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary underline underline-offset-4"
        {...props}
      >
        {children}
      </a>
    );
  },
  img: ({ src, alt }) => (
    <Image
      src={src || ""}
      alt={alt || ""}
      width={800}
      height={450}
      className="my-6 rounded-lg"
    />
  ),
  Callout,
};
