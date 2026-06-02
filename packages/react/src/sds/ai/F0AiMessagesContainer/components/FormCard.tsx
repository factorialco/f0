import { useEffect, useRef } from "react"

import type { ModuleId } from "@/components/avatars/F0AvatarModule"
import type { DetailsItemContent } from "@/experimental/Lists/DetailsItem"

import { secondsToFields } from "@/components/F0DurationInput/utils"
import { DetailsItemsList } from "@/experimental/Lists/DetailsItemsList"
import { F0CanvasCard } from "@/sds/ai/canvas/F0CanvasCard"

import { useAiChat } from "../../F0AiChat/providers/AiChatStateProvider"
import { useFormCardValueFormatter } from "../../F0AiChat/providers/FormCardValueFormatterProvider"

const MAX_VISIBLE_FIELDS = 7
const AUTO_OPEN_MIN_WIDTH = 625

const autoOpenedFormNames = new Set<string>()

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
  formName: string
  formDescription?: string
  module?: ModuleId
  cardTitle: string
  cardDescription: string
  fieldDescriptions?: Record<string, FieldMeta>
  formValues?: Record<string, unknown>
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
  const date = new Date(value)
  return !Number.isNaN(date.getTime())
}

function toLocaleDateString(value: Date | string): string {
  const date = value instanceof Date ? value : new Date(value)
  return date.toLocaleDateString()
}

function extractText(content: DetailsItemContent): string {
  if (content.type === "item") return content.text
  return ""
}

function formatFieldContent(
  value: unknown,
  fieldType?: string
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
    const fromString = isDateLike(from)
      ? toLocaleDateString(from)
      : String(from)
    const toString = isDateLike(to) ? toLocaleDateString(to) : String(to)
    return { type: "item", text: `${fromString} – ${toString}` }
  }

  if (value instanceof Date) {
    return { type: "item", text: value.toLocaleDateString() }
  }

  if (typeof value === "boolean") {
    return { type: "item", text: value ? "Yes" : "No" }
  }

  if (Array.isArray(value)) {
    const texts = value
      .map((entry) => {
        const content = formatFieldContent(entry)
        if (Array.isArray(content)) return content.map(extractText).join(", ")
        return extractText(content)
      })
      .filter(Boolean)

    return { type: "item", text: texts.join(", ") || "—" }
  }

  if (typeof value === "object" && value !== null) {
    const objectValue = value as Record<string, unknown>
    if (typeof objectValue.label === "string") {
      return { type: "item", text: objectValue.label }
    }
    if (typeof objectValue.name === "string") {
      return { type: "item", text: objectValue.name }
    }
    if (typeof objectValue.text === "string") {
      return { type: "item", text: objectValue.text }
    }
    return { type: "item", text: JSON.stringify(value) }
  }

  return { type: "item", text: capitalizeFirst(String(value)) }
}

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
  const contextFormatter = useFormCardValueFormatter(formName)
  const resolvedFormatter = valueFormatter ?? contextFormatter
  const openRef = useRef<() => void>(() => {})

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

  openRef.current = handleOpen

  useEffect(() => {
    if (typeof window === "undefined") return
    if (window.innerWidth < AUTO_OPEN_MIN_WIDTH) return
    if (autoOpenedFormNames.has(formName)) return

    autoOpenedFormNames.add(formName)
    openRef.current()
  }, [formName])

  const fields =
    fieldDescriptions && formValues
      ? Object.entries(fieldDescriptions)
          .map(([key, meta]) => {
            const raw = formValues[key]
            const custom = resolvedFormatter?.(key, raw, {
              fieldType: meta.fieldType,
              customFieldName: meta.customFieldName,
            })

            if (
              !custom &&
              meta.fieldType === "custom" &&
              typeof raw === "object" &&
              raw !== null
            ) {
              return null
            }

            const content = custom ?? formatFieldContent(raw, meta.fieldType)
            const verticalTypes = ["richtext", "textarea"]

            return {
              label: meta.label,
              content,
              verticalLayout: verticalTypes.includes(meta.fieldType ?? ""),
            }
          })
          .filter((field): field is NonNullable<typeof field> => {
            if (!field) return false
            const firstContent = Array.isArray(field.content)
              ? field.content[0]
              : field.content
            return !(
              firstContent?.type === "item" &&
              (firstContent as { text: string }).text === "—"
            )
          })
      : []

  const visibleFields = fields.slice(0, MAX_VISIBLE_FIELDS)
  const hasMore = fields.length > MAX_VISIBLE_FIELDS

  return (
    <F0CanvasCard
      avatar={{ type: "module", module: formModule }}
      title={title}
      description={description}
      isActive={isActive}
      action={{
        type: "open",
        onOpen: handleOpen,
        onClose: closeCanvas,
        showButton: isActive,
      }}
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
    </F0CanvasCard>
  )
}

FormCard.displayName = "FormCard"
