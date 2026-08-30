import { ButtonInternalProps } from '../../../components/F0Button/internal-types';
import * as AIIcons from '../../../icons/ai';
type AIIconType = (typeof AIIcons)[keyof typeof AIIcons];
declare const privateProps: readonly ["append", "className", "pressed", "compact", "noTitle", "noAutoTooltip", "style", "variant", "loading", "emoji"];
export type AIButtonProps = Omit<ButtonInternalProps, (typeof privateProps)[number] | "icon"> & {
    icon?: AIIconType;
};
declare const AIButton: import('react').ForwardRefExoticComponent<Omit<ButtonInternalProps, "style" | "className" | "icon" | "emoji" | "loading" | "variant" | "pressed" | "append" | "compact" | "noAutoTooltip" | "noTitle"> & {
    icon?: AIIconType;
} & import('react').RefAttributes<HTMLAnchorElement | HTMLButtonElement>>;
export { AIButton };
