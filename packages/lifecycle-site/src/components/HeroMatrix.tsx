import { useEffect, useRef } from "react"

// A sparse terminal-style glyph field with a gentle, persistent shimmer — an
// original take on the dot-matrix hero backdrop. Pure canvas, no assets.
// Every cell keeps a dim baseline so nothing strobes on/off; pulses ease back
// to that baseline slowly. Respects prefers-reduced-motion.
const GLYPHS = ["·", ".", ":", "-", "+", "*", "/", "=", "•"]
const CELL = 24 // px grid step
const STEP_EVERY = 3 // advance state every Nth frame → slower motion
const DECAY = 0.006 // how fast a pulse eases back to baseline (smaller = slower)

export function HeroMatrix() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return
    const parent = canvas.parentElement
    if (!parent) return

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches

    let cols = 0
    let rows = 0
    let alphas: Float32Array = new Float32Array(0)
    let base: Float32Array = new Float32Array(0)
    let glyphs: Uint8Array = new Uint8Array(0)
    let raf = 0
    let frame = 0

    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    function resize() {
      const w = parent!.clientWidth
      const h = parent!.clientHeight
      canvas!.width = Math.floor(w * dpr)
      canvas!.height = Math.floor(h * dpr)
      canvas!.style.width = `${w}px`
      canvas!.style.height = `${h}px`
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx!.font = "13px ui-monospace, SFMono-Regular, Menlo, monospace"
      ctx!.textBaseline = "middle"
      ctx!.textAlign = "center"
      cols = Math.ceil(w / CELL)
      rows = Math.ceil(h / CELL)
      alphas = new Float32Array(cols * rows)
      base = new Float32Array(cols * rows)
      glyphs = new Uint8Array(cols * rows)
      for (let i = 0; i < glyphs.length; i++) {
        glyphs[i] = Math.floor(Math.random() * GLYPHS.length)
        // dim persistent baseline so the field is always softly present
        base[i] = Math.random() < 0.7 ? 0.06 + Math.random() * 0.1 : 0.03
        alphas[i] = base[i]
      }
      draw()
    }

    function draw() {
      const w = canvas!.width / dpr
      const h = canvas!.height / dpr
      ctx!.clearRect(0, 0, w, h)
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const i = r * cols + c
          const a = alphas[i]
          if (a <= 0.02) continue
          ctx!.fillStyle = `rgba(255,255,255,${a * 0.5})`
          ctx!.fillText(GLYPHS[glyphs[i]], c * CELL + CELL / 2, r * CELL + CELL / 2)
        }
      }
    }

    function step() {
      // ease each cell back toward its baseline (never to zero → no strobe)
      for (let i = 0; i < alphas.length; i++) {
        if (alphas[i] > base[i]) alphas[i] = Math.max(base[i], alphas[i] - DECAY)
      }
      // a couple of slow, soft pulses
      const bursts = 1 + Math.floor(Math.random() * 2)
      for (let b = 0; b < bursts; b++) {
        const i = Math.floor(Math.random() * alphas.length)
        glyphs[i] = Math.floor(Math.random() * GLYPHS.length)
        alphas[i] = 0.38 + Math.random() * 0.22
      }
    }

    function loop() {
      frame++
      if (frame % STEP_EVERY === 0) {
        step()
        draw()
      }
      raf = window.requestAnimationFrame(loop)
    }

    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(parent)
    if (!reduce) raf = window.requestAnimationFrame(loop)

    return () => {
      window.cancelAnimationFrame(raf)
      ro.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  )
}
