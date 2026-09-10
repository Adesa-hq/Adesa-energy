"use client";

import { useRef, useEffect, useState } from "react";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

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
    if (visible) videoRef.current.play().catch(() => {});
    else videoRef.current.pause();
  }, [visible]);

  return (
    <section className="relative w-full py-20 lg:py-28 bg-[#081126] text-white overflow-hidden">
      {/* Glow aura */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 bg-sky-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-12 lg:grid-cols-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5 space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md text-sky-300 font-semibold text-xs uppercase tracking-wider">
            <Play className="w-3.5 h-3.5 fill-sky-300" />
            <span>Process & Technology Showcase</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight leading-tight">
            {heading}
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-sans">
            {description}
          </p>

          <div className="pt-2">
            <Link
              href={cta.href}
              className="inline-flex items-center gap-2 bg-linear-to-r from-[#F37621] to-[#F59E0B] text-white px-7 py-3.5 rounded-xl font-heading font-bold text-base shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              <span>{cta.label}</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>

        {/* Video Cinema Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-7 relative"
        >
          <div className="absolute -inset-1 bg-linear-to-r from-sky-500/30 to-amber-500/30 rounded-3xl blur-xl opacity-50" />
          
          <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-black aspect-video flex items-center justify-center">
            <video
              ref={videoRef}
              muted
              playsInline
              preload="none"
              controls
              className="w-full h-full object-cover"
            >
              <source src={video.src} type={video.type} />
            </video>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
