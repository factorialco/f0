import { DropdownItem } from "@/experimental/Navigation/Dropdown"
import { Widget } from "@/experimental/Widgets/Widget"

export interface DashboardWidgetProps {
  children: React.ReactNode
  className?: string
  title: string
  draggable?: boolean
  actions?: DropdownItem[]
  handleRef?: React.RefObject<HTMLDivElement>
  aiButton?: () => void
}

export const DashboardWidget = ({
  children,
  title,
  draggable = false,
  actions,
  aiButton,
}: DashboardWidgetProps) => {
  return (
    <Widget
      header={{ title }}
      draggable={draggable}
      actions={actions}
      AIButton={aiButton}
      fullHeight
    >
      {children}
    </Widget>
  )
}
