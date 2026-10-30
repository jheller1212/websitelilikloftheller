// Heuristic check for case-identifying material in a contact message.
//
// The contact form asks people not to include names, case numbers or facts of
// an ongoing matter. Humans read that note; AI agents filling the form on a
// lawyer's behalf tend to paste whatever they were given. This check refuses
// agent-invoked submissions that carry obvious case identifiers, and tells the
// agent why, so it can rewrite the message in general terms.
//
// It is a client-side guard, not a security control: it catches careless
// pastes, not a determined sender. Formspree remains the only backend.

const CASE_PATTERNS: RegExp[] = [
  /\bECLI:[A-Z]{2}:/i, // European Case Law Identifier
  /\bparketnummer\b/i, // NL public prosecution case number
  /\bzaaknummer\b/i,
  /\b\d{2}[/-]\d{6}[-/]\d{2}\b/, // NL parketnummer format, e.g. 03/123456-24
  /\bAktenzeichen\b/i,
  /\bAz\.?\s*:?\s*\d/i,
  /\b\d+\s+(Js|Ks|KLs|Ls|Ds|Cs)\s+\d+\/\d{2}\b/, // German criminal file numbers
  /\bcase\s+(no\.?|number)\s*[:#]?\s*\d/i,
  /\bdocket\s+(no\.?|number)\b/i,
];

export function looksLikeCaseMaterial(message: string): boolean {
  return CASE_PATTERNS.some((pattern) => pattern.test(message));
}
