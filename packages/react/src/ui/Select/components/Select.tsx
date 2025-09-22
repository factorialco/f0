import * as SelectPrimitive from "@radix-ui/react-select"
import * as React from "react"
import { useState } from "react"
import { SelectContext } from "../SelectContext.tsx"

type SelectProps = React.ComponentProps<typeof SelectPrimitive.Root> & {
  asList?: boolean
}
/**
 * Select Root component
 */
const Select = (props: SelectProps) => {
  // If open prop is not provided, we'll manage it internally
  const [internalOpen, setInternalOpen] = useState(props.asList ? true : false)

  // Use either the controlled open state from props or the internal state
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

  return (
    <div
      className="[&>div]:!relative"
      onClick={(e) => {
        e.preventDefault()
      }}
    >
      <SelectPrimitive.Root
        {...props}
        open={isOpen}
        onOpenChange={handleOpenChange}
      >
        <SelectContext.Provider
          value={{
            value: props.value,
            open: isOpen,
            asList: props.asList,
          }}
        >
          {props.children}
        </SelectContext.Provider>
      </SelectPrimitive.Root>
    </div>
  )
}
Select.displayName = SelectPrimitive.Root.displayName

export { Select }
