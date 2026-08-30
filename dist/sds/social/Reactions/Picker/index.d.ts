import { F0ButtonProps } from '../../../../components/F0Button';
import { IconType } from '../../../../components/F0Icon';
interface PickerProps {
    onSelect?: (emoji: string) => void;
    locale?: string;
    size?: F0ButtonProps["size"];
    variant?: F0ButtonProps["variant"];
    lastEmojiReaction?: string;
    /** Accessible label / tooltip for the trigger button. */
    label?: string;
    icon?: IconType;
}
export declare function Picker({ onSelect, locale, size, variant, lastEmojiReaction, label, icon, }: PickerProps): import("react").JSX.Element;
export {};
