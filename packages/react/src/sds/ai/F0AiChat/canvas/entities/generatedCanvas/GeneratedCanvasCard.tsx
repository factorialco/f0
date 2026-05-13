import { useToolCallId } from "../../../components/messages/AssistantMessage"
import { useAutoOpenCanvas } from "../../../hooks/useAutoOpenCanvas"
import { useAiChat } from "../../../providers/AiChatStateProvider"
import { CanvasCard } from "../../components/CanvasCard"
import type { GeneratedCanvasContent } from "../../../types"

export type GeneratedCanvasCardProps = Omit<
  GeneratedCanvasContent,
  "type" | "toolCallId"
>

export function GeneratedCanvasCard({
  title,
  description,
  engine,
  rendererSource,
  data,
  stylePrompt,
}: GeneratedCanvasCardProps) {
  const toolCallId = useToolCallId()
  const { canvasContent, openCanvas, closeCanvas } = useAiChat()

  const isActive =
    canvasContent?.type === "generatedCanvas" &&
    canvasContent.toolCallId != null &&
    canvasContent.toolCallId === toolCallId

  const handleOpen = () =>
    openCanvas({
      type: "generatedCanvas",
      title,
      description,
      engine,
      rendererSource,
      data,
      stylePrompt,
      toolCallId,
    })

  useAutoOpenCanvas(toolCallId, handleOpen)

  return (
    <CanvasCard
      module="analytics"
      title={title}
      description={description ?? "Generated visual canvas"}
      onOpen={handleOpen}
      onClose={() => closeCanvas()}
      isActive={isActive}
    />
  )
}

GeneratedCanvasCard.displayName = "GeneratedCanvasCard"
