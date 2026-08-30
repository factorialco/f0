import { ComponentProps } from 'react';
import { Indicator } from '../../../../ui/indicator';
export interface IndicatorsListProps {
    items: ComponentProps<typeof Indicator>[];
}
export declare const IndicatorsList: import('react').ForwardRefExoticComponent<IndicatorsListProps & import('react').RefAttributes<HTMLDivElement>>;
