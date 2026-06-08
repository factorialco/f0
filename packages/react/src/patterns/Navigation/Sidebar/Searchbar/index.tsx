import { ButtonHTMLAttributes, useCallback, useEffect, useState } from "react"

import { F0CommandBar } from "@/experimental/Navigation/F0CommandBar/F0CommandBar"
import type { CommandGroup } from "@/experimental/Navigation/F0CommandBar/types"
import { Shortcut } from "@/ui/Shortcut"

import { F0Icon } from "../../../../components/F0Icon"
import { Search } from "../../../../icons/app"
import { cn, focusRing } from "../../../../lib/utils"

interface SearchBarProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  placeholder: string
  shortcut?: string[]
  /** When provided, the SearchBar manages its own command bar with ⌘K support. */
  groups?: CommandGroup[]
}

export function SearchBar({
  onClick,
  placeholder,
  shortcut = ["cmd", "k"],
  groups,
  ...props
}: SearchBarProps) {
  const [open, setOpen] = useState(false)

  const handleOpen = useCallback(() => setOpen(true), [])
  const handleClose = useCallback((isOpen: boolean) => setOpen(isOpen), [])

  useEffect(() => {
    if (!groups) return
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === "k" && !e.altKey) {
        e.preventDefault()
        setOpen((prev) => !prev)
      }
    }
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [groups])

  return (
    <div className="px-3">
      <button
        onClick={groups ? handleOpen : onClick}
        className={cn(
          "mb-[calc(0.75rem-1px)] flex w-full cursor-pointer items-center justify-between rounded bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary p-1.5 text-f1-foreground-secondary ring-1 ring-inset ring-f1-border-secondary transition-all hover:ring-f1-border-hover",
          focusRing()
        )}
        type="button"
        {...props}
      >
        <div className="flex items-center gap-1">
          <F0Icon icon={Search} size="md" />
          <span>{placeholder}</span>
        </div>
        <div className="hidden xs:block">
          <Shortcut keys={shortcut} />
        </div>
      </button>
      {groups && (
        <F0CommandBar
          open={open}
          onOpenChange={handleClose}
          groups={groups}
          placeholder={placeholder}
        />
      )}
    </div>
  )
}
