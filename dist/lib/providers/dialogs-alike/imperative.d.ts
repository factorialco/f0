import { Optional } from '../../typescript-utils/optional';
import { AlertDialogOptions, ConfirmDialogOptions, DialogActionValue, DialogDefinition, DialogId, DrawerDefinition, NotificationDialogOptions } from './types';
/**
 * Imperative API for centered dialogs. Requires `<F0Provider>` (which mounts
 * `DialogsAlikeLayoutProvider`) to be present in the tree.
 *
 * @example
 * import { dialogs } from "@factorialco/f0-react"
 *
 * const result = await dialogs.open({ title, content, actions: { primary: { label: "OK", value: true } } })
 */
export declare const dialogs: {
    /** Open a dialog. Resolves with the value of the action the user picked. */
    open: (definition: Optional<DialogDefinition, "id">) => Promise<DialogActionValue>;
    /** Open a notification-style dialog (info/warning/critical/positive). */
    notification: (options: NotificationDialogOptions) => Promise<DialogActionValue>;
    /** Notification dialog with a single confirm action (defaults to "Ok"). */
    alert: (options: AlertDialogOptions) => Promise<DialogActionValue>;
    /** Notification dialog with confirm + cancel actions (defaults to Ok/Cancel). */
    confirmation: (options: ConfirmDialogOptions) => Promise<DialogActionValue>;
    /**
     * Back-compat alias for {@link confirmation} — the v3 `dialog.confirm(...)`.
     * Same options shape (`type`, `title`, `msg`, `confirm`, `cancel`), so legacy
     * call sites keep working through the `dialogs as dialog` re-export.
     * @deprecated Use `confirmation` instead.
     */
    confirm: (options: ConfirmDialogOptions) => Promise<DialogActionValue>;
    /** Programmatically close a dialog by id (resolves its promise with undefined). */
    close: (id: DialogId) => void;
};
/**
 * Imperative API for side drawers. Requires `<F0Provider>` to be present.
 *
 * @example
 * import { drawers } from "@factorialco/f0-react"
 *
 * const result = await drawers.open({ title, content, actions: { primary: { label: "Save", value: "save" } } })
 */
export declare const drawers: {
    /** Open a drawer. Resolves with the value of the action the user picked. */
    open: (definition: Optional<DrawerDefinition, "id">) => Promise<DialogActionValue>;
    /** Programmatically close a drawer by id (resolves its promise with undefined). */
    close: (id: DialogId) => void;
};
