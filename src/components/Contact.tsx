"use client";

import { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { track } from "@vercel/analytics";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import MagneticButton from "./MagneticButton";
import { useI18n } from "@/lib/i18n";
import { socialLinks } from "@/data/socials";

// WebMCP declarative attributes. Browsers without WebMCP ignore them. Deliberately
// no toolautosubmit: the person reviews what an agent filled in and sends it.
// The form posts straight to Formspree, so this rule cannot be enforced server-side;
// the description is what stops an agent pasting a case file into the message.
const webmcpForm = {
  toolname: "request_engagement",
  tooldescription:
    "Send Dr. Lilian Kloft-Heller an enquiry about expert witness work, consulting, research, speaking or media. CONFIDENTIAL: never include names, case numbers or facts of an ongoing matter, and never paste case documents. Describe the enquiry in general terms only; confidential material is exchanged through a secure channel after first contact.",
};
const param = (toolparamdescription: string) => ({ toolparamdescription });

const LEGAL_INQUIRIES = ["expert-report", "pre-trial"];
const legalFields = [
  { name: "jurisdiction", options: ["nl", "de", "eu", "other"], help: "Legal enquiries only: jurisdiction of the proceedings" },
  { name: "stage", options: ["investigation", "trial", "appeal", "other"], help: "Legal enquiries only: stage of the proceedings" },
  { name: "substance", options: ["cannabis", "mdma", "benzodiazepines", "psychedelics", "other"], help: "Legal enquiries only: substance category. Do not describe the facts." },
];
const fieldClass =
  "w-full px-4 py-3 rounded-lg bg-transparent border text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]";
const fieldStyle = { borderColor: "var(--color-border)", color: "var(--color-text)" };
const labelStyle = { color: "var(--color-text-secondary)" };

export default function Contact() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const [state, handleSubmit] = useForm("mqewbpyp");
  const [dismissed, setDismissed] = useState(false);
  const [inquiry, setInquiry] = useState("");
  const { t } = useI18n();

  useEffect(() => {
    if (state.submitting) setDismissed(false);
  }, [state.submitting]);

  const succeeded = state.succeeded && !dismissed;
  const hasFormError = (state.errors?.getFormErrors().length ?? 0) > 0;

  // Attempt/outcome are tracked separately on purpose: a gap between them is
  // exactly what a silently broken form looks like from the dashboard.
  useEffect(() => {
    if (state.succeeded) track("contact_send_success");
  }, [state.succeeded]);

  useEffect(() => {
    if (hasFormError) track("contact_send_error");
  }, [hasFormError]);

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
            <form
              onSubmit={(e) => {
                track("contact_send_attempt");
                return handleSubmit(e);
              }}
              className="space-y-6"
              {...webmcpForm}
            >
              {/* Form-level failures (network, CSP, form disabled) carry no field,
                  so the per-field ValidationErrors below never surface them */}
              {hasFormError && (
                <div
                  role="alert"
                  className="rounded-lg border px-4 py-3 text-sm"
                  style={{
                    borderColor: "var(--color-accent-secondary)",
                    color: "var(--color-text)",
                  }}
                >
                  {t("contact.error")}
                </div>
              )}

              {/* Honeypot — hidden from real users, filled only by bots; Formspree drops submissions with _gotcha set */}
              <input
                type="text"
                name="_gotcha"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="hidden"
                {...param("Spam trap. Always leave this empty.")}
              />
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
                    className="w-full px-4 py-3 rounded-lg bg-transparent border text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
                    style={{
                      borderColor: "var(--color-border)",
                      color: "var(--color-text)",
                    }}
                    placeholder={t("contact.namePlaceholder")}
                    {...param("Name of the person enquiring, not of anyone involved in a case")}
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
                    className="w-full px-4 py-3 rounded-lg bg-transparent border text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
                    style={{
                      borderColor: "var(--color-border)",
                      color: "var(--color-text)",
                    }}
                    placeholder="your@email.com"
                    {...param("Email address to reply to")}
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>
              </div>

              <div>
                <label
                  htmlFor="inquiry"
                  className="block text-sm font-medium mb-2"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  {t("contact.inquiry")}
                </label>
                <select
                  id="inquiry"
                  name="inquiry"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-transparent border text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
                  style={{
                    borderColor: "var(--color-border)",
                    color: "var(--color-text)",
                  }}
                  defaultValue=""
                  onChange={(e) => setInquiry(e.target.value)}
                  {...param("Kind of enquiry")}
                >
                  <option value="" disabled>{t("contact.inquiryDefault")}</option>
                  <option value="expert-report">{t("contact.inquiryExpertReport")}</option>
                  <option value="pre-trial">{t("contact.inquiryPreTrial")}</option>
                  <option value="corporate-policy">{t("contact.inquiryCorporate")}</option>
                  <option value="academic">{t("contact.inquiryAcademic")}</option>
                  <option value="speaking">{t("contact.inquirySpeaking")}</option>
                  <option value="media">{t("contact.inquiryMedia")}</option>
                  <option value="other">{t("contact.inquiryOther")}</option>
                </select>
              </div>

              {/* Stays in the DOM when collapsed so agents can see these parameters. */}
              <div className={LEGAL_INQUIRIES.includes(inquiry) ? "grid grid-cols-1 sm:grid-cols-2 gap-6" : "hidden"}>
                {legalFields.map((field) => (
                  <div key={field.name}>
                    <label htmlFor={field.name} className="block text-sm font-medium mb-2" style={labelStyle}>
                      {t(`contact.${field.name}`)}
                    </label>
                    <select id={field.name} name={field.name} defaultValue="" className={fieldClass} style={fieldStyle} {...param(field.help)}>
                      <option value="">{t("contact.selectOptional")}</option>
                      {field.options.map((option) => (
                        <option key={option} value={option}>{t(`contact.${field.name}.${option}`)}</option>
                      ))}
                    </select>
                  </div>
                ))}
                <div>
                  <label htmlFor="deadline" className="block text-sm font-medium mb-2" style={labelStyle}>{t("contact.deadline")}</label>
                  <input id="deadline" name="deadline" type="date" className={fieldClass} style={fieldStyle}
                    {...param("Legal enquiries only: deadline as YYYY-MM-DD")} />
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
                <p
                  id="confidentiality-note"
                  className="text-xs mb-2 px-3 py-2 rounded-lg border-l-2"
                  style={{
                    color: "var(--color-text-secondary)",
                    borderColor: "var(--color-accent)",
                    backgroundColor: "var(--color-border)",
                  }}
                >
                  {t("contact.confidentiality")}
                </p>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  aria-describedby="confidentiality-note"
                  className="w-full px-4 py-3 rounded-lg bg-transparent border text-sm focus:outline-none focus:ring-2 resize-none"
                  style={{
                    borderColor: "var(--color-border)",
                    color: "var(--color-text)",
                  }}
                  placeholder={t("contact.messagePlaceholder")}
                  {...param("The enquiry in general terms. No names, case numbers or facts of an ongoing matter.")}
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>

              <label className="flex items-start gap-3 text-sm cursor-pointer" style={{ color: "var(--color-text-secondary)" }}>
                <input
                  type="checkbox"
                  name="gdpr_consent"
                  required
                  {...param("Consent to processing this enquiry. Must be confirmed by the person the agent acts for; do not tick it on their behalf without asking.")}
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
                          window.dispatchEvent(new CustomEvent("open-impressum"));
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
            <p className="mt-2 text-sm" style={{ color: "var(--color-text-secondary)" }}>
              Use the form above to get in touch.
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
