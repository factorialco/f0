import * as react_jsx_runtime from 'react/jsx-runtime';
import { ComponentProps } from 'react';
import { FileLike } from './utils.mjs';
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
    file: FileLike;
    className?: string;
    size?: BaseAvatarProps["size"];
    badge?: AvatarBadge;
};
declare const FileAvatar: {
    ({ file, className, size, badge, ...props }: Props): react_jsx_runtime.JSX.Element;
    displayName: string;
};

export { FileAvatar };
