import { GroupGrid, GroupGridProps } from "../Layout/groups/GroupGrid"
import { DashboardWidget } from "./components/DashboardWidget"
import { DashboardWidget as DashboardWidgetType } from "./typings"
export type DashboardProps = GroupGridProps<DashboardWidgetType>

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
      WidgetWrapper={(children, meta, editMode, removing) => {
        return (
          <DashboardWidget
            removing={removing}
            title={(meta?.title as string) ?? ""}
            draggable={editMode}
            actions={meta?.actions}
            aiButton={meta?.aiButton}
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
