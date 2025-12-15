import { F0Icon } from "@/components/F0Icon"
import { ChevronDown, ChevronUp } from "@/icons/app"
import { cn } from "@/lib/utils.ts"
import { forwardRef } from "react"
import * as SelectPrimitive from "./radix-ui"

type Props = {
  variant: "up" | "down"
  className?: string
}
const SelectScrollButton = ({ variant, ...props }: Props) => {
  type ScrollButton = typeof variant extends "up"
    ? typeof SelectPrimitive.ScrollUpButton
    : typeof SelectPrimitive.ScrollDownButton

  const Component = forwardRef<
    React.ElementRef<ScrollButton>,
    React.ComponentPropsWithoutRef<ScrollButton>
  >(({ className, ...props }, ref) => {
    const WrapperComponent =
      variant === "up" ? SelectPrimitive.ScrollUpButton : SelectPrimitive.ScrollDownButton

    return (
      <WrapperComponent
        ref={ref}
        className={cn(
          "flex cursor-default items-center justify-center py-1 text-f1-icon",
          className
        )}
        {...props}
      >
        <F0Icon icon={variant === "up" ? ChevronUp : ChevronDown} size="sm" />
      </WrapperComponent>
    )
  })
  Component.displayName =
    variant === "up"
      ? SelectPrimitive.ScrollUpButton.displayName
      : SelectPrimitive.ScrollDownButton.displayName

  return <Component {...props} />
}
export { SelectScrollButton }
