"use client";

import { motion } from "framer-motion";
import {
  FileText,
  AlertTriangle,
  CheckCircle,
  Ban,
  Scale,
  RefreshCw,
  Mail,
} from "lucide-react";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  show: { transition: { staggerChildren: 0.1 } },
};

const sections = [
  {
    icon: CheckCircle,
    color: "#59C6E5",
    title: "1. Acceptance of Terms",
    content: [
      "By accessing and using the Adesa Energy website (www.adesaenergy.com) or engaging our CNG conversion and refueling services, you agree to be bound by these Terms and Conditions.",
      "If you do not agree to these terms, please discontinue your use of our website and services immediately.",
      "These terms apply to all visitors, users, and customers who access or use our services.",
      "We reserve the right to update these terms at any time. Continued use of the site after changes constitutes acceptance of the updated terms.",
    ],
  },
  {
    icon: FileText,
    color: "#59C6E5",
    title: "2. Services Description",
    content: [
      "Adesa Energy provides mobile CNG (Compressed Natural Gas) vehicle conversion services and on-demand CNG refueling across Nigeria.",
      "Service availability, pricing, and coverage areas are subject to change without prior notice.",
      "Bookings for conversion or refueling services are subject to confirmation and scheduling availability.",
      "We reserve the right to decline or cancel any service request at our discretion, with appropriate notification.",
      "All CNG conversions are performed by certified technicians in compliance with Nigerian automotive standards.",
    ],
  },
  {
    icon: Scale,
    color: "#F37621",
    title: "3. User Responsibilities",
    content: [
      "You must provide accurate and complete information when registering or submitting service requests.",
      "You are responsible for ensuring your vehicle is eligible for CNG conversion before booking.",
      "You agree not to misuse our services or attempt to access restricted areas of our website.",
      "You must not use our services for any unlawful or fraudulent purposes.",
      "You are responsible for maintaining the confidentiality of any account credentials.",
    ],
  },
  {
    icon: AlertTriangle,
    color: "#F37621",
    title: "4. Liability & Disclaimers",
    content: [
      "Adesa Energy's liability for any claim arising from our services is limited to the amount paid for the specific service in question.",
      "We are not liable for any indirect, incidental, or consequential damages arising from the use of our services.",
      "CNG conversion warranties are subject to proper vehicle maintenance and compliance with our post-conversion guidelines.",
      "We do not guarantee uninterrupted or error-free operation of our website.",
      "Vehicle performance after CNG conversion may vary based on vehicle condition, driving habits, and gas quality.",
    ],
  },
  {
    icon: Ban,
    color: "#F37621",
    title: "5. Prohibited Activities",
    content: [
      "Attempting to hack, disrupt, or gain unauthorized access to our systems or data.",
      "Using our website to distribute spam, malware, or other harmful content.",
      "Reproducing, copying, or distributing our proprietary content without written permission.",
      "Impersonating Adesa Energy or our employees in any communication.",
      "Using automated bots or scrapers to extract data from our website.",
    ],
  },
  {
    icon: RefreshCw,
    color: "#59C6E5",
    title: "6. Cancellations & Refunds",
    content: [
      "Cancellations made at least 48 hours before a scheduled service appointment are eligible for a full refund.",
      "Cancellations within 24 hours of the appointment may incur a cancellation fee.",
      "Refunds for completed CNG conversions are subject to evaluation if a technical defect is identified.",
      "Refunds are processed within 5–10 business days via the original payment method.",
      "Contact us at adeinfo@adesahq.com or +2348168823730 to initiate a cancellation or refund request.",
    ],
  },
  {
    icon: Scale,
    color: "#59C6E5",
    title: "7. Governing Law",
    content: [
      "These Terms and Conditions are governed by and construed in accordance with the laws of the Federal Republic of Nigeria.",
      "Any disputes arising from these terms or our services shall be resolved through amicable negotiation first.",
      "If negotiation fails, disputes shall be referred to arbitration under the Arbitration and Conciliation Act of Nigeria.",
      "The courts of Lagos State, Nigeria shall have jurisdiction over any legal proceedings.",
    ],
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#0f0f0f]">
      {/* Hero */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#22244E] via-[#1a1c3d] to-[#0f0f0f] py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#F37621] rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[#59C6E5] rounded-full blur-3xl" />
        </div>
        <motion.div
          initial="hidden"
          animate="show"
          variants={stagger}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-6 text-sm text-[#F37621]"
          >
            <FileText className="w-4 h-4" />
            Legal &amp; Compliance
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-5xl font-bold text-white mb-4"
          >
            Terms &amp; Conditions
          </motion.h1>
          <motion.p variants={fadeUp} className="text-gray-400 text-lg">
            Last updated:{" "}
            <span className="text-[#F37621]">August 14, 2026</span>
          </motion.p>
          <motion.p
            variants={fadeUp}
            className="text-gray-300 mt-4 max-w-2xl mx-auto"
          >
            Please read these Terms and Conditions carefully before using our
            website or engaging Adesa Energy services. These terms form a legal
            agreement between you and Adesa Energy Limited.
          </motion.p>
        </motion.div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger}
          className="space-y-10"
        >
          {sections.map((section, i) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#F37621]/30 transition-colors"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${section.color}20` }}
                  >
                    <Icon
                      className="w-5 h-5"
                      style={{ color: section.color }}
                    />
                  </div>
                  <h2 className="text-xl font-semibold text-white">
                    {section.title}
                  </h2>
                </div>
                <ul className="space-y-3">
                  {section.content.map((item, j) => (
                    <li
                      key={j}
                      className="text-gray-400 leading-relaxed flex items-start gap-2"
                    >
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#F37621] flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}

          {/* Contact */}
          <motion.div
            variants={fadeUp}
            className="bg-gradient-to-br from-[#22244E]/60 to-[#0f0f0f] border border-[#59C6E5]/20 rounded-2xl p-8 text-center"
          >
            <Mail className="w-10 h-10 text-[#59C6E5] mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-white mb-2">
              Questions About Our Terms?
            </h2>
            <p className="text-gray-400 mb-4">
              Contact our legal team if you need clarification on any aspect of
              these Terms and Conditions.
            </p>
            <a
              href="mailto:adeinfo@adesahq.com"
              className="inline-flex items-center gap-2 bg-[#59C6E5] hover:bg-[#45afd1] text-[#0f0f0f] font-medium px-6 py-3 rounded-xl transition-colors"
            >
              <Mail className="w-4 h-4" />
              adeinfo@adesahq.com
            </a>
          </motion.div>

          {/* Related links */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap gap-3 justify-center pt-4"
          >
            <Link
              href="/privacy-policy"
              className="text-sm text-[#59C6E5] hover:text-white border border-white/10 hover:border-[#59C6E5]/40 px-4 py-2 rounded-lg transition-all"
            >
              Privacy Policy
            </Link>
            <Link
              href="/cookie-policy"
              className="text-sm text-[#59C6E5] hover:text-white border border-white/10 hover:border-[#59C6E5]/40 px-4 py-2 rounded-lg transition-all"
            >
              Cookie Policy
            </Link>
            <Link
              href="/accessibility"
              className="text-sm text-[#59C6E5] hover:text-white border border-white/10 hover:border-[#59C6E5]/40 px-4 py-2 rounded-lg transition-all"
            >
              Accessibility
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
