import {
  useContext,
  useEffect,
  useId,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react"

import { F0Button } from "@/components/F0Button"
import { ButtonInternal } from "@/components/F0Button/internal"
import { ArrowLeft, Filter } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { F0DialogContext } from "@/patterns/F0Dialog"
import { FilterContent } from "@/patterns/OneFilterPicker/components/FilterContent"
import { FilterList } from "@/patterns/OneFilterPicker/components/FilterList"
import { getActiveFilterKeys } from "@/patterns/OneFilterPicker/internal/getActiveFilterKeys"
import { getActiveFiltersValue } from "@/patterns/OneFilterPicker/internal/getActiveFiltersValue"
import { Popover, PopoverContent, PopoverTrigger } from "@/ui/popover"

import type {
  DashboardItemFiltersConfig,
  DashboardItemFiltersDefinition,
  DashboardItemFiltersState,
} from "../../types"

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
export function DashboardItemFilters<
  ItemFilters extends DashboardItemFiltersDefinition,
>({
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
  const contentRef = useRef<HTMLDivElement>(null)
  const returnFocusLabelRef = useRef<string | undefined>(undefined)

  const [isOpen, setIsOpen] = useState(false)
  const [selectedFilterKey, setSelectedFilterKey] = useState<
    keyof ItemFilters | null
  >(null)
  const [draftValue, setDraftValue] =
    useState<DashboardItemFiltersState<ItemFilters>>(value)

  const selectedDefinition = selectedFilterKey
    ? filters[selectedFilterKey]
    : undefined
  const activeSelectedFilterKey = selectedDefinition ? selectedFilterKey : null
  const shownFilters = useMemo(
    () =>
      Object.fromEntries(
        Object.entries(filters).filter(([, filter]) => !filter.hideSelector)
      ) as ItemFilters,
    [filters]
  )

  useEffect(() => {
    if (selectedFilterKey && !selectedDefinition) {
      setSelectedFilterKey(null)
      returnFocusLabelRef.current = undefined
    }
  }, [selectedDefinition, selectedFilterKey])

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

  const appliedFilterLabel = useMemo(() => {
    const keys = getActiveFilterKeys(filters, value, i18n)
    return keys.length > 0
      ? i18n.t("filters.activeFilters", {
          filters: keys.map((key) => filters[key].label).join(", "),
        })
      : i18n.filters.label
  }, [filters, value, i18n])

  // The selected list row unmounts when the compact picker drills into its
  // editor. Move focus into the new pane, then restore it to that row when the
  // user returns so keyboard navigation never drops to <body>.
  useLayoutEffect(() => {
    if (!isOpen) return
    const content = contentRef.current
    if (!content) return
    if (activeSelectedFilterKey) {
      content.querySelector<HTMLElement>("button")?.focus()
      return
    }
    const label = returnFocusLabelRef.current
    if (!label) return
    const row = Array.from(
      content.querySelectorAll<HTMLElement>("button")
    ).find((button) => button.textContent?.trim().includes(label))
    row?.focus()
    returnFocusLabelRef.current = undefined
  }, [activeSelectedFilterKey, isOpen])

  const selectFilter = (key: keyof ItemFilters) => {
    returnFocusLabelRef.current = filters[key].label
    setSelectedFilterKey(key)
  }

  if (Object.keys(shownFilters).length === 0) return null

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
    <Popover open={isOpen} onOpenChange={handleOpenChange} modal={false}>
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
          aria-label={appliedFilterLabel}
          aria-controls={isOpen ? id : undefined}
          onClick={(e: React.MouseEvent) => e.stopPropagation()}
        />
      </PopoverTrigger>
      <PopoverContent
        ref={contentRef}
        aria-label={i18n.filters.label}
        className="w-[380px] rounded-xl border border-solid border-f1-border-secondary p-0 shadow-md"
        align="end"
        side="bottom"
        id={id}
        container={portalContainer}
      >
        <div className="flex h-[420px] flex-col">
          <div className="flex shrink-0 items-center gap-2 py-1.5 pl-1.5 pr-3">
            {activeSelectedFilterKey ? (
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
                  {selectedDefinition?.label}
                </span>
              </>
            ) : (
              <span className="px-2 text-base font-medium text-f1-foreground">
                {i18n.filters.label}
              </span>
            )}
          </div>
          <div className="flex min-h-0 flex-1 flex-col">
            {activeSelectedFilterKey ? (
              <>
                <div className="min-h-0 flex-1 overflow-y-auto border-0 border-t border-solid border-f1-border-secondary">
                  <FilterContent
                    selectedFilterKey={activeSelectedFilterKey}
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
                definition={shownFilters}
                tempFilters={draftValue}
                selectedFilterKey={activeSelectedFilterKey}
                onFilterSelect={selectFilter}
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
