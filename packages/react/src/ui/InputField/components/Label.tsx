import { OneEllipsis } from "@/components/OneEllipsis"
import { Icon, type IconType } from "@/components/Utilities/Icon"
import { cn } from "@/lib/utils"

type LabelProps = {
  label: string
  required?: boolean
  htmlFor: string
  className?: string
  icon?: IconType
  disabled?: boolean
}
const Label = ({
  label,
  required,
  htmlFor,
  className,
  icon,
  disabled,
}: LabelProps) => {
  return (
    <label
      className={cn(
        className,
        "text-md flex max-w-full gap-1 font-medium text-f1-foreground-secondary"
      )}
      htmlFor={htmlFor}
      aria-label={label}
      aria-disabled={disabled}
    >
      {icon && <Icon icon={icon} size="sm"></Icon>}
      <OneEllipsis className="shrink-1 min-w-0">{label}</OneEllipsis>
      {required && (
        <span className="text-f1-foreground-critical" aria-hidden="true">
          *
        </span>
      )}
    </label>
  )
}

export { Label }
