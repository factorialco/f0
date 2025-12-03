import { F0Widget } from "@/components/F0Widget"
import { DropdownItem } from "@/experimental/Navigation/Dropdown"

export interface DashboardWidgetProps {
  children: React.ReactNode
  className?: string
  title: string
  draggable?: boolean
  actions?: DropdownItem[]
  handleRef?: React.RefObject<HTMLDivElement>
}

export const DashboardWidget = ({
  children,
  title,
  draggable = false,
  actions,
}: DashboardWidgetProps) => {
  return (
    <F0Widget title={title} draggable={draggable} actions={actions}>
      {children}
    </F0Widget>
  )
}
