import { OneEllipsis } from "@/components/OneEllipsis"

import { F0Avatar } from "@/components/avatars/F0Avatar"
import { F0Icon } from "@/components/F0Icon"
import { F0TagRaw } from "@/components/tags/F0TagRaw"
import { SelectItem as SelectItemPrimitive } from "@/ui/Select"
import { F0SelectItemObject } from "../types"

export const SelectItem = <T extends string, R>({
  item,
}: {
  item: F0SelectItemObject<T, R>
}) => {
  return (
    <SelectItemPrimitive value={item.value} disabled={item.disabled}>
      <div className="flex w-full items-start gap-1.5">
        {item.avatar && <F0Avatar avatar={item.avatar} size="xs" />}
        {item.icon && (
          <div className="shrink-0 text-f1-icon">
            <F0Icon icon={item.icon} />
          </div>
        )}
        <div className="flex min-w-0 flex-1 flex-col">
          <OneEllipsis lines={2} className="font-medium">
            {item.label}
          </OneEllipsis>
          {item.description && (
            <OneEllipsis lines={2} className="text-f1-foreground-secondary">
              {item.description}
            </OneEllipsis>
          )}
        </div>
        {item.tag && (
          <div className="self-center">
            <F0TagRaw text={item.tag} />
          </div>
        )}
      </div>
    </SelectItemPrimitive>
  )
}
