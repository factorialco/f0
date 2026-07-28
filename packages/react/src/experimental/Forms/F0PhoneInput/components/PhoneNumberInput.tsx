import { forwardRef } from "react"

import { cn } from "@/lib/utils"

/**
 * Bare `<input>` react-phone-number-input renders inside the field chrome.
 * Phone numbers are always LTR, even in RTL locales.
 */
export const PhoneNumberInput = forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => (
  <input
    ref={ref}
    dir="ltr"
    {...props}
    className={cn(
      "h-full w-full min-w-0 flex-1 border-none bg-transparent pl-1 pr-3 text-f1-foreground outline-none",
      "placeholder:text-f1-foreground-secondary",
      "disabled:cursor-not-allowed",
      className
    )}
  />
))
PhoneNumberInput.displayName = "PhoneNumberInput"
