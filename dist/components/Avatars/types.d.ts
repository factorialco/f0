import { BadgeProps } from '../Badge/index.js';
import { ModuleId } from './ModuleAvatar/modules.js';
import 'react/jsx-runtime';
import 'cva';
import '../Icon/index.js';
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
