import { GroupGridProps } from '../Layout/groups/GroupGrid';
import { DashboardWidget as DashboardWidgetType } from './typings';
export type DashboardProps = GroupGridProps<DashboardWidgetType>;
declare const Dashboard: import('react').ComponentType<DashboardProps> & import('../Layout').PageLayoutGroupComponent;
export { Dashboard };
