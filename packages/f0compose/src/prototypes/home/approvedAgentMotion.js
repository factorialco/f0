/** Imported from Jonathan's approved factorial-agent/index.html.
 * SVG paths and per-frame motion are preserved. Adaptations: scoped element lookup,
 * automatic 7s + 450ms + 3s cycle, visibility lifecycle and cleanup.
 */
export const approvedAgentArtwork =
  '\n<g><g data-agent-part="outer" fill="#E51943"><path d="M6.91895 16.2844C5.94243 15.1275 5.35384 13.6325 5.35384 12C5.35384 8.32943 8.32943 5.35384 12 5.35384C15.6706 5.35384 18.6461 8.32943 18.6461 12C18.6461 13.6325 18.0576 15.1275 17.0811 16.2844C17.417 16.4944 17.739 16.7244 18.0453 16.973L18.1792 17.0815C19.3168 15.6997 20 13.9296 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 13.9296 4.68318 15.6997 5.82087 17.0815L5.95467 16.973C6.26096 16.7244 6.58297 16.4944 6.91895 16.2844Z"/></g><g data-agent-part="shoulders" fill="#E51943"><path d="M17.0353 18.2143C15.66 19.3302 13.9072 19.9989 11.9981 19.9989C10.089 19.9989 8.33619 19.3302 6.96094 18.2143C8.33619 17.0984 10.089 16.4297 11.9981 16.4297C13.9072 16.4297 15.66 17.0984 17.0353 18.2143Z"/></g>\n<g data-agent-part="character"><g data-agent-part="head" fill="#E51943"><path d="M12.0007 14.7046C13.6321 14.7046 14.9546 13.3821 14.9546 11.7508C14.9546 10.1194 13.6321 8.79688 12.0007 8.79688C10.3693 8.79688 9.04688 10.1194 9.04688 11.7508C9.04688 13.3821 10.3693 14.7046 12.0007 14.7046Z"/></g><g data-agent-part="face" fill="none" stroke="white" stroke-linecap="round"><path data-agent-part="eye-left"/><path data-agent-part="eye-right"/></g></g></g>\n'
export function mountApprovedAgentMotion(scene) {
  const $ = (id) => scene.querySelector(`[data-agent-part="${id}"]`),
    outer = $("outer"),
    shoulders = $("shoulders"),
    head = $("head"),
    character = $("character"),
    face = $("face"),
    left = $("eye-left"),
    right = $("eye-right")
  let ringScale = 86
  const resizeObserver = new ResizeObserver(() => {
    const b = scene.getBoundingClientRect()
    const unit = Math.min(b.width / 400, b.height / 400)
    ringScale = Math.hypot(b.width / unit, b.height / unit) / 2 / 6.646 + 12
  })
  resizeObserver.observe(scene)
  const silhouette = head.querySelector("path"),
    originalHead = silhouette.getAttribute("d")
  const reduced = matchMedia("(prefers-reduced-motion: reduce)")
  let p = 0,
    target = 0,
    from = 0,
    started = 0,
    duration = 525,
    phase = "rest",
    pointer = { x: 0, y: 0 },
    pointerInside = false,
    look = { x: 0, y: 0 },
    eyeLook = { x: 0, y: 0 },
    prev = 0
  const clamp = (x) => Math.max(0, Math.min(1, x))
  const smooth = (x) => {
    x = clamp(x)
    return x * x * (3 - 2 * x)
  }
  const ease = (x) => 1 - Math.pow(1 - x, 4)
  function label(next) {
    phase = next
  }
  function setActive(active) {
    const value = active ? 1 : 0
    if (target === value) return
    from = p
    target = value
    started = performance.now()
    duration = reduced.matches ? 180 : active ? 525 : 450
    label(active ? "in" : "out")
  }
  const pointerMove = (e) => {
    pointerInside = true
    const b = scene.getBoundingClientRect()
    pointer = {
      x: Math.max(-1, Math.min(1, ((e.clientX - b.left) / b.width) * 2 - 1)),
      y: Math.max(-1, Math.min(1, ((e.clientY - b.top) / b.height) * 2 - 1)),
    }
  }
  const pointerLeave = () => {
    pointerInside = false
    pointer = { x: 0, y: 0 }
  }
  scene.addEventListener("pointermove", pointerMove)
  scene.addEventListener("pointerleave", pointerLeave)
  const gazeStops = [
    [0, 0],
    [0, -1],
    [0.9, -0.45],
    [1, 0.1],
    [0, 0],
    [-1, -0.15],
    [-0.5, 0.65],
    [0, 0],
  ]
  let raf = 0,
    cycleStart = performance.now()
  const host = scene.closest("[data-hybrid-composer]")
  let visible = !host || host.getAttribute("data-compact") === "true"
  const visibilityObserver = new MutationObserver(() => {
    const next = host.getAttribute("data-compact") === "true"
    if (next === visible) return
    visible = next
    if (visible) cycleStart = performance.now()
    else pointerLeave()
    setActive(visible)
  })
  if (host)
    visibilityObserver.observe(host, {
      attributes: true,
      attributeFilter: ["data-compact"],
    })
  function frame(now) {
    setActive(visible && (now - cycleStart) % 10450 < 7000)
    const dt = Math.min((now - prev) / 1000, 0.05)
    prev = now
    const t = clamp((now - started) / duration)
    p = from + (target - from) * ease(t)
    if (t === 1) label(target ? "alive" : "rest")
    const sec = now / 1000
    const eyeSec = sec * 2
    const gazeIndex = Math.floor(sec / 1.8) % gazeStops.length
    const autoGaze = gazeStops[gazeIndex]
    const gaze = pointerInside ? pointer : { x: autoGaze[0], y: autoGaze[1] }
    const eyeBlend = 1 - Math.exp(-dt * 10)
    eyeLook.x += (gaze.x - eyeLook.x) * eyeBlend
    eyeLook.y += (gaze.y - eyeLook.y) * eyeBlend
    const motion = reduced.matches ? 0 : p
    const blend = 1 - Math.exp(-dt * 4)
    look.x += (gaze.x - look.x) * blend
    look.y += (gaze.y - look.y) * blend
    const bob = motion * Math.sin(sec * 1.8) * 3
    const tilt = motion * (Math.sin(sec * 0.85) * 2.4 + look.x * 4)
    const impulse = reduced.matches
      ? 0
      : Math.sin(Math.PI * t) *
        Math.exp(-5 * t) *
        Math.abs(target - from) *
        (target ? 1 : -1)
    const stretch = 1 + motion * 0.014 * Math.sin(sec * 1.8) + impulse * 0.32
    const settle = reduced.matches
      ? 0
      : Math.sin(Math.PI * t) *
        Math.sin(2 * Math.PI * t) *
        Math.abs(target - from) *
        1.4
    const scale = 23 + 37 * p + settle
    const cx = 300 + 0.0161 * (1 - p),
      cy = 200 - 5.7316 * (1 - p) + bob
    outer.setAttribute(
      "transform",
      `translate(300 200) scale(${23 + (ringScale - 23) * p}) translate(-12 -12)`
    )
    const tuck = smooth(p / 0.55)
    shoulders.setAttribute(
      "transform",
      `translate(300 ${200 - 28 * tuck}) scale(${23 * (1 - 0.72 * tuck)}) translate(-12 -12)`
    )
    character.setAttribute(
      "transform",
      `translate(${cx} ${cy}) rotate(${tilt}) scale(${1 / stretch} ${stretch})`
    )
    head.setAttribute(
      "transform",
      `scale(${scale}) translate(-12.0007 -11.7508)`
    )
    const visibility = smooth((p - 0.35) / 0.55)
    face.setAttribute("opacity", visibility)
    face.setAttribute(
      "transform",
      `translate(${motion * eyeLook.x * 62} ${motion * (eyeLook.y * 58 - 4)}) scale(${(0.7 + 1.7 * p) * (1 - 0.12 * motion * Math.abs(eyeLook.x))} ${(0.7 + 1.7 * p) * (1 - 0.08 * motion * Math.abs(eyeLook.y))})`
    )
    const cycle = eyeSec % 5.3
    let blink = 1
    if (!reduced.matches && cycle > 4.85 && cycle < 5.09)
      blink = 1 - 0.94 * Math.sin(((cycle - 4.85) / 0.24) * Math.PI)
    const expression = reduced.matches ? 0 : eyeSec % 12
    const happy =
      motion *
      smooth((expression - 6) / 0.8) *
      (1 - smooth((expression - 9.2) / 0.8))
    const curious =
      motion *
      smooth((expression - 2) / 0.7) *
      (1 - smooth((expression - 4.3) / 0.8))
    ;[left, right].forEach((eye, i) => {
      const x = i === 0 ? -27 : 27
      const size = 1 + curious * (i === 0 ? 0.3 : -0.12)
      const width = (0.15 + 10.5 * happy) * size
      const bend = -18 * happy
      eye.setAttribute(
        "d",
        `M${x - width} -3 Q${x} ${-3 + bend} ${x + width} -3`
      )
      eye.setAttribute("stroke-width", (29 - 12 * happy) * size)
      eye.setAttribute(
        "transform",
        `translate(0 -3) scale(1 ${blink}) translate(0 3)`
      )
    })
    if (p === 0) {
      silhouette.setAttribute("d", originalHead)
    } else {
      const points = Array.from({ length: 12 }, (_, i) => {
        const a = (i * Math.PI) / 6
        const r =
          2.95386 *
          (1 +
            motion * 0.032 * Math.sin(3 * a + sec * 0.95) +
            motion * 0.018 * Math.sin(2 * a - sec * 0.7))
        return [12.0007 + r * Math.cos(a), 11.7508 + r * Math.sin(a)]
      })
      let d = `M${points[0][0]} ${points[0][1]}`
      for (let i = 0; i < 12; i++) {
        const a = points[(i + 11) % 12],
          b = points[i],
          c = points[(i + 1) % 12],
          e = points[(i + 2) % 12]
        d += ` C${b[0] + (c[0] - a[0]) / 6} ${b[1] + (c[1] - a[1]) / 6} ${c[0] - (e[0] - b[0]) / 6} ${c[1] - (e[1] - b[1]) / 6} ${c[0]} ${c[1]}`
      }
      silhouette.setAttribute("d", d + "Z")
    }

    scene.dataset.gaze = pointerInside ? "pointer" : String(gazeIndex)
    scene.dataset.progress = p.toFixed(4)
    scene.dataset.phase = phase
    raf = requestAnimationFrame(frame)
  }
  raf = requestAnimationFrame(frame)

  return () => {
    cancelAnimationFrame(raf)
    resizeObserver.disconnect()
    visibilityObserver.disconnect()
    scene.removeEventListener("pointermove", pointerMove)
    scene.removeEventListener("pointerleave", pointerLeave)
  }
}
