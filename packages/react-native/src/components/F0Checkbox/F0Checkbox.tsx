import React, { useCallback } from "react"
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
 * @example
 * <F0Checkbox label="Accept terms" checked={accepted} onValueChange={setAccepted} />
 * <F0Checkbox label="Select all" indeterminate onValueChange={handleSelectAll} />
 * <F0Checkbox label="Disabled option" checked disabled />
 */
export const F0Checkbox = React.memo(function F0Checkbox({
  checked = false,
  indeterminate = false,
  onValueChange,
  disabled = false,
  label,
  hideLabel = false,
  testID,
}: F0CheckboxProps) {
  const isChecked = indeterminate ? true : checked

  const handlePress = useCallback(() => {
    if (disabled) return
    onValueChange?.(!checked)
  }, [disabled, onValueChange, checked])

  return (
    <PressableFeedback
      onPress={handlePress}
      disabled={disabled}
      accessibilityRole="checkbox"
      accessibilityState={{
        checked: indeterminate ? "mixed" : checked,
        disabled,
      }}
      accessibilityLabel={label}
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
