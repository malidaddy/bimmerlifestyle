"use client";

import { useRef, useEffect } from "react";
import { HONEYPOT_FIELD, HONEYPOT_TIME_FIELD } from "@/lib/honeypot";

/**
 * Drop this inside any <form> to add invisible honeypot + timing fields.
 * Bots will fill the hidden "website" field; humans never see it.
 * The timestamp lets the server reject submissions faster than 2 seconds.
 */
export function HoneypotFields() {
  const timeRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (timeRef.current) {
      timeRef.current.value = String(Date.now());
    }
  }, []);

  return (
    <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", top: "-9999px" }}>
      <label htmlFor="__hp_website">Website</label>
      <input
        type="text"
        id="__hp_website"
        name={HONEYPOT_FIELD}
        tabIndex={-1}
        autoComplete="off"
      />
      <input
        type="hidden"
        name={HONEYPOT_TIME_FIELD}
        ref={timeRef}
      />
    </div>
  );
}
