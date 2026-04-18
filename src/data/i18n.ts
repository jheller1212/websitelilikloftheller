import type { Locale } from "@/lib/i18n";

type TranslationMap = Record<string, Record<Locale, string>>;

export const translations: TranslationMap = {
  // ── Nav ────────────────────────────────────────────────────────────
  "nav.about": { en: "About", de: "\u00dcber mich", nl: "Over mij" },
  "nav.research": { en: "Research", de: "Forschung", nl: "Onderzoek" },
  "nav.publications": { en: "Publications", de: "Publikationen", nl: "Publicaties" },
  "nav.media": { en: "Media", de: "Medien", nl: "Media" },
  "nav.cv": { en: "CV", de: "Lebenslauf", nl: "CV" },
  "nav.contact": { en: "Contact", de: "Kontakt", nl: "Contact" },

  // ── Hero ───────────────────────────────────────────────────────────
  "hero.subtitle": {
    en: "Forensic Psychology \u00b7 Psychopharmacology \u00b7 Maastricht University",
    de: "Forensische Psychologie \u00b7 Psychopharmakologie \u00b7 Universit\u00e4t Maastricht",
    nl: "Forensische Psychologie \u00b7 Psychofarmacologie \u00b7 Universiteit Maastricht",
  },
  "hero.viewResearch": { en: "View Research", de: "Forschung ansehen", nl: "Onderzoek bekijken" },
  "hero.getInTouch": { en: "Get in Touch", de: "Kontakt aufnehmen", nl: "Neem contact op" },

  // ── About / Bento ─────────────────────────────────────────────────
  "about.eyebrow": { en: "About", de: "\u00dcber mich", nl: "Over mij" },
  "about.title": { en: "Research at the Intersection of Drugs, Memory & the Law", de: "Forschung an der Schnittstelle von Drogen, Ged\u00e4chtnis & Recht", nl: "Onderzoek op het snijvlak van drugs, geheugen & recht" },
  "about.bio": {
    en: "I am an Assistant Professor at Maastricht University, working at the intersection of forensic psychology and psychopharmacology. My research investigates how psychoactive substances affect memory processes, with a focus on false memory formation and its implications for eyewitness testimony and criminal investigations.",
    de: "Ich bin Assistenzprofessorin an der Universit\u00e4t Maastricht und forsche an der Schnittstelle von forensischer Psychologie und Psychopharmakologie. Meine Forschung untersucht, wie psychoaktive Substanzen Ged\u00e4chtnisprozesse beeinflussen, mit Schwerpunkt auf der Bildung falscher Erinnerungen und deren Auswirkungen auf Zeugenaussagen und strafrechtliche Ermittlungen.",
    nl: "Ik ben universitair docent aan de Universiteit Maastricht en werk op het snijvlak van forensische psychologie en psychofarmacologie. Mijn onderzoek richt zich op de invloed van psychoactieve stoffen op geheugenprocessen, met een focus op de vorming van valse herinneringen en de implicaties voor getuigenverklaringen en strafrechtelijk onderzoek.",
  },

  // Bento cards
  "bento.a.title": { en: "False Memory & Cannabis", de: "Falsche Erinnerungen & Cannabis", nl: "Valse herinneringen & cannabis" },
  "bento.a.desc": {
    en: "Pioneering research demonstrating that cannabis increases susceptibility to false memories, published in PNAS and covered by CNN, National Geographic, and 100+ outlets worldwide.",
    de: "Bahnbrechende Forschung, die zeigt, dass Cannabis die Anf\u00e4lligkeit f\u00fcr falsche Erinnerungen erh\u00f6ht, ver\u00f6ffentlicht in PNAS und berichtet von CNN, National Geographic und \u00fcber 100 Medien weltweit.",
    nl: "Baanbrekend onderzoek dat aantoont dat cannabis de vatbaarheid voor valse herinneringen vergroot, gepubliceerd in PNAS en belicht door CNN, National Geographic en meer dan 100 media wereldwijd.",
  },
  "bento.b.title": { en: "MDMA & Memory", de: "MDMA & Ged\u00e4chtnis", nl: "MDMA & geheugen" },
  "bento.b.desc": {
    en: "Investigating how MDMA affects false memory formation, both immediately and after a delay, with implications for therapeutic and forensic contexts.",
    de: "Untersuchung, wie MDMA die Bildung falscher Erinnerungen beeinflusst, sowohl unmittelbar als auch verz\u00f6gert, mit Implikationen f\u00fcr therapeutische und forensische Kontexte.",
    nl: "Onderzoek naar hoe MDMA de vorming van valse herinneringen be\u00efnvloedt, zowel direct als vertraagd, met implicaties voor therapeutische en forensische contexten.",
  },
  "bento.c.title": { en: "Psychedelics & Episodic Memory", de: "Psychedelika & episodisches Ged\u00e4chtnis", nl: "Psychedelica & episodisch geheugen" },
  "bento.c.desc": {
    en: "Exploring how ayahuasca and psilocybin affect episodic memory and false memory susceptibility, bridging psychedelic science and forensic psychology.",
    de: "Erforschung, wie Ayahuasca und Psilocybin episodisches Ged\u00e4chtnis und die Anf\u00e4lligkeit f\u00fcr falsche Erinnerungen beeinflussen.",
    nl: "Verkenning van hoe ayahuasca en psilocybine episodisch geheugen en de vatbaarheid voor valse herinneringen be\u00efnvloeden.",
  },
  "bento.d.title": { en: "Forensic Interviewing", de: "Forensische Befragung", nl: "Forensisch verhoor" },
  "bento.d.desc": {
    en: "Developing evidence-based guidelines for interviewing intoxicated witnesses and suspects in criminal investigations.",
    de: "Entwicklung evidenzbasierter Leitlinien f\u00fcr die Befragung intoxikierter Zeugen und Verd\u00e4chtiger in strafrechtlichen Ermittlungen.",
    nl: "Ontwikkeling van evidence-based richtlijnen voor het verhoren van ge\u00efntoxiceerde getuigen en verdachten in strafrechtelijk onderzoek.",
  },
  "bento.e.title": { en: "Eyewitness Reliability", de: "Zuverl\u00e4ssigkeit von Zeugen", nl: "Betrouwbaarheid van getuigen" },
  "bento.e.desc": {
    en: "Understanding how substance use impacts the reliability of eyewitness testimony and its implications for the justice system.",
    de: "Verst\u00e4ndnis, wie Substanzkonsum die Zuverl\u00e4ssigkeit von Zeugenaussagen und deren Auswirkungen auf das Justizsystem beeinflusst.",
    nl: "Begrip van hoe middelengebruik de betrouwbaarheid van getuigenverklaringen en de implicaties voor het rechtssysteem be\u00efnvloedt.",
  },
  "bento.f.title": { en: "Field Studies", de: "Feldstudien", nl: "Veldonderzoek" },
  "bento.f.desc": {
    en: "Conducting ecological research in real-world settings to study false memory formation under naturalistic substance use and sleep deprivation.",
    de: "\u00d6kologische Forschung in realen Umgebungen zur Untersuchung der Bildung falscher Erinnerungen bei nat\u00fcrlichem Substanzkonsum und Schlafentzug.",
    nl: "Ecologisch onderzoek in natuurlijke omgevingen naar de vorming van valse herinneringen bij natuurlijk middelengebruik en slaaptekort.",
  },

  // ── Publications ──────────────────────────────────────────────────
  "pub.eyebrow": { en: "Research Output", de: "Forschungsergebnisse", nl: "Onderzoeksresultaten" },
  "pub.title": { en: "Publications", de: "Publikationen", nl: "Publicaties" },
  "pub.count": { en: "publications", de: "Publikationen", nl: "publicaties" },
  "pub.showAll": { en: "Show all", de: "Alle anzeigen", nl: "Alles tonen" },
  "pub.showLess": { en: "Show fewer", de: "Weniger anzeigen", nl: "Minder tonen" },
  "pub.papers": { en: "publications", de: "Publikationen", nl: "publicaties" },
  "pub.featured": { en: "Featured", de: "Ausgew\u00e4hlt", nl: "Uitgelicht" },
  "pub.filterAll": { en: "All", de: "Alle", nl: "Alle" },
  "pub.article": { en: "Articles", de: "Artikel", nl: "Artikelen" },
  "pub.review": { en: "Reviews", de: "\u00dcbersichten", nl: "Reviews" },
  "pub.chapter": { en: "Chapters", de: "Kapitel", nl: "Hoofdstukken" },
  "pub.thesis": { en: "Thesis", de: "Dissertation", nl: "Proefschrift" },
  "pub.comment": { en: "Comments", de: "Kommentare", nl: "Commentaren" },
  "pub.abstract": { en: "Abstracts", de: "Abstracts", nl: "Abstracts" },

  // ── Media / Press ─────────────────────────────────────────────────
  "media.eyebrow": { en: "Global Coverage", de: "Weltweite Berichterstattung", nl: "Wereldwijde aandacht" },
  "media.title": { en: "In the Media", de: "In den Medien", nl: "In de media" },
  "media.subtitle": {
    en: "Research featured in international press across 20+ countries",
    de: "Forschung in internationalen Medien in \u00fcber 20 L\u00e4ndern vorgestellt",
    nl: "Onderzoek in internationale media in meer dan 20 landen",
  },
  "media.featuredIn": { en: "Featured In", de: "Bekannt aus", nl: "Bekend van" },
  "media.allCoverage": { en: "All Media Coverage", de: "Alle Medienberichte", nl: "Alle media-aandacht" },
  "media.showAll": { en: "Show all coverage", de: "Alle Berichte anzeigen", nl: "Alle media tonen" },
  "media.showLess": { en: "Show fewer", de: "Weniger anzeigen", nl: "Minder tonen" },
  "media.outlets": { en: "outlets", de: "Medien", nl: "media" },
  "media.countries": { en: "countries", de: "L\u00e4nder", nl: "landen" },
  "media.languages": { en: "languages", de: "Sprachen", nl: "talen" },

  // ── Collaborate ───────────────────────────────────────────────────
  "collab.eyebrow": { en: "Collaborate", de: "Kooperation", nl: "Samenwerken" },
  "collab.title": { en: "Let\u2019s Work Together", de: "Zusammenarbeit", nl: "Laten we samenwerken" },
  "collab.intro": {
    en: "I am always looking for opportunities to collaborate with researchers, legal professionals, and policymakers who share an interest in the intersection of drugs, memory, and the law.",
    de: "Ich bin stets auf der Suche nach M\u00f6glichkeiten zur Zusammenarbeit mit Forschern, Juristen und Entscheidungstr\u00e4gern, die ein Interesse an der Schnittstelle von Drogen, Ged\u00e4chtnis und Recht teilen.",
    nl: "Ik ben altijd op zoek naar mogelijkheden om samen te werken met onderzoekers, juridische professionals en beleidsmakers die een interesse delen in het snijvlak van drugs, geheugen en recht.",
  },
  "collab.research": { en: "Joint research projects", de: "Gemeinsame Forschungsprojekte", nl: "Gezamenlijke onderzoeksprojecten" },
  "collab.expert": { en: "Expert witness & consulting", de: "Sachverst\u00e4ndigengutachten & Beratung", nl: "Deskundige getuige & advies" },
  "collab.speaking": { en: "Speaking & workshops", de: "Vortr\u00e4ge & Workshops", nl: "Lezingen & workshops" },
  "collab.supervision": { en: "PhD & thesis supervision", de: "Promotion & Betreuung", nl: "Promotie & begeleiding" },
  "collab.cta": { en: "Get in Touch", de: "Kontakt aufnehmen", nl: "Neem contact op" },

  // ── Contact ───────────────────────────────────────────────────────
  "contact.eyebrow": { en: "Contact", de: "Kontakt", nl: "Contact" },
  "contact.title": { en: "Get in Touch", de: "Kontakt aufnehmen", nl: "Neem contact op" },
  "contact.subtitle": {
    en: "Whether you have a question about my research, want to collaborate, or need expert consultation \u2014 I\u2019d love to hear from you.",
    de: "Ob Sie eine Frage zu meiner Forschung haben, zusammenarbeiten m\u00f6chten oder eine Expertenberatung ben\u00f6tigen \u2014 ich freue mich von Ihnen zu h\u00f6ren.",
    nl: "Of u een vraag heeft over mijn onderzoek, wilt samenwerken, of expertadvies nodig heeft \u2014 ik hoor graag van u.",
  },
  "contact.name": { en: "Name", de: "Name", nl: "Naam" },
  "contact.namePlaceholder": { en: "Your name", de: "Ihr Name", nl: "Uw naam" },
  "contact.email": { en: "Email", de: "E-Mail", nl: "E-mail" },
  "contact.message": { en: "Message", de: "Nachricht", nl: "Bericht" },
  "contact.messagePlaceholder": { en: "How can I help?", de: "Wie kann ich helfen?", nl: "Hoe kan ik helpen?" },
  "contact.send": { en: "Send Message", de: "Nachricht senden", nl: "Bericht versturen" },
  "contact.sending": { en: "Sending...", de: "Wird gesendet...", nl: "Wordt verstuurd..." },
  "contact.thanks": { en: "Thank you!", de: "Vielen Dank!", nl: "Bedankt!" },
  "contact.thanksSub": { en: "I\u2019ll get back to you soon.", de: "Ich melde mich bald bei Ihnen.", nl: "Ik neem snel contact met u op." },
  "contact.sendAnother": { en: "Send another message", de: "Weitere Nachricht senden", nl: "Nog een bericht versturen" },
  "contact.office": { en: "Office", de: "B\u00fcro", nl: "Kantoor" },
  "contact.gdpr": {
    en: "I consent to my data being processed. <a>Privacy Policy</a>",
    de: "Ich stimme der Verarbeitung meiner Daten zu. <a>Datenschutzerkl\u00e4rung</a>",
    nl: "Ik ga akkoord met de verwerking van mijn gegevens. <a>Privacybeleid</a>",
  },

  // ── Footer ────────────────────────────────────────────────────────
  "footer.rights": { en: "All rights reserved.", de: "Alle Rechte vorbehalten.", nl: "Alle rechten voorbehouden." },
  "footer.impressum": { en: "Impressum & Privacy", de: "Impressum & Datenschutz", nl: "Impressum & Privacy" },

  // ── CV page ───────────────────────────────────────────────────────
  "cv.title": { en: "Curriculum Vitae", de: "Lebenslauf", nl: "Curriculum Vitae" },
  "cv.download": { en: "Download PDF", de: "PDF herunterladen", nl: "PDF downloaden" },
  "cv.backHome": { en: "Back to Home", de: "Zur\u00fcck zur Startseite", nl: "Terug naar home" },

  // ── Research page ─────────────────────────────────────────────────
  "research.title": { en: "Research", de: "Forschung", nl: "Onderzoek" },
  "research.backHome": { en: "Back to Home", de: "Zur\u00fcck zur Startseite", nl: "Terug naar home" },
};
