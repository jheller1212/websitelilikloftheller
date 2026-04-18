"use client";

import { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import MagneticButton from "./MagneticButton";
import { useI18n } from "@/lib/i18n";
import { socialLinks } from "@/data/socials";

export default function Contact() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  // TODO: Create a Formspree form for l.kloft-heller@maastrichtuniversity.nl and replace this ID
  const [state, handleSubmit] = useForm("xplaceholder");
  const [dismissed, setDismissed] = useState(false);
  const { t } = useI18n();

  useEffect(() => {
    if (state.submitting) setDismissed(false);
  }, [state.submitting]);

  const succeeded = state.succeeded && !dismissed;

  return (
    <section id="contact" className="py-14 sm:py-16 px-6">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-3"
            style={{ color: "var(--color-accent-secondary)" }}
          >
            {t("contact.eyebrow")}
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4"
            style={{ color: "var(--color-text)" }}
          >
            {t("contact.title")}
          </h2>
          <p
            className="text-base max-w-xl mx-auto"
            style={{ color: "var(--color-text-secondary)" }}
          >
            {t("contact.subtitle")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="glass-card rounded-2xl p-8 sm:p-12"
        >
          {succeeded ? (
            <div className="text-center py-8">
              <p
                className="text-lg font-semibold mb-2"
                style={{ color: "var(--color-text)" }}
              >
                {t("contact.thanks")}
              </p>
              <p style={{ color: "var(--color-text-secondary)" }}>
                {t("contact.thanksSub")}
              </p>
              <button
                className="mt-4 text-sm hover:opacity-70 transition-opacity"
                style={{ color: "var(--color-accent)" }}
                onClick={() => setDismissed(true)}
              >
                {t("contact.sendAnother")}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {t("contact.name")}
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-transparent border text-sm focus:outline-none focus:ring-2"
                    style={{
                      borderColor: "var(--color-border)",
                      color: "var(--color-text)",
                    }}
                    placeholder={t("contact.namePlaceholder")}
                  />
                  <ValidationError prefix="Name" field="name" errors={state.errors} />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {t("contact.email")}
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-transparent border text-sm focus:outline-none focus:ring-2"
                    style={{
                      borderColor: "var(--color-border)",
                      color: "var(--color-text)",
                    }}
                    placeholder="your@email.com"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  {t("contact.message")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-transparent border text-sm focus:outline-none focus:ring-2 resize-none"
                  style={{
                    borderColor: "var(--color-border)",
                    color: "var(--color-text)",
                  }}
                  placeholder={t("contact.messagePlaceholder")}
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>

              <label className="flex items-start gap-3 text-sm cursor-pointer" style={{ color: "var(--color-text-secondary)" }}>
                <input
                  type="checkbox"
                  name="gdpr_consent"
                  required
                  className="mt-0.5 accent-[var(--color-accent)]"
                />
                <span>
                  {t("contact.gdpr").split(/<a>|<\/a>/).map((part, i) =>
                    i === 1 ? (
                      <button
                        key={i}
                        type="button"
                        className="underline underline-offset-4 decoration-1 hover:opacity-70 inline"
                        style={{ color: "var(--color-accent)" }}
                        onClick={() => {
                          const btn = document.querySelector<HTMLButtonElement>("footer button");
                          btn?.click();
                        }}
                      >
                        {part}
                      </button>
                    ) : (
                      <span key={i}>{part}</span>
                    )
                  )}
                </span>
              </label>

              <div className="text-center">
                <MagneticButton
                  type="submit"
                  className="px-8 py-3 rounded-full text-sm font-semibold text-white transition-colors"
                  style={{ backgroundColor: "var(--color-accent)" }}
                >
                  {state.submitting ? t("contact.sending") : t("contact.send")}
                </MagneticButton>
              </div>
            </form>
          )}

          <div
            className="mt-10 pt-8 border-t text-sm text-center"
            style={{ borderColor: "var(--color-border)" }}
          >
            <p className="font-medium mb-1" style={{ color: "var(--color-text)" }}>
              {t("contact.office")}
            </p>
            <p style={{ color: "var(--color-text-secondary)" }}>
              Faculty of Psychology and Neuroscience
              <br />
              Maastricht University
              <br />
              Maastricht, The Netherlands
            </p>
            <p className="mt-2">
              <a
                href="mailto:l.kloft-heller@maastrichtuniversity.nl"
                className="hover:opacity-70 transition-opacity"
                style={{ color: "var(--color-accent)" }}
              >
                l.kloft-heller@maastrichtuniversity.nl
              </a>
            </p>
          </div>
        </motion.div>

        {/* Social links */}
        <motion.div
          className="mt-8 flex justify-center flex-wrap gap-6 text-sm"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {socialLinks.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
              style={{ color: "var(--color-accent)" }}
            >
              {link.label}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
