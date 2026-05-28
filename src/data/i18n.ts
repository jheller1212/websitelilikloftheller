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
    en: "Psychopharmacology \u00b7 Forensic Psychology \u00b7 Expert Consulting",
    de: "Psychopharmakologie \u00b7 Forensische Psychologie \u00b7 Gutachten & Beratung",
    nl: "Psychofarmacologie \u00b7 Forensische Psychologie \u00b7 Deskundigenadvies",
  },
  "hero.viewResearch": { en: "View Research", de: "Forschung ansehen", nl: "Onderzoek bekijken" },
  "hero.getInTouch": { en: "Get in Touch", de: "Kontakt aufnehmen", nl: "Neem contact op" },

  // ── About / Bento ─────────────────────────────────────────────────
  "about.eyebrow": { en: "About", de: "\u00dcber mich", nl: "Over mij" },
  "about.title": { en: "Research at the Intersection of Drugs, Memory & the Law", de: "Forschung an der Schnittstelle von Drogen, Ged\u00e4chtnis & Recht", nl: "Onderzoek op het snijvlak van drugs, geheugen & recht" },
  "about.bio": {
    en: "I am an Assistant Professor at Maastricht University, working at the intersection of forensic psychology and psychopharmacology. My research investigates how psychoactive substances — including cannabis, MDMA, benzodiazepines, ayahuasca, and psilocybin — affect memory processes, with a focus on false memory formation and its implications for eyewitness testimony and criminal investigations.\n\nI completed my Bachelor's in Psychology at the University of Groningen before moving to Maastricht for a Master's in Forensic Psychology, where I met my PhD supervisors Prof. Henry Otgaar, Prof. Jan Ramaekers, and Prof. Arjan Blokland. I defended my doctoral thesis Cum Laude — one of only 5% of PhD candidates in the Netherlands to receive this distinction, making me a triple Cum Laude awardee across my bachelor's, master's, and doctoral degrees.\n\nAfter my PhD, I was awarded a prestigious Rubicon grant by NWO to conduct postdoctoral research at the University of Bonn, investigating benzodiazepine effects on memory for virtual reality crime scenarios using eye-tracking measures. I returned to Maastricht University as an Assistant Professor, where I continue to bridge the gap between psychopharmacology and legal psychology.",
    de: "Ich bin Assistenzprofessorin an der Universit\u00e4t Maastricht und forsche an der Schnittstelle von forensischer Psychologie und Psychopharmakologie. Meine Forschung untersucht, wie psychoaktive Substanzen — darunter Cannabis, MDMA, Benzodiazepine, Ayahuasca und Psilocybin — Ged\u00e4chtnisprozesse beeinflussen, mit Schwerpunkt auf der Bildung falscher Erinnerungen und deren Auswirkungen auf Zeugenaussagen und strafrechtliche Ermittlungen.\n\nIch habe meinen Bachelor in Psychologie an der Universit\u00e4t Groningen abgeschlossen, bevor ich f\u00fcr den Master in Forensischer Psychologie nach Maastricht wechselte. Dort lernte ich meine Doktorv\u00e4ter Prof. Henry Otgaar, Prof. Jan Ramaekers und Prof. Arjan Blokland kennen. Meine Doktorarbeit schloss ich mit Cum Laude ab — eine Auszeichnung, die nur etwa 5% der Promovierenden in den Niederlanden erhalten.\n\nNach meiner Promotion erhielt ich ein Rubicon-Stipendium der NWO f\u00fcr einen Postdoc-Aufenthalt an der Universit\u00e4t Bonn. Heute bin ich als Assistenzprofessorin an der Universit\u00e4t Maastricht t\u00e4tig.",
    nl: "Ik ben universitair docent aan de Universiteit Maastricht en werk op het snijvlak van forensische psychologie en psychofarmacologie. Mijn onderzoek richt zich op de invloed van psychoactieve stoffen — waaronder cannabis, MDMA, benzodiazepinen, ayahuasca en psilocybine — op geheugenprocessen, met een focus op de vorming van valse herinneringen en de implicaties voor getuigenverklaringen en strafrechtelijk onderzoek.\n\nIk heb mijn bachelor Psychologie behaald aan de Rijksuniversiteit Groningen en ben vervolgens naar Maastricht verhuisd voor de master Forensische Psychologie, waar ik mijn promotoren Prof. Henry Otgaar, Prof. Jan Ramaekers en Prof. Arjan Blokland ontmoette. Mijn proefschrift verdedigde ik Cum Laude — een onderscheiding die slechts ongeveer 5% van de promovendi in Nederland ontvangt.\n\nNa mijn promotie ontving ik een Rubicon-beurs van NWO voor postdoctoraal onderzoek aan de Universiteit van Bonn. Momenteel ben ik als universitair docent werkzaam aan de Universiteit Maastricht.",
  },

  // Bento cards
  "bento.a.title": { en: "Substance Effects on Memory", de: "Substanzeffekte auf das Ged\u00e4chtnis", nl: "Effecten van middelen op geheugen" },
  "bento.a.desc": {
    en: "Researching how recreational and medical substances such as cannabis, alcohol, benzodiazepines, MDMA, and psychedelics affect memory for events.",
    de: "Erforschung, wie Freizeit- und medizinische Substanzen wie Cannabis, Alkohol, Benzodiazepine, MDMA und Psychedelika das Ged\u00e4chtnis f\u00fcr Ereignisse beeinflussen.",
    nl: "Onderzoek naar hoe recreatieve en medische middelen zoals cannabis, alcohol, benzodiazepinen, MDMA en psychedelica het geheugen voor gebeurtenissen be\u00efnvloeden.",
  },
  "bento.b.title": { en: "Validity of Eyewitness Testimony", de: "Validit\u00e4t von Zeugenaussagen", nl: "Validiteit van getuigenverklaringen" },
  "bento.b.desc": {
    en: "Testing how intoxication affects witness recall, false memories, suggestibility, and eyewitness identification.",
    de: "Untersuchung, wie Intoxikation die Erinnerung von Zeugen, falsche Erinnerungen, Suggestibilit\u00e4t und Zeugenidentifikation beeinflusst.",
    nl: "Onderzoek naar hoe intoxicatie de herinnering van getuigen, valse herinneringen, suggestibiliteit en getuigenidentificatie be\u00efnvloedt.",
  },
  "bento.c.title": { en: "Expert Witness Work", de: "Sachverst\u00e4ndigent\u00e4tigkeit", nl: "Deskundigenwerk" },
  "bento.c.desc": {
    en: "Translating drug and memory science into the courtroom, I work on cases involving substance use and memory.",
    de: "Ich bringe Drogen- und Ged\u00e4chtnisforschung in den Gerichtssaal und arbeite an F\u00e4llen, die Substanzkonsum und Ged\u00e4chtnis betreffen.",
    nl: "Ik vertaal drugs- en geheugenwetenschap naar de rechtszaal en werk aan zaken die middelengebruik en geheugen betreffen.",
  },
  "bento.d.title": { en: "Field Research", de: "Feldforschung", nl: "Veldonderzoek" },
  "bento.d.desc": {
    en: "Conducting ecologically valid research in real-world settings to study naturalistic substance effects.",
    de: "Durchf\u00fchrung \u00f6kologisch valider Forschung in realen Umgebungen zur Untersuchung naturalistischer Substanzeffekte.",
    nl: "Ecologisch valide onderzoek in natuurlijke omgevingen naar naturalistische effecten van middelen.",
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
  "pub.sortRelevance": { en: "Relevance", de: "Relevanz", nl: "Relevantie" },
  "pub.sortYear": { en: "Year", de: "Jahr", nl: "Jaar" },

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
  "collab.supervision": { en: "Student internships (apply here)", de: "Praktika f\u00fcr Studierende (hier bewerben)", nl: "Stages voor studenten (hier aanmelden)" },
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
  "contact.inquiry": { en: "Inquiry type", de: "Art der Anfrage", nl: "Type aanvraag" },
  "contact.inquiryDefault": { en: "Select...", de: "Ausw\u00e4hlen...", nl: "Selecteer..." },
  "contact.inquiryExpert": { en: "Expert witness / consulting", de: "Sachverst\u00e4ndigengutachten / Beratung", nl: "Deskundigenadvies / consultatie" },
  "contact.inquiryResearch": { en: "Research collaboration", de: "Forschungskooperation", nl: "Onderzoekssamenwerking" },
  "contact.inquirySpeaking": { en: "Speaking / workshop", de: "Vortrag / Workshop", nl: "Lezing / workshop" },
  "contact.inquiryMedia": { en: "Media / press", de: "Medien / Presse", nl: "Media / pers" },
  "contact.inquiryOther": { en: "Other", de: "Sonstiges", nl: "Overig" },
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
