import { FC, ReactNode } from "react"

import { F0Dialog } from "@/components/F0Dialog"
import {
  DialogWidth,
  F0DialogPrimaryAction,
  F0DialogPrimaryActionItem,
  F0DialogSecondaryAction,
} from "@/components/F0Dialog/types"

import { WizardStepItem } from "../WizardStepper"
import { F0WizardContent } from "./F0WizardContent"

export interface F0WizardProps {
  // Whether the wizard is open
  isOpen: boolean
  // Callback when wizard is closed
  onClose: () => void
  // Title of the wizard
  title?: string
  // Description of the wizard
  description?: string
  // The width of the wizard dialog
  width?: DialogWidth
  // Primary action for the wizard footer
  primaryAction?: F0DialogPrimaryAction | F0DialogPrimaryActionItem[]
  // Secondary action for the wizard footer (e.g., "Back" button)
  secondaryAction?: F0DialogSecondaryAction
  // Steps configuration for the wizard
  steps: WizardStepItem[]
  // ID of the current step
  currentStepId: string
  // Content to render in the wizard
  children: ReactNode
}

export const F0Wizard: FC<F0WizardProps> = ({
  isOpen,
  onClose,
  title,
  description,
  width = "lg",
  primaryAction,
  secondaryAction,
  steps,
  currentStepId,
  children,
}) => {
  return (
    <F0Dialog
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      description={description}
      width={width}
      position="center"
      primaryAction={primaryAction}
      secondaryAction={secondaryAction}
      disableContentPadding
    >
      <F0WizardContent steps={steps} currentStepId={currentStepId}>
        {children}
      </F0WizardContent>
    </F0Dialog>
  )
}

F0Wizard.displayName = "F0Wizard"
