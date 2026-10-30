import { publications } from "@/data/publications";
import { pressMentions } from "@/data/press";

const PERSON = {
  "@type": "Person",
  name: "Lilian Kloft-Heller",
  alternateName: "Lilian Kloft",
  identifier: "https://orcid.org/0000-0002-4615-9581",
};

// Authors are stored as one "Surname I, Surname I" string, in published order.
const scholarlyArticles = publications.map((p) => ({
  "@type": "ScholarlyArticle",
  ...(p.doi ? { "@id": `https://doi.org/${p.doi}`, identifier: `https://doi.org/${p.doi}`, sameAs: `https://doi.org/${p.doi}` } : {}),
  headline: p.title,
  author: p.authors.split(", ").map((name) => ({ "@type": "Person", name })),
  isPartOf: { "@type": "Periodical", name: p.journal },
  datePublished: String(p.year),
}));

const mediaItems = pressMentions.map((m) => ({
  "@type": "CreativeWork",
  headline: m.title,
  ...(m.url ? { url: m.url } : {}),
  datePublished: m.date,
  inLanguage: m.language,
  countryOfOrigin: { "@type": "Country", name: m.country },
  publisher: { "@type": "Organization", name: m.outlet },
  about: PERSON,
}));

const asList = (name: string, items: object[]) => ({
  "@type": "ItemList",
  name,
  numberOfItems: items.length,
  itemListElement: items.map((item, i) => ({ "@type": "ListItem", position: i + 1, item })),
});

// "<" is escaped so a title can never close the script element.
export const worksJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [asList("Publications", scholarlyArticles), asList("Media coverage", mediaItems)],
}).replace(/</g, "\\u003c");
