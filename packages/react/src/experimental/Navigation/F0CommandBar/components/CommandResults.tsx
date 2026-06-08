import { CommandGroup, CommandItem } from "../types"
import { CommandResultItem } from "./CommandResultItem"
import { CommandSectionTitle } from "./CommandSectionTitle"

interface CommandResultsProps {
  groups: CommandGroup[]
  selectedId: string | null
  onSelect: (item: CommandItem) => void
  onHover: (id: string) => void
  emptyState: React.ReactNode
  loading: boolean
}

export function CommandResults({
  groups,
  selectedId,
  onSelect,
  onHover,
  emptyState,
  loading,
}: CommandResultsProps) {
  const hasResults = groups.some((g) => g.items.length > 0)

  if (loading) {
    return (
      <div
        className="flex items-center justify-center p-6 text-sm text-f1-foreground-secondary"
        aria-live="polite"
        aria-busy="true"
      >
        <span className="sr-only">Loading</span>
        <div className="h-4 w-4 animate-spin rounded-full border-2 border-f1-border-secondary border-t-f1-foreground-secondary" />
      </div>
    )
  }

  if (!hasResults) {
    return (
      <div
        className="flex items-center justify-center p-6 text-sm text-f1-foreground-secondary"
        aria-live="polite"
      >
        {emptyState}
      </div>
    )
  }

  return (
    <div className="max-h-80 overflow-y-auto px-2 pb-2">
      {groups
        .filter((g) => g.items.length > 0)
        .map((group) => (
          <div key={group.id}>
            {group.title && <CommandSectionTitle title={group.title} />}
            {group.items.map((item) => (
              <CommandResultItem
                key={item.id}
                item={item}
                isSelected={selectedId === item.id}
                onSelect={onSelect}
                onHover={onHover}
              />
            ))}
          </div>
        ))}
    </div>
  )
}
