"use client";

import { useState } from "react";
import { useI18n } from "@/lib/i18n";

// Social icon components
function LinkedInIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
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

const footerSocialLinks = [
  { href: "https://www.linkedin.com/in/lilian-kloft/", label: "LinkedIn", icon: LinkedInIcon, prominent: true },
  { href: "https://scholar.google.com/citations?user=d8j0F2UAAAAJ&hl=en", label: "Google Scholar", icon: GoogleScholarIcon, prominent: false },
  { href: "https://orcid.org/0000-0002-4615-9581", label: "ORCID", icon: OrcidIcon, prominent: false },
];

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Publications", href: "#publications" },
  { label: "Media", href: "#media" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const [showImpressum, setShowImpressum] = useState(false);
  const { t } = useI18n();

  return (
    <>
      <footer
        className="py-12 px-6 border-t"
        style={{
          borderColor: "var(--color-border)",
          color: "var(--color-text-secondary)",
        }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <p className="text-lg font-bold mb-2" style={{ color: "var(--color-text)" }}>
                Dr. Lilian Kloft-Heller
              </p>
              <p className="text-sm">
                Forensic Psychology & Psychopharmacology
              </p>
              <p className="text-sm">Maastricht University</p>
            </div>

            {/* Quick links */}
            <div>
              <p className="text-sm font-semibold mb-3" style={{ color: "var(--color-text)" }}>
                Quick Links
              </p>
              <div className="flex flex-col gap-2">
                {quickLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-sm hover:opacity-70 transition-opacity"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Social */}
            <div>
              <p className="text-sm font-semibold mb-3" style={{ color: "var(--color-text)" }}>
                Connect
              </p>
              <div className="flex items-center gap-3">
                {footerSocialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center rounded-full transition-all hover:scale-110 ${
                      social.prominent
                        ? "w-10 h-10 bg-[#0A66C2] text-white hover:bg-[#004182]"
                        : "w-9 h-9 hover:opacity-70"
                    }`}
                    style={social.prominent ? undefined : { color: "var(--color-text-secondary)" }}
                    aria-label={social.label}
                    title={social.label}
                  >
                    <social.icon size={social.prominent ? 20 : 16} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm" style={{ borderColor: "var(--color-border)" }}>
            <p>
              &copy; {new Date().getFullYear()} Dr. Lilian Kloft-Heller &middot; Maastricht University. {t("footer.rights")}
            </p>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowImpressum(true)}
                className="hover:opacity-70 transition-opacity underline underline-offset-4 decoration-1"
                style={{ color: "var(--color-text-secondary)" }}
              >
                {t("footer.impressum")}
              </button>
            </div>
          </div>
        </div>
      </footer>

      {showImpressum && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
          onClick={(e) => {
            if (e.target === e.currentTarget) setShowImpressum(false);
          }}
        >
          <div
            className="glass-card rounded-2xl p-8 sm:p-10 max-w-lg w-full max-h-[80vh] overflow-y-auto relative"
            style={{ color: "var(--color-text)" }}
          >
            <button
              onClick={() => setShowImpressum(false)}
              className="absolute top-4 right-4 text-xl hover:opacity-70 transition-opacity"
              style={{ color: "var(--color-text-secondary)" }}
              aria-label="Close"
            >
              &times;
            </button>

            <h2 className="text-xl font-bold mb-6">Impressum</h2>

            <div className="space-y-4 text-sm" style={{ color: "var(--color-text-secondary)" }}>
              <div>
                <p className="font-medium" style={{ color: "var(--color-text)" }}>
                  Responsible for content
                </p>
                <p>Dr. Lilian Kloft-Heller</p>
                <p>Maastricht University</p>
                <p>Faculty of Psychology and Neuroscience</p>
                <p>Universiteitssingel 40, 6229 ER Maastricht</p>
                <p>The Netherlands</p>
              </div>

              <div>
                <p className="font-medium" style={{ color: "var(--color-text)" }}>
                  Contact
                </p>
                <p>
                  Please use the{" "}
                  <button
                    onClick={() => {
                      setShowImpressum(false);
                      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="underline underline-offset-4 decoration-1 hover:opacity-70 transition-opacity"
                    style={{ color: "var(--color-accent)" }}
                  >
                    contact form
                  </button>{" "}
                  on this website.
                </p>
              </div>

              <hr style={{ borderColor: "var(--color-border)" }} />

              <h3 className="text-base font-bold pt-2" style={{ color: "var(--color-text)" }}>
                Privacy Notice
              </h3>

              <div>
                <p className="font-medium" style={{ color: "var(--color-text)" }}>
                  No tracking
                </p>
                <p>
                  This website does not use cookies, analytics, or any third-party
                  tracking tools.
                </p>
              </div>

              <div>
                <p className="font-medium" style={{ color: "var(--color-text)" }}>
                  Your rights
                </p>
                <p>
                  Under the GDPR, you have the right to access, rectify, or delete
                  your personal data. To exercise these rights, please contact me
                  via the contact form.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
