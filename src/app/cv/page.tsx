"use client";

import { useI18n } from "@/lib/i18n";
import { publications } from "@/data/publications";

export default function CVPage() {
  const { t } = useI18n();

  const articles = publications.filter((p) => p.type === "article");
  const reviews = publications.filter((p) => p.type === "review");
  const chapters = publications.filter((p) => p.type === "chapter");
  const thesis = publications.filter((p) => p.type === "thesis");

  return (
    <main className="min-h-screen pt-28 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        <a
          href="/"
          className="inline-block text-sm mb-8 hover:opacity-70 transition-opacity"
          style={{ color: "var(--color-accent)" }}
        >
          &larr; {t("cv.backHome")}
        </a>

        <h1
          className="text-4xl sm:text-5xl font-bold tracking-tight mb-12"
          style={{ color: "var(--color-text)" }}
        >
          {t("cv.title")}
        </h1>

        {/* Current Position */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4" style={{ color: "var(--color-text)" }}>
            Current Position
          </h2>
          <div className="glass-card rounded-xl p-6">
            <p className="font-semibold" style={{ color: "var(--color-text)" }}>
              Assistant Professor
            </p>
            <p className="text-sm" style={{ color: "var(--color-text-secondary)" }}>
              Faculty of Psychology and Neuroscience, Maastricht University
            </p>
            <p className="text-sm mt-1" style={{ color: "var(--color-text-secondary)" }}>
              Section Forensic Psychology &middot; Department of Clinical Psychological Science
            </p>
          </div>
        </section>

        {/* Education */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4" style={{ color: "var(--color-text)" }}>
            Education
          </h2>
          <div className="space-y-3">
            <div className="glass-card rounded-xl p-6">
              <p className="font-semibold" style={{ color: "var(--color-text)" }}>
                PhD in Psychology
              </p>
              <p className="text-sm" style={{ color: "var(--color-text-secondary)" }}>
                Maastricht University &middot; 2022
              </p>
              <p className="text-sm mt-1" style={{ color: "var(--color-text-secondary)" }}>
                Dissertation: &ldquo;Under the Influence: The effects of drugs on false memory formation and implications for forensic practice&rdquo;
              </p>
            </div>
          </div>
        </section>

        {/* Research Interests */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4" style={{ color: "var(--color-text)" }}>
            Research Interests
          </h2>
          <div className="flex flex-wrap gap-2">
            {[
              "False memory formation",
              "Psychopharmacology of memory",
              "Eyewitness testimony",
              "Forensic interviewing",
              "Cannabis & cognition",
              "MDMA & memory",
              "Psychedelics",
              "Legal psychology",
            ].map((interest) => (
              <span
                key={interest}
                className="px-3 py-1.5 rounded-full text-sm"
                style={{
                  backgroundColor: "var(--color-border)",
                  color: "var(--color-text)",
                }}
              >
                {interest}
              </span>
            ))}
          </div>
        </section>

        {/* Selected Publications */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4" style={{ color: "var(--color-text)" }}>
            Selected Publications
          </h2>

          {articles.length > 0 && (
            <div className="mb-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: "var(--color-accent-secondary)" }}>
                Journal Articles ({articles.length})
              </h3>
              <div className="space-y-3">
                {articles.map((pub) => (
                  <div key={pub.id} className="glass-card rounded-lg p-4">
                    <p className="font-medium text-sm leading-snug" style={{ color: "var(--color-text)" }}>
                      {pub.title}
                    </p>
                    <p className="text-xs mt-1" style={{ color: "var(--color-text-secondary)" }}>
                      {pub.authors} &middot; {pub.journal} &middot; {pub.year}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {reviews.length > 0 && (
            <div className="mb-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: "var(--color-accent-secondary)" }}>
                Reviews ({reviews.length})
              </h3>
              <div className="space-y-3">
                {reviews.map((pub) => (
                  <div key={pub.id} className="glass-card rounded-lg p-4">
                    <p className="font-medium text-sm leading-snug" style={{ color: "var(--color-text)" }}>
                      {pub.title}
                    </p>
                    <p className="text-xs mt-1" style={{ color: "var(--color-text-secondary)" }}>
                      {pub.authors} &middot; {pub.journal} &middot; {pub.year}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {chapters.length > 0 && (
            <div className="mb-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: "var(--color-accent-secondary)" }}>
                Book Chapters ({chapters.length})
              </h3>
              <div className="space-y-3">
                {chapters.map((pub) => (
                  <div key={pub.id} className="glass-card rounded-lg p-4">
                    <p className="font-medium text-sm leading-snug" style={{ color: "var(--color-text)" }}>
                      {pub.title}
                    </p>
                    <p className="text-xs mt-1" style={{ color: "var(--color-text-secondary)" }}>
                      {pub.authors} &middot; {pub.journal} &middot; {pub.year}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {thesis.length > 0 && (
            <div className="mb-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: "var(--color-accent-secondary)" }}>
                Doctoral Thesis
              </h3>
              <div className="space-y-3">
                {thesis.map((pub) => (
                  <div key={pub.id} className="glass-card rounded-lg p-4">
                    <p className="font-medium text-sm leading-snug" style={{ color: "var(--color-text)" }}>
                      {pub.title}
                    </p>
                    <p className="text-xs mt-1" style={{ color: "var(--color-text-secondary)" }}>
                      {pub.journal} &middot; {pub.year}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
