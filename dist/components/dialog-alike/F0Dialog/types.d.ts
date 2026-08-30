import { DialogAlikeAction, DialogAlikeActionsProps } from '../common/types';
export type F0DialogAction = DialogAlikeAction;
export type F0DialogActionsProps = DialogAlikeActionsProps;
export declare const dialogSizes: readonly ["sm", "md", "lg", "xl", "fullscreen"];
export type F0DialogSize = (typeof dialogSizes)[number];
/**
 * The levels of the alert.
 */
export declare const dialogNotificationTypes: readonly ["info", "warning", "critical", "positive"];
export type DialogNotificationType = (typeof dialogNotificationTypes)[number];
