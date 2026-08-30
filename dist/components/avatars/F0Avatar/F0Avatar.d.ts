import { ReactNode } from 'react';
import { F0AvatarCompanyProps } from '../F0AvatarCompany';
import { F0AvatarEmojiProps } from '../F0AvatarEmoji';
import { F0AvatarFileProps } from '../F0AvatarFile';
import { F0AvatarFlagProps } from '../F0AvatarFlag';
import { F0AvatarIconProps } from '../F0AvatarIcon';
import { F0AvatarPersonProps } from '../F0AvatarPerson';
import { F0AvatarTeamProps } from '../F0AvatarTeam';
import { AvatarSize } from '../internal/BaseAvatar';
export type AvatarProps = {
    avatar: AvatarVariant;
    size?: AvatarSize;
    dataTestId?: string;
};
export type AvatarVariant = ({
    type: "person";
} & Omit<F0AvatarPersonProps, "size">) | ({
    type: "team";
} & Omit<F0AvatarTeamProps, "size">) | ({
    type: "company";
} & Omit<F0AvatarCompanyProps, "size">) | ({
    type: "file";
} & Omit<F0AvatarFileProps, "size">) | ({
    type: "flag";
} & Omit<F0AvatarFlagProps, "size">) | ({
    type: "emoji";
} & Omit<F0AvatarEmojiProps, "size">) | ({
    type: "icon";
} & Omit<F0AvatarIconProps, "size">);
export declare const F0Avatar: ({ avatar, size, dataTestId, }: AvatarProps) => ReactNode;
