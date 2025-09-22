import { CrossedCircle } from "@/icons/app"
import { Search } from "lucide-react"
import { F0Icon } from "../../../../../components/F0Icon"
import { focusNextFocusable, focusPreviousFocusable } from "../../ListItem"

export const Searcher = ({
  search,
  onSearch,
  searchPlaceholder,
  disabled = false,
  goToFirst,
  goToLast,
}: {
  search: string
  onSearch: (search: string) => void
  searchPlaceholder?: string
  disabled?: boolean
  goToFirst?: () => void
  goToLast?: () => void
}) => {
  const handleKeyDown = (ev: React.KeyboardEvent<HTMLInputElement>) => {
    if (ev.key === "ArrowDown") {
      ev.preventDefault()
      ev.stopPropagation()
      focusNextFocusable(ev.currentTarget, goToFirst)
    } else if (ev.key === "ArrowUp") {
      ev.preventDefault()
      ev.stopPropagation()
      focusPreviousFocusable(ev.currentTarget, goToLast)
    } else if (ev.key === "Enter") {
      ev.preventDefault()
      ev.stopPropagation()
    }
  }

  return (
    <div className="flex justify-between gap-1 rounded-[10px] border-[1px] border-solid border-f1-border px-2 py-[3px] transition-all focus-within:border-f1-border-hover hover:border-f1-border-hover">
      <F0Icon icon={Search} size="md" />
      <input
        disabled={disabled}
        onKeyDown={handleKeyDown}
        type="text"
        className="w-full border-none bg-transparent focus:outline-none"
        placeholder={searchPlaceholder}
        value={search}
        onChange={(e) => onSearch(e.target.value)}
      />
      {search && (
        <F0Icon
          icon={CrossedCircle}
          size="md"
          onClick={() => onSearch("")}
          className="cursor-pointer text-f1-icon-secondary"
        />
      )}
    </div>
  )
}
