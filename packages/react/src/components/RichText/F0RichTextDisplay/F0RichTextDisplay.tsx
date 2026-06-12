import DOMPurify from "dompurify"
import { forwardRef, type HTMLAttributes, useMemo } from "react"
import rehypeStringify from "rehype-stringify"
import remarkGfm from "remark-gfm"
import remarkParse from "remark-parse"
import remarkRehype from "remark-rehype"
import { unified } from "unified"

import { cn } from "@/lib/utils"
import { experimentalComponent } from "@/lib/experimental"

import "../index.css"

// Declared next to the component (not in a sibling types.ts) so api-extractor
// rolls them into the bundled d.ts instead of emitting a broken './types' import.
export interface F0RichTextDisplayProps extends HTMLAttributes<HTMLDivElement> {
  content: string
  className?: string
  format?: "html" | "markdown"
}

export type F0RichTextDisplayHandle = HTMLDivElement

/** @deprecated Use F0RichTextDisplayProps */
export type RichTextDisplayProps = F0RichTextDisplayProps
/** @deprecated Use F0RichTextDisplayHandle */
export type RichTextDisplayHandle = F0RichTextDisplayHandle

const PROCESSOR = unified()
  .use(remarkParse)
  .use(remarkGfm)
  .use(remarkRehype)
  .use(rehypeStringify)

const F0RichTextDisplayBase = forwardRef<
  F0RichTextDisplayHandle,
  F0RichTextDisplayProps
>(function F0RichTextDisplay(
  { content, className, format = "html", ...props },
  ref
) {
  const sanitized = useMemo(
    () =>
      DOMPurify.sanitize(
        format === "markdown"
          ? String(PROCESSOR.processSync(content))
          : content,
        {
          ADD_ATTR: ["target"],
          ALLOWED_ATTR: ["href", "target", "rel", "class"],
        }
      ),
    [format, content]
  )
  const isHtml = /<[^>]*>/.test(sanitized)

  return (
    <div
      ref={ref}
      className={cn(
        "rich-text-display-container",
        !isHtml && "whitespace-pre-wrap",
        className
      )}
      dangerouslySetInnerHTML={{
        __html: sanitized,
      }}
      {...props}
    />
  )
})

/**
 * @experimental This is an experimental component, use it at your own risk
 */
const F0RichTextDisplay = experimentalComponent(
  "F0RichTextDisplay",
  F0RichTextDisplayBase
)

export { F0RichTextDisplay }

/** @deprecated Use F0RichTextDisplay */
export const RichTextDisplay = F0RichTextDisplay
