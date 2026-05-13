import { cn } from "@/lib/utils"

import type { VizNodeField, VizOverlay } from "./types"

interface OrgChartNodeProps {
  data: Record<string, unknown>
  fields: VizNodeField[]
  overlays: VizOverlay[] | undefined
  backgroundColor?: string
  borderColor?: string
  borderWidth?: number
  nodeWidth: number
  nodeHeight: number
  scale: number
  avatarColumn?: string
}

function formatValue(value: unknown, format: VizNodeField["format"]): string {
  if (value == null) return ""
  if (format === "currency") {
    try {
      return Number(value).toLocaleString(undefined, {
        style: "currency",
        currency: "EUR",
        maximumFractionDigits: 0,
      })
    } catch {
      return String(value)
    }
  }
  if (format === "percent") {
    return `${Number(value)}%`
  }
  if (format === "number") {
    return Number(value).toLocaleString()
  }
  if (format === "date" && value instanceof Date) {
    return value.toLocaleDateString()
  }
  return String(value)
}

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase()
}

function firstPresentValue(
  data: Record<string, unknown>,
  fields: string[]
): string {
  for (const field of fields) {
    const value = data[field]
    if (value != null && value !== "") return String(value)
  }
  return ""
}

function getDisplayName(data: Record<string, unknown>): string {
  return firstPresentValue(data, [
    "fullName",
    "name",
    "personName",
    "person_name",
    "employee_fullName",
    "employeeFullName",
    "employee_name",
    "id",
    "person_id",
    "employee_id",
  ])
}

function getFieldValue(
  data: Record<string, unknown>,
  field: VizNodeField | undefined
): string {
  if (!field) return ""
  return formatValue(data[field.column], field.format)
}

function personCountLabel(count: number): string {
  return count === 1 ? "1 person" : `${count} people`
}

function buildCardStyle({
  backgroundColor,
  borderColor,
  borderWidth,
  nodeWidth,
  nodeHeight,
  scale,
}: Pick<
  OrgChartNodeProps,
  | "backgroundColor"
  | "borderColor"
  | "borderWidth"
  | "nodeWidth"
  | "nodeHeight"
  | "scale"
>): React.CSSProperties {
  const accentColor = backgroundColor
  return {
    width: nodeWidth * scale,
    height: nodeHeight * scale,
    backgroundColor: "#ffffff",
    borderColor: borderColor ?? "#e2e8f0",
    borderWidth: borderWidth ?? 1,
    borderLeftColor: accentColor ?? borderColor ?? "#e2e8f0",
    borderLeftWidth: accentColor ? 4 : (borderWidth ?? 1),
    transform: `scale(${scale})`,
    transformOrigin: "top left",
  }
}

function ColorAccent({ color }: { color: string | undefined }) {
  if (!color) return null

  return (
    <span
      data-visualization-accent="true"
      aria-hidden="true"
      className="absolute left-0 top-0 h-1.5 w-full"
      style={{ backgroundColor: color }}
    />
  )
}

function SingleItemNode({
  data,
  fields,
  overlays,
  backgroundColor,
  borderColor,
  borderWidth,
  nodeWidth,
  nodeHeight,
  scale,
  avatarColumn,
}: OrgChartNodeProps) {
  const displayName = getDisplayName(data)
  const initials = getInitials(displayName)
  const avatarSrc = avatarColumn ? data[avatarColumn] : undefined

  const visibleFields = fields.filter((f) => f.visible !== false)
  const topFields = visibleFields.filter((f) => f.position === "top")
  const centerFields = visibleFields.filter(
    (f) => f.position === undefined || f.position === "center"
  )
  const bottomFields = visibleFields.filter((f) => f.position === "bottom")

  const style = buildCardStyle({
    backgroundColor,
    borderColor,
    borderWidth,
    nodeWidth,
    nodeHeight,
    scale,
  })

  return (
    <div
      className={cn(
        "relative flex flex-col items-stretch overflow-hidden rounded-xl border p-2.5 shadow-sm"
      )}
      style={style}
    >
      <ColorAccent color={backgroundColor} />
      {topFields.length > 0 && (
        <div className="mb-1 flex flex-wrap gap-1">
          {topFields.map((field) => (
            <span
              key={field.column}
              className="truncate text-[10px] font-medium text-f1-foreground-secondary"
            >
              {formatValue(data[field.column], field.format)}
            </span>
          ))}
        </div>
      )}

      <div className="flex min-h-0 flex-1 items-center gap-2">
        {typeof avatarSrc === "string" && avatarSrc ? (
          <img
            src={avatarSrc}
            alt={displayName}
            className="h-8 w-8 shrink-0 rounded-full bg-f1-background-secondary object-cover"
          />
        ) : (
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-f1-background-secondary text-xs font-semibold text-f1-foreground-secondary">
            {initials}
          </div>
        )}
        <div className="flex min-w-0 flex-col">
          {centerFields.map((field) => {
            const isTitle = field.style === "title"
            const formattedValue = formatValue(data[field.column], field.format)
            return (
              <span
                key={field.column}
                className={cn(
                  "truncate",
                  isTitle
                    ? "text-xs font-semibold text-f1-foreground"
                    : "text-[10px] text-f1-foreground-secondary"
                )}
              >
                {field.label && (
                  <span className="mr-1 text-f1-foreground-secondary">
                    {field.label}:
                  </span>
                )}
                {isTitle && !formattedValue ? displayName : formattedValue}
              </span>
            )
          })}
        </div>
      </div>

      {bottomFields.length > 0 && (
        <div className="mt-1 flex flex-wrap gap-1">
          {bottomFields.map((field) => (
            <span
              key={field.column}
              className="rounded bg-f1-background-secondary px-1.5 py-0.5 text-[10px] text-f1-foreground-secondary"
            >
              {field.label && (
                <span className="mr-1 text-f1-foreground-secondary">
                  {field.label}:
                </span>
              )}
              {formatValue(data[field.column], field.format)}
            </span>
          ))}
        </div>
      )}

      {overlays && overlays.length > 0 && (
        <div className="mt-1 flex flex-wrap gap-1">
          {overlays.map((overlay, i) => {
            if (overlay.type === "badge") {
              const value = data[overlay.field]
              if (overlay.condition && String(value) !== overlay.condition) {
                return null
              }
              return (
                <span
                  key={i}
                  className="rounded-full bg-amber-100 px-1 py-0.5 text-[9px] text-amber-700"
                >
                  {overlay.icon ?? "★"}
                </span>
              )
            }
            if (overlay.type === "progress-bar") {
              const value = Number(data[overlay.field] ?? 0)
              const max = overlay.maxValue ?? 100
              const pct = Math.min(100, Math.max(0, (value / max) * 100))
              return (
                <div key={i} className="flex w-full items-center gap-1">
                  <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-f1-background-secondary">
                    <div
                      className="h-full rounded-full bg-emerald-400"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <span className="text-[9px] text-f1-foreground-secondary">
                    {Math.round(pct)}%
                  </span>
                </div>
              )
            }
            if (overlay.type === "action") {
              const value = data[overlay.column]
              if (!value) return null
              return (
                <a
                  key={i}
                  href={String(value)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded bg-blue-50 px-1.5 py-0.5 text-[9px] text-blue-600 transition-colors hover:bg-blue-100"
                  onClick={(e) => e.stopPropagation()}
                >
                  {overlay.icon ?? "→"} {overlay.label ?? overlay.column}
                </a>
              )
            }
            return null
          })}
        </div>
      )}
    </div>
  )
}

function MultiItemNode({
  items,
  fields,
  backgroundColor,
  borderColor,
  borderWidth,
  nodeWidth,
  nodeHeight,
  scale,
  avatarColumn,
}: {
  items: Record<string, unknown>[]
} & Omit<OrgChartNodeProps, "data" | "overlays">) {
  const style = buildCardStyle({
    backgroundColor,
    borderColor,
    borderWidth,
    nodeWidth,
    nodeHeight,
    scale,
  })
  const visibleFields = fields.filter((field) => field.visible !== false)
  const titleField = visibleFields.find((field) => field.style === "title")
  const subtitleField = visibleFields.find(
    (field) => field !== titleField && field.position === "center"
  )
  const previewItems = items.slice(0, 2)
  const remainingItems = Math.max(0, items.length - previewItems.length)

  if (items.length === 0) {
    return (
      <div
        className="relative flex flex-col justify-center overflow-hidden rounded-xl border border-dashed p-3 shadow-sm"
        style={style}
      >
        <ColorAccent color={backgroundColor} />
        <span className="text-xs font-medium text-f1-foreground-secondary">
          No current people
        </span>
      </div>
    )
  }

  return (
    <div
      className="relative flex flex-col gap-1 overflow-hidden rounded-xl border p-2 shadow-sm"
      style={style}
    >
      <ColorAccent color={backgroundColor} />
      <div className="flex items-center justify-between gap-2">
        <span className="text-[10px] font-semibold text-f1-foreground">
          {personCountLabel(items.length)}
        </span>
        {remainingItems > 0 && (
          <span className="rounded-full bg-f1-background-secondary px-1.5 py-0.5 text-[9px] font-medium text-f1-foreground-secondary">
            +{remainingItems} more
          </span>
        )}
      </div>

      {previewItems.map((item, idx) => {
        const name = getDisplayName(item)
        const initials = getInitials(name)
        const avatarSrc = avatarColumn ? item[avatarColumn] : item.avatarUrl
        const subtitle = getFieldValue(item, subtitleField)
        const isVacant = item.isVacant === true

        return (
          <div
            key={`${name}-${idx}`}
            className={cn(
              "flex min-h-0 items-center gap-1.5 rounded px-1.5 py-0.5",
              isVacant ? "bg-f1-background-secondary" : "bg-white"
            )}
          >
            {!isVacant &&
              (typeof avatarSrc === "string" && avatarSrc ? (
                <img
                  src={avatarSrc}
                  alt={name}
                  className="h-5 w-5 shrink-0 rounded-full bg-f1-background-secondary object-cover"
                />
              ) : (
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-f1-background-secondary text-[8px] font-semibold text-f1-foreground-secondary">
                  {initials}
                </div>
              ))}
            <div className="flex min-w-0 flex-1 flex-col">
              <span
                className={cn(
                  "truncate text-[10px]",
                  isVacant
                    ? "italic text-f1-foreground-secondary"
                    : "font-medium text-f1-foreground"
                )}
              >
                {getFieldValue(item, titleField) || name || "Open role"}
              </span>
              {subtitle && (
                <span className="truncate text-[8px] text-f1-foreground-secondary">
                  {subtitle}
                </span>
              )}
            </div>
            {item.isInterim === true && (
              <span className="shrink-0 rounded-full bg-amber-100 px-1 text-[8px] text-amber-700">
                interim
              </span>
            )}
            {item.isNewJoiner === true && (
              <span className="shrink-0 rounded-full bg-green-100 px-1 text-[8px] text-green-700">
                new
              </span>
            )}
          </div>
        )
      })}
    </div>
  )
}

export function OrgChartNode(props: OrgChartNodeProps) {
  const items = props.data.__items as Record<string, unknown>[] | undefined

  if (items) {
    return (
      <MultiItemNode
        items={items}
        fields={props.fields}
        backgroundColor={props.backgroundColor}
        borderColor={props.borderColor}
        borderWidth={props.borderWidth}
        nodeWidth={props.nodeWidth}
        nodeHeight={props.nodeHeight}
        scale={props.scale}
        avatarColumn={props.avatarColumn}
      />
    )
  }

  return <SingleItemNode {...props} />
}
