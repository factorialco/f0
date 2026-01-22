"use client"

import * as AvatarPrimitive from "@radix-ui/react-avatar"
import { cva } from "cva"
import * as React from "react"

import { useImageContext } from "../../lib/imageHandler"
import { cn } from "../../lib/utils"
import {
  internalAvatarColors,
  internalAvatarSizes,
  internalAvatarTypes,
} from "./types"

const avatarVariants = cva({
  base: "relative flex shrink-0 items-center justify-center overflow-hidden text-center font-semibold ring-1 ring-inset ring-f1-border-secondary",
  variants: {
    size: {
      xsmall: "size-5 rounded-xs text-sm",
      small: "size-6 rounded-sm text-sm",
      medium: "size-8 rounded",
      large: "size-10 rounded-md text-lg",
      xlarge: "size-14 rounded-xl text-2xl",
      xxlarge: "size-18 rounded-[20px] text-3xl",
    } satisfies Record<(typeof internalAvatarSizes)[number], string>,
    type: {
      base: "",
      rounded: "rounded-full",
    } satisfies Record<(typeof internalAvatarTypes)[number], string>,
    color: {
      viridian: "bg-[hsl(theme(colors.viridian.50))]",
      malibu: "bg-[hsl(theme(colors.malibu.50))]",
      yellow: "bg-[hsl(theme(colors.yellow.50))]",
      purple: "bg-[hsl(theme(colors.purple.50))]",
      lilac: "bg-[hsl(theme(colors.lilac.50))]",
      barbie: "bg-[hsl(theme(colors.barbie.50))]",
      smoke: "bg-[hsl(theme(colors.smoke.50))]",
      army: "bg-[hsl(theme(colors.army.50))]",
      flubber: "bg-[hsl(theme(colors.flubber.50))]",
      indigo: "bg-[hsl(theme(colors.indigo.50))]",
      camel: "bg-[hsl(theme(colors.camel.50))]",
    } satisfies Record<(typeof internalAvatarColors)[number], string>,
  },
  defaultVariants: {
    size: "medium",
    type: "base",
    color: "viridian",
  },
})

export type InternalAvatarProps = React.ComponentPropsWithoutRef<
  typeof AvatarPrimitive.Root
> & {
  size?: (typeof internalAvatarSizes)[number]
  type?: (typeof internalAvatarTypes)[number]
  color?: (typeof internalAvatarColors)[number]
}

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  InternalAvatarProps
>(({ size, type, color, className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    data-a11y-color-contrast-ignore
    className={cn(avatarVariants({ size, type, color, className }))}
    {...props}
  />
))
Avatar.displayName = AvatarPrimitive.Root.displayName

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => {
  const { src: imageSrcContext } = useImageContext()

  const extraProps =
    props.src && imageSrcContext ? imageSrcContext(props) : props

  return (
    <AvatarPrimitive.Image
      ref={ref}
      className={cn("aspect-square h-full w-full object-cover", className)}
      {...props}
      {...extraProps}
      loading="lazy"
    ></AvatarPrimitive.Image>
  )
})
AvatarImage.displayName = AvatarPrimitive.Image.displayName

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    translate="no"
    className={cn(
      "flex h-full w-full items-center justify-center text-f1-foreground-inverse/90",
      className
    )}
    {...props}
  />
))
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

export { Avatar, AvatarFallback, AvatarImage }
