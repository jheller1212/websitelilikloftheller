"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

import MagneticButton from "./MagneticButton";
import { useI18n } from "@/lib/i18n";
import { LinkedInIcon, GoogleScholarIcon, OrcidIcon } from "./icons";

const heroSocialLinks = [
  {
    href: "https://www.linkedin.com/in/lilian-kloft/",
    label: "LinkedIn",
    icon: LinkedInIcon,
    prominent: true,
  },
  {
    href: "https://scholar.google.com/citations?user=d8j0F2UAAAAJ&hl=en",
    label: "Google Scholar",
    icon: GoogleScholarIcon,
    prominent: false,
  },
  {
    href: "https://orcid.org/0000-0002-4615-9581",
    label: "ORCID",
    icon: OrcidIcon,
    prominent: false,
  },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { t } = useI18n();

  const headline = "Dr. Lilian Kloft-Heller";
  const subtitle = t("hero.subtitle");

  // Scroll-linked parallax (was GSAP ScrollTrigger; framer-motion keeps the
  // same 30%/-15% drift over the hero's exit without shipping a second
  // animation library)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgYRange = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const portraitYRange = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const bgY = prefersReducedMotion ? "0%" : bgYRange;
  const portraitY = prefersReducedMotion ? "0%" : portraitYRange;

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 -z-10"
        style={{
          y: bgY,
          background: `linear-gradient(135deg, var(--color-hero-gradient-start) 0%, var(--color-hero-gradient-end) 50%, var(--color-bg) 100%)`,
        }}
      >
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(var(--color-text) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </motion.div>

      <div className="relative z-10 px-6 max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
        {/* Portrait */}
        <motion.div
          className="flex-shrink-0"
          style={{ y: portraitY }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full overflow-hidden shadow-2xl ring-4 ring-white/10">
            <Image
              src="/images/lilian-hero.jpg"
              alt="Dr. Lilian Kloft-Heller"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 640px) 224px, (max-width: 768px) 256px, 288px"
            />
            {/* Gradient overlay for cutout effect */}
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(to top, var(--color-bg) 0%, transparent 30%)",
              }}
            />
          </div>
        </motion.div>

        {/* Text content */}
        <div className="text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
              style={{ color: "var(--color-text)" }}
            >
              {headline}
            </h1>
          </motion.div>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl mb-10 "
            style={{ color: "var(--color-text-secondary)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {subtitle}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row flex-wrap items-center md:items-start gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <MagneticButton
              as="a"
              href="#publications"
              className="px-8 py-3 rounded-full text-sm font-semibold text-white transition-colors"
              style={{ backgroundColor: "var(--color-accent)" } as React.CSSProperties}
            >
              {t("hero.viewResearch")}
            </MagneticButton>
            <MagneticButton
              as="a"
              href="/expert-witness"
              className="px-8 py-3 rounded-full text-sm font-semibold text-white transition-colors"
              style={{ backgroundColor: "var(--color-accent-secondary)" } as React.CSSProperties}
            >
              {t("hero.expertWitness")}
            </MagneticButton>
            <MagneticButton
              as="a"
              href="#contact"
              className="px-8 py-3 rounded-full text-sm font-semibold border transition-colors"
              style={{
                borderColor: "var(--color-border)",
                color: "var(--color-text)",
              } as React.CSSProperties}
            >
              {t("hero.getInTouch")}
            </MagneticButton>
          </motion.div>

          {/* Social links row */}
          <motion.div
            className="flex items-center justify-center md:justify-start gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.8 }}
          >
            {heroSocialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center rounded-full transition-all hover:scale-110 ${
                  social.prominent
                    ? "w-11 h-11 bg-[#0A66C2] text-white hover:bg-[#004182] shadow-lg shadow-blue-500/20"
                    : "w-9 h-9 hover:opacity-70"
                }`}
                style={social.prominent ? undefined : { color: "var(--color-text-secondary)" }}
                aria-label={social.label}
                title={social.label}
              >
                <social.icon size={social.prominent ? 22 : 18} />
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
