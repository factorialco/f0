import {
  F0GridStack,
  GridStackReactOptions,
  GridStackReactWidget,
} from "@/components/Utilities/F0GridStack/F0GridStack"

import { useMemo } from "react"

export type GridFixedGroupSize = { w: number; h: number }

interface BlockItem {
  id: string
  size: GridFixedGroupSize
  availableSizes: GridFixedGroupSize[]
  render: React.ReactNode
}

export interface GridFixedGroupProps {
  blocks: BlockItem[]
  sortable?: boolean
  onSort?: (items: React.ReactNode[]) => void
}

export const GridFixedGroup = ({
  blocks,
  sortable: _sortable = false,
  onSort: _onSort = () => {},
}: GridFixedGroupProps) => {
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
      renderFn: () => <>{block.render}</>,
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
