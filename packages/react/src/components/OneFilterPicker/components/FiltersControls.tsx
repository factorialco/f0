import { F0Button } from "@/components/F0Button"
import { ButtonInternal } from "@/components/F0Button/internal"
import { Filter } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { Popover, PopoverContent, PopoverTrigger } from "@/ui/popover"
import { useEffect, useId, useMemo, useState } from "react"
import { getFilterType } from "../filterTypes"
import { FilterTypeContext, FilterTypeSchema } from "../filterTypes/types"
import type { FiltersDefinition, FiltersState } from "../types"
import { FilterContent } from "./FilterContent"
import { FilterList } from "./FilterList"

interface FiltersControlsProps<Filters extends FiltersDefinition> {
  filters: Filters
  value: FiltersState<Filters>
  onChange: (value: FiltersState<Filters>) => void
  isOpen?: boolean
  onOpenChange?: (open: boolean) => void
  hideLabel?: boolean
}

const DEFAULT_FORM_HEIGHT = 388

export function FiltersControls<Filters extends FiltersDefinition>({
  filters,
  value,
  onChange,
  isOpen: controlledIsOpen,
  onOpenChange: controlledOnOpenChange,
  hideLabel,
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

  useEffect(() => {
    const getFirstFilterNotEmpty = () => {
      return Object.entries(localFiltersValue).find(([key, value]) => {
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

    if (isOpen) {
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
          <div
            className="flex flex-col transition-all"
            style={{
              height: formHeight || DEFAULT_FORM_HEIGHT,
            }}
          >
            <div className="flex min-h-0 flex-1">
              <FilterList
                definition={filters}
                tempFilters={localFiltersValue}
                selectedFilterKey={selectedFilterKey}
                onFilterSelect={(key: keyof Filters) =>
                  setSelectedFilterKey(key)
                }
              />
              {selectedFilterKey && (
                <FilterContent
                  selectedFilterKey={selectedFilterKey}
                  definition={filters}
                  tempFilters={localFiltersValue}
                  onFilterChange={updateFilterValue}
                />
              )}
            </div>
            <div className="flex items-center justify-end gap-2 border border-solid border-transparent border-t-f1-border-secondary p-2">
              <F0Button
                onClick={handleApplyFilters}
                label={i18n.filters.applyFilters}
              />
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}
