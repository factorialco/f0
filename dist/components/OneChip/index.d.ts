import { VariantProps } from 'cva';
import { AvatarVariant } from '../avatars/F0Avatar';
import { IconType } from '../F0Icon';
export declare const chipVariants: (props?: ({
    variant?: "selected" | "default" | undefined;
} & ({
    class?: import('cva').ClassValue;
    className?: never;
} | {
    class?: never;
    className?: import('cva').ClassValue;
})) | undefined) => string;
interface BaseChipProps extends VariantProps<typeof chipVariants> {
    /**
     * The label of the chip
     * */
    label: string;
    /**
     * If defined, the chip will be clickable
     * */
    onClick?: () => void;
    /**
     * If defined, the close icon will be displayed and the chip will be clickable
     * */
    onClose?: () => void;
    deactivated?: boolean;
}
type ChipVariants = {
    /**
     * If defined, an avatar will be displayed in the chip
     * */
    avatar: AvatarVariant;
    icon?: undefined;
} | {
    /**
     * If defined, an icon will be displayed in the chip
     * */
    icon: IconType;
    avatar?: undefined;
} | {
    avatar?: undefined;
    icon?: undefined;
};
export type ChipProps = BaseChipProps & ChipVariants & {
    variant?: "default" | "selected";
};
/**
 * @experimental This is an experimental component use it at your own risk
 */
export declare const Chip: ({ deactivated, label, variant, onClick, onClose, avatar, icon, }: ChipProps) => import("react").JSX.Element;
export {};
