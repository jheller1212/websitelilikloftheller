"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useI18n } from "@/lib/i18n";
import MagneticButton from "./MagneticButton";

const services = [
  { titleKey: "ew.service1.title", descKey: "ew.service1.desc" },
  { titleKey: "ew.service2.title", descKey: "ew.service2.desc" },
  { titleKey: "ew.service3.title", descKey: "ew.service3.desc" },
  { titleKey: "ew.service4.title", descKey: "ew.service4.desc" },
] as const;

export default function ExpertWitness() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const { t } = useI18n();

  return (
    <section id="expert-witness" className="scroll-mt-20 py-14 sm:py-16 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-3"
            style={{ color: "var(--color-accent-secondary)" }}
          >
            {t("ew.eyebrow")}
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4"
            style={{ color: "var(--color-text)" }}
          >
            {t("ew.title")}
          </h2>
          <p
            className="text-base sm:text-lg max-w-3xl leading-relaxed"
            style={{ color: "var(--color-text-secondary)" }}
          >
            {t("ew.intro")}
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
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
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center"
        >
          <MagneticButton
            as="a"
            href="#contact"
            className="inline-block px-8 py-3 rounded-full text-sm font-semibold text-white transition-colors hover:opacity-90"
            style={{ backgroundColor: "var(--color-accent)" } as React.CSSProperties}
          >
            {t("ew.cta")}
          </MagneticButton>
          <p className="mt-5 text-sm">
            <Link
              href="/expert-witness"
              className="underline underline-offset-4 decoration-1 hover:opacity-70 transition-opacity"
              style={{ color: "var(--color-text-secondary)", textDecorationColor: "var(--color-border)" }}
            >
              {t("ew.moreLink")}
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
