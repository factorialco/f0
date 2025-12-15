import { Breadcrumb, BreadcrumbList } from "@/ui/breadcrumb"
import { ReactNode, useLayoutEffect, useRef, useState, useTransition } from "react"

import { BreadcrumbItem } from "./internal/BreadcrumbItem"
import { CollapsedBreadcrumbItem } from "./internal/CollapsedBreadcrumbItem"

import { calculateBreadcrumbState } from "./layoutCalculation"
import { BreadcrumbItemType, BreadcrumbState, DropdownItemWithoutIcon } from "./types"
export * from "./types"

export interface BreadcrumbsProps {
  /** Array of breadcrumb items to display */
  breadcrumbs: BreadcrumbItemType[]
  append?: ReactNode
}

/**
 * Responsive breadcrumb navigation component that automatically collapses items when space is limited.
 *
 * Features:
 * - Responsive layout that adjusts to container width
 * - Maintains first and last items visible
 * - Collapses middle items into a dropdown when needed
 * - Supports loading states
 * - Animated transitions
 *
 * @example
 * ```tsx
 * <Breadcrumbs
 *   breadcrumbs={[
 *     { id: "home", label: "Home", href: "/" },
 *     { id: "section", label: "Section", href: "/section" },
 *     { id: "page", label: "Current Page" }
 *   ]}
 * />
 * ```
 */
export function Breadcrumbs({ breadcrumbs, append }: BreadcrumbsProps) {
  // the component renders a hidden list of all breadcrumbs to measure their size
  // for calculations how many of them fits the container
  // it requires DOM element manipulation. refer to `layoutCalculation.ts` for details
  const containerRef = useRef<HTMLDivElement>(null)
  const listRef = useRef<HTMLOListElement>(null)

  const [, startTransition] = useTransition()
  const [state, setState] = useState<BreadcrumbState | null>(null)
  const hasCollapsedElements = (state?.collapsedItems || []).length > 0

  useLayoutEffect(() => {
    const container = containerRef.current
    const list = listRef.current
    if (!container || !list || list.children.length < breadcrumbs.length) return

    const updateBreadcrumbState = () => {
      const containerWidth = containerRef.current?.clientWidth ?? null
      const breadcrumbsElements = Array.from(list.children) as HTMLElement[]
      startTransition(() => {
        const state = calculateBreadcrumbState(containerWidth, breadcrumbs, breadcrumbsElements)
        setState(state)
      })
    }

    const resizeObserver = new ResizeObserver(updateBreadcrumbState)
    resizeObserver.observe(container)

    updateBreadcrumbState()

    return () => resizeObserver.disconnect()
  }, [breadcrumbs, append])

  if (!breadcrumbs.length || (state && !state.headItem)) {
    return <Breadcrumb ref={containerRef} className="w-full" />
  }

  return (
    <Breadcrumb
      ref={containerRef}
      className="w-full overflow-x-hidden"
      style={{
        minWidth: state?.minWidth,
      }}
      key={`breadcrumb-${breadcrumbs.at(-1)?.id ?? 0}`}
    >
      <ol className="invisible absolute -left-full" aria-hidden="true" ref={listRef}>
        {breadcrumbs.map((item, index) => (
          <BreadcrumbItem
            key={item.id}
            item={item}
            isLast={index === breadcrumbs.length - 1}
            isFirst={index === 0}
          >
            {index === breadcrumbs.length - 1 ? append : undefined}
          </BreadcrumbItem>
        ))}
      </ol>
      {state && state.headItem && (
        <BreadcrumbList>
          <BreadcrumbItem
            isOnly={state.isOnly}
            isFirst={true}
            key={`first-item-${state.headItem.id}`}
            item={state.headItem}
            isLast={false}
          />
          {/* IMPORTANT:
            when the collapsed element appears, we re-render it together with the tail items
            to avoid partially modified UI when a collapsed element is added, but a breadcrumb is not yet removed
            this triggers resize observer and starts an infinite loop.
            The only way to make this transactional is to rerender all tail breadcrumbs together with the collapsed element
          */}
          {hasCollapsedElements && (
            <>
              <CollapsedBreadcrumbItem
                key="collapsed-items"
                items={state.collapsedItems as DropdownItemWithoutIcon[]}
              />
              {state.tailItems.map((item, index) => (
                <BreadcrumbItem
                  key={item.id}
                  item={item}
                  isLast={index === state.tailItems.length - 1}
                  isFirst={false}
                >
                  {index === state.tailItems.length - 1 ? append : undefined}
                </BreadcrumbItem>
              ))}
            </>
          )}
          {!hasCollapsedElements && (
            <>
              {state.tailItems.map((item, index) => (
                <BreadcrumbItem
                  key={item.id}
                  item={item}
                  isLast={index === state.tailItems.length - 1}
                  isFirst={false}
                >
                  {index === state.tailItems.length - 1 ? append : undefined}
                </BreadcrumbItem>
              ))}
            </>
          )}
        </BreadcrumbList>
      )}
    </Breadcrumb>
  )
}
