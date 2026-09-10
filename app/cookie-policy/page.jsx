"use client";

import { motion } from "framer-motion";
import { Cookie, Settings, BarChart2, Target, Shield, Mail } from "lucide-react";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  show: { transition: { staggerChildren: 0.1 } },
};

const cookieTypes = [
  {
    icon: Settings,
    color: "#59C6E5",
    name: "Essential Cookies",
    badge: "Always Active",
    badgeColor: "#22c55e",
    description:
      "These cookies are necessary for the website to function properly and cannot be switched off. They are usually set in response to actions you take, such as setting your privacy preferences or logging in.",
    examples: ["Session management", "Security tokens", "Load balancing", "User authentication state"],
  },
  {
    icon: BarChart2,
    color: "#F37621",
    name: "Analytics Cookies",
    badge: "Optional",
    badgeColor: "#F37621",
    description:
      "These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our content and user experience.",
    examples: ["Google Analytics", "Vercel Analytics", "Page view tracking", "User behavior heatmaps"],
  },
  {
    icon: Target,
    color: "#a855f7",
    name: "Marketing Cookies",
    badge: "Optional",
    badgeColor: "#a855f7",
    description:
      "These cookies are used by us and third-party partners to deliver relevant advertisements based on your interests. They track your browsing habits across websites.",
    examples: ["Facebook Pixel", "Google Ads", "Retargeting ads", "Conversion tracking"],
  },
  {
    icon: Shield,
    color: "#59C6E5",
    name: "Preference Cookies",
    badge: "Optional",
    badgeColor: "#59C6E5",
    description:
      "These cookies enable the website to remember choices you make (such as your preferred theme or language) to provide a more personalised experience.",
    examples: ["Theme preference (dark/light)", "Language settings", "Region preferences", "Notification settings"],
  },
];

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-[#0f0f0f]">
      {/* Hero */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#22244E] via-[#1a1c3d] to-[#0f0f0f] py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-[#59C6E5] rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-[#F37621] rounded-full blur-3xl" />
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
            <Cookie className="w-4 h-4" />
            Legal &amp; Compliance
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-5xl font-bold text-white mb-4"
          >
            Cookie Policy
          </motion.h1>
          <motion.p variants={fadeUp} className="text-gray-400 text-lg">
            Last updated:{" "}
            <span className="text-[#F37621]">August 14, 2026</span>
          </motion.p>
          <motion.p
            variants={fadeUp}
            className="text-gray-300 mt-4 max-w-2xl mx-auto"
          >
            We use cookies and similar tracking technologies to enhance your
            experience on our website. This policy explains what cookies are,
            how we use them, and how you can manage your preferences.
          </motion.p>
        </motion.div>
      </div>

      {/* What are cookies */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger}
          className="space-y-10"
        >
          <motion.div
            variants={fadeUp}
            className="bg-white/5 border border-white/10 rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-[#59C6E5]/20 flex items-center justify-center">
                <Cookie className="w-5 h-5 text-[#59C6E5]" />
              </div>
              <h2 className="text-xl font-semibold text-white">
                What Are Cookies?
              </h2>
            </div>
            <p className="text-gray-400 leading-relaxed mb-4">
              Cookies are small text files that are stored on your device when you
              visit a website. They help the website remember your preferences,
              improve your browsing experience, and collect information about how
              you use the site.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Cookies are not programs that can be executed or used to access data
              on your device. They simply store small pieces of information that
              are sent back to the website on subsequent visits.
            </p>
          </motion.div>

          {/* Cookie types */}
          <motion.h2
            variants={fadeUp}
            className="text-2xl font-bold text-white text-center"
          >
            Types of Cookies We Use
          </motion.h2>

          {cookieTypes.map((type, i) => {
            const Icon = type.icon;
            return (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-colors"
              >
                <div className="flex items-start justify-between gap-4 mb-4 flex-wrap">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${type.color}20` }}
                    >
                      <Icon className="w-5 h-5" style={{ color: type.color }} />
                    </div>
                    <h3 className="text-lg font-semibold text-white">
                      {type.name}
                    </h3>
                  </div>
                  <span
                    className="text-xs font-medium px-3 py-1 rounded-full"
                    style={{
                      backgroundColor: `${type.badgeColor}20`,
                      color: type.badgeColor,
                      border: `1px solid ${type.badgeColor}40`,
                    }}
                  >
                    {type.badge}
                  </span>
                </div>
                <p className="text-gray-400 leading-relaxed mb-4">
                  {type.description}
                </p>
                <div>
                  <p className="text-sm text-gray-500 mb-2">Examples:</p>
                  <div className="flex flex-wrap gap-2">
                    {type.examples.map((ex, j) => (
                      <span
                        key={j}
                        className="text-xs text-gray-400 bg-white/5 border border-white/10 px-3 py-1 rounded-full"
                      >
                        {ex}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* How to manage */}
          <motion.div
            variants={fadeUp}
            className="bg-white/5 border border-white/10 rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-[#F37621]/20 flex items-center justify-center">
                <Settings className="w-5 h-5 text-[#F37621]" />
              </div>
              <h2 className="text-xl font-semibold text-white">
                How to Manage Cookies
              </h2>
            </div>
            <ul className="space-y-3">
              {[
                "You can configure your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies.",
                "To opt out of Google Analytics tracking, visit: tools.google.com/dlpage/gaoptout",
                "To manage Facebook Pixel preferences, visit your Facebook Ad Preferences page.",
                "Note that disabling certain cookies may affect the functionality of our website.",
                "Our website's cookie banner allows you to accept or reject non-essential cookies when you first visit.",
              ].map((item, j) => (
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

          {/* Contact */}
          <motion.div
            variants={fadeUp}
            className="bg-gradient-to-br from-[#F37621]/10 to-[#59C6E5]/10 border border-[#F37621]/20 rounded-2xl p-8 text-center"
          >
            <Mail className="w-10 h-10 text-[#F37621] mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-white mb-2">
              Cookie Questions?
            </h2>
            <p className="text-gray-400 mb-4">
              If you have questions about our use of cookies or tracking
              technologies, contact us.
            </p>
            <a
              href="mailto:adeinfo@adesahq.com"
              className="inline-flex items-center gap-2 bg-[#F37621] hover:bg-[#e06810] text-white px-6 py-3 rounded-xl font-medium transition-colors"
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
