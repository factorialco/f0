import { Button } from "@/components/Actions/Button"
import { F0AvatarAlert } from "@/components/avatars/F0AvatarAlert"
import { F0Icon } from "@/components/F0Icon"
import { ExternalLink } from "@/icons/app"
import { cn, focusRing } from "@/lib/utils"
import { cva, type VariantProps } from "cva"

type AlertVariant = "info" | "warning" | "critical"

const alertVariants = cva({
  base: "flex w-full flex-col items-start justify-between gap-4 rounded-md px-3 py-3 text-f1-foreground ring-1 ring-inset ring-f1-border-secondary sm:flex-row sm:items-center sm:px-4",
  variants: {
    variant: {
      info: "bg-f1-background-info",
      warning: "bg-f1-background-warning",
      critical: "bg-f1-background-critical",
    },
  },
  defaultVariants: {
    variant: "info",
  },
})

const titleVariants = cva({
  variants: {
    variant: {
      info: "text-f1-foreground-info",
      warning: "text-f1-foreground-warning",
      critical: "text-f1-foreground-critical",
    },
  },
  defaultVariants: {
    variant: "info",
  },
})

const buttonVariants: Record<AlertVariant, "outline" | "promote" | "critical"> =
  {
    info: "outline",
    warning: "promote",
    critical: "outline",
  }

interface AlertProps extends VariantProps<typeof alertVariants> {
  title: string
  description: string
  action?: {
    label: string
    onClick?: () => void
  }
  link?: {
    label: string
    href: string
  }

  variant: AlertVariant
}

export const OneAlert = ({
  title,
  description,
  action,
  link,
  variant = "info",
}: AlertProps) => {
  return (
    <div className={alertVariants({ variant })}>
      <div className="flex flex-grow items-center justify-between gap-16">
        <div className="flex flex-row gap-4">
          <div className="h-6 w-6 flex-shrink-0">
            <F0AvatarAlert type={variant} />
          </div>
          <div className="flex flex-col gap-0.5">
            <h3 className={titleVariants({ variant })}>{title}</h3>
            <p className="text-base text-f1-foreground-secondary">
              {description}
            </p>
          </div>
        </div>
        {(action || link) && (
          <div className="flex flex-row items-center justify-end gap-3">
            {link && (
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  "flex items-center gap-1 rounded-sm px-2 py-0.5 text-base font-medium text-f1-foreground no-underline transition-colors hover:bg-f1-background-secondary-hover [&>svg]:text-f1-foreground-secondary",
                  focusRing()
                )}
              >
                {link.label}
                <F0Icon icon={ExternalLink} size="sm" />
              </a>
            )}
            {action && (
              <Button
                label={action.label}
                variant={buttonVariants[variant]}
                onClick={action.onClick}
              />
            )}
          </div>
        )}
      </div>
    </div>
  )
}
