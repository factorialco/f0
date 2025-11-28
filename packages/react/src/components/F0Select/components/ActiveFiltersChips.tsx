import { Chip } from "@/experimental/OneChip"
import { FiltersDefinition, FiltersState } from "@/hooks/datasource"
import { ScrollArea } from "@/ui/scrollarea"
import { AnimatePresence, motion } from "motion/react"

type ActiveFiltersChipsProps<Filters extends FiltersDefinition> = {
  filters: Filters
  currentFilters: FiltersState<Filters>
  onFiltersChange: (filters: FiltersState<Filters>) => void
}

/**
 * Component to display active filters as chips with horizontal scroll
 */
export const ActiveFiltersChips = <Filters extends FiltersDefinition>({
  filters,
  currentFilters,
  onFiltersChange,
}: ActiveFiltersChipsProps<Filters>) => {
  // Get active filters with their labels
  const activeFilters = Object.entries(currentFilters)
    .filter(([, value]) => {
      if (value === undefined || value === null) return false
      if (Array.isArray(value)) return value.length > 0
      return value !== ""
    })
    .map(([key, value]) => {
      const filterDef = filters[key as keyof Filters]
      const filterLabel = filterDef?.label ?? key

      // Get the display values
      let displayValues: string[] = []
      if (Array.isArray(value)) {
        // Try to get labels from filter options if available
        // For "in" type filters, options are in filterDef.options.options
        const filterOptions =
          filterDef && "options" in filterDef
            ? (filterDef.options as {
                options?:
                  | { value: string; label: string }[]
                  | (() =>
                      | { value: string; label: string }[]
                      | Promise<{ value: string; label: string }[]>)
              })
            : undefined

        // Get options array - handle both static arrays and functions
        const optionsValue = filterOptions?.options
        const optionsList = Array.isArray(optionsValue) ? optionsValue : []

        displayValues = (value as string[]).map((v) => {
          const opt = optionsList.find((o) => o.value === v)
          return opt?.label ?? String(v)
        })
      }

      // Format display: first value + remaining count
      const firstValue = displayValues[0] ?? ""
      const remainingCount = displayValues.length - 1
      const displayText =
        remainingCount > 0 ? `${firstValue}  +${remainingCount}` : firstValue

      return {
        key,
        label: filterLabel,
        displayText,
      }
    })

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
