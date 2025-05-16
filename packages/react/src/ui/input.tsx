import * as React from "react"
import { Icon, IconType } from "../components/Utilities/Icon"
import { cn, focusRing } from "../lib/utils"

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  icon?: IconType
  clearable?: boolean
  error?: boolean
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, icon, clearable, error, ...props }, ref) => {
    return (
      <div
        className={cn(
          "flex w-full appearance-none rounded-md border-0 bg-f1-background p-2 ring-1 ring-inset ring-f1-border transition-all placeholder:text-f1-foreground-tertiary hover:ring-f1-border-hover",
          focusRing("focus:ring-f1-border-hover"),
          icon ? "flex gap-1 py-1.5 ps-2" : "ps-3",
          props.disabled &&
            "cursor-not-allowed bg-f1-background-secondary opacity-50",
          error && "ring-f1-border-critical-bold",
          className
        )}
      >
        {icon && (
          <Icon
            icon={icon}
            className="h-5 w-5 shrink-0 text-f1-foreground-secondary"
          />
        )}
        <input
          type={type}
          ref={ref}
          {...props}
          className={cn(
            !clearable ? "[&::-webkit-search-cancel-button]:hidden" : "",
            "w-full shrink disabled:cursor-not-allowed"
          )}
        />
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }
