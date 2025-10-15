import * as react_jsx_runtime from 'react/jsx-runtime';
import { ComponentProps } from 'react';
import { BaseAvatar } from '../BaseAvatar/index.mjs';
import { AvatarBadge } from '../types.mjs';
import '../../../ui/avatar.mjs';
import 'react-native';
import '../../Badge/index.mjs';
import 'cva';
import '../../Icon/index.mjs';
import 'react-native-svg';
import '../ModuleAvatar/modules.mjs';

type BaseAvatarProps = ComponentProps<typeof BaseAvatar>;
type Props = {
    name: string;
    src?: string;
    size?: BaseAvatarProps["size"];
    badge?: AvatarBadge;
} & Pick<BaseAvatarProps, "aria-label" | "aria-labelledby">;
declare const TeamAvatar: {
    ({ name, src, size, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledby, badge, }: Props): react_jsx_runtime.JSX.Element;
    displayName: string;
};

export { TeamAvatar };
