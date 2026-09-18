import { ButtonHTMLAttributes } from "react"

import { Shortcut } from "@/ui/Shortcut"

import { F0Icon } from "../../../../components/F0Icon"
import { Search } from "../../../../icons/app"
import { cn, focusRing } from "../../../../lib/utils"

interface SearchBarProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  placeholder: string
  shortcut?: string[]
}

export function SearchBar({
  onClick,
  placeholder,
  shortcut = ["cmd", "k"],
  ...props
}: SearchBarProps) {
  return (
    // No gutter and no gap of its own: in the sidebar the panel gives it both,
    // and anywhere else — a strip across the top of the content, say — they
    // were an 11px bottom margin nobody asked for, holding the box above the
    // centre of whatever it sat in.
    <div>
      <button
        onClick={onClick}
        className={cn(
          "flex w-full cursor-pointer items-center justify-between rounded-3xl bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary p-1.5 pr-2.5 text-f1-foreground-secondary ring-1 ring-inset ring-f1-border-secondary transition-all hover:ring-f1-border-hover",
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
    </div>
  )
}
