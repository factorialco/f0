import { ReactNode, useState } from "react"

import { F0AvatarIcon } from "@/components/avatars/F0AvatarIcon"
import { IconType } from "@/components/F0Icon"
import { F0SearchInput } from "@/components/F0SearchInput"
import { F0Dialog } from "@/patterns/F0Dialog"

/** One entry in the widget catalog dialog. */
export interface WidgetCatalogItem {
  id: string
  title: string
  icon: IconType
  /**
   * The LIVE PREVIEW of the widget — the same node the Home renders (e.g. a
   * `SlotWidget`), so the preview can't drift from what gets added.
   */
  preview: ReactNode
}

export interface WidgetCatalogProps {
  isOpen: boolean
  onClose: () => void
  /** The widgets that can be added, in the order to list them. */
  widgets: WidgetCatalogItem[]
  /** Called with the chosen widget id when the CTA is pressed. */
  onAdd: (id: string) => void
  /**
   * Content width of the column this was opened from — the preview is capped
   * to it, so a rail-bound widget previews at rail width.
   */
  previewWidth?: number
  title?: string
}

/**
 * WidgetCatalog — the "Add widget" dialog, mirroring the custom-home prototype:
 * a searchable picker on the left (icon + title rows, the selected row tinted),
 * a LIVE preview of the highlighted widget on the right at the width it will
 * really get, and the "Add widget" CTA in the dialog footer. `width="xl"`
 * rather than fullscreen.
 *
 * Selection follows the filter: if the selected row is filtered out, the first
 * remaining row takes over, so the preview always shows something the CTA can
 * actually add.
 */
export function WidgetCatalog({
  isOpen,
  onClose,
  widgets,
  onAdd,
  previewWidth = 396,
  title = "Add widget",
}: WidgetCatalogProps) {
  const [query, setQuery] = useState("")
  const [selectedId, setSelectedId] = useState<string | null>(null)

  const needle = query.trim().toLowerCase()
  const shown = needle
    ? widgets.filter((w) => w.title.toLowerCase().includes(needle))
    : widgets

  // Selection follows the filter — never preview a row the list isn't showing.
  const selected = shown.find((w) => w.id === selectedId) ?? shown[0] ?? null

  return (
    <F0Dialog
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      width="xl"
      primaryAction={{
        label: "Add widget",
        disabled: !selected,
        onClick: () => selected && onAdd(selected.id),
      }}
    >
      <div className="flex h-full min-h-96 gap-4">
        {/* The picker: a search field leading the widget rows. */}
        <div className="flex w-80 shrink-0 flex-col gap-2">
          <F0SearchInput
            value={query}
            onChange={setQuery}
            placeholder="Search widgets"
          />
          <div className="flex flex-col gap-1 overflow-y-auto">
            {shown.map((w) => (
              <button
                key={w.id}
                type="button"
                onClick={() => setSelectedId(w.id)}
                className={
                  "flex items-center gap-3 rounded-md p-2 text-left " +
                  (selected?.id === w.id
                    ? "bg-f1-background-selected"
                    : "hover:bg-f1-background-tertiary")
                }
              >
                <F0AvatarIcon icon={w.icon} size="lg" />
                <span className="truncate font-medium text-f1-foreground">
                  {w.title}
                </span>
              </button>
            ))}
            {shown.length === 0 ? (
              <div className="p-2 text-f1-foreground-secondary">
                No widgets match your search.
              </div>
            ) : null}
          </div>
        </div>
        {/* The preview: the real widget, centered on the page grey, at the
            width the target column will really give it. */}
        <div className="flex min-w-0 flex-1 items-center justify-center rounded-lg bg-f1-background-secondary p-6">
          {selected ? (
            <div className="w-full" style={{ maxWidth: `${previewWidth}px` }}>
              {selected.preview}
            </div>
          ) : null}
        </div>
      </div>
    </F0Dialog>
  )
}
