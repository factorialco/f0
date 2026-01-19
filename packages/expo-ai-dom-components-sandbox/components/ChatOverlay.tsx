import React, { useEffect, useState } from 'react'
import {
  View,
  StyleSheet,
  Dimensions,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated'
import AiChatSandbox from './AiChatSandbox'
import { AiAgentBackground } from './AiAgentBackground'
import Wrapper from './Wrapper'
import { CloseButton } from './CloseButton'
import { AiAgentChatSkeleton } from './AiAgentChatSkeleton'
import { useKeyboardHandling } from '../hooks/useKeyboardHandling'
import { getAiAgentChatKey } from '../lib/aiAgentChatInstance'

const { height: SCREEN_HEIGHT } = Dimensions.get('window')

// Dimensions matching mobile app
const dimensions = {
  s8: 8,
  s12: 12,
  s20: 20,
}

const styles = StyleSheet.create({
  fullScreen: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 9999,
    // Ensure it doesn't interfere when hidden
    elevation: 9999, // Android-specific z-index
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'transparent',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: dimensions.s20,
    paddingTop: dimensions.s12,
    paddingBottom: dimensions.s8,
    backgroundColor: 'transparent',
  },
  wrapper: {
    flex: 1,
    height: '100%',
    backgroundColor: 'transparent',
  },
})

interface ChatOverlayProps {
  visible: boolean
  onClose: () => void
}

export const ChatOverlay: React.FC<ChatOverlayProps> = ({
  visible,
  onClose,
}) => {
  const [hasBeenShown, setHasBeenShown] = useState(false)
  const [domComponentReady, setDomComponentReady] = useState(false)

  // Get safe area insets manually to avoid SafeAreaView automatic behavior
  const insets = useSafeAreaInsets()

  // Animation values for slide from bottom
  const translateY = useSharedValue(SCREEN_HEIGHT)
  const backdropOpacity = useSharedValue(0)

  // Keyboard handling hook - provides animated keyboard height
  const { height: keyboardHeight, dismissKeyboard } = useKeyboardHandling()

  useEffect(() => {
    const ANIMATION_DURATION = {
      show: 300,
      hide: 250,
    }

    const platformAnimations = {
      ios: {
        show: () => {
          translateY.value = withTiming(0, {
            duration: ANIMATION_DURATION.show,
          })
          backdropOpacity.value = withTiming(1, {
            duration: ANIMATION_DURATION.show,
          })
        },
        hide: () => {
          dismissKeyboard()
          translateY.value = withTiming(SCREEN_HEIGHT, {
            duration: ANIMATION_DURATION.hide,
          })
          backdropOpacity.value = withTiming(0, {
            duration: ANIMATION_DURATION.hide,
          })
        },
      },
      android: {
        show: () => {
          // On Android: No backdrop animation (it's transparent)
          backdropOpacity.value = 0
          translateY.value = withTiming(0, {
            duration: ANIMATION_DURATION.show,
          })
        },
        hide: () => {
          // On Android: Force backdrop to stay at 0, just slide modal down
          backdropOpacity.value = 0
          translateY.value = withTiming(SCREEN_HEIGHT, {
            duration: ANIMATION_DURATION.hide,
          })
        },
      },
    }

    const platform = Platform.OS as keyof typeof platformAnimations

    if (visible) {
      if (!hasBeenShown) {
        setHasBeenShown(true)
        // Reset domComponentReady when opening
        setDomComponentReady(false)
      }
      platformAnimations[platform].show()
    } else {
      platformAnimations[platform].hide()
      // Reset when closing
      setDomComponentReady(false)
    }
  }, [visible, hasBeenShown, translateY, backdropOpacity, dismissKeyboard])

  // Animated style for the backdrop
  const backdropStyle = useAnimatedStyle(() => {
    return {
      opacity: backdropOpacity.value,
    }
  })

  // Animated style for the container
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    }
  })

  // Animated style for keyboard offset - creates a view that pushes content up
  const keyboardOffsetStyle = useAnimatedStyle(() => {
    return {
      // Apply offset for both iOS and Android. 
      // Modern Android with edgeToEdgeEnabled needs this as the window doesn't always resize automatically.
      height: Math.abs(keyboardHeight.value),
    }
  })

  const handleDismissKeyboard = () => {
    dismissKeyboard()
  }

  const isIOS = Platform.OS === 'ios'

  // Don't render anything until first shown - performance optimization
  if (!hasBeenShown) {
    return null
  }

  return (
    <View
      style={[
        styles.fullScreen,
        // Completely hide from layout when not visible (Android fix)
        { display: visible ? 'flex' : 'none' },
      ]}
      pointerEvents={visible ? 'auto' : 'none'}
    >
      {/* Backdrop - tap to dismiss keyboard (iOS only, Android doesn't need visual backdrop) */}
      {isIOS && (
        <TouchableWithoutFeedback onPress={handleDismissKeyboard}>
          <Animated.View style={[styles.backdrop, backdropStyle]} />
        </TouchableWithoutFeedback>
      )}

      {/* Android: No backdrop needed - keyboard dismissal handled by back button */}

      {/* Modal Content */}
      <Animated.View style={[styles.container, animatedStyle]}>
        {/* Gradient Background */}
        <AiAgentBackground />

        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            paddingTop: insets.top,
          }}
        >
          <View style={[styles.header, { backgroundColor: 'transparent' }]}>
            <CloseButton onPress={onClose} />
          </View>
          <Wrapper>
            {/* Skeleton Loading Animation - shown while DOM component is initializing */}
            {!domComponentReady && visible && <AiAgentChatSkeleton />}

            {/* DOM Component - always mounted to preserve chat state */}
            {/* Using a consistent key ensures React doesn't remount the component when opening/closing */}
            {/* Hidden when overlay is closed but still mounted to preserve state */}
            <View
              style={{
                flex: 1,
                // Use opacity instead of display to avoid layout shifts that interrupt animations
                opacity: domComponentReady && visible ? 1 : 0,
                pointerEvents: domComponentReady && visible ? 'auto' : 'none',
              }}
            >
              <AiChatSandbox
                key={getAiAgentChatKey()}
                onLoad={() => {
                  // Simulate DOM component ready after a short delay
                  setTimeout(() => {
                    setDomComponentReady(true)
                  }, 500)
                }}
              />
            </View>
            {/* Animated view that pushes content up when keyboard appears (iOS only) */}
            <Animated.View style={keyboardOffsetStyle} />
          </Wrapper>
        </View>
      </Animated.View>
    </View>
  )
}
