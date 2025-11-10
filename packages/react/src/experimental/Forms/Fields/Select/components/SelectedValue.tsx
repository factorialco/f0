import { F0Icon } from "@/components/F0Icon"
import { OneEllipsis } from "@/components/OneEllipsis"
import { F0TagList } from "@/components/tags/F0TagList"
import { forwardRef } from "react"
import type { SelectItemObject } from "../types"

type SelectValueProps = {
  selection: SelectItemObject<string>[]
  multiple?: boolean
}

/**
 * Component for displaying the selected value or values in the ibputField
 */
export const SelectValue = forwardRef<HTMLDivElement, SelectValueProps>(
  function SelectValue({ selection, multiple }, ref) {
    if (multiple) {
      return (
        <div className="h-full w-full">
          <F0TagList
            layout="fill"
            type="raw"
            tags={selection.map((i) => ({
              text: i.label,
              type: "raw",
              icon: i.icon,
            }))}
          />
        </div>
      )
    }

    const selectedItem = selection[0]
    return (
      selectedItem && (
        <div
          className="flex min-w-0 flex-1 items-center justify-start gap-1.5"
          ref={ref}
        >
          {selectedItem.icon && (
            <div className="h-5 shrink-0 text-f1-icon">
              <F0Icon icon={selectedItem.icon} />
            </div>
          )}
          <OneEllipsis tag="span">{selectedItem.label}</OneEllipsis>
        </div>
      )
    )
  }
)
