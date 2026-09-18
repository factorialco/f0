import { F0Icon } from "@/components/F0Icon"
import { ChevronDown, ChevronUp } from "@/icons/app"
import { cn } from "@/lib/utils.ts"
import * as SelectPrimitive from "./radix-ui"

type Props = {
  variant: "up" | "down"
  className?: string
}

// The Radix primitive is picked here rather than inside a forwardRef built
// during render: that inner component was a new type on every render, so the
// scroll button remounted each time instead of updating. Nothing forwards a
// ref through this wrapper, so the indirection bought nothing.
const SelectScrollButton = ({ variant, className, ...props }: Props) => {
  const WrapperComponent =
    variant === "up"
      ? SelectPrimitive.ScrollUpButton
      : SelectPrimitive.ScrollDownButton

  return (
    <WrapperComponent
      className={cn(
        "flex cursor-default items-center justify-center py-1 text-f1-icon",
        className
      )}
      {...props}
    >
      <F0Icon icon={variant === "up" ? ChevronUp : ChevronDown} size="sm" />
    </WrapperComponent>
  )
}
export { SelectScrollButton }
