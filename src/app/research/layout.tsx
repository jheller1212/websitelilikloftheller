import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research — Dr. Lilian Kloft-Heller",
  description:
    "Research overview: false memory formation under substance influence, eyewitness reliability, forensic interviewing, and the intersection of psychopharmacology and the law.",
  alternates: {
    canonical: "/research",
  },
  openGraph: {
    title: "Research — Dr. Lilian Kloft-Heller",
    description:
      "Research programme at the intersection of forensic psychology and psychopharmacology: drugs, memory, and the law.",
    url: "https://www.liliankloftheller.com/research",
  },
};

export default function ResearchLayout({ children }: { children: React.ReactNode }) {
  return children;
}
