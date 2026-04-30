import type { HTMLAttributes } from "react"

interface RichTextDisplayProps extends HTMLAttributes<HTMLDivElement> {
  content: string
  className?: string
  format?: "html" | "markdown"
}

type RichTextDisplayHandle = HTMLDivElement

export type { RichTextDisplayHandle, RichTextDisplayProps }
