import DOMPurify from "dompurify"
import rehypeStringify from "rehype-stringify"
import remarkGfm from "remark-gfm"
import remarkParse from "remark-parse"
import remarkRehype from "remark-rehype"
import { unified } from "unified"

const PROCESSOR = unified()
  .use(remarkParse)
  .use(remarkRehype)
  .use(rehypeStringify)

const DOCUMENT_PROCESSOR = unified()
  .use(remarkParse)
  .use(remarkGfm)
  .use(remarkRehype)
  .use(rehypeStringify)

// Block-level allowlist for rendering whole .md documents (chat previews).
// Images stay out: a document fetched from a chat CDN must not trigger
// third-party requests from inside the preview.
const DOCUMENT_ALLOWED_TAGS = [
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "p",
  "br",
  "hr",
  "strong",
  "b",
  "em",
  "i",
  "del",
  "s",
  "a",
  "ul",
  "ol",
  "li",
  "blockquote",
  "pre",
  "code",
  "table",
  "thead",
  "tbody",
  "tr",
  "th",
  "td",
]

/**
 * Parses markdown content and returns sanitized HTML
 */
export function parseMarkdown(content: string): string {
  const html = String(PROCESSOR.processSync(content))

  return DOMPurify.sanitize(html, {
    ALLOWED_TAGS: ["strong", "b", "em", "i"],
    KEEP_CONTENT: true,
  })
}

/**
 * Parses a whole markdown DOCUMENT (GFM: tables, strikethrough, task lists)
 * into sanitized block-level HTML — used by the chat's `.md` file preview.
 */
export function parseMarkdownDocument(content: string): string {
  const html = String(DOCUMENT_PROCESSOR.processSync(content))

  return DOMPurify.sanitize(html, {
    ALLOWED_TAGS: DOCUMENT_ALLOWED_TAGS,
    ALLOWED_ATTR: ["href", "target", "rel"],
    KEEP_CONTENT: true,
  })
}

/**
 * Strips markdown syntax from text to display plain text
 */
export function stripMarkdown(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, "$1") // bold
    .replace(/\*(.+?)\*/g, "$1") // italic
    .replace(/__(.+?)__/g, "$1") // bold
    .replace(/_(.+?)_/g, "$1") // italic
    .replace(/\[(.+?)\]\(.+?\)/g, "$1") // links
    .replace(/`(.+?)`/g, "$1") // inline code
}
