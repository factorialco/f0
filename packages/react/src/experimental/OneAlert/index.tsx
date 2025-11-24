import { F0AvatarAlert } from "@/components/avatars/F0AvatarAlert"
import { F0AvatarIcon } from "@/components/avatars/F0AvatarIcon"
import { F0Button } from "@/components/F0Button"
import type { IconType } from "@/components/F0Icon"
import { F0Link } from "@/components/F0Link"
import { Placeholder } from "@/icons/app"
import { cn } from "@/lib/utils"
import { breakpoints } from "@factorialco/f0-core"
import { cva, type VariantProps } from "cva"
import { useEffect, useRef, useState } from "react"

type AlertVariant = "info" | "warning" | "critical" | "neutral" | "positive"

const alertVariants = cva({
  base: "w-full rounded-md p-2 pr-3 text-f1-foreground",
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
  const containerRef = useRef<HTMLDivElement>(null)
  const [isNarrow, setIsNarrow] = useState(false)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const resizeObserver = new ResizeObserver((entries) => {
      const width = entries[0].contentRect.width
      setIsNarrow(width < breakpoints.sm)
    })

    resizeObserver.observe(container)

    return () => {
      resizeObserver.disconnect()
    }
  }, [])

  return (
    <div ref={containerRef}>
      <div className={alertVariants({ variant })}>
        <div
          className={cn(
            "flex gap-3",
            isNarrow
              ? "flex-col items-start"
              : "flex-row items-center justify-between"
          )}
        >
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
            <div
              className={cn(
                "flex flex-shrink-0 flex-row items-center gap-3",
                isNarrow && "pl-8"
              )}
            >
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
    </div>
  )
}
