import { useCallback, useRef, useState } from "react"

/**
 * Callback to update form state in the hook
 */
export type F0FormStateCallback = (state: {
  isSubmitting: boolean
  hasErrors: boolean
}) => void

/**
 * Options for setValue
 */
export interface F0FormSetValueOptions {
  shouldValidate?: boolean
  shouldDirty?: boolean
}

/**
 * Interface for the F0Form ref methods
 */
export interface F0FormRef {
  /**
   * Programmatically submit the form.
   * Will only call onSubmit if validation passes.
   * @returns Promise that resolves when submission completes (or rejects on validation failure)
   */
  submit: () => Promise<void>
  /**
   * Reset the form to its default values
   */
  reset: () => void
  /**
   * Check if the form has unsaved changes
   */
  isDirty: () => boolean
  /**
   * Get the current form values (including unsaved changes)
   */
  getValues: () => Record<string, unknown>
  /**
   * Set a single field value programmatically
   */
  setValue: (
    fieldName: string,
    value: unknown,
    options?: F0FormSetValueOptions
  ) => void
  /**
   * Set multiple field values at once
   */
  setValues: (
    values: Record<string, unknown>,
    options?: F0FormSetValueOptions
  ) => void
  /**
   * Manually trigger validation for a specific field or all fields
   * @returns true if validation passes
   */
  trigger: (fieldName?: string) => Promise<boolean>
  /**
   * Get current validation errors as a map of field name to error message
   */
  getErrors: () => Record<string, string>
  /**
   * Get the list of field names in the form
   */
  getFieldNames: () => string[]
  /**
   * Internal: Set the state callback for reactive updates
   * @internal
   */
  _setStateCallback: (callback: F0FormStateCallback) => void
}

/**
 * Return type for the useF0Form hook
 */
export interface UseF0FormReturn {
  /**
   * Ref to pass to the F0Form component's `formRef` prop
   */
  formRef: React.MutableRefObject<F0FormRef | null>
  /**
   * Programmatically submit the form.
   * Will only trigger onSubmit if all validations pass.
   * @returns Promise that resolves when submission completes
   */
  submit: () => Promise<void>
  /**
   * Reset the form to its default values
   */
  reset: () => void
  /**
   * Check if the form has unsaved changes
   */
  isDirty: () => boolean
  /**
   * Get the current form values (including unsaved changes)
   */
  getValues: () => Record<string, unknown>
  /**
   * Set a single field value programmatically
   */
  setValue: (
    fieldName: string,
    value: unknown,
    options?: F0FormSetValueOptions
  ) => void
  /**
   * Set multiple field values at once
   */
  setValues: (
    values: Record<string, unknown>,
    options?: F0FormSetValueOptions
  ) => void
  /**
   * Manually trigger validation for a specific field or all fields
   * @returns true if validation passes
   */
  trigger: (fieldName?: string) => Promise<boolean>
  /**
   * Get current validation errors as a map of field name to error message
   */
  getErrors: () => Record<string, string>
  /**
   * Get the list of field names in the form
   */
  getFieldNames: () => string[]
  /**
   * Whether the form is currently submitting
   */
  isSubmitting: boolean
  /**
   * Whether the form has validation errors
   */
  hasErrors: boolean
}

/**
 * Hook to control F0Form programmatically.
 *
 * Useful when you need to submit the form from outside the component,
 * such as when the form is inside a dialog and the submit button is
 * in the dialog's footer.
 *
 * @example
 * ```tsx
 * import { useF0Form, F0Form } from "@factorialco/factorial-one/experimental"
 *
 * function FormInDialog() {
 *   const { formRef, submit } = useF0Form()
 *   const [open, setOpen] = useState(false)
 *
 *   return (
 *     <Dialog open={open} onOpenChange={setOpen}>
 *       <DialogContent>
 *         <F0Form
 *           formRef={formRef}
 *           name="my-form"
 *           schema={schema}
 *           defaultValues={defaultValues}
 *           onSubmit={async (data) => {
 *             // Handle submission
 *             setOpen(false)
 *             return { success: true }
 *           }}
 *         />
 *         <DialogFooter>
 *           <Button onClick={() => setOpen(false)}>Cancel</Button>
 *           <Button onClick={submit}>Save</Button>
 *         </DialogFooter>
 *       </DialogContent>
 *     </Dialog>
 *   )
 * }
 * ```
 */
export function useF0Form(): UseF0FormReturn {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [hasErrors, setHasErrors] = useState(false)

  // Store the callback in a ref so F0Form can access it
  const stateCallbackRef = useRef<F0FormStateCallback>((state) => {
    setIsSubmitting(state.isSubmitting)
    setHasErrors(state.hasErrors)
  })

  // Create a custom ref that includes the state callback
  const customFormRef = useRef<F0FormRef | null>(null)

  // Proxy ref that attaches the state callback
  const proxyRef = useRef({
    get current() {
      return customFormRef.current
    },
    set current(value: F0FormRef | null) {
      customFormRef.current = value
      if (value) {
        value._setStateCallback(stateCallbackRef.current)
      }
    },
  })

  const submit = useCallback(async () => {
    if (!customFormRef.current) {
      console.warn("useF0Form: formRef is not attached to an F0Form component")
      return
    }
    return customFormRef.current.submit()
  }, [])

  const reset = useCallback(() => {
    if (!customFormRef.current) {
      console.warn("useF0Form: formRef is not attached to an F0Form component")
      return
    }
    customFormRef.current.reset()
  }, [])

  const isDirty = useCallback(() => {
    if (!customFormRef.current) {
      console.warn("useF0Form: formRef is not attached to an F0Form component")
      return false
    }
    return customFormRef.current.isDirty()
  }, [])

  const getValues = useCallback(() => {
    if (!customFormRef.current) {
      console.warn("useF0Form: formRef is not attached to an F0Form component")
      return {}
    }
    return customFormRef.current.getValues()
  }, [])

  const setValue = useCallback(
    (fieldName: string, value: unknown, options?: F0FormSetValueOptions) => {
      if (!customFormRef.current) {
        console.warn(
          "useF0Form: formRef is not attached to an F0Form component"
        )
        return
      }
      customFormRef.current.setValue(fieldName, value, options)
    },
    []
  )

  const setValues = useCallback(
    (values: Record<string, unknown>, options?: F0FormSetValueOptions) => {
      if (!customFormRef.current) {
        console.warn(
          "useF0Form: formRef is not attached to an F0Form component"
        )
        return
      }
      customFormRef.current.setValues(values, options)
    },
    []
  )

  const trigger = useCallback(async (fieldName?: string) => {
    if (!customFormRef.current) {
      console.warn("useF0Form: formRef is not attached to an F0Form component")
      return false
    }
    return customFormRef.current.trigger(fieldName)
  }, [])

  const getErrors = useCallback(() => {
    if (!customFormRef.current) {
      console.warn("useF0Form: formRef is not attached to an F0Form component")
      return {}
    }
    return customFormRef.current.getErrors()
  }, [])

  const getFieldNames = useCallback(() => {
    if (!customFormRef.current) {
      console.warn("useF0Form: formRef is not attached to an F0Form component")
      return []
    }
    return customFormRef.current.getFieldNames()
  }, [])

  return {
    formRef: proxyRef.current as React.MutableRefObject<F0FormRef | null>,
    submit,
    reset,
    isDirty,
    getValues,
    setValue,
    setValues,
    trigger,
    getErrors,
    getFieldNames,
    isSubmitting,
    hasErrors,
  }
}
