/**
 * Sanitize a streaming assistant message containing `<entity-ref>` tags.
 *
 * Streaming can deliver partial XML-ish fragments chunk-by-chunk.  Two
 * failure modes are observed and fixed here:
 *
 * 1. Orphan closing tag.  A `</entity-ref>` arrives without a preceding
 *    opening tag in the current buffer (because the opener was already
 *    rendered in a previous flush).  If we leave it in place,
 *    `rehype-raw` renders it as stray text like `@Name</entity-ref>`.
 *    We strip any `</entity-ref>` that does not balance an earlier
 *    open.
 *
 * 2. Unterminated opening tag.  `<entity-ref type="…" id="…">Label`
 *    arrives with no closing tag yet.  Rendering it early produces a
 *    hover-card pill that will be re-rendered once the close arrives,
 *    causing visible flicker.  We collapse the trailing unterminated
 *    fragment to its visible label text only — the next chunk brings
 *    the real tag pair and renders correctly.
 *
 * The function is pure and idempotent; fully-balanced input is returned
 * unchanged.
 *
 * Regex literals are declared inside the function body so no `RegExp`
 * object is shared across calls — this avoids the `g`-flag `lastIndex`
 * footgun when the function is invoked from multiple call sites or
 * interleaved code paths.
 */
export function sanitizeEntityRefs(input: string): string {
  if (!input.includes("entity-ref")) return input

  const openTag = /<entity-ref\s+type="[^"]+"\s+id="[^"]+">/g
  const closeTag = /<\/entity-ref>/g

  // Pass 1: strip orphan closers.  `matchAll` yields iterators without
  // mutating shared state; merge by index to walk opens and closes in
  // document order and drop any close that has no matching open.
  const opens = Array.from(input.matchAll(openTag), (m) => ({
    kind: "open" as const,
    start: m.index,
    end: m.index + m[0].length,
  }))
  const closes = Array.from(input.matchAll(closeTag), (m) => ({
    kind: "close" as const,
    start: m.index,
    end: m.index + m[0].length,
  }))
  const tokens = [...opens, ...closes].sort((a, b) => a.start - b.start)

  const orphanCloseRanges: Array<[number, number]> = []
  let depth = 0
  for (const t of tokens) {
    if (t.kind === "open") {
      depth += 1
    } else if (depth > 0) {
      depth -= 1
    } else {
      orphanCloseRanges.push([t.start, t.end])
    }
  }

  let out = input
  if (orphanCloseRanges.length > 0) {
    let result = ""
    let cursor = 0
    for (const [start, end] of orphanCloseRanges) {
      result += input.slice(cursor, start)
      cursor = end
    }
    result += input.slice(cursor)
    out = result
  }

  // Pass 2: collapse an unterminated trailing open tag.  Find the last
  // opener in the (possibly-stripped) string and check whether any
  // close follows it.  If not, hide the tag markup and keep only the
  // label text after it.
  const remainingOpens = Array.from(
    out.matchAll(/<entity-ref\s+type="[^"]+"\s+id="[^"]+">/g)
  )
  const lastOpen = remainingOpens.at(-1)
  if (lastOpen) {
    const afterOpen = lastOpen.index + lastOpen[0].length
    const hasClose = out.indexOf("</entity-ref>", afterOpen) !== -1
    if (!hasClose) {
      out = out.slice(0, lastOpen.index) + out.slice(afterOpen)
    }
  }

  return out
}
