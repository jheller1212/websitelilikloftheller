export type SocialPlatform =
  | 'linkedin'

  | 'google-scholar'

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
    id: 'google-scholar',
    platform: 'google-scholar',
    label: 'Google Scholar',
    url: 'https://scholar.google.com/citations?user=d8j0F2UAAAAJ&hl=en',
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
