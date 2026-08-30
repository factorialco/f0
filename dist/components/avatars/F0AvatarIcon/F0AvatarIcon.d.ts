import { F0IconProps, IconType } from '../../F0Icon';
import { BaseAvatarProps } from '../internal/BaseAvatar';
export declare const avatarIconSizes: readonly ["sm", "md", "lg"];
export type F0AvatarIconProps = {
    icon: IconType;
    size?: (typeof avatarIconSizes)[number];
    state?: F0IconProps["state"];
} & Partial<Pick<BaseAvatarProps, "aria-label" | "aria-labelledby">>;
export declare const F0AvatarIcon: {
    ({ icon, size, state, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledby, }: F0AvatarIconProps): import("react").JSX.Element;
    displayName: string;
};
