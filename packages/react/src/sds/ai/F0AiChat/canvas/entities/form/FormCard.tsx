import type { ModuleId } from "@/components/avatars/F0AvatarModule"

import { useAutoOpenCanvas } from "../../../hooks/useAutoOpenCanvas"
import { useAiChat } from "../../../providers/AiChatStateProvider"
import { CanvasCard } from "../../components/CanvasCard"

export type FormCardProps = {
  /** Unique name of the form in the registry */
  formName: string
  /** Optional description shown on the card */
  formDescription?: string
  /** Module avatar for the card */
  module?: ModuleId
  /** Custom title override for the card (set by the AI via fillForm) */
  cardTitle: string
  /** Custom description override for the card (set by the AI via fillForm) */
  cardDescription: string
}

/**
 * Form-specific card rendered inline in the AI chat stream.
 * Shows the active form name, description, and an Open/Close button
 * that opens the form in the canvas panel.
 */
export function FormCard({
  formName,
  formDescription,
  module: formModule,
  cardTitle,
  cardDescription,
}: FormCardProps) {
  const { canvasContent, openCanvas, closeCanvas } = useAiChat()

  const title = cardTitle ?? formName
  const description = cardDescription ?? formDescription ?? ""

  const isActive =
    canvasContent?.type === "form" && canvasContent.formName === formName

  const handleOpen = () =>
    openCanvas({
      type: "form",
      title,
      description,
      formName,
      formDescription,
      formModule,
    })

  useAutoOpenCanvas(formName, handleOpen)

  return (
    <CanvasCard
      module={formModule}
      title={title}
      description={description}
      onOpen={handleOpen}
      onClose={closeCanvas}
      isActive={isActive}
    />
  )
}

FormCard.displayName = "FormCard"
