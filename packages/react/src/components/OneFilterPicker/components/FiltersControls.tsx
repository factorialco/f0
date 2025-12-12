import { F0Button } from "@/components/F0Button"
import { ButtonInternal } from "@/components/F0Button/internal"
import { Filter } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { Popover, PopoverContent, PopoverTrigger } from "@/ui/popover"
import { AnimatePresence, motion } from "motion/react"
import { useEffect, useId, useMemo, useState } from "react"
import { ArrowLeft } from "../../../icons/app"
import { getFilterType } from "../filterTypes"
import { FilterTypeContext, FilterTypeSchema } from "../filterTypes/types"
import { getActiveFilterKeys } from "../internal/getActiveFilterKeys"
import type { FiltersDefinition, FiltersMode, FiltersState } from "../types"
import { FilterContent } from "./FilterContent"
import { FilterList } from "./FilterList"
import { FilterPickerInner } from "./FilterPickerInner"

interface FiltersControlsProps<Filters extends FiltersDefinition> {
  filters: Filters
  value: FiltersState<Filters>
  onChange: (value: FiltersState<Filters>) => void
  isOpen?: boolean
  onOpenChange?: (open: boolean) => void
  hideLabel?: boolean
  mode?: FiltersMode
}

const DEFAULT_FORM_HEIGHT = 388

export function FiltersControls<Filters extends FiltersDefinition>({
  filters,
  value,
  onChange,
  isOpen: controlledIsOpen,
  onOpenChange: controlledOnOpenChange,
  hideLabel,
  mode = "default",
}: FiltersControlsProps<Filters>) {
  const [selectedFilterKey, setSelectedFilterKey] = useState<
    keyof Filters | null
  >(null)
  const [internalIsOpen, setInternalIsOpen] = useState(false)
  const i18n = useI18n()

  const isOpen = controlledIsOpen ?? internalIsOpen
  const onOpenChange = controlledOnOpenChange ?? setInternalIsOpen

  const [localFiltersValue, setLocalFiltersValue] = useState(value)
  useEffect(() => {
    setLocalFiltersValue(value)
  }, [value])

  const updateFilterValue = (key: keyof Filters, newValue: unknown): void => {
    setLocalFiltersValue((prev) => ({
      ...prev,
      [key]: newValue,
    }))
  }

  const handleApplyFilters = () => {
    onChange(localFiltersValue)
    onOpenChange(false)
  }

  const handleGoBack = () => {
    if (selectedFilterKey) {
      setSelectedFilterKey(null)
    } else {
      onChange(localFiltersValue)
      onOpenChange(false)
    }
  }

  const handleApplyFiltersSelection = () => {
    handleGoBack()
  }

  useEffect(() => {
    const getFirstFilterNotEmpty = () => {
      return Object.entries(localFiltersValue || {}).find(([key, value]) => {
        // TODO: Make this type better
        const filterType = getFilterType(filters[key].type) as unknown as {
          isEmpty: (value: unknown, context: FilterTypeContext) => boolean
        }

        return !filterType.isEmpty(value, {
          schema: filters[key] as unknown as FilterTypeSchema,
          i18n,
        })
      })
    }

    if (isOpen && mode === "default") {
      const firstFilterWithValue = getFirstFilterNotEmpty()
      if (firstFilterWithValue) {
        setSelectedFilterKey(firstFilterWithValue[0] as keyof Filters)
      } else {
        const firstFilterKey = Object.keys(filters)[0] as keyof Filters
        setSelectedFilterKey(firstFilterKey)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps -- We only want to run this when the popover is opened
  }, [isOpen])

  // gets the form height
  const formHeight = useMemo(() => {
    const maxHeight = Object.entries(filters).reduce((max, [_, value]) => {
      const filterType = getFilterType(value.type)
      return Math.max(max, filterType?.formHeight || DEFAULT_FORM_HEIGHT)
    }, 0)

    return maxHeight
  }, [filters])
  const id = useId()

  const activeFilters = useMemo(
    () => getActiveFilterKeys(filters, localFiltersValue, i18n),
    [filters, localFiltersValue, i18n]
  )

  const activeFiltersTooltip = useMemo(() => {
    return activeFilters.length > 0
      ? i18n.t("filters.activeFilters", {
          filters: activeFilters
            .map((key) => {
              return filters[key].label
            })
            .join(", "),
        })
      : undefined
    // eslint-disable-next-line react-hooks/exhaustive-deps -- We only want to run this when the active filters change
  }, [activeFilters, filters])

  // Compact mode has its own UI with animations
  if (mode === "compact") {
    const hasFiltersApplied = !!Object.values(localFiltersValue).length

    const navHeaderTitle = selectedFilterKey
      ? i18n.t("filters.filteringBy", {
          label: filters[selectedFilterKey].label,
        })
      : i18n.t("filters.availableFilters")

    const NavHeader = (
      <div className="flex items-center gap-2 pl-1.5 pt-1.5">
        <F0Button
          label="Back"
          icon={ArrowLeft}
          hideLabel
          variant="ghost"
          size="sm"
          onClick={handleGoBack}
        />
        {navHeaderTitle}
      </div>
    )

    const ApplySelectionButton = (
      <>
        {selectedFilterKey && (
          <div className="absolute bottom-0 left-0 right-0 z-30 flex items-center justify-end gap-2 border border-solid border-transparent border-t-f1-border-secondary bg-f1-background p-2">
            <F0Button
              onClick={handleApplyFiltersSelection}
              label={i18n.filters.applySelection}
            />
          </div>
        )}
      </>
    )

    return (
      <div className="flex items-center gap-2">
        <div className="relative">
          <ButtonInternal
            variant="outline"
            label={i18n.filters.label}
            icon={Filter}
            pressed={isOpen}
            onClick={() => onOpenChange(!isOpen)}
            aria-controls={isOpen ? id : undefined}
            hideLabel
            tooltip={activeFiltersTooltip}
          />

          {hasFiltersApplied && (
            <div className="absolute right-0 top-0 aspect-square w-2 rounded-full border border-solid border-f1-background bg-f1-background-selected-bold" />
          )}
        </div>
        <AnimatePresence mode="popLayout" propagate={false}>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1 }}
              className="absolute bottom-0 left-0 right-0 top-0 z-20 bg-f1-background"
            >
              <div className="flex h-full flex-col transition-all">
                {NavHeader}
                <div className="flex flex-1">
                  {selectedFilterKey ? (
                    <motion.div
                      key="filter-content"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="h-full w-full bg-f1-background"
                    >
                      <FilterContent
                        selectedFilterKey={selectedFilterKey}
                        definition={filters}
                        tempFilters={localFiltersValue}
                        onFilterChange={updateFilterValue}
                        isCompactMode
                      />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="filter-list"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="h-full w-full bg-f1-background"
                    >
                      <FilterList
                        definition={filters}
                        tempFilters={localFiltersValue}
                        selectedFilterKey={selectedFilterKey}
                        onFilterSelect={(key: keyof Filters) =>
                          setSelectedFilterKey(key)
                        }
                        onClickApplyFilters={handleApplyFilters}
                        isCompactMode
                      />
                    </motion.div>
                  )}
                </div>
                {ApplySelectionButton}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    )
  }

  // Default mode uses FilterPickerInner for the content
  return (
    <div className="flex items-center gap-2">
      <Popover open={isOpen} onOpenChange={onOpenChange}>
        <PopoverTrigger asChild>
          <ButtonInternal
            variant="outline"
            label={i18n.filters.label}
            icon={Filter}
            pressed={isOpen}
            onClick={() => onOpenChange(!isOpen)}
            hideLabel={hideLabel}
            aria-controls={isOpen ? id : undefined}
          />
        </PopoverTrigger>
        <PopoverContent
          className="w-[600px] rounded-xl border border-solid border-f1-border-secondary p-0 shadow-md"
          align="start"
          side="bottom"
          aria-id={id}
        >
          <FilterPickerInner
            filters={filters}
            tempFilters={localFiltersValue}
            selectedFilterKey={selectedFilterKey}
            onFilterSelect={setSelectedFilterKey}
            onFilterChange={updateFilterValue}
            onApply={handleApplyFilters}
            height={formHeight || DEFAULT_FORM_HEIGHT}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}
