"use client";

import { useTheme } from "next-themes";
import { useEffect, useState, useCallback, MouseEvent } from "react";
import MagneticButton from "./MagneticButton";
import { useI18n, localeLabels, Locale } from "@/lib/i18n";

const linkKeys = [
  { key: "nav.about", href: "#about" },
  { key: "nav.research", href: "#research" },
  { key: "nav.publications", href: "#publications" },
  { key: "nav.media", href: "#media" },
  { key: "nav.cv", href: "/cv" },
  { key: "nav.contact", href: "#contact" },
];

const locales: Locale[] = ["en", "de", "nl"];

// Social icon components
function LinkedInIcon({ size = 20 }: { size?: number }) {
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

function OrcidIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 01-.947-.947c0-.525.422-.947.947-.947zM6.572 8.278h1.594v10.15H6.572V8.278zM10.569 8.278h4.322c3.903 0 5.65 2.6 5.65 5.075 0 2.766-2.053 5.075-5.697 5.075h-4.275V8.278zm1.594 1.35v7.45h2.634c3.025 0 4.122-1.903 4.122-3.725 0-1.856-1.172-3.725-4.028-3.725h-2.728z" />
    </svg>
  );
}

const socialLinks = [
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
    href: "https://orcid.org/0000-0002-XXXX-XXXX",
    label: "ORCID",
    icon: OrcidIcon,
    prominent: false,
  },
];

export default function Nav() {
  const { theme, setTheme } = useTheme();
  const { locale, setLocale, t } = useI18n();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleNavClick = useCallback((e: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("#")) return;
    setMenuOpen(false);

    if (window.location.pathname !== "/" && window.location.pathname !== "/index.html") {
      e.currentTarget.href = "/" + href;
      return;
    }

    e.preventDefault();
    const target = document.getElementById(href.slice(1));
    if (target) {
      const navHeight = 80;
      const y = target.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen ? "backdrop-blur-xl shadow-sm" : ""
      }`}
      style={{
        backgroundColor: scrolled || menuOpen ? "var(--color-nav-bg)" : "transparent",
        borderBottom: scrolled ? "1px solid var(--color-border)" : "1px solid transparent",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="/"
          className="text-lg font-bold tracking-tight"
          style={{ color: "var(--color-text)" }}
        >
          LKH
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {linkKeys.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm font-medium hover:opacity-70 transition-opacity inline-flex items-center gap-1"
              style={{ color: "var(--color-text-secondary)" }}
            >
              {t(link.key)}
              {!link.href.startsWith("#") && (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              )}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          {/* Social icons in nav — desktop only */}
          <div className="hidden lg:flex items-center gap-1 mr-2">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center rounded-full transition-all hover:scale-110 ${
                  social.prominent
                    ? "w-9 h-9 bg-[#0A66C2] text-white hover:bg-[#004182]"
                    : "w-8 h-8 hover:opacity-70"
                }`}
                style={social.prominent ? undefined : { color: "var(--color-text-secondary)" }}
                aria-label={social.label}
                title={social.label}
              >
                <social.icon size={social.prominent ? 18 : 16} />
              </a>
            ))}
          </div>

          {/* Language switcher */}
          <div className="flex items-center rounded-full border text-xs" style={{ borderColor: "var(--color-border)" }}>
            {locales.map((l) => (
              <button
                key={l}
                onClick={() => setLocale(l)}
                className="px-2 py-1.5 rounded-full transition-colors font-medium"
                style={{
                  backgroundColor: locale === l ? "var(--color-accent)" : "transparent",
                  color: locale === l ? "#fff" : "var(--color-text-secondary)",
                }}
              >
                {localeLabels[l]}
              </button>
            ))}
          </div>

          <MagneticButton
            className="w-10 h-10 rounded-full flex items-center justify-center border transition-colors"
            style={{
              borderColor: "var(--color-border)",
              color: "var(--color-text)",
            } as React.CSSProperties}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle dark mode"
            title="Toggle dark mode"
          >
            {mounted ? (
              theme === "dark" ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )
            ) : (
              <span className="w-[18px] h-[18px]" />
            )}
          </MagneticButton>

          {/* Mobile hamburger */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-full border transition-colors"
            style={{
              borderColor: "var(--color-border)",
              color: "var(--color-text)",
            }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              {menuOpen ? (
                <>
                  <line x1="4" y1="4" x2="14" y2="14" />
                  <line x1="14" y1="4" x2="4" y2="14" />
                </>
              ) : (
                <>
                  <line x1="3" y1="5" x2="15" y2="5" />
                  <line x1="3" y1="9" x2="15" y2="9" />
                  <line x1="3" y1="13" x2="15" y2="13" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-4"
          style={{ backgroundColor: "var(--color-nav-bg)" }}
        >
          {linkKeys.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-base font-medium py-2 hover:opacity-70 transition-opacity inline-flex items-center gap-1"
              style={{ color: "var(--color-text)" }}
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {t(link.key)}
              {!link.href.startsWith("#") && (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              )}
            </a>
          ))}

          {/* Social links in mobile menu */}
          <div className="flex items-center gap-3 pt-2 border-t" style={{ borderColor: "var(--color-border)" }}>
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center rounded-full transition-all ${
                  social.prominent
                    ? "w-10 h-10 bg-[#0A66C2] text-white hover:bg-[#004182]"
                    : "w-9 h-9 hover:opacity-70"
                }`}
                style={social.prominent ? undefined : { color: "var(--color-text-secondary)" }}
                aria-label={social.label}
                title={social.label}
              >
                <social.icon size={social.prominent ? 20 : 18} />
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
