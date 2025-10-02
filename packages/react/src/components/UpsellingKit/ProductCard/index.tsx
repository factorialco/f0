import { Button } from "@/components/Actions/Button"
import {
  F0AvatarModule,
  ModuleId,
  modules,
} from "@/components/avatars/F0AvatarModule"
import { F0Icon, IconType } from "@/components/F0Icon"
import CrossIcon from "@/icons/app/Cross"
import { useEffect, useState } from "react"

export type ProductCardProps = {
  title: string
  description: string
  onClick: () => void
  onClose?: () => void
  isVisible: boolean
  dismissable?: boolean
  trackVisibility?: (open: boolean) => void
  module: ModuleId | IconType
  type?: "one-campaign" | undefined
}

export function ProductCard({
  title,
  description,
  onClick,
  onClose,
  isVisible,
  dismissable = false,
  trackVisibility,
  type,
  ...props
}: ProductCardProps) {
  const [open, setOpen] = useState(isVisible)

  useEffect(() => {
    setOpen(isVisible)
    if (trackVisibility) {
      trackVisibility(isVisible)
    }
  }, [isVisible, trackVisibility])

  const handleClose = () => {
    setOpen(false)
    if (onClose) {
      onClose()
    }
  }

  const getWrapperStyles = () => {
    if (type === "one-campaign") {
      return {
        background: `linear-gradient(98.39deg, rgba(249, 115, 22, 0.49) 0%, rgba(229, 25, 67, 0.49) 20%, rgba(229, 25, 67, 0.49) 49.97%, rgba(229, 25, 67, 0.49) 80%, rgba(164, 165, 222, 0.49) 100%)`,
        borderRadius: "12px",
        padding: "1px",
      }
    }
    return {}
  }

  const getCardStyles = () => {
    if (type === "one-campaign") {
      return {
        background: "#fef7f8",
        borderRadius: "11px",
      }
    }
    return {}
  }

  const getCardClassName = () => {
    if (type === "one-campaign") {
      return "flex h-auto w-auto cursor-pointer flex-row gap-2 p-3 text-f1-foreground shadow-md hover:bg-f1-background-secondary"
    }

    return "flex h-auto w-auto cursor-pointer flex-row gap-2 rounded-md border-f1-border p-3 text-f1-foreground shadow-md hover:bg-f1-background-secondary"
  }

  return (
    open && (
      <div>
        <div className="p-2">
          <div style={getWrapperStyles()}>
            <div
              className={getCardClassName()}
              style={getCardStyles()}
              onClick={onClick}
            >
              <>
                {typeof props.module === "string" && props.module in modules ? (
                  <F0AvatarModule module={props.module as ModuleId} size="lg" />
                ) : (
                  <div className="relative flex h-8 w-8 shrink-0 items-center justify-center">
                    <F0Icon
                      icon={props.module as IconType}
                      size="lg"
                      className="!h-8 !w-8"
                    />
                  </div>
                )}
                <div className="flex flex-1 flex-col">
                  <div>
                    <h3 className="text-lg font-medium">{title}</h3>
                    <p className="text-f1-foreground-secondary">
                      {description}
                    </p>
                  </div>
                </div>
              </>

              {dismissable && (
                <div className="h-6 w-6">
                  <Button
                    variant="ghost"
                    icon={CrossIcon}
                    size="sm"
                    hideLabel
                    onClick={handleClose}
                    label="Close"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  )
}
