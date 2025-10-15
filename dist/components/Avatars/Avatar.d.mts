import { sizes } from '../../ui/avatar.mjs';
import { ComponentProps, ReactNode } from 'react';
import { CompanyAvatar } from './CompanyAvatar/index.mjs';
import { PersonAvatar } from './PersonAvatar/index.mjs';
import { TeamAvatar } from './TeamAvatar/index.mjs';
import 'react/jsx-runtime';
import 'react-native';
import './BaseAvatar/index.mjs';
import './types.mjs';
import '../Badge/index.mjs';
import 'cva';
import '../Icon/index.mjs';
import 'react-native-svg';
import './ModuleAvatar/modules.mjs';

type PersonAvatarProps = ComponentProps<typeof PersonAvatar>;
type TeamAvatarProps = ComponentProps<typeof TeamAvatar>;
type CompanyAvatarProps = ComponentProps<typeof CompanyAvatar>;
type AvatarVariant = ({
    type: "person";
} & Omit<PersonAvatarProps, "size">) | ({
    type: "team";
} & Omit<TeamAvatarProps, "size">) | ({
    type: "company";
} & Omit<CompanyAvatarProps, "size">);
declare const Avatar: ({ avatar, size, }: {
    avatar: AvatarVariant;
    size?: (typeof sizes)[number];
}) => ReactNode;

export { Avatar, type AvatarVariant };
