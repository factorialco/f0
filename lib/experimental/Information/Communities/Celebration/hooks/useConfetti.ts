import confetti from "canvas-confetti"
import { useCallback, useRef } from "react"

export function useConfetti(shouldReduceMotion: boolean) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const intervalRef = useRef<NodeJS.Timeout>()

  const handleMouseEnter = useCallback(() => {
    if (!canvasRef.current) return

    const myConfetti = confetti.create(canvasRef.current, {
      resize: true,
      useWorker: true,
    })

    const confettiColors = ["9D76F3", "3FC495", "E61D46", "F6AF3D"]

    intervalRef.current = setInterval(() => {
      myConfetti({
        particleCount: 1,
        angle: 90,
        spread: 45,
        origin: { x: Math.random(), y: -0.1 },
        gravity: 0.65,
        scalar: 1,
        ticks: 80,
        startVelocity: 1,
        disableForReducedMotion: shouldReduceMotion,
        colors: [
          confettiColors[Math.floor(Math.random() * confettiColors.length)],
        ],
      })
    }, 100)
  }, [shouldReduceMotion])

  const handleMouseLeave = useCallback(() => {
    clearInterval(intervalRef.current)
  }, [])

  return { canvasRef, handleMouseEnter, handleMouseLeave }
}
