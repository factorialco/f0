import DOMPurify from "dompurify"
import { forwardRef, useMemo } from "react"
import rehypeStringify from "rehype-stringify"
import remarkGfm from "remark-gfm"
import remarkParse from "remark-parse"
import remarkRehype from "remark-rehype"
import { unified } from "unified"

import { cn } from "@/lib/utils"

import "../index.css"
import type { F0RichTextDisplayHandle, F0RichTextDisplayProps } from "./types"

const PROCESSOR = unified()
  .use(remarkParse)
  .use(remarkGfm)
  .use(remarkRehype)
  .use(rehypeStringify)

const F0RichTextDisplay = forwardRef<
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

export { F0RichTextDisplay }
