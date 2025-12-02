import { GroupGrid, GroupGridProps } from "../Layout/groups/GroupGrid"
import { DashboardWidget } from "./components/DashboardWidget"

export type DashboardProps = GroupGridProps

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
      WidgetWrapper={(children, meta, editMode) => {
        return (
          <DashboardWidget
            title={(meta?.title as string) ?? ""}
            draggable={editMode}
          >
            {children}
          </DashboardWidget>
        )
      }}
    />
  )
}

Dashboard.displayName = "Dashboard"

export { Dashboard }
