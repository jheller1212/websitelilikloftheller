"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import MagneticButton from "./MagneticButton";
import { useI18n } from "@/lib/i18n";
import { publications } from "@/data/publications";
import { socialLinks } from "@/data/socials";

const scholarLink = socialLinks.find((s) => s.platform === "google-scholar");

export default function Publications() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const [showAll, setShowAll] = useState(false);
  const { t } = useI18n();

  const sorted = [...publications].sort((a, b) => b.year - a.year);
  const displayed = showAll ? sorted : sorted.slice(0, 6);

  return (
    <section id="publications" className="py-14 sm:py-16 px-6">
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
            {t("pub.eyebrow")}
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4"
            style={{ color: "var(--color-text)" }}
          >
            {t("pub.title")}
          </h2>
          <div className="flex gap-6 text-sm" style={{ color: "var(--color-text-secondary)" }}>
            <span>{publications.length} {t("pub.count")}</span>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
        >
          {displayed.map((pub) => {
            const href = pub.doi
              ? `https://doi.org/${pub.doi}`
              : pub.pubmedId
                ? `https://pubmed.ncbi.nlm.nih.gov/${pub.pubmedId}/`
                : `https://scholar.google.com/scholar?q=${encodeURIComponent(`"${pub.title}"`)}`;

            return (
              <motion.a
                key={pub.id}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card rounded-xl p-6 hover:scale-[1.02] transition-transform group"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
              >
                {pub.featured && (
                  <span
                    className="inline-block text-xs font-semibold px-2 py-0.5 rounded-full mb-2"
                    style={{ backgroundColor: "var(--color-accent)", color: "#fff" }}
                  >
                    {t("pub.featured")}
                  </span>
                )}
                <h3
                  className="font-semibold mb-2 leading-snug group-hover:underline decoration-1 underline-offset-4"
                  style={{ color: "var(--color-text)" }}
                >
                  {pub.title}
                </h3>
                <p className="text-xs mb-2" style={{ color: "var(--color-text-secondary)" }}>
                  {pub.authors}
                </p>
                <div className="flex flex-wrap items-center gap-3 text-xs" style={{ color: "var(--color-text-secondary)" }}>
                  <span>{pub.year}</span>
                  <span className="px-2 py-0.5 rounded-full" style={{ backgroundColor: "var(--color-border)" }}>
                    {pub.journal}
                  </span>
                </div>
              </motion.a>
            );
          })}
        </motion.div>

        {sorted.length > 6 && (
          <div className="mt-8 text-center">
            <MagneticButton
              className="px-6 py-2 rounded-full text-sm font-semibold border transition-colors"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? t("pub.showLess") : `${t("pub.showAll")} ${sorted.length} ${t("pub.papers")}`}
            </MagneticButton>
          </div>
        )}

        {scholarLink && (
          <div className="mt-6 flex justify-center gap-4">
            <a
              href={scholarLink.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:opacity-70 transition-opacity"
              style={{ color: "var(--color-accent)" }}
            >
              Google Scholar →
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
