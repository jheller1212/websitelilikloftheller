import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import { I18nProvider } from "@/lib/i18n";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const siteUrl = "https://jheller1212.github.io/websitelilikloftheller";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Dr. Lilian Kloft-Heller | Forensic Psychology & Psychopharmacology",
  description:
    "Dr. Lilian Kloft-Heller is a researcher at Maastricht University specializing in forensic psychology, psychopharmacology, and memory research. Available for research collaboration, speaking, and media inquiries.",
  keywords: [
    "Lilian Kloft-Heller",
    "Lilian Kloft",
    "forensic psychology",
    "psychopharmacology",
    "memory research",
    "Maastricht University",
    "false memories",
    "drug-facilitated crime",
    "eyewitness memory",
    "legal psychology",
  ],
  authors: [{ name: "Lilian Kloft-Heller", url: siteUrl }],
  creator: "Lilian Kloft-Heller",
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "48x48" }],
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Dr. Lilian Kloft-Heller -- Forensic Psychology & Psychopharmacology",
    description:
      "Researcher at Maastricht University specializing in forensic psychology, psychopharmacology, and the intersection of drugs and memory in legal contexts.",
    url: siteUrl,
    siteName: "Lilian Kloft-Heller",
    type: "profile",
    locale: "en_US",
    alternateLocale: ["de_DE", "nl_NL"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Lilian Kloft-Heller -- Forensic Psychology & Psychopharmacology",
    description:
      "Researcher at Maastricht University specializing in forensic psychology, psychopharmacology, and the intersection of drugs and memory in legal contexts.",
    creator: "@LilianKloft",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Lilian Kloft-Heller",
  givenName: "Lilian",
  familyName: "Kloft-Heller",
  honorificPrefix: "Dr.",
  url: siteUrl,
  jobTitle: "Assistant Professor & Expert Consultant in Forensic Psychology and Psychopharmacology",
  worksFor: {
    "@type": "Organization",
    name: "Maastricht University, Faculty of Psychology and Neuroscience",
    url: "https://www.maastrichtuniversity.nl",
  },
  knowsAbout: [
    "Forensic Psychology",
    "Psychopharmacology",
    "False Memories",
    "Eyewitness Memory",
    "Expert Witness Testimony",
    "Drug Effects on Memory",
    "Legal Psychology",
    "Intoxicated Witness Reliability",
  ],
  sameAs: [
    "https://www.linkedin.com/in/lilian-kloft/",
    "https://orcid.org/0000-0002-4615-9581",
    "https://scholar.google.com/citations?user=d8j0F2UAAAAJ&hl=en",
    "https://www.researchgate.net/profile/Lilian-Kloft",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>
          <I18nProvider>{children}</I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
