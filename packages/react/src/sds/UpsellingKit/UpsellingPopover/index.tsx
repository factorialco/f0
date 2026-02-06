import { PopoverContentProps } from "@radix-ui/react-popover"
import { useState } from "react"

import { F0Button, F0ButtonProps } from "@/components/F0Button"
import { IconType } from "@/components/F0Icon"
import { Popover, PopoverContent, PopoverTrigger } from "@/ui/popover"

import { Upsell } from "../../../icons/app"
import { Action, ProductWidget } from "../ProductWidget"
import { UpsellRequestResponseDialog } from "../UpsellRequestResponseDialog"

type UpsellingPopoverProps = {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  label: string
  variant: F0ButtonProps["variant"]
  size?: F0ButtonProps["size"]
  side?: PopoverContentProps["side"]
  align?: PopoverContentProps["align"]
  icon?: IconType
  showIcon?: boolean
  mediaUrl: string
  title: string
  description: string
  width?: string
  trackVisibility?: (visible: boolean) => void
  actions?: Action[]
  onClick?: () => void
  hideLabel?: boolean
}

type ResponseStatus = "success" | "error" | null

export function UpsellingPopover({
  isOpen,
  setIsOpen,
  label,
  variant = "promote",
  size = "md",
  showIcon = true,
  side = "right",
  align = "center",
  icon = Upsell,
  mediaUrl,
  title,
  description,
  width = "300px",
  trackVisibility,
  actions,
  onClick,
  hideLabel = false,
}: UpsellingPopoverProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [responseStatus, setResponseStatus] = useState<ResponseStatus>(null)
  const [currentAction, setCurrentAction] = useState<Action | null>(null)

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open)
    if (onClick) {
      onClick()
    }
  }

  const handleUpsellRequest = async (action: Action) => {
    if (action.type !== "upsell") return

    setCurrentAction(action)

    try {
      await action.onClick()
      if (action.showConfirmation) {
        setIsModalOpen(true)
        setResponseStatus("success")
      }
    } catch {
      setIsModalOpen(true)
      setResponseStatus("error")
    }
  }

  const handleModalClose = () => {
    setResponseStatus(null)
    setIsModalOpen(false)
    setCurrentAction(null)
    setIsOpen(false)
  }

  const shouldShowPopover = isOpen && !isModalOpen

  const modifiedActions = actions?.map((action) => {
    if (action.type === "upsell") {
      return {
        ...action,
        onClick: () => handleUpsellRequest(action),
      }
    }
    return action
  })

  return (
    <>
      <Popover open={shouldShowPopover} onOpenChange={handleOpenChange}>
        <PopoverTrigger asChild>
          <F0Button
            variant={variant}
            label={label}
            size={size}
            icon={showIcon ? icon : undefined}
            onClick={() => setIsOpen(isOpen)}
            hideLabel={hideLabel}
          />
        </PopoverTrigger>
        <PopoverContent
          side={side}
          align={align}
          className="w-fit border-none bg-transparent p-2 shadow-none"
        >
          <ProductWidget
            mediaUrl={mediaUrl}
            title={title}
            description={description}
            onClose={() => setIsOpen(false)}
            dismissible={false}
            width={width}
            trackVisibility={trackVisibility}
            actions={modifiedActions}
            showConfirmation={false}
          />
        </PopoverContent>
      </Popover>

      {currentAction?.type === "upsell" &&
        currentAction.showConfirmation &&
        responseStatus && (
          <UpsellRequestResponseDialog
            open={true}
            onClose={handleModalClose}
            success={responseStatus === "success"}
            errorMessage={currentAction.errorMessage}
            successMessage={currentAction.successMessage}
            nextSteps={currentAction.nextSteps}
            closeLabel={currentAction.closeLabel}
            portalContainer={null}
          />
        )}
    </>
  )
}
