import { IconType } from '../../../components/F0Icon';
type Type = "bar-chart" | "line-chart";
interface Props {
    title: string;
    content: string;
    buttonLabel?: string;
    buttonIcon?: IconType;
    buttonAction?: () => void;
    type: Type;
}
export type ChatWidgetEmptyStateProps = Props;
/**
 * @experimental This is an experimental component use it at your own risk
 */
export declare const ChartWidgetEmptyState: import('../../../lib/data-testid').WithDataTestIdReturnType<import('react').ForwardRefExoticComponent<Props & import('react').RefAttributes<HTMLDivElement>>>;
export {};
