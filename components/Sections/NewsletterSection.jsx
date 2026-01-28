"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Check, X } from "lucide-react";
import { siteConfig } from "@/config/site";

const NewsletterSection = () => {
const newsletterConfig = siteConfig.newsletter;

const [email, setEmail] = useState("");
const [isSubmitting, setIsSubmitting] = useState(false);
const [submitStatus, setSubmitStatus] = useState(null);
const [message, setMessage] = useState("");

const { section, form, behavior } = newsletterConfig;

const handleSubmit = async (e) => {
  e.preventDefault();

  if (!email.trim()) {
    setSubmitStatus("error");
    setMessage("Email required");
    return;
  }

  setIsSubmitting(true);

  try {
    const res = await fetch("/api/newsletter", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();

    console.log("status:", res.status);
    console.log("response:", data);

    if (!res.ok) {
      setSubmitStatus("error");
      setMessage(data.message || "Subscription failed");
      return;
    }

    setSubmitStatus("success");
    setMessage(data.message || "Subscribed successfully");
    setEmail("");
  } catch (err) {
    setSubmitStatus("error");
    setMessage("Network error");
  } finally {
    setIsSubmitting(false);

    setTimeout(() => {
      setSubmitStatus(null);
      setMessage("");
    }, behavior.resetDelay);
  }
};



  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-20 bg-burnt-orange relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-grid-pattern"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-heading font-bold text-white mb-4"
          >
            {section.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-white/90 text-lg mb-8 font-sans"
          >
            {section.description}
          </motion.p>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto"
          >
            <div className="relative flex-1">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={form.placeholder}
                disabled={isSubmitting}
                aria-invalid={submitStatus === "error"}
                className={`w-full px-6 py-4 rounded-lg bg-white text-deep-blue placeholder:text-charcoal-gray focus:ring-2 focus:ring-deep-blue focus:outline-none transition border-2 ${
                  submitStatus === "error"
                    ? "border-red-500 animate-shake"
                    : "border-transparent"
                }`}
              />

              {submitStatus && (
                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                  {submitStatus === "success" ? (
                    <Check className="w-5 h-5 text-green-500" />
                  ) : (
                    <X className="w-5 h-5 text-red-500" />
                  )}
                </div>
              )}
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isSubmitting}
              className="bg-white text-burnt-orange font-heading font-semibold px-8 py-4 rounded-lg hover:bg-light-blue hover:text-white transition disabled:opacity-70 shadow-md"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="w-5 h-5 border-2 border-burnt-orange border-t-transparent rounded-full mr-2"
                  />
                  {form.loadingText}
                </span>
              ) : (
                form.buttonText
              )}
            </motion.button>
          </motion.form>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-white/70 text-sm mt-4 font-sans"
          >
            {section.footerNote}
          </motion.p>

          {submitStatus && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mt-4 p-3 rounded-lg ${
                submitStatus === "success"
                  ? "bg-green-500/20 border border-green-500 text-green-200"
                  : "bg-red-500/20 border border-red-500 text-red-200"
              }`}
            >
              {submitStatus === "success" ? message : message}
            </motion.div>
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default NewsletterSection;
