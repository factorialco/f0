import { useEffect, useState } from "react"
import { SelectContext, SelectContextType } from "../SelectContext.tsx"
import * as SelectPrimitive from "./radix-ui"
import { SelectPrimitiveProps } from "./radix-ui/select.tsx"

type SelectOption = {
  value: string
  label: string
}

export type SelectProps = SelectPrimitiveProps & {
  asList?: boolean
  placeholder?: string
  options?: SelectOption[]
}

/**
 * Select Root component
 */

const Select = <T extends string = string>(props: SelectProps) => {
  type Value = Exclude<typeof props.value, undefined>
  const [internalOpen, setInternalOpen] = useState(props.asList ? true : false)

  const isOpen = props.asList
    ? true
    : props.open !== undefined
      ? props.open
      : internalOpen

  const handleOpenChange = (open: boolean) => {
    // Update internal state if we're not in controlled mode
    if (props.open === undefined) {
      setInternalOpen(open)
    }

    // Call the onOpenChange prop if provided
    props.onOpenChange?.(open)
  }

  const toArray = (value: string | string[] | undefined) => {
    if (value === undefined) {
      return []
    }
    return Array.isArray(value) ? value : [value]
  }

  const [localValue, setLocalValue] = useState(toArray(props.value))

  /**
   * We need to update the local value when the value prop changes
   * Internally we use always an array of values, so we need to convert the value to an array
   */
  useEffect(
    () => {
      setLocalValue(toArray(props.value))
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps -- we are checking deeply the value
    [JSON.stringify(props.value)]
  )

  const contextValue: SelectContextType = {
    value: localValue,
    open: isOpen,
    asList: props.asList,
    multiple: props.multiple || false,
  } as SelectContextType

  const commonProps = {
    ...props,
    open: isOpen,
    onOpenChange: handleOpenChange,
    children: (
      <SelectContext.Provider value={contextValue}>
        {props.children}
      </SelectContext.Provider>
    ),
  }

  const handleValueChange = (value: Value) => {
    setLocalValue(toArray(value))
    if (props.multiple) {
      props.onValueChange?.(toArray(value) as T[])
    } else {
      props.onValueChange?.(value as T)
    }
  }

  const primitiveProps = props.multiple
    ? {
        ...commonProps,
        multiple: true as const,
        value: localValue,
        defaultValue: props.defaultValue,
        onValueChange: handleValueChange,
      }
    : {
        ...commonProps,
        multiple: false as const,
        value: localValue[0],
        defaultValue: props.defaultValue,
        onValueChange: handleValueChange,
      }

  return (
    <div className="[&>div]:!relative">
      <SelectPrimitive.Root {...primitiveProps} />
    </div>
  )
}
Select.displayName = SelectPrimitive.Root.displayName

export { Select }
