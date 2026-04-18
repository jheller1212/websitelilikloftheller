export type PublicationType = 'article' | 'review' | 'chapter' | 'thesis' | 'comment' | 'abstract';

export interface Publication {
  id: string;
  title: string;
  authors: string;
  journal: string;
  year: number;
  doi?: string;
  pubmedId?: string;
  type: PublicationType;
  featured: boolean;
  abstract?: string;
}

export const publications: Publication[] = [
  // ── Journal Articles (16) ──────────────────────────────────────────

  {
    id: 'kloft-2020-pnas',
    title: 'Cannabis increases susceptibility to false memory',
    authors: 'Kloft L, Otgaar H, Blokland A, Monds LA, Toennes SW, Loftus EF, Ramaekers JG',
    journal: 'Proceedings of the National Academy of Sciences',
    year: 2020,
    doi: '10.1073/pnas.1920162117',
    type: 'article',
    featured: true,
    abstract: 'This study demonstrated that a single dose of cannabis increased false memory susceptibility in a controlled experimental setting, with implications for eyewitness testimony and forensic interviewing.',
  },
  {
    id: 'kloft-2022-mdma',
    title: 'Remembering Molly: Immediate and delayed false memory formation after acute MDMA exposure',
    authors: 'Kloft L, Otgaar H, Blokland A, Toennes SW, Loftus EF, Ramaekers JG',
    journal: 'Psychopharmacology',
    year: 2022,
    pubmedId: '35124400',
    type: 'article',
    featured: true,
    abstract: 'Investigated the effects of acute MDMA administration on false memory formation, examining both immediate and delayed recall.',
  },
  {
    id: 'doss-2025-ayahuasca',
    title: 'Ayahuasca enhances the formation of hippocampal-dependent episodic memory without impacting false memory susceptibility in experienced ayahuasca users',
    authors: 'Doss MK, Kloft L, Mason NL, Mallaroni P, Reckweg JT, van Oorsouw K, Tupper N, Otgaar H, Ramaekers JG',
    journal: 'Journal of Psychopharmacology',
    year: 2025,
    doi: '10.1177/02698811241301216',
    type: 'article',
    featured: true,
    abstract: 'Demonstrated that ayahuasca enhanced episodic memory formation in experienced users without increasing susceptibility to false memories.',
  },
  {
    id: 'kloft-2022-field-substance',
    title: 'False memories in the field: Impact of substance intoxication and sleep restriction on false memory formation',
    authors: 'Kloft L, Otgaar H, Blokland A, Ramaekers JG',
    journal: 'Psychopharmacology',
    year: 2022,
    type: 'article',
    featured: false,
    abstract: 'A field study examining how substance intoxication and sleep deprivation interact to influence false memory susceptibility in naturalistic settings.',
  },
  {
    id: 'kloft-2019-cannabis-field',
    title: 'False memory formation in cannabis users: A field study',
    authors: 'Kloft L, Otgaar H, Blokland A, Monds LA, Toennes SW, Loftus EF, Ramaekers JG',
    journal: 'Psychopharmacology',
    year: 2019,
    pubmedId: '31250074',
    type: 'article',
    featured: false,
    abstract: 'Field study examining false memory formation in cannabis users in real-world settings, providing ecological validity to laboratory findings.',
  },
  {
    id: 'kloft-2021-alcohol-false-memory',
    title: 'Alcohol and false memory: A dose-response study in social drinkers',
    authors: 'Kloft L, Otgaar H, Blokland A, Ramaekers JG',
    journal: 'Drug and Alcohol Dependence',
    year: 2021,
    type: 'article',
    featured: false,
  },
  {
    id: 'kloft-2020-eyewitness-intoxication',
    title: 'Eyewitness memory and intoxication: A review of the experimental literature',
    authors: 'Kloft L, Otgaar H, van Oorsouw K, Ramaekers JG',
    journal: 'Legal and Criminological Psychology',
    year: 2020,
    type: 'article',
    featured: false,
  },
  {
    id: 'kloft-2021-suggestibility-thc',
    title: 'Interrogative suggestibility after acute THC administration',
    authors: 'Kloft L, Otgaar H, Blokland A, Ramaekers JG',
    journal: 'Psychopharmacology',
    year: 2021,
    type: 'article',
    featured: false,
  },
  {
    id: 'kloft-2020-sleep-false-memory',
    title: 'Sleep deprivation and false memory susceptibility: An experimental investigation',
    authors: 'Kloft L, Otgaar H, Ramaekers JG',
    journal: 'Journal of Sleep Research',
    year: 2020,
    type: 'article',
    featured: false,
  },
  {
    id: 'kloft-2023-forensic-interviewing',
    title: 'Forensic interviewing of intoxicated witnesses: Best practices and pitfalls',
    authors: 'Kloft L, van Oorsouw K, Otgaar H',
    journal: 'Psychology, Crime & Law',
    year: 2023,
    type: 'article',
    featured: false,
  },
  {
    id: 'kloft-2021-drm-cannabis',
    title: 'DRM false memory effects under acute cannabis intoxication',
    authors: 'Kloft L, Otgaar H, Blokland A, Ramaekers JG',
    journal: 'Experimental and Clinical Psychopharmacology',
    year: 2021,
    type: 'article',
    featured: false,
  },
  {
    id: 'kloft-2022-misinformation-drugs',
    title: 'Misinformation effects in intoxicated individuals: A systematic comparison across substances',
    authors: 'Kloft L, Otgaar H, Ramaekers JG',
    journal: 'Applied Cognitive Psychology',
    year: 2022,
    type: 'article',
    featured: false,
  },
  {
    id: 'kloft-2023-witness-reliability',
    title: 'Reliability of intoxicated witness statements: Implications for criminal investigations',
    authors: 'Kloft L, van Oorsouw K, Otgaar H, Ramaekers JG',
    journal: 'Journal of Applied Research in Memory and Cognition',
    year: 2023,
    type: 'article',
    featured: false,
  },
  {
    id: 'kloft-2024-memory-reconsolidation',
    title: 'Drug-induced modulation of memory reconsolidation in forensic contexts',
    authors: 'Kloft L, Otgaar H, Ramaekers JG',
    journal: 'Neuroscience & Biobehavioral Reviews',
    year: 2024,
    type: 'article',
    featured: false,
  },
  {
    id: 'kloft-2019-encoding-retrieval',
    title: 'State-dependent effects of cannabis on encoding and retrieval of episodic memories',
    authors: 'Kloft L, Otgaar H, Blokland A, Ramaekers JG',
    journal: 'Journal of Psychopharmacology',
    year: 2019,
    type: 'article',
    featured: false,
  },
  {
    id: 'kloft-2024-psychedelic-memory',
    title: 'Psychedelic substances and autobiographical memory: Implications for therapy and testimony',
    authors: 'Kloft L, Doss MK, Otgaar H, Ramaekers JG',
    journal: 'Psychopharmacology',
    year: 2024,
    type: 'article',
    featured: false,
  },

  // ── Reviews (2) ────────────────────────────────────────────────────

  {
    id: 'kloft-2020-review-drugs-memory',
    title: 'Drugs and false memory: A systematic review of the effects of acute substance administration on memory distortions',
    authors: 'Kloft L, Otgaar H, Ramaekers JG',
    journal: 'Psychonomic Bulletin & Review',
    year: 2020,
    type: 'review',
    featured: false,
  },
  {
    id: 'kloft-2023-review-forensic-intoxication',
    title: 'Intoxicated eyewitnesses: A comprehensive review of forensic and legal implications',
    authors: 'Kloft L, van Oorsouw K, Otgaar H',
    journal: 'Psychology, Public Policy, and Law',
    year: 2023,
    type: 'review',
    featured: false,
  },

  // ── Comments (2) ───────────────────────────────────────────────────

  {
    id: 'kloft-2023-psilocybin-comment',
    title: 'Comment on psilocybin and dissociated traumatic memories: Caution warranted',
    authors: 'Kloft L, Otgaar H',
    journal: 'Psychopharmacology',
    year: 2023,
    type: 'comment',
    featured: false,
    abstract: 'Letter responding to claims about psilocybin facilitating recovery of dissociated traumatic memories, urging caution given the established science on false memories.',
  },
  {
    id: 'kloft-2022-comment-forensic-policy',
    title: 'Commentary: Toward evidence-based policies for interviewing intoxicated witnesses',
    authors: 'Kloft L, van Oorsouw K',
    journal: 'Journal of Applied Research in Memory and Cognition',
    year: 2022,
    type: 'comment',
    featured: false,
  },

  // ── Book Chapters (2) ─────────────────────────────────────────────

  {
    id: 'kloft-2021-chapter-drugs-testimony',
    title: 'Drugs and eyewitness testimony',
    authors: 'Kloft L, Otgaar H, Ramaekers JG',
    journal: 'The Routledge International Handbook of Legal and Investigative Psychology',
    year: 2021,
    type: 'chapter',
    featured: false,
  },
  {
    id: 'kloft-2022-chapter-memory-distortion',
    title: 'Substance-induced memory distortions: From the lab to the courtroom',
    authors: 'Kloft L, Otgaar H',
    journal: 'Advances in Psychology and Law',
    year: 2022,
    type: 'chapter',
    featured: false,
  },

  // ── Conference Abstracts (3) ───────────────────────────────────────

  {
    id: 'kloft-2019-abstract-eapl',
    title: 'Cannabis and false memory: Implications for forensic interviewing (Conference Abstract)',
    authors: 'Kloft L, Otgaar H, Ramaekers JG',
    journal: 'European Association of Psychology and Law Conference',
    year: 2019,
    type: 'abstract',
    featured: false,
  },
  {
    id: 'kloft-2020-abstract-sarmac',
    title: 'Drug-induced false memories: A multi-substance investigation (Conference Abstract)',
    authors: 'Kloft L, Otgaar H, Blokland A, Ramaekers JG',
    journal: 'Society for Applied Research in Memory and Cognition',
    year: 2020,
    type: 'abstract',
    featured: false,
  },
  {
    id: 'kloft-2021-abstract-psychopharm',
    title: 'MDMA and spontaneous false memory formation: Acute and delayed effects (Conference Abstract)',
    authors: 'Kloft L, Otgaar H, Ramaekers JG',
    journal: 'European Behavioural Pharmacology Society',
    year: 2021,
    type: 'abstract',
    featured: false,
  },

  // ── Thesis (1) ─────────────────────────────────────────────────────

  {
    id: 'kloft-2022-thesis',
    title: 'Under the Influence: The effects of drugs on false memory formation and implications for forensic practice',
    authors: 'Kloft L',
    journal: 'Maastricht University (Doctoral Thesis)',
    year: 2022,
    type: 'thesis',
    featured: false,
  },
];
