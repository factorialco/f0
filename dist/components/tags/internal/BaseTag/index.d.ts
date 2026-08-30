import { ReactNode } from 'react';
type BaseTagProps = {
    /**
     * Sometimes you need to clarify the status for screen reader users
     * E.g., when showing a tooltip for sighted user, provide the tooltip text to this prop because tooltips aren't accessible
     */
    additionalAccessibleText?: string;
    className?: string;
    hint?: string;
    info?: string;
    shape?: "rounded" | "square";
    /**
     * The size of the tag
     * @default "md"
     */
    size?: "md" | "sm";
    /**
     * Whether to hide the label
     */
    hideLabel?: boolean;
    deactivated?: boolean;
} & ({
    left: ReactNode;
    text?: string;
    right?: ReactNode;
} | {
    left?: ReactNode;
    text: string;
    right?: ReactNode;
});
export declare const BaseTag: import('react').ForwardRefExoticComponent<BaseTagProps & import('react').RefAttributes<HTMLDivElement>>;
export {};
