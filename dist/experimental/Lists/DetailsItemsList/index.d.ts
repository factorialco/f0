import { default as React } from 'react';
import { WithDataTestIdProps } from '../../../lib/data-testid';
import { DetailsItemType } from '../DetailsItem';
interface DetailsItemsListProps extends WithDataTestIdProps {
    title?: string;
    tableView?: boolean;
    details: DetailsItemType[];
    showSeeMore?: boolean;
    onClickSeeMore?: () => void;
}
/**
 * @experimental This is an experimental component use it at your own risk
 */
export declare const DetailsItemsList: React.ForwardRefExoticComponent<DetailsItemsListProps & React.RefAttributes<HTMLDivElement>>;
export {};
