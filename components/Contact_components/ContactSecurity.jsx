"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";

export default function ContactSecurity({ onToken, resetKey }) {
  const container = useRef(null);
  const callback = useRef(onToken);
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);
  const sitekey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  useEffect(() => { callback.current = onToken; }, [onToken]);
  useEffect(() => {
    if (!ready || !sitekey || !window.turnstile || !container.current) return;
    const widget = window.turnstile.render(container.current, {
      sitekey,
      action: "contact",
      theme: "auto",
      size: "flexible",
      callback: (token) => { setFailed(false); callback.current(token); },
      "expired-callback": () => callback.current(""),
      "error-callback": () => { callback.current(""); setFailed(true); },
    });
    return () => {
      window.turnstile?.remove(widget);
    };
  }, [ready, sitekey, resetKey]);

  return (
    <div>
      {sitekey && <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        onReady={() => setReady(true)}
        onError={() => setFailed(true)}
      />}
      <div ref={container} />
      {(failed || !sitekey) && <p role="status" className="text-xs text-slate-500 dark:text-slate-400">
        {failed ? "The security check could not load. Please reload the page or email adeinfo@adesahq.com." : "Online enquiries are temporarily unavailable. Please email adeinfo@adesahq.com."}
      </p>}
    </div>
  );
}
