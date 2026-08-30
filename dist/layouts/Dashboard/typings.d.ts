import { DropdownItem } from '../../experimental/Navigation/Dropdown/internal';
import { GroupGridWidget } from '../Layout/groups/GroupGrid/typings';
export declare const dashboardWidgetSizes: readonly ["1x1", "2x2", "4x2"];
export type DashboardWidgetSize = (typeof dashboardWidgetSizes)[number];
export type DashboardWidget = GroupGridWidget<{
    title: string;
    actions?: DropdownItem[];
    aiButton?: () => void;
}>;
