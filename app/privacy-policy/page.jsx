"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Eye, Database, UserCheck, Mail } from "lucide-react";
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
    icon: Database,
    title: "1. Information We Collect",
    content: [
      "**Personal Identification Information:** Name, email address, phone number, and address when you sign up for our waitlist, request a quote, or contact us.",
      "**Vehicle Information:** Vehicle make, model, year, and fuel type when you request CNG conversion services.",
      "**Career Application Information:** The contact details, application note, and CV you send directly from your email account when applying for a role or joining our talent network.",
      "**Usage Data:** Pages visited, time spent on site, browser type, device type, and IP address — collected automatically via cookies and analytics tools.",
      "**Communications:** Any messages you send us through contact forms, email, or social media.",
    ],
  },
  {
    icon: Eye,
    title: "2. How We Use Your Information",
    content: [
      "To process and fulfill your CNG conversion or refueling service requests.",
      "To communicate with you about your orders, inquiries, and account.",
      "To send you updates, news, promotions, and relevant content (you may opt out at any time).",
      "To improve our website, services, and customer experience.",
      "To comply with legal obligations and protect against fraud.",
      "To analyze usage trends and measure the effectiveness of our marketing campaigns.",
      "To review career applications, communicate recruitment updates, and consider candidates for current or future opportunities.",
    ],
  },
  {
    icon: Lock,
    title: "3. Data Security",
    content: [
      "We implement industry-standard security measures including SSL/TLS encryption, secure servers, and access controls to protect your personal information.",
      "We restrict access to your personal data to authorized employees and contractors who need it to provide our services.",
      "While we strive to protect your data, no method of transmission over the Internet is 100% secure. We cannot guarantee absolute security.",
      "In the event of a data breach, we will notify affected users and relevant authorities as required by applicable law.",
      "Career CVs are not uploaded to or stored in the website. They are attached by applicants in their own mail app and retained in Adesa Energy's recruitment mailbox according to our recruitment needs and legal obligations.",
    ],
  },
  {
    icon: UserCheck,
    title: "4. Your Rights",
    content: [
      "**Access:** You have the right to request a copy of the personal data we hold about you.",
      "**Correction:** You may request that we correct inaccurate or incomplete data.",
      "**Deletion:** You may request deletion of your personal data, subject to legal requirements.",
      "**Opt-Out:** You can unsubscribe from marketing communications at any time by clicking 'Unsubscribe' in any email or contacting us directly.",
      "**Data Portability:** You may request your data in a structured, commonly used format.",
    ],
  },
  {
    icon: Shield,
    title: "5. Cookies & Tracking",
    content: [
      "We use cookies and similar tracking technologies to enhance your browsing experience and analyze site traffic.",
      "Essential cookies are required for the website to function properly and cannot be disabled.",
      "Analytics cookies help us understand how visitors interact with our site. These can be disabled via your browser settings.",
      "Marketing cookies may be used to deliver relevant advertisements. You can manage these through our cookie banner.",
      "For full details, please read our Cookie Policy.",
    ],
  },
  {
    icon: Mail,
    title: "6. Third-Party Services",
    content: [
      "We may share your data with trusted third-party providers who assist us in operating our website and delivering services (e.g., email providers, payment processors, analytics platforms).",
      "These providers are bound by data processing agreements and are not permitted to use your data for their own marketing purposes.",
      "We do not sell, trade, or rent your personal information to third parties.",
      "Our website may contain links to third-party websites. We are not responsible for their privacy practices.",
      "Career applicants use their chosen email provider to send applications directly to Adesa Energy's Zoho Mail recruitment mailbox, where an automatic acknowledgement may be configured.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#0f0f0f]">
      {/* Hero */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#22244E] via-[#1a1c3d] to-[#0f0f0f] py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#59C6E5] rounded-full blur-3xl" />
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
            <Shield className="w-4 h-4" />
            Legal &amp; Compliance
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-5xl font-bold text-white mb-4"
          >
            Privacy Policy
          </motion.h1>
          <motion.p variants={fadeUp} className="text-gray-400 text-lg">
            Last updated:{" "}
            <span className="text-[#F37621]">August 22, 2026</span>
          </motion.p>
          <motion.p
            variants={fadeUp}
            className="text-gray-300 mt-4 max-w-2xl mx-auto"
          >
            At Adesa Energy, we are committed to protecting your personal
            information and being transparent about how we use it. This policy
            explains what data we collect, why we collect it, and how you can
            control it.
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
                className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#59C6E5]/30 transition-colors"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#59C6E5]/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-[#59C6E5]" />
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
                      <span
                        dangerouslySetInnerHTML={{
                          __html: item.replace(
                            /\*\*(.*?)\*\*/g,
                            '<strong class="text-white">$1</strong>'
                          ),
                        }}
                      />
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}

          {/* Contact Box */}
          <motion.div
            variants={fadeUp}
            className="bg-gradient-to-br from-[#F37621]/10 to-[#59C6E5]/10 border border-[#F37621]/20 rounded-2xl p-8 text-center"
          >
            <Mail className="w-10 h-10 text-[#F37621] mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-white mb-2">
              Contact Our Privacy Team
            </h2>
            <p className="text-gray-400 mb-4">
              If you have any questions about this Privacy Policy or how we
              handle your data, please reach out to us.
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
