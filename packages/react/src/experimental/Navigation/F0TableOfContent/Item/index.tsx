import { Reorder, useDragControls } from "motion/react"
import { ReactNode, useState } from "react"

import { TOCItem } from "../types"
import { PrimitiveItem } from "./PrimitiveItem"

interface TOCItemProps {
  item: TOCItem
  counter?: number
  isActive?: boolean
  sortable: boolean
  collapsible?: boolean
  isExpanded?: boolean
  onToggleExpanded?: (id: string) => void
  children?: ReactNode
}

export function Item({
  item,
  counter,
  isActive,
  collapsible = false,
  isExpanded = false,
  onToggleExpanded = () => {},
  sortable,
  children,
}: TOCItemProps) {
  const dragControls = useDragControls()
  const [open, setOpen] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  if (sortable) {
    return (
      <Reorder.Item
        as="div"
        key={item.id}
        value={item}
        dragControls={dragControls}
        dragListener={false}
        whileDrag={{
          scale: 1.02,
          opacity: 0.9,
          zIndex: 50,
          cursor: "grabbing",
        }}
        transition={{ type: "spring", bounce: 0.2, duration: 0.3 }}
      >
        <PrimitiveItem
          item={item}
          counter={counter}
          isActive={isActive}
          sortable={sortable}
          collapsible={collapsible}
          isExpanded={isExpanded}
          onToggleExpanded={onToggleExpanded}
          dragControls={dragControls}
          open={open}
          setOpen={setOpen}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        >
          {children}
        </PrimitiveItem>
      </Reorder.Item>
    )
  }

  return (
    <PrimitiveItem
      item={item}
      counter={counter}
      isActive={isActive}
      sortable={sortable}
      collapsible={collapsible}
      isExpanded={isExpanded}
      onToggleExpanded={onToggleExpanded}
      dragControls={dragControls}
      open={open}
      setOpen={setOpen}
      isHovered={isHovered}
      setIsHovered={setIsHovered}
    >
      {children}
    </PrimitiveItem>
  )
}
