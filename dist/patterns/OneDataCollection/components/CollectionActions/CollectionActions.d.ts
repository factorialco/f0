import { default as React } from 'react';
import { PrimaryActionItemDefinition, SecondaryActionGroup, SecondaryActionItem, UpsellActionDefinition } from '../../actions';
type CollectionActionProps = {
    primaryActions?: PrimaryActionItemDefinition[];
    primaryActionsLabel?: string;
    secondaryActions?: SecondaryActionItem[];
    otherActions?: SecondaryActionGroup[];
    upsellAction?: UpsellActionDefinition;
};
export declare const CollectionActions: ({ primaryActions, primaryActionsLabel, secondaryActions, otherActions, upsellAction, }: CollectionActionProps) => React.JSX.Element | null;
export {};
