import { useI18n } from "@/lib/providers/i18n"

import type { DataDownloadDataset } from "../../../actions/core/dataDownload/types"
import type { DataDownloadCanvasContent } from "../../../types"

import { useToolCallId } from "../../../components/messages/AssistantMessage"
import { useAutoOpenCanvas } from "../../../hooks/useAutoOpenCanvas"
import { useAiChat } from "../../../providers/AiChatStateProvider"
import { CanvasCard } from "../../components/CanvasCard"

export type DataDownloadCardProps = {
  title?: string
  dataset: DataDownloadDataset
  filename?: string
  markdown?: string
}

export function DataDownloadCard({
  title: titleProp,
  dataset,
  filename,
  markdown,
}: DataDownloadCardProps) {
  const translations = useI18n()
  const toolCallId = useToolCallId()
  const { canvasContent, openCanvas, closeCanvas } = useAiChat()

  const title = titleProp || filename || translations.ai.dataDownload.title

  const isActive =
    canvasContent?.type === "dataDownload" &&
    canvasContent.toolCallId != null &&
    canvasContent.toolCallId === toolCallId

  const handleOpen = () =>
    openCanvas({
      type: "dataDownload",
      title,
      dataset,
      filename,
      markdown,
      toolCallId,
    } satisfies DataDownloadCanvasContent)

  useAutoOpenCanvas(toolCallId, handleOpen)

  return (
    <CanvasCard
      module="analytics"
      title={title}
      description={
        dataset.totalCount != null
          ? `${dataset.totalCount} ${translations.ai.dataDownload.rows}`
          : translations.ai.dataDownload.title
      }
      onOpen={handleOpen}
      onClose={() => closeCanvas()}
      isActive={isActive}
    />
  )
}

DataDownloadCard.displayName = "DataDownloadCard"
