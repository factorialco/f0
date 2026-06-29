import type { F0AvatarVariant } from "../F0Avatar";
import type { IconType } from "../primitives/F0Icon";
export declare const F0_CHIP_VARIANTS: readonly ["default", "selected"];
export type F0ChipVariant = (typeof F0_CHIP_VARIANTS)[number];
type F0ChipBaseProps = {
    /**
     * Text label displayed inside the chip.
     */
    label: string;
    /**
     * Visual state of the chip.
     * @default "default"
     */
    variant?: F0ChipVariant;
    /**
     * Optional press handler for the chip surface.
     */
    onPress?: () => void;
    /**
     * Optional handler for the close affordance.
     */
    onClose?: () => void;
    /**
     * Reduces the visible emphasis of the label while keeping the chip readable.
     * @default false
     */
    deactivated?: boolean;
    /**
     * Test identifier for the chip root.
     */
    testID?: string;
};
type F0ChipWithAvatar = {
    avatar: F0AvatarVariant;
    icon?: never;
};
type F0ChipWithIcon = {
    icon: IconType;
    avatar?: never;
};
type F0ChipWithoutLeadingVisual = {
    avatar?: never;
    icon?: never;
};
export type F0ChipProps = F0ChipBaseProps & (F0ChipWithAvatar | F0ChipWithIcon | F0ChipWithoutLeadingVisual);
export {};
//# sourceMappingURL=F0Chip.types.d.ts.map