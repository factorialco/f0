import type { HTMLAttributes } from "react"

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
