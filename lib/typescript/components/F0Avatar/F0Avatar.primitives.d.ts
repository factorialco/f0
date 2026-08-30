import * as React from "react";
import { View } from "react-native";
import { F0Text } from "../primitives/F0Text";
export declare const sizes: readonly ["xsmall", "small", "medium", "lg", "large", "xlarge"];
export declare const type: readonly ["base", "rounded"];
export declare const color: readonly ["viridian", "malibu", "yellow", "purple", "lilac", "barbie", "smoke", "army", "flubber", "indigo", "camel"];
export declare const textSizes: {
    xsmall: string;
    small: string;
    medium: string;
    lg: string;
    large: string;
    xlarge: string;
};
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
declare const AvatarFallback: ({ className, size, ...props }: Omit<React.ComponentPropsWithoutRef<typeof F0Text>, "variant" | "color"> & {
    size?: (typeof sizes)[number];
}) => React.JSX.Element;
export { Avatar, AvatarFallback, AvatarImage };
//# sourceMappingURL=F0Avatar.primitives.d.ts.map