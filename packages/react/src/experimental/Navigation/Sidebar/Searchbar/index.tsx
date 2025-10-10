import { ButtonHTMLAttributes } from "react"
import { F0Icon } from "../../../../components/F0Icon"
import { Search } from "../../../../icons/app"
import { cn, focusRing } from "../../../../lib/utils"
import { Shortcut } from "../../../Information/Shortcut"

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
    <div className="px-3">
      <button
        onClick={onClick}
        className={cn(
          "mb-[calc(0.75rem-1px)] flex w-full cursor-pointer items-center justify-between rounded bg-f1-background-inverse-secondary p-1.5 text-f1-foreground-secondary ring-1 ring-inset ring-f1-border-secondary transition-all hover:ring-f1-border-hover",
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
