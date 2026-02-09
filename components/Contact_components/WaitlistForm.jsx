"use client";

import { Send, CheckCircle, XCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { siteConfig } from "@/config/site";

// Regex for valid Nigerian number: starts with 0 or +234, followed by 10 digits
const nigeriaPhoneRegex = /^(?:0|\+234)[789][01]\d{8}$/;

const waitlistSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  phone: z.string().regex(nigeriaPhoneRegex, "Invalid Nigerian phone number"),
  vehicleType: z.string().min(1, "Vehicle type is required"),
  location: z.string().min(1, "Location is required"),
  vehicleYear: z
    .string()
    .refine(
      (val) => Number(val) >= 1990 && Number(val) <= new Date().getFullYear(),
      {
        message: "Enter a valid vehicle year",
      },
    ),
  referralSource: z.string().min(1, "Referral source is required"),
  numberOfVehicles: z.number().min(1, "Number of vehicles is required"),
  interestType: z.string().min(1, "Interest type is required"),
  profileType: z.string().min(1, "Profile type is required"),
  consent: z.boolean().refine((val) => val === true, "Consent is required"),
});

const WaitlistForm = () => {
  const { form } = siteConfig.waitlist;

  const [submitStatus, setSubmitStatus] = useState(null);
  const [submitMessage, setSubmitMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(waitlistSchema),
  });

  const onSubmit = async (data) => {
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok || result.success === false) {
        setSubmitStatus("error");
        setSubmitMessage(result.error || "Submission failed");
      } else {
        setSubmitStatus("success");
        setSubmitMessage(form.successMessage);
        reset();
      }

      setTimeout(() => {
        setSubmitStatus(null);
        setSubmitMessage("");
      }, 5000);
    } catch {
      setSubmitStatus("error");
      setSubmitMessage("Network error");

      setTimeout(() => {
        setSubmitStatus(null);
        setSubmitMessage("");
      }, 5000);
    }
  };

  const inputStyle =
    "w-full px-4 py-3 rounded-lg bg-charcoal-gray focus:ring-2 focus:ring-[#F37621] focus:border-[#F37621]";

  return (
    <div className="lg:col-span-2">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-white dark:bg-[#2E302C] rounded-2xl p-8 shadow-sm"
      >
        <h3 className="text-xl font-semibold mb-6">{form.title}</h3>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className={`space-y-6 ${isSubmitting ? "opacity-50 pointer-events-none" : ""}`}
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <input
                placeholder={form.fields.firstName.placeholder}
                {...register("firstName")}
                className={inputStyle}
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm">
                  {errors.firstName.message}
                </p>
              )}
            </div>
            <div>
              <input
                placeholder={form.fields.lastName.placeholder}
                {...register("lastName")}
                className={inputStyle}
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm">
                  {errors.lastName.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <input
              placeholder={form.fields.phone.placeholder}
              {...register("phone")}
              className={inputStyle}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone.message}</p>
            )}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <select {...register("vehicleType")} className={inputStyle}>
                <option value="">{form.fields.vehicleType.label}</option>
                {form.fields.vehicleType.options.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              {errors.vehicleType && (
                <p className="text-red-500 text-sm">
                  {errors.vehicleType.message}
                </p>
              )}
            </div>

            <div>
              <select {...register("location")} className={inputStyle}>
                <option value="">{form.fields.location.label}</option>
                {form.fields.location.options.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              {errors.location && (
                <p className="text-red-500 text-sm">
                  {errors.location.message}
                </p>
              )}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <select {...register("vehicleYear")} className={inputStyle}>
                <option value="">{form.fields.vehicleYear.label}</option>
                {Array.from(
                  { length: new Date().getFullYear() - 1989 },
                  (_, i) => {
                    const year = new Date().getFullYear() - i;
                    return (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    );
                  },
                )}
              </select>
              {errors.vehicleYear && (
                <p className="text-red-500 text-sm">
                  {errors.vehicleYear.message}
                </p>
              )}
            </div>

            <div>
              <input
                type="number"
                placeholder={form.fields.numberOfVehicles.placeholder}
                {...register("numberOfVehicles", { valueAsNumber: true })}
                className={inputStyle}
              />
              {errors.numberOfVehicles && (
                <p className="text-red-500 text-sm">
                  {errors.numberOfVehicles.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <select {...register("referralSource")} className={inputStyle}>
              <option value="">{form.fields.referralSource.label}</option>
              {form.fields.referralSource.options.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            {errors.referralSource && (
              <p className="text-red-500 text-sm">
                {errors.referralSource.message}
              </p>
            )}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <select {...register("interestType")} className={inputStyle}>
                <option value="">{form.fields.interestType.label}</option>
                {form.fields.interestType.options.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              {errors.interestType && (
                <p className="text-red-500 text-sm">
                  {errors.interestType.message}
                </p>
              )}
            </div>

            <div>
              <select {...register("profileType")} className={inputStyle}>
                <option value="">{form.fields.profileType.label}</option>
                {form.fields.profileType.options.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              {errors.profileType && (
                <p className="text-red-500 text-sm">
                  {errors.profileType.message}
                </p>
              )}
            </div>
          </div>

          <div className="flex items-start">
            <input type="checkbox" {...register("consent")} />
            <p className="ml-2 text-sm">{form.fields.consent}</p>
            {errors.consent && (
              <p className="text-red-500 text-sm">{errors.consent.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#F37621] text-white py-4 rounded-lg font-semibold flex items-center justify-center"
          >
            {isSubmitting ? "Submitting..." : form.submitText}
            <Send className="w-5 h-5 ml-2" />
          </button>
        </form>

        <AnimatePresence>
          {submitStatus && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className={`mt-6 p-4 rounded-lg ${submitStatus === "success" ? "bg-green-600" : "bg-red-50"}`}
            >
              <div className="flex items-center">
                {submitStatus === "success" ? <CheckCircle /> : <XCircle />}
                <p className="ml-2">{submitMessage}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default WaitlistForm;
