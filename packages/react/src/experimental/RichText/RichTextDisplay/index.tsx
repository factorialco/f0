import DOMPurify from "dompurify"
import { forwardRef, HTMLAttributes, useMemo } from "react"
import rehypeStringify from "rehype-stringify"
import remarkGfm from "remark-gfm"
import remarkParse from "remark-parse"
import remarkRehype from "remark-rehype"
import { unified } from "unified"

import { withDataTestId } from "@/lib/data-testid"
import { cn } from "@/lib/utils"

import "../index.css"

interface RichTextDisplayProps extends HTMLAttributes<HTMLDivElement> {
  content: string
  className?: string
  format?: "html" | "markdown"
}

type RichTextDisplayHandle = HTMLDivElement

const PROCESSOR = unified()
  .use(remarkParse)
  .use(remarkGfm)
  .use(remarkRehype)
  .use(rehypeStringify)

const _RichTextDisplay = forwardRef<
  RichTextDisplayHandle,
  RichTextDisplayProps
>(function RichTextDisplay(
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

export const RichTextDisplay = withDataTestId(_RichTextDisplay)
export type { RichTextDisplayHandle, RichTextDisplayProps }
