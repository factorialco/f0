import { useCallback, useEffect, useState } from "react"

import { CommandGroup, CommandItem } from "../types"

function flattenItems(groups: CommandGroup[]): CommandItem[] {
  return groups.flatMap((g) => g.items)
}

interface UseCommandKeyboardNavOptions {
  groups: CommandGroup[]
  open: boolean
  onSelect: (item: CommandItem) => void
  onClose: () => void
}

export function useCommandKeyboardNav({
  groups,
  open,
  onSelect,
  onClose,
}: UseCommandKeyboardNavOptions) {
  const [selectedId, setSelectedId] = useState<string | null>(null)

  const flat = flattenItems(groups)

  // Reset selection when groups change (e.g. search filter applied)
  useEffect(() => {
    setSelectedId(flat.length > 0 ? flat[0].id : null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [groups.map((g) => g.items.map((i) => i.id).join()).join()])

  // Reset when dialog opens
  useEffect(() => {
    if (open) {
      const all = flattenItems(groups)
      setSelectedId(all.length > 0 ? all[0].id : null)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open])

  const move = useCallback(
    (direction: 1 | -1) => {
      const all = flattenItems(groups)
      if (all.length === 0) return
      const idx = all.findIndex((i) => i.id === selectedId)
      const next = (idx + direction + all.length) % all.length
      setSelectedId(all[next].id)
    },
    [groups, selectedId]
  )

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      switch (e.key) {
        case "ArrowDown":
        case "Tab":
          if (e.key === "Tab" && e.shiftKey) {
            e.preventDefault()
            move(-1)
          } else {
            e.preventDefault()
            move(1)
          }
          break
        case "ArrowUp":
          e.preventDefault()
          move(-1)
          break
        case "Enter": {
          e.preventDefault()
          const all = flattenItems(groups)
          const item = all.find((i) => i.id === selectedId)
          if (item) onSelect(item)
          break
        }
        case "Escape":
          e.preventDefault()
          onClose()
          break
      }
    },
    [groups, selectedId, move, onSelect, onClose]
  )

  return { selectedId, setSelectedId, handleKeyDown }
}
