"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import MagneticButton from "./MagneticButton";
import { useI18n } from "@/lib/i18n";
import { pressMentions } from "@/data/press";

const sortedMentions = [...pressMentions].sort((a, b) => b.date.localeCompare(a.date));
const featured = sortedMentions.filter((m) => m.featured);
const totalCountries = new Set(sortedMentions.map((m) => m.country)).size;
const totalLanguages = new Set(sortedMentions.map((m) => m.language)).size;

export default function MediaPress() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const [showAll, setShowAll] = useState(false);
  const { t } = useI18n();

  const nonFeatured = sortedMentions.filter((m) => !m.featured);
  const displayed = showAll ? nonFeatured : [];

  return (
    <section id="media" className="py-14 sm:py-16 px-6">
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
            {t("media.eyebrow")}
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4"
            style={{ color: "var(--color-text)" }}
          >
            {t("media.title")}
          </h2>
          <p
            className="text-base sm:text-lg max-w-3xl leading-relaxed mb-6"
            style={{ color: "var(--color-text-secondary)" }}
          >
            {t("media.subtitle")}
          </p>
          <div className="flex gap-6 text-sm" style={{ color: "var(--color-text-secondary)" }}>
            <span>{pressMentions.length} {t("media.outlets")}</span>
            <span>{totalCountries} {t("media.countries")}</span>
            <span>{totalLanguages} {t("media.languages")}</span>
          </div>
        </motion.div>

        {/* Featured outlets */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
        >
          {featured.map((mention) => {
            const Wrapper = mention.url ? "a" : "div";
            const linkProps = mention.url
              ? { href: mention.url, target: "_blank" as const, rel: "noopener noreferrer" }
              : {};

            return (
              <motion.div
                key={mention.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
              >
                <Wrapper
                  {...linkProps}
                  className="glass-card rounded-xl p-6 block hover:scale-[1.02] transition-transform h-full"
                >
                  <div className="flex items-start justify-between mb-3">
                    <span
                      className="text-xs font-bold uppercase tracking-wider"
                      style={{ color: "var(--color-accent)" }}
                    >
                      {mention.outlet}
                    </span>
                    {(mention.type === "podcast" || mention.type === "radio") && (
                      <span
                        className="text-xs font-semibold px-2 py-0.5 rounded-full"
                        style={{ backgroundColor: "var(--color-accent-secondary)", color: "#1e293b" }}
                      >
                        {mention.type === "podcast" ? "Podcast" : "Radio"}
                      </span>
                    )}
                  </div>
                  <h3
                    className="font-semibold text-sm leading-snug mb-2"
                    style={{ color: "var(--color-text)" }}
                  >
                    {mention.title}
                  </h3>
                  <p className="text-xs" style={{ color: "var(--color-text-secondary)" }}>
                    {mention.date}
                  </p>
                </Wrapper>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Show all toggle */}
        <div className="text-center">
          <MagneticButton
            className="px-6 py-2 rounded-full text-sm font-semibold border transition-colors"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? t("media.showLess") : `${t("media.showAll")} (${nonFeatured.length}+)`}
          </MagneticButton>
        </div>

        {/* All coverage list */}
        {showAll && (
          <motion.div
            className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            {displayed.map((mention) => {
              const Wrapper = mention.url ? "a" : "div";
              const linkProps = mention.url
                ? { href: mention.url, target: "_blank" as const, rel: "noopener noreferrer" }
                : {};

              return (
                <Wrapper
                  key={mention.id}
                  {...linkProps}
                  className="glass-card rounded-lg p-4 block hover:scale-[1.01] transition-transform"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-semibold" style={{ color: "var(--color-text)" }}>
                      {mention.outlet}
                    </span>
                    <span className="text-xs uppercase" style={{ color: "var(--color-text-secondary)" }}>
                      {mention.country}
                    </span>
                  </div>
                  <p className="text-xs truncate" style={{ color: "var(--color-text-secondary)" }}>
                    {mention.title}
                  </p>
                </Wrapper>
              );
            })}
          </motion.div>
        )}
      </div>
    </section>
  );
}
