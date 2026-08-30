import { IconType } from '../components/F0Icon';
type IndicatorProps = {
    content: string;
    label: string;
    color?: string;
} & ({
    icon?: IconType;
} | {
    emoji?: string;
});
export declare const Indicator: import('react').ForwardRefExoticComponent<IndicatorProps & import('react').RefAttributes<HTMLDivElement>>;
export {};
