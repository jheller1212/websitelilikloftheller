"use client";

import { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { track } from "@vercel/analytics";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import MagneticButton from "./MagneticButton";
import { useI18n } from "@/lib/i18n";
import { socialLinks } from "@/data/socials";
import { looksLikeCaseMaterial } from "@/lib/caseDetails";

// WebMCP: the form is exposed to browser AI agents as one structured tool.
// No toolautosubmit: an agent can fill the fields, but a person still presses
// Send, which keeps a human in the loop for every enquiry.
const TOOL_DESCRIPTION =
  "Send an enquiry to Dr. Lilian Kloft-Heller (Maastricht University) about expert witness work on drugs and memory, consulting, research collaboration, speaking or media. " +
  "Never include case-identifying details: no names of parties or witnesses, no case or file numbers, no facts of an ongoing matter. Describe the enquiry in general terms; confidential material is exchanged through a secure channel after first contact. " +
  "Messages that contain case identifiers are refused.";

const CASE_MATERIAL_REFUSAL =
  "Not sent: the message appears to contain case-identifying details (such as a case number). Rewrite it in general terms without names, case numbers or facts of the matter, then try again.";

type AgentSubmitEvent = React.FormEvent<HTMLFormElement> & {
  nativeEvent: SubmitEvent & {
    agentInvoked?: boolean;
    respondWith?: (result: Promise<unknown>) => void;
  };
};

const fieldClass =
  "w-full px-4 py-3 rounded-lg bg-transparent border text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]";
const fieldStyle = { borderColor: "var(--color-border)", color: "var(--color-text)" };

export default function Contact() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const [state, handleSubmit] = useForm("mqewbpyp");
  const [dismissed, setDismissed] = useState(false);
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
              toolname="request_engagement"
              tooldescription={TOOL_DESCRIPTION}
              onSubmit={(e) => {
                const native = (e as AgentSubmitEvent).nativeEvent;
                const agentInvoked = native.agentInvoked === true;
                track("contact_send_attempt", { agent: agentInvoked });

                if (!agentInvoked || typeof native.respondWith !== "function") {
                  return handleSubmit(e);
                }

                e.preventDefault();
                const message =
                  new FormData(e.currentTarget).get("message")?.toString() ?? "";
                if (looksLikeCaseMaterial(message)) {
                  track("contact_agent_refused_case_material");
                  native.respondWith(Promise.resolve(CASE_MATERIAL_REFUSAL));
                  return;
                }
                native.respondWith(
                  handleSubmit(e).then(
                    () => "Enquiry sent. Dr. Kloft-Heller will reply by email.",
                  ),
                );
              }}
              className="space-y-6"
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
                    toolparamdescription="Full name of the person sending the enquiry."
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-transparent border text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
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
                    toolparamdescription="Email address where the reply should go."
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-transparent border text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
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
                  toolparamdescription="Type of enquiry. Use expert-report or pre-trial for legal matters."
                  className="w-full px-4 py-3 rounded-lg bg-transparent border text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
                  style={{
                    borderColor: "var(--color-border)",
                    color: "var(--color-text)",
                  }}
                  defaultValue=""
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


              <fieldset className="space-y-4">
                <legend
                  className="text-sm font-medium mb-2"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  {t("contact.legalHeading")}
                </legend>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="jurisdiction" className="block text-xs mb-1" style={{ color: "var(--color-text-secondary)" }}>
                      {t("contact.jurisdiction")}
                    </label>
                    <select
                      id="jurisdiction"
                      name="jurisdiction"
                      defaultValue="not-applicable"
                      toolparamdescription="Where the proceedings take place. Leave as not-applicable for non-legal enquiries."
                      className={fieldClass}
                      style={fieldStyle}
                    >
                      <option value="not-applicable">{t("contact.notApplicable")}</option>
                      <option value="netherlands">{t("contact.jurisdictionNL")}</option>
                      <option value="germany">{t("contact.jurisdictionDE")}</option>
                      <option value="other-eu-english">{t("contact.jurisdictionEU")}</option>
                      <option value="other">{t("contact.jurisdictionOther")}</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="stage" className="block text-xs mb-1" style={{ color: "var(--color-text-secondary)" }}>
                      {t("contact.stage")}
                    </label>
                    <select
                      id="stage"
                      name="stage"
                      defaultValue="not-applicable"
                      toolparamdescription="Current stage of the proceedings."
                      className={fieldClass}
                      style={fieldStyle}
                    >
                      <option value="not-applicable">{t("contact.notApplicable")}</option>
                      <option value="investigation">{t("contact.stageInvestigation")}</option>
                      <option value="pre-trial">{t("contact.stagePreTrial")}</option>
                      <option value="trial">{t("contact.stageTrial")}</option>
                      <option value="appeal">{t("contact.stageAppeal")}</option>
                      <option value="other">{t("contact.stageOther")}</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="deadline" className="block text-xs mb-1" style={{ color: "var(--color-text-secondary)" }}>
                      {t("contact.deadline")}
                    </label>
                    <input
                      id="deadline"
                      name="deadline"
                      type="date"
                      toolparamdescription="Date by which a report or answer is needed (YYYY-MM-DD), if any."
                      className={fieldClass}
                      style={fieldStyle}
                    />
                  </div>
                  <div>
                    <label htmlFor="substance" className="block text-xs mb-1" style={{ color: "var(--color-text-secondary)" }}>
                      {t("contact.substance")}
                    </label>
                    <select
                      id="substance"
                      name="substance"
                      defaultValue="not-applicable"
                      toolparamdescription="Substance category involved, in general terms only."
                      className={fieldClass}
                      style={fieldStyle}
                    >
                      <option value="not-applicable">{t("contact.notApplicable")}</option>
                      <option value="cannabis">{t("contact.substanceCannabis")}</option>
                      <option value="alcohol">{t("contact.substanceAlcohol")}</option>
                      <option value="benzodiazepines">{t("contact.substanceBenzo")}</option>
                      <option value="mdma">{t("contact.substanceMDMA")}</option>
                      <option value="psychedelics">{t("contact.substancePsychedelics")}</option>
                      <option value="multiple-or-other">{t("contact.substanceMultiple")}</option>
                    </select>
                  </div>
                </div>
              </fieldset>

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
                  toolparamdescription="The enquiry in general terms. No names, case numbers or facts of an ongoing matter."
                  required
                  aria-describedby="confidentiality-note"
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
                  toolparamdescription="Consent to processing the message to answer the enquiry. Only the person sending it may give this; ask them before ticking."
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
