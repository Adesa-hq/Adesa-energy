"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-charcoal-gray px-4">
      <h1 className="text-5xl font-heading font-bold text-deep-blue dark:text-white mb-4">
        404
      </h1>
      <p className="text-gray-600 dark:text-gray-300 mb-8 text-center max-w-md">
        The page you are looking for does not exist or has been moved.
      </p>
      <button
        onClick={() => router.push("/blog")}
        className="inline-flex items-center px-6 py-3 rounded-full bg-burnt-orange text-white font-heading font-semibold hover:opacity-90 transition-opacity"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Blog
      </button>
    </div>
  );
}
