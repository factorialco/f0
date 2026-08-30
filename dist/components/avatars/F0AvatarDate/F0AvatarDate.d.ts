import { BaseAvatarProps } from '../internal/BaseAvatar';
export type F0AvatarDateProps = {
    date: Date;
} & Partial<Pick<BaseAvatarProps, "aria-label" | "aria-labelledby">>;
export declare const F0AvatarDate: ({ date, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledby, }: F0AvatarDateProps) => import("react").JSX.Element;
