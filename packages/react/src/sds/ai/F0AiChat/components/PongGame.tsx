import { useCallback, useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"

import { F0Button } from "@/components/F0Button"
import { Cross } from "@/icons/app"
import { cn } from "@/lib/utils"

import { F0OneIcon } from "../../F0OneIcon"

// Layout
const BALL_SIZE = 32
const PADDLE_WIDTH_INITIAL = 88
const PADDLE_WIDTH_MIN = PADDLE_WIDTH_INITIAL * 0.5 // 50% of original
const PADDLE_HEIGHT = 8
const PADDLE_EDGE_MARGIN = 24
const WALL_INSET = 8

// Physics
const BASE_SPEED = 4.5
const MAX_SPEED = 14
const SPEED_INCREMENT_PER_HIT = 0.25
const SPEED_INCREMENT_PER_POINT = 0.15
const SPIN_FACTOR = 2.5
const SERVE_DELAY_MS = 800

// AI — human-like behavior
const AI_SMOOTHING = 0.08
const AI_IMPRECISION_BASE = 12
const AI_FAIL_INTERVAL_MIN = 4
const AI_FAIL_INTERVAL_MAX = 7
const AI_OVERSHOOT = 0.15

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
  const mountRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [portalTarget, setPortalTarget] = useState<HTMLElement | null>(null)

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
  // AI human-like state
  const aiVelocity = useRef(0)
  const aiNextFailAt = useRef(
    Math.floor(
      Math.random() * (AI_FAIL_INTERVAL_MAX - AI_FAIL_INTERVAL_MIN) +
        AI_FAIL_INTERVAL_MIN
    )
  )
  const aiRallySinceLastFail = useRef(0)
  const aiFailing = useRef(false)
  const aiFailOffsetX = useRef(0)
  // Ball rotation
  const ballRotation = useRef(0)
  const ballAngularVel = useRef(0)

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

  const handleScore = useCallback(
    (scorer: "player" | "ai") => {
      const newScore = { ...scoreRef.current }
      if (scorer === "player") newScore.player++
      else newScore.ai++
      scoreRef.current = newScore
      setScore(newScore)
      shakeRef.current = 8

      // Ball gets permanently faster each point
      globalSpeedBonus.current = Math.min(
        MAX_SPEED - BASE_SPEED,
        globalSpeedBonus.current + SPEED_INCREMENT_PER_POINT
      )

      // First to 2 wins
      if (newScore.player >= 2 || newScore.ai >= 2) {
        phaseRef.current = "gameover"
        setPhase("gameover")
        centerBall()
        setEndMessage(newScore.player >= 2 ? "You win!" : "You lose!")
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
    [centerBall, startCountdown]
  )

  // Portal detection
  useEffect(() => {
    if (mountRef.current) {
      const target = mountRef.current.closest("[aria-hidden]")
      if (target) setPortalTarget(target as HTMLElement)
    }
  }, [])

  // Keyboard
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
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
    aiRallySinceLastFail.current = 0
    aiFailing.current = false

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
        const pw = paddleWidthRef.current
        const playerPaddleY = height - PADDLE_EDGE_MARGIN
        if (
          b.y + BALL_SIZE / 2 >= playerPaddleY &&
          b.y + BALL_SIZE / 2 <= playerPaddleY + PADDLE_HEIGHT + 4 &&
          b.vy > 0 &&
          b.x > playerX.current - pw / 2 - BALL_SIZE / 4 &&
          b.x < playerX.current + pw / 2 + BALL_SIZE / 4
        ) {
          b.y = playerPaddleY - BALL_SIZE / 2
          const hitOffset = (b.x - playerX.current) / (pw / 2 + BALL_SIZE / 4)
          b.speed = Math.min(b.speed + SPEED_INCREMENT_PER_HIT, MAX_SPEED)
          const angle = hitOffset * (Math.PI / 3)
          b.vx = Math.sin(angle) * b.speed + hitOffset * SPIN_FACTOR
          b.vy = -Math.cos(angle) * b.speed
          // Impart angular velocity based on where ball hit paddle
          ballAngularVel.current = hitOffset * 1.5 + b.vx * 0.08
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
        const aiPaddleY = PADDLE_EDGE_MARGIN + PADDLE_HEIGHT
        if (
          b.y - BALL_SIZE / 2 <= aiPaddleY &&
          b.y - BALL_SIZE / 2 >= aiPaddleY - PADDLE_HEIGHT - 4 &&
          b.vy < 0 &&
          b.x > aiX.current - PADDLE_WIDTH_INITIAL / 2 - BALL_SIZE / 4 &&
          b.x < aiX.current + PADDLE_WIDTH_INITIAL / 2 + BALL_SIZE / 4
        ) {
          b.y = aiPaddleY + BALL_SIZE / 2
          const hitOffset =
            (b.x - aiX.current) / (PADDLE_WIDTH_INITIAL / 2 + BALL_SIZE / 4)
          b.speed = Math.min(b.speed + SPEED_INCREMENT_PER_HIT, MAX_SPEED)
          const angle = hitOffset * (Math.PI / 3)
          b.vx = Math.sin(angle) * b.speed + hitOffset * SPIN_FACTOR
          b.vy = Math.cos(angle) * b.speed
          ballAngularVel.current = hitOffset * 1.5 + b.vx * 0.08
          rallyRef.current++
          aiRallySinceLastFail.current++
        }

        // Score: ball out of bounds
        if (b.y < -BALL_SIZE * 2) {
          handleScore("player")
        } else if (b.y > height + BALL_SIZE * 2) {
          handleScore("ai")
        }

        // AI behavior: human-like with momentum, fails, and overshoot
        // Decide if AI should deliberately fail this rally
        if (
          !aiFailing.current &&
          aiRallySinceLastFail.current >= aiNextFailAt.current &&
          b.vy < 0 &&
          b.y < height * 0.5
        ) {
          aiFailing.current = true
          // Aim for wrong side of the field
          aiFailOffsetX.current =
            (Math.random() > 0.5 ? 1 : -1) *
            (width * 0.3 + Math.random() * width * 0.2)
        }

        if (b.vy < 0) {
          // Ball approaching AI
          const timeToReach = Math.max(1, (b.y - PADDLE_EDGE_MARGIN) / -b.vy)
          let predictedX = b.x + b.vx * timeToReach

          // Add imprecision that increases with ball speed
          const imprecision = AI_IMPRECISION_BASE * (1 + b.speed / MAX_SPEED)
          const jitter = (Math.random() - 0.5) * imprecision

          if (aiFailing.current) {
            // AI "misreads" the ball — aims for wrong spot
            predictedX += aiFailOffsetX.current
          }

          // Smooth target convergence with slight overshoot
          const targetDiff = predictedX + jitter - aiTargetX.current
          aiTargetX.current +=
            targetDiff * AI_SMOOTHING * dt +
            targetDiff * AI_OVERSHOOT * AI_SMOOTHING * dt
        } else {
          // Ball going away — drift lazily toward center with slight wander
          const wander = Math.sin(Date.now() * 0.002) * 15
          aiTargetX.current +=
            (width / 2 + wander - aiTargetX.current) * 0.025 * dt

          // Reset fail state when ball is going away
          if (aiFailing.current) {
            aiFailing.current = false
            aiRallySinceLastFail.current = 0
            aiNextFailAt.current = Math.floor(
              Math.random() * (AI_FAIL_INTERVAL_MAX - AI_FAIL_INTERVAL_MIN) +
                AI_FAIL_INTERVAL_MIN
            )
          }
        }

        // Physics-based movement with acceleration and deceleration
        const targetDiff = aiTargetX.current - aiX.current
        const acceleration = targetDiff * 0.08 * dt
        aiVelocity.current += acceleration
        // Damping for natural deceleration
        aiVelocity.current *= 0.88
        // Clamp max velocity
        const maxVel = 5 + rallyRef.current * 0.12
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
          <div className="flex items-baseline gap-3 text-sm tracking-widest text-f1-foreground-secondary font-medium">
            <div className="flex items-baseline gap-2">
              <span>AI</span>
              <span className="text-center text-base font-semibold text-f1-foreground">
                {score.ai}
              </span>
            </div>
            <span className="text-f1-foreground">:</span>
            <div className="flex items-baseline gap-2">
              <span className="text-center text-base font-semibold text-f1-foreground">
                {score.player}
              </span>
              <span>YOU</span>
            </div>
          </div>
          <F0Button
            icon={Cross}
            label="Close"
            onClick={onClose}
            variant="ghost"
            hideLabel
          />
        </div>

        {/* Game area */}
        <div
          ref={containerRef}
          className="relative flex-1 cursor-none overflow-hidden"
          style={{
            touchAction: "none",
            transform: `translate(${shakeX}px, ${shakeY}px)`,
          }}
        >
          {/* Center line */}
          <div
            className="pointer-events-none absolute left-0 right-0"
            style={{
              top: "50%",
              height: 2,
              backgroundImage:
                "repeating-linear-gradient(90deg, var(--f1-foreground-secondary) 0, var(--f1-foreground-secondary) 8px, transparent 8px, transparent 20px)",
              opacity: 0.15,
            }}
          />

          {/* Wall indicators */}
          <div
            className="pointer-events-none absolute bottom-0 left-0 top-0 bg-f1-foreground-secondary/5"
            style={{ width: WALL_INSET }}
          />
          <div
            className="pointer-events-none absolute bottom-0 right-0 top-0 bg-f1-foreground-secondary/5"
            style={{ width: WALL_INSET }}
          />

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

          {/* AI Paddle (top) — animated gradient like AI textarea */}
          <div
            className={cn(
              "absolute isolate rounded-full",
              "before:pointer-events-none before:absolute before:inset-0 before:z-[1]",
              "before:rounded-[inherit] before:bg-f1-foreground-tertiary before:content-['']",
              "after:pointer-events-none after:absolute after:-inset-0.5 after:z-[0]",
              "after:rounded-[inherit] after:blur-[3px] after:content-['']",
              "after:bg-[conic-gradient(from_var(--gradient-angle),var(--tw-gradient-stops))]",
              "from-[#E55619] via-[#A1ADE5] to-[#E51943]",
              "after:opacity-80"
            )}
            style={
              {
                width: PADDLE_WIDTH_INITIAL,
                height: PADDLE_HEIGHT,
                top: PADDLE_EDGE_MARGIN,
                transform: `translateX(${renderAiX - PADDLE_WIDTH_INITIAL / 2}px)`,
                "--gradient-angle": "0deg",
                animation: "pong-ai-glow 4s linear infinite",
              } as React.CSSProperties
            }
          />

          {/* Ball */}
          <div
            className="pointer-events-none absolute"
            style={{
              transform: `translate(${ballPos.x - BALL_SIZE / 2}px, ${ballPos.y - BALL_SIZE / 2}px) rotate(${ballAngle}rad)`,
            }}
          >
            <F0OneIcon size="md" />
          </div>

          {/* Player Paddle (bottom) */}
          <div
            className="absolute rounded-full bg-f1-foreground-tertiary"
            style={{
              width: renderPaddleWidth,
              height: PADDLE_HEIGHT,
              bottom: PADDLE_EDGE_MARGIN,
              transform: `translateX(${renderPlayerX - renderPaddleWidth / 2}px)`,
              transition: "width 0.3s ease-out",
            }}
          />

          {/* Countdown overlay */}
          {phase === "countdown" && (
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <span
                className="text-5xl font-semibold text-f1-foreground-secondary"
                style={{
                  animation: "pulse 0.6s ease-out infinite",
                }}
              >
                {countdown}
              </span>
            </div>
          )}

          {/* Game over overlay */}
          {phase === "gameover" && endMessage && (
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-f1-special-page/60 backdrop-blur-sm">
              <span className="text-2xl font-semibold text-f1-foreground">
                {endMessage}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>,
    portalTarget
  )
}
