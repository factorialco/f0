import * as react_jsx_runtime from 'react/jsx-runtime';
import { Avatar } from '../../../ui/avatar.mjs';
import { ComponentProps } from 'react';
import { AvatarBadge } from '../types.mjs';
import 'react-native';
import '../../Badge/index.mjs';
import 'cva';
import '../../Icon/index.mjs';
import 'react-native-svg';
import '../ModuleAvatar/modules.mjs';

type ShadAvatarProps = ComponentProps<typeof Avatar>;
type Props = {
    type: ShadAvatarProps["type"];
    name: string | string[];
    src?: string;
    size?: ShadAvatarProps["size"];
    color?: ShadAvatarProps["color"] | "random";
    badge?: AvatarBadge;
} & Pick<ShadAvatarProps, "aria-label" | "aria-labelledby">;
declare const BaseAvatar: {
    ({ src, name, size, type, color, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledby, badge, }: Props): react_jsx_runtime.JSX.Element;
    displayName: string;
};

export { BaseAvatar };
