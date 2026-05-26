/**
 * Vision-attachment serialization helpers.
 *
 * Background: when the agent persists a user message that includes image
 * attachments, the backend wraps the URL list in a `<vision_attachments>`
 * block inside the user's text so the vision model can "see" the files
 * on rehydration. This means a restored thread arrives as a single text
 * part — there are no binary parts as in the live flow.
 *
 * `extractVisionAttachments` reverses the wrap: it strips the block from
 * the user-visible text and parses the file metadata back into binary
 * parts. The bridge calls this when hydrating thread history so the
 * downstream `F0AiMessagesContainer` / `UserMessage` sees the same
 * `[binary, text]` shape that the composer emits on submit, and the
 * file-chip UI matches between live and restored conversations.
 */

export type ParsedVisionBinary = {
  type: "binary"
  url: string
  filename: string
  mimeType: string
}

const VISION_ATTACHMENTS_RE =
  /<vision_attachments>([\s\S]*?)<\/vision_attachments>\s*/g

/** Line shape produced by the backend: `- <filename> (<mimetype>) — URL: <url>` */
const VISION_ATTACHMENT_LINE_RE =
  /^-\s+(.+?)\s+\(([^)]+)\)\s+—\s+URL:\s+(\S+)\s*$/gm

/**
 * Returns the text with every `<vision_attachments>…</vision_attachments>`
 * block stripped, plus the binary parts parsed from those blocks.
 *
 * When the input has no blocks, the text comes back trimmed and the
 * `binaryParts` array is empty. Multiple blocks are concatenated in
 * order.
 */
export function extractVisionAttachments(rawText: string): {
  text: string
  binaryParts: ParsedVisionBinary[]
} {
  const binaryParts: ParsedVisionBinary[] = []

  for (const block of rawText.matchAll(VISION_ATTACHMENTS_RE)) {
    const body = block[1]
    // matchAll on a /g regex with internal state is safe to reuse via the
    // iterator returned here — each block is parsed independently.
    for (const line of body.matchAll(VISION_ATTACHMENT_LINE_RE)) {
      binaryParts.push({
        type: "binary",
        filename: line[1],
        mimeType: line[2],
        url: line[3],
      })
    }
  }

  const text = rawText.replace(VISION_ATTACHMENTS_RE, "").trim()
  return { text, binaryParts }
}
