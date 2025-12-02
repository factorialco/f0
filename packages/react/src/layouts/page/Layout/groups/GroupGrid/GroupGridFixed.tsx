import {
  F0GridStack,
  GridStackReactOptions,
  GridStackReactWidget,
} from "@/components/Utilities/F0GridStack/F0GridStack"

import { useMemo } from "react"
import { PageLayoutGroupComponent } from "../../types"

export type GroupGridWidgetSize = { w: number; h: number }

interface BlockItem {
  id: string
  size: GroupGridWidgetSize
  availableSizes: GroupGridWidgetSize[]
  render: React.ReactNode
}

export interface GroupGridProps {
  blocks: BlockItem[]
  sortable?: boolean
  onSort?: (items: React.ReactNode[]) => void
}

export const GroupGrid = ({
  blocks,
  sortable: _sortable = false,
  onSort: _onSort = () => {},
}: GroupGridProps) => {
  const gridOptions: GridStackReactOptions = useMemo(
    () => ({
      acceptWidgets: true,
      margin: 8,
      column: 4,
      columnOpts: {
        breakpointForWindow: true,
        breakpoints: [
          { c: 1, w: 700 },
          { c: 3, w: 850 },
          { c: 6, w: 950 },
          { c: 8, w: 1100 },
        ],
        columnMax: 4,
      },
    }),
    []
  )

  const onChange = (widgets: GridStackReactWidget[]) => {
    console.log("widgets", widgets)
  }

  const widgets = useMemo(() => {
    return blocks.map((block) => ({
      id: block.id,
      h: block.size.h ?? 1,
      w: block.size.w ?? 1,
      allowResize: true,
      allowMove: true,
      allowedSizes: block.availableSizes,
      content: <>{block.render}</>,
    }))
  }, [blocks])

  return (
    <F0GridStack
      options={gridOptions}
      onChange={onChange}
      widgets={widgets}
    ></F0GridStack>
  )
}

GroupGrid.displayName = "GroupGrid"
// Mark as a valid PageLayoutGroup component
;(GroupGrid as unknown as PageLayoutGroupComponent).__isPageLayoutGroup = true
