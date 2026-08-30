import { IconType } from '../../F0Icon';
export declare const statuses: readonly ["neutral", "info", "positive", "warning", "critical"];
export type Variant = (typeof statuses)[number];
export type StatusVariant = Variant;
export interface F0TagStatusProps {
    text: string;
    variant: Variant;
    icon?: IconType;
    /**
     * Sometimes you need to clarify the status for screen reader users
     * E.g., when showing a tooltip for sighted user, provide the tootip text to this prop because tooltips aren't accessible
     */
    additionalAccessibleText?: string;
}
