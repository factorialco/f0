import * as react_jsx_runtime from 'react/jsx-runtime';
import * as react from 'react';
import { View, Text } from 'react-native';

declare const sizes: readonly ["xsmall", "small", "medium", "large", "xlarge"];
declare const type: readonly ["base", "rounded"];
declare const color: readonly ["viridian", "malibu", "yellow", "purple", "lilac", "barbie", "smoke", "army", "flubber", "indigo", "camel"];
type AvatarProps = react.ComponentPropsWithoutRef<typeof View> & {
    size?: (typeof sizes)[number];
    type?: (typeof type)[number];
    color?: (typeof color)[number];
    className?: string;
};
declare const Avatar: ({ size, type, color, className, ...props }: AvatarProps) => react_jsx_runtime.JSX.Element;
declare const AvatarImage: ({ className, alt, src, ...props }: react.ComponentPropsWithoutRef<typeof View> & {
    src?: string;
    alt: string;
}) => react_jsx_runtime.JSX.Element;
declare const AvatarFallback: ({ className, size, ...props }: react.ComponentPropsWithoutRef<typeof Text> & {
    size?: (typeof sizes)[number];
}) => react_jsx_runtime.JSX.Element;

export { Avatar, AvatarFallback, AvatarImage, color, sizes, type };
