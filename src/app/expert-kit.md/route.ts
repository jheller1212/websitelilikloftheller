import { expertKitMarkdown } from "@/lib/expertKit";

export const dynamic = "force-static";

export function GET() {
  return new Response(expertKitMarkdown(), {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
}
