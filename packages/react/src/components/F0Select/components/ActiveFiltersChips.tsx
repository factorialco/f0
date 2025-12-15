import { Chip } from "@/experimental/OneChip"
import { FiltersDefinition, FiltersState } from "@/hooks/datasource"
import { useI18n } from "@/lib/providers/i18n"
import { ScrollArea } from "@/ui/scrollarea"
import { AnimatePresence, motion } from "motion/react"
import { useEffect, useState } from "react"
import {
  FilterDefinition,
  FilterTypeKey,
  filterTypes,
} from "../../OneFilterPicker/filterTypes/filters"

type ActiveFiltersChipsProps<Filters extends FiltersDefinition> = {
  filters: Filters
  currentFilters: FiltersState<Filters>
  onFiltersChange: (filters: FiltersState<Filters>) => void
}

type ActiveFilter = {
  key: string
  label: string
  displayText: string
}

/**
 * Component to display active filters as chips with horizontal scroll
 */
export const ActiveFiltersChips = <Filters extends FiltersDefinition>({
  filters,
  currentFilters,
  onFiltersChange,
}: ActiveFiltersChipsProps<Filters>) => {
  const [activeFilters, setActiveFilters] = useState<ActiveFilter[]>([])
  const i18n = useI18n()

  // Resolve filter labels using chipLabel from filter type definitions
  useEffect(() => {
    const resolveLabels = async () => {
      const entries = Object.entries(currentFilters).filter(([, value]) => {
        if (value === undefined || value === null) return false
        if (Array.isArray(value)) return value.length > 0
        return value !== ""
      })

      const resolved = await Promise.all(
        entries.map(async ([key, value]) => {
          const filterDef = filters[key as keyof Filters] as FilterDefinition | undefined
          const filterLabel = filterDef?.label ?? key

          if (!filterDef || !filterDef.type) {
            return {
              key,
              label: filterLabel,
              displayText: String(value),
            }
          }

          // Get the filter type definition
          const filterType = filterTypes[filterDef.type as FilterTypeKey]
          if (!filterType?.chipLabel) {
            return {
              key,
              label: filterLabel,
              displayText: Array.isArray(value) ? value.join(", ") : String(value),
            }
          }

          // Use the chipLabel function from the filter type
          try {
            /* eslint-disable @typescript-eslint/no-explicit-any -- Filter types have different value/schema types */
            const chipLabelResult = await filterType.chipLabel(value as any, {
              schema: filterDef as any,
              i18n,
            })
            /* eslint-enable @typescript-eslint/no-explicit-any */
            const displayText =
              typeof chipLabelResult === "string" ? chipLabelResult : chipLabelResult.label

            return {
              key,
              label: filterLabel,
              displayText,
            }
          } catch {
            // Fallback if chipLabel fails
            return {
              key,
              label: filterLabel,
              displayText: Array.isArray(value) ? value.join(", ") : String(value),
            }
          }
        })
      )

      setActiveFilters(resolved)
    }

    resolveLabels()
  }, [currentFilters, filters, i18n])

  if (activeFilters.length === 0) return null

  const handleRemoveFilter = (key: string) => {
    const newFilters = { ...currentFilters }
    delete newFilters[key as keyof Filters]
    onFiltersChange(newFilters)
  }

  return (
    <ScrollArea>
      <div className="flex gap-1 border-0 px-2 pb-2 pt-0">
        <AnimatePresence mode="popLayout">
          {activeFilters.map((filter) => (
            <motion.div
              key={filter.key}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ type: "spring", duration: 0.2 }}
              className="shrink-0"
            >
              <Chip
                variant="selected"
                label={`${filter.label}: ${filter.displayText}`}
                onClose={() => handleRemoveFilter(filter.key)}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ScrollArea>
  )
}

ActiveFiltersChips.displayName = "ActiveFiltersChips"
