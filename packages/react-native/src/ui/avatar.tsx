import { cva } from "cva";
import * as React from "react";
import { cn } from "../lib/utils";
import { View, Text, Image } from "react-native";

export const sizes = ["xsmall", "small", "medium", "large", "xlarge"] as const;

export const type = ["base", "rounded"] as const;

export const color = [
  "viridian",
  "malibu",
  "yellow",
  "purple",
  "lilac",
  "barbie",
  "smoke",
  "army",
  "flubber",
  "indigo",
  "camel",
] as const;

const textSizes = {
  xsmall: "text-sm",
  small: "text-sm",
  medium: "text-md",
  large: "text-2xl",
  xlarge: "text-3xl",
};

const avatarVariants = cva({
  base: "flex shrink-0 items-center justify-center overflow-hidden text-center font-semibold",
  variants: {
    size: {
      xsmall: "w-5 h-5 rounded-xs",
      small: "w-6 h-6 rounded-sm",
      medium: "w-8 h-8 rounded",
      large: "w-14 h-14 rounded-xl",
      xlarge: "w-18 h-18 rounded-[20px]",
    } satisfies Record<(typeof sizes)[number], string>,
    type: {
      base: "",
      rounded: "rounded-full",
    } satisfies Record<(typeof type)[number], string>,
    color: {
      viridian: "bg-[hsl(theme(colors.viridian-50))]",
      malibu: "bg-[hsl(theme(colors.malibu-50))]",
      yellow: "bg-[hsl(theme(colors.yellow-50))]",
      purple: "bg-[hsl(theme(colors.purple-50))]",
      lilac: "bg-[hsl(theme(colors.lilac-50))]",
      barbie: "bg-[hsl(theme(colors.barbie-50))]",
      smoke: "bg-[hsl(theme(colors.smoke-50))]",
      army: "bg-[hsl(theme(colors.army-50))]",
      flubber: "bg-[hsl(theme(colors.flubber-50))]",
      indigo: "bg-[hsl(theme(colors.indigo-50))]",
      camel: "bg-[hsl(theme(colors.camel-50))]",
    } satisfies Record<(typeof color)[number], string>,
  },
  defaultVariants: {
    size: "medium",
    type: "base",
    color: "viridian",
  },
});

type AvatarProps = React.ComponentPropsWithoutRef<typeof View> & {
  size?: (typeof sizes)[number];
  type?: (typeof type)[number];
  color?: (typeof color)[number];
};

const Avatar = ({ size, type, color, className, ...props }: AvatarProps) => (
  <View
    className={cn(avatarVariants({ size, type, color, className }))}
    {...props}
  />
);

const AvatarImage = ({
  className,
  alt,
  src,
  ...props
}: React.ComponentPropsWithoutRef<typeof View> & {
  src?: string;
  alt: string;
}) => (
  <View className={cn("aspect-square h-full w-full", className)} {...props}>
    <Image
      style={{ width: "100%", height: "100%" }}
      source={{
        uri: src,
      }}
      aria-label={alt}
    />
  </View>
);

const AvatarFallback = ({
  className,
  size = "medium",
  ...props
}: React.ComponentPropsWithoutRef<typeof Text> & {
  size?: (typeof sizes)[number];
}) => (
  <Text
    className={cn("text-f1-foreground-inverse/90", textSizes[size], className)}
    {...props}
  />
);

export { Avatar, AvatarFallback, AvatarImage };
