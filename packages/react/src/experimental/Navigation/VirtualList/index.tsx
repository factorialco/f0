import { experimentalComponent } from "@/lib/experimental"
import { useVirtualizer, VirtualItem } from "@tanstack/react-virtual"
import React, { forwardRef } from "react"
import { cn } from "../../../lib/utils"

type VirtualListProps = {
  height: number
  itemCount: number
  itemSize: number | ((index: number) => number)
  renderer: (item: VirtualItem) => JSX.Element
  className?: string
}

const _VirtualList = forwardRef<HTMLDivElement, VirtualListProps>(
  (
    { height, itemCount, itemSize, className, renderer },
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const parentRef = React.useRef<HTMLDivElement | null>(null)

    React.useImperativeHandle(
      ref,
      () => parentRef.current as HTMLDivElement,
      []
    )

    const rowVirtualizer = useVirtualizer({
      count: itemCount,
      getScrollElement: () => parentRef.current,
      estimateSize: typeof itemSize === "number" ? () => itemSize : itemSize,
      overscan: 5,
    })

    return (
      <div
        ref={parentRef}
        className={cn("scrollbar-macos w-full overflow-auto", className)}
        style={{
          height: `${height}px`,
        }}
      >
        <div
          style={{
            height: `${rowVirtualizer.getTotalSize()}px`,
            width: "100%",
            position: "relative",
          }}
        >
          {rowVirtualizer.getVirtualItems().map((vi) => (
            <div
              key={vi.key}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: `${vi.size}px`,
                transform: `translateY(${vi.start}px)`,
              }}
            >
              {/* this is a protection in case the library sends null | undefined */}
              {!vi ? <></> : renderer(vi)}
            </div>
          ))}
        </div>
      </div>
    )
  }
)

_VirtualList.displayName = "VirtualList"

/**
 * @experimental This is an experimental component use it at your own risk
 */
export const VirtualList = experimentalComponent("VirtualList", _VirtualList)
