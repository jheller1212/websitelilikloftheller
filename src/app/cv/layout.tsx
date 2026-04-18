import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CV — Dr. Lilian Kloft-Heller",
  description:
    "Curriculum Vitae of Dr. Lilian Kloft-Heller — Assistant Professor of Forensic Psychology at Maastricht University. Research on drugs, false memory, and eyewitness testimony.",
  alternates: {
    canonical: "/cv",
  },
  openGraph: {
    title: "CV — Dr. Lilian Kloft-Heller",
    description:
      "Academic CV: current position, education, research interests, and publications in forensic psychology and psychopharmacology.",
    url: "https://www.liliankloftheller.com/cv",
  },
};

export default function CVLayout({ children }: { children: React.ReactNode }) {
  return children;
}
