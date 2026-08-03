import { F0Button } from "@/components/F0Button"
import { ButtonInternal } from "@/components/F0Button/internal"
import { useI18n } from "@/lib/providers/i18n"
import { Add } from "@/icons/app"
import { ScrollArea } from "@/ui/scrollarea"

import { SortAndHideList } from "../visualizations/collection/Table/components/SortAndHideList"
import type { SortAndHideListItem } from "../visualizations/collection/Table/components/SortAndHideList/types"
import type { DataCollectionSettingsContextType } from "./SettingsProvider"
import { useDataCollectionSettings } from "./SettingsProvider"

type VisualizationSettingsKey = Parameters<
  DataCollectionSettingsContextType["setVisualizationSettings"]
>[0]

export type SortAndHideSettingsProps = {
  /** The list rows, already computed from the caller's domain (columns, tags…). */
  items: SortAndHideListItem[]
  /** Which visualization settings entry to read/write (`order` + `hidden`). */
  visualizationKey: VisualizationSettingsKey
  allowSorting: boolean
  allowHiding: boolean
  /**
   * When set, an "Add column" entry is shown at the top of the section. The
   * caller opens its own picker and updates the underlying columns.
   */
  onAddColumn?: () => void
  /**
   * When set, items flagged `removable` reveal a trash affordance on hover that
   * calls this with the entry id. Removing is distinct from hiding.
   */
  onRemoveColumn?: (id: string) => void
}

/**
 * Shared settings UI for reordering and hiding a list of entries (table
 * columns, graph metadata, …). Persists `{ order, hidden }` to the given
 * visualization settings key. The caller supplies the domain-specific `items`.
 *
 * Optionally exposes column add/remove affordances via `onAddColumn` /
 * `onRemoveColumn`; these mutate the caller's column set rather than the
 * persisted hide/order state.
 */
export const SortAndHideSettings = ({
  items,
  visualizationKey,
  allowSorting,
  allowHiding,
  onAddColumn,
  onRemoveColumn,
}: SortAndHideSettingsProps) => {
  const i18n = useI18n()
  const { setVisualizationSettings } = useDataCollectionSettings()

  const onChange = (next: SortAndHideListItem[]) => {
    setVisualizationSettings(visualizationKey, (prev) => ({
      ...prev,
      order: next.map((item) => item.id),
      hidden: next.filter((item) => !item.visible).map((item) => item.id),
    }))
  }

  const toggleAll = (visible: boolean) => {
    onChange(
      items.map((item) => ({
        ...item,
        visible: item.canHide ? visible : item.visible,
      }))
    )
  }

  const showToggleAll =
    allowHiding && items.filter((item) => item.canHide).length > 1

  return (
    <div className="relative -mr-2 flex flex-col gap-2">
      {onAddColumn && (
        <div className="flex">
          <ButtonInternal
            variant="ghost"
            size="sm"
            icon={Add}
            label={i18n.collections.table.settings.addColumn}
            onClick={onAddColumn}
          />
        </div>
      )}
      {/*
        Cap the scrollable viewport (not the ScrollArea root) at ~8 rows.
        Radix's viewport is `height: 100%`, which does not resolve against a
        root that only has `max-height`, so a `max-h-*` on the root let the
        list overflow and get clipped without ever scrolling — no scrollbar,
        no wheel scroll. Constraining the viewport itself makes it scroll; the
        scrollbar keeps the default hover behaviour.
      */}
      <ScrollArea className="[&_[data-scroll-container]]:max-h-56">
        <SortAndHideList
          items={items}
          onChange={onChange}
          onRemove={
            onRemoveColumn ? (item) => onRemoveColumn(item.id) : undefined
          }
          allowSorting={allowSorting}
          allowHiding={allowHiding}
        />
        {showToggleAll && (
          <div className="sticky bottom-0 flex justify-between bg-f1-background/80 p-2 pl-0 backdrop-blur-sm">
            <F0Button
              variant="outline"
              size="sm"
              label={i18n.collections.table.settings.showAllColumns}
              onClick={() => toggleAll(true)}
            />
            <F0Button
              variant="ghost"
              size="sm"
              label={i18n.collections.table.settings.hideAllColumns}
              onClick={() => toggleAll(false)}
            />
          </div>
        )}
      </ScrollArea>
    </div>
  )
}
