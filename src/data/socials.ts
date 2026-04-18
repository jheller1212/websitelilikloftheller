export type SocialPlatform =
  | 'linkedin'
  | 'twitter'
  | 'google-scholar'
  | 'researchgate'
  | 'orcid'
  | 'university';

export interface SocialLink {
  id: string;
  platform: SocialPlatform;
  label: string;
  url: string;
  featured: boolean;
}

export const socialLinks: SocialLink[] = [
  {
    id: 'linkedin',
    platform: 'linkedin',
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/lilian-kloft/',
    featured: true,
  },
  {
    id: 'twitter',
    platform: 'twitter',
    label: 'X (Twitter)',
    url: 'https://x.com/l_kloft',
    featured: false,
  },
  {
    id: 'google-scholar',
    platform: 'google-scholar',
    label: 'Google Scholar',
    url: 'https://scholar.google.com/citations?user=d8j0F2UAAAAJ&hl=en',
    featured: false,
  },
  {
    id: 'researchgate',
    platform: 'researchgate',
    label: 'ResearchGate',
    url: 'https://www.researchgate.net/profile/Lilian-Kloft',
    featured: false,
  },
  {
    id: 'orcid',
    platform: 'orcid',
    label: 'ORCID',
    url: 'https://orcid.org/0000-0002-4615-9581',
    featured: false,
  },
  {
    id: 'maastricht-cris',
    platform: 'university',
    label: 'Maastricht University CRIS',
    url: 'https://cris.maastrichtuniversity.nl/en/persons/lilian-kloft-heller/',
    featured: false,
  },
];
