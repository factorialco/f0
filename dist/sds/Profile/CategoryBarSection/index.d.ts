import { CategoryBarProps } from '../../../kits/Charts/CategoryBarChart';
interface CategoryBarSectionProps {
    title: string;
    subtitle: string;
    data: CategoryBarProps["data"];
    helpText?: string;
    legend?: boolean;
    hideTooltip?: boolean;
}
export declare function CategoryBarSection({ title, subtitle, data, helpText, legend, hideTooltip, }: CategoryBarSectionProps): import("react").JSX.Element;
export {};
