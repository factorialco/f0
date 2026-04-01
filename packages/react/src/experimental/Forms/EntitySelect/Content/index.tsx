import { Action } from "../../../../components/F0Select/components/SelectBottomActions";
import {
  EntitySelectEntity,
  EntitySelectNamedGroup,
  EntitySelectSubEntity,
} from "../types";
import { MainContent } from "./MainContent";
import { SecondaryContent } from "./SecondaryContent";

const breakpointToShowEmployeeList = 500;
const totalDefaultWidth = 520;
const asideWidth = 210;

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
  groupView: boolean;
  entities: EntitySelectEntity[];
  groups: EntitySelectNamedGroup[];
  selectedGroup: string;
  search: string;
  onSelect: (entity: EntitySelectEntity) => void;
  onRemove: (entity: EntitySelectEntity) => void;
  onSubItemRemove: (
    parentEntity: EntitySelectEntity,
    entity: EntitySelectSubEntity,
  ) => void;
  onSubItemSelect: (
    parentEntity: EntitySelectEntity,
    entity: EntitySelectSubEntity,
  ) => void;
  onClear: () => void;
  onSelectAll: () => void;
  onSearch: (search: string) => void;
  selectedEntities: EntitySelectEntity[];
  onGroupChange: (key: string | null) => void;
  onToggleExpand: (entity: EntitySelectEntity, expanded: boolean) => void;
  notFoundTitle: string;
  notFoundSubtitle: string;
  width?: number;
  searchPlaceholder?: string;
  selectAllLabel?: string;
  clearLabel?: string;
  selectedLabel?: string;
  singleSelector?: boolean;
  loading?: boolean;
  disabled?: boolean;
  hiddenAvatar?: boolean;
  actions?: Action[];
  onCreate?: (partialName: string) => void;
  onCreateLabel?: string;
}) => {
  const blockSecondaryContent =
    (width ?? totalDefaultWidth) < breakpointToShowEmployeeList;
  const isExpanded = !loading && !singleSelector && !blockSecondaryContent;
  const defaultWidth = width ?? totalDefaultWidth;
  const finalWidthMain = isExpanded ? defaultWidth - asideWidth : defaultWidth;

  const maxHeight =
    singleSelector && (!actions || actions.length === 0) ? 435 : 473;

  return (
    <div
      className="flex overflow-hidden"
      style={{
        maxHeight: maxHeight + "px",
        width: defaultWidth,
      }}
    >
      <div
        className="min-h-0 flex-1"
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
      {isExpanded && (
        <div
          className="min-h-0"
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
      )}
    </div>
  );
};
