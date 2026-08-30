import { ReactNode } from 'react';
import { F0ButtonProps } from '../../../../components/F0Button';
import { IconType } from '../../../../components/F0Icon';
/**
 * The chat's own emoji-picker trigger.
 *
 * F0Chat used to borrow the Reactions kit's `Picker`, which is emoji-mart. It
 * doesn't any more: the picker in this folder is F0Chat's, and only the
 * conversation gets it — the composer, the message action menu and the
 * add-reaction affordance next to the pills. Everything else in the product
 * (posts, surveys, the channel icon input) keeps the emoji-mart one, on purpose.
 */
export declare const ChatEmojiPickerButton: ({ onSelect, label, size, variant, icon, }: {
    onSelect: (emoji: string) => void;
    /** Accessible label and tooltip for the trigger. */
    label: string;
    size?: F0ButtonProps["size"];
    variant?: F0ButtonProps["variant"];
    icon?: IconType;
}) => ReactNode;
