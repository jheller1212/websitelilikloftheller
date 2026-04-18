"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useI18n } from "@/lib/i18n";

const bentoCards = [
  { area: "a", titleKey: "bento.a.title", descKey: "bento.a.desc" },
  { area: "b", titleKey: "bento.b.title", descKey: "bento.b.desc" },
  { area: "c", titleKey: "bento.c.title", descKey: "bento.c.desc" },
  { area: "d", titleKey: "bento.d.title", descKey: "bento.d.desc" },
  { area: "e", titleKey: "bento.e.title", descKey: "bento.e.desc" },
  { area: "f", titleKey: "bento.f.title", descKey: "bento.f.desc" },
];

const affiliations = [
  "Maastricht University — Faculty of Psychology and Neuroscience",
  "Section Forensic Psychology",
  "Department of Clinical Psychological Science",
];

const awards = [
  "Cum Laude Doctoral Degree, Maastricht University",
  "PNAS publication — Cannabis & False Memory (2020)",
  "100+ international media appearances",
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function About() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const { t } = useI18n();

  return (
    <section id="about" className="py-14 sm:py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
          ref={ref}
        >
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-3"
            style={{ color: "var(--color-accent-secondary)" }}
          >
            {t("about.eyebrow")}
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-8"
            style={{ color: "var(--color-text)" }}
          >
            {t("about.title")}
          </h2>

          {/* Bio + Photo row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-2">
              <p
                className="text-base sm:text-lg leading-relaxed mb-6"
                style={{ color: "var(--color-text-secondary)" }}
              >
                {t("about.bio")}
              </p>

              {/* Affiliations */}
              <div className="mb-4">
                <h3 className="text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--color-accent-secondary)" }}>
                  Affiliations
                </h3>
                <ul className="space-y-1">
                  {affiliations.map((aff) => (
                    <li key={aff} className="text-sm" style={{ color: "var(--color-text-secondary)" }}>
                      {aff}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Awards */}
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--color-accent-secondary)" }}>
                  Highlights
                </h3>
                <ul className="space-y-1">
                  {awards.map((award) => (
                    <li key={award} className="text-sm" style={{ color: "var(--color-text-secondary)" }}>
                      {award}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Photo */}
            <motion.div
              className="flex flex-col gap-4"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/lilian-headshot.jpg"
                  alt="Dr. Lilian Kloft-Heller"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority
                />
              </div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/lilian-cumlaude.jpg"
                  alt="Dr. Lilian Kloft-Heller — Cum Laude Doctoral Degree"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Research theme bento cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {bentoCards.map((item) => (
            <motion.div
              key={item.area}
              className="glass-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between"
              variants={cardVariants}
            >
              <div>
                <h3
                  className="text-lg sm:text-xl font-bold mb-3"
                  style={{
                    color: "var(--color-text)",
                  }}
                >
                  {t(item.titleKey)}
                </h3>
                <p
                  className="text-sm sm:text-base leading-relaxed"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  {t(item.descKey)}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
