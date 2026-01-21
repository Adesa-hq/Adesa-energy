"use client";

import { useRef, useEffect, useState } from "react";
import { siteConfig } from "@/config/site";
import Link from "next/link";

export default function VideoSection() {
  
  const videoRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const { heading, description, cta, video, styles } = siteConfig.videoSection;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.4 },
    );

    if (videoRef.current) observer.observe(videoRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!videoRef.current) return;
    if (visible) videoRef.current.play();
    else videoRef.current.pause();
  }, [visible]);

  return (
    <section
      className="relative w-full py-24"
      style={{ backgroundColor: styles.background }}
    >
      <div className="mx-auto max-w-6xl px-6 grid gap-12 md:grid-cols-2 items-center">
        <div>
          <h2 className="text-white text-4xl font-semibold">{heading}</h2>

          <p className="mt-4 max-w-md" style={{ color: styles.textMuted }}>
            {description}
          </p>

          <Link
            href={cta.href}
            className="inline-block mt-8 text-white px-6 py-3 rounded-lg text-sm font-medium"
            style={{ backgroundColor: styles.accent }}
          >
            {cta.label}
          </Link>
        </div>

        <div className="relative rounded-2xl overflow-hidden shadow-xl">
          <video
            ref={videoRef}
            muted
            playsInline
            preload="none"
            controls
            // poster={video.poster}
            className="w-full h-full object-cover"
          >
            <source src={video.src} type={video.type} />
          </video>
        </div>
      </div>
    </section>
  );
}
