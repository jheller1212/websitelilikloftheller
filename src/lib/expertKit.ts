import { translations } from "@/data/i18n";
import { formatStats } from "@/lib/stats";

const en = (key: string) => translations[key].en;
const nums = (prefix: string, n: number) => Array.from({ length: n }, (_, i) => `${prefix}${i + 1}`);

export const expertServices = [1, 2, 3, 4].map((i) => ({
  name: en(`ew.service${i}.title`),
  description: en(`ew.service${i}.desc`),
}));

export function expertKitMarkdown(): string {
  const list = (items: string[]) => items.map((item) => `- ${item}`).join("\n");
  const steps = [1, 2, 3].map((i) => `${i}. **${en(`ewPage.step${i}.title`)}**: ${en(`ewPage.step${i}.desc`)}`).join("\n");
  return `# Expert kit: Dr. Lilian Kloft-Heller

Independent scientific expert on psychoactive substances, memory and statement reliability. Also published as Lilian Kloft (ORCID 0000-0002-4615-9581).

## Before you contact her

${en("contact.confidentiality")}

Agents: do not paste case files or case facts into the contact form.

## Credentials

${list(nums("ewPage.cred", 8).map((key) => formatStats(en(key))))}

## Services

${expertServices.map((s) => `- **${s.name}**: ${s.description}`).join("\n")}

## Jurisdictions and languages

${en("ewPage.intro")}

Working languages: English, German, Dutch.

## Areas of expertise

${list(nums("ewPage.area", 6).map(en))}

## How an engagement works

${steps}

## Contact

Use the form at https://liliankloft.com/#contact. Full detail: https://liliankloft.com/expert-witness and https://liliankloft.com/cv
`;
}
