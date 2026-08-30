import { ReactNode } from 'react';
import { IconType, F0IconProps } from '../../../../../../../components/F0Icon';
export declare function BaseCell({ disabled, readonly, showRightBorder, cursor, isActive, borderOnHover, error, hint, hintPosition, children, }: {
    disabled?: boolean;
    readonly?: boolean;
    showRightBorder?: boolean;
    cursor?: "text" | "pointer" | "default" | "not-allowed";
    isActive?: boolean;
    error?: string;
    hint?: {
        icon: IconType;
        message: string;
        iconColor?: F0IconProps["color"];
    };
    hintPosition?: "left" | "right";
    borderOnHover?: boolean;
    children: ReactNode;
}): import("react").JSX.Element;
