import { Reorder, useDragControls } from "motion/react"

import { ButtonInternal } from "@/components/F0Button/internal"
import { F0Icon } from "@/components/F0Icon"
import { OneEllipsis } from "@/lib/OneEllipsis"
import { useI18n } from "@/lib/providers/i18n"
import { Switch } from "@/experimental/Forms/Fields/Switch"
import { Delete, Handle, LockLocked } from "@/icons/app"
import { cn } from "@/lib/utils"

import { SortAndHideListItem } from "./types"

type ItemProps = {
  item: SortAndHideListItem
  onChangeVisibility: (item: SortAndHideListItem) => void
  onRemove?: (item: SortAndHideListItem) => void
  allowSorting: boolean
  allowHiding: boolean
}

const Item = ({
  item,
  onChangeVisibility,
  onRemove,
  allowSorting,
  allowHiding,
}: ItemProps) => {
  const i18n = useI18n()
  const classes = "group flex items-center gap-2 text-medium text-sm pr-4"
  const controls = useDragControls()
  const showRemove = !!item.removable && !!onRemove

  const content = (
    <div className={classes}>
      {allowSorting && (
        <div
          className={cn(
            "flex shrink-0 items-center justify-center text-f1-icon",
            item.sortable && "cursor-grab"
          )}
          style={{ width: "20px" }}
          onPointerDown={(e) => {
            if (item.sortable) {
              controls.start(e)
            }
          }}
        >
          {item.sortable ? (
            <F0Icon icon={Handle} size="xs" />
          ) : (
            <F0Icon icon={LockLocked} size="sm" />
          )}
        </div>
      )}
      <span
        className={cn(
          "flex-1 min-w-0",
          item.sortable ? "text-f1-foreground" : "text-f1-foreground-secondary"
        )}
      >
        <OneEllipsis>{item.label}</OneEllipsis>
      </span>
      {showRemove && (
        <div className="shrink-0 opacity-0 transition-opacity focus-within:opacity-100 group-hover:opacity-100">
          <ButtonInternal
            variant="ghost"
            size="sm"
            compact
            hideLabel
            icon={Delete}
            label={i18n.collections.table.settings.removeColumn}
            onClick={() => onRemove?.(item)}
          />
        </div>
      )}
      {allowHiding && (
        <Switch
          checked={item.visible}
          onCheckedChange={(checked) => {
            onChangeVisibility({
              ...item,
              visible: checked,
            })
          }}
          title={item.label}
          hideLabel
          disabled={!item.canHide}
        />
      )}
    </div>
  )

  return item.sortable ? (
    <Reorder.Item
      value={item}
      drag="y"
      dragElastic={0.1}
      whileDrag={{
        scale: 1.05,
      }}
      dragListener={false}
      dragControls={controls}
    >
      {content}
    </Reorder.Item>
  ) : (
    <li>{content}</li>
  )
}

export type SortAndHideListProps = {
  items: SortAndHideListItem[]
  onChange?: (items: SortAndHideListItem[]) => void
  /**
   * Called when the user removes an entry via its hover trash affordance. Only
   * items flagged `removable` show the affordance. Removing is distinct from
   * hiding: the caller is expected to drop the entry from its source.
   */
  onRemove?: (item: SortAndHideListItem) => void
  allowSorting: boolean
  allowHiding: boolean
}

export const SortAndHideList = ({
  items,
  onChange,
  onRemove,
  allowSorting,
  allowHiding,
}: SortAndHideListProps) => {
  const onChangeVisibility = (item: SortAndHideListItem) => {
    onChange?.(items.map((i) => (i.id === item.id ? item : i)))
  }

  const handleOnChange = (items: SortAndHideListItem[]) => {
    onChange?.(items)
  }

  return (
    <Reorder.Group
      className="flex flex-1 select-none list-none flex-col gap-2"
      values={items}
      onReorder={handleOnChange}
      axis="y"
      layoutScroll
    >
      {items.map((item) => (
        <Item
          item={item}
          key={item.id}
          onChangeVisibility={onChangeVisibility}
          onRemove={onRemove}
          allowSorting={allowSorting}
          allowHiding={allowHiding}
        />
      ))}
    </Reorder.Group>
  )
}
