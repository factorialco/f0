/**
 * Deterministic cleanup for the legacy non-JSON prompt path
 * (`src/prompts/default.md`). Models occasionally emit markdown headings or
 * inconsistent bullet characters; Slack ignores `#` headings entirely so we
 * normalise the output before publishing.
 */

export function postprocess(raw: string): string {
  if (!raw) return "";

  const lines = raw.replace(/\r\n/g, "\n").split("\n");
  const out: string[] = [];

  for (const original of lines) {
    let line = original;

    // Drop markdown ATX headings — Slack doesn't render them.
    if (/^#{1,6}\s+/.test(line)) {
      line = line.replace(/^#{1,6}\s+/, "");
    }

    // Normalise bullets: `- ` or `* ` → `• `.
    line = line.replace(/^(\s*)[-*]\s+/, "$1• ");

    // Collapse runs of spaces inside the line (not at the start).
    const leading = line.match(/^\s*/)?.[0] ?? "";
    const body = line.slice(leading.length).replace(/[ \t]{2,}/g, " ");
    line = leading + body;

    out.push(line.trimEnd());
  }

  // Collapse 3+ blank lines down to 2.
  return out.join("\n").replace(/\n{3,}/g, "\n\n").trim();
}
