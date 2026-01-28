import { F0Button } from "@/components/F0Button"
import { Plus } from "@/icons/app"
import { cn } from "@/lib/utils"

import { focusNextFocusable, focusPreviousFocusable } from "../ListItem"

export const CreateItem = ({
  label,
  onCreate,
  goToFirst,
  goToLast,
}: {
  label: string
  onCreate: () => void
  goToFirst?: () => void
  goToLast?: () => void
}) => {
  const handleKeyDown = (ev: React.KeyboardEvent<HTMLDivElement>) => {
    if (ev.key === "ArrowDown" || ev.key === "Tab") {
      focusNextFocusable(ev.currentTarget, goToFirst)
    } else if (ev.key === "ArrowUp") {
      focusPreviousFocusable(ev.currentTarget, goToLast)
    }
  }

  return (
    <div className="w-full pl-1 pr-1" onKeyDown={handleKeyDown}>
      <label
        aria-label={label}
        className={cn(
          "flex flex-row flex-wrap items-center gap-1.5 rounded-[10px] border px-1.5 py-1.5 hover:cursor-pointer",
          "focus-within:outline focus-within:outline-1 focus-within:-outline-offset-1 focus-within:outline-f1-border-selected-bold hover:bg-f1-background-hover",
          "select-none"
        )}
      >
        <F0Button
          hideLabel
          label={label}
          onClick={() => onCreate()}
          icon={Plus}
          size="sm"
          variant="outline"
        />

        <div className="flex flex-1 flex-col">
          <div className="flex flex-1 flex-row items-center gap-2 break-all">
            <span className={cn("line-clamp-1")}>{label}</span>
          </div>
        </div>
      </label>
    </div>
  )
}
