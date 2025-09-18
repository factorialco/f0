import { F0AvatarPerson } from "@/components/avatars/F0AvatarPerson"
import { F0Icon } from "@/components/F0Icon"
import { ChevronDown } from "@/icons/app"
import { cn } from "@/lib/utils"
import { useMemo } from "react"
import {
  EntitySelectEntity,
  EntitySelectSubEntity,
  FlattenedItem,
} from "../types"

export const Trigger = ({
  placeholder,
  selected,
  selectedEntities,
  disabled = false,
  hiddenAvatar = false,
}: {
  placeholder: string
  selected: string
  disabled?: boolean
  selectedEntities: EntitySelectEntity[]
  hiddenAvatar?: boolean
}) => {
  const groupView = useMemo(
    () =>
      selectedEntities.some(
        (entity) => entity.subItems && entity.subItems.length > 0
      ),
    [selectedEntities]
  )
  const flattenedList = useMemo<FlattenedItem[]>(() => {
    return !groupView
      ? selectedEntities.map((el) => ({
          parent: null,
          subItem: {
            subId: el.id,
            subName: el.name,
            subAvatar: el.avatar,
          } as EntitySelectSubEntity,
        }))
      : selectedEntities.flatMap((entity) =>
          (entity.subItems ?? []).map((subItem) => ({
            parent: entity,
            subItem,
          }))
        )
  }, [groupView, selectedEntities])

  return (
    <div
      className={cn(
        "flex cursor-pointer justify-between rounded border border-solid border-f1-border p-2",
        disabled ? "to-f1-background-secondary" : ""
      )}
    >
      <span className="my-auto pl-1 pr-1 text-f1-foreground-secondary">
        {flattenedList.length === 0 ? (
          placeholder
        ) : flattenedList.length === 1 ? (
          !hiddenAvatar ? (
            <div className="flex flex-row gap-2 p-0">
              <F0AvatarPerson
                firstName={flattenedList[0].subItem.subName}
                lastName={""}
                src={flattenedList[0].subItem.subAvatar}
                size="xs"
              />
              <span>{flattenedList[0].subItem.subName}</span>
            </div>
          ) : (
            flattenedList[0].subItem.subName
          )
        ) : (
          flattenedList.length + " " + selected
        )}
      </span>
      <div className="p-0.5">
        <div className="h-[16px] w-[16px]">
          <F0Icon
            icon={ChevronDown}
            size="sm"
            className="rounded-2xs bg-f1-background-secondary p-0.5"
          />
        </div>
      </div>
    </div>
  )
}
