import { IconType } from '../../../components/F0Icon';
type Action = {
    label: string;
    onClick: () => void;
    icon?: IconType;
    variant?: "default" | "outline" | "promote";
};
export type WidgetEmptyStateProps = {
    title: string;
    description: string;
    emoji?: string;
    actions?: Action[];
};
declare function _WidgetEmptyState({ title, description, emoji, actions, }: WidgetEmptyStateProps): import("react").JSX.Element;
/**
 * @experimental This is an experimental component use it at your own risk
 */
export declare const WidgetEmptyState: import('../../../lib/data-testid').WithDataTestIdReturnType<typeof _WidgetEmptyState>;
export {};
