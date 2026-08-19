export const SITE_URL = "https://liliankloft.com";

/**
 * Shared social-card descriptor.
 *
 * Child layouts declare their own `openGraph`, which replaces the root's
 * entirely — including the image that the `opengraph-image` file convention
 * adds automatically. Without spreading this in, every page except the home
 * page shares as a blank card. One definition, referenced everywhere.
 */
export const OG_IMAGE = {
  url: `${SITE_URL}/opengraph-image`,
  width: 1200,
  height: 630,
  alt: "Dr. Lilian Kloft-Heller — Forensic psychology and psychopharmacology",
};
