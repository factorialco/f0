import { useEffect } from 'react'
import { Keyboard, Platform } from 'react-native'
import { useSharedValue, withTiming } from 'react-native-reanimated'
import { useCallback } from 'react'

/**
 * Hook to handle keyboard animations using React Native's Keyboard API.
 * Provides smooth keyboard height tracking that works consistently
 * across iOS and Android.
 *
 * This is a simplified version for Expo that uses the standard Keyboard API
 * instead of react-native-keyboard-controller.
 *
 * @returns Object with keyboard height as a shared value for animations and control functions
 */
export const useKeyboardHandling = () => {
  const height = useSharedValue(0)

  useEffect(() => {
    const showSubscription = Keyboard.addListener(
      Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow',
      (event) => {
        height.value = withTiming(event.endCoordinates.height, {
          duration: Platform.OS === 'ios' ? event.duration || 250 : 250,
        })
      }
    )

    const hideSubscription = Keyboard.addListener(
      Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide',
      () => {
        height.value = withTiming(0, { duration: 250 })
      }
    )

    return () => {
      showSubscription.remove()
      hideSubscription.remove()
    }
  }, [height])

  /**
   * Dismiss the keyboard and reset the height.
   */
  const dismissKeyboard = useCallback(() => {
    Keyboard.dismiss()
    // Animate the height back to 0 smoothly
    height.value = withTiming(0, { duration: 250 })
  }, [height])

  /**
   * Reset the keyboard height without dismissing the keyboard.
   * Useful for animation purposes when keyboard state needs to be reset.
   */
  const resetHeight = useCallback(() => {
    height.value = withTiming(0, { duration: 250 })
  }, [height])

  return { height, dismissKeyboard, resetHeight }
}
