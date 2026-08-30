import { AvatarBadge } from '../F0Avatar/types';
import { BaseAvatarProps } from '../internal/BaseAvatar';
export type F0AvatarTeamProps = {
    /**
     * The name of the team.
     */
    name: string;
    /**
     * The source of the team's image.
     */
    src?: string;
    /**
     * The size of the avatar.
     */
    size?: BaseAvatarProps["size"];
    /**
     * The badge to display on the avatar. Can be a module badge or a custom badge.
     */
    badge?: AvatarBadge;
} & Pick<BaseAvatarProps, "aria-label" | "aria-labelledby">;
export declare const F0AvatarTeam: {
    ({ name, src, size, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledby, badge, }: F0AvatarTeamProps): import("react").JSX.Element;
    displayName: string;
};
