import { IconType } from '../../F0Icon';
interface ToolbarButtonProps {
    label: string;
    icon: IconType;
    onClick: () => void;
    size?: "sm" | "md";
}
export declare const ToolbarButton: ({ label, icon, onClick, size, }: ToolbarButtonProps) => import("react").JSX.Element;
export {};
