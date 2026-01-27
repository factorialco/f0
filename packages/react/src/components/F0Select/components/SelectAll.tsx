import { ButtonInternal } from "@/components/F0Button/internal"
import { F0Checkbox } from "@/components/F0Checkbox"
import { OneEllipsis } from "@/components/OneEllipsis"
import { Await } from "@/components/Utilities/Await"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"
import { Skeleton } from "@/ui/skeleton"

import type { F0SelectItemObject } from "../types"

import { ItemsPreviewHoverCard } from "./ItemsPreviewHoverCard"

export type SelectAllProps = {
  selectedCount: number | Promise<number>
  value: boolean
  indeterminate: boolean
  onChange: (checked: boolean) => void
  hideCheckbox?: boolean
  items?: F0SelectItemObject<string>[]
  onDeselect?: (value: string) => void
  paddingTop?: boolean
}

export const SelectAll = ({
  selectedCount,
  indeterminate,
  value,
  onChange,
  hideCheckbox = false,
  items,
  onDeselect,
  paddingTop = false,
}: SelectAllProps) => {
  const i18n = useI18n()

  const handleChange = (checked: boolean) => {
    if (indeterminate) {
      onChange(false)
    } else {
      onChange(checked)
    }
  }

  const selectedText = (count: number) =>
    `${count} ${
      count === 1
        ? i18n.status.selected.singular.toLowerCase()
        : i18n.status.selected.plural.toLowerCase()
    }`

  return (
    <div
      className={cn(
        "flex items-center gap-2 pr-2 pl-4",
        paddingTop ? "pt-3 pb-1" : "py-1"
      )}
    >
      <div className="flex-1 whitespace-nowrap">
        <Await
          resolve={selectedCount}
          fallback={<Skeleton className="h-4 w-4" />}
        >
          {(resolvedCount: number) => (
            <div className="flex h-[24px] items-center">
              {items && items.length > 0 ? (
                <ItemsPreviewHoverCard items={items} onDeselect={onDeselect}>
                  <OneEllipsis className="cursor-pointer text-f1-foreground-secondary transition-colors hover:text-f1-foreground">
                    {selectedText(resolvedCount)}
                  </OneEllipsis>
                </ItemsPreviewHoverCard>
              ) : (
                <OneEllipsis className="text-f1-foreground-secondary">
                  {selectedText(resolvedCount)}
                </OneEllipsis>
              )}
            </div>
          )}
        </Await>
      </div>
      {!hideCheckbox ? (
        <div className="shrink-0 pr-1">
          <F0Checkbox
            id="select-all"
            title={i18n.actions.selectAll}
            checked={indeterminate || value}
            indeterminate={indeterminate}
            onCheckedChange={handleChange}
            presentational
            hideLabel
          />
        </div>
      ) : (
        items && (
          <ButtonInternal
            variant="ghost"
            size="sm"
            label={i18n.actions.clear}
            onClick={() => handleChange(false)}
            className="z-10"
            disabled={items.length === 0}
          />
        )
      )}
    </div>
  )
}
