import * as react_jsx_runtime from 'react/jsx-runtime';
import { IconType } from '../../Icon/index.mjs';
import 'cva';
import 'react';
import 'react-native-svg';

type Props = {
    icon: IconType;
    size?: "sm" | "md" | "lg";
    className?: string;
};
declare const IconAvatar: {
    ({ icon, size, className }: Props): react_jsx_runtime.JSX.Element;
    displayName: string;
};

export { IconAvatar };
