"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import MagneticButton from "@/components/MagneticButton";
import { useI18n } from "@/lib/i18n";

const services = [
  { titleKey: "ew.service1.title", descKey: "ew.service1.desc" },
  { titleKey: "ew.service2.title", descKey: "ew.service2.desc" },
  { titleKey: "ew.service3.title", descKey: "ew.service3.desc" },
  { titleKey: "ew.service4.title", descKey: "ew.service4.desc" },
] as const;

const areaKeys = [
  "ewPage.area1",
  "ewPage.area2",
  "ewPage.area3",
  "ewPage.area4",
  "ewPage.area5",
  "ewPage.area6",
] as const;

const steps = [
  { titleKey: "ewPage.step1.title", descKey: "ewPage.step1.desc", num: "01" },
  { titleKey: "ewPage.step2.title", descKey: "ewPage.step2.desc", num: "02" },
  { titleKey: "ewPage.step3.title", descKey: "ewPage.step3.desc", num: "03" },
] as const;

const credentials = [
  "Assistant Professor, Maastricht University — Psychopharmacology & Forensic Psychology",
  "Postdoctoral Researcher, University of Bonn — Benzodiazepines, VR Crime Scenarios & Eye-Tracking",
  "CELL Forensic Psychology Lab, KU Leuven",
  "Triple Cum Laude — Bachelor's, Master's, and Doctoral Degree",
  "Rubicon Postdoctoral Grant (NWO)",
  "PNAS 2020 — Cannabis & False Memory Formation",
  "20+ peer-reviewed publications · 600+ Google Scholar citations",
  "60+ international media appearances — CNN, National Geographic, Daily Mail, WebMD",
];

export default function ExpertWitnessPage() {
  const { t } = useI18n();

  return (
    <>
      <Nav />
      <main className="font-[family-name:var(--font-geist-sans)] pt-24 pb-24 px-6">
        <div className="max-w-6xl mx-auto">

          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-10"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm hover:opacity-70 transition-opacity"
              style={{ color: "var(--color-accent)" }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5" /><path d="M12 19l-7-7 7-7" />
              </svg>
              Back
            </Link>
          </motion.div>

          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16 max-w-3xl"
          >
            <p
              className="text-sm font-semibold tracking-widest uppercase mb-3"
              style={{ color: "var(--color-accent-secondary)" }}
            >
              {t("ew.eyebrow")}
            </p>
            <h1
              className="text-4xl sm:text-5xl font-bold tracking-tight mb-6"
              style={{ color: "var(--color-text)" }}
            >
              {t("ewPage.heading")}
            </h1>
            <p
              className="text-lg leading-relaxed"
              style={{ color: "var(--color-text-secondary)" }}
            >
              {t("ewPage.intro")}
            </p>
          </motion.div>

          {/* Services */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
          >
            <h2
              className="text-2xl sm:text-3xl font-bold tracking-tight mb-6"
              style={{ color: "var(--color-text)" }}
            >
              Services
            </h2>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
              }}
            >
              {services.map(({ titleKey, descKey }) => (
                <motion.div
                  key={titleKey}
                  className="glass-card rounded-2xl p-6"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                  }}
                >
                  <h3
                    className="font-bold mb-2 text-base"
                    style={{ color: "var(--color-text)" }}
                  >
                    {t(titleKey)}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {t(descKey)}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Areas of expertise */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
          >
            <h2
              className="text-2xl sm:text-3xl font-bold tracking-tight mb-6"
              style={{ color: "var(--color-text)" }}
            >
              {t("ewPage.areasTitle")}
            </h2>
            <div className="glass-card rounded-2xl p-6 sm:p-8">
              <ul className="space-y-3">
                {areaKeys.map((key) => (
                  <li
                    key={key}
                    className="flex items-start gap-3 text-sm leading-relaxed"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    <span
                      className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: "var(--color-accent)" }}
                    />
                    {t(key)}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* How it works */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h2
              className="text-2xl sm:text-3xl font-bold tracking-tight mb-6"
              style={{ color: "var(--color-text)" }}
            >
              {t("ewPage.howTitle")}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {steps.map(({ titleKey, descKey, num }) => (
                <div key={titleKey} className="glass-card rounded-2xl p-6">
                  <p
                    className="text-3xl font-bold mb-3 tabular-nums"
                    style={{ color: "var(--color-accent)" }}
                  >
                    {num}
                  </p>
                  <h3
                    className="font-bold mb-2"
                    style={{ color: "var(--color-text)" }}
                  >
                    {t(titleKey)}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {t(descKey)}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Jurisdictions & languages */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
          >
            <h2
              className="text-2xl sm:text-3xl font-bold tracking-tight mb-4"
              style={{ color: "var(--color-text)" }}
            >
              {t("ewPage.jurisdictionsTitle")}
            </h2>
            <p
              className="text-base leading-relaxed"
              style={{ color: "var(--color-text-secondary)" }}
            >
              {t("ewPage.jurisdictions")}
            </p>
          </motion.div>

          {/* Credentials strip */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h2
              className="text-2xl sm:text-3xl font-bold tracking-tight mb-6"
              style={{ color: "var(--color-text)" }}
            >
              {t("ewPage.credibilityTitle")}
            </h2>
            <div className="glass-card rounded-2xl p-6 sm:p-8">
              <ul className="space-y-3">
                {credentials.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-relaxed"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    <span
                      className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: "var(--color-accent-secondary)" }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <div
                className="mt-6 pt-4 border-t flex flex-wrap gap-4 text-sm"
                style={{ borderColor: "var(--color-border)" }}
              >
                <a
                  href="https://www.linkedin.com/in/lilian-kloft/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-70 transition-opacity underline underline-offset-2"
                  style={{ color: "var(--color-accent)" }}
                >
                  LinkedIn
                </a>
                <a
                  href="https://scholar.google.com/citations?user=d8j0F2UAAAAJ&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-70 transition-opacity underline underline-offset-2"
                  style={{ color: "var(--color-accent)" }}
                >
                  Google Scholar
                </a>
                <a
                  href="https://orcid.org/0000-0002-4615-9581"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-70 transition-opacity underline underline-offset-2"
                  style={{ color: "var(--color-accent)" }}
                >
                  ORCID 0000-0002-4615-9581
                </a>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="text-center"
          >
            <p
              className="text-base mb-2"
              style={{ color: "var(--color-text-secondary)" }}
            >
              {t("ewPage.contactSub")}
            </p>
            <MagneticButton
              as="a"
              href="/#contact"
              className="inline-block px-8 py-3 rounded-full text-sm font-semibold text-white transition-colors hover:opacity-90 mt-4"
              style={{ backgroundColor: "var(--color-accent)" } as React.CSSProperties}
            >
              {t("ewPage.contactCta")}
            </MagneticButton>
          </motion.div>

        </div>
      </main>
      <Footer />
    </>
  );
}
