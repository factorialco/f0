import { F0Avatar } from "@/components/avatars/F0Avatar"
import { F0Icon } from "@/components/F0Icon"
import { OneEllipsis } from "@/lib/OneEllipsis"
import { F0TagDot } from "@/components/tags/F0TagDot"
import { F0TagPerson } from "@/components/tags/F0TagPerson"
import { F0TagRaw } from "@/components/tags/F0TagRaw"
import { F0TagStatus } from "@/components/tags/F0TagStatus"
import type { StatusVariant } from "@/components/tags/F0TagStatus/types"
import { SelectItem as SelectItemPrimitive } from "@/ui/Select"

import { F0SelectItemObject } from "../types"

export const SelectItem = <T extends string, R>({
  item,
}: {
  item: F0SelectItemObject<T, R>
}) => {
  const isStatusOnly =
    item.tag &&
    typeof item.tag !== "string" &&
    item.tag.type === "status" &&
    !item.avatar &&
    !item.icon &&
    !item.description

  if (isStatusOnly) {
    const tag = item.tag as {
      type: "status"
      text: string
      variant: StatusVariant
    }
    return (
      <SelectItemPrimitive value={String(item.value)} disabled={item.disabled}>
        <div className="flex w-full items-center">
          <F0TagStatus text={tag.text} variant={tag.variant} />
        </div>
      </SelectItemPrimitive>
    )
  }

  return (
    <SelectItemPrimitive value={String(item.value)} disabled={item.disabled}>
      <div
        className={`flex w-full gap-1.5 ${item.description ? "items-start" : "items-center"}`}
      >
        {item.avatar && (
          <div className="flex shrink-0 items-center">
            <F0Avatar avatar={item.avatar} size="xs" />
          </div>
        )}
        {item.icon && (
          <div className="flex shrink-0 items-center text-f1-icon">
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
          <div className={item.description ? "self-start" : "self-center"}>
            {typeof item.tag === "string" ? (
              <F0TagRaw text={item.tag} />
            ) : item.tag.type === "dot" ? (
              <F0TagDot {...item.tag} />
            ) : item.tag.type === "icon" ? (
              <F0TagRaw text={item.tag.text} icon={item.tag.icon} />
            ) : item.tag.type === "status" ? (
              <F0TagStatus text={item.tag.text} variant={item.tag.variant} />
            ) : (
              <F0TagPerson name={item.tag.name} src={item.tag.src} />
            )}
          </div>
        )}
      </div>
    </SelectItemPrimitive>
  )
}
