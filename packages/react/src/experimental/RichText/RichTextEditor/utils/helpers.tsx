import { Editor, JSONContent } from "@tiptap/react"
import { RefObject } from "react"
import { heightType, resultType } from "./types"

const checkContainerHeight = (
  containerRef: RefObject<HTMLDivElement>,
  heightThreshold: number = 240
): boolean => {
  if (!containerRef.current) return false
  return containerRef.current.clientHeight >= heightThreshold
}

const isScrolledToBottom = (containerRef: RefObject<HTMLDivElement>): boolean => {
  if (!containerRef.current) return true
  const container = containerRef.current
  return container.scrollHeight - container.scrollTop - container.clientHeight < 1
}

const getHeightThreshold = (height: heightType): number => {
  switch (height) {
    case "xxs":
      return 80
    case "xs":
      return 112
    case "sm":
      return 160
    case "md":
      return 208
    case "lg":
      return 240
    case "xl":
      return 288
    case "2xl":
      return 320
    case "3xl":
      return 384
    case "full":
      return Infinity
    case "auto":
      return 240
    default:
      return 240
  }
}

const getHeight = (height: heightType) => {
  if (height === "xxs") return "h-20"
  if (height === "xs") return "h-28"
  if (height === "sm") return "h-40"
  if (height === "md") return "h-52"
  if (height === "lg") return "h-60"
  if (height === "xl") return "h-72"
  if (height === "2xl") return "h-80"
  if (height === "3xl") return "h-96"
  if (height === "full") return "h-full"
  if (height === "auto") return "h-auto max-h-60"
}

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
  setEditorState: (state: { html: string; json: JSONContent | null }) => void
}

const handleEditorUpdate = ({ editor, onChange, setEditorState }: HandleEditorUpdateProps) => {
  setEditorState({
    html: editor.getHTML(),
    json: null,
  })

  const mentions: number[] = []
  const doc = editor.state.doc

  doc.descendants((node) => {
    if (node.type.name === "mention") {
      mentions.push(Number(node.attrs.id))
    }
  })

  if (editor.isEmpty) {
    onChange({ value: null })
  } else {
    const html = editor.getHTML()
    if (mentions.length > 0) {
      onChange({
        value: html,
        mentionIds: mentions,
      })
    } else {
      onChange({ value: html })
    }
  }
}

interface SetEditorContentProps {
  editor: Editor
  content: string
}

const setEditorContent = ({ editor, content }: SetEditorContentProps) => {
  if (!editor) return null
  editor.commands.setContent(content)
}

export {
  checkContainerHeight,
  getHeight,
  getHeightThreshold,
  handleEditorUpdate,
  isScrolledToBottom,
  setEditorContent,
  setupContainerObservers,
}
