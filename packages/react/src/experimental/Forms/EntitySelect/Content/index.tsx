import { Action } from "../../../../components/F0Select/components/SelectBottomActions"
import {
  EntitySelectEntity,
  EntitySelectNamedGroup,
  EntitySelectSubEntity,
} from "../types"
import { MainContent } from "./MainContent"
import { SecondaryContent } from "./SecondaryContent"

const breakpointToShowEmployeeList = 500
const totalDefaultWidth = 520
const asideWidth = 210

export const Content = ({
  groupView,
  onRemove,
  onSubItemRemove,
  selectedEntities,
  selectedLabel,
  width,
  singleSelector = false,
  loading = false,
  hiddenAvatar = false,
  actions,
  onCreate,
  onCreateLabel,
  ...props
}: {
  groupView: boolean
  entities: EntitySelectEntity[]
  groups: EntitySelectNamedGroup[]
  selectedGroup: string
  search: string
  onSelect: (entity: EntitySelectEntity) => void
  onRemove: (entity: EntitySelectEntity) => void
  onSubItemRemove: (
    parentEntity: EntitySelectEntity,
    entity: EntitySelectSubEntity
  ) => void
  onSubItemSelect: (
    parentEntity: EntitySelectEntity,
    entity: EntitySelectSubEntity
  ) => void
  onClear: () => void
  onSelectAll: () => void
  onSearch: (search: string) => void
  selectedEntities: EntitySelectEntity[]
  onGroupChange: (key: string | null) => void
  onToggleExpand: (entity: EntitySelectEntity, expanded: boolean) => void
  notFoundTitle: string
  notFoundSubtitle: string
  width?: number
  searchPlaceholder?: string
  selectAllLabel?: string
  clearLabel?: string
  selectedLabel?: string
  singleSelector?: boolean
  loading?: boolean
  disabled?: boolean
  hiddenAvatar?: boolean
  actions?: Action[]
  onCreate?: (partialName: string) => void
  onCreateLabel?: string
}) => {
  const blockSecondaryContent =
    (width ?? totalDefaultWidth) < breakpointToShowEmployeeList
  const isExpanded = !loading && !singleSelector && !blockSecondaryContent
  const defaultWidth = width ?? totalDefaultWidth
  const finalWidthMain = isExpanded ? defaultWidth - asideWidth : defaultWidth

  return (
    <div
      className="relative overflow-hidden"
      style={{
        height:
          singleSelector && (!actions || actions.length === 0)
            ? "435px"
            : "473px",
        width: defaultWidth,
      }}
    >
      <div
        className="absolute right-0 top-0"
        style={{
          width: asideWidth + "px",
        }}
      >
        <SecondaryContent
          groupView={groupView}
          onRemove={onRemove}
          onSubItemRemove={onSubItemRemove}
          selectedEntities={selectedEntities ?? []}
          selectedLabel={selectedLabel}
          disabled={props.disabled}
          hiddenAvatar={hiddenAvatar}
        />
      </div>
      <div
        className="absolute left-0"
        style={{ width: finalWidthMain + 1 + "px" }}
      >
        <MainContent
          {...props}
          groupView={groupView}
          onRemove={onRemove}
          onSubItemRemove={onSubItemRemove}
          selectedEntities={selectedEntities}
          singleSelector={singleSelector}
          loading={loading}
          disabled={props.disabled}
          hiddenAvatar={hiddenAvatar}
          actions={actions}
          onCreate={onCreate}
          onCreateLabel={onCreateLabel}
        />
      </div>
    </div>
  )
}
