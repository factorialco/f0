import confetti from "canvas-confetti"
import { useCallback, type RefObject } from "react"

import { useReducedMotion } from "./a11y"

export const useEmojiConfetti = () => {
  const shouldReduceMotion = useReducedMotion()

  const fireEmojiConfetti = useCallback(
    (emoji: string, elementRef: RefObject<HTMLElement>) => {
      const button = elementRef.current
      if (button) {
        const rect = button.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top

        confetti({
          particleCount: 20,
          gravity: 0,
          spread: 360,
          startVelocity: 10,
          ticks: 50,
          origin: {
            x: centerX / window.innerWidth,
            y: centerY / window.innerHeight,
          },
          shapes: [confetti.shapeFromText({ text: emoji, scalar: 2 })],
          scalar: 2,
          disableForReducedMotion: shouldReduceMotion,
        })
      }
    },
    [shouldReduceMotion]
  )

  return { fireEmojiConfetti }
}
