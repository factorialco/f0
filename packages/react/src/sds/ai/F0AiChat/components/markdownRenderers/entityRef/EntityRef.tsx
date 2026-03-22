import { type ReactNode } from "react"

import { getEntityRefRenderer } from "./entityRefRegistry"

// Import entity modules to trigger registration (side-effect)
import "./entities/person/PersonEntityRef"

/**
 * Extract plain text from a ReactNode tree.
 * Handles strings, numbers, arrays, and fragments.
 */
export function extractText(node: ReactNode): string {
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
 * Dispatches to type-specific renderers via the entity ref registry.
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
  if (!id || !type) {
    return <span>{children}</span>
  }

  const label = extractText(children)
  const Renderer = getEntityRefRenderer(type)

  if (!Renderer) {
    return <span>{children}</span>
  }

  return <Renderer id={id} label={label} />
}
