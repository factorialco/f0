import { type ReactNode } from "react"

import { PersonEntityRef } from "./PersonEntityRef"

/**
 * Extract plain text from a ReactNode tree.
 * Handles strings, numbers, arrays, and fragments.
 */
function extractText(node: ReactNode): string {
  if (typeof node === "string") return node
  if (typeof node === "number") return String(node)
  if (Array.isArray(node)) return node.map(extractText).join("")
  if (node && typeof node === "object" && "props" in node) {
    return extractText(node.props.children)
  }
  return ""
}

/**
 * Generic entity reference renderer for custom `<entity-ref>` HTML tags
 * embedded in AI chat markdown output.
 *
 * Dispatches to type-specific renderers based on the `type` attribute.
 * Falls back to rendering children as plain text for unknown types.
 *
 * Usage in markdown (via rehype-raw):
 *   <entity-ref type="person" id="123">Ana García</entity-ref>
 */
export function EntityRef({
  type,
  id,
  children,
}: {
  type?: string
  id?: string
  children?: ReactNode
}) {
  if (!id) {
    return <span>{children}</span>
  }

  const label = extractText(children)

  switch (type) {
    case "person":
      return <PersonEntityRef id={id} label={label} />
    default:
      return <span>{children}</span>
  }
}
