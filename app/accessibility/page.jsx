"use client";

import { motion } from "framer-motion";
import {
  Accessibility,
  Eye,
  Keyboard,
  Volume2,
  Smartphone,
  HelpCircle,
  Mail,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  show: { transition: { staggerChildren: 0.1 } },
};

const features = [
  {
    icon: Eye,
    color: "#59C6E5",
    title: "Visual Accessibility",
    items: [
      "High contrast color schemes and dark/light mode toggle",
      "Text can be resized up to 200% without loss of content or functionality",
      "All images include descriptive alt text for screen readers",
      "Clear visual focus indicators for all interactive elements",
      "No content relies solely on color to convey information",
    ],
  },
  {
    icon: Keyboard,
    color: "#F37621",
    title: "Keyboard Navigation",
    items: [
      "Full keyboard navigation support throughout the site",
      "Logical tab order that follows visual page structure",
      "Skip navigation links to bypass repetitive content",
      "All interactive elements are reachable via keyboard",
      "No keyboard traps — users can always navigate away",
    ],
  },
  {
    icon: Volume2,
    color: "#59C6E5",
    title: "Screen Reader Support",
    items: [
      "ARIA landmarks to identify page regions (header, main, nav, footer)",
      "ARIA labels and descriptions for complex UI components",
      "Live region announcements for dynamic content updates",
      "Semantic HTML structure for proper reading order",
      "Form fields have associated labels and error descriptions",
    ],
  },
  {
    icon: Smartphone,
    color: "#F37621",
    title: "Mobile & Responsive",
    items: [
      "Fully responsive design across all screen sizes and orientations",
      "Touch targets meet minimum 44x44px size guidelines",
      "Pinch-to-zoom is not restricted on mobile devices",
      "Content reflows at 320px width without horizontal scrolling",
      "Animations respect the prefers-reduced-motion media query",
    ],
  },
];

const conformanceLevels = [
  { level: "A", status: "Conformant", color: "#22c55e" },
  { level: "AA", status: "Partially Conformant", color: "#F37621" },
  { level: "AAA", status: "In Progress", color: "#59C6E5" },
];

export default function AccessibilityPage() {
  return (
    <div className="min-h-screen bg-[#0f0f0f]">
      {/* Hero */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#22244E] via-[#1a1c3d] to-[#0f0f0f] py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-[#59C6E5] rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#F37621] rounded-full blur-3xl" />
        </div>
        <motion.div
          initial="hidden"
          animate="show"
          variants={stagger}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-6 text-sm text-[#59C6E5]"
          >
            <Accessibility className="w-4 h-4" />
            Inclusive Design
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-5xl font-bold text-white mb-4"
          >
            Accessibility Statement
          </motion.h1>
          <motion.p variants={fadeUp} className="text-gray-400 text-lg">
            Last updated:{" "}
            <span className="text-[#F37621]">August 14, 2026</span>
          </motion.p>
          <motion.p
            variants={fadeUp}
            className="text-gray-300 mt-4 max-w-2xl mx-auto"
          >
            Adesa Energy is committed to ensuring digital accessibility for all
            users, regardless of ability. We continually improve the user
            experience for everyone and apply the relevant accessibility
            standards.
          </motion.p>
        </motion.div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger}
          className="space-y-10"
        >
          {/* WCAG Conformance */}
          <motion.div
            variants={fadeUp}
            className="bg-white/5 border border-white/10 rounded-2xl p-8"
          >
            <h2 className="text-xl font-semibold text-white mb-2">
              WCAG 2.1 Conformance
            </h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Our website aims to conform to the Web Content Accessibility
              Guidelines (WCAG) 2.1. These guidelines explain how to make web
              content more accessible to people with disabilities.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {conformanceLevels.map((c, i) => (
                <div
                  key={i}
                  className="bg-white/5 border border-white/10 rounded-xl p-4 text-center"
                >
                  <div
                    className="text-3xl font-bold mb-1"
                    style={{ color: c.color }}
                  >
                    Level {c.level}
                  </div>
                  <div
                    className="text-sm font-medium"
                    style={{ color: c.color }}
                  >
                    {c.status}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Feature cards */}
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-colors"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${feature.color}20` }}
                  >
                    <Icon
                      className="w-5 h-5"
                      style={{ color: feature.color }}
                    />
                  </div>
                  <h2 className="text-xl font-semibold text-white">
                    {feature.title}
                  </h2>
                </div>
                <ul className="space-y-3">
                  {feature.items.map((item, j) => (
                    <li
                      key={j}
                      className="text-gray-400 leading-relaxed flex items-start gap-2"
                    >
                      <CheckCircle className="w-4 h-4 text-[#22c55e] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}

          {/* Known limitations */}
          <motion.div
            variants={fadeUp}
            className="bg-white/5 border border-white/10 rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-yellow-500/20 flex items-center justify-center">
                <HelpCircle className="w-5 h-5 text-yellow-400" />
              </div>
              <h2 className="text-xl font-semibold text-white">
                Known Limitations
              </h2>
            </div>
            <p className="text-gray-400 leading-relaxed mb-4">
              While we strive for full accessibility, some areas are still being
              improved:
            </p>
            <ul className="space-y-3">
              {[
                "Some older blog posts may not have fully optimized heading structures.",
                "Third-party embedded content (e.g., maps) may not fully conform to WCAG 2.1 AA.",
                "Some PDF documents linked from our resources page may not be fully accessible.",
              ].map((item, j) => (
                <li
                  key={j}
                  className="text-gray-400 leading-relaxed flex items-start gap-2"
                >
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-yellow-400 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-400 mt-4">
              We are actively working to address these issues in our ongoing
              development cycle.
            </p>
          </motion.div>

          {/* Feedback */}
          <motion.div
            variants={fadeUp}
            className="bg-gradient-to-br from-[#59C6E5]/10 to-[#22244E]/60 border border-[#59C6E5]/20 rounded-2xl p-8 text-center"
          >
            <Mail className="w-10 h-10 text-[#59C6E5] mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-white mb-2">
              Accessibility Feedback
            </h2>
            <p className="text-gray-400 mb-4 max-w-lg mx-auto">
              We welcome your feedback on the accessibility of our website. If
              you experience any barriers, please contact us and we will work to
              resolve the issue promptly.
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
              href="/terms"
              className="text-sm text-[#59C6E5] hover:text-white border border-white/10 hover:border-[#59C6E5]/40 px-4 py-2 rounded-lg transition-all"
            >
              Terms &amp; Conditions
            </Link>
            <Link
              href="/cookie-policy"
              className="text-sm text-[#59C6E5] hover:text-white border border-white/10 hover:border-[#59C6E5]/40 px-4 py-2 rounded-lg transition-all"
            >
              Cookie Policy
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
