import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import { join } from "path";

export const alt =
  "Dr. Lilian Kloft-Heller — Forensic psychology, psychopharmacology, and the intersection of drugs and memory.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Social preview card. twitter:card is summary_large_image, which renders as a
 * blank panel without this — so the card is what makes shared links legible.
 */
export default async function OpenGraphImage() {
  const portrait = await readFile(
    join(process.cwd(), "public/images/lilian-headshot.jpg"),
  );
  const portraitSrc = `data:image/jpeg;base64,${portrait.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          background: "linear-gradient(135deg, #f8fafc 0%, #ede9fe 100%)",
          padding: "72px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            paddingRight: "56px",
          }}
        >
          <div
            style={{
              fontSize: 26,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#7c3aed",
              marginBottom: 24,
            }}
          >
            Maastricht University
          </div>
          <div
            style={{
              fontSize: 56,
              fontWeight: 700,
              lineHeight: 1.05,
              color: "#1e293b",
              marginBottom: 24,
            }}
          >
            Dr. Lilian Kloft-Heller
          </div>
          <div style={{ fontSize: 30, lineHeight: 1.35, color: "#475569" }}>
            Forensic psychology, psychopharmacology, and the intersection of
            drugs and memory
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 36,
              height: 8,
              width: 148,
              background: "#f59e0b",
              borderRadius: 4,
            }}
          />
        </div>

        <img
          src={portraitSrc}
          width={330}
          height={330}
          style={{
            width: 330,
            height: 330,
            borderRadius: 24,
            objectFit: "cover",
          }}
          alt=""
        />
      </div>
    ),
    { ...size },
  );
}
