import { AlertAvatarProps } from '../../../avatars/F0AvatarAlert';
import { F0DialogAction } from '../types';
type F0DialogNotificationProps = {
    type: AlertAvatarProps["type"];
    title: string;
    description: string;
    isOpen?: boolean;
    onClose?: () => void;
    /**
     * The primary action to render in the dialog.
     */
    primaryAction: F0DialogAction;
    /**
     * The secondary action to render in the dialog.
     * Limited to 2 actions.
     * @default undefined
     */
    secondaryAction?: F0DialogAction | F0DialogAction[];
};
export declare const DialogNotificationInternal: ({ isOpen, onClose, type, title, description, primaryAction, secondaryAction, }: F0DialogNotificationProps) => import("react").JSX.Element;
export {};
