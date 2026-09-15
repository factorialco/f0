import { useEffect, useRef } from "react"

/**
 * React Bits' GradientWaves, ported to plain WebGL2.
 *
 * The original ships on `ogl`, which the prototype allowlist does not
 * carry (and adding a dependency means editing package.json, which
 * AGENTS.md forbids) — so the shader is the original's, verbatim, and
 * only the ~60 lines of context/program/mesh plumbing are rewritten
 * against the raw API. Same props, same defaults.
 *
 * Colours come from Factorial's own ramp: radical for the water,
 * neutrals for the haze it dissolves into (see `HomeWaves` below).
 */

const VERTEX = `#version 300 es
in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`

const FRAGMENT = `#version 300 es
precision highp float;
uniform vec2 iResolution;
uniform float iTime;
uniform float uSpeed;
uniform float uAmplitude;
uniform float uWaveScale;
uniform float uWaveRatio;
uniform float uSwell;
uniform float uTurbulence;
uniform float uTilt;
uniform float uZoom;
uniform float uHeight;
uniform float uFogDepth;
uniform float uSteps;
uniform float uBrightness;
uniform float uOpacity;
uniform float uGrain;
uniform float uGrainIntensity;
uniform vec2 uMouse;
uniform float uParallax;
uniform bool uEnableMouse;
uniform vec3 uHorizonColor;
uniform vec3 uWaveColor;
uniform vec3 uCrestColor;
out vec4 fragColor;

const float MAX_DIST = 20000.0;

float hash21(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}

float plasma(vec3 r, vec2 freq, vec4 tc) {
  float mx = r.x + tc.x;
  mx += uSwell * sin((r.y + mx) / 20.0 + tc.y);
  float my = r.y - tc.z;
  my += uTurbulence * cos(r.x / 23.0 + tc.w);
  return r.z - (sin(mx * freq.x) * uAmplitude + sin(my * freq.y) * uAmplitude + uHeight);
}

float raymarch(vec3 pos, vec3 dir, vec2 freq, vec4 tc) {
  float dist = 0.0;
  for (int i = 0; i < 128; i++) {
    if (float(i) >= uSteps) break;
    float dscene = plasma(pos + dist * dir, freq, tc);
    if (abs(dscene) < 0.1) break;
    dist += 0.9 * dscene;
    if (!(abs(dist) < MAX_DIST)) return MAX_DIST;
  }
  return dist;
}

void main() {
  float T = iTime * uSpeed;
  vec2 freq = vec2(uWaveScale / 7.0, (uWaveScale * uWaveRatio) / 3.0);
  vec4 tc = vec4(T / 0.130, T / 0.810, T / 0.200, T / 0.710);
  float c, s;
  float vfov = (3.14159 / 2.3) / max(uZoom, 0.05);
  vec3 cam = vec3(0.0, 0.0, 30.0);
  vec2 uv = (gl_FragCoord.xy / iResolution.xy) - 0.5;
  uv.x *= iResolution.x / iResolution.y;
  uv.y *= -1.0;

  vec3 dir = vec3(0.0, 0.0, -1.0);
  float ulen = length(uv);
  float xrot = vfov * ulen;
  c = cos(xrot); s = sin(xrot);
  dir = mat3(1.0, 0.0, 0.0, 0.0, c, -s, 0.0, s, c) * dir;
  vec2 nuv = ulen > 1e-5 ? uv / ulen : vec2(1.0, 0.0);
  c = nuv.x; s = nuv.y;
  dir = mat3(c, -s, 0.0, s, c, 0.0, 0.0, 0.0, 1.0) * dir;
  c = cos(uTilt); s = sin(uTilt);
  dir = mat3(c, 0.0, s, 0.0, 1.0, 0.0, -s, 0.0, c) * dir;

  if (uEnableMouse) {
    float yaw = (uMouse.x - 0.5) * uParallax * 0.4;
    float pitch = (uMouse.y - 0.5) * uParallax * 0.4;
    c = cos(yaw); s = sin(yaw);
    dir = mat3(c, 0.0, s, 0.0, 1.0, 0.0, -s, 0.0, c) * dir;
    c = cos(pitch); s = sin(pitch);
    dir = mat3(1.0, 0.0, 0.0, 0.0, c, -s, 0.0, s, c) * dir;
  }

  float dist = raymarch(cam, dir, freq, tc);
  vec3 pos = cam + dist * dir;

  float t = clamp(uFogDepth / max(dist, 0.001), 0.0, 1.0);
  vec3 body = mix(uWaveColor, uCrestColor, clamp(pos.z * 0.08 + 0.5, 0.0, 1.0));
  vec3 col = mix(uHorizonColor, body, t);
  col *= uBrightness;
  col = clamp(col, 0.0, 1.0);

  float alpha = clamp(t, 0.0, 1.0) * uOpacity;
  if (uGrain > 0.5) {
    float g = hash21(gl_FragCoord.xy + mod(iTime, 64.0) * 11.0);
    alpha += (g - 0.5) * uGrainIntensity;
  }
  alpha = clamp(alpha, 0.0, 1.0);
  fragColor = vec4(col * alpha, alpha);
}
`

export type GradientWavesProps = {
  horizonColor?: string
  waveColor?: string
  crestColor?: string
  speed?: number
  amplitude?: number
  waveScale?: number
  waveRatio?: number
  swell?: number
  turbulence?: number
  tilt?: number
  zoom?: number
  height?: number
  fogDepth?: number
  detail?: "low" | "medium" | "high"
  brightness?: number
  opacity?: number
  mouseInteraction?: boolean
  parallaxStrength?: number
  grain?: boolean
  grainIntensity?: number
  className?: string
}

function hexToRgb(hex: string): [number, number, number] {
  const match = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  if (!match) return [1, 1, 1]
  return [
    parseInt(match[1], 16) / 255,
    parseInt(match[2], 16) / 255,
    parseInt(match[3], 16) / 255,
  ]
}

function detailToSteps(detail: "low" | "medium" | "high") {
  if (detail === "low") return 40
  if (detail === "high") return 110
  return 70
}

function compile(gl: WebGL2RenderingContext, type: number, source: string) {
  const shader = gl.createShader(type)
  if (!shader) return null
  gl.shaderSource(shader, source)
  gl.compileShader(shader)
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    // Silent: a shader that will not build should cost the page its
    // backdrop, not its Home.
    gl.deleteShader(shader)
    return null
  }
  return shader
}

export function GradientWaves({
  horizonColor = "#5227FF",
  waveColor = "#FF9FFC",
  crestColor = "#FFFFFF",
  speed = 0.4,
  amplitude = 2.5,
  waveScale = 0.6,
  waveRatio = 0.9,
  swell = 35,
  turbulence = 20,
  tilt = 1.11,
  zoom = 1,
  height = 5.5,
  fogDepth = 15,
  detail = "medium",
  brightness = 1,
  opacity = 1,
  mouseInteraction = true,
  parallaxStrength = 0.5,
  grain = true,
  grainIntensity = 0.05,
  className = "",
}: GradientWavesProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  // The render loop reads the LATEST props through this ref rather than
  // re-creating the context on every change.
  const props = useRef({
    horizonColor,
    waveColor,
    crestColor,
    speed,
    amplitude,
    waveScale,
    waveRatio,
    swell,
    turbulence,
    tilt,
    zoom,
    height,
    fogDepth,
    detail,
    brightness,
    opacity,
    mouseInteraction,
    parallaxStrength,
    grain,
    grainIntensity,
  })
  props.current = {
    horizonColor,
    waveColor,
    crestColor,
    speed,
    amplitude,
    waveScale,
    waveRatio,
    swell,
    turbulence,
    tilt,
    zoom,
    height,
    fogDepth,
    detail,
    brightness,
    opacity,
    mouseInteraction,
    parallaxStrength,
    grain,
    grainIntensity,
  }

  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)")
    const canvas = document.createElement("canvas")
    canvas.style.width = "100%"
    canvas.style.height = "100%"
    canvas.style.display = "block"
    const gl = canvas.getContext("webgl2", {
      alpha: true,
      premultipliedAlpha: true,
      antialias: false,
    })
    if (!gl) return
    container.appendChild(canvas)

    const vs = compile(gl, gl.VERTEX_SHADER, VERTEX)
    const fs = compile(gl, gl.FRAGMENT_SHADER, FRAGMENT)
    const program = gl.createProgram()
    if (!vs || !fs || !program) {
      container.removeChild(canvas)
      return
    }
    gl.attachShader(program, vs)
    gl.attachShader(program, fs)
    gl.bindAttribLocation(program, 0, "position")
    gl.linkProgram(program)
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      container.removeChild(canvas)
      return
    }
    gl.useProgram(program)

    // One oversized triangle covers the viewport with no index buffer.
    const buffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 3, -1, -1, 3]),
      gl.STATIC_DRAW
    )
    gl.enableVertexAttribArray(0)
    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0)

    const u = (name: string) => gl.getUniformLocation(program, name)
    const loc = {
      iResolution: u("iResolution"),
      iTime: u("iTime"),
      uSpeed: u("uSpeed"),
      uAmplitude: u("uAmplitude"),
      uWaveScale: u("uWaveScale"),
      uWaveRatio: u("uWaveRatio"),
      uSwell: u("uSwell"),
      uTurbulence: u("uTurbulence"),
      uTilt: u("uTilt"),
      uZoom: u("uZoom"),
      uHeight: u("uHeight"),
      uFogDepth: u("uFogDepth"),
      uSteps: u("uSteps"),
      uBrightness: u("uBrightness"),
      uOpacity: u("uOpacity"),
      uGrain: u("uGrain"),
      uGrainIntensity: u("uGrainIntensity"),
      uMouse: u("uMouse"),
      uParallax: u("uParallax"),
      uEnableMouse: u("uEnableMouse"),
      uHorizonColor: u("uHorizonColor"),
      uWaveColor: u("uWaveColor"),
      uCrestColor: u("uCrestColor"),
    }

    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const setSize = () => {
      const rect = container.getBoundingClientRect()
      const w = Math.max(1, Math.floor(rect.width * dpr))
      const h = Math.max(1, Math.floor(rect.height * dpr))
      if (canvas.width === w && canvas.height === h) return
      canvas.width = w
      canvas.height = h
      gl.viewport(0, 0, w, h)
    }
    const ro = new ResizeObserver(setSize)
    ro.observe(container)
    setSize()

    const current: [number, number] = [0.5, 0.5]
    const target: [number, number] = [0.5, 0.5]
    // Tracked on the window, not the canvas: the layer sits BEHIND the
    // composer with pointer-events off, so it never sees a pointer of
    // its own.
    const onPointerMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect()
      if (!rect.width || !rect.height) return
      target[0] = (event.clientX - rect.left) / rect.width
      target[1] = 1 - (event.clientY - rect.top) / rect.height
    }
    window.addEventListener("pointermove", onPointerMove)

    let raf = 0
    let visible = true
    let pageVisible = !document.hidden
    const start = performance.now()

    const frame = (now: number) => {
      const p = props.current
      gl.uniform2f(loc.iResolution, canvas.width, canvas.height)
      gl.uniform1f(loc.iTime, (now - start) * 0.001)
      gl.uniform1f(loc.uSpeed, reduced.matches ? 0 : p.speed)
      gl.uniform1f(loc.uAmplitude, p.amplitude)
      gl.uniform1f(loc.uWaveScale, p.waveScale)
      gl.uniform1f(loc.uWaveRatio, p.waveRatio)
      gl.uniform1f(loc.uSwell, p.swell)
      gl.uniform1f(loc.uTurbulence, p.turbulence)
      gl.uniform1f(loc.uTilt, p.tilt)
      gl.uniform1f(loc.uZoom, p.zoom)
      gl.uniform1f(loc.uHeight, p.height)
      gl.uniform1f(loc.uFogDepth, p.fogDepth)
      gl.uniform1f(loc.uSteps, detailToSteps(p.detail))
      gl.uniform1f(loc.uBrightness, p.brightness)
      gl.uniform1f(loc.uOpacity, p.opacity)
      gl.uniform1f(loc.uGrain, p.grain ? 1 : 0)
      gl.uniform1f(loc.uGrainIntensity, p.grainIntensity)
      gl.uniform1f(loc.uParallax, p.parallaxStrength)
      gl.uniform1i(
        loc.uEnableMouse,
        p.mouseInteraction && !reduced.matches ? 1 : 0
      )
      const tx = p.mouseInteraction ? target[0] : 0.5
      const ty = p.mouseInteraction ? target[1] : 0.5
      current[0] += 0.05 * (tx - current[0])
      current[1] += 0.05 * (ty - current[1])
      gl.uniform2f(loc.uMouse, current[0], current[1])
      const horizon = hexToRgb(p.horizonColor)
      const wave = hexToRgb(p.waveColor)
      const crest = hexToRgb(p.crestColor)
      gl.uniform3f(loc.uHorizonColor, horizon[0], horizon[1], horizon[2])
      gl.uniform3f(loc.uWaveColor, wave[0], wave[1], wave[2])
      gl.uniform3f(loc.uCrestColor, crest[0], crest[1], crest[2])
      gl.clearColor(0, 0, 0, 0)
      gl.clear(gl.COLOR_BUFFER_BIT)
      gl.drawArrays(gl.TRIANGLES, 0, 3)
      raf = requestAnimationFrame(frame)
    }

    const play = () => {
      if (visible && pageVisible && raf === 0)
        raf = requestAnimationFrame(frame)
    }
    const pause = () => {
      if (raf !== 0) {
        cancelAnimationFrame(raf)
        raf = 0
      }
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting
        if (visible) play()
        else pause()
      },
      { threshold: 0 }
    )
    io.observe(container)
    const onVisibility = () => {
      pageVisible = !document.hidden
      if (pageVisible) play()
      else pause()
    }
    document.addEventListener("visibilitychange", onVisibility)
    play()

    return () => {
      pause()
      ro.disconnect()
      io.disconnect()
      document.removeEventListener("visibilitychange", onVisibility)
      window.removeEventListener("pointermove", onPointerMove)
      gl.deleteBuffer(buffer)
      gl.deleteProgram(program)
      gl.deleteShader(vs)
      gl.deleteShader(fs)
      gl.getExtension("WEBGL_lose_context")?.loseContext()
      canvas.remove()
    }
  }, [])

  return (
    <div
      ref={containerRef}
      aria-hidden
      className={`pointer-events-none relative h-full w-full overflow-hidden ${className}`.trim()}
    />
  )
}
