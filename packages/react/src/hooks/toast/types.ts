import { F0ToastVariant, F0ToastProps } from "@/internal/components/Toast/types"

export type ToastId = string

export type ToastOptions = {
  /**
   * The title of the toast
   */
  title?: string
  /**
   * The description of the toast
   */
  description?: string
  /**
   * The variant of the toast
   */
  variant?: F0ToastVariant

  /**
   * The actions to display in the toast
   */
  actions?: F0ToastProps["actions"]
  /**
   * Optional id for the toast. If not provided, a random id will be generated.
   */
  id?: ToastId
} & (
  | {
      /**
       * The duration of the toast in milliseconds (if not provided, the toast will stay open until the user closes it)
       * @default 5000
       */
      duration?: number
      /**
       * Whether the toast should persist until the user closes it
       */
      persistent?: undefined
    }
  | {
      duration?: undefined
      persistent: true
    }
)

/**
 * A toast as held by the store: the public options resolved into the props the
 * `F0Toast` component renders, plus a stable `id` and an `onClose` callback.
 */
export type ToastProviderItem = F0ToastProps & {
  id: ToastId
  onClose: () => void
}
