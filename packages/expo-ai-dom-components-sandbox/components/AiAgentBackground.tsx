import React from 'react'
import { StyleSheet, View, Dimensions } from 'react-native'
import Svg, {
  G,
  Rect,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
} from 'react-native-svg'

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window')

// Design dimensions
const DESIGN_WIDTH = 390
const DESIGN_HEIGHT = 852
const DESIGN_CENTER_X = DESIGN_WIDTH / 2
const GRADIENT_COVERAGE_RATIO = 301.5 / 852 // ~35.4% of design height (original value)
const WHITE_GRADIENT_HEIGHT = DESIGN_HEIGHT * GRADIENT_COVERAGE_RATIO
const GRADIENT_OPACITY = 0.15
const HORIZONTAL_GRADIENT_Y2 = 0.00000820781

// SVG element IDs
const GRADIENT_ID_COLOR = 'paint0_linear_2778_12757'
const GRADIENT_ID_WHITE = 'paint1_linear_2778_12757'
const CLIP_PATH_ID = 'clip0_2778_12757'

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    zIndex: 0,
  },
})

/**
 * Gradient background component for the AI Agent screen.
 * Features a horizontal gradient (orange → pink → blue) with 15% opacity
 * and a vertical gradient (transparent → white) for smooth blending.
 *
 * Uses SVG with linear gradients for rendering. Covers full screen.
 * Uses design dimensions in viewBox for consistent scaling.
 */
export const AiAgentBackground = () => {
  return (
    <View style={styles.container} pointerEvents="none">
      <Svg
        width={SCREEN_WIDTH}
        height={SCREEN_HEIGHT}
        viewBox={`0 0 ${DESIGN_WIDTH} ${DESIGN_HEIGHT}`}
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <G clipPath={`url(#${CLIP_PATH_ID})`}>
          <Rect
            width={DESIGN_WIDTH}
            height={DESIGN_HEIGHT}
            fill={`url(#${GRADIENT_ID_COLOR})`}
            fillOpacity={GRADIENT_OPACITY}
          />
          <Rect
            width={DESIGN_WIDTH}
            height={DESIGN_HEIGHT}
            fill={`url(#${GRADIENT_ID_WHITE})`}
          />
        </G>
        <Defs>
          <LinearGradient
            id={GRADIENT_ID_COLOR}
            x1={DESIGN_WIDTH}
            y1={0}
            x2={0}
            y2={HORIZONTAL_GRADIENT_Y2}
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#E55619" />
            <Stop offset={0.5} stopColor="#E51943" />
            <Stop offset={1} stopColor="#A1ADE5" />
          </LinearGradient>
          <LinearGradient
            id={GRADIENT_ID_WHITE}
            x1={DESIGN_CENTER_X}
            y1={0}
            x2={DESIGN_CENTER_X}
            y2={WHITE_GRADIENT_HEIGHT}
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="white" stopOpacity={0} />
            <Stop offset={1} stopColor="white" />
          </LinearGradient>
          <ClipPath id={CLIP_PATH_ID}>
            <Rect width={DESIGN_WIDTH} height={DESIGN_HEIGHT} fill="white" />
          </ClipPath>
        </Defs>
      </Svg>
    </View>
  )
}
