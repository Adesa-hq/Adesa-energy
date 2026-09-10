"use client";

import { ArrowRight, ChevronRight, Zap } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";

export default function HeroSection() {
  const { hero } = siteConfig;
  const reduceMotion = useReducedMotion();
  const [values, setValues] = useState(
    hero.stats.map((stat) => (typeof stat.value === "number" ? 0 : null)),
  );
  const [index, setIndex] = useState(0);
  const [carouselPaused, setCarouselPaused] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);

  useEffect(() => {
    if (reduceMotion) return undefined;

    const duration = 1200;
    const startTime = performance.now();
    let frameId;

    const animateValues = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setValues(
        hero.stats.map((stat) =>
          typeof stat.value === "number"
            ? Math.floor(stat.value * easedProgress)
            : null,
        ),
      );

      if (progress < 1) frameId = requestAnimationFrame(animateValues);
    };

    frameId = requestAnimationFrame(animateValues);
    return () => cancelAnimationFrame(frameId);
  }, [hero.stats, reduceMotion]);

  useEffect(() => {
    const handleVisibilityChange = () => setPageVisible(!document.hidden);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  useEffect(() => {
    if (reduceMotion || carouselPaused || !pageVisible) return undefined;

    const intervalId = window.setInterval(() => {
      setIndex((currentIndex) => (currentIndex + 1) % hero.images.length);
    }, 4500);

    return () => window.clearInterval(intervalId);
  }, [carouselPaused, hero.images.length, pageVisible, reduceMotion]);

  return (
    <section
      id={hero.id}
      className="relative flex min-h-[calc(100dvh-6rem)] items-center overflow-hidden bg-linear-to-b from-[#081126] via-[#0B1530] to-[#060b17] py-10 text-white sm:py-14 lg:min-h-[90vh] lg:py-24"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/4 -z-10 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/15 blur-[120px] sm:h-[38rem] sm:w-[38rem]" />
      <div className="pointer-events-none absolute right-0 top-1/3 -z-10 h-72 w-72 rounded-full bg-amber-500/10 blur-[110px] sm:h-[28rem] sm:w-[28rem]" />
      <div className="bg-grid-pattern pointer-events-none absolute inset-0 -z-10 opacity-40" />

      <div className="site-container w-full">
        <div className="grid min-w-0 items-center gap-10 lg:grid-cols-12 lg:gap-8">
          <motion.div
            initial={
              reduceMotion
                ? { opacity: 0 }
                : { opacity: 0, transform: "translateY(24px)" }
            }
            animate={{ opacity: 1, transform: "translateY(0)" }}
            transition={{ duration: 0.6 }}
            className="min-w-0 space-y-5 sm:space-y-6 lg:col-span-7"
          >
            <div className="inline-flex max-w-full items-center gap-2.5 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 shadow-sm backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5 shrink-0" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </span>
              <span className="truncate text-xs font-semibold tracking-wide text-sky-200 sm:text-sm">
                {hero.tagline}
              </span>
            </div>

            <h1 className="max-w-4xl text-balance font-heading text-[clamp(2rem,10vw,3rem)] font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Power your fleet with{" "}
              <span className="bg-linear-to-r from-[#F37621] via-[#FBBF24] to-[#38BDF8] bg-clip-text text-transparent">
                clean, cost-saving CNG
              </span>
            </h1>

            <p className="max-w-2xl text-pretty text-base leading-relaxed text-slate-300 sm:text-lg">
              {hero.description}
            </p>

            <div className="grid max-w-2xl gap-3 pt-1 sm:flex sm:flex-wrap">
              <Link
                href={hero.ctas.primary.target}
                aria-label={hero.ctas.primary.ariaLabel}
                className="touch-target group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-[#F37621] to-[#F59E0B] px-6 py-3.5 font-heading text-base font-bold text-white shadow-lg shadow-orange-500/25 transition-[transform,box-shadow] active:scale-[0.98] sm:w-auto"
              >
                {hero.ctas.primary.text}
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>

              <Link
                href={hero.ctas.secondary.target}
                aria-label={hero.ctas.secondary.ariaLabel}
                className="touch-target inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 font-heading text-base font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/15 active:scale-[0.98] sm:w-auto"
              >
                {hero.ctas.secondary.text}
              </Link>

              <Link
                href={hero.ctas.tertiary.target}
                aria-label={hero.ctas.tertiary.ariaLabel}
                className="touch-target inline-flex w-full items-center justify-center gap-1.5 rounded-xl px-4 py-3 text-sm font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-white sm:hidden"
              >
                {hero.ctas.tertiary.text}
                <ChevronRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            <dl className="grid grid-cols-3 gap-2 border-t border-white/10 pt-5 sm:gap-4 sm:pt-6">
              {hero.stats.map((stat, statIndex) => (
                <div
                  key={stat.label}
                  className="min-w-0 rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-md sm:p-4"
                >
                  <dd className="bg-linear-to-r from-sky-400 to-emerald-400 bg-clip-text font-heading text-xl font-extrabold tabular-nums text-transparent sm:text-3xl lg:text-4xl">
                    {stat.displayValue ??
                      `${reduceMotion ? stat.value : (values[statIndex] ?? "")}${stat.suffix ?? ""}`}
                  </dd>
                  <dt className="mt-1 text-[0.68rem] font-medium leading-tight text-slate-400 sm:text-sm">
                    {stat.label}
                  </dt>
                </div>
              ))}
            </dl>
          </motion.div>

          <motion.div
            initial={
              reduceMotion
                ? { opacity: 0 }
                : { opacity: 0, transform: "scale(0.96)" }
            }
            animate={{ opacity: 1, transform: "scale(1)" }}
            transition={{ duration: 0.7, delay: reduceMotion ? 0 : 0.12 }}
            className="relative min-w-0 lg:col-span-5"
            onMouseEnter={() => setCarouselPaused(true)}
            onMouseLeave={() => setCarouselPaused(false)}
            onFocusCapture={() => setCarouselPaused(true)}
            onBlurCapture={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) {
                setCarouselPaused(false);
              }
            }}
          >
            <div className="pointer-events-none absolute -inset-1 rounded-3xl bg-linear-to-r from-sky-500 to-amber-500 opacity-30 blur-xl" />

            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/20 bg-slate-900 shadow-2xl sm:aspect-[16/11] lg:aspect-square">
              {hero.images.map((image, imageIndex) => (
                <motion.div
                  key={image}
                  initial={false}
                  animate={{ opacity: imageIndex === index ? 1 : 0 }}
                  transition={{ duration: reduceMotion ? 0.2 : 0.6 }}
                  className="absolute inset-0"
                  aria-hidden={imageIndex !== index}
                >
                  <Image
                    src={image}
                    alt={`Adesa Energy CNG operations, view ${imageIndex + 1}`}
                    fill
                    priority={imageIndex === 0}
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 42vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/65 via-black/10 to-transparent" />
                </motion.div>
              ))}
            </div>

            <div className="relative mt-3 flex min-w-0 items-center justify-between gap-3 rounded-2xl border border-white/15 bg-slate-950/90 p-3.5 text-white shadow-lg backdrop-blur-md sm:absolute sm:bottom-4 sm:inset-x-4 sm:mt-0 sm:p-4">
              <div className="flex min-w-0 items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-emerald-500/40 bg-emerald-500/20 text-emerald-400">
                  <Zap className="h-5 w-5" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <p className="truncate text-[0.68rem] font-medium text-slate-300 sm:text-xs">
                    Standard CNG conversion
                  </p>
                  <p className="truncate font-heading text-xs font-bold text-white sm:text-sm">
                    Mobile & station ready
                  </p>
                </div>
              </div>

              <div className="flex shrink-0 items-center gap-1.5" aria-label="Choose carousel slide">
                {hero.images.map((_, imageIndex) => (
                  <button
                    key={imageIndex}
                    type="button"
                    onClick={() => setIndex(imageIndex)}
                    className={`carousel-dot h-3 w-3 rounded-full transition-[transform,background-color] duration-200 ${
                      imageIndex === index
                        ? "scale-125 bg-burnt-orange"
                        : "bg-white/30 hover:bg-white/60"
                    }`}
                    aria-label={`Show slide ${imageIndex + 1}`}
                    aria-current={imageIndex === index ? "true" : undefined}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
