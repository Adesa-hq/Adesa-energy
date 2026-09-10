"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Fuel,
  Gauge,
  Landmark,
  MapPinned,
  Network,
  ShieldCheck,
} from "lucide-react";
import { siteConfig } from "@/config/site";

function Reveal({ children, className = "", delay = 0 }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 30 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.68, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function InvestorSection() {
  const { hero, traction, market, advantages, scaleSteps, whyNow, capitalUses, cta } =
    siteConfig.investors;
  const leaders = siteConfig.team.members.slice(0, 4);

  return (
    <div className="w-full min-w-0 overflow-hidden bg-background text-foreground">
      <section className="relative isolate overflow-hidden bg-[#050b16] text-white">
        <div className="absolute inset-0 investor-grid opacity-80" />
        <div className="absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-light-blue/15 blur-[140px]" />
        <div className="absolute -bottom-28 left-1/4 h-80 w-80 rounded-full bg-burnt-orange/10 blur-[120px]" />

        <div className="site-container relative grid min-h-[760px] min-w-0 grid-cols-1 items-center gap-14 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
          <motion.div
            initial={false}
            className="relative z-10 min-w-0"
          >
            <p className="mb-6 text-sm font-bold uppercase tracking-[0.24em] text-burnt-orange">
              {hero.eyebrow}
            </p>
            <h1 className="max-w-3xl break-words text-[2.65rem] font-bold leading-[1.02] tracking-[-0.05em] sm:text-6xl lg:text-7xl xl:text-[5.2rem]">
              {hero.title}
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              {hero.description}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={hero.primaryCTA.href}
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-burnt-orange px-5 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-orange-950/30 transition hover:-translate-y-0.5 hover:bg-[#dc681c] sm:w-auto sm:px-6 sm:text-base"
              >
                {hero.primaryCTA.label}
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <Link
                href={hero.secondaryCTA.href}
                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                {hero.secondaryCTA.label}
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={false}
            className="relative min-w-0"
          >
            <div className="investor-image-frame relative min-h-[410px] overflow-hidden border border-white/15 bg-[#0d1b31] shadow-2xl shadow-black/50 sm:min-h-[520px]">
              <Image
                src={hero.image}
                alt="Adesa Energy mobile CNG conversion unit in operation"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 46vw"
                className="object-cover object-center transition duration-700 hover:scale-[1.025]"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#050b16]/90 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between border-t border-white/30 pt-4 text-xs font-bold uppercase tracking-[0.14em] text-white">
                <span>Mobile infrastructure</span>
                <span>Nigeria</span>
              </div>
            </div>
            <div className="absolute -bottom-7 -left-6 hidden rounded-2xl border border-white/15 bg-[#0b1528]/95 p-5 shadow-2xl backdrop-blur-xl sm:block">
              <div className="flex items-center gap-3">
                <Network className="h-6 w-6 text-burnt-orange" />
                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-slate-400">Operating model</p>
                  <p className="mt-1 font-heading font-bold text-white">Built to move with demand</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="site-container relative grid border-t border-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {traction.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={false}
              className="border-b border-white/10 py-7 sm:border-r sm:px-6 lg:border-b-0 first:pl-0 last:border-r-0"
            >
              <p className="text-3xl font-bold tracking-tight text-white">{metric.value}</p>
              <p className="mt-2 text-sm text-slate-400">{metric.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="site-container grid min-w-0 grid-cols-1 gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-24">
          <Reveal>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-burnt-orange">
              Why this market
            </p>
            <h2 className="mt-5 text-4xl font-bold leading-tight tracking-[-0.045em] sm:text-5xl">
              {market.title}
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              {market.description}
            </p>
          </Reveal>
          <Reveal className="lg:pt-14" delay={0.08}>
            <div className="border-l-2 border-burnt-orange pl-7">
              {market.points.map((point, index) => (
                <div
                  key={point}
                  className="flex gap-4 border-b border-slate-200 py-5 first:pt-0 last:border-b-0 dark:border-white/10"
                >
                  <span className="font-heading text-sm font-bold text-burnt-orange">0{index + 1}</span>
                  <p className="font-semibold leading-6">{point}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-slate-100/70 py-20 dark:bg-white/[0.025] sm:py-28">
        <div className="site-container">
          <Reveal className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-burnt-orange">Why Adesa</p>
            <h2 className="mt-4 text-4xl font-bold tracking-[-0.045em] sm:text-5xl">
              The gap is not awareness. It is accessible execution.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 dark:border-white/10 dark:bg-white/10 md:grid-cols-2">
            {advantages.map((advantage, index) => {
              const icons = [MapPinned, Fuel, Gauge, ShieldCheck];
              const Icon = icons[index];
              return (
                <Reveal key={advantage.title} delay={index * 0.06} className="bg-white p-7 dark:bg-[#091324] sm:p-9">
                  <div className="flex items-start justify-between gap-6">
                    <Icon className="h-7 w-7 text-burnt-orange" />
                    <span className="font-heading text-xs font-bold text-slate-400">0{index + 1}</span>
                  </div>
                  <h3 className="mt-10 text-2xl font-bold">{advantage.title}</h3>
                  <p className="mt-3 max-w-md leading-7 text-slate-600 dark:text-slate-400">
                    {advantage.description}
                  </p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#0a1425] py-20 text-white sm:py-28">
        <div className="site-container">
          <Reveal className="grid min-w-0 grid-cols-1 gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-burnt-orange">How it scales</p>
              <h2 className="mt-4 text-4xl font-bold tracking-[-0.045em] sm:text-5xl">
                A repeatable city-by-city growth loop.
              </h2>
            </div>
            <p className="max-w-xl text-slate-300 lg:justify-self-end">
              Mobile capacity follows concentrated demand, builds local adoption, and creates the foundation for broader service coverage.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-4 md:grid-cols-5">
            {scaleSteps.map((step, index) => (
              <Reveal key={step} delay={index * 0.07} className="relative">
                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.035] p-5">
                  <div className="flex items-center justify-between">
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-burnt-orange font-heading text-sm font-bold">
                      {index + 1}
                    </span>
                    {index < scaleSteps.length - 1 && <ArrowRight className="hidden h-4 w-4 text-slate-500 md:block" />}
                  </div>
                  <p className="mt-8 font-heading font-bold leading-6">{step}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="site-container grid min-w-0 grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-burnt-orange">Why now</p>
            <h2 className="mt-4 text-4xl font-bold tracking-[-0.045em] sm:text-5xl">
              The need is immediate. The transition is actionable.
            </h2>
            <div className="mt-10 space-y-5">
              {whyNow.map((reason) => (
                <div key={reason} className="flex gap-4">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-burnt-orange" />
                  <p className="leading-7 text-slate-600 dark:text-slate-300">{reason}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="h-full rounded-2xl bg-burnt-orange p-8 text-white sm:p-10">
              <Landmark className="h-9 w-9" />
              <h2 className="mt-8 text-3xl font-bold tracking-[-0.035em]">What growth capital enables</h2>
              <div className="mt-8 border-t border-white/30">
                {capitalUses.map((item, index) => (
                  <div key={item} className="flex items-center gap-4 border-b border-white/25 py-4">
                    <span className="font-heading text-xs font-bold text-orange-100">0{index + 1}</span>
                    <p className="font-semibold">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-100/70 py-20 dark:border-white/10 dark:bg-white/[0.025] sm:py-28">
        <div className="site-container">
          <Reveal className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-burnt-orange">Leadership and governance</p>
            <h2 className="mt-4 text-4xl font-bold tracking-[-0.045em] sm:text-5xl">
              Built by leaders across operations, finance, and governance.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {leaders.map((leader, index) => (
              <Reveal key={leader.name} delay={index * 0.06}>
                <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-white/10 dark:bg-[#0b1528]">
                  <div className="relative aspect-[4/4.5] overflow-hidden bg-slate-200 dark:bg-white/5">
                    <Image
                      src={leader.image}
                      alt={`${leader.name}, ${leader.role} at Adesa Energy`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover object-top grayscale transition duration-500 group-hover:scale-[1.03] group-hover:grayscale-0"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading text-lg font-bold">{leader.name}</h3>
                    <p className="mt-1 text-sm font-semibold text-burnt-orange">{leader.role}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#07111f] py-20 text-white sm:py-24">
        <div className="absolute inset-0 investor-grid opacity-60" />
        <Reveal className="site-container relative flex flex-col justify-between gap-10 lg:flex-row lg:items-center">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-bold leading-tight tracking-[-0.045em] sm:text-5xl">{cta.title}</h2>
            <p className="mt-5 max-w-2xl leading-7 text-slate-300">{cta.description}</p>
          </div>
          <a
            href={cta.href}
            className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-burnt-orange px-6 py-3 font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#dc681c]"
          >
            {cta.label}
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </Reveal>
      </section>
    </div>
  );
}
