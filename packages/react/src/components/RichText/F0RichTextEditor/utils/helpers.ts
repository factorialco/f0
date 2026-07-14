import { Editor } from "@tiptap/react"
import { RefObject } from "react"

import { heightType, resultType } from "./types"

const checkContainerHeight = (
  containerRef: RefObject<HTMLDivElement>,
  heightThreshold: number = 240
): boolean => {
  if (!containerRef.current) return false
  return containerRef.current.clientHeight >= heightThreshold
}

const isScrolledToBottom = (
  containerRef: RefObject<HTMLDivElement>
): boolean => {
  if (!containerRef.current) return true
  const container = containerRef.current
  return (
    container.scrollHeight - container.scrollTop - container.clientHeight < 1
  )
}

// Pixel threshold and Tailwind class per editor height. Keep both columns in
// sync: the threshold mirrors the rendered height of its class.
const HEIGHTS: Record<heightType, { threshold: number; className: string }> = {
  xxs: { threshold: 80, className: "h-20" },
  xs: { threshold: 112, className: "h-28" },
  sm: { threshold: 160, className: "h-40" },
  md: { threshold: 208, className: "h-52" },
  lg: { threshold: 240, className: "h-60" },
  xl: { threshold: 288, className: "h-72" },
  "2xl": { threshold: 320, className: "h-80" },
  "3xl": { threshold: 384, className: "h-96" },
  full: { threshold: Infinity, className: "h-full" },
  auto: { threshold: 240, className: "h-auto max-h-60" },
}

const getHeightThreshold = (height: heightType): number =>
  HEIGHTS[height]?.threshold ?? 240

const getHeight = (height: heightType) => HEIGHTS[height]?.className

interface SetupContainerObserversProps {
  containerRef: RefObject<HTMLDivElement>
  onHeightChange: (hasFullHeight: boolean) => void
  onScrollChange: (isAtBottom: boolean) => void
  heightThreshold: number
}

const setupContainerObservers = ({
  containerRef,
  onHeightChange,
  onScrollChange,
  heightThreshold = 240,
}: SetupContainerObserversProps) => {
  const updateStates = () => {
    onHeightChange(checkContainerHeight(containerRef, heightThreshold))
    onScrollChange(isScrolledToBottom(containerRef))
  }

  updateStates()

  const container = containerRef.current
  if (!container) return () => {}

  const handleScroll = () => {
    onScrollChange(isScrolledToBottom(containerRef))
  }
  container.addEventListener("scroll", handleScroll)

  const resizeObserver = new ResizeObserver(updateStates)
  resizeObserver.observe(container)

  return () => {
    container.removeEventListener("scroll", handleScroll)
    resizeObserver.disconnect()
  }
}

interface HandleEditorUpdateProps {
  editor: Editor
  onChange: (result: resultType) => void
}

const handleEditorUpdate = ({ editor, onChange }: HandleEditorUpdateProps) => {
  if (editor.isEmpty) {
    onChange({ value: null })
    return
  }

  const html = editor.getHTML()
  const mentions: string[] = []

  editor.state.doc.descendants((node) => {
    if (node.type.name === "mention") {
      mentions.push(String(node.attrs.id))
    }
  })

  onChange(
    mentions.length > 0
      ? { value: html, mentionIds: mentions }
      : { value: html }
  )
}

export {
  getHeight,
  getHeightThreshold,
  handleEditorUpdate,
  setupContainerObservers,
}
