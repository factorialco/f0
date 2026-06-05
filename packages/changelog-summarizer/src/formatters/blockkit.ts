/**
 * Convert the `---`-separated summary text into a Slack Block Kit payload.
 *
 * The summary text has the shape:
 *   <title>
 *   ---
 *   <section header>
 *   <section body...>
 *   ---
 *   <next section header>
 *   ...
 *
 * Produces: one top-level `header` for the title, then per section a
 * `divider` + `header` + one or more `section` blocks. Long section bodies are
 * split at bullet boundaries so no block exceeds Slack's 3000-char mrkdwn limit.
 */

export interface BlockKitBlock {
  type: string;
  text?: { type: string; text: string; emoji?: boolean };
}

const SECTION_LIMIT = 2900;

/** Hard-split a single chunk that has no blank lines (e.g. one long paragraph),
 *  breaking at a sentence or space boundary near the limit. */
function hardSplit(s: string, limit: number): string[] {
  if (s.length <= limit) return [s];
  const out: string[] = [];
  let rest = s;
  while (rest.length > limit) {
    let cut = rest.lastIndexOf(". ", limit);
    if (cut < limit * 0.5) cut = rest.lastIndexOf(" ", limit);
    if (cut < limit * 0.5) cut = limit;
    out.push(rest.slice(0, cut + 1).trim());
    rest = rest.slice(cut + 1).trim();
  }
  if (rest) out.push(rest);
  return out;
}

/** Split a section body into <3000-char chunks: first at blank-line (bullet)
 *  boundaries, then hard-splitting any single chunk that still exceeds the limit. */
export function chunkMrkdwn(body: string, limit = SECTION_LIMIT): string[] {
  if (body.length <= limit) return [body];
  const bullets = body.split("\n\n");
  const chunks: string[] = [];
  let current = "";
  for (const bullet of bullets) {
    const candidate = current ? `${current}\n\n${bullet}` : bullet;
    if (candidate.length > limit && current) {
      chunks.push(current);
      current = bullet;
    } else {
      current = candidate;
    }
  }
  if (current) chunks.push(current);
  return chunks.flatMap((c) => hardSplit(c, limit));
}

export function buildBlocks(content: string): BlockKitBlock[] {
  const lines = content.split("\n");
  const blocks: BlockKitBlock[] = [
    { type: "header", text: { type: "plain_text", text: lines[0], emoji: true } },
  ];

  let firstSeen = false;
  let segment: string[] = [];

  const flush = () => {
    if (segment.length === 0) return;
    blocks.push({ type: "divider" });
    blocks.push({
      type: "header",
      text: { type: "plain_text", text: segment[0], emoji: true },
    });
    for (const chunk of chunkMrkdwn(segment.slice(1).join("\n"))) {
      blocks.push({ type: "section", text: { type: "mrkdwn", text: chunk } });
    }
    segment = [];
  };

  for (let i = 1; i < lines.length; i++) {
    const line = lines[i];
    if (line === "---") {
      if (!firstSeen) {
        // The first `---` closes the title line we already captured.
        firstSeen = true;
        segment = [];
        continue;
      }
      flush();
      continue;
    }
    segment.push(line);
  }
  if (firstSeen) flush();

  return blocks;
}
