import { Button } from "@/components/Actions/Button"
import { IconType } from "@/components/Utilities/Icon"
import { ModuleAvatar, ModuleId } from "@/experimental/Information/ModuleAvatar"
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
} & (
  | {
      module: ModuleId
    }
  | {
      // @deprecated This property will be removed soon. Use the `module` prop instead.
      icon: IconType
    }
)

export function ProductCard({
  title,
  description,
  onClick,
  onClose,
  isVisible,
  dismissable = false,
  trackVisibility,
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

  return (
    open && (
      <div>
        <div className="p-2">
          <div
            className="flex h-auto w-auto cursor-pointer flex-row gap-2 rounded-md border-f1-border p-3 text-f1-foreground shadow-md hover:bg-f1-background-secondary"
            onClick={onClick}
          >
            <ModuleAvatar
              // TODO remove icon when the prop will be deprecated
              {...("icon" in props
                ? { icon: props.icon }
                : { module: props.module })}
              size="lg"
            />
            <div className="flex flex-1 flex-col">
              <div>
                <h3 className="text-lg font-medium">{title}</h3>
                <p className="text-f1-foreground-secondary">{description}</p>
              </div>
            </div>
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
    )
  )
}
