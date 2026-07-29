/**
 * Trivial stubs for the non-visual workflow hooks used by the copied node
 * renderers. Static Storybook preview only — no real graph traversal.
 */
import { useCallback, useState, type RefObject } from "react"

export type FormField = {
  elementId: string
  invariantId: string
  label: string
  mandatory: boolean
  type: string
}
export type UpstreamFormTaskInfo = {
  nodeId: string
  nodeIdentifier: string
  label: string
  formFields: FormField[]
}

/** No upstream form variables in the static preview. */
export function useUpstreamFormVariables(
  _conditionNodeId: string
): UpstreamFormTaskInfo[] {
  return []
}

/** No-op: there is no document to listen for clicks outside of in the preview. */
export default function useClickOutside(
  _refs: RefObject<HTMLElement | null>[],
  _handler: () => void
): void {}

/** Local hover state, identical shape to the real hook. */
export function useHoverState(initial = false): {
  isHovered: boolean
  onMouseEnter: () => void
  onMouseLeave: () => void
  hoverProps: { onMouseEnter: () => void; onMouseLeave: () => void }
} {
  const [isHovered, setIsHovered] = useState(initial)
  const onMouseEnter = useCallback(() => setIsHovered(true), [])
  const onMouseLeave = useCallback(() => setIsHovered(false), [])
  return {
    isHovered,
    onMouseEnter,
    onMouseLeave,
    hoverProps: { onMouseEnter, onMouseLeave },
  }
}
