import type { ModuleId } from "@/components/avatars/F0AvatarModule"

import { useAutoOpenCanvas } from "../../../hooks/useAutoOpenCanvas"
import { useAiChat } from "../../../providers/AiChatStateProvider"
import { CanvasCard } from "../../components/CanvasCard"
import { AnimatePresence, motion } from "motion/react"
import { DetailsItemsList } from "@/experimental/Lists/DetailsItemsList"

const MAX_VISIBLE_FIELDS = 7

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
  /** Field label metadata from the form schema */
  fieldDescriptions?: Record<
    string,
    {
      label: string
    }
  >
  /** Current form values */
  formValues?: Record<string, unknown>
}

function formatFieldValue(value: unknown): string {
  if (value == null || value === "") return "—"
  if (value instanceof Date) return value.toLocaleDateString()
  if (Array.isArray(value)) return value.map(formatFieldValue).join(", ")
  if (typeof value === "boolean") return value ? "Yes" : "No"
  if (typeof value === "object") return JSON.stringify(value)
  return String(value)
}

/**
 * Form-specific card rendered inline in the AI chat stream.
 * Shows the active form name, description, and an Open/Close button
 * that opens the form in the canvas panel.
 * When field data is provided, displays a summary of field labels and values.
 */
export function FormCard({
  formName,
  formDescription,
  module: formModule,
  cardTitle,
  cardDescription,
  fieldDescriptions,
  formValues,
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

  const fields =
    fieldDescriptions && formValues
      ? Object.entries(fieldDescriptions)
          .map(([key, { label }]) => ({
            label,
            value: formatFieldValue(formValues[key]),
          }))
          .filter(
            ({ value }) => value !== "" && value !== undefined && value !== null
          )
      : []

  const visibleFields = fields.slice(0, MAX_VISIBLE_FIELDS)
  const hasMore = fields.length > MAX_VISIBLE_FIELDS

  return (
    <CanvasCard
      module={formModule}
      title={title}
      description={description}
      onClose={closeCanvas}
      isActive={isActive}
      onOpen={!!fields.length ? undefined : handleOpen}
    >
      <AnimatePresence>
        {visibleFields.length > 0 && !isActive && (
          <motion.div
            key="form-fields"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.165, 0.84, 0.44, 1] }}
            className="w-full flex flex-col -mx-3 overflow-hidden"
          >
            <DetailsItemsList
              details={visibleFields.map((field) => ({
                title: field.label,
                content: {
                  type: "item" as const,
                  text: field.value,
                },
              }))}
              showSeeMore={hasMore}
              onClickSeeMore={handleOpen}
              tableView
            />
          </motion.div>
        )}
      </AnimatePresence>
    </CanvasCard>
  )
}

FormCard.displayName = "FormCard"
