import { F0Avatar } from "@/components/avatars/F0Avatar"
import { F0Icon } from "@/components/F0Icon"
import { Check } from "@/icons/app"
import { cn } from "@/lib/utils"

import { DropdownItemObject } from "./internal"

const DropdownItemSelectionIndicator = ({ selected }: { selected?: boolean }) =>
  selected ? (
    <span
      aria-hidden="true"
      className="ml-auto flex size-4 shrink-0 items-center justify-center self-center text-f1-icon-bold"
    >
      <F0Icon icon={Check} size="sm" />
    </span>
  ) : null

export const DropdownItemContent = ({ item }: { item: DropdownItemObject }) => (
  <>
    {item.avatar && <F0Avatar avatar={item.avatar} size="xs" />}
    {item.icon && (
      <F0Icon
        icon={item.icon}
        size="md"
        className={cn("text-f1-icon", item.critical && "text-f1-icon-critical")}
      />
    )}
    <div
      className={cn(
        "flex flex-col items-start",
        item.selected !== undefined && "min-w-0 flex-1"
      )}
    >
      {item.label}
      {item.description && (
        <div
          className={cn(
            "font-normal text-f1-foreground-secondary",
            item.critical && "text-f1-foreground-critical"
          )}
        >
          {item.description}
        </div>
      )}
    </div>
    <DropdownItemSelectionIndicator selected={item.selected} />
  </>
)
