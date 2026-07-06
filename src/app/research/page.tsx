"use client";

import { useI18n } from "@/lib/i18n";
import { publications } from "@/data/publications";

const researchAreas = [
  {
    title: "Substance Effects on Memory",
    description:
      "Researching how recreational and medical substances such as cannabis, alcohol, benzodiazepines, MDMA, and psychedelics affect memory for events.",
  },
  {
    title: "Validity of Eyewitness Testimony",
    description:
      "Testing how intoxication affects witness recall, false memories, suggestibility, and eyewitness identification.",
  },
  {
    title: "Expert Witness Work",
    description:
      "Translating drug and memory science into the courtroom, I work on cases involving substance use and memory.",
  },
  {
    title: "Field Research",
    description:
      "Conducting ecologically valid research in real-world settings to study naturalistic substance effects.",
  },
];

export default function ResearchPage() {
  const { t } = useI18n();

  const featured = publications.filter((p) => p.featured);

  return (
    <main id="main-content" className="min-h-screen pt-28 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        <a
          href="/"
          className="inline-block text-sm mb-8 hover:opacity-70 transition-opacity"
          style={{ color: "var(--color-accent)" }}
        >
          &larr; {t("research.backHome")}
        </a>

        <h1
          className="text-4xl sm:text-5xl font-bold tracking-tight mb-6"
          style={{ color: "var(--color-text)" }}
        >
          {t("research.title")}
        </h1>

        <p
          className="text-base sm:text-lg max-w-3xl leading-relaxed mb-16"
          style={{ color: "var(--color-text-secondary)" }}
        >
          My research programme sits at the intersection of forensic psychology and psychopharmacology.
          I study how psychoactive substances affect memory processes, with a particular focus on false
          memory formation and its implications for eyewitness testimony and criminal investigations.
        </p>

        {/* Research areas */}
        <section className="mb-16">
          <h2 className="text-xl font-bold mb-6" style={{ color: "var(--color-text)" }}>
            Research Areas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {researchAreas.map((area) => (
              <div key={area.title} className="glass-card rounded-xl p-6">
                <h3
                  className="font-bold mb-3"
                  style={{ color: "var(--color-accent)" }}
                >
                  {area.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Key publications */}
        <section className="mb-16">
          <h2 className="text-xl font-bold mb-6" style={{ color: "var(--color-text)" }}>
            Key Publications
          </h2>
          <div className="space-y-4">
            {featured.map((pub) => {
              const href = pub.doi
                ? `https://doi.org/${pub.doi}`
                : pub.pubmedId
                  ? `https://pubmed.ncbi.nlm.nih.gov/${pub.pubmedId}/`
                  : undefined;

              return (
                <a
                  key={pub.id}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card rounded-xl p-6 block hover:scale-[1.01] transition-transform group"
                >
                  <h3
                    className="font-semibold leading-snug mb-2 group-hover:underline decoration-1 underline-offset-4"
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
                  {pub.abstract && (
                    <p className="text-sm mt-3 leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                      {pub.abstract}
                    </p>
                  )}
                </a>
              );
            })}
          </div>
        </section>

        <div className="text-center">
          <a
            href="/#publications"
            className="inline-block px-8 py-3 rounded-full text-sm font-semibold text-white transition-colors hover:opacity-90"
            style={{ backgroundColor: "var(--color-accent)" }}
          >
            View All Publications
          </a>
        </div>
      </div>
    </main>
  );
}
