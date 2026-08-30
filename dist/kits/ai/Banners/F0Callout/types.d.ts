import { IconType } from '../../../../components/F0Icon';
export type CalloutAction = {
    label: string;
    onClick: () => void;
    icon?: IconType;
};
export declare const variants: readonly ["ai", "critical", "positive", "info", "warning"];
export type CalloutVariant = (typeof variants)[number];
export interface CalloutInternalProps {
    title: string;
    onClose?: () => void;
    children: React.ReactNode;
    actions?: CalloutAction[];
    variant: CalloutVariant;
}
export interface CalloutSkeletonProps {
    compact?: boolean;
    variant?: CalloutVariant;
}
