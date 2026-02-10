"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";

interface AnnouncementBannerProps {
  message: string;
  link?: { text: string; href: string };
  enabled?: boolean;
}

export function AnnouncementBanner({
  message,
  link,
  enabled = false,
}: AnnouncementBannerProps) {
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const isDismissed = sessionStorage.getItem("banner-dismissed");
    if (isDismissed) setDismissed(true);
  }, []);

  if (!enabled || dismissed || !message) return null;

  function handleDismiss() {
    setDismissed(true);
    sessionStorage.setItem("banner-dismissed", "true");
  }

  return (
    <div className="relative bg-primary text-primary-foreground">
      <div className="container flex items-center justify-center gap-2 py-2 text-sm">
        <p>{message}</p>
        {link && (
          <Link href={link.href} className="font-medium underline underline-offset-4">
            {link.text}
          </Link>
        )}
        <button
          onClick={handleDismiss}
          className="absolute right-4 rounded-sm opacity-70 hover:opacity-100 transition-opacity"
          aria-label="Dismiss banner"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
