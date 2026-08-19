import type { Metadata } from "next";
import { OG_IMAGE } from "@/lib/og";

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
    url: "https://liliankloft.com/research",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    images: [OG_IMAGE.url],
  },
};

export default function ResearchLayout({ children }: { children: React.ReactNode }) {
  return children;
}
