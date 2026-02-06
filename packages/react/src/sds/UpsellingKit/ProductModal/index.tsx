import { useState } from "react"

import { ModuleId } from "@/components/avatars/F0AvatarModule"
import { ButtonVariant, F0Button } from "@/components/F0Button"
import { IconType } from "@/components/F0Icon"
import { Variant } from "@/components/tags/F0TagStatus"

import { ProductBlankslate } from "../ProductBlankslate"
import { UpsellRequestResponseDialog } from "../UpsellRequestResponseDialog"
import { CustomModal } from "./components/CustomModal"

type ProductModalProps = {
  isOpen: boolean
  onClose: () => void
  modalTitle: string
  modalModule: ModuleId
  title: string
  image: string
  benefits: string[]
  errorMessage: {
    title: string
    description: string
  }
  successMessage: {
    title: string
    description: string
    buttonLabel?: string
    buttonOnClick?: () => void
  }
  loadingState: {
    label: string
  }
  closeLabel: string
  nextSteps?: {
    title: string
    items: {
      text: string
      isCompleted?: boolean
    }[]
  }
  tag?: {
    label: string
    icon: IconType
  }
  promoTag?: {
    label: string
    variant?: Variant
  }
  primaryAction?: Action
  secondaryAction?: Action
  portalContainer?: HTMLElement | null
  showResponseDialog?: boolean
}

type Action = {
  label: string
  onClick: () => void
  icon?: IconType
  variant?: ButtonVariant
  size?: "md" | "lg"
  loading?: boolean
}
type ResponseStatus = "success" | "error" | null

export function ProductModal({
  isOpen,
  onClose,
  title,
  image,
  benefits,
  errorMessage,
  successMessage,
  loadingState,
  nextSteps,
  closeLabel,
  primaryAction,
  modalTitle,
  modalModule,
  secondaryAction,
  portalContainer,
  tag,
  promoTag,
  showResponseDialog = true,
}: ProductModalProps) {
  const [isModalOpen, setIsOpen] = useState(isOpen)
  const [responseStatus, setResponseStatus] = useState<ResponseStatus>(null)
  const [internalLoading, setInternalLoading] = useState(false)

  const handleClick = async () => {
    if (primaryAction?.onClick) {
      setInternalLoading(true)
      try {
        await primaryAction.onClick()
        setIsOpen(false)
        if (showResponseDialog) {
          setResponseStatus("success")
        }
      } catch {
        if (showResponseDialog) {
          setResponseStatus("error")
        }
      } finally {
        setInternalLoading(false)
      }
    }
  }

  const handleClose = () => {
    setIsOpen(false)
    onClose?.()
  }

  const isLoading = internalLoading

  return (
    <>
      <CustomModal
        isOpen={isModalOpen}
        onClose={handleClose}
        title={modalTitle}
        module={modalModule}
        portalContainer={portalContainer}
      >
        <div className="pb-4 pl-4">
          <ProductBlankslate
            title={title}
            image={image}
            benefits={benefits}
            withShadow={false}
            tag={tag}
            promoTag={promoTag}
            actions={
              <div className="flex gap-3">
                {primaryAction && (
                  <F0Button
                    variant={primaryAction.variant}
                    label={isLoading ? loadingState.label : primaryAction.label}
                    icon={primaryAction.icon || undefined}
                    onClick={handleClick}
                    loading={primaryAction.loading}
                    size={primaryAction.size}
                  />
                )}
                {secondaryAction && (
                  <F0Button
                    onClick={secondaryAction.onClick}
                    label={secondaryAction.label}
                    variant={secondaryAction.variant}
                    size={secondaryAction.size}
                    icon={secondaryAction.icon}
                  />
                )}
              </div>
            }
          />
        </div>
      </CustomModal>

      {responseStatus && showResponseDialog && (
        <UpsellRequestResponseDialog
          open={true}
          onClose={() => {
            handleClose()
            setResponseStatus(null)
          }}
          success={responseStatus === "success"}
          errorMessage={errorMessage}
          successMessage={successMessage}
          nextSteps={nextSteps}
          closeLabel={closeLabel}
          portalContainer={portalContainer}
        />
      )}
    </>
  )
}
