import { ReactNode } from 'react';
import { BreadcrumbItemType } from '../types';
interface BreadcrumbItemProps {
    item: BreadcrumbItemType;
    isLast: boolean;
    isOnly?: boolean;
    isFirst?: boolean;
}
declare const BreadcrumbItem: import('react').ForwardRefExoticComponent<BreadcrumbItemProps & {
    children?: ReactNode | undefined;
} & import('react').RefAttributes<HTMLLIElement>>;
export { BreadcrumbItem };
