import type { ModuleId } from "@/components/avatars/F0AvatarModule"
import type { DetailsItemContent } from "@/experimental/Lists/DetailsItem"

import { secondsToFields } from "@/components/F0DurationInput/utils"
import { DetailsItemsList } from "@/experimental/Lists/DetailsItemsList"
import { useI18n } from "@/lib/providers/i18n"

import { useAutoOpenCanvas } from "../../../hooks/useAutoOpenCanvas"
import { useAiChat } from "../../../providers/AiChatStateProvider"
import { useFormCardValueFormatter } from "../../../providers/FormCardValueFormatterProvider"
import { CanvasCard } from "../../components/CanvasCard"

const MAX_VISIBLE_FIELDS = 7

type FieldMeta = {
  label: string
  fieldType?: string
  customFieldName?: string
}

export type FormCardValueFormatter = (
  key: string,
  value: unknown,
  meta: { fieldType?: string; customFieldName?: string }
) => DetailsItemContent | DetailsItemContent[] | undefined

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
  fieldDescriptions?: Record<string, FieldMeta>
  /** Current form values */
  formValues?: Record<string, unknown>
  /**
   * Optional callback to format a field value into a DetailsItemContent.
   * Return `undefined` to fall back to built-in formatting.
   */
  valueFormatter?: FormCardValueFormatter
}

function stripHtml(html: string): string {
  if (typeof DOMParser !== "undefined") {
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent?.replace(/\s+/g, " ").trim() ?? ""
  }

  return html
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim()
}

function capitalizeFirst(text: string): string {
  if (!text) return text
  return text.charAt(0).toUpperCase() + text.slice(1)
}

function formatDuration(totalSeconds: number): string {
  const { days, hours, minutes, seconds } = secondsToFields(totalSeconds)
  const parts: string[] = []
  if (days > 0) parts.push(`${days}d`)
  if (hours > 0) parts.push(`${hours}h`)
  if (minutes > 0) parts.push(`${minutes}m`)
  if (seconds > 0 || parts.length === 0) parts.push(`${seconds}s`)
  return parts.join(" ")
}

function isDateLike(value: unknown): value is Date | string {
  if (value instanceof Date) return true
  if (typeof value !== "string") return false
  const d = new Date(value)
  return !isNaN(d.getTime())
}

function toLocaleDateString(value: Date | string): string {
  const d = value instanceof Date ? value : new Date(value)
  return d.toLocaleDateString()
}

function formatFieldContent(
  value: unknown,
  fieldType?: string,
  booleanLabels?: { yes: string; no: string }
): DetailsItemContent | DetailsItemContent[] {
  if (value == null || value === "") return { type: "item", text: "—" }

  if (fieldType === "duration" && typeof value === "number") {
    return { type: "item", text: formatDuration(value) }
  }

  if (
    fieldType === "richtext" &&
    typeof value === "object" &&
    value !== null &&
    "value" in value
  ) {
    const html = (value as { value: string | null }).value
    const text = html ? stripHtml(html) : ""
    return { type: "item", text: text || "—" }
  }

  if (
    fieldType === "daterange" &&
    typeof value === "object" &&
    value !== null &&
    "from" in value &&
    "to" in value
  ) {
    const { from, to } = value as { from: unknown; to: unknown }
    const fromStr = isDateLike(from) ? toLocaleDateString(from) : String(from)
    const toStr = isDateLike(to) ? toLocaleDateString(to) : String(to)
    return { type: "item", text: `${fromStr} – ${toStr}` }
  }

  if (value instanceof Date)
    return { type: "item", text: value.toLocaleDateString() }
  if (typeof value === "boolean")
    return {
      type: "item",
      text: value ? (booleanLabels?.yes ?? "Yes") : (booleanLabels?.no ?? "No"),
    }
  if (Array.isArray(value)) {
    const texts = value
      .map((v) => {
        const content = formatFieldContent(v, undefined, booleanLabels)
        if (Array.isArray(content)) return content.map(extractText).join(", ")
        return extractText(content)
      })
      .filter(Boolean)
    return { type: "item", text: texts.join(", ") || "—" }
  }

  if (typeof value === "object" && value !== null) {
    const obj = value as Record<string, unknown>
    if (typeof obj.label === "string") return { type: "item", text: obj.label }
    if (typeof obj.name === "string") return { type: "item", text: obj.name }
    if (typeof obj.text === "string") return { type: "item", text: obj.text }
    return { type: "item", text: JSON.stringify(value) }
  }

  return { type: "item", text: capitalizeFirst(String(value)) }
}

function extractText(content: DetailsItemContent): string {
  if (content.type === "item") return content.text
  return ""
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
  valueFormatter,
}: FormCardProps) {
  const { canvasContent, openCanvas, closeCanvas } = useAiChat()
  const i18n = useI18n()
  const contextFormatter = useFormCardValueFormatter(formName)
  const resolvedFormatter = valueFormatter ?? contextFormatter

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
          .map(([key, meta]) => {
            const raw = formValues[key]
            const custom = resolvedFormatter?.(key, raw, {
              fieldType: meta.fieldType,
              customFieldName: meta.customFieldName,
            })
            // Skip custom fields with object values when no formatter handles them
            if (
              !custom &&
              meta.fieldType === "custom" &&
              typeof raw === "object" &&
              raw !== null
            ) {
              return null
            }
            const content =
              custom ??
              formatFieldContent(raw, meta.fieldType, {
                yes: i18n.forms.yes,
                no: i18n.forms.no,
              })
            const verticalTypes = ["richtext", "textarea"]
            const verticalLayout = verticalTypes.includes(meta.fieldType ?? "")
            return { label: meta.label, content, verticalLayout }
          })
          .filter((f): f is NonNullable<typeof f> => {
            if (!f) return false
            const c = Array.isArray(f.content) ? f.content[0] : f.content
            return !(c?.type === "item" && (c as { text: string }).text === "—")
          })
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
      onOpen={handleOpen}
      showOpenButton={isActive}
    >
      {visibleFields.length > 0 && !isActive && (
        <div className="-mx-3 flex w-full flex-col overflow-hidden pb-1">
          <DetailsItemsList
            details={visibleFields.map((field) => ({
              title: field.label,
              content: field.content,
              ...(field.verticalLayout && { verticalLayout: true }),
            }))}
            showSeeMore={hasMore}
            onClickSeeMore={handleOpen}
            tableView
          />
        </div>
      )}
    </CanvasCard>
  )
}

FormCard.displayName = "FormCard"
