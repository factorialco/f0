import { useMemo } from "react"

import { VirtualList } from "../../../../Navigation/VirtualList"
import { ListTag } from "../../ListTag"
import {
  EntityId,
  EntitySelectEntity,
  EntitySelectSubEntity,
  FlattenedItem,
} from "../../types"

export const SecondaryContent = ({
  groupView,
  onSubItemRemove,
  onRemove,
  selectedEntities,
  selectedLabel,
  disabled = false,
  hiddenAvatar = false,
}: {
  groupView: boolean
  onRemove: (entity: EntitySelectEntity) => void
  onSubItemRemove: (
    parentEntity: EntitySelectEntity,
    entity: EntitySelectSubEntity
  ) => void
  selectedEntities: EntitySelectEntity[]
  selectedLabel?: string
  disabled?: boolean
  hiddenAvatar?: boolean
}) => {
  const flattenedList = useMemo<FlattenedItem[]>(() => {
    const rawFlattened = !groupView
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

    const seenIds = new Set<EntityId>()
    return rawFlattened.filter((item) => {
      const key = item.subItem.subId
      if (seenIds.has(key)) {
        return false
      }
      seenIds.add(key)
      return true
    })
  }, [groupView, selectedEntities])

  const totalSelectedSubItems = flattenedList.length

  return (
    <div className="w-full flex-col rounded-r-xl">
      <div className="flex h-[48px] rounded-tr-xl border-0 border-b-[1px] border-solid border-f1-border-secondary bg-f1-background/30 p-3 backdrop-blur-2xl">
        {selectedLabel && (
          <span className="my-auto text-f1-foreground-secondary">
            {totalSelectedSubItems} {selectedLabel}
          </span>
        )}
      </div>
      <div className="flex flex-col gap-3 rounded-br-xl bg-f1-background pb-0 pl-2">
        <VirtualList
          height={425}
          itemCount={totalSelectedSubItems}
          itemSize={30}
          className="overflow-x-hidden"
          renderer={(vi) => {
            const current = flattenedList[vi.index]
            if (!current) {
              return <></>
            }
            return (
              <ListTag
                entity={current.subItem}
                disabled={disabled}
                hiddenAvatar={hiddenAvatar}
                onRemove={() =>
                  current.parent
                    ? onSubItemRemove?.(current.parent, current.subItem)
                    : onRemove({
                        id: current.subItem.subId,
                        name: current.subItem.subName,
                        avatar: current.subItem.subAvatar,
                      })
                }
              />
            )
          }}
        />
      </div>
    </div>
  )
}
