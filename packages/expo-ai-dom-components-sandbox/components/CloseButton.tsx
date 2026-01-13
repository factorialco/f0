import React, { useState } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const styles = StyleSheet.create({
  button: {
    width: 32, // h-8 = 32px (size='md')
    height: 32, // h-8 = 32px (size='md')
    borderRadius: 10, // rounded = 0.625rem = 10px
    borderWidth: 1,
    borderColor: 'rgba(5, 35, 72, 0.2)', // f1-border = hsl(var(--neutral-30))
    backgroundColor: 'rgba(255, 255, 255, 0.6)', // f1-background-inverse-secondary = hsl(var(--white-60))
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0, // round: p-0
  },
  buttonPressed: {
    backgroundColor: 'rgba(5, 31, 81, 0.04)', // f1-background-tertiary = hsl(var(--neutral-5))
    borderColor: 'rgba(5, 35, 72, 0.14)', // border-opacity-70 = 0.2 * 0.7
  },
  icon: {
    color: 'rgba(13, 22, 38, 1)', // f1-icon-bold = hsl(var(--neutral-100))
  },
})

interface CloseButtonProps {
  onPress: () => void
  accessibilityLabel?: string
}

/**
 * Close button matching the exact style from the mobile app
 * Replicates Button from @factorialco/f0-react-native with:
 * - variant='outline'
 * - size='md'
 * - round
 * - hideLabel
 * - icon={AppIcons.Cross}
 */
export const CloseButton: React.FC<CloseButtonProps> = ({
  onPress,
  accessibilityLabel = 'Close chat',
}) => {
  const [isPressed, setIsPressed] = useState(false)

  return (
    <View>
      <TouchableOpacity
        style={[styles.button, isPressed && styles.buttonPressed]}
        onPress={onPress}
        onPressIn={() => setIsPressed(true)}
        onPressOut={() => setIsPressed(false)}
        accessibilityLabel={accessibilityLabel}
        accessibilityRole="button"
        activeOpacity={1} // Use custom pressed state instead of default opacity
      >
        <Ionicons name="close" size={20} color={styles.icon.color} />
      </TouchableOpacity>
    </View>
  )
}
