import { ArrowLeft, Calendar, Clock3 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function BlogDetailClient({ currentPost }) {
  return (
    <article className="min-h-screen min-w-0 bg-white py-12 dark:bg-[#081126] sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-6 min-w-0 text-sm text-slate-500 dark:text-slate-400">
          <Link href="/blog" className="font-semibold transition-colors hover:text-burnt-orange">
            Blog
          </Link>
          <span aria-hidden="true"> / </span>
          <span className="break-words text-slate-700 dark:text-slate-200">
            {currentPost.title}
          </span>
        </nav>

        <header className="mb-8 sm:mb-10">
          <h1 className="max-w-3xl text-balance font-heading text-3xl font-bold leading-tight tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
            {currentPost.title}
          </h1>

          <div className="mt-5 flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400 sm:text-sm">
            <span className={`rounded-full px-3 py-1 font-semibold ${currentPost.tagStyle}`}>
              {currentPost.tag}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-4 w-4" aria-hidden="true" />
              {currentPost.date}
            </span>
            {currentPost.readingTime && (
              <span className="inline-flex items-center gap-1.5">
                <Clock3 className="h-4 w-4" aria-hidden="true" />
                {currentPost.readingTime}
              </span>
            )}
          </div>
        </header>

        <div className="relative mb-10 aspect-[16/9] overflow-hidden rounded-2xl bg-slate-900 shadow-xl sm:mb-12 sm:rounded-3xl">
          <Image
            src={currentPost.image}
            alt={currentPost.title}
            fill
            priority
            sizes="(max-width: 896px) 100vw, 896px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-slate-950/35 via-transparent to-transparent" />
        </div>

        <div className="max-w-3xl space-y-5 text-pretty text-base leading-8 text-slate-700 dark:text-slate-300 sm:text-lg">
          <p className="font-medium text-slate-800 dark:text-slate-200">
            {currentPost.excerpt}
          </p>
          {currentPost.content?.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-12 border-t border-slate-200 pt-8 dark:border-white/10 sm:mt-16">
          <Link
            href="/blog"
            className="touch-target inline-flex items-center gap-2 rounded-xl bg-burnt-orange px-5 py-3 font-heading text-sm font-semibold text-white transition-[background-color,transform] hover:bg-[#d15e15] active:scale-[0.98]"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to the newsroom
          </Link>
        </div>
      </div>
    </article>
  );
}
