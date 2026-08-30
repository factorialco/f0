import { StatusVariant } from '../../../../tags/F0TagStatus';
import { HeaderSecondaryAction } from '../../../../../experimental/Information/Headers/BaseHeader';
import { MetadataAction, MetadataItem } from '../../../../../experimental/Information/Headers/Metadata';
import { PrimaryActionButton, PrimaryDropdownAction } from '../../../../../experimental/Information/utils';
import { DropdownItem } from '../../../../../experimental/Navigation/Dropdown';
export interface HeaderStatusProps {
    label: string;
    text: string;
    variant: StatusVariant;
    actions?: MetadataAction[];
}
export interface HeaderProps {
    primaryAction?: PrimaryActionButton | PrimaryDropdownAction<string>;
    secondaryActions?: HeaderSecondaryAction[];
    metadata?: MetadataItem[];
    otherActions?: DropdownItem[];
    status?: HeaderStatusProps;
}
declare const Header: ({ primaryAction, secondaryActions, metadata, otherActions, status, }: HeaderProps) => import("react").JSX.Element;
export { Header };
