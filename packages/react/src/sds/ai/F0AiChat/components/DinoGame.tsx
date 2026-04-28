import { useCallback, useEffect, useRef, useState } from "react"

import { F0Button } from "@/components/F0Button"
import { Cross } from "@/icons/app"
import { useReducedMotion } from "@/lib/a11y"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"

import { F0OneIcon } from "../../F0OneIcon/F0OneIcon"
import { useAiChat } from "../providers/AiChatStateProvider"
import {
  readFromLocalStorage,
  writeToLocalStorage,
} from "../utils/local-storage"

// ─── Layout (compact: must fit inside a narrow chat sidebar) ─────────────────
const GROUND_Y_FRACTION = 0.78
const PLAYER_SIZE = 32
const PLAYER_X = 56

// ─── Physics — tighter, snappier than Chrome dino ────────────────────────────
const GRAVITY = 0.95
const JUMP_VELOCITY = -11
const FAST_FALL_GRAVITY = 2.2

// ─── Speed curve — easy at start, ramps up gradually ─────────────────────────
const BASE_SPEED = 3.6
const MAX_SPEED = 11
const SPEED_RAMP_DURATION_S = 75 // seconds to reach MAX_SPEED

// ─── Difficulty unlocks (seconds since "playing" started) ────────────────────
const UNLOCK_MEDIUM_BLOCK_S = 12
const UNLOCK_LARGE_BLOCK_S = 28
const UNLOCK_DRONE_S = 25
const DRONE_SPAWN_CHANCE = 0.4

// ─── Obstacles ───────────────────────────────────────────────────────────────
const BLOCK_VARIANTS = [
  { w: 12, h: 18 },
  { w: 18, h: 24 },
  { w: 24, h: 30 },
] as const
// Bigger silhouette so the bird reads clearly inside the narrow chat panel.
const DRONE_W = 46
const DRONE_H = 22
const DRONE_HIGH_OFFSET = -64 // sits comfortably above the standing player
const DRONE_MID_OFFSET = -38 // forces a clean jump (crouch still passes under)

// Spawn gaps (px) — easier at start, tighter at max speed
const SPAWN_GAP_EASY = [340, 520] as const
const SPAWN_GAP_HARD = [180, 320] as const

// ─── Particles ───────────────────────────────────────────────────────────────
const DUST_COUNT = 14
const DUST_LIFE_FRAMES = 42

// ─── Persistence ─────────────────────────────────────────────────────────────
const HIGHSCORE_KEY = "ONE-ai-onerun-highscore"

// ─── Score (meters traveled) ─────────────────────────────────────────────────
const PIXELS_PER_METER = 18

// ─── Player rotation physics ─────────────────────────────────────────────────
// The player is a "rolling wheel": as the world scrolls leftward (player moves
// right relative to the ground), a wheel must rotate clockwise — i.e. positive
// degrees in CSS. Angular velocity tracks forward speed on the ground; in the
// air friction decays it; jumps add a forward-flip impulse on top.
const ROLL_FACTOR = 2.4 // deg/frame per px/frame of forward speed (clockwise)
const SPIN_GROUND_EASE = 0.12 // how quickly ground angVel reaches the target
const SPIN_AIR_FRICTION = 0.992
const JUMP_SPIN_BONUS = 8 // forward-flip impulse on jump (additive, clockwise)
const IDLE_SPIN_VELOCITY = 2.5 // gentle forward roll while waiting to start
const GAMEOVER_SPIN_VELOCITY = 28 // forward tumble after death
const CROUCH_SPIN_BOOST = 1.4 // smaller ball ⇒ spins faster (visual feedback)

// Forgiveness inset on collision rectangles
const COLLISION_INSET = 3

type Rect = { x: number; y: number; w: number; h: number }
export type Obstacle = {
  id: number
  type: "block" | "drone"
  x: number
  y: number
  w: number
  h: number
  flap: number
}
type DustParticle = {
  id: number
  x: number
  y: number
  vx: number
  vy: number
  life: number
  size: number
}
type GamePhase = "ready" | "playing" | "gameover"
type DinoGameProps = { onClose: () => void }

export function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value))
}

// AABB overlap with a small inset so a near-miss doesn't kill the player.
export function aabbOverlap(a: Rect, b: Rect): boolean {
  return (
    a.x + COLLISION_INSET < b.x + b.w - COLLISION_INSET &&
    a.x + a.w - COLLISION_INSET > b.x + COLLISION_INSET &&
    a.y + COLLISION_INSET < b.y + b.h - COLLISION_INSET &&
    a.y + a.h - COLLISION_INSET > b.y + COLLISION_INSET
  )
}

export function applyJumpPhysics(
  y: number,
  vy: number,
  dt: number,
  fastFall: boolean
): { y: number; vy: number } {
  const g = fastFall ? FAST_FALL_GRAVITY : GRAVITY
  return { y: y + vy * dt, vy: vy + g * dt }
}

// Speed ramp: linear interpolation, capped at MAX.
export function speedAt(elapsedSec: number): number {
  const t = clamp(elapsedSec / SPEED_RAMP_DURATION_S, 0, 1)
  return BASE_SPEED + (MAX_SPEED - BASE_SPEED) * t
}

// Spawn-gap range tightens with difficulty.
export function spawnGapRange(elapsedSec: number): readonly [number, number] {
  const t = clamp(elapsedSec / SPEED_RAMP_DURATION_S, 0, 1)
  return [
    SPAWN_GAP_EASY[0] + (SPAWN_GAP_HARD[0] - SPAWN_GAP_EASY[0]) * t,
    SPAWN_GAP_EASY[1] + (SPAWN_GAP_HARD[1] - SPAWN_GAP_EASY[1]) * t,
  ] as const
}

function loadHighScore(): number {
  if (typeof window === "undefined") return 0
  const stored = readFromLocalStorage<number | null>(HIGHSCORE_KEY, null)
  return typeof stored === "number" && stored >= 0 ? stored : 0
}

function saveHighScore(value: number): void {
  if (typeof window === "undefined") return
  writeToLocalStorage(HIGHSCORE_KEY, value)
}

let obstacleIdCounter = 0
function nextObstacleId() {
  obstacleIdCounter += 1
  return obstacleIdCounter
}

// Convert raw pixel distance to displayed meters.
export function pixelsToMeters(distancePx: number): number {
  return Math.max(0, Math.floor(distancePx / PIXELS_PER_METER))
}

function spawnObstacle(
  x: number,
  groundY: number,
  elapsedSec: number
): Obstacle {
  // Drones unlock earlier and spawn more often than blocks once unlocked.
  if (elapsedSec >= UNLOCK_DRONE_S && Math.random() < DRONE_SPAWN_CHANCE) {
    const high = Math.random() > 0.5
    const offset = high ? DRONE_HIGH_OFFSET : DRONE_MID_OFFSET
    return {
      id: nextObstacleId(),
      type: "drone",
      x,
      y: groundY + offset,
      w: DRONE_W,
      h: DRONE_H,
      flap: 0,
    }
  }

  // Block sizes unlock progressively
  const maxIdx =
    elapsedSec < UNLOCK_MEDIUM_BLOCK_S
      ? 0
      : elapsedSec < UNLOCK_LARGE_BLOCK_S
        ? 1
        : 2
  const idx = Math.floor(Math.random() * (maxIdx + 1))
  const variant = BLOCK_VARIANTS[idx]
  return {
    id: nextObstacleId(),
    type: "block",
    x,
    y: groundY - variant.h,
    w: variant.w,
    h: variant.h,
    flap: 0,
  }
}

export const DinoGame = ({ onClose }: DinoGameProps) => {
  const translations = useI18n()
  const shouldReduceMotion = useReducedMotion()
  const { activeGame } = useAiChat()
  const containerRef = useRef<HTMLDivElement>(null)
  const previouslyFocusedRef = useRef<HTMLElement | null>(null)

  // Game-loop refs (mutation-friendly)
  const playerRef = useRef({ y: 0, vy: 0, onGround: true })
  const crouchingRef = useRef(false)
  const obstaclesRef = useRef<Obstacle[]>([])
  const dustRef = useRef<DustParticle[]>([])
  const dustIdRef = useRef(0)
  const speedRef = useRef(BASE_SPEED)
  const distanceRef = useRef(0) // total pixels traveled (used as meter score)
  const phaseRef = useRef<GamePhase>("ready")
  const shakeRef = useRef(0)
  const nextSpawnXRef = useRef(0)
  const groundOffsetRef = useRef(0)
  const elapsedRef = useRef(0) // seconds spent in "playing"
  const lastTimeRef = useRef(0)
  const animationRef = useRef(0)
  const containerSize = useRef({ width: 0, height: 0 })
  const groundYRef = useRef(0)
  const highScoreRef = useRef(0)
  const keysPressed = useRef(new Set<string>())
  // Body rotation: physics-based — angular velocity decays in air, snaps on land.
  const playerAngleRef = useRef(0)
  const playerVRotRef = useRef(0)

  // Render state
  const [playerY, setPlayerY] = useState(0)
  const [playerCrouching, setPlayerCrouching] = useState(false)
  const [playerAngle, setPlayerAngle] = useState(0)
  const [obstacles, setObstacles] = useState<Obstacle[]>([])
  const [dust, setDust] = useState<DustParticle[]>([])
  const [meters, setMeters] = useState(0)
  const [highScore, setHighScore] = useState(0)
  const [phase, setPhase] = useState<GamePhase>("ready")
  const [shake, setShake] = useState(0)
  const [groundOffset, setGroundOffset] = useState(0)

  const resetGame = useCallback(() => {
    const { width, height } = containerSize.current
    const groundY = height * GROUND_Y_FRACTION
    groundYRef.current = groundY
    playerRef.current = {
      y: groundY - PLAYER_SIZE,
      vy: 0,
      onGround: true,
    }
    crouchingRef.current = false
    obstaclesRef.current = []
    dustRef.current = []
    speedRef.current = BASE_SPEED
    distanceRef.current = 0
    elapsedRef.current = 0
    nextSpawnXRef.current = width + 80
    groundOffsetRef.current = 0
    shakeRef.current = 0
    playerAngleRef.current = 0
    playerVRotRef.current = 0
    setPlayerY(groundY - PLAYER_SIZE)
    setPlayerCrouching(false)
    setPlayerAngle(0)
    setObstacles([])
    setDust([])
    setMeters(0)
    setShake(0)
  }, [])

  const triggerGameOver = useCallback(() => {
    if (phaseRef.current === "gameover") return
    phaseRef.current = "gameover"
    setPhase("gameover")

    const finalMeters = pixelsToMeters(distanceRef.current)
    if (finalMeters > highScoreRef.current) {
      highScoreRef.current = finalMeters
      saveHighScore(finalMeters)
      setHighScore(finalMeters)
    }

    // Death tumble: snap to a strong angular velocity that decays naturally.
    playerVRotRef.current = GAMEOVER_SPIN_VELOCITY

    if (shouldReduceMotion) return
    shakeRef.current = 10
    const p = playerRef.current
    const cx = PLAYER_X + PLAYER_SIZE / 2
    const cy = p.y + PLAYER_SIZE / 2
    for (let i = 0; i < DUST_COUNT; i++) {
      dustRef.current.push({
        id: ++dustIdRef.current,
        x: cx,
        y: cy,
        vx: (Math.random() - 0.5) * 5,
        vy: -1 - Math.random() * 4,
        life: DUST_LIFE_FRAMES,
        size: 3 + Math.random() * 5,
      })
    }
  }, [shouldReduceMotion])

  const startGame = useCallback(() => {
    resetGame()
    phaseRef.current = "playing"
    setPhase("playing")
  }, [resetGame])

  const jump = useCallback(() => {
    if (phaseRef.current === "ready") {
      startGame()
      return
    }
    if (phaseRef.current === "gameover") {
      startGame()
      return
    }
    if (playerRef.current.onGround) {
      playerRef.current.vy = JUMP_VELOCITY
      playerRef.current.onGround = false
      // Kick adds to current rolling spin so the player keeps coherent motion.
      playerVRotRef.current += JUMP_SPIN_BONUS
      crouchingRef.current = false
      setPlayerCrouching(false)
    }
  }, [startGame])

  // High score on mount + focus capture for restore on close
  useEffect(() => {
    const hs = loadHighScore()
    highScoreRef.current = hs
    setHighScore(hs)
    previouslyFocusedRef.current = document.activeElement as HTMLElement | null
    return () => {
      previouslyFocusedRef.current?.focus?.()
    }
  }, [])

  // Keyboard — bound only while the game is the active overlay
  useEffect(() => {
    if (activeGame !== "dino") return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.stopPropagation()
        onClose()
        return
      }
      if (e.key === " " || e.key === "ArrowUp" || e.code === "Space") {
        e.preventDefault()
        e.stopPropagation()
        jump()
        return
      }
      if (e.key === "ArrowDown") {
        e.preventDefault()
        e.stopPropagation()
        keysPressed.current.add("ArrowDown")
        if (phaseRef.current === "playing" && playerRef.current.onGround) {
          crouchingRef.current = true
          setPlayerCrouching(true)
        }
      }
    }
    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        keysPressed.current.delete("ArrowDown")
        crouchingRef.current = false
        setPlayerCrouching(false)
      }
    }
    window.addEventListener("keydown", handleKeyDown, true)
    window.addEventListener("keyup", handleKeyUp, true)
    return () => {
      window.removeEventListener("keydown", handleKeyDown, true)
      window.removeEventListener("keyup", handleKeyUp, true)
    }
  }, [activeGame, jump, onClose])

  // Main game loop
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const measure = () => {
      const rect = container.getBoundingClientRect()
      containerSize.current = { width: rect.width, height: rect.height }
      groundYRef.current = rect.height * GROUND_Y_FRACTION
      // Reposition the player on the new ground if not started yet
      if (phaseRef.current === "ready") {
        playerRef.current.y = groundYRef.current - PLAYER_SIZE
        setPlayerY(playerRef.current.y)
      }
    }
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(container)

    resetGame()
    container.focus({ preventScroll: true })

    const handlePointerDown = (e: PointerEvent) => {
      e.preventDefault()
      jump()
    }
    container.addEventListener("pointerdown", handlePointerDown)

    const gameLoop = (timestamp: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = timestamp
      const rawDt = (timestamp - lastTimeRef.current) / 16.667
      const dt = Math.min(rawDt, 3)
      lastTimeRef.current = timestamp

      const { width } = containerSize.current
      const groundY = groundYRef.current

      // Shake decay (always)
      if (shakeRef.current > 0) {
        shakeRef.current *= 0.85
        if (shakeRef.current < 0.5) shakeRef.current = 0
      }

      // Body rotation: physics-based, "rolling wheel" feel.
      // - Ready / playing on ground: angVel eases toward target = -speed * ROLL_FACTOR
      // - In air: angVel keeps its value with mild friction (carries jump impulse)
      // - Game over: tumble decays with friction
      if (phaseRef.current === "gameover") {
        playerVRotRef.current *= SPIN_AIR_FRICTION
      } else if (playerRef.current.onGround) {
        const baseTarget =
          phaseRef.current === "playing"
            ? speedRef.current * ROLL_FACTOR
            : IDLE_SPIN_VELOCITY
        const target = crouchingRef.current
          ? baseTarget * CROUCH_SPIN_BOOST
          : baseTarget
        playerVRotRef.current +=
          (target - playerVRotRef.current) * SPIN_GROUND_EASE * dt
      } else {
        playerVRotRef.current *= SPIN_AIR_FRICTION
      }
      playerAngleRef.current =
        (playerAngleRef.current + playerVRotRef.current * dt) % 360

      if (phaseRef.current === "playing") {
        elapsedRef.current += dt / 60
        speedRef.current = speedAt(elapsedRef.current)

        // Player physics
        const p = playerRef.current
        if (!p.onGround) {
          const fastFall = keysPressed.current.has("ArrowDown") && p.vy > 0
          const next = applyJumpPhysics(p.y, p.vy, dt, fastFall)
          p.y = next.y
          p.vy = next.vy
          const groundTop = groundY - PLAYER_SIZE
          if (p.y >= groundTop) {
            p.y = groundTop
            p.vy = 0
            p.onGround = true
            if (keysPressed.current.has("ArrowDown")) {
              crouchingRef.current = true
              setPlayerCrouching(true)
            }
          }
        } else {
          // Snap player to ground for current pose height
          p.y = groundY - PLAYER_SIZE
        }

        // Move and cull obstacles
        const moveBy = speedRef.current * dt
        // Distance traveled — drives the meter score.
        distanceRef.current += moveBy
        for (const o of obstaclesRef.current) {
          o.x -= moveBy
          // ~2.4 Hz wing flap @60fps — calm, dignified, not a panicked blur.
          if (o.type === "drone") o.flap += dt * 0.04
        }
        obstaclesRef.current = obstaclesRef.current.filter(
          (o) => o.x + o.w > -20
        )

        // Spawn new obstacles
        nextSpawnXRef.current -= moveBy
        while (nextSpawnXRef.current < width) {
          const obs = spawnObstacle(width + 30, groundY, elapsedRef.current)
          obstaclesRef.current.push(obs)
          const [min, max] = spawnGapRange(elapsedRef.current)
          nextSpawnXRef.current += min + Math.random() * (max - min)
        }

        // Ground scroll
        groundOffsetRef.current = (groundOffsetRef.current + moveBy) % 16

        // Collisions (drones don't trigger collide while crouching well below)
        const playerH = PLAYER_SIZE
        const playerRect: Rect = {
          x: PLAYER_X,
          y: p.y,
          w: PLAYER_SIZE,
          h: crouchingRef.current ? playerH * 0.55 : playerH,
        }
        // When crouching, hitbox starts lower
        if (crouchingRef.current) {
          playerRect.y = p.y + playerH * 0.45
        }
        for (const o of obstaclesRef.current) {
          if (aabbOverlap(playerRect, o)) {
            triggerGameOver()
            break
          }
        }
      }

      // Particles always update (death cloud animates after game over)
      if (dustRef.current.length > 0) {
        for (const dp of dustRef.current) {
          dp.x += dp.vx * dt
          dp.y += dp.vy * dt
          dp.vy += 0.4 * dt
          dp.life -= dt
        }
        dustRef.current = dustRef.current.filter((p) => p.life > 0)
      }

      // Commit render state
      setPlayerY(playerRef.current.y)
      setPlayerAngle(playerAngleRef.current)
      setObstacles([...obstaclesRef.current])
      setDust([...dustRef.current])
      setMeters(pixelsToMeters(distanceRef.current))
      setShake(shakeRef.current)
      setGroundOffset(groundOffsetRef.current)

      animationRef.current = requestAnimationFrame(gameLoop)
    }

    lastTimeRef.current = 0
    animationRef.current = requestAnimationFrame(gameLoop)

    return () => {
      cancelAnimationFrame(animationRef.current)
      container.removeEventListener("pointerdown", handlePointerDown)
      ro.disconnect()
    }
  }, [jump, resetGame, triggerGameOver])

  const shakeX = shake > 0.5 ? (Math.random() - 0.5) * shake : 0
  const shakeY = shake > 0.5 ? (Math.random() - 0.5) * shake : 0

  return (
    <div
      className="absolute inset-0 z-[60] flex flex-col bg-f1-special-page"
      role="dialog"
      aria-label={translations.ai.dino.title}
    >
      {/* Header — same shape as PongGame for consistency */}
      <div className="flex items-center justify-between px-4 py-3">
        <span className="text-base font-medium text-f1-foreground">
          {translations.ai.dino.title}
        </span>
        <F0Button
          icon={Cross}
          label={translations.actions.close}
          onClick={onClose}
          variant="ghost"
          hideLabel
        />
      </div>

      {/* Game area */}
      <div
        ref={containerRef}
        tabIndex={-1}
        className="relative flex-1 overflow-hidden outline-none"
        style={{
          touchAction: "none",
          transform: `translate(${shakeX}px, ${shakeY}px)`,
          cursor: "pointer",
        }}
      >
        <BrandGlow />
        <Ground offset={groundOffset} groundY={groundYRef.current || 0} />
        <Player
          y={playerY}
          crouching={playerCrouching}
          angle={playerAngle}
          dead={phase === "gameover"}
        />
        {obstacles.map((o) =>
          o.type === "block" ? (
            <Block key={o.id} obstacle={o} />
          ) : (
            <Drone key={o.id} obstacle={o} />
          )
        )}
        {dust.map((p) => (
          <DustDot key={p.id} particle={p} />
        ))}
        <ScorePanel
          meters={meters}
          highScore={highScore}
          hiLabel={translations.ai.dino.hi}
          scoreLabel={translations.ai.dino.score}
        />
        {phase === "ready" && (
          <Overlay text={translations.ai.dino.tapToStart} />
        )}
        {phase === "gameover" && (
          <GameOverOverlay
            title={translations.ai.dino.gameOver}
            restartHint={translations.ai.dino.pressToRestart}
            meters={meters}
            highScore={highScore}
            isNewRecord={meters > 0 && meters >= highScore}
            newRecordLabel={translations.ai.dino.newRecord}
            yourScoreLabel={translations.ai.dino.yourScore}
          />
        )}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-center gap-4 border-0 border-t border-solid border-f1-border-secondary px-3 py-3 text-sm font-medium text-f1-foreground-secondary">
        <span>{translations.ai.dino.controls}</span>
        <span aria-hidden>·</span>
        <span>{translations.ai.dino.escToExit}</span>
      </div>
    </div>
  )
}

DinoGame.displayName = "DinoGame"

// ─── Sub-components ──────────────────────────────────────────────────────────

function BrandGlow() {
  // Soft brand-color glow at the horizon for atmosphere — never too loud.
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3"
      style={{
        background:
          "radial-gradient(ellipse at 50% 100%, rgba(229, 86, 25, 0.10), transparent 65%)",
      }}
    />
  )
}

function Ground({ offset, groundY }: { offset: number; groundY: number }) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0"
      style={{ top: groundY, height: 16 }}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-f1-foreground/70" />
      <svg
        className="absolute left-0 top-0 h-4 w-[200%]"
        style={{ transform: `translateX(${-offset}px)`, opacity: 0.45 }}
      >
        <defs>
          <pattern
            id="onerun-ground"
            x="0"
            y="0"
            width="16"
            height="16"
            patternUnits="userSpaceOnUse"
          >
            <rect
              x="0"
              y="4"
              width="9"
              height="2"
              fill="currentColor"
              opacity="0.55"
            />
            <rect
              x="11"
              y="9"
              width="3"
              height="2"
              fill="currentColor"
              opacity="0.4"
            />
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill="url(#onerun-ground)"
          className="text-f1-foreground"
        />
      </svg>
    </div>
  )
}

// ─── Player ──────────────────────────────────────────────────────────────────
// Wraps the canonical F0OneIcon — its conic-gradient + 4-petal silhouette
// IS the brand. We sit it inside a sized wrapper that rotates as a rigid
// body, while the icon's own gradient continues its slow internal animation.
export function Player({
  y,
  crouching,
  angle,
  dead,
  size = PLAYER_SIZE,
  x = PLAYER_X,
}: {
  y: number
  crouching: boolean
  angle: number
  dead: boolean
  size?: number
  x?: number
}) {
  // Crouch: just render the icon smaller, anchored to the ground line.
  const CROUCH_SCALE = 0.6
  const renderSize = crouching ? size * CROUCH_SCALE : size
  const top = crouching ? y + (size - renderSize) : y
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute"
      style={{
        left: x + (size - renderSize) / 2,
        top,
        width: renderSize,
        height: renderSize,
        transform: `rotate(${angle}deg)`,
        transformOrigin: "center",
        willChange: "transform",
        opacity: dead ? 0.7 : 1,
        filter: dead ? "saturate(0.6)" : undefined,
      }}
    >
      {/* `!h-full !w-full` overrides F0OneIcon's fixed size variant so the
          icon fills our sized wrapper. */}
      <F0OneIcon size="md" className="!h-full !w-full" />
    </div>
  )
}

// ─── Block (jumpable obstacle) ───────────────────────────────────────────────
// Video-game "hazard crate": chunky dark border, brand gradient body, a
// horizontal panel divider that suggests stacked bricks, and — for taller
// blocks — corner rivets plus a center "!" mark in pixel-art style.
export function Block({
  obstacle,
  absolute = true,
}: {
  obstacle: Obstacle
  absolute?: boolean
}) {
  const { w, h, id } = obstacle
  const isMedium = h >= 22
  const isLarge = h >= 28
  const borderColor = "#8B0F25"
  const borderWidth = isMedium ? 1.5 : 1
  // Panel divider runs across the middle (slight bias upwards so taller
  // blocks read as a smaller "cap" stacked on a larger base).
  const dividerY = Math.round(h * 0.42)
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none", absolute && "absolute")}
      style={{
        left: absolute ? obstacle.x : undefined,
        top: absolute ? obstacle.y : undefined,
        width: w,
        height: h,
      }}
    >
      <svg
        viewBox={`0 0 ${w} ${h}`}
        width={w}
        height={h}
        style={{ display: "block" }}
      >
        <defs>
          <linearGradient id={`onerun-block-${id}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FF7B3D" />
            <stop offset="55%" stopColor="#E55619" />
            <stop offset="100%" stopColor="#E51943" />
          </linearGradient>
        </defs>

        {/* Body */}
        <rect
          x="0"
          y="0"
          width={w}
          height={h}
          rx="2"
          fill={`url(#onerun-block-${id})`}
        />

        {/* Top highlight stripe — bevel-light on the upper face */}
        <rect
          x="2"
          y="2"
          width={Math.max(0, w - 4)}
          height="1.5"
          rx="0.75"
          fill="rgba(255,255,255,0.55)"
        />

        {/* Panel divider — dark line + 1px light line below = "brick mortar" */}
        <rect x="0" y={dividerY} width={w} height="1" fill="rgba(0,0,0,0.28)" />
        <rect
          x="0"
          y={dividerY + 1}
          width={w}
          height="1"
          fill="rgba(255,255,255,0.22)"
        />

        {/* Center "!" mark — pixel-art glyph for tall crates */}
        {isLarge && (
          <g fill="rgba(255,255,255,0.95)">
            <rect
              x={w / 2 - 1}
              y={dividerY + 4}
              width="2"
              height={Math.max(4, h - dividerY - 9)}
            />
            <rect x={w / 2 - 1} y={h - 4} width="2" height="2" />
          </g>
        )}

        {/* Corner rivets for medium+ — classic crate hardware */}
        {isMedium && (
          <g fill="rgba(0,0,0,0.45)">
            <rect x="2.5" y="2.5" width="1.5" height="1.5" />
            <rect x={w - 4} y="2.5" width="1.5" height="1.5" />
            <rect x="2.5" y={h - 4} width="1.5" height="1.5" />
            <rect x={w - 4} y={h - 4} width="1.5" height="1.5" />
          </g>
        )}

        {/* Crisp outer border — strokes are inset by half their width so
            they sit cleanly inside the rounded rectangle. */}
        <rect
          x={borderWidth / 2}
          y={borderWidth / 2}
          width={w - borderWidth}
          height={h - borderWidth}
          rx="2"
          fill="none"
          stroke={borderColor}
          strokeWidth={borderWidth}
        />
      </svg>
    </div>
  )
}

// ─── Drone (flying obstacle) ─────────────────────────────────────────────────
// A stylized swallow-like bird: streamlined two-tone body, forked tail,
// smoothly-animating wings (continuous sin interpolation, not toggled poses),
// gentle vertical bob on each downstroke, distinct head with eye + beak.
export function Drone({
  obstacle,
  absolute = true,
}: {
  obstacle: Obstacle
  absolute?: boolean
}) {
  // Continuous wing phase: -1 (full down) → +1 (full up).
  const phase = Math.sin(obstacle.flap * Math.PI * 2)
  // Body bobs slightly — rises on downstroke (lift), sinks on upstroke.
  const bodyBob = -phase * 0.06
  // Wing tip vertical offset relative to body center
  const wingY = -phase * 0.42
  // Eye blink runs faster than the flap so it stays perceptible.
  const blinkOn = Math.sin(obstacle.flap * Math.PI * 2 * 3.2) > -0.4
  const w = obstacle.w
  const h = obstacle.h
  // Pre-computed Y coordinates in viewBox space
  const cy = h * 0.5
  const tipY = cy + wingY * h
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none", absolute && "absolute")}
      style={{
        left: absolute ? obstacle.x : undefined,
        top: absolute ? obstacle.y : undefined,
        width: w,
        height: h,
        transform: `translateY(${bodyBob * h}px)`,
        willChange: "transform",
      }}
    >
      <svg
        viewBox={`0 0 ${w} ${h}`}
        width={w}
        height={h}
        style={{ display: "block" }}
      >
        <defs>
          <linearGradient
            id={`onerun-drone-body-${obstacle.id}`}
            x1="0"
            y1="0"
            x2="0"
            y2="1"
          >
            <stop offset="0%" stopColor="#5862A8" />
            <stop offset="55%" stopColor="#7C8AD6" />
            <stop offset="100%" stopColor="#C8D2EC" />
          </linearGradient>
          <linearGradient
            id={`onerun-drone-wing-${obstacle.id}`}
            x1="0"
            y1="0"
            x2="1"
            y2="0"
          >
            <stop offset="0%" stopColor="#5862A8" />
            <stop offset="100%" stopColor="#A1ADE5" />
          </linearGradient>
        </defs>

        {/* Forked tail (drawn first so the body overlaps its base) */}
        <path
          d={`M ${w * 0.02} ${cy}
              L ${w * 0.18} ${cy - h * 0.18}
              L ${w * 0.24} ${cy}
              L ${w * 0.18} ${cy + h * 0.18} Z`}
          fill="#5862A8"
        />

        {/* Far wing — slightly behind, smaller, with continuous tip motion */}
        <path
          d={`M ${w * 0.46} ${cy}
              Q ${w * 0.32} ${cy + (tipY - cy) * 0.7}
                ${w * 0.16} ${tipY}
              Q ${w * 0.34} ${cy + (tipY - cy) * 0.45}
                ${w * 0.5} ${cy + 1.5} Z`}
          fill={`url(#onerun-drone-wing-${obstacle.id})`}
          opacity="0.7"
        />

        {/* Streamlined body — teardrop shape */}
        <path
          d={`M ${w * 0.2} ${cy}
              Q ${w * 0.2} ${cy - h * 0.3}
                ${w * 0.55} ${cy - h * 0.3}
              Q ${w * 0.8} ${cy - h * 0.3}
                ${w * 0.83} ${cy}
              Q ${w * 0.8} ${cy + h * 0.3}
                ${w * 0.55} ${cy + h * 0.3}
              Q ${w * 0.2} ${cy + h * 0.3}
                ${w * 0.2} ${cy} Z`}
          fill={`url(#onerun-drone-body-${obstacle.id})`}
        />

        {/* Near wing — drawn over the body, larger, leads the motion */}
        <path
          d={`M ${w * 0.5} ${cy - h * 0.05}
              Q ${w * 0.36} ${cy + (tipY - cy) * 0.85}
                ${w * 0.2} ${tipY}
              Q ${w * 0.4} ${cy + (tipY - cy) * 0.5}
                ${w * 0.56} ${cy + h * 0.05} Z`}
          fill={`url(#onerun-drone-wing-${obstacle.id})`}
        />

        {/* Head — slightly raised cap on top of the body */}
        <ellipse
          cx={w * 0.78}
          cy={cy - h * 0.08}
          rx={w * 0.13}
          ry={h * 0.28}
          fill="#5862A8"
        />

        {/* Beak — short pointed triangle */}
        <path
          d={`M ${w * 0.88} ${cy - h * 0.08}
              L ${w * 1.0} ${cy - h * 0.02}
              L ${w * 0.88} ${cy + h * 0.04} Z`}
          fill="#E55619"
        />

        {/* Eye — white sclera + pupil + tiny highlight */}
        <circle
          cx={w * 0.82}
          cy={cy - h * 0.16}
          r={Math.max(1.4, h * 0.13)}
          fill="white"
        />
        <circle
          cx={w * 0.83}
          cy={cy - h * 0.14}
          r={Math.max(0.7, h * 0.07)}
          fill={blinkOn ? "#1A1A2E" : "rgba(26,26,46,0.5)"}
        />
        <circle
          cx={w * 0.835}
          cy={cy - h * 0.17}
          r={Math.max(0.3, h * 0.025)}
          fill="white"
        />

        {/* Subtle belly highlight */}
        <ellipse
          cx={w * 0.5}
          cy={cy + h * 0.15}
          rx={w * 0.22}
          ry={h * 0.08}
          fill="rgba(255,255,255,0.25)"
        />
      </svg>
    </div>
  )
}

function DustDot({ particle }: { particle: DustParticle }) {
  const opacity = clamp(particle.life / DUST_LIFE_FRAMES, 0, 1)
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute rounded-full bg-f1-foreground-secondary"
      style={{
        left: particle.x - particle.size / 2,
        top: particle.y - particle.size / 2,
        width: particle.size,
        height: particle.size,
        opacity: opacity * 0.55,
      }}
    />
  )
}

function ScorePanel({
  meters,
  highScore,
  hiLabel,
  scoreLabel,
}: {
  meters: number
  highScore: number
  hiLabel: string
  scoreLabel: string
}) {
  return (
    <div className="font-mono pointer-events-none absolute right-6 top-3 flex items-baseline gap-3 text-xl font-semibold tabular-nums text-f1-foreground">
      {highScore > 0 && (
        <span className="text-base">
          <span className="text-f1-foreground-tertiary">{hiLabel} </span>
          {highScore.toString().padStart(5, "0")}
          <span className="text-f1-foreground-tertiary">m</span>
        </span>
      )}
      <span aria-label={scoreLabel}>
        {meters.toString().padStart(5, "0")}
        <span className="text-f1-foreground-tertiary">m</span>
      </span>
    </div>
  )
}

function Overlay({ title, text }: { title?: string; text: string }) {
  return (
    <div className="pointer-events-none absolute inset-0 z-30 flex flex-col items-center justify-center gap-2 px-4 text-center">
      {title && (
        <span className="text-2xl font-semibold text-f1-foreground">
          {title}
        </span>
      )}
      <span
        className={cn(
          "text-base font-medium text-f1-foreground-secondary",
          !title && "text-lg"
        )}
      >
        {text}
      </span>
    </div>
  )
}

function GameOverOverlay({
  title,
  restartHint,
  meters,
  highScore,
  isNewRecord,
  newRecordLabel,
  yourScoreLabel,
}: {
  title: string
  restartHint: string
  meters: number
  highScore: number
  isNewRecord: boolean
  newRecordLabel: string
  yourScoreLabel: string
}) {
  return (
    <div className="pointer-events-none absolute inset-0 z-30 flex flex-col items-center justify-center gap-2 px-4 text-center">
      <span className="mb-5 text-4xl font-semibold text-f1-foreground">
        {title}
      </span>
      <div className="flex flex-col items-center gap-1">
        <span className="text-base font-semibold uppercase tracking-wide text-f1-foreground-tertiary">
          {yourScoreLabel}
        </span>
        <span className="font-mono text-4xl font-semibold tabular-nums text-f1-foreground">
          {meters.toString().padStart(5, "0")}
          <span className="text-lg text-f1-foreground-secondary">m</span>
        </span>
        {isNewRecord ? (
          <span
            className="mt-1 rounded-full px-3 py-1 text-base font-semibold text-f1-background"
            style={{
              background:
                "linear-gradient(90deg, #E55619 0%, #E51943 50%, #A1ADE5 100%)",
            }}
          >
            {newRecordLabel}
          </span>
        ) : (
          highScore > 0 && (
            <span className="mt-2 text-base text-f1-foreground-secondary">
              HI {highScore.toString().padStart(5, "0")}m
            </span>
          )
        )}
      </div>
      <span className="mt-5 text-base font-medium text-f1-foreground-secondary">
        {restartHint}
      </span>
    </div>
  )
}
