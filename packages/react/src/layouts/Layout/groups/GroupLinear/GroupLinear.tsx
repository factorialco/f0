import {
  Children,
  forwardRef,
  Fragment,
  ReactNode,
  useEffect,
  useState,
} from "react"

import { validLayoutChildrenGuard } from "../../internal/utils"
import { PageLayoutGroupComponent } from "../../types"
import { GroupLinearProps } from "./types"

export const GroupLinear = forwardRef<HTMLDivElement, GroupLinearProps>(
  ({ children, onSort, ...props }, ref) => {
    validLayoutChildrenGuard("GroupLinear", children, ["block"] as const)

    const [items, setItems] = useState<ReactNode[]>(Children.toArray(children))

    useEffect(() => {
      setItems(Children.toArray(children))
    }, [children])

    useEffect(() => {
      onSort?.(items)
    }, [items, onSort])

    return (
      <div ref={ref} {...props}>
        {items.map((item, index) => (
          <Fragment key={index}>{item}</Fragment>
        ))}
      </div>
    )
  }
)

GroupLinear.displayName = "GroupLinear"
// Mark as a valid PageLayoutGroup component
;(GroupLinear as unknown as PageLayoutGroupComponent).__isPageLayoutGroup = true
