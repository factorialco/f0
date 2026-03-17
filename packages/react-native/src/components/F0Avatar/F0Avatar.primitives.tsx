import * as React from "react"
import { View } from "react-native"
import { tv } from "tailwind-variants"

import { cn } from "../../lib/utils"
import { F0Image } from "../primitives/F0Image"
import { F0Text, type TypographyVariant } from "../primitives/F0Text"

export const sizes = [
  "xsmall",
  "small",
  "medium",
  "lg",
  "large",
  "xlarge",
] as const

export const type = ["base", "rounded"] as const

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
] as const

export const textSizes = {
  xsmall: "text-sm",
  small: "text-sm",
  medium: "text-md",
  lg: "text-lg",
  large: "text-2xl",
  xlarge: "text-3xl",
}

const fallbackVariant: Record<(typeof sizes)[number], TypographyVariant> = {
  xsmall: "body-sm-semibold",
  small: "body-sm-semibold",
  medium: "body-md-semibold",
  lg: "heading-sm",
  large: "heading-lg",
  xlarge: "heading-lg",
}

const avatarVariants = tv({
  base: "flex shrink-0 items-center justify-center overflow-hidden text-center font-semibold",
  variants: {
    size: {
      xsmall: "w-5 h-5 rounded-xs",
      small: "w-6 h-6 rounded-sm",
      medium: "w-8 h-8 rounded",
      lg: "w-10 h-10 rounded-lg",
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
})

type AvatarProps = React.ComponentPropsWithoutRef<typeof View> & {
  size?: (typeof sizes)[number]
  type?: (typeof type)[number]
  color?: (typeof color)[number]
}

const Avatar = ({ size, type, color, className, ...props }: AvatarProps) => (
  <View
    className={cn(avatarVariants({ size, type, color }), className)}
    {...props}
  />
)

const AvatarImage = ({
  className,
  alt,
  src,
  ...props
}: React.ComponentPropsWithoutRef<typeof View> & {
  src?: string
  alt: string
}) => (
  <View className={cn("aspect-square h-full w-full", className)} {...props}>
    <F0Image source={{ uri: src }} accessibilityLabel={alt} />
  </View>
)

const AvatarFallback = ({
  className,
  size = "medium",
  ...props
}: Omit<React.ComponentPropsWithoutRef<typeof F0Text>, "variant" | "color"> & {
  size?: (typeof sizes)[number]
}) => (
  <F0Text
    variant={fallbackVariant[size]}
    color="inverse"
    className={cn("text-f0-foreground-inverse/90", textSizes[size], className)}
    {...props}
  />
)

export { Avatar, AvatarFallback, AvatarImage }
