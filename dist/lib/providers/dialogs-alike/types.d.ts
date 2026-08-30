import { ReactNode } from 'react';
import { DialogNotificationType, F0DialogSize } from '../../../components/dialog-alike/F0Dialog/types';
import { DrawerSize, F0DrawerPosition } from '../../../components/dialog-alike/F0Drawer/types';
import { F0ButtonProps } from '../../../components/F0Button';
import { Optional } from '../../typescript-utils/optional';
import { DialogModule } from './module-types';
export type { DialogModule };
export type DialogActionValuePrimitive = string | boolean | number | undefined | null;
export type DialogActionValue = DialogActionValuePrimitive | (() => Promise<DialogActionValuePrimitive>);
export type DialogAction = Optional<Pick<F0ButtonProps, "label" | "icon" | "disabled">, "icon" | "disabled"> & {
    value: DialogActionValue;
    keepOpen?: boolean;
    nonBlocking?: boolean;
};
export type DialogId = string;
export type DialogActions = {
    primary: DialogAction | DialogAction[];
    secondary?: DialogAction | DialogAction[];
};
export type DialogDefinition = {
    size?: F0DialogSize;
    id: DialogId;
    title: string;
    description?: string;
    content: ReactNode;
    actions: DialogActions;
    keepOpen?: boolean;
    /**
     * If true, the dialog will be modal (cannot be closed by clicking outside or pressing Escape).
     * @default false
     */
    modal?: boolean;
    /**
     * The module of the dialog.
     */
    module?: DialogModule;
};
export type DialogDefinitionInternal = (DialogDefinition & {
    variant?: "default";
    type?: "default";
}) | (Omit<DialogDefinition, "modal" | "module"> & {
    variant: "notification";
    type: DialogNotificationType;
});
export type DrawerDefinition = {
    /** The size of the drawer. */
    size?: DrawerSize;
    /** The id of the drawer. Auto-generated if not provided. */
    id: DialogId;
    /** The title of the drawer. */
    title: string;
    /** The description of the drawer. */
    description?: string;
    /** The content of the drawer. */
    content: ReactNode;
    /** The actions of the drawer. */
    actions: DialogActions;
    /**
     * If true, the drawer will not be closed automatically when an action is
     * clicked. Useful for drawers that need to be closed manually.
     */
    keepOpen?: boolean;
    /**
     * The position of the drawer.
     * @default "right"
     */
    position?: F0DrawerPosition;
    /** If true, the drawer will be modal. */
    modal?: boolean;
    /** The module of the drawer. */
    module?: DialogModule;
};
export type DrawerDefinitionInternal = DrawerDefinition & {
    variant: "drawer";
};
export type NotificationDialogBaseOptions = Optional<Pick<DialogDefinition, "id" | "title">, "id"> & {
    msg: string;
    type?: DialogNotificationType;
};
export type NotificationDialogOptions = NotificationDialogBaseOptions & {
    actions: DialogActions;
};
export type DialogSimpleAction = {
    label?: string;
    value?: DialogActionValue;
};
export type ConfirmDialogOptions = NotificationDialogBaseOptions & {
    /** The confirm action (default: label "Ok", value true). */
    confirm?: DialogSimpleAction;
    /** The cancel action (default: label "Cancel", value false). */
    cancel?: DialogSimpleAction;
};
export type AlertDialogOptions = NotificationDialogBaseOptions & {
    /** The alert action (default: label "Ok", value true). */
    confirm?: DialogSimpleAction;
};
