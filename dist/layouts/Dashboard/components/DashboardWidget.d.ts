import { DropdownItem } from '../../../experimental/Navigation/Dropdown';
export interface DashboardWidgetProps {
    children: React.ReactNode;
    className?: string;
    title: string;
    draggable?: boolean;
    actions?: DropdownItem[];
    handleRef?: React.RefObject<HTMLDivElement>;
    aiButton?: () => void;
}
export declare const DashboardWidget: ({ children, title, draggable, actions, aiButton, }: DashboardWidgetProps) => import("react").JSX.Element;
