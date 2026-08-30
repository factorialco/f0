export type ChevronToggleProps = {
    open?: boolean;
    className?: string;
    onClick?: () => void;
    disabled?: boolean;
    size?: "xs" | "sm";
    closedRotation?: number;
    openRotation?: number;
};
export declare const ChevronToggle: ({ open, className, onClick, disabled, size, closedRotation, openRotation, }: ChevronToggleProps) => import("react").JSX.Element;
