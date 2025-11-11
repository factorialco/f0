import { F0Icon } from "@/components/F0Icon"
import { OneEllipsis } from "@/components/OneEllipsis"
import { F0TagList } from "@/components/tags/F0TagList"
import { forwardRef } from "react"
import type { F0SelectItemObject } from "../types"

type SelectValueProps = {
  selection: F0SelectItemObject<string>[]
  multiple?: boolean
}

/**
 * Component for displaying the selected item or items in the inputField
 */
export const SelectedItems = forwardRef<HTMLDivElement, SelectValueProps>(
  function SelectValue({ selection, multiple }, ref) {
    if (multiple) {
      return (
        <div className="w-full">
          {selection.length > 0 && (
            <F0TagList
              layout="fill"
              type="raw"
              tags={selection.map((i) => ({
                text: i.label,
                type: i.avatar ? "avatar" : "raw",
                icon: i.icon,
                avatar: i.avatar,
              }))}
            />
          )}
        </div>
      )
    }

    const selectedItem = selection[0]
    return (
      selectedItem && (
        <div className="flex min-w-0 flex-1 justify-start gap-1.5" ref={ref}>
          {selectedItem.icon && (
            <div className="h-5 shrink-0 text-f1-icon">
              <F0Icon icon={selectedItem.icon} />
            </div>
          )}
          <OneEllipsis tag="span" className="text-left">
            {selectedItem.label}
          </OneEllipsis>
        </div>
      )
    )
  }
)
