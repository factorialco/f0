import { IconType } from '../F0Icon';
export declare const alertVariantOptions: readonly ["info", "warning", "critical", "neutral", "positive"];
export type AlertVariant = (typeof alertVariantOptions)[number];
export interface F0AlertProps {
    title: string;
    description?: string;
    action?: {
        label: string;
        disabled?: boolean;
        onClick: () => void;
    };
    link?: {
        label: string;
        href: string;
    };
    icon?: IconType;
    variant: AlertVariant;
    /** Called when the user dismisses the alert. When provided, a close button is shown. */
    onClose?: () => void;
}
