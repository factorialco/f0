import { BadgeProps } from '../Badge/index.mjs';
import { ModuleId } from './ModuleAvatar/modules.mjs';
import 'react/jsx-runtime';
import 'cva';
import '../Icon/index.mjs';
import 'react';
import 'react-native-svg';

type AvatarBadge = ({
    type: "module";
    module: ModuleId;
} | {
    type: Exclude<BadgeProps["type"], undefined>;
    icon: BadgeProps["icon"];
}) & {
    tooltip?: string;
};

export type { AvatarBadge };
