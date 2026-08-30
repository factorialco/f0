import { IconType } from '../../../../components/F0Icon';
type Tag = {
    icon: IconType;
    label?: string;
    description?: string;
};
export interface CalendarEventProps {
    label?: string;
    title: string;
    subtitle?: string;
    description: string;
    color: string;
    isPending: boolean;
    leftTags?: Tag[];
    rightTags?: Tag[];
    fromDate?: Date;
    toDate?: Date;
    noBackground?: boolean;
}
export declare const CalendarEvent: import('react').ForwardRefExoticComponent<CalendarEventProps & import('react').RefAttributes<HTMLDivElement>>;
export {};
