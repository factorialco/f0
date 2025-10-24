import DOMPurify from "dompurify"
import rehypeStringify from "rehype-stringify"
import remarkParse from "remark-parse"
import remarkRehype from "remark-rehype"
import { unified } from "unified"

const PROCESSOR = unified()
  .use(remarkParse)
  .use(remarkRehype)
  .use(rehypeStringify)

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
