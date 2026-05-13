import { useEffect, useMemo, useRef, useState } from "react"

import { useReducedMotion } from "@/lib/a11y"

import type {
  GeneratedCanvasAnchor,
  GeneratedCanvasData,
  GeneratedCanvasEngine,
  GeneratedCanvasRuntimeTheme,
  GeneratedCanvasSelectedNode,
} from "./types"

type RuntimeStatus = "loading" | "ready" | "error"

type RuntimeMessage =
  | {
      source: "F0_GENERATED_CANVAS_RUNTIME"
      runtimeId: string
      event: "ready"
    }
  | {
      source: "F0_GENERATED_CANVAS_RUNTIME"
      runtimeId: string
      event: "error"
      error: { message: string; stack?: string }
    }
  | {
      source: "F0_GENERATED_CANVAS_RUNTIME"
      runtimeId: string
      event: "log"
      log: { message: string }
    }
  | {
      source: "F0_GENERATED_CANVAS_RUNTIME"
      runtimeId: string
      event: "selectNode"
      node: unknown
    }
  | {
      source: "F0_GENERATED_CANVAS_RUNTIME"
      runtimeId: string
      event: "setAnchors"
      anchors: unknown
    }

export interface GeneratedCanvasRuntimeProps {
  rendererSource: string
  data: GeneratedCanvasData
  engine: GeneratedCanvasEngine
  refreshKey: number
  onSelectNode?: (node: GeneratedCanvasSelectedNode) => void
  onSetAnchors?: (anchors: GeneratedCanvasAnchor[]) => void
}

const iframeSource = `<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      html, body, #root {
        width: 100%;
        height: 100%;
        margin: 0;
        overflow: hidden;
        background: #020617;
        color: white;
        font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      }

      * {
        box-sizing: border-box;
      }
    </style>
  </head>
  <body>
    <div id="root"></div>
    <script>
      const root = document.getElementById("root")
      let currentRenderer = null
      let activeRuntimeId = null
      const animationFrameIds = new Set()
      const originalRequestAnimationFrame = window.requestAnimationFrame.bind(window)
      const originalCancelAnimationFrame = window.cancelAnimationFrame.bind(window)

      window.requestAnimationFrame = (callback) => {
        const id = originalRequestAnimationFrame((timestamp) => {
          animationFrameIds.delete(id)
          callback(timestamp)
        })
        animationFrameIds.add(id)
        return id
      }

      window.cancelAnimationFrame = (id) => {
        animationFrameIds.delete(id)
        originalCancelAnimationFrame(id)
      }

      window.fetch = () => Promise.reject(new Error("Network access is disabled inside generated canvas runtime"))
      window.XMLHttpRequest = function XMLHttpRequestBlocked() {
        throw new Error("Network access is disabled inside generated canvas runtime")
      }
      window.WebSocket = function WebSocketBlocked() {
        throw new Error("Network access is disabled inside generated canvas runtime")
      }

      function send(message) {
        parent.postMessage({ source: "F0_GENERATED_CANVAS_RUNTIME", runtimeId: activeRuntimeId, ...message }, "*")
      }

      function serializeValue(value) {
        if (value == null) return String(value)
        if (typeof value === "string") return value
        if (typeof value === "number" || typeof value === "boolean") return String(value)
        try {
          return JSON.stringify(value)
        } catch (_error) {
          return Object.prototype.toString.call(value)
        }
      }

      function serializeError(error) {
        if (error instanceof Error) {
          return { message: error.message, stack: error.stack }
        }
        return { message: serializeValue(error) }
      }

      function cleanup() {
        for (const id of animationFrameIds) {
          originalCancelAnimationFrame(id)
        }
        animationFrameIds.clear()

        if (currentRenderer && typeof currentRenderer.destroy === "function") {
          currentRenderer.destroy()
        }
        currentRenderer = null
        root.replaceChildren()
      }

      window.addEventListener("message", async (event) => {
        if (!event.data || event.data.type !== "F0_GENERATED_CANVAS_RENDER") return

        try {
          cleanup()
          activeRuntimeId = String(event.data.runtimeId || "")
          const rendererSource = String(event.data.rendererSource || "")
          const getRender = new Function(
            '"use strict";\\n' + rendererSource + "\\n; return typeof render === 'function' ? render : undefined;"
          )
          const render = getRender()

          if (typeof render !== "function") {
            throw new Error("Generated renderer must define async function render({ root, data, theme, api, libs })")
          }

          function normalizeRecord(value) {
            return value && typeof value === "object" && !Array.isArray(value) ? value : {}
          }

          function normalizeSelectedNode(firstArg, secondArg) {
            const objectArg = normalizeRecord(firstArg)
            const nodeArg = Object.keys(objectArg).length > 0 && objectArg.id != null ? objectArg : normalizeRecord(secondArg)
            const id = objectArg.id != null ? objectArg.id : firstArg
            const details = normalizeRecord(nodeArg.details || nodeArg.detail)

            return {
              id: String(id),
              label: typeof nodeArg.label === "string" ? nodeArg.label : undefined,
              kind: typeof nodeArg.kind === "string" ? nodeArg.kind : undefined,
              details,
            }
          }

          function normalizeAnchor(anchor) {
            const value = normalizeRecord(anchor)
            const x = Number(value.x)
            const y = Number(value.y)
            if (value.id == null || !Number.isFinite(x) || !Number.isFinite(y)) return null

            return {
              id: String(value.id),
              x,
              y,
              kind: typeof value.kind === "string" ? value.kind : undefined,
              label: typeof value.label === "string" ? value.label : undefined,
              firstName: typeof value.firstName === "string" ? value.firstName : undefined,
              lastName: typeof value.lastName === "string" ? value.lastName : undefined,
              src: typeof value.src === "string" ? value.src : undefined,
              size: Number.isFinite(Number(value.size)) ? Number(value.size) : undefined,
              details: normalizeRecord(value.details),
            }
          }

          const api = {
            log: (...args) => {
              send({ event: "log", log: { message: args.map(serializeValue).join(" ") } })
            },
            selectNode: (firstArg, secondArg) => {
              send({ event: "selectNode", node: normalizeSelectedNode(firstArg, secondArg) })
            },
            setAnchors: (anchors) => {
              send({
                event: "setAnchors",
                anchors: Array.isArray(anchors) ? anchors.map(normalizeAnchor).filter(Boolean) : [],
              })
            },
          }

          currentRenderer = await render({
            root,
            data: event.data.data,
            theme: event.data.theme,
            api,
            libs: {},
          })
          send({ event: "ready" })
        } catch (error) {
          send({ event: "error", error: serializeError(error) })
        }
      })

      window.addEventListener("beforeunload", cleanup)
    </script>
  </body>
</html>`

const baseTheme: Omit<GeneratedCanvasRuntimeTheme, "reducedMotion"> = {
  mode: "dark",
  colors: {
    background: "#020617",
    foreground: "#f8fafc",
    muted: "#94a3b8",
    accent: "#38bdf8",
    accentStrong: "#a78bfa",
  },
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null
}

function isRuntimeMessage(value: unknown): value is RuntimeMessage {
  if (!isRecord(value)) return false
  if (value.source !== "F0_GENERATED_CANVAS_RUNTIME") return false
  if (typeof value.runtimeId !== "string") return false
  return (
    value.event === "ready" ||
    value.event === "error" ||
    value.event === "log" ||
    value.event === "selectNode" ||
    value.event === "setAnchors"
  )
}

function getMessagePayload(value: unknown): string {
  if (!isRecord(value)) return "Generated renderer failed"
  const error = value.error
  if (!isRecord(error)) return "Generated renderer failed"
  return typeof error.message === "string" ? error.message : "Unknown error"
}

function normalizePrimitiveDetails(
  value: unknown
): Record<string, string | number | boolean | null | undefined> | undefined {
  if (!isRecord(value)) return undefined

  return Object.fromEntries(
    Object.entries(value).filter(
      (
        entry
      ): entry is [string, string | number | boolean | null | undefined] => {
        const detailValue = entry[1]
        return (
          detailValue == null ||
          typeof detailValue === "string" ||
          typeof detailValue === "number" ||
          typeof detailValue === "boolean"
        )
      }
    )
  )
}

function normalizeSelectedNode(
  value: unknown
): GeneratedCanvasSelectedNode | null {
  if (!isRecord(value) || value.id == null) return null

  return {
    id: String(value.id),
    label: typeof value.label === "string" ? value.label : undefined,
    kind: typeof value.kind === "string" ? value.kind : undefined,
    details: normalizePrimitiveDetails(value.details),
  }
}

function normalizeAnchor(value: unknown): GeneratedCanvasAnchor | null {
  if (!isRecord(value) || value.id == null) return null
  const x = Number(value.x)
  const y = Number(value.y)
  if (!Number.isFinite(x) || !Number.isFinite(y)) return null

  const size = Number(value.size)

  return {
    id: String(value.id),
    x,
    y,
    kind: typeof value.kind === "string" ? value.kind : undefined,
    label: typeof value.label === "string" ? value.label : undefined,
    firstName:
      typeof value.firstName === "string" ? value.firstName : undefined,
    lastName: typeof value.lastName === "string" ? value.lastName : undefined,
    src: typeof value.src === "string" ? value.src : undefined,
    size: Number.isFinite(size) ? size : undefined,
    details: normalizePrimitiveDetails(value.details),
  }
}

function normalizeAnchors(value: unknown): GeneratedCanvasAnchor[] {
  if (!Array.isArray(value)) return []
  return value.flatMap((anchor) => {
    const normalized = normalizeAnchor(anchor)
    return normalized ? [normalized] : []
  })
}

export function GeneratedCanvasRuntime({
  rendererSource,
  data,
  engine,
  refreshKey,
  onSelectNode,
  onSetAnchors,
}: GeneratedCanvasRuntimeProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const runtimeIdRef = useRef(
    `generated-canvas-${Math.random().toString(36).slice(2)}`
  )
  const [iframeLoaded, setIframeLoaded] = useState(false)
  const [status, setStatus] = useState<RuntimeStatus>("loading")
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const shouldReduceMotion = useReducedMotion()

  const runtimeInput = useMemo(() => {
    const theme: GeneratedCanvasRuntimeTheme = {
      ...baseTheme,
      reducedMotion: shouldReduceMotion,
    }

    return { rendererSource, data, theme, engine }
  }, [rendererSource, data, engine, shouldReduceMotion])

  useEffect(() => {
    setIframeLoaded(false)
  }, [refreshKey, engine])

  useEffect(() => {
    setStatus("loading")
    setErrorMessage(null)
    onSetAnchors?.([])
  }, [onSetAnchors, refreshKey, rendererSource])

  useEffect(() => {
    const handleMessage = (event: MessageEvent<unknown>) => {
      if (!isRuntimeMessage(event.data)) return
      if (event.data.runtimeId !== runtimeIdRef.current) return

      if (event.data.event === "ready") {
        setStatus("ready")
        setErrorMessage(null)
      } else if (event.data.event === "error") {
        setStatus("error")
        setErrorMessage(getMessagePayload(event.data))
        onSetAnchors?.([])
      } else if (event.data.event === "log") {
        return
      } else if (event.data.event === "selectNode") {
        const node = normalizeSelectedNode(event.data.node)
        if (node) onSelectNode?.(node)
      } else if (event.data.event === "setAnchors") {
        onSetAnchors?.(normalizeAnchors(event.data.anchors))
      }
    }

    window.addEventListener("message", handleMessage)
    return () => window.removeEventListener("message", handleMessage)
  }, [onSelectNode, onSetAnchors])

  useEffect(() => {
    if (!iframeLoaded) return
    const contentWindow = iframeRef.current?.contentWindow
    if (!contentWindow) return

    setStatus("loading")
    setErrorMessage(null)
    contentWindow.postMessage(
      {
        type: "F0_GENERATED_CANVAS_RENDER",
        runtimeId: runtimeIdRef.current,
        ...runtimeInput,
      },
      "*"
    )
  }, [iframeLoaded, runtimeInput])

  return (
    <div
      className="relative z-0 h-full min-h-[520px] overflow-hidden bg-[#020617]"
      data-generated-canvas-status={status}
    >
      <iframe
        key={`${refreshKey}-${engine}`}
        ref={iframeRef}
        title="Generated canvas runtime"
        className="relative z-0 h-full w-full border-0"
        sandbox="allow-scripts"
        srcDoc={iframeSource}
        onLoad={() => setIframeLoaded(true)}
      />

      {status === "error" && (
        <div
          className="absolute inset-0 z-20 flex items-center justify-center p-8 backdrop-blur-sm"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.62)" }}
        >
          <div
            className="max-w-lg rounded-2xl border p-5 shadow-2xl"
            style={{
              backgroundColor: "rgba(69, 10, 10, 0.86)",
              borderColor: "rgba(252, 165, 165, 0.34)",
              color: "white",
            }}
          >
            <div
              className="text-sm font-semibold uppercase tracking-[0.24em]"
              style={{ color: "#fecaca" }}
            >
              Renderer crashed
            </div>
            <div className="mt-3 text-sm" style={{ color: "#fff1f2" }}>
              {errorMessage}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
