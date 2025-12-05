import { GroupGrid, GroupGridProps } from "../Layout/groups/GroupGrid"
import { createPageLayoutBlockGroup } from "../Layout/utils"
import { DashboardWidget } from "./components/DashboardWidget"
import { DashboardWidget as DashboardWidgetType } from "./typings"
export type DashboardProps = GroupGridProps<DashboardWidgetType>

const DashboardComponent = ({
  widgets,
  editMode = false,
  onChange = () => {},
  deps,
  ...rest
}: DashboardProps) => {
  return (
    <GroupGrid
      widgets={widgets}
      editMode={editMode}
      onChange={onChange}
      deps={deps}
      {...rest}
      WidgetWrapper={(children, meta, editMode) => {
        return (
          <DashboardWidget
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

DashboardComponent.displayName = "Dashboard"

const Dashboard = createPageLayoutBlockGroup("Dashboard", DashboardComponent)

export { Dashboard }
