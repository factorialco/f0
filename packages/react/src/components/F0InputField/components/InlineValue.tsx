import { F0Icon, type IconType } from "@/components/F0Icon"
import { cn } from "@/lib/utils"
import {
  inputElementVariants,
  inputFieldVariants,
  type InputFieldSize,
} from "../variants"

type InlineValueProps = {
  label: string
  hideLabel?: boolean
  text: string
  placeholder?: string
  size?: InputFieldSize
  icon?: IconType
}

/** Match the editor border, padding, and icon offsets to prevent text movement. */
const InlineValue = ({
  label,
  hideLabel,
  text,
  placeholder,
  size = "md",
  icon,
}: InlineValueProps) => {
  const empty = text.length === 0
  const display = empty ? (placeholder ?? "") : text

  return (
    <div
      data-testid="input-field-inline-value"
      aria-label={hideLabel ? label : undefined}
      className={cn(
        "relative flex w-full min-w-0 items-center border border-solid border-transparent",
        inputFieldVariants({ size, canGrow: true })
      )}
    >
      {icon ? (
        <div
          data-slot="icon"
          className={cn(
            "pointer-events-none absolute left-2 top-1.25 my-auto h-5 w-5 shrink-0",
            size === "md" && "left-3 top-2.25"
          )}
        >
          <F0Icon icon={icon} color="default" />
        </div>
      ) : null}
      <span
        title={display}
        className={cn(
          "min-w-0 truncate px-3",
          icon && "pl-8",
          icon && size === "md" && "pl-9",
          inputElementVariants({ size }),
          empty ? "text-f1-foreground-secondary" : "text-f1-foreground"
        )}
      >
        {display}
      </span>
    </div>
  )
}

export { InlineValue }
