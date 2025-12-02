import { GroupGrid, GroupGridProps } from "../Layout/groups/GroupGrid"
import { GroupGridWidget } from "../Layout/groups/GroupGrid/typings"
import { DashboardWidget } from "./components/DashboardWidget"

export type DashboardProps = GroupGridProps

export type DashboardWidget = GroupGridWidget & {
  meta: {
    title: string
  }
}

const Dashboard = ({
  widgets,
  editMode = false,
  onChange = () => {},
}: DashboardProps) => {
  return (
    <GroupGrid
      widgets={widgets}
      editMode={editMode}
      onChange={onChange}
      WidgetWrapper={(widget, editMode) => {
        const dashboardWidget = widget as DashboardWidget
        return (
          <DashboardWidget
            title={(dashboardWidget.meta?.title as string) ?? ""}
            draggable={editMode}
          >
            {widget.content}
          </DashboardWidget>
        )
      }}
    />
  )
}

Dashboard.displayName = "Dashboard"

export { Dashboard }
