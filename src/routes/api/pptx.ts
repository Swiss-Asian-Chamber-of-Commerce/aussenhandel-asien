import { createFileRoute } from "@tanstack/react-router";
import { readFile } from "node:fs/promises";
import path from "node:path";

const FILE = "Nathan-Kaiser-Asien-Handelsabkommen.pptx";
const MIME =
  "application/vnd.openxmlformats-officedocument.presentationml.presentation";

export const Route = createFileRoute("/api/pptx")({
  server: {
    handlers: {
      GET: async () => {
        const buf = await readFile(path.join(process.cwd(), "public", FILE));
        return new Response(new Uint8Array(buf), {
          headers: {
            "Content-Type": MIME,
            "Content-Disposition": `attachment; filename="${FILE}"`,
            "Cache-Control": "no-store",
          },
        });
      },
    },
  },
});
