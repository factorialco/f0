import { BaseAvatar } from "@/components/avatars/internal/BaseAvatar"
import { F0Icon } from "@/components/F0Icon"
import { BaseTag } from "@/components/tags/internal/BaseTag"
import { EntitySelectSubEntity } from "@/experimental/Forms/EntitySelect/types"
import { Cross, PersonNegative } from "@/icons/app"
import { cn } from "@/lib/utils"

export const ListTag = ({
  entity,
  onRemove,
  disabled = false,
  deactivated = false,
  hiddenAvatar = false,
}: {
  entity: EntitySelectSubEntity
  onRemove: (entity: EntitySelectSubEntity) => void
  disabled?: boolean
  deactivated?: boolean
  hiddenAvatar?: boolean
}) => {
  return (
    <div className="pr-2 pt-1.5">
      <BaseTag
        className={cn(
          "max-w-54 w-fit gap-1 text-ellipsis break-all border-[1px] border-solid border-f1-border-secondary py-[1px] pl-[1px]",
          "rounded-full",
          hiddenAvatar ? "pl-2" : "pl-0"
        )}
        left={
          !hiddenAvatar && (
            <BaseAvatar
              src={entity.subAvatar}
              name={entity.subName}
              size="xs"
              type="rounded"
              icon={
                deactivated
                  ? { icon: PersonNegative, color: "secondary" }
                  : undefined
              }
            />
          )
        }
        right={
          !disabled && (
            <F0Icon
              icon={Cross}
              size="sm"
              className="cursor-pointer text-f1-icon-secondary"
              onClick={() => onRemove?.(entity)}
            />
          )
        }
        text={entity.subName}
        deactivated={deactivated}
      />
    </div>
  )
}
