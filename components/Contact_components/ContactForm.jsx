"use client";

import { Send, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { siteConfig } from "@/config/site";

const ContactForm = () => {
  const { form } = siteConfig.contact;

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    consent: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsFormSubmitted(true);

    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        consent: false,
      });
    }, 3000);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="lg:col-span-2">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-white dark:bg-[#2E302C] rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-gray-800"
      >
        <h3 className="text-xl font-semibold text-[#22244E] dark:text-white mb-6 font-montserrat">
          {form.title}
        </h3>

        <form
          onSubmit={handleSubmit}
          className={`space-y-6 ${
            isFormSubmitted ? "opacity-50 pointer-events-none" : ""
          }`}
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              {" "}
              <label
                htmlFor="contactName"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 font-inter"
              >
                {form.fields.name.label}
              </label>{" "}
              <input
                type="text"
                id="contactName"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-[#F37621] focus:border-[#F37621] transition bg-white dark:bg-[#242622] text-gray-900 dark:text-white"
              />{" "}
            </div>

            <div>
              <label
                htmlFor="contactEmail"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 font-inter"
              >
                {form.fields.email.label}
              </label>
              <input
                id="contactEmail"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder={form.fields.email.placeholder}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-[#F37621] focus:border-[#F37621] transition bg-white dark:bg-[#242622] text-gray-900 dark:text-white"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="contactPhoneNumber"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 font-inter"
              >
                {form.fields.phone.label}
              </label>
              <input
                type="tel"
                name="phone"
                id="contactPhoneNumber"
                value={formData.phone}
                onChange={handleChange}
                placeholder={form.fields.phone.placeholder}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-[#F37621] focus:border-[#F37621] transition bg-white dark:bg-[#242622] text-gray-900 dark:text-white"
              />
            </div>

            <div>
              <label
                htmlFor="contactSubject"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 font-inter"
              >
                {form.fields.subject.label}
              </label>
              <select
                name="subject"
                id="contactSubject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-[#F37621] focus:border-[#F37621] transition bg-white dark:bg-[#242622] text-gray-900 dark:text-white"
              >
                <option value="">Select a subject</option>
                {form.fields.subject.options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label
              htmlFor="contactMessage"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 font-inter"
            >
              {form.fields.message.label}
            </label>
            <textarea
              name="message"
              id="contactMessage"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              placeholder={form.fields.message.placeholder}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-[#F37621] focus:border-[#F37621] transition bg-white dark:bg-[#242622] text-gray-900 dark:text-white"
            />
          </div>

          <div className="flex items-start">
            <input
              type="checkbox"
              id="contactConsent"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              required
              className="mt-1"
            />
            <label
              htmlFor="contactConsent"
              className="ml-2 text-sm text-gray-600 dark:text-gray-300 font-inter"
            >
              {form.fields.consent}{" "}
              <span className="text-[#F37621] hover:underline cursor-pointer">
                {form.fields.consentLink}
              </span>
            </label>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isFormSubmitted}
            className="w-full bg-[#F37621] text-white py-4 rounded-lg font-semibold text-lg flex items-center justify-center disabled:opacity-50 font-inter"
          >
            {form.submitText}
            <Send className="w-5 h-5 ml-2" />
          </motion.button>
        </form>
        
        <AnimatePresence>
          {isFormSubmitted && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg"
            >
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mr-2 shrink-0" />{" "}
                <p className="text-green-700 dark:text-green-300 font-inter">
                  {form.successMessage}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default ContactForm;
