import { AvatarVariant } from '../../../../components/avatars/F0Avatar';
import { StatusVariant } from '../../../../components/tags/F0TagStatus';
import { MetadataAction, MetadataProps } from '../Metadata';
import { PrimaryActionButton, PrimaryDropdownAction, SecondaryAction } from '../../utils';
import { DropdownItem } from '../../../Navigation/Dropdown';
export type HeaderSecondaryButtonAction = SecondaryAction & {
    hideLabel?: boolean;
};
export type HeaderSecondaryDropdownAction = PrimaryDropdownAction<string> & {
    variant?: "outline";
};
export type HeaderSecondaryAction = HeaderSecondaryButtonAction | HeaderSecondaryDropdownAction;
interface BaseHeaderProps {
    title: string;
    deactivated?: boolean;
    avatar?: {
        type: "generic";
        name: string;
        src?: string;
    } | AvatarVariant;
    description?: string;
    primaryAction?: PrimaryActionButton | PrimaryDropdownAction<string>;
    secondaryActions?: HeaderSecondaryAction[];
    otherActions?: (DropdownItem & {
        isVisible?: boolean;
    })[];
    status?: {
        label: string;
        text: string;
        variant: StatusVariant;
        actions?: MetadataAction[];
    };
    metadata?: MetadataProps["items"];
    metadataRowGap?: MetadataProps["rowGap"];
    /** Renders a 1px bottom border at the very bottom of the header. */
    showBottomBorder?: boolean;
    /** When set, renders a close button in the header actions that calls this on click. */
    onClose?: () => void;
}
export declare function BaseHeader({ title, avatar, deactivated, description, primaryAction, secondaryActions, otherActions, status, metadata, metadataRowGap, showBottomBorder, onClose, }: BaseHeaderProps): import("react").JSX.Element;
export declare const isSecondaryDropdownAction: (action: HeaderSecondaryAction) => action is HeaderSecondaryDropdownAction;
export {};
