import { useEffect, useRef } from "react"

import { F0Icon } from "@/components/F0Icon"
import { Search } from "@/icons/app"
import { cn, focusRing } from "@/lib/utils"

interface CommandSearchFieldProps {
  value: string
  onChange: (value: string) => void
  placeholder: string
  open: boolean
  onKeyDown: (e: React.KeyboardEvent) => void
}

export function CommandSearchField({
  value,
  onChange,
  placeholder,
  open,
  onKeyDown,
}: CommandSearchFieldProps) {
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (open) {
      // Defer to let the dialog animation start before focusing
      const id = setTimeout(() => inputRef.current?.focus(), 0)
      return () => clearTimeout(id)
    }
  }, [open])

  return (
    <div className="flex items-center gap-2 border-b border-f1-border-secondary px-4 py-3">
      <F0Icon icon={Search} size="md" color="secondary" />
      <input
        ref={inputRef}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
        className={cn(
          "flex-1 bg-transparent text-sm text-f1-foreground placeholder:text-f1-foreground-secondary outline-none",
          focusRing()
        )}
        role="searchbox"
        aria-label={placeholder}
        autoComplete="off"
        spellCheck={false}
      />
    </div>
  )
}
