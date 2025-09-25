import { F0AvatarAlert } from "@/components/avatars/F0AvatarAlert"
import { F0AvatarIcon } from "@/components/avatars/F0AvatarIcon"
import { F0Button } from "@/components/F0Button"
import type { IconType } from "@/components/F0Icon"
import { F0Link } from "@/components/F0Link"
import { Placeholder } from "@/icons/app"
import { cva, type VariantProps } from "cva"

type AlertVariant = "info" | "warning" | "critical" | "neutral" | "positive"

const alertVariants = cva({
  base: "flex w-full flex-col items-start justify-between gap-4 rounded-md p-2 pr-3 text-f1-foreground sm:flex-row sm:items-center",
  variants: {
    variant: {
      info: "bg-f1-background-info",
      warning: "bg-f1-background-warning",
      critical: "bg-f1-background-critical",
      neutral: "bg-f1-background-tertiary",
      positive: "bg-f1-background-positive",
    },
  },
  defaultVariants: {
    variant: "neutral",
  },
})

const titleVariants = cva({
  base: "font-medium",
  variants: {
    variant: {
      info: "text-f1-foreground-info",
      warning: "text-f1-foreground-warning",
      critical: "text-f1-foreground-critical",
      neutral: "text-f1-foreground",
      positive: "text-f1-foreground-positive",
    },
  },
  defaultVariants: {
    variant: "info",
  },
})

interface AlertProps extends VariantProps<typeof alertVariants> {
  title: string
  description: string
  action?: {
    label: string
    onClick: () => void
  }
  link?: {
    label: string
    href: string
  }
  icon?: IconType
  variant: AlertVariant
}

export const OneAlert = ({
  title,
  description,
  action,
  link,
  icon,
  variant = "neutral",
}: AlertProps) => {
  return (
    <div className={alertVariants({ variant })}>
      <div className="flex flex-grow items-center justify-between gap-16">
        <div className="flex flex-row gap-2">
          <div className="h-6 w-6 flex-shrink-0">
            {variant === "neutral" ? (
              <F0AvatarIcon icon={icon || Placeholder} size="sm" />
            ) : (
              <F0AvatarAlert type={variant} size="sm" />
            )}
          </div>
          <div className="flex flex-col gap-0.5">
            <p className={titleVariants({ variant })}>{title}</p>
            <p className="text-base text-f1-foreground-secondary">
              {description}
            </p>
          </div>
        </div>
        {(action || link) && (
          <div className="flex flex-row items-center gap-3">
            {link && (
              <F0Link href={link.href} target="_blank" variant="link">
                {link.label}
              </F0Link>
            )}
            {action && (
              <F0Button
                label={action.label}
                variant="outline"
                onClick={action.onClick}
              />
            )}
          </div>
        )}
      </div>
    </div>
  )
}
