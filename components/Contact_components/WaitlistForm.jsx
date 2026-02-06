"use client";

import { Send, CheckCircle, XCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const WaitlistForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [submitMessage, setSubmitMessage] = useState("");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    vehicleType: "",
    location: "",
    vehicleYear: "",
    referralSource: "",
    numberOfVehicles: "",
    interestType: "",
    profileType: "",
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    setSubmitStatus(null);
    setSubmitMessage("");

    try {
      await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      setSubmitStatus("success");
      setSubmitMessage("You are on the waitlist");

      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        vehicleType: "",
        location: "",
        vehicleYear: "",
        referralSource: "",
        numberOfVehicles: "",
        interestType: "",
        profileType: "",
        consent: false,
      });

      setTimeout(() => {
        setSubmitStatus(null);
        setSubmitMessage("");
      }, 5000);
    } catch {
      setSubmitStatus("error");
      setSubmitMessage("Submission failed");

      setTimeout(() => {
        setSubmitStatus(null);
        setSubmitMessage("");
      }, 5000);
    } finally {
      setIsSubmitting(false);
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
        <h3 className="text-xl font-semibold mb-6">Join the waitlist</h3>

        <form
          onSubmit={handleSubmit}
          className={`space-y-6 ${isSubmitting ? "opacity-50 pointer-events-none" : ""}`}
        >
          <div className="grid md:grid-cols-2 gap-6">
            <input
              id="firstName"
              name="firstName"
              placeholder="First name"
              value={formData.firstName}
              onChange={handleChange}
              className={inputStyle}
              required
            />
            <input
              id="lastName"
              name="lastName"
              placeholder="Last name"
              value={formData.lastName}
              onChange={handleChange}
              className={inputStyle}
              required
            />
          </div>

          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="Phone number"
            value={formData.phone}
            onChange={handleChange}
            className={inputStyle}
            required
          />

          <div className="grid md:grid-cols-2 gap-6">
            <select
              name="vehicleType"
              value={formData.vehicleType}
              onChange={handleChange}
              className={inputStyle}
              required
            >
              <option value="">Vehicle type</option>
              <option>Keke</option>
              <option>Taxi</option>
              <option>Private Car</option>
              <option>Truck</option>
              <option>Bus</option>
              <option>Other</option>
            </select>

            <select
              name="location"
              value={formData.location}
              onChange={handleChange}
              className={inputStyle}
              required
            >
              <option value="">Location</option>
              <option>Mile 2 Oke — Lagos</option>
              <option>Sango — Ilorin</option>
              <option>Kubwa — Abuja</option>
            </select>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <select
              name="vehicleYear"
              value={formData.vehicleYear}
              onChange={handleChange}
              className={inputStyle}
              required
            >
              <option value="">Vehicle year</option>
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

            <input
              name="numberOfVehicles"
              type="number"
              placeholder="Number of cars"
              value={formData.numberOfVehicles}
              onChange={handleChange}
              className={inputStyle}
              required
            />
          </div>

          <select
            name="referralSource"
            value={formData.referralSource}
            onChange={handleChange}
            className={inputStyle}
            required
          >
            <option value="">How did you hear about us</option>
            <option>Radio</option>
            <option>Mechanic</option>
            <option>Social</option>
            <option>Union</option>
            <option>Referral</option>
            <option>Dealer</option>
            <option>Other</option>
          </select>

          <div className="grid md:grid-cols-2 gap-6">
            <select
              name="interestType"
              value={formData.interestType}
              onChange={handleChange}
              className={inputStyle}
              required
            >
              <option value="">Interest type</option>
              <option>Convert now</option>
              <option>Financing</option>
              <option>Info only (MCC)</option>
            </select>

            <select
              name="profileType"
              value={formData.profileType}
              onChange={handleChange}
              className={inputStyle}
              required
            >
              <option value="">Profile type</option>
              <option>Individual</option>
              <option>Organisation</option>
            </select>
          </div>

          <div className="flex items-start">
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              required
            />
            <p className="ml-2 text-sm">I agree to be contacted</p>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#F37621] text-white py-4 rounded-lg font-semibold flex items-center justify-center"
          >
            {isSubmitting ? "Submitting..." : "Join waitlist"}
            <Send className="w-5 h-5 ml-2" />
          </button>
        </form>

        <AnimatePresence>
          {submitStatus && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className={`mt-6 p-4 rounded-lg ${
                submitStatus === "success" ? "bg-green-600" : "bg-red-50"
              }`}
            >
              <div className="flex items-center">
                {submitStatus === "success" ? <CheckCircle /> : <XCircle />}
                <p className="ml-2 text-green-900">{submitMessage}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default WaitlistForm;
