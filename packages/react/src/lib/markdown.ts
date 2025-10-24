import { Link } from "@/components/Actions/Link"
import { ReactNode } from "react"
import * as prod from "react/jsx-runtime"
import type { Options } from "rehype-react"
import rehypeReact from "rehype-react"
import remarkParse from "remark-parse"
import remarkRehype from "remark-rehype"
import { unified } from "unified"

const options: Options = {
  ...prod,
  components: {
    a: Link,
  },
}

const PROCESSOR = unified()
  .use(remarkParse)
  .use(remarkRehype)
  .use(rehypeReact, options)

/**
 * Parses markdown content and returns sanitized HTML
 */
export function parseMarkdown(content: string): ReactNode {
  const result = PROCESSOR.processSync(content)
  return result.result
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
