"use client";

import { Send, CheckCircle, XCircle, ChevronDown, ShieldCheck, Flame, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { siteConfig } from "@/config/site";
import Link from "next/link";

const nigeriaPhoneRegex = /^(?:0|\+234)[789][01]\d{8}$/;

const convertSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  phone: z
    .string()
    .regex(nigeriaPhoneRegex, "Enter a valid Nigerian phone number (e.g. 08012345678 or +2348012345678)"),
  email: z.string().email("Enter a valid email").optional().or(z.literal("")),
  vehicleType: z.string().min(1, "Please select your vehicle type"),
  location: z.string().min(1, "Please select your preferred conversion centre"),
  vehicleYear: z
    .string()
    .refine(
      (val) => Number(val) >= 1990 && Number(val) <= new Date().getFullYear(),
      {
        message: "Enter a valid vehicle year (1990 to present)",
      },
    ),
  referralSource: z.string().min(1, "Please tell us how you heard about us"),
  numberOfVehicles: z.number().min(1, "Number of vehicles must be at least 1"),
  interestType: z.string().min(1, "Please select an interest category"),
  profileType: z.string().min(1, "Please select a profile type"),
  consent: z.boolean().refine((val) => val === true, "Consent is required to proceed"),
});

const ConvertForm = () => {
  const { form } = siteConfig.convert;

  const [submitStatus, setSubmitStatus] = useState(null);
  const [submitMessage, setSubmitMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(convertSchema),
    defaultValues: {
      numberOfVehicles: 1,
      profileType: "Individual",
      interestType: "Convert now (Self-funded)",
    },
  });

  const onSubmit = async (data) => {
    try {
      const res = await fetch("/api/convert", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok || result.success === false) {
        setSubmitStatus("error");
        setSubmitMessage(result.error || "Submission failed. Please try again.");
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
        className="bg-white dark:bg-[#0E1A38] rounded-3xl p-7 sm:p-10 border border-slate-200/80 dark:border-white/10 shadow-sm relative overflow-hidden"
      >
        {/* Subtle accent tag */}
        <div className="flex items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-100 dark:border-white/10">
          <div>
            <h3 className="text-2xl font-heading font-bold text-slate-900 dark:text-white">
              {form.title}
            </h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-sans mt-1">
              Book your priority slot with certified engineers across Lagos, Ilorin, or Abuja.
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold shrink-0">
            <ShieldCheck className="w-4 h-4" />
            <span>Certified Kit</span>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className={`space-y-5 ${isSubmitting ? "opacity-50 pointer-events-none" : ""}`}
        >
          {/* First & Last Name */}
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-heading font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5">
                First Name *
              </label>
              <input
                placeholder={form.fields.firstName.placeholder}
                {...register("firstName")}
                className={inputStyle}
              />
              {errors.firstName && (
                <p className="text-red-500 text-xs mt-1 font-medium">
                  {errors.firstName.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-xs font-heading font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5">
                Last Name *
              </label>
              <input
                placeholder={form.fields.lastName.placeholder}
                {...register("lastName")}
                className={inputStyle}
              />
              {errors.lastName && (
                <p className="text-red-500 text-xs mt-1 font-medium">
                  {errors.lastName.message}
                </p>
              )}
            </div>
          </div>

          {/* Phone & Optional Email */}
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-heading font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5">
                Phone Number *
              </label>
              <input
                placeholder={form.fields.phone.placeholder}
                {...register("phone")}
                className={inputStyle}
              />
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1 font-medium">{errors.phone.message}</p>
              )}
            </div>

            <div>
              <label className="block text-xs font-heading font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5">
                Email Address (Optional)
              </label>
              <input
                type="email"
                placeholder={form.fields.email.placeholder}
                {...register("email")}
                className={inputStyle}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1 font-medium">{errors.email.message}</p>
              )}
            </div>
          </div>

          {/* Vehicle Type & Preferred Location */}
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-heading font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5">
                Vehicle Type *
              </label>
              <div className="relative">
                <select {...register("vehicleType")} className={`${inputStyle} pr-10 appearance-none cursor-pointer`}>
                  <option value="" className="bg-white dark:bg-[#0E1A38] text-slate-900 dark:text-white">
                    -- Select Vehicle Type --
                  </option>
                  {form.fields.vehicleType.options.map((opt) => (
                    <option key={opt.value} value={opt.value} className="bg-white dark:bg-[#0E1A38] text-slate-900 dark:text-white">
                      {opt.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
              {errors.vehicleType && (
                <p className="text-red-500 text-xs mt-1 font-medium">
                  {errors.vehicleType.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-xs font-heading font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5">
                Preferred Operational Centre *
              </label>
              <div className="relative">
                <select {...register("location")} className={`${inputStyle} pr-10 appearance-none cursor-pointer`}>
                  <option value="" className="bg-white dark:bg-[#0E1A38] text-slate-900 dark:text-white">
                    -- Select Centre / Location --
                  </option>
                  {form.fields.location.options.map((opt) => (
                    <option key={opt.value} value={opt.value} className="bg-white dark:bg-[#0E1A38] text-slate-900 dark:text-white">
                      {opt.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
              {errors.location && (
                <p className="text-red-500 text-xs mt-1 font-medium">
                  {errors.location.message}
                </p>
              )}
            </div>
          </div>

          {/* Vehicle Year & Number of Vehicles */}
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-heading font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5">
                Vehicle Year *
              </label>
              <div className="relative">
                <select {...register("vehicleYear")} className={`${inputStyle} pr-10 appearance-none cursor-pointer`}>
                  <option value="" className="bg-white dark:bg-[#0E1A38] text-slate-900 dark:text-white">
                    -- Select Year --
                  </option>
                  {Array.from(
                    { length: new Date().getFullYear() - 1989 },
                    (_, i) => {
                      const year = new Date().getFullYear() - i;
                      return (
                        <option key={year} value={year} className="bg-white dark:bg-[#0E1A38] text-slate-900 dark:text-white">
                          {year}
                        </option>
                      );
                    },
                  )}
                </select>
                <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
              {errors.vehicleYear && (
                <p className="text-red-500 text-xs mt-1 font-medium">
                  {errors.vehicleYear.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-xs font-heading font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5">
                Number of Vehicles *
              </label>
              <input
                type="number"
                min="1"
                placeholder={form.fields.numberOfVehicles.placeholder}
                {...register("numberOfVehicles", { valueAsNumber: true })}
                className={inputStyle}
              />
              {errors.numberOfVehicles && (
                <p className="text-red-500 text-xs mt-1 font-medium">
                  {errors.numberOfVehicles.message}
                </p>
              )}
            </div>
          </div>

          {/* Referral Source */}
          <div>
            <label className="block text-xs font-heading font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5">
              How Did You Hear About Us? *
            </label>
            <div className="relative">
              <select {...register("referralSource")} className={`${inputStyle} pr-10 appearance-none cursor-pointer`}>
                <option value="" className="bg-white dark:bg-[#0E1A38] text-slate-900 dark:text-white">
                  -- Select Referral Source --
                </option>
                {form.fields.referralSource.options.map((opt) => (
                  <option key={opt.value} value={opt.value} className="bg-white dark:bg-[#0E1A38] text-slate-900 dark:text-white">
                    {opt.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
            {errors.referralSource && (
              <p className="text-red-500 text-xs mt-1 font-medium">
                {errors.referralSource.message}
              </p>
            )}
          </div>

          {/* Interest & Profile Type */}
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-heading font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5">
                Interest Category *
              </label>
              <div className="relative">
                <select {...register("interestType")} className={`${inputStyle} pr-10 appearance-none cursor-pointer`}>
                  {form.fields.interestType.options.map((opt) => (
                    <option key={opt.value} value={opt.value} className="bg-white dark:bg-[#0E1A38] text-slate-900 dark:text-white">
                      {opt.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
              {errors.interestType && (
                <p className="text-red-500 text-xs mt-1 font-medium">
                  {errors.interestType.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-xs font-heading font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5">
                Profile Type *
              </label>
              <div className="relative">
                <select {...register("profileType")} className={`${inputStyle} pr-10 appearance-none cursor-pointer`}>
                  {form.fields.profileType.options.map((opt) => (
                    <option key={opt.value} value={opt.value} className="bg-white dark:bg-[#0E1A38] text-slate-900 dark:text-white">
                      {opt.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
              {errors.profileType && (
                <p className="text-red-500 text-xs mt-1 font-medium">
                  {errors.profileType.message}
                </p>
              )}
            </div>
          </div>

          {/* Consent Checkbox */}
          <div className="flex items-start gap-2.5 pt-2">
            <input
              id="convert-consent"
              type="checkbox"
              {...register("consent")}
              className="mt-1 w-4 h-4 rounded text-burnt-orange focus:ring-burnt-orange accent-burnt-orange cursor-pointer"
            />
            <label
              htmlFor="convert-consent"
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
                <span>Processing Your Request...</span>
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

export default ConvertForm;
