import * as React from "react";
import { View, Text } from "react-native";
export declare const sizes: readonly ["xsmall", "small", "medium", "large", "xlarge"];
export declare const type: readonly ["base", "rounded"];
export declare const color: readonly ["viridian", "malibu", "yellow", "purple", "lilac", "barbie", "smoke", "army", "flubber", "indigo", "camel"];
type AvatarProps = React.ComponentPropsWithoutRef<typeof View> & {
    size?: (typeof sizes)[number];
    type?: (typeof type)[number];
    color?: (typeof color)[number];
};
declare const Avatar: ({ size, type, color, className, ...props }: AvatarProps) => React.JSX.Element;
declare const AvatarImage: ({ className, alt, src, ...props }: React.ComponentPropsWithoutRef<typeof View> & {
    src?: string;
    alt: string;
}) => React.JSX.Element;
declare const AvatarFallback: ({ className, size, ...props }: React.ComponentPropsWithoutRef<typeof Text> & {
    size?: (typeof sizes)[number];
}) => React.JSX.Element;
export { Avatar, AvatarFallback, AvatarImage };
//# sourceMappingURL=avatar.d.ts.map