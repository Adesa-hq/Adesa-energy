"use client";

import { Send, CheckCircle, XCircle, ChevronDown, Mail, Phone, MapPin, Clock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { siteConfig } from "@/config/site";
import Link from "next/link";

const contactSchema = z.object({
  name: z.string().min(1, "Full name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional().or(z.literal("")),
  subject: z.string().min(1, "Please select or enter a subject"),
  message: z.string().min(5, "Message must be at least 5 characters"),
  consent: z.boolean().refine((val) => val === true, "Consent is required to proceed"),
});

const ContactForm = () => {
  const { form } = siteConfig.contact;

  const [submitStatus, setSubmitStatus] = useState(null);
  const [submitMessage, setSubmitMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      consent: false,
      subject: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok || result.status === "error") {
        setSubmitStatus("error");
        setSubmitMessage(result.message || "Failed to send message. Please try again.");
      } else {
        setSubmitStatus("success");
        setSubmitMessage(result.message || form.successMessage);
        reset();
      }

      setTimeout(() => {
        setSubmitStatus(null);
        setSubmitMessage("");
      }, 7000);
    } catch {
      setSubmitStatus("error");
      setSubmitMessage("Network connection error. Please try again.");

      setTimeout(() => {
        setSubmitStatus(null);
        setSubmitMessage("");
      }, 6000);
    }
  };

  const inputStyle =
    "w-full px-4 py-3 bg-slate-50 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-burnt-orange focus:border-burnt-orange transition text-sm font-sans text-slate-900 dark:text-white placeholder:text-slate-400";

  return (
    <div className="lg:col-span-2">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-white dark:bg-[#0E1A38] rounded-3xl p-7 sm:p-10 border border-slate-200/80 dark:border-white/10 shadow-sm"
      >
        <div className="mb-8 pb-6 border-b border-slate-100 dark:border-white/10">
          <h3 className="text-2xl font-heading font-bold text-slate-900 dark:text-white">
            {form.title}
          </h3>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans mt-1">
            Fill out the form below and our team will get back to you promptly.
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className={`space-y-5 ${isSubmitting ? "opacity-50 pointer-events-none" : ""}`}
        >
          {/* Name & Email */}
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-heading font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5">
                Full Name *
              </label>
              <input
                type="text"
                placeholder={form.fields.name.placeholder}
                {...register("name")}
                className={inputStyle}
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1 font-medium">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-xs font-heading font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5">
                Email Address *
              </label>
              <input
                type="email"
                placeholder={form.fields.email.placeholder}
                {...register("email")}
                className={inputStyle}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1 font-medium">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          {/* Phone & Subject */}
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-heading font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5">
                Phone Number (Optional)
              </label>
              <input
                type="tel"
                placeholder={form.fields.phone.placeholder}
                {...register("phone")}
                className={inputStyle}
              />
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1 font-medium">
                  {errors.phone.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-xs font-heading font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5">
                Subject *
              </label>
              <div className="relative">
                <select {...register("subject")} className={`${inputStyle} pr-10 appearance-none cursor-pointer`}>
                  <option value="" className="bg-white dark:bg-[#0E1A38] text-slate-900 dark:text-white">
                    -- Select Subject --
                  </option>
                  {form.fields.subject.options.map((opt) => (
                    <option key={opt.value} value={opt.value} className="bg-white dark:bg-[#0E1A38] text-slate-900 dark:text-white">
                      {opt.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
              {errors.subject && (
                <p className="text-red-500 text-xs mt-1 font-medium">
                  {errors.subject.message}
                </p>
              )}
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-xs font-heading font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5">
              Your Message *
            </label>
            <textarea
              rows="5"
              placeholder={form.fields.message.placeholder}
              {...register("message")}
              className={`${inputStyle} resize-y min-h-[120px]`}
            />
            {errors.message && (
              <p className="text-red-500 text-xs mt-1 font-medium">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Consent Checkbox */}
          <div className="flex items-start gap-2.5 pt-2">
            <input
              id="contact-consent"
              type="checkbox"
              {...register("consent")}
              className="mt-1 w-4 h-4 rounded text-burnt-orange focus:ring-burnt-orange accent-burnt-orange cursor-pointer"
            />
            <label
              htmlFor="contact-consent"
              className="text-xs text-slate-600 dark:text-slate-300 font-sans leading-relaxed cursor-pointer"
            >
              {form.fields.consent}{" "}
              <Link href="/privacy-policy" className="text-burnt-orange hover:underline font-semibold">
                {form.fields.consentLink}
              </Link>
            </label>
          </div>
          {errors.consent && (
            <p className="text-red-500 text-xs font-medium">
              {errors.consent.message}
            </p>
          )}

          {/* Submit CTA */}
          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-linear-to-r from-[#F37621] to-[#F59E0B] text-white py-4 rounded-xl font-heading font-bold text-sm shadow-md hover:shadow-orange-500/30 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <span>Sending Message...</span>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              </span>
            ) : (
              <>
                <span>{form.submitText}</span>
                <Send className="w-4 h-4" />
              </>
            )}
          </motion.button>
        </form>

        <AnimatePresence>
          {submitStatus && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className={`mt-6 p-4 rounded-2xl flex items-center gap-3 text-sm font-medium ${
                submitStatus === "success"
                  ? "bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400"
                  : "bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400"
              }`}
            >
              {submitStatus === "success" ? (
                <CheckCircle className="w-5 h-5 shrink-0" />
              ) : (
                <XCircle className="w-5 h-5 shrink-0" />
              )}
              <p>{submitMessage}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default ContactForm;
