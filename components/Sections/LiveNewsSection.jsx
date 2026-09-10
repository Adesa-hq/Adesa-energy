import { ArrowUpRight, Clock3, Radio, RefreshCw } from "lucide-react";
import Link from "next/link";

function formatPublishedAt(value) {
  return new Intl.DateTimeFormat("en-NG", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "Africa/Lagos",
  }).format(new Date(value));
}

export default function LiveNewsSection({
  articles = [],
  unavailable = false,
  variant = "page",
}) {
  const isHome = variant === "home";

  return (
    <section
      aria-labelledby={`live-news-title-${variant}`}
      className={`relative overflow-hidden bg-[#060b17] text-white ${
        isHome ? "py-16 sm:py-20 lg:py-24" : "py-12 sm:py-16"
      }`}
    >
      <div className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />
      <div className="site-container relative z-10">
        <div className="mb-8 flex flex-col gap-5 sm:mb-10 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-emerald-300">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Live Nigeria energy desk
            </div>
            <h2
              id={`live-news-title-${variant}`}
              className="text-balance font-heading text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
            >
              Energy and CNG news, as it happens
            </h2>
            <p className="max-w-2xl text-pretty text-sm leading-relaxed text-slate-300 sm:text-base">
              Current reporting on Nigeria&apos;s fuel market, natural gas,
              transport energy, and the shift to cleaner mobility.
            </p>
          </div>

          {isHome && (
            <Link
              href="/blog"
              className="touch-target inline-flex items-center gap-2 self-start font-heading text-sm font-bold text-amber-300 transition-colors hover:text-white md:self-auto"
            >
              Open the newsroom
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          )}
        </div>

        {articles.length > 0 ? (
          <div className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-3">
            {articles.map((article, index) => (
              <article
                key={article.id}
                className="group relative flex min-w-0 flex-col bg-[#0B1530] p-5 sm:p-6 lg:p-7"
              >
                <div className="mb-8 flex items-center justify-between gap-3 text-xs text-slate-400">
                  <span className="rounded-md bg-white/5 px-2.5 py-1 font-semibold text-sky-300">
                    {article.topic}
                  </span>
                  <span className="font-mono tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="text-pretty font-heading text-lg font-semibold leading-snug text-white sm:text-xl">
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring stretched-link transition-colors group-hover:text-amber-300"
                  >
                    {article.title}
                  </a>
                </h3>

                <div className="mt-auto flex flex-wrap items-center gap-x-3 gap-y-2 pt-8 text-xs text-slate-400">
                  <span className="max-w-[12rem] truncate font-semibold text-slate-300">
                    {article.source}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock3 className="h-3.5 w-3.5" aria-hidden="true" />
                    {formatPublishedAt(article.publishedAt)}
                  </span>
                  <ArrowUpRight
                    className="ml-auto h-4 w-4 text-amber-300 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-start gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 sm:flex-row sm:items-center sm:p-8">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-400/10 text-amber-300">
              {unavailable ? (
                <RefreshCw className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Radio className="h-5 w-5" aria-hidden="true" />
              )}
            </div>
            <div>
              <h3 className="font-heading text-lg font-semibold">
                {unavailable
                  ? "Live headlines are refreshing"
                  : "No new headlines in this update"}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-slate-300">
                Adesa insights remain available below. This live feed will try
                again automatically on the next refresh window.
              </p>
            </div>
          </div>
        )}

        <p className="mt-4 text-xs leading-relaxed text-slate-500">
          Headlines are aggregated from Google News and Bing News with clear
          publisher attribution. Adesa Energy does not reproduce or endorse
          third-party reporting.
        </p>
      </div>
    </section>
  );
}
