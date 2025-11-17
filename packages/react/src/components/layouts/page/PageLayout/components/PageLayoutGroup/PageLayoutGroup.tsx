import {
  Children,
  forwardRef,
  Fragment,
  ReactNode,
  useEffect,
  useState,
} from "react"
import { PageLayoutGroupComponent, PageLayoutGroupProps } from "./types"

export const PageLayoutGroup = forwardRef<HTMLDivElement, PageLayoutGroupProps>(
  ({ children, onSort, ...props }, ref) => {
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

PageLayoutGroup.displayName = "PageLayoutGroup"
// Mark as a valid PageLayoutGroup component
;(PageLayoutGroup as unknown as PageLayoutGroupComponent).__isPageLayoutGroup =
  true
