"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useScrambleText } from "@/hooks/useScrambleText";
import MagneticButton from "./MagneticButton";
import { useI18n } from "@/lib/i18n";

gsap.registerPlugin(ScrollTrigger);

// Social icon components for Hero
function LinkedInIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function TwitterIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function GoogleScholarIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 100 14 7 7 0 000-14z" />
    </svg>
  );
}

function ResearchGateIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.586 0c-1.846 0-3.32.903-4.104 2.127-.784-1.224-2.258-2.127-4.104-2.127C8.178 0 5.76 2.418 5.76 5.618c0 5.244 6.24 9.864 6.24 9.864s6.24-4.62 6.24-9.864C18.24 2.418 15.822 0 12.622 0h-.004z" />
      <text x="6" y="20" fontSize="12" fontWeight="bold" fontFamily="sans-serif">RG</text>
    </svg>
  );
}

function OrcidIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 01-.947-.947c0-.525.422-.947.947-.947zM6.572 8.278h1.594v10.15H6.572V8.278zM10.569 8.278h4.322c3.903 0 5.65 2.6 5.65 5.075 0 2.766-2.053 5.075-5.697 5.075h-4.275V8.278zm1.594 1.35v7.45h2.634c3.025 0 4.122-1.903 4.122-3.725 0-1.856-1.172-3.725-4.028-3.725h-2.728z" />
    </svg>
  );
}

const heroSocialLinks = [
  {
    href: "https://www.linkedin.com/in/lilian-kloft/",
    label: "LinkedIn",
    icon: LinkedInIcon,
    prominent: true,
  },
  {
    href: "https://x.com/LilianKloft",
    label: "Twitter/X",
    icon: TwitterIcon,
    prominent: false,
  },
  {
    href: "https://scholar.google.com/citations?user=PLACEHOLDER",
    label: "Google Scholar",
    icon: GoogleScholarIcon,
    prominent: false,
  },
  {
    href: "https://www.researchgate.net/profile/Lilian-Kloft",
    label: "ResearchGate",
    icon: ResearchGateIcon,
    prominent: false,
  },
  {
    href: "https://orcid.org/0000-0002-XXXX-XXXX",
    label: "ORCID",
    icon: OrcidIcon,
    prominent: false,
  },
];

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);
  const { t } = useI18n();

  const headline = useScrambleText("Dr. Lilian Kloft-Heller", { delay: 300, speed: 25 });
  const subtitle = useScrambleText(t("hero.subtitle"), { delay: 800, speed: 20 });

  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      if (bgRef.current) {
        gsap.to(bgRef.current, {
          yPercent: 30,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }
      if (portraitRef.current) {
        gsap.to(portraitRef.current, {
          yPercent: -15,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        ref={bgRef}
        className="absolute inset-0 -z-10"
        style={{
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
      </div>

      <div className="relative z-10 px-6 max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
        {/* Portrait */}
        <motion.div
          ref={portraitRef}
          className="flex-shrink-0"
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
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 font-mono"
              style={{ color: "var(--color-text)" }}
            >
              {headline}
            </h1>
          </motion.div>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl mb-10 font-mono"
            style={{ color: "var(--color-text-secondary)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {subtitle}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center md:items-start gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <MagneticButton
              as="a"
              href="#research"
              className="px-8 py-3 rounded-full text-sm font-semibold text-white transition-colors"
              style={{ backgroundColor: "var(--color-accent)" } as React.CSSProperties}
            >
              {t("hero.viewResearch")}
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
