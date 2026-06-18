import { F0Button } from "@/components/F0Button"
import { useI18n } from "@/lib/providers/i18n"
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
}

/**
 * Shared settings UI for reordering and hiding a list of entries (table
 * columns, graph metadata, …). Persists `{ order, hidden }` to the given
 * visualization settings key. The caller supplies the domain-specific `items`.
 */
export const SortAndHideSettings = ({
  items,
  visualizationKey,
  allowSorting,
  allowHiding,
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
      <ScrollArea className="max-h-56">
        <SortAndHideList
          items={items}
          onChange={onChange}
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
