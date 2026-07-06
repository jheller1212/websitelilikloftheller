import type { Locale } from "@/lib/i18n";

type TranslationMap = Record<string, Record<Locale, string>>;

export const translations: TranslationMap = {
  // ── Nav ────────────────────────────────────────────────────────────
  "nav.about": { en: "About", de: "Über mich", nl: "Over mij" },
  "nav.research": { en: "Research", de: "Forschung", nl: "Onderzoek" },
  "nav.publications": { en: "Publications", de: "Publikationen", nl: "Publicaties" },
  "nav.media": { en: "Media", de: "Medien", nl: "Media" },
  "nav.cv": { en: "CV", de: "Lebenslauf", nl: "CV" },
  "nav.contact": { en: "Contact", de: "Kontakt", nl: "Contact" },
  "nav.expertWitness": { en: "Expert Witness", de: "Sachverständigin", nl: "Deskundige" },

  // ── Hero ───────────────────────────────────────────────────────────
  "hero.subtitle": {
    en: "Psychopharmacology · Forensic Psychology · Expert Consulting",
    de: "Psychopharmakologie · Forensische Psychologie · Gutachten & Beratung",
    nl: "Psychofarmacologie · Forensische Psychologie · Deskundigenadvies",
  },
  "hero.viewResearch": { en: "View Research", de: "Forschung ansehen", nl: "Onderzoek bekijken" },
  "hero.getInTouch": { en: "Get in Touch", de: "Kontakt aufnehmen", nl: "Neem contact op" },
  "hero.expertWitness": {
    en: "Expert Witness Services",
    de: "Gutachten & Beratung",
    nl: "Deskundigenadvies",
  },

  // ── About / Bento ─────────────────────────────────────────────────
  "about.eyebrow": { en: "About", de: "Über mich", nl: "Over mij" },
  "about.title": { en: "Research at the Intersection of Drugs, Memory & the Law", de: "Forschung an der Schnittstelle von Drogen, Gedächtnis & Recht", nl: "Onderzoek op het snijvlak van drugs, geheugen & recht" },
  "about.bio": {
    en: "I am an Assistant Professor at Maastricht University, working at the intersection of forensic psychology and psychopharmacology. My research investigates how psychoactive substances — including cannabis, MDMA, benzodiazepines, ayahuasca, and psilocybin — affect memory processes, with a focus on false memory formation and its implications for eyewitness testimony and criminal investigations.\n\nI completed my Bachelor's in Psychology at the University of Groningen before moving to Maastricht for a Master's in Forensic Psychology, where I met my PhD supervisors Prof. Henry Otgaar, Prof. Jan Ramaekers, and Prof. Arjan Blokland. I defended my doctoral thesis Cum Laude — one of only 5% of PhD candidates in the Netherlands to receive this distinction, making me a triple Cum Laude awardee across my bachelor's, master's, and doctoral degrees.\n\nAfter my PhD, I was awarded a prestigious Rubicon grant by NWO to conduct postdoctoral research at the University of Bonn, investigating benzodiazepine effects on memory for virtual reality crime scenarios using eye-tracking measures. I returned to Maastricht University as an Assistant Professor, where I continue to bridge the gap between psychopharmacology and legal psychology.",
    de: "Ich bin Assistenzprofessorin an der Universität Maastricht und forsche an der Schnittstelle von forensischer Psychologie und Psychopharmakologie. Meine Forschung untersucht, wie psychoaktive Substanzen — darunter Cannabis, MDMA, Benzodiazepine, Ayahuasca und Psilocybin — Gedächtnisprozesse beeinflussen, mit Schwerpunkt auf der Bildung falscher Erinnerungen und deren Auswirkungen auf Zeugenaussagen und strafrechtliche Ermittlungen.\n\nIch habe meinen Bachelor in Psychologie an der Universität Groningen abgeschlossen, bevor ich für den Master in Forensischer Psychologie nach Maastricht wechselte. Dort lernte ich meine Doktorväter Prof. Henry Otgaar, Prof. Jan Ramaekers und Prof. Arjan Blokland kennen. Meine Doktorarbeit schloss ich mit Cum Laude ab — eine Auszeichnung, die nur etwa 5% der Promovierenden in den Niederlanden erhalten.\n\nNach meiner Promotion erhielt ich ein Rubicon-Stipendium der NWO für einen Postdoc-Aufenthalt an der Universität Bonn. Heute bin ich als Assistenzprofessorin an der Universität Maastricht tätig.",
    nl: "Ik ben universitair docent aan de Universiteit Maastricht en werk op het snijvlak van forensische psychologie en psychofarmacologie. Mijn onderzoek richt zich op de invloed van psychoactieve stoffen — waaronder cannabis, MDMA, benzodiazepinen, ayahuasca en psilocybine — op geheugenprocessen, met een focus op de vorming van valse herinneringen en de implicaties voor getuigenverklaringen en strafrechtelijk onderzoek.\n\nIk heb mijn bachelor Psychologie behaald aan de Rijksuniversiteit Groningen en ben vervolgens naar Maastricht verhuisd voor de master Forensische Psychologie, waar ik mijn promotoren Prof. Henry Otgaar, Prof. Jan Ramaekers en Prof. Arjan Blokland ontmoette. Mijn proefschrift verdedigde ik Cum Laude — een onderscheiding die slechts ongeveer 5% van de promovendi in Nederland ontvangt.\n\nNa mijn promotie ontving ik een Rubicon-beurs van NWO voor postdoctoraal onderzoek aan de Universiteit van Bonn. Momenteel ben ik als universitair docent werkzaam aan de Universiteit Maastricht.",
  },

  // Bento cards
  "bento.a.title": { en: "Substance Effects on Memory", de: "Substanzeffekte auf das Gedächtnis", nl: "Effecten van middelen op geheugen" },
  "bento.a.desc": {
    en: "Researching how recreational and medical substances such as cannabis, alcohol, benzodiazepines, MDMA, and psychedelics affect memory for events.",
    de: "Erforschung, wie Freizeit- und medizinische Substanzen wie Cannabis, Alkohol, Benzodiazepine, MDMA und Psychedelika das Gedächtnis für Ereignisse beeinflussen.",
    nl: "Onderzoek naar hoe recreatieve en medische middelen zoals cannabis, alcohol, benzodiazepinen, MDMA en psychedelica het geheugen voor gebeurtenissen beïnvloeden.",
  },
  "bento.b.title": { en: "Validity of Eyewitness Testimony", de: "Validität von Zeugenaussagen", nl: "Validiteit van getuigenverklaringen" },
  "bento.b.desc": {
    en: "Testing how intoxication affects witness recall, false memories, suggestibility, and eyewitness identification.",
    de: "Untersuchung, wie Intoxikation die Erinnerung von Zeugen, falsche Erinnerungen, Suggestibilität und Zeugenidentifikation beeinflusst.",
    nl: "Onderzoek naar hoe intoxicatie de herinnering van getuigen, valse herinneringen, suggestibiliteit en getuigenidentificatie beïnvloedt.",
  },
  "bento.c.title": { en: "Expert Witness Work", de: "Sachverständigentätigkeit", nl: "Deskundigenwerk" },
  "bento.c.desc": {
    en: "Translating drug and memory science into the courtroom, I work on cases involving substance use and memory.",
    de: "Ich bringe Drogen- und Gedächtnisforschung in den Gerichtssaal und arbeite an Fällen, die Substanzkonsum und Gedächtnis betreffen.",
    nl: "Ik vertaal drugs- en geheugenwetenschap naar de rechtszaal en werk aan zaken die middelengebruik en geheugen betreffen.",
  },
  "bento.d.title": { en: "Field Research", de: "Feldforschung", nl: "Veldonderzoek" },
  "bento.d.desc": {
    en: "Conducting ecologically valid research in real-world settings to study naturalistic substance effects.",
    de: "Durchführung ökologisch valider Forschung in realen Umgebungen zur Untersuchung naturalistischer Substanzeffekte.",
    nl: "Ecologisch valide onderzoek in natuurlijke omgevingen naar naturalistische effecten van middelen.",
  },

  // ── Publications ──────────────────────────────────────────────────
  "pub.eyebrow": { en: "Research Output", de: "Forschungsergebnisse", nl: "Onderzoeksresultaten" },
  "pub.title": { en: "Publications", de: "Publikationen", nl: "Publicaties" },
  "pub.count": { en: "publications", de: "Publikationen", nl: "publicaties" },
  "pub.showAll": { en: "Show all", de: "Alle anzeigen", nl: "Alles tonen" },
  "pub.showLess": { en: "Show fewer", de: "Weniger anzeigen", nl: "Minder tonen" },
  "pub.papers": { en: "publications", de: "Publikationen", nl: "publicaties" },
  "pub.featured": { en: "Featured", de: "Ausgewählt", nl: "Uitgelicht" },
  "pub.filterAll": { en: "All", de: "Alle", nl: "Alle" },
  "pub.article": { en: "Articles", de: "Artikel", nl: "Artikelen" },
  "pub.review": { en: "Reviews", de: "Übersichten", nl: "Reviews" },
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
    de: "Forschung in internationalen Medien in über 20 Ländern vorgestellt",
    nl: "Onderzoek in internationale media in meer dan 20 landen",
  },
  "media.featuredIn": { en: "Featured In", de: "Bekannt aus", nl: "Bekend van" },
  "media.allCoverage": { en: "All Media Coverage", de: "Alle Medienberichte", nl: "Alle media-aandacht" },
  "media.showAll": { en: "Show all coverage", de: "Alle Berichte anzeigen", nl: "Alle media tonen" },
  "media.showLess": { en: "Show fewer", de: "Weniger anzeigen", nl: "Minder tonen" },
  "media.outlets": { en: "outlets", de: "Medien", nl: "media" },
  "media.countries": { en: "countries", de: "Länder", nl: "landen" },
  "media.languages": { en: "languages", de: "Sprachen", nl: "talen" },

  // ── Collaborate ───────────────────────────────────────────────────
  "collab.eyebrow": { en: "Collaborate", de: "Kooperation", nl: "Samenwerken" },
  "collab.title": { en: "Let’s Work Together", de: "Zusammenarbeit", nl: "Laten we samenwerken" },
  "collab.intro": {
    en: "I am always looking for opportunities to collaborate with researchers, legal professionals, and policymakers who share an interest in the intersection of drugs, memory, and the law.",
    de: "Ich bin stets auf der Suche nach Möglichkeiten zur Zusammenarbeit mit Forschern, Juristen und Entscheidungsträgern, die ein Interesse an der Schnittstelle von Drogen, Gedächtnis und Recht teilen.",
    nl: "Ik ben altijd op zoek naar mogelijkheden om samen te werken met onderzoekers, juridische professionals en beleidsmakers die een interesse delen in het snijvlak van drugs, geheugen en recht.",
  },
  "collab.research": { en: "Joint research projects", de: "Gemeinsame Forschungsprojekte", nl: "Gezamenlijke onderzoeksprojecten" },
  "collab.expert": { en: "Expert witness & consulting", de: "Sachverständigengutachten & Beratung", nl: "Deskundige getuige & advies" },
  "collab.speaking": { en: "Speaking & workshops", de: "Vorträge & Workshops", nl: "Lezingen & workshops" },
  "collab.supervision": { en: "Student internships (apply here)", de: "Praktika für Studierende (hier bewerben)", nl: "Stages voor studenten (hier aanmelden)" },
  "collab.cta": { en: "Get in Touch", de: "Kontakt aufnehmen", nl: "Neem contact op" },

  // ── Contact ───────────────────────────────────────────────────────
  "contact.eyebrow": { en: "Contact", de: "Kontakt", nl: "Contact" },
  "contact.title": { en: "Get in Touch", de: "Kontakt aufnehmen", nl: "Neem contact op" },
  "contact.subtitle": {
    en: "Whether you have a question about my research, want to collaborate, or need expert consultation — I’d love to hear from you.",
    de: "Ob Sie eine Frage zu meiner Forschung haben, zusammenarbeiten möchten oder eine Expertenberatung benötigen — ich freue mich von Ihnen zu hören.",
    nl: "Of u een vraag heeft over mijn onderzoek, wilt samenwerken, of expertadvies nodig heeft — ik hoor graag van u.",
  },
  "contact.name": { en: "Name", de: "Name", nl: "Naam" },
  "contact.namePlaceholder": { en: "Your name", de: "Ihr Name", nl: "Uw naam" },
  "contact.email": { en: "Email", de: "E-Mail", nl: "E-mail" },
  "contact.message": { en: "Message", de: "Nachricht", nl: "Bericht" },
  "contact.messagePlaceholder": { en: "How can I help?", de: "Wie kann ich helfen?", nl: "Hoe kan ik helpen?" },
  "contact.confidentiality": {
    en: "Please do not include case-identifying details in this form — no names, case numbers, or facts of an ongoing matter. Describe your inquiry in general terms; confidential material can be exchanged through a secure channel after first contact.",
    de: "Bitte geben Sie in diesem Formular keine fallbezogenen Angaben an — keine Namen, Aktenzeichen oder Sachverhalte eines laufenden Verfahrens. Beschreiben Sie Ihr Anliegen allgemein; vertrauliche Unterlagen können nach der ersten Kontaktaufnahme über einen sicheren Kanal ausgetauscht werden.",
    nl: "Vermeld in dit formulier geen zaakgebonden gegevens — geen namen, zaaknummers of feiten van een lopende zaak. Omschrijf uw vraag in algemene termen; vertrouwelijke stukken kunnen na het eerste contact via een beveiligd kanaal worden uitgewisseld.",
  },
  "contact.inquiry": { en: "Inquiry type", de: "Art der Anfrage", nl: "Type aanvraag" },
  "contact.inquiryDefault": { en: "Select...", de: "Auswählen...", nl: "Selecteer..." },
  "contact.inquiryExpertReport": {
    en: "Expert report / Court testimony",
    de: "Gutachten / Gerichtssachverständiger",
    nl: "Deskundigenrapport / Getuigenverklaring",
  },
  "contact.inquiryPreTrial": {
    en: "Pre-trial / Legal consulting",
    de: "Vorprozessuale / Rechtsberatung",
    nl: "Pre-processueel / Juridisch advies",
  },
  "contact.inquiryCorporate": {
    en: "Corporate / Policy consulting",
    de: "Unternehmens- / Politikberatung",
    nl: "Bedrijfs- / Beleidsadvies",
  },
  "contact.inquiryAcademic": {
    en: "Academic collaboration",
    de: "Wissenschaftliche Kooperation",
    nl: "Academische samenwerking",
  },
  "contact.inquirySpeaking": { en: "Speaking / workshop", de: "Vortrag / Workshop", nl: "Lezing / workshop" },
  "contact.inquiryMedia": { en: "Media / press", de: "Medien / Presse", nl: "Media / pers" },
  "contact.inquiryOther": { en: "Other", de: "Sonstiges", nl: "Overig" },
  "contact.send": { en: "Send Message", de: "Nachricht senden", nl: "Bericht versturen" },
  "contact.sending": { en: "Sending...", de: "Wird gesendet...", nl: "Wordt verstuurd..." },
  "contact.thanks": { en: "Thank you!", de: "Vielen Dank!", nl: "Bedankt!" },
  "contact.thanksSub": { en: "I’ll get back to you soon.", de: "Ich melde mich bald bei Ihnen.", nl: "Ik neem snel contact met u op." },
  "contact.sendAnother": { en: "Send another message", de: "Weitere Nachricht senden", nl: "Nog een bericht versturen" },
  "contact.office": { en: "Office", de: "Büro", nl: "Kantoor" },
  "contact.gdpr": {
    en: "I consent to my data being processed. <a>Privacy Policy</a>",
    de: "Ich stimme der Verarbeitung meiner Daten zu. <a>Datenschutzerklärung</a>",
    nl: "Ik ga akkoord met de verwerking van mijn gegevens. <a>Privacybeleid</a>",
  },

  // ── Footer ────────────────────────────────────────────────────────
  "footer.rights": { en: "All rights reserved.", de: "Alle Rechte vorbehalten.", nl: "Alle rechten voorbehouden." },
  "footer.impressum": { en: "Impressum & Privacy", de: "Impressum & Datenschutz", nl: "Impressum & Privacy" },

  // ── CV page ───────────────────────────────────────────────────────
  "cv.title": { en: "Curriculum Vitae", de: "Lebenslauf", nl: "Curriculum Vitae" },
  "cv.download": { en: "Download PDF", de: "PDF herunterladen", nl: "PDF downloaden" },
  "cv.backHome": { en: "Back to Home", de: "Zurück zur Startseite", nl: "Terug naar home" },

  // ── Research page ─────────────────────────────────────────────────
  "research.title": { en: "Research", de: "Forschung", nl: "Onderzoek" },
  "research.backHome": { en: "Back to Home", de: "Zurück zur Startseite", nl: "Terug naar home" },

  // ── Expert Witness — Homepage Section ────────────────────────────
  "ew.eyebrow": {
    en: "Expert Witness & Forensic Consulting",
    de: "Sachverständigengutachten & Forensische Beratung",
    nl: "Deskundigenadvies & Forensisch Consult",
  },
  "ew.title": {
    en: "Science for the Courtroom",
    de: "Wissenschaft für den Gerichtssaal",
    nl: "Wetenschap voor de rechtszaal",
  },
  "ew.intro": {
    en: "The reliability of witness and victim statements given under the influence of psychoactive substances is one of the most consequential and least understood questions in forensic practice. I translate peer-reviewed research on drugs, memory, and false-memory formation directly into expert opinion — grounding legal proceedings in the best available science.",
    de: "Die Zuverlässigkeit von Zeugen- und Opferaussagen unter dem Einfluss psychoaktiver Substanzen ist eine der folgenreichsten und am wenigsten verstandenen Fragen der forensischen Praxis. Ich übersetze peer-reviewed Forschung zu Drogen, Gedächtnis und falschen Erinnerungen in fundierte Gutachten — und verankere rechtliche Verfahren in der besten verfügbaren Wissenschaft.",
    nl: "De betrouwbaarheid van getuigen- en slachtofferverklaringen die zijn afgelegd onder invloed van psychoactieve stoffen is een van de meest ingrijpende en minst begrepen vragen in de forensische praktijk. Ik vertaal peer-reviewed onderzoek naar drugs, geheugen en valse-herinneringsvorming direct naar deskundigenadvies — zodat juridische procedures worden gegrond in de best beschikbare wetenschap.",
  },
  "ew.service1.title": {
    en: "Written Expert Reports",
    de: "Schriftliche Gutachten",
    nl: "Schriftelijke Deskundigenrapporten",
  },
  "ew.service1.desc": {
    en: "Assessing how intoxication or substance use may have affected memory, perception, or statement reliability in a specific case — delivered as a written scientific opinion for use in legal proceedings.",
    de: "Beurteilung, wie Intoxikation oder Substanzkonsum Gedächtnis, Wahrnehmung oder Aussagenzuverlässigkeit in einem konkreten Fall beeinflusst haben könnte — als schriftliches wissenschaftliches Gutachten für rechtliche Verfahren.",
    nl: "Beoordeling van hoe intoxicatie of middelengebruik het geheugen, de waarneming of de betrouwbaarheid van een verklaring in een specifieke zaak kan hebben beïnvloed — geleverd als een schriftelijk wetenschappelijk advies voor gebruik in juridische procedures.",
  },
  "ew.service2.title": {
    en: "Courtroom Expert Testimony",
    de: "Gerichtliche Sachverständigenaussage",
    nl: "Getuigenverklaring als Deskundige",
  },
  "ew.service2.desc": {
    en: "Presenting and explaining the scientific evidence on drug effects and memory reliability to courts and other judicial bodies — in plain language accessible to judges and counsel. In-person testimony is available in the Netherlands, Germany, and English-language proceedings across the EU.",
    de: "Präsentation und Erklärung wissenschaftlicher Erkenntnisse zu Drogeneffekten und Aussagenzuverlässigkeit vor Gerichten und anderen Justizorganen — in verständlicher Sprache für Richter und Anwälte. Persönliche Aussagen sind in den Niederlanden, in Deutschland sowie in englischsprachigen Verfahren innerhalb der EU möglich.",
    nl: "Presenteren en toelichten van wetenschappelijk bewijs over de effecten van drugs op geheugen en de betrouwbaarheid van verklaringen voor rechtbanken en andere rechterlijke instanties — in begrijpelijke taal voor rechters en advocaten. Verklaringen ter zitting zijn mogelijk in Nederland, Duitsland en Engelstalige procedures binnen de EU.",
  },
  "ew.service3.title": {
    en: "Pre-Trial & Legal Consulting",
    de: "Vorprozessuale Beratung",
    nl: "Pre-processueel Juridisch Advies",
  },
  "ew.service3.desc": {
    en: "Advising legal teams at the preparation stage: case assessment, targeted literature reviews, critical evaluation of opposing expert opinions, and framing scientifically sound questions for examination.",
    de: "Beratung von Anwaltsteams in der Vorbereitungsphase: Fallbewertung, gezielte Literaturrecherche, kritische Begutachtung gegnerischer Sachverständigengutachten und Formulierung wissenschaftlich fundierter Fragen für die Vernehmung.",
    nl: "Adviseren van juridische teams in de voorbereidingsfase: casusbeoordeling, gerichte literatuuronderzoeken, kritische evaluatie van tegengestelde deskundigenrapporten en het formuleren van wetenschappelijk onderbouwde vragen voor verhoor.",
  },
  "ew.service4.title": {
    en: "Corporate & Policy Consulting",
    de: "Unternehmens- & Politikberatung",
    nl: "Bedrijfs- & Beleidsadvies",
  },
  "ew.service4.desc": {
    en: "Advising organisations, insurers, regulatory bodies, and policymakers on the scientific evidence relating to drug use, impairment, memory reliability, and associated forensic risk.",
    de: "Beratung von Unternehmen, Versicherern, Regulierungsbehörden und politischen Entscheidungsträgern zu wissenschaftlichen Erkenntnissen über Drogenkonsum, Beeinträchtigung, Aussagenzuverlässigkeit und damit verbundene forensische Risiken.",
    nl: "Adviseren van organisaties, verzekeraars, toezichthouders en beleidsmakers over het wetenschappelijk bewijs met betrekking tot drugsgebruik, aantasting van het oordeelsvermogen, geheugenbetrouwbaarheid en bijbehorende forensische risico's.",
  },
  "ew.cta": {
    en: "Enquire About an Engagement",
    de: "Anfrage stellen",
    nl: "Neem contact op voor een opdracht",
  },
  "ew.moreLink": {
    en: "Full expert witness services →",
    de: "Alle Gutachten & Beratungsleistungen →",
    nl: "Alle deskundigenadvies & consultatie →",
  },

  // ── Expert Witness — Dedicated Page ──────────────────────────────
  "ewPage.heading": {
    en: "Expert Witness & Forensic Consulting",
    de: "Sachverständigengutachten & Forensische Beratung",
    nl: "Deskundigenadvies & Forensisch Consult",
  },
  "ewPage.back": {
    en: "Back",
    de: "Zurück",
    nl: "Terug",
  },
  "ewPage.servicesTitle": {
    en: "Services",
    de: "Leistungen",
    nl: "Diensten",
  },
  "ewPage.cred1": {
    en: "Assistant Professor, Maastricht University — Psychopharmacology & Forensic Psychology",
    de: "Assistenzprofessorin, Universität Maastricht — Psychopharmakologie & Forensische Psychologie",
    nl: "Universitair docent, Universiteit Maastricht — Psychofarmacologie & Forensische Psychologie",
  },
  "ewPage.cred2": {
    en: "Postdoctoral Researcher, University of Bonn — Benzodiazepines, VR Crime Scenarios & Eye-Tracking",
    de: "Postdoktorandin, Universität Bonn — Benzodiazepine, VR-Verbrechensszenarien & Eye-Tracking",
    nl: "Postdoctoraal onderzoeker, Universiteit van Bonn — Benzodiazepinen, VR-misdaadscenario's & eye-tracking",
  },
  "ewPage.cred3": {
    en: "CELL Forensic Psychology Lab, KU Leuven",
    de: "CELL Forensisches Psychologielabor, KU Leuven",
    nl: "CELL Forensisch Psychologielab, KU Leuven",
  },
  "ewPage.cred4": {
    en: "Triple Cum Laude — Bachelor's, Master's, and Doctoral Degree",
    de: "Dreifach Cum Laude — Bachelor-, Master- und Doktorabschluss",
    nl: "Driemaal Cum Laude — bachelor-, master- en doctoraalgraad",
  },
  "ewPage.cred5": {
    en: "Rubicon Postdoctoral Grant (NWO)",
    de: "Rubicon-Postdoc-Stipendium (NWO)",
    nl: "Rubicon postdoctorale beurs (NWO)",
  },
  "ewPage.cred6": {
    en: "PNAS 2020 — Cannabis & False Memory Formation",
    de: "PNAS 2020 — Cannabis & Bildung falscher Erinnerungen",
    nl: "PNAS 2020 — Cannabis & vorming van valse herinneringen",
  },
  "ewPage.cred7": {
    en: "20+ peer-reviewed publications · 600+ Google Scholar citations",
    de: "20+ peer-reviewte Publikationen · 600+ Google-Scholar-Zitationen",
    nl: "20+ peer-reviewed publicaties · 600+ Google Scholar-citaties",
  },
  "ewPage.cred8": {
    en: "60+ international media appearances — CNN, National Geographic, Daily Mail, WebMD",
    de: "60+ internationale Medienauftritte — CNN, National Geographic, Daily Mail, WebMD",
    nl: "60+ internationale media-optredens — CNN, National Geographic, Daily Mail, WebMD",
  },
  "ewPage.intro": {
    en: "When a case turns on the reliability of a statement made under the influence of drugs, the science of memory becomes a legal question. My research sits precisely at this intersection. I provide independent scientific expert opinion grounded in peer-reviewed evidence — to legal teams, defence and prosecution, and courts. Written reports and consulting are available internationally; in-person courtroom testimony is available in the Netherlands, Germany, and English-language proceedings across the EU.",
    de: "Wenn ein Fall von der Zuverlässigkeit einer unter Drogeneinfluss abgegebenen Aussage abhängt, wird die Gedächtnisforschung zur Rechtsfrage. Meine Forschung liegt genau an dieser Schnittstelle. Ich erstelle unabhängige wissenschaftliche Gutachten auf der Grundlage von Peer-Review-Evidenz — für Anwaltsteams, Verteidigung und Anklage sowie Gerichte. Schriftliche Gutachten und Beratung sind international verfügbar; persönliche Aussagen vor Gericht sind in den Niederlanden, in Deutschland sowie in englischsprachigen Verfahren innerhalb der EU möglich.",
    nl: "Wanneer een zaak afhangt van de betrouwbaarheid van een verklaring die is afgelegd onder invloed van drugs, wordt de geheugenwetenschap een juridische kwestie. Mijn onderzoek bevindt zich precies op dit snijvlak. Ik verstrek onafhankelijk wetenschappelijk deskundigenadvies op basis van peer-reviewed bewijs — aan juridische teams, verdediging en aanklager, en rechtbanken. Schriftelijke rapporten en advies zijn internationaal beschikbaar; verklaringen ter zitting zijn mogelijk in Nederland, Duitsland en Engelstalige procedures binnen de EU.",
  },
  "ewPage.areasTitle": {
    en: "Areas of Scientific Expertise",
    de: "Wissenschaftliche Fachgebiete",
    nl: "Wetenschappelijke Expertisegebieden",
  },
  "ewPage.area1": {
    en: "Cannabis & memory: encoding, consolidation, and source-monitoring failures",
    de: "Cannabis & Gedächtnis: Enkodierung, Konsolidierung und Quellenzuordnungsfehler",
    nl: "Cannabis & geheugen: encodering, consolidatie en bron-monitoringfouten",
  },
  "ewPage.area2": {
    en: "MDMA & false memory: misinformation effects and suggestibility under ecstasy",
    de: "MDMA & falsche Erinnerungen: Fehlinformationseffekte und Suggestibilität unter Ecstasy",
    nl: "MDMA & valse herinneringen: misinformatie-effecten en suggestibiliteit onder ecstasy",
  },
  "ewPage.area3": {
    en: "Benzodiazepines & witness reliability: drug-facilitated crime, amnesia, and VR crime-scenario research",
    de: "Benzodiazepine & Aussagenzuverlässigkeit: drogeninduzierte Kriminalität, Amnesie und VR-Verbrechensszenarien",
    nl: "Benzodiazepinen & getuigenbetrouwbaarheid: drug-gefaciliteerde misdrijven, amnesie en VR-misdaadscenario-onderzoek",
  },
  "ewPage.area4": {
    en: "Psychedelics (ayahuasca, psilocybin) & autobiographical memory integrity",
    de: "Psychedelika (Ayahuasca, Psilocybin) & Integrität des autobiografischen Gedächtnisses",
    nl: "Psychedelica (ayahuasca, psilocybine) & integriteit van het autobiografisch geheugen",
  },
  "ewPage.area5": {
    en: "Eyewitness identification under intoxication: credibility, suggestibility, and recall quality",
    de: "Tatzeugenidentifikation unter Intoxikation: Glaubwürdigkeit, Suggestibilität und Qualität der Wiedergabe",
    nl: "Getuigenidentificatie onder invloed: geloofwaardigheid, suggestibiliteit en herinnerkwaliteit",
  },
  "ewPage.area6": {
    en: "Perpetrator statements & voluntary intoxication: how substance state affects the reliability of confessions and admissions",
    de: "Täteraussagen & freiwillige Intoxikation: wie der Substanzzustand die Zuverlässigkeit von Geständnissen beeinflusst",
    nl: "Daderverklaringen & vrijwillige intoxicatie: hoe de toestand van middelengebruik de betrouwbaarheid van bekentenissen beïnvloedt",
  },
  "ewPage.howTitle": {
    en: "How an Engagement Works",
    de: "Ablauf einer Zusammenarbeit",
    nl: "Hoe een opdracht verloopt",
  },
  "ewPage.step1.title": {
    en: "Initial Enquiry",
    de: "Erstanfrage",
    nl: "Eerste aanvraag",
  },
  "ewPage.step1.desc": {
    en: "Send a brief description of the case issue and the scientific question you need addressed. I will confirm whether the matter falls within my areas of expertise.",
    de: "Schildern Sie kurz das Fallproblem und die wissenschaftliche Frage, die beantwortet werden soll. Ich bestätige, ob die Angelegenheit in meine Fachgebiete fällt.",
    nl: "Stuur een korte beschrijving van het zaakprobleem en de wetenschappelijke vraag die beantwoord moet worden. Ik bevestig of de kwestie binnen mijn expertisegebieden valt.",
  },
  "ewPage.step2.title": {
    en: "Scope & Agreement",
    de: "Umfang & Vereinbarung",
    nl: "Scope & Overeenkomst",
  },
  "ewPage.step2.desc": {
    en: "We agree on the scope of the instruction: the materials to be reviewed, the scientific questions to be addressed, the format of the output (written report, oral evidence, or both), and the applicable timeline.",
    de: "Wir einigen uns auf den Umfang des Auftrags: die zu prüfenden Materialien, die zu beantwortenden wissenschaftlichen Fragen, das Format des Ergebnisses (schriftliches Gutachten, mündliche Aussage oder beides) sowie den zeitlichen Rahmen.",
    nl: "We stemmen af over de reikwijdte van de opdracht: de te beoordelen materialen, de te beantwoorden wetenschappelijke vragen, het formaat van de output (schriftelijk rapport, mondelinge getuigenverklaring of beide) en de van toepassing zijnde tijdlijn.",
  },
  "ewPage.step3.title": {
    en: "Analysis & Delivery",
    de: "Analyse & Lieferung",
    nl: "Analyse & Oplevering",
  },
  "ewPage.step3.desc": {
    en: "I review the case materials and the relevant scientific literature, and deliver an independent expert opinion. Where instructed for court, I am available to give oral evidence and to be cross-examined.",
    de: "Ich prüfe die Fallmaterialien und die einschlägige wissenschaftliche Literatur und liefere ein unabhängiges Sachverständigengutachten. Wenn für das Gericht beauftragt, stehe ich für mündliche Aussagen und Kreuzverhöre zur Verfügung.",
    nl: "Ik beoordeel de zaaksmaterialen en de relevante wetenschappelijke literatuur en lever een onafhankelijk deskundigenoordeel. Wanneer opgedragen voor de rechtbank, ben ik beschikbaar om mondelinge getuigenverklaringen af te leggen en te worden ondervraagd.",
  },
  "ewPage.jurisdictionsTitle": {
    en: "Jurisdictions & Working Languages",
    de: "Zuständige Rechtsgebiete & Arbeitssprachen",
    nl: "Rechtsgebieden & Werktalen",
  },
  "ewPage.jurisdictions": {
    en: "Written expert reports, pre-trial consulting, and corporate and policy advice are document-based and available for international instructions. In-person courtroom testimony is available in the Netherlands, Germany, and English-language proceedings across the EU. Working languages: English, Dutch, and German.",
    de: "Schriftliche Gutachten, vorprozessuale Beratung sowie Unternehmens- und Politikberatung sind dokumentenbasiert und für internationale Aufträge verfügbar. Persönliche Aussagen vor Gericht sind in den Niederlanden, in Deutschland sowie in englischsprachigen Verfahren innerhalb der EU möglich. Arbeitssprachen: Englisch, Niederländisch und Deutsch.",
    nl: "Schriftelijke deskundigenrapporten, pre-processueel advies en bedrijfs- en beleidsadvies zijn documentgebaseerd en beschikbaar voor internationale opdrachten. Verklaringen ter zitting zijn mogelijk in Nederland, Duitsland en Engelstalige procedures binnen de EU. Werktalen: Engels, Nederlands en Duits.",
  },
  "ewPage.credibilityTitle": {
    en: "Research Credentials",
    de: "Wissenschaftliche Qualifikationen",
    nl: "Wetenschappelijke Kwalificaties",
  },
  "ewPage.contactCta": {
    en: "Submit an Enquiry",
    de: "Anfrage einreichen",
    nl: "Stuur een aanvraag",
  },
  "ewPage.contactSub": {
    en: "Use the contact form and select “Expert report / Court testimony” or “Pre-trial / Corporate consulting” as the inquiry type.",
    de: "Verwenden Sie das Kontaktformular und wählen Sie „Gutachten / Gerichtssachverständiger“ oder „Vorprozessuale / Unternehmensberatung“ als Anfragetyp.",
    nl: "Gebruik het contactformulier en selecteer „Deskundigenrapport / Getuigenverklaring“ of „Pre-processueel / Bedrijfsadvies“ als aanvraagtype.",
  },
};
