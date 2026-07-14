import { useContext, useEffect, useId, useMemo, useState } from "react"

import { F0Button } from "@/components/F0Button"
import { ButtonInternal } from "@/components/F0Button/internal"
import { ArrowLeft, Filter } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { F0DialogContext } from "@/patterns/F0Dialog"
import { FilterContent } from "@/patterns/OneFilterPicker/components/FilterContent"
import { FilterList } from "@/patterns/OneFilterPicker/components/FilterList"
import { getActiveFilterKeys } from "@/patterns/OneFilterPicker/internal/getActiveFilterKeys"
import { getActiveFiltersValue } from "@/patterns/OneFilterPicker/internal/getActiveFiltersValue"
import type {
  FiltersDefinition,
  FiltersState,
} from "@/patterns/OneFilterPicker/types"
import { Popover, PopoverContent, PopoverTrigger } from "@/ui/popover"

import type { DashboardItemFiltersConfig } from "../../types"

/**
 * Widget-header filter control: an icon button (with an applied-filter
 * counter) that opens a compact anchored popover for editing this widget's
 * filters.
 *
 * The popover is single-pane with drill-in navigation — a list of available
 * filters, then the selected filter's form — reusing the OneFilterPicker
 * building blocks. Edits are held as a draft and only emitted through
 * `onChange` when the user applies; dismissing the popover discards the
 * draft.
 */
export function DashboardItemFilters<ItemFilters extends FiltersDefinition>({
  filters,
  value,
  onChange,
  onOpenChange,
}: DashboardItemFiltersConfig<ItemFilters> & {
  /** Notifies the host header when the popover opens/closes. */
  onOpenChange?: (open: boolean) => void
}) {
  const i18n = useI18n()
  const id = useId()

  const [isOpen, setIsOpen] = useState(false)
  const [selectedFilterKey, setSelectedFilterKey] = useState<
    keyof ItemFilters | null
  >(null)
  const [draftValue, setDraftValue] = useState<FiltersState<ItemFilters>>(value)

  // Keep the draft in sync with the applied value while the popover is
  // closed, so reopening always starts from what is actually applied.
  useEffect(() => {
    if (!isOpen) setDraftValue(value)
  }, [isOpen, value])

  // When rendered inside a dialog (e.g. a fullscreen canvas), portal the
  // popover into the dialog container so it stacks above the dialog overlay.
  const dialogContext = useContext(F0DialogContext)
  const portalContainer =
    dialogContext.portalContainer &&
    (dialogContext.position === "center" ||
      dialogContext.position === "fullscreen")
      ? dialogContext.portalContainer
      : undefined

  const appliedCount = useMemo(() => {
    const count = getActiveFilterKeys(filters, value, i18n).length
    return count === 0 ? undefined : count
  }, [filters, value, i18n])

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open)
    onOpenChange?.(open)
    if (open) return
    // Dismissing without applying discards the draft.
    setSelectedFilterKey(null)
    setDraftValue(value)
  }

  const handleApply = () => {
    // Emit only active filters so cleared/incomplete entries are stripped,
    // mirroring OneFilterPicker's apply semantics.
    onChange(getActiveFiltersValue(filters, draftValue, i18n))
    setIsOpen(false)
    onOpenChange?.(false)
    setSelectedFilterKey(null)
  }

  const updateDraftValue = (key: keyof ItemFilters, newValue: unknown) => {
    setDraftValue((current) => ({ ...current, [key]: newValue }))
  }

  return (
    <Popover open={isOpen} onOpenChange={handleOpenChange}>
      <PopoverTrigger asChild>
        <ButtonInternal
          label={i18n.filters.label}
          icon={Filter}
          variant="ghost"
          size="md"
          hideLabel
          compact
          pressed={isOpen}
          counterValue={appliedCount}
          aria-controls={isOpen ? id : undefined}
          onClick={(e: React.MouseEvent) => e.stopPropagation()}
        />
      </PopoverTrigger>
      <PopoverContent
        className="w-[380px] rounded-xl border border-solid border-f1-border-secondary p-0 shadow-md"
        align="end"
        side="bottom"
        aria-id={id}
        container={portalContainer}
      >
        <div className="flex h-[420px] flex-col">
          <div className="flex shrink-0 items-center gap-2 py-1.5 pl-1.5 pr-3">
            {selectedFilterKey ? (
              <>
                <F0Button
                  label={i18n.filters.availableFilters}
                  icon={ArrowLeft}
                  hideLabel
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedFilterKey(null)}
                />
                <span className="truncate text-base font-medium text-f1-foreground">
                  {filters[selectedFilterKey].label}
                </span>
              </>
            ) : (
              <span className="px-2 text-base font-medium text-f1-foreground">
                {i18n.filters.label}
              </span>
            )}
          </div>
          <div className="flex min-h-0 flex-1 flex-col">
            {selectedFilterKey ? (
              <>
                <div className="min-h-0 flex-1 overflow-y-auto border-0 border-t border-solid border-f1-border-secondary">
                  <FilterContent
                    selectedFilterKey={selectedFilterKey}
                    definition={filters}
                    tempFilters={draftValue}
                    onFilterChange={updateDraftValue}
                    isCompactMode
                  />
                </div>
                <div className="flex shrink-0 items-center justify-end gap-2 border-0 border-t border-solid border-f1-border-secondary p-2">
                  <F0Button
                    onClick={() => setSelectedFilterKey(null)}
                    label={i18n.filters.applySelection}
                  />
                </div>
              </>
            ) : (
              <FilterList
                definition={filters}
                tempFilters={draftValue}
                selectedFilterKey={selectedFilterKey}
                onFilterSelect={(key: keyof ItemFilters) =>
                  setSelectedFilterKey(key)
                }
                onClickApplyFilters={handleApply}
                isCompactMode
              />
            )}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
