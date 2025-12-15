import { DropdownInternal } from "@/experimental/Navigation/Dropdown/internal"
import { BreadcrumbItem as ShadBreadcrumbItem } from "@/ui/breadcrumb"
import { forwardRef } from "react"
import { DropdownItemWithoutIcon } from "../types"
import { BreadcrumbSeparator } from "./BreadcrumbSeparator"

interface CollapsedBreadcrumbItemProps {
  items: DropdownItemWithoutIcon[]
  className?: string
}

/**
 * Renders the collapsed breadcrumb items as a dropdown
 */
const CollapsedBreadcrumbItem = forwardRef<HTMLLIElement, CollapsedBreadcrumbItemProps>(
  ({ className, items }, ref) => (
    <ShadBreadcrumbItem ref={ref} className={className}>
      <div className="flex items-center">
        <BreadcrumbSeparator />
        <DropdownInternal items={items}>
          <button className="rounded-sm px-1.5 py-0.5 font-medium text-f1-foreground no-underline transition-colors hover:bg-f1-background-secondary">
            ...
          </button>
        </DropdownInternal>
      </div>
    </ShadBreadcrumbItem>
  )
)

CollapsedBreadcrumbItem.displayName = "CollapsedBreadcrumbItem"

export { CollapsedBreadcrumbItem }
