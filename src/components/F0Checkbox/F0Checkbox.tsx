import React, { useCallback, useState } from "react"
import { View } from "react-native"

import { Check, Minus } from "../../icons/app"
import { F0Icon } from "../primitives/F0Icon"
import { F0Text } from "../primitives/F0Text"
import { PressableFeedback } from "../primitives/PressableFeedback"

import { checkboxBoxVariants, checkboxRowVariants } from "./F0Checkbox.styles"
import type { F0CheckboxProps } from "./F0Checkbox.types"

/**
 * F0Checkbox - Accessible checkbox primitive for the F0 React Native system.
 *
 * Supports checked, indeterminate, and disabled states. Renders an optional
 * visible label alongside the checkbox box, and always exposes an accessible
 * label for screen readers.
 *
 * Can be used in **controlled** mode (pass `checked` + `onValueChange`) or
 * **uncontrolled** mode (omit `checked` — internal state is managed automatically).
 *
 * @example
 * // Controlled
 * <F0Checkbox label="Accept terms" checked={accepted} onValueChange={setAccepted} />
 * // Uncontrolled
 * <F0Checkbox label="Accept terms" onValueChange={(v) => console.log(v)} />
 * <F0Checkbox label="Select all" indeterminate onValueChange={handleSelectAll} />
 */
export const F0Checkbox = React.memo(function F0Checkbox({
  checked: checkedProp,
  indeterminate = false,
  onValueChange,
  disabled = false,
  label,
  hideLabel = false,
  accessibilityLabel,
  testID,
}: F0CheckboxProps) {
  const isControlled = checkedProp !== undefined
  const [internalChecked, setInternalChecked] = useState(false)
  const checked = isControlled ? checkedProp : internalChecked
  const isChecked = indeterminate ? true : checked

  const handlePress = useCallback(() => {
    if (disabled) return
    const next = !checked
    if (!isControlled) setInternalChecked(next)
    onValueChange?.(next)
  }, [disabled, onValueChange, checked, isControlled])

  return (
    <PressableFeedback
      onPress={handlePress}
      disabled={disabled}
      accessibilityRole="checkbox"
      accessibilityState={{
        checked: indeterminate ? "mixed" : checked,
        disabled,
      }}
      accessibilityLabel={accessibilityLabel ?? label}
      testID={testID}
      variant="highlight"
    >
      <View className={checkboxRowVariants()}>
        <View className={checkboxBoxVariants({ checked: isChecked, disabled })}>
          {isChecked && (
            <F0Icon
              icon={indeterminate ? Minus : Check}
              size="sm"
              color="inverse"
            />
          )}
        </View>
        {label && !hideLabel && (
          <F0Text
            variant="body-sm-default"
            color={disabled ? "secondary" : "default"}
          >
            {label}
          </F0Text>
        )}
      </View>
    </PressableFeedback>
  )
})

F0Checkbox.displayName = "F0Checkbox"
