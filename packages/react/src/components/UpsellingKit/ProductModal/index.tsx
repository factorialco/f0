import { Button } from "@/components/Actions/Button"
import { IconType } from "@/components/Utilities/Icon"
import { ButtonVariant } from "@/ui/button"
import { useState } from "react"
import { ProductBlankslate } from "../ProductBlankslate"
import { UpsellRequestResponseDialog } from "../UpsellRequestResponseDialog"
import { CustomModal } from "./components/CustomModal"

type ProductModalProps = {
  isOpen: boolean
  onClose: () => void
  modalTitle: string
  modalIcon: IconType
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
    buttonLabel: string
    buttonOnClick: () => void
  }
  loadingState: {
    label: string
  }
  nextSteps: {
    title: string
    items: {
      text: string
      isCompleted?: boolean
    }[]
  }
  closeLabel: string
  primaryAction?: Action
  secondaryAction?: Action
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
  modalIcon,
  secondaryAction,
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
        setResponseStatus("success")
      } catch {
        setResponseStatus("error")
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
        icon={modalIcon}
      >
        <div className="pb-4 pl-4">
          <ProductBlankslate
            title={title}
            image={image}
            benefits={benefits}
            withShadow={false}
            actions={
              <div className="flex gap-3">
                {primaryAction && (
                  <Button
                    variant={primaryAction.variant}
                    label={isLoading ? loadingState.label : primaryAction.label}
                    icon={primaryAction.icon || undefined}
                    onClick={handleClick}
                    loading={primaryAction.loading}
                    size={primaryAction.size}
                  />
                )}
                {secondaryAction && (
                  <Button
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

      {responseStatus && (
        <UpsellRequestResponseDialog
          open={true}
          onClose={() => {
            setResponseStatus(null)
          }}
          success={responseStatus === "success"}
          errorMessage={errorMessage}
          successMessage={successMessage}
          nextSteps={nextSteps}
          closeLabel={closeLabel}
        />
      )}
    </>
  )
}
