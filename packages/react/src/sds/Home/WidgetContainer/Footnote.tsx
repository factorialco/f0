import { Fragment } from "react"

import { F0Link } from "@/components/F0Link"

/**
 * THE ONE PIECE OF MARKDOWN A FOOTNOTE MAY CARRY: an inline link, `[label](href)`.
 *
 * Not a markdown renderer, and deliberately not one. A column's footnote is a
 * SENTENCE with somewhere to go — "you are viewing the new Home, go back to the
 * old one" — so the string a caller passes is text plus links, and everything a
 * general markdown pass would also bring (headings, lists, images, a block of
 * code at the foot of the column) is exactly the freedom this prop exists to
 * refuse. Anything that isn't this pattern stays the literal text it is.
 *
 * A label holds no bracket and no line break, and an href no whitespace, so a
 * bracket left open earlier in the sentence cannot reach forward and swallow
 * the words up to the next real link: it fails to match and is printed.
 */
const LINK = /\[([^[\]\n]+)\]\(([^)\s]+)\)/g

/**
 * WHERE A FOOTNOTE'S LINK MAY POINT. The string can come from a server-side
 * setting or a translation, which is far enough from the component for
 * `javascript:` (or `data:`) to be worth refusing outright: a footnote is a
 * sentence, and no sentence needs to run code.
 *
 * A refused href is not a broken link — the label is printed as the plain text
 * it already is, so the sentence still reads.
 */
const SAFE_HREF = /^(https?:\/\/|mailto:|tel:|\/|\.\/|\.\.\/|#|\?)/i

type Piece = { text: string } | { label: string; href: string }

/**
 * The sentence taken apart into what it is made of: runs of text and the links
 * between them, in the order they were written.
 */
export const footnotePieces = (text: string): Piece[] => {
  const pieces: Piece[] = []
  let cursor = 0

  for (const match of text.matchAll(LINK)) {
    const label = match[1] ?? ""
    const href = match[2] ?? ""
    const at = match.index
    // `![label](src)` IS AN IMAGE and a footnote draws no images — the label is
    // all that is left of it, and it is text: a sentence that linked to the
    // image file instead would be a worse answer than none.
    const image = text[at - 1] === "!"
    const before = text.slice(cursor, image ? at - 1 : at)
    if (before) pieces.push({ text: before })
    pieces.push(
      image || !SAFE_HREF.test(href) ? { text: label } : { label, href }
    )
    cursor = at + match[0].length
  }
  if (cursor < text.length) pieces.push({ text: text.slice(cursor) })

  return pieces
}

/**
 * A COLUMN'S FOOTNOTE, drawn the one way it is drawn: centered, secondary, one
 * line under the widgets. The caller hands over the words and nothing else — no
 * node, no class, no element of its own — which is what keeps every Home's
 * footnote the same thing rather than a second layout at the foot of the column.
 *
 * A `div` rather than a `p`: `F0Link` brings wrappers of its own, and a
 * paragraph may not hold them.
 */
export const Footnote = ({ text }: { text: string }) => (
  <div className="text-center text-f1-foreground-secondary">
    {footnotePieces(text).map((piece, index) => (
      <Fragment key={index}>
        {"href" in piece ? (
          <F0Link href={piece.href}>{piece.label}</F0Link>
        ) : (
          piece.text
        )}
      </Fragment>
    ))}
  </div>
)
