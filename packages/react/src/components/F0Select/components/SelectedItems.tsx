import { F0Icon } from "@/components/F0Icon"
import { OneEllipsis } from "@/components/OneEllipsis"
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
        <div className="flex w-full items-center gap-1 text-left">
          <OneEllipsis className="min-w-0 flex-1">
            {selection
              .slice(0, 2)
              .map((item) => item.label)
              .join(", ")}
          </OneEllipsis>
          {selection.length > 2 && <div>+{selection.length - 2}</div>}
        </div>
      )
    }

    const selectedItem = selection[0]

    if (!selectedItem) return null

    return (
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
  }
)
