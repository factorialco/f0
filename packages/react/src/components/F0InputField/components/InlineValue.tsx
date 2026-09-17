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
}

/**
 * The transparent border and the `px-3` repeat the editor's chrome, so the
 * first glyph sits at the same x in both modes.
 */
const InlineValue = ({
  label,
  hideLabel,
  text,
  placeholder,
  size = "md",
}: InlineValueProps) => {
  const empty = text.length === 0
  const display = empty ? (placeholder ?? "") : text

  return (
    <div
      data-testid="input-field-inline-value"
      aria-label={hideLabel ? label : undefined}
      className={cn(
        "flex w-full min-w-0 items-center border border-solid border-transparent",
        inputFieldVariants({ size, canGrow: true })
      )}
    >
      <span
        title={display}
        className={cn(
          "min-w-0 truncate px-3",
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
