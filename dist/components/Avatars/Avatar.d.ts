import { sizes } from '../../ui/avatar.js';
import { ComponentProps, ReactNode } from 'react';
import { CompanyAvatar } from './CompanyAvatar/index.js';
import { PersonAvatar } from './PersonAvatar/index.js';
import { TeamAvatar } from './TeamAvatar/index.js';
import 'react/jsx-runtime';
import 'react-native';
import './BaseAvatar/index.js';
import './types.js';
import '../Badge/index.js';
import 'cva';
import '../Icon/index.js';
import 'react-native-svg';
import './ModuleAvatar/modules.js';

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
