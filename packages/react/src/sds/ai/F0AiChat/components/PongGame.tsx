import confetti from "canvas-confetti"
import { useCallback, useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"

import { F0Button } from "@/components/F0Button"
import { Cross } from "@/icons/app"
import { useReducedMotion } from "@/lib/a11y"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"

import { PongBall } from "./shared/PongBall"

// Layout
const BALL_SIZE = 40
const PADDLE_WIDTH_INITIAL = 93
const PADDLE_WIDTH_MIN = PADDLE_WIDTH_INITIAL * 0.5 // 50% of original
const PADDLE_HEIGHT = 32
const PADDLE_EDGE_MARGIN = 24
const WALL_INSET = 8
const SCORE_PANEL_WIDTH = 48
const KEYBOARD_SPEED = 10

// Physics
const BASE_SPEED = 7
const MAX_SPEED = 18
const SPEED_INCREMENT_PER_HIT = 0.25
const SPEED_INCREMENT_PER_POINT = 0.15
const SERVE_DELAY_MS = 800
const MAX_BOUNCE_ANGLE = Math.PI / 3 // 60° max deflection from vertical
const BALL_RADIUS = BALL_SIZE / 2

// AI behavior
const AI_SMOOTHING = 0.12
const AI_IMPRECISION_BASE = 8

// Trail
const TRAIL_LENGTH = 5
const TRAIL_MAX_OPACITY = 0.08

interface Vec2 {
  x: number
  y: number
}

interface Ball {
  x: number
  y: number
  vx: number
  vy: number
  speed: number
}

type GamePhase = "countdown" | "playing" | "scored" | "gameover"

interface PongGameProps {
  onClose: () => void
}

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value))
}

function randomServeAngle(): { vx: number; vy: number } {
  const angle = ((Math.random() * 50 + 65) * Math.PI) / 180
  const dirX = Math.random() > 0.5 ? 1 : -1
  const dirY = Math.random() > 0.5 ? 1 : -1
  return {
    vx: Math.cos(angle) * BASE_SPEED * dirX,
    vy: Math.sin(angle) * BASE_SPEED * dirY,
  }
}

export const PongGame = ({ onClose }: PongGameProps) => {
  const translations = useI18n()
  const shouldReduceMotion = useReducedMotion()
  const mountRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const confettiCanvasRef = useRef<HTMLCanvasElement>(null)
  const confettiInstanceRef = useRef<confetti.CreateTypes | null>(null)
  const [portalTarget, setPortalTarget] = useState<HTMLElement | null>(null)

  // Keyboard tracking
  const keysPressed = useRef(new Set<string>())

  // Game state refs (mutation-friendly for rAF loop)
  const ball = useRef<Ball>({
    x: 0,
    y: 0,
    vx: 0,
    vy: 0,
    speed: BASE_SPEED,
  })
  const playerX = useRef(0)
  const aiX = useRef(0)
  const aiTargetX = useRef(0)
  const scoreRef = useRef({ player: 0, ai: 0 })
  const phaseRef = useRef<GamePhase>("countdown")
  const phaseTimerRef = useRef(0)
  const rallyRef = useRef(0)
  const trailRef = useRef<Vec2[]>([])
  const lastTimeRef = useRef(0)
  const animationRef = useRef(0)
  const containerSize = useRef({ width: 0, height: 0 })
  const shakeRef = useRef(0)
  const totalRalliesRef = useRef(0)
  const paddleWidthRef = useRef(PADDLE_WIDTH_INITIAL)
  const globalSpeedBonus = useRef(0)
  const aiVelocity = useRef(0)
  // Ball rotation
  const ballRotation = useRef(0)
  const ballAngularVel = useRef(0)
  // Track last scorer for "Goal" display
  const lastScorerRef = useRef<"player" | "ai" | null>(null)

  // Render state
  const [ballPos, setBallPos] = useState<Vec2>({ x: 0, y: 0 })
  const [renderPlayerX, setRenderPlayerX] = useState(0)
  const [renderAiX, setRenderAiX] = useState(0)
  const [score, setScore] = useState({ player: 0, ai: 0 })
  const [renderPaddleWidth, setRenderPaddleWidth] =
    useState(PADDLE_WIDTH_INITIAL)
  const [phase, setPhase] = useState<GamePhase>("countdown")
  const [countdown, setCountdown] = useState(3)
  const [trail, setTrail] = useState<Vec2[]>([])
  const [shake, setShake] = useState(0)
  const [ballAngle, setBallAngle] = useState(0)
  const [endMessage, setEndMessage] = useState<string | null>(null)
  const [lastScorer, setLastScorer] = useState<"player" | "ai" | null>(null)

  const centerBall = useCallback(() => {
    const { width, height } = containerSize.current
    const currentSpeed = BASE_SPEED + globalSpeedBonus.current
    ball.current = {
      x: width / 2,
      y: height / 2,
      vx: 0,
      vy: 0,
      speed: currentSpeed,
    }
    trailRef.current = []
    rallyRef.current = 0
  }, [])

  const serveBall = useCallback(() => {
    const currentSpeed = BASE_SPEED + globalSpeedBonus.current
    const { vx, vy } = randomServeAngle()
    const scale = currentSpeed / BASE_SPEED
    ball.current.vx = vx * scale
    ball.current.vy = vy * scale
    ball.current.speed = currentSpeed
    phaseRef.current = "playing"
    setPhase("playing")
    lastScorerRef.current = null
    setLastScorer(null)
  }, [])

  const startCountdown = useCallback(() => {
    centerBall()
    phaseRef.current = "countdown"
    setPhase("countdown")
    setCountdown(3)
    let count = 3
    const interval = setInterval(() => {
      count--
      if (count <= 0) {
        clearInterval(interval)
        serveBall()
      } else {
        setCountdown(count)
      }
    }, 600)
    return () => clearInterval(interval)
  }, [centerBall, serveBall])

  const fireConfetti = useCallback(() => {
    if (shouldReduceMotion || !confettiInstanceRef.current) return
    confettiInstanceRef.current({
      particleCount: 80,
      spread: 70,
      origin: { x: 0.5, y: 0.7 },
      colors: ["#9D76F3", "#3FC495", "#E61D46", "#F6AF3D"],
      disableForReducedMotion: true,
    })
  }, [shouldReduceMotion])

  const handleScore = useCallback(
    (scorer: "player" | "ai") => {
      const newScore = { ...scoreRef.current }
      if (scorer === "player") newScore.player++
      else newScore.ai++
      scoreRef.current = newScore
      setScore(newScore)
      shakeRef.current = 8
      lastScorerRef.current = scorer
      setLastScorer(scorer)

      // Ball gets permanently faster each point
      globalSpeedBonus.current = Math.min(
        MAX_SPEED - BASE_SPEED,
        globalSpeedBonus.current + SPEED_INCREMENT_PER_POINT
      )

      // Confetti on player goal
      if (scorer === "player") {
        fireConfetti()
      }

      // First to 3 wins
      if (newScore.player >= 3 || newScore.ai >= 3) {
        phaseRef.current = "gameover"
        setPhase("gameover")
        centerBall()
        setEndMessage(
          newScore.player >= 3
            ? translations.ai.pong.youWin
            : translations.ai.pong.youLose
        )
        setTimeout(() => onClose(), 2000)
        return
      }

      phaseRef.current = "scored"
      setPhase("scored")
      centerBall()
      phaseTimerRef.current = SERVE_DELAY_MS

      setTimeout(() => {
        if (phaseRef.current === "scored") {
          startCountdown()
        }
      }, SERVE_DELAY_MS)
    },
    [centerBall, startCountdown, fireConfetti, translations]
  )

  // Portal detection
  useEffect(() => {
    if (mountRef.current) {
      const target = mountRef.current.closest("[aria-hidden]")
      if (target) setPortalTarget(target as HTMLElement)
    }
  }, [])

  // Confetti canvas init
  useEffect(() => {
    if (confettiCanvasRef.current) {
      confettiInstanceRef.current = confetti.create(confettiCanvasRef.current, {
        resize: true,
        useWorker: false,
      })
    }
    return () => {
      confettiInstanceRef.current?.reset()
    }
  }, [portalTarget])

  // Keyboard
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
        e.preventDefault()
        keysPressed.current.add(e.key)
      }
    }
    const handleKeyUp = (e: KeyboardEvent) => {
      keysPressed.current.delete(e.key)
    }
    window.addEventListener("keydown", handleKeyDown)
    window.addEventListener("keyup", handleKeyUp)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      window.removeEventListener("keyup", handleKeyUp)
    }
  }, [onClose])

  // Main game loop
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const rect = container.getBoundingClientRect()
    containerSize.current = { width: rect.width, height: rect.height }

    const centerX = rect.width / 2
    playerX.current = centerX
    aiX.current = centerX
    aiTargetX.current = centerX
    scoreRef.current = { player: 0, ai: 0 }
    setScore({ player: 0, ai: 0 })
    totalRalliesRef.current = 0
    paddleWidthRef.current = PADDLE_WIDTH_INITIAL
    setRenderPaddleWidth(PADDLE_WIDTH_INITIAL)
    globalSpeedBonus.current = 0
    aiVelocity.current = 0

    const cleanupCountdown = startCountdown()

    const handlePointerMove = (e: PointerEvent) => {
      const r = container.getBoundingClientRect()
      const pw = paddleWidthRef.current
      playerX.current = clamp(
        e.clientX - r.left,
        pw / 2 + WALL_INSET,
        r.width - pw / 2 - WALL_INSET
      )
    }

    container.addEventListener("pointermove", handlePointerMove)

    const gameLoop = (timestamp: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = timestamp
      const rawDt = (timestamp - lastTimeRef.current) / 16.667
      const dt = Math.min(rawDt, 3)
      lastTimeRef.current = timestamp

      const { width, height } = containerSize.current
      const b = ball.current

      // Keyboard-based player movement
      const pw = paddleWidthRef.current
      if (keysPressed.current.has("ArrowLeft")) {
        playerX.current = clamp(
          playerX.current - KEYBOARD_SPEED * dt,
          pw / 2 + WALL_INSET,
          width - pw / 2 - WALL_INSET
        )
      }
      if (keysPressed.current.has("ArrowRight")) {
        playerX.current = clamp(
          playerX.current + KEYBOARD_SPEED * dt,
          pw / 2 + WALL_INSET,
          width - pw / 2 - WALL_INSET
        )
      }

      // Shake decay
      if (shakeRef.current > 0) {
        shakeRef.current *= 0.85
        if (shakeRef.current < 0.5) shakeRef.current = 0
      }

      if (phaseRef.current === "playing") {
        // Trail
        trailRef.current.push({ x: b.x, y: b.y })
        if (trailRef.current.length > TRAIL_LENGTH) {
          trailRef.current = trailRef.current.slice(-TRAIL_LENGTH)
        }

        // Move ball
        b.x += b.vx * dt
        b.y += b.vy * dt

        // Update ball rotation
        ballRotation.current += ballAngularVel.current * dt
        // Friction on angular velocity
        ballAngularVel.current *= 0.96

        // Wall collisions (left/right) with inset
        const wallLeft = WALL_INSET + BALL_SIZE / 2
        const wallRight = width - WALL_INSET - BALL_SIZE / 2
        if (b.x <= wallLeft) {
          b.x = wallLeft
          b.vx = Math.abs(b.vx)
          ballAngularVel.current *= -0.5
        }
        if (b.x >= wallRight) {
          b.x = wallRight
          b.vx = -Math.abs(b.vx)
          ballAngularVel.current *= -0.5
        }

        // Player paddle collision (bottom)
        const playerPaddleTop = height - PADDLE_EDGE_MARGIN - PADDLE_HEIGHT
        const playerHalfW = pw / 2
        if (
          b.y + BALL_RADIUS >= playerPaddleTop &&
          b.y - BALL_RADIUS <= playerPaddleTop + PADDLE_HEIGHT &&
          b.vy > 0 &&
          b.x >= playerX.current - playerHalfW - BALL_RADIUS &&
          b.x <= playerX.current + playerHalfW + BALL_RADIUS
        ) {
          // Push ball out so it never embeds inside the paddle
          b.y = playerPaddleTop - BALL_RADIUS
          // Normalized hit position clamped to [-1, 1]
          const hitOffset = clamp((b.x - playerX.current) / playerHalfW, -1, 1)
          b.speed = Math.min(b.speed + SPEED_INCREMENT_PER_HIT, MAX_SPEED)
          // Angle from vertical, proportional to where ball hit
          const angle = hitOffset * MAX_BOUNCE_ANGLE
          // Set velocity with consistent magnitude = speed
          b.vx = Math.sin(angle) * b.speed
          b.vy = -Math.cos(angle) * b.speed
          ballAngularVel.current = hitOffset * 1.2
          rallyRef.current++
          totalRalliesRef.current++
          // Shrink paddle: exponential decay toward 50% of initial
          const shrinkFactor =
            PADDLE_WIDTH_MIN / PADDLE_WIDTH_INITIAL +
            (1 - PADDLE_WIDTH_MIN / PADDLE_WIDTH_INITIAL) *
              Math.exp(-totalRalliesRef.current * 0.03)
          paddleWidthRef.current = PADDLE_WIDTH_INITIAL * shrinkFactor
        }

        // AI paddle collision (top)
        const aiPaddleBottom = PADDLE_EDGE_MARGIN + PADDLE_HEIGHT
        const aiHalfW = PADDLE_WIDTH_INITIAL / 2
        if (
          b.y - BALL_RADIUS <= aiPaddleBottom &&
          b.y + BALL_RADIUS >= PADDLE_EDGE_MARGIN &&
          b.vy < 0 &&
          b.x >= aiX.current - aiHalfW - BALL_RADIUS &&
          b.x <= aiX.current + aiHalfW + BALL_RADIUS
        ) {
          b.y = aiPaddleBottom + BALL_RADIUS
          const hitOffset = clamp((b.x - aiX.current) / aiHalfW, -1, 1)
          b.speed = Math.min(b.speed + SPEED_INCREMENT_PER_HIT, MAX_SPEED)
          const angle = hitOffset * MAX_BOUNCE_ANGLE
          b.vx = Math.sin(angle) * b.speed
          b.vy = Math.cos(angle) * b.speed
          ballAngularVel.current = hitOffset * 1.2
          rallyRef.current++
        }

        // Score: ball out of bounds
        if (b.y < -BALL_SIZE * 2) {
          handleScore("player")
        } else if (b.y > height + BALL_SIZE * 2) {
          handleScore("ai")
        }

        // AI behavior
        if (b.vy < 0) {
          // Ball approaching AI
          const timeToReach = Math.max(1, (b.y - PADDLE_EDGE_MARGIN) / -b.vy)
          const predictedX = b.x + b.vx * timeToReach

          // Add imprecision that increases with ball speed
          const imprecision = AI_IMPRECISION_BASE * (1 + b.speed / MAX_SPEED)
          const jitter = (Math.random() - 0.5) * imprecision

          // Smooth target convergence
          const targetDiff = predictedX + jitter - aiTargetX.current
          aiTargetX.current += targetDiff * AI_SMOOTHING * dt
        } else {
          // Ball going away — drift lazily toward center with slight wander
          const wander = Math.sin(Date.now() * 0.002) * 15
          aiTargetX.current +=
            (width / 2 + wander - aiTargetX.current) * 0.025 * dt
        }

        // Physics-based movement with acceleration and deceleration
        const targetDiff = aiTargetX.current - aiX.current
        const acceleration = targetDiff * 0.1 * dt
        aiVelocity.current += acceleration
        // Damping for natural deceleration
        aiVelocity.current *= 0.88
        // Clamp max velocity
        const maxVel = 6 + rallyRef.current * 0.12
        aiVelocity.current = clamp(aiVelocity.current, -maxVel, maxVel)
        aiX.current += aiVelocity.current * dt
        aiX.current = clamp(
          aiX.current,
          PADDLE_WIDTH_INITIAL / 2 + WALL_INSET,
          width - PADDLE_WIDTH_INITIAL / 2 - WALL_INSET
        )
      }

      // Update render state
      setBallPos({ x: b.x, y: b.y })
      setRenderPlayerX(playerX.current)
      setRenderAiX(aiX.current)
      setTrail([...trailRef.current])
      setShake(shakeRef.current)
      setRenderPaddleWidth(paddleWidthRef.current)
      setBallAngle(ballRotation.current)

      animationRef.current = requestAnimationFrame(gameLoop)
    }

    lastTimeRef.current = 0
    animationRef.current = requestAnimationFrame(gameLoop)

    return () => {
      cancelAnimationFrame(animationRef.current)
      container.removeEventListener("pointermove", handlePointerMove)
      cleanupCountdown?.()
    }
  }, [portalTarget, handleScore, startCountdown])

  if (!portalTarget) {
    return <div ref={mountRef} />
  }

  const shakeX = shake > 0.5 ? (Math.random() - 0.5) * shake : 0
  const shakeY = shake > 0.5 ? (Math.random() - 0.5) * shake : 0

  return createPortal(
    <div className="absolute inset-0 z-50 flex flex-col bg-f1-background">
      <style>{`
        @property --gradient-angle {
          syntax: "<angle>";
          initial-value: 0deg;
          inherits: false;
        }
        @keyframes pong-ai-glow {
          from { --gradient-angle: 0deg; }
          to { --gradient-angle: 360deg; }
        }
      `}</style>
      <div className="flex flex-1 flex-col bg-f1-special-page">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3">
          <span className="text-base font-medium text-f1-foreground">
            {translations.ai.pong.title}
          </span>
          <F0Button
            icon={Cross}
            label={translations.actions.close}
            onClick={onClose}
            variant="ghost"
            hideLabel
          />
        </div>

        {/* Game area with scores */}
        <div className="relative flex-1">
          {/* Game canvas — full width, ball renders above score panel */}
          <div
            ref={containerRef}
            className="absolute inset-0 cursor-none overflow-hidden"
            style={{
              touchAction: "none",
              transform: `translate(${shakeX}px, ${shakeY}px)`,
            }}
          >
            {/* Center line — solid, subtle */}
            <div className="pointer-events-none absolute left-0 right-0 top-1/2 h-px translate-y-1/2 bg-f1-border" />

            {/* Ball trail */}
            {trail.map((pos, i) => {
              const progress = (i + 1) / trail.length
              const size = BALL_SIZE * (0.15 + progress * 0.25)
              return (
                <div
                  key={i}
                  className="pointer-events-none absolute rounded-full bg-f1-foreground-secondary/40"
                  style={{
                    width: size,
                    height: size,
                    opacity: progress * TRAIL_MAX_OPACITY,
                    transform: `translate(${pos.x - size / 2}px, ${pos.y - size / 2}px)`,
                  }}
                />
              )
            })}

            {/* AI Paddle (top) — ChatTextarea border/outline style */}
            <div
              className={cn(
                "absolute isolate rounded",
                "border border-solid border-f1-border",
                "before:pointer-events-none before:absolute before:inset-0 before:z-[-1]",
                "before:rounded-[inherit] before:bg-f1-special-page before:content-['']",
                "after:pointer-events-none after:absolute after:inset-0.5 after:z-[-2]",
                "after:rounded-[inherit] after:blur-[5px] after:content-['']",
                "after:bg-[conic-gradient(from_var(--gradient-angle),var(--tw-gradient-stops))]",
                "from-[#E55619] via-[#A1ADE5] to-[#E51943]",
                "after:scale-100 after:opacity-100"
              )}
              style={{
                width: PADDLE_WIDTH_INITIAL,
                height: PADDLE_HEIGHT,
                top: PADDLE_EDGE_MARGIN,
                transform: `translateX(${renderAiX - PADDLE_WIDTH_INITIAL / 2}px)`,
                animation: "pong-ai-glow 4s linear infinite",
                // @ts-expect-error CSS custom property
                "--gradient-angle": "0deg",
              }}
            />

            {/* Ball — soft linear gradient, hidden during countdown */}
            <PongBall
              size={BALL_SIZE}
              className="pointer-events-none absolute z-30"
              style={{
                transform: `translate(${ballPos.x - BALL_SIZE / 2}px, ${ballPos.y - BALL_SIZE / 2}px) rotate(${ballAngle}rad)`,
                opacity: phase === "countdown" ? 0 : 1,
                transition: "opacity 0.3s ease-in",
              }}
            />

            {/* Player Paddle (bottom) — gradient aura like AI paddle */}
            <div
              className="absolute rounded border-2 border-solid border-f1-border"
              style={{
                width: renderPaddleWidth,
                height: PADDLE_HEIGHT,
                bottom: PADDLE_EDGE_MARGIN,
                transform: `translateX(${renderPlayerX - renderPaddleWidth / 2}px)`,
                transition: "width 0.3s ease-out",
              }}
            >
              <div className="h-full w-full rounded bg-f1-special-page" />
            </div>

            {/* Center circle — always visible, like a football pitch */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-solid border-f1-border bg-f1-special-page">
              <span
                className="text-3xl font-semibold text-f1-foreground-secondary"
                style={{
                  opacity: phase === "countdown" ? 1 : 0,
                  transition: "opacity 0.3s ease-out",
                }}
              >
                {phase === "countdown" ? countdown : ""}
              </span>
            </div>

            {/* Goal indicator — bottom half when player scores, top half when AI scores */}
            {phase === "scored" && lastScorer && (
              <div
                className={cn(
                  "pointer-events-none absolute left-4 flex items-center",
                  lastScorer === "player" ? "top-1/2 mt-4" : "bottom-1/2 -mt-4"
                )}
              >
                <span className="text-2xl font-semibold text-f1-foreground-secondary/60">
                  {translations.ai.pong.goal}
                </span>
              </div>
            )}

            {/* Game over overlay */}
            {phase === "gameover" && endMessage && (
              <div className="pointer-events-none absolute inset-0 z-40 flex items-center justify-center bg-f1-special-page/60 backdrop-blur-sm">
                <span className="text-2xl font-semibold text-f1-foreground">
                  {endMessage}
                </span>
              </div>
            )}

            {/* Confetti canvas */}
            <canvas
              ref={confettiCanvasRef}
              className="pointer-events-none absolute inset-0 z-50 h-full w-full"
            />
          </div>

          {/* Right score panel — absolute, ball passes over it */}
          <div
            className="pointer-events-none absolute inset-y-0 right-0 flex flex-col items-center justify-center"
            style={{ width: SCORE_PANEL_WIDTH }}
          >
            <div className="flex flex-col items-center gap-6">
              <span
                className={cn(
                  "text-2xl font-semibold",
                  score.ai > 0
                    ? "text-f1-foreground-secondary"
                    : "text-f1-foreground-disabled"
                )}
              >
                {score.ai}
              </span>
              <span
                className={cn(
                  "text-2xl font-semibold",
                  score.player > 0
                    ? "text-f1-foreground-secondary"
                    : "text-f1-foreground-disabled"
                )}
              >
                {score.player}
              </span>
            </div>
          </div>
        </div>

        {/* Footer — controls hint */}
        <div className="flex items-center justify-center px-4 py-3 text-sm font-medium text-f1-foreground-secondary">
          <div className="flex gap-5">
            <span>{translations.ai.pong.controls}</span>
            <span>{translations.ai.pong.escToExit}</span>
          </div>
        </div>
      </div>
    </div>,
    portalTarget
  )
}
