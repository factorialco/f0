import {
  Children,
  forwardRef,
  Fragment,
  ReactNode,
  useEffect,
  useState,
} from "react"
import { validLayoutChildrenGuard } from "../../internal/utils"
import { createPageLayoutBlockGroup } from "../../utils"
import { GroupLinearProps } from "./types"

const GroupLinearComponent = forwardRef<HTMLDivElement, GroupLinearProps>(
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

GroupLinearComponent.displayName = "GroupLinear"

// Create the component using the helper function
export const GroupLinear = createPageLayoutBlockGroup(
  "GroupLinear",
  GroupLinearComponent
)
