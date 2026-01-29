import { AlertAvatarProps } from "@/components/avatars/F0AvatarAlert"
import { IconType } from "@/components/F0Icon"
import type { TestableProps } from "@/global.types"
import { LoadingStateProps } from "@/components/UpsellingKit/UpsellingButton"
import {
  ErrorMessageProps,
  NextStepsProps,
  SuccessMessageProps,
} from "@/components/UpsellingKit/UpsellRequestResponseDialog"

export type ActionProps = {
  /**
   * The label of the action
   */
  label: string

  /**
   * The click handler of the action
   */
  onClick: () => void

  /**
   * The variant of the action
   * @default "default"
   * @optional
   */
  variant?: "default" | "outline" | "promote"

  /**
   * The icon of the action
   * @optional
   */
  icon?: IconType
} & (
  | {
      /**
       * The type of the action
       */
      type: "upsell"
      /**
       * The error message of the action
       */
      errorMessage: ErrorMessageProps
      /**
       * The success message of the action
       */
      successMessage: SuccessMessageProps

      /**
       * The loading state of the action
       */
      loadingState: LoadingStateProps

      /**
       * The next steps of the action
       */
      nextSteps: NextStepsProps

      /**
       * The next steps of the action
       */
      closeLabel: string
    }
  | {
      /**
       * The type of the action
       */
      type?: "default"
    }
)

export type OneEmptyStateProps = TestableProps & {
  /**
   * The title of the empty state
   */
  title: string

  /**
   * If defined, a description will be displayed in the empty state
   * @optional
   */
  description?: string

  /**
   * An array of action objects to display as buttons in the empty state.
   * Each action represents a user-interactable option, such as "Retry" or "Go Back",
   * and can include a label, click handler, optional icon, and button variant.
   * @optional
   */
  actions?: ActionProps[]
} & (
  | {
      /**
       * The variant of the empty state
       * @optional
       */
      variant?: "default"

      /**
       * An icon will be displayed in the empty state.
       * emoji string
       */
      emoji?: string
    }
  | {
      /**
       * The variant of the empty state
       * @optional
       */
      variant: Exclude<AlertAvatarProps["type"], "positive">
      emoji?: never
    }
)
