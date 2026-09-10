"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  BriefcaseBusiness,
  CalendarDays,
  Clock3,
  GraduationCap,
  HeartPulse,
  MapPin,
  ShieldCheck,
  UsersRound,
} from "lucide-react";
import { siteConfig } from "@/config/site";

const benefitIcons = [HeartPulse, GraduationCap, CalendarDays, UsersRound];

function Reveal({ children, className = "", delay = 0 }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function CareerSection() {
  const { hero, about, jobs, benefits, principles, hiringSteps, cta } =
    siteConfig.careers;

  return (
    <div className="w-full min-w-0 overflow-hidden bg-background text-foreground">
      <section className="relative isolate overflow-hidden bg-[#07111f] text-white">
        <div className="absolute inset-0 bg-grid-pattern opacity-70" />
        <div className="absolute -left-24 top-28 h-2 w-[34rem] rotate-[-18deg] bg-burnt-orange/80 blur-[1px]" />
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-light-blue/10 blur-[110px]" />

        <div className="site-container relative grid min-h-[720px] min-w-0 grid-cols-1 items-center gap-12 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
          <motion.div
            initial={false}
            className="relative z-10 min-w-0 max-w-3xl"
          >
            <p className="mb-6 text-sm font-bold uppercase tracking-[0.24em] text-burnt-orange">
              {hero.eyebrow}
            </p>
            <h1 className="max-w-3xl text-5xl font-bold leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-7xl xl:text-[5.4rem]">
              {hero.title}
            </h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
              {hero.subtitle}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href={hero.primaryCTA.href}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-burnt-orange px-6 py-3 font-semibold text-white shadow-lg shadow-orange-950/30 transition hover:-translate-y-0.5 hover:bg-[#dc681c] active:translate-y-0"
              >
                {hero.primaryCTA.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
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
            className="career-image-frame relative min-h-[390px] min-w-0 overflow-hidden border border-white/15 bg-white shadow-2xl shadow-black/40 sm:min-h-[500px]"
          >
            <Image
              src={hero.image}
              alt="Adesa Energy branded workwear for field and technical teams"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 46vw"
              className="object-cover object-center transition duration-700 hover:scale-[1.025]"
            />
            <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-[#07111f] via-[#07111f]/30 to-transparent p-7 pt-24">
              <p className="max-w-xs text-sm font-semibold leading-6 text-white">
                Field-ready teams. Technology-enabled operations. One shared mission.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="site-container">
          <Reveal className="grid min-w-0 grid-cols-1 gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-burnt-orange">
                Why Adesa
              </p>
              <h2 className="mt-4 text-4xl font-bold leading-tight tracking-[-0.04em] sm:text-5xl">
                {about.title}
              </h2>
            </div>
            <div className="lg:pt-10">
              <p className="max-w-2xl text-xl leading-8 text-slate-600 dark:text-slate-300">
                {about.subtitle}
              </p>
              <div className="mt-10 grid gap-8 border-t border-slate-200 pt-8 dark:border-white/10 sm:grid-cols-3">
                {about.features.map((feature, index) => (
                  <div key={feature.title}>
                    <span className="font-heading text-sm font-bold text-burnt-orange">
                      0{index + 1}
                    </span>
                    <h3 className="mt-3 text-lg font-bold">{feature.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#0b1528] py-20 text-white sm:py-28">
        <div className="site-container grid min-w-0 grid-cols-1 gap-14 lg:grid-cols-[0.82fr_1.18fr]">
          <Reveal>
            <ShieldCheck className="h-10 w-10 text-burnt-orange" />
            <h2 className="mt-6 text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
              How we work when the work matters.
            </h2>
            <p className="mt-5 max-w-md leading-7 text-slate-300">
              Our principles turn ambition into dependable service for every customer and community we serve.
            </p>
          </Reveal>
          <div className="grid gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2">
            {principles.map((principle, index) => (
              <Reveal
                key={principle.title}
                delay={index * 0.06}
                className="bg-[#0d1b31] p-7 sm:p-9"
              >
                <span className="font-heading text-sm font-bold text-burnt-orange">
                  0{index + 1}
                </span>
                <h3 className="mt-8 text-xl font-bold">{principle.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {principle.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="site-container">
          <Reveal className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-burnt-orange">
              Built for your best work
            </p>
            <h2 className="mt-4 text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
              Support that extends beyond the job title.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => {
              const Icon = benefitIcons[index] ?? BriefcaseBusiness;
              return (
                <Reveal key={benefit.title} delay={index * 0.06}>
                  <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-burnt-orange/40 dark:border-white/10 dark:bg-white/[0.035]">
                    <Icon className="h-7 w-7 text-burnt-orange" />
                    <h3 className="mt-8 text-lg font-bold">{benefit.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                      {benefit.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-100/70 py-20 dark:border-white/10 dark:bg-white/[0.025] sm:py-24">
        <div className="site-container">
          <Reveal className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-burnt-orange">
                What to expect
              </p>
              <h2 className="mt-4 text-4xl font-bold tracking-[-0.04em]">
                A clear, human hiring process.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-slate-600 dark:text-slate-400">
              We keep every stage focused and communicate what comes next.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-8 md:grid-cols-4">
            {hiringSteps.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.06} className="relative">
                <div className="mb-5 flex items-center gap-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-burnt-orange font-heading text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  {index < hiringSteps.length - 1 && (
                    <span className="hidden h-px flex-1 bg-slate-300 dark:bg-white/15 md:block" />
                  )}
                </div>
                <h3 className="text-lg font-bold">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  {step.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="jobs" className="scroll-mt-28 py-20 sm:py-28">
        <div className="site-container">
          <Reveal className="grid min-w-0 grid-cols-1 gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-burnt-orange">
                Open roles
              </p>
              <h2 className="mt-4 text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
                {jobs.title}
              </h2>
            </div>
            <p className="max-w-2xl text-slate-600 dark:text-slate-400 lg:justify-self-end">
              {jobs.subtitle}
            </p>
          </Reveal>

          <div className="mt-12 border-t border-slate-200 dark:border-white/10">
            {jobs.jobListings.map((job, index) => (
              <Reveal key={job.id} delay={index * 0.05}>
                <article id={job.slug} className="group grid scroll-mt-28 gap-6 border-b border-slate-200 py-8 transition-colors hover:bg-slate-100/70 dark:border-white/10 dark:hover:bg-white/[0.025] md:grid-cols-[1.1fr_1fr_auto] md:items-center md:px-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-burnt-orange">
                      {job.department}
                    </p>
                    <h3 className="mt-2 text-2xl font-bold">{job.title}</h3>
                    <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600 dark:text-slate-400">
                      {job.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-300">
                    <span className="inline-flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-burnt-orange" />
                      {job.location}
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <Clock3 className="h-4 w-4 text-burnt-orange" />
                      {job.type}
                    </span>
                  </div>
                  <a
                    href={job.href}
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-slate-300 px-5 py-2.5 font-semibold transition group-hover:border-burnt-orange group-hover:bg-burnt-orange group-hover:text-white dark:border-white/20"
                    aria-label={`Apply for ${job.title}`}
                  >
                    Apply for this role
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-burnt-orange py-16 text-white sm:py-20">
        <Reveal className="site-container flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-[-0.035em] sm:text-4xl">
              {cta.title}
            </h2>
            <p className="mt-4 leading-7 text-orange-50">{cta.subtitle}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={cta.primaryCTA.href}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 font-bold text-[#9a430f] transition hover:-translate-y-0.5 hover:bg-orange-50"
            >
              {cta.primaryCTA.label}
              <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              href={cta.secondaryCTA.href}
              className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/50 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              {cta.secondaryCTA.label}
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
