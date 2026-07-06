import type { Metadata } from "next";

const siteUrl = "https://liliankloft.com";

export const metadata: Metadata = {
  title: "Expert Witness — Drugs, Memory & Eyewitness Reliability | Dr. Lilian Kloft-Heller",
  description:
    "Independent expert witness and forensic consultant on drug effects, false memory, and eyewitness reliability. Written expert reports, courtroom testimony, and pre-trial consulting for legal teams — Netherlands, Germany, and English-language proceedings across the EU.",
  alternates: {
    canonical: "/expert-witness",
  },
  openGraph: {
    title: "Expert Witness — Drugs, Memory & Eyewitness Reliability | Dr. Lilian Kloft-Heller",
    description:
      "Scientific expert opinion on intoxication, memory, and statement reliability for courts and legal teams. Reports, testimony, and pre-trial consulting.",
    url: `${siteUrl}/expert-witness`,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Expert Witness — Drugs, Memory & Eyewitness Reliability | Dr. Lilian Kloft-Heller",
    description:
      "Scientific expert opinion on intoxication, memory, and statement reliability for courts and legal teams.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Expert witness and forensic consulting",
  name: "Expert Witness Services — Dr. Lilian Kloft-Heller",
  description:
    "Independent scientific expert opinion on the effects of psychoactive substances on memory, perception, and statement reliability: written expert reports, courtroom testimony, pre-trial consulting, and corporate/policy advice.",
  url: `${siteUrl}/expert-witness`,
  areaServed: [
    { "@type": "Country", name: "Netherlands" },
    { "@type": "Country", name: "Germany" },
    { "@type": "AdministrativeArea", name: "European Union" },
  ],
  availableChannel: {
    "@type": "ServiceChannel",
    availableLanguage: ["English", "Dutch", "German"],
  },
  provider: {
    "@type": "Person",
    name: "Lilian Kloft-Heller",
    honorificPrefix: "Dr.",
    jobTitle: "Assistant Professor of Forensic Psychology and Psychopharmacology",
    url: siteUrl,
    worksFor: {
      "@type": "Organization",
      name: "Maastricht University, Faculty of Psychology and Neuroscience",
    },
  },
};

export default function ExpertWitnessLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
