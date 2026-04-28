import type { Meta, StoryObj } from "@storybook/react-vite"
import { useEffect, useState } from "react"

import { Block, Drone, type Obstacle, Player } from "../DinoGame"

/**
 * Isolated previews of the One Run game sprites so we can iterate on the
 * visuals (player, blocks, drones) without launching the full game.
 *
 * Each sprite is positioned absolutely inside a small staged box, mimicking
 * the in-game layout: the world has a "ground line" at GROUND_Y_FRACTION and
 * the player sits on it, drones fly above, blocks stand on the ground.
 */

const meta: Meta = {
  title: "AI/F0AiChat/One Run sprites",
  parameters: { layout: "centered" },
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj

// ─── Stage helpers ───────────────────────────────────────────────────────────

function Stage({
  width = 220,
  height = 140,
  children,
  label,
}: {
  width?: number
  height?: number
  children: React.ReactNode
  label?: string
}) {
  // Same baseline as the in-game world (~78% from the top).
  const groundY = Math.round(height * 0.78)
  return (
    <div className="flex flex-col gap-2">
      <div
        className="relative overflow-hidden rounded-md border border-solid border-f1-border-secondary bg-f1-special-page"
        style={{ width, height }}
      >
        {/* Ground line for visual reference */}
        <div
          aria-hidden
          className="absolute inset-x-0 h-px bg-f1-foreground/70"
          style={{ top: groundY }}
        />
        {children}
      </div>
      {label && (
        <span className="text-center text-xs font-medium text-f1-foreground-secondary">
          {label}
        </span>
      )}
    </div>
  )
}

// Mini hook: drives a continuously increasing "flap" counter for animated drones.
function useFlap(speed = 0.06) {
  const [flap, setFlap] = useState(0)
  useEffect(() => {
    let raf = 0
    let last = performance.now()
    const tick = (t: number) => {
      const dt = (t - last) / 16.667
      last = t
      setFlap((f) => f + speed * dt)
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [speed])
  return flap
}

// Mini hook: rotates the player's body angle continuously for the spin preview.
function useSpin(degPerFrame = 4) {
  const [angle, setAngle] = useState(0)
  useEffect(() => {
    let raf = 0
    let last = performance.now()
    const tick = (t: number) => {
      const dt = (t - last) / 16.667
      last = t
      setAngle((a) => (a + degPerFrame * dt) % 360)
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [degPerFrame])
  return angle
}

// ─── Player stories ──────────────────────────────────────────────────────────

export const Player_Idle: Story = {
  name: "Player / idle on ground",
  render: () => {
    const stageH = 140
    const groundY = Math.round(stageH * 0.78)
    return (
      <Stage height={stageH} label="Idle, upright on the ground">
        <Player
          y={groundY - 32}
          crouching={false}
          angle={0}
          dead={false}
          x={94}
        />
      </Stage>
    )
  },
}

export const Player_Crouching: Story = {
  name: "Player / crouching",
  render: () => {
    const stageH = 140
    const groundY = Math.round(stageH * 0.78)
    return (
      <Stage height={stageH} label="Crouching (↓ key)">
        <Player
          y={groundY - 32}
          crouching={true}
          angle={0}
          dead={false}
          x={94}
        />
      </Stage>
    )
  },
}

export const Player_Spinning: Story = {
  name: "Player / spinning (jump animation)",
  render: () => {
    const angle = useSpin(6)
    const stageH = 140
    const groundY = Math.round(stageH * 0.78)
    return (
      <Stage height={stageH} label="Continuous rotation — body spin in flight">
        <Player
          y={groundY - 60}
          crouching={false}
          angle={angle}
          dead={false}
          x={94}
        />
      </Stage>
    )
  },
}

export const Player_Dead: Story = {
  name: "Player / game over",
  render: () => {
    const stageH = 140
    const groundY = Math.round(stageH * 0.78)
    return (
      <Stage height={stageH} label="Dead — drop shadow shifts to red">
        <Player
          y={groundY - 32}
          crouching={false}
          angle={18}
          dead={true}
          x={94}
        />
      </Stage>
    )
  },
}

export const Player_Sizes: Story = {
  name: "Player / sizes",
  render: () => (
    <div className="flex items-end gap-4">
      {[24, 32, 48, 64].map((size) => (
        <Stage
          key={size}
          width={size + 60}
          height={size + 60}
          label={`${size}px`}
        >
          <Player
            y={Math.round((size + 60) * 0.78) - size}
            crouching={false}
            angle={0}
            dead={false}
            size={size}
            x={30}
          />
        </Stage>
      ))}
    </div>
  ),
}

// ─── Block stories ───────────────────────────────────────────────────────────

function blockObstacle(
  w: number,
  h: number,
  x: number,
  groundY: number
): Obstacle {
  return {
    id: Math.floor(Math.random() * 1e6),
    type: "block",
    x,
    y: groundY - h,
    w,
    h,
    flap: 0,
  }
}

export const Block_Sizes: Story = {
  name: "Block / all sizes",
  render: () => {
    const stageH = 140
    const groundY = Math.round(stageH * 0.78)
    return (
      <Stage width={260} height={stageH} label="Small · medium · large">
        <Block obstacle={blockObstacle(12, 18, 50, groundY)} />
        <Block obstacle={blockObstacle(18, 24, 110, groundY)} />
        <Block obstacle={blockObstacle(24, 30, 180, groundY)} />
      </Stage>
    )
  },
}

export const Block_Single: Story = {
  name: "Block / single (zoomed)",
  render: () => {
    const stageH = 200
    const groundY = Math.round(stageH * 0.78)
    return (
      <Stage width={200} height={stageH} label="Large block (24×30)">
        <Block obstacle={blockObstacle(24, 30, 88, groundY)} />
      </Stage>
    )
  },
}

// ─── Drone stories ───────────────────────────────────────────────────────────

function droneObstacle(
  flap: number,
  x: number,
  y: number,
  w = 30,
  h = 14
): Obstacle {
  return { id: 1, type: "drone", x, y, w, h, flap }
}

export const Drone_WingsUp: Story = {
  name: "Drone / wings up",
  render: () => (
    <Stage label="Wings up pose (frozen for inspection)">
      <Drone obstacle={droneObstacle(0.1, 95, 45)} />
    </Stage>
  ),
}

export const Drone_WingsDown: Story = {
  name: "Drone / wings down",
  render: () => (
    <Stage label="Wings down pose (frozen for inspection)">
      <Drone obstacle={droneObstacle(0.6, 95, 45)} />
    </Stage>
  ),
}

export const Drone_Animated: Story = {
  name: "Drone / animated flap",
  render: () => {
    const flap = useFlap(0.08)
    return (
      <Stage label="Continuous flap + tilt + LED blink">
        <Drone obstacle={droneObstacle(flap, 95, 45)} />
      </Stage>
    )
  },
}

export const Drone_Sizes: Story = {
  name: "Drone / sizes",
  render: () => {
    const flap = useFlap(0.08)
    return (
      <div className="flex items-center gap-3">
        {[
          [22, 12],
          [30, 14],
          [44, 20],
          [60, 28],
        ].map(([w, h]) => (
          <Stage
            key={`${w}x${h}`}
            width={w + 70}
            height={90}
            label={`${w}×${h}`}
          >
            <Drone obstacle={droneObstacle(flap, 35, 35)} />
          </Stage>
        ))}
      </div>
    )
  },
}

// ─── Combined parade ─────────────────────────────────────────────────────────

export const ParadeLineup: Story = {
  name: "All sprites in one stage",
  render: () => {
    const flap = useFlap(0.08)
    const angle = useSpin(5)
    const stageH = 180
    const groundY = Math.round(stageH * 0.78)
    return (
      <Stage
        width={420}
        height={stageH}
        label="Player (spinning), drone, three block sizes"
      >
        <Player
          y={groundY - 32}
          crouching={false}
          angle={angle}
          dead={false}
          x={36}
        />
        <Drone obstacle={droneObstacle(flap, 110, 60)} />
        <Block obstacle={blockObstacle(12, 18, 200, groundY)} />
        <Block obstacle={blockObstacle(18, 24, 260, groundY)} />
        <Block obstacle={blockObstacle(24, 30, 330, groundY)} />
      </Stage>
    )
  },
}
