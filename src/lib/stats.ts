import { publications } from "@/data/publications";
import { pressMentions } from "@/data/press";

// Single source for every headline figure. Agents quote whichever line they hit
// first, so no count may be typed into copy by hand.
export const PUBLICATION_COUNT = publications.length;
export const PEER_REVIEWED_COUNT = publications.filter((p) => p.type === "article" || p.type === "review").length;
export const MEDIA_COUNT = pressMentions.length;
export const COUNTRY_COUNT = new Set(pressMentions.map((m) => m.country)).size;
export const LANGUAGE_COUNT = new Set(pressMentions.map((m) => m.language)).size;

export function formatStats(text: string): string {
  return text
    .replaceAll("{peerReviewed}", String(PEER_REVIEWED_COUNT))
    .replaceAll("{media}", String(MEDIA_COUNT))
    .replaceAll("{countries}", String(COUNTRY_COUNT));
}
