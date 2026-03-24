import { cn, focusRing } from "@/lib/utils"
import { Editor } from "@tiptap/react"
import { useCallback, useState } from "react"
import OneIcon from "@/experimental/AiPromotionChat/OneIcon"
import { AiTutorLabels, AiTutorChatConfig } from "./AskAITutorDialog"

export interface AiTutorMessage {
  role: "user" | "assistant"
  content: string
}

export interface AiTutorConfig {
  labels: AiTutorLabels
  chatConfig?: AiTutorChatConfig
  onAskAI?: (selectedText: string) => void
  onGoDeeper?: (messages: AiTutorMessage[]) => void
}

interface AskAITutorButtonProps {
  editor: Editor
  config: AiTutorConfig
  onOpen: (selectedText: string) => void
}

export const AskAITutorButton = ({
  editor,
  config,
  onOpen,
}: AskAITutorButtonProps) => {
  const [isHover, setIsHover] = useState(false)

  const handleClick = useCallback(() => {
    const { from, to } = editor.state.selection
    const text = editor.state.doc.textBetween(from, to, " ")
    if (!text.trim()) return

    onOpen(text)
    config.onAskAI?.(text)
  }, [editor, config, onOpen])

  return (
    <button
      type="button"
      onClick={handleClick}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      aria-label={config.labels.buttonLabel}
      title={config.labels.buttonTooltip}
      className={cn(
        "flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg transition-transform hover:scale-110 active:scale-95",
        focusRing()
      )}
    >
      <OneIcon size="md" hover={isHover} />
    </button>
  )
}
