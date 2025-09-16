import { F0Avatar } from "@/components/avatars/F0Avatar"
import { F0Icon } from "@/components/F0Icon"
import { cn } from "@/lib/utils"
import { DropdownItemObject } from "./internal"

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
    <div className="flex flex-col items-start">
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
  </>
)
