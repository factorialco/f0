import type { TicketCanvasContent } from "../../../types"

import type { DetailsItemContent } from "@/experimental/Lists/DetailsItem"
import { DetailsItemsList } from "@/experimental/Lists/DetailsItemsList"

import { useToolCallId } from "../../../components/messages/AssistantMessage"
import { useAutoOpenCanvas } from "../../../hooks/useAutoOpenCanvas"
import { useAiChat } from "../../../providers/AiChatStateProvider"
import { CanvasCard } from "../../components/CanvasCard"

export type TicketCardProps = {
  title: string
  categoryName: string
  priority?: string | null
  description?: string
  status?: "preview" | "created"
}

export function TicketCard({
  title,
  categoryName,
  priority,
  description,
  status = "preview",
}: TicketCardProps) {
  const toolCallId = useToolCallId()
  const { canvasContent, openCanvas, closeCanvas } = useAiChat()

  const isActive =
    canvasContent?.type === "ticket" &&
    canvasContent.toolCallId != null &&
    canvasContent.toolCallId === toolCallId

  const handleOpen = () =>
    openCanvas({
      type: "ticket",
      title,
      description,
      categoryName,
      priority,
      status,
      toolCallId,
    } satisfies TicketCanvasContent)

  useAutoOpenCanvas(toolCallId, handleOpen)

  const fields: Array<{
    title: string
    content: DetailsItemContent
  }> = [
    {
      title: "Category",
      content: { type: "item", text: categoryName },
    },
    ...(priority
      ? [
          {
            title: "Priority",
            content: { type: "item" as const, text: priority },
          },
        ]
      : []),
    ...(description
      ? [
          {
            title: "Description",
            content: {
              type: "item" as const,
              text:
                description.length > 200
                  ? `${description.slice(0, 200)}…`
                  : description,
            },
          },
        ]
      : []),
  ]

  return (
    <CanvasCard
      module="ai_ticketing"
      title={title}
      description={categoryName}
      onOpen={handleOpen}
      onClose={() => closeCanvas()}
      isActive={isActive}
      showOpenButton={isActive}
    >
      {fields.length > 0 && !isActive && (
        <div className="-mx-3 flex w-full flex-col overflow-hidden pb-1">
          <DetailsItemsList details={fields} tableView />
        </div>
      )}
    </CanvasCard>
  )
}

TicketCard.displayName = "TicketCard"
