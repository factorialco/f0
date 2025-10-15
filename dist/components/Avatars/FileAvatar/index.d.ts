import * as react_jsx_runtime from 'react/jsx-runtime';
import { ComponentProps } from 'react';
import { FileLike } from './utils.js';
import { BaseAvatar } from '../BaseAvatar/index.js';
import { AvatarBadge } from '../types.js';
import '../../../ui/avatar.js';
import 'react-native';
import '../../Badge/index.js';
import 'cva';
import '../../Icon/index.js';
import 'react-native-svg';
import '../ModuleAvatar/modules.js';

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
