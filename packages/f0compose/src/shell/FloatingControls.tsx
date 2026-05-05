import { F0Box, F0Button, F0Icon } from "@factorialco/f0-react"
import {
  Home,
  Lightbulb,
  Moon,
  Sliders,
} from "@factorialco/f0-react/icons/app"
import { useEffect, useRef, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"

/**
 * Floating controls button (FAB) that wraps every prototype + the
 * catalog. Click → menu with two actions: toggle dark / light theme
 * and jump back to the catalog. Drag the button to snap it to the
 * nearest corner; the chosen corner persists in localStorage.
 */

type Corner = "top-left" | "top-right" | "bottom-left" | "bottom-right"

const STORAGE_CORNER = "f0compose:fab-corner"
const STORAGE_THEME = "f0compose:theme"
const DRAG_THRESHOLD_PX = 6
const FAB_SIZE_PX = 48

function readCorner(): Corner {
  if (typeof window === "undefined") return "bottom-right"
  const v = window.localStorage.getItem(STORAGE_CORNER)
  return v === "top-left" ||
    v === "top-right" ||
    v === "bottom-left" ||
    v === "bottom-right"
    ? v
    : "bottom-right"
}

function readTheme(): "light" | "dark" {
  if (typeof window === "undefined") return "light"
  return window.localStorage.getItem(STORAGE_THEME) === "dark" ? "dark" : "light"
}

function cornerStyle(corner: Corner): React.CSSProperties {
  const offset = 16
  switch (corner) {
    case "top-left":
      return { top: offset, left: offset }
    case "top-right":
      return { top: offset, right: offset }
    case "bottom-left":
      return { bottom: offset, left: offset }
    case "bottom-right":
      return { bottom: offset, right: offset }
  }
}

function nearestCorner(x: number, y: number): Corner {
  const cx = window.innerWidth / 2
  const cy = window.innerHeight / 2
  const horizontal = x < cx ? "left" : "right"
  const vertical = y < cy ? "top" : "bottom"
  return `${vertical}-${horizontal}` as Corner
}

export function FloatingControls() {
  const [corner, setCorner] = useState<Corner>(readCorner)
  const [theme, setTheme] = useState<"light" | "dark">(readTheme)
  const [open, setOpen] = useState(false)
  const [dragPos, setDragPos] = useState<{ x: number; y: number } | null>(null)

  const navigate = useNavigate()
  const location = useLocation()

  const dragStart = useRef<{ x: number; y: number } | null>(null)
  const moved = useRef(false)

  // Apply theme to <html>.
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark")
    document.documentElement.style.colorScheme = theme
    window.localStorage.setItem(STORAGE_THEME, theme)
  }, [theme])

  useEffect(() => {
    window.localStorage.setItem(STORAGE_CORNER, corner)
  }, [corner])

  function handlePointerDown(e: React.PointerEvent<HTMLDivElement>) {
    dragStart.current = { x: e.clientX, y: e.clientY }
    moved.current = false
    e.currentTarget.setPointerCapture(e.pointerId)
  }

  function handlePointerMove(e: React.PointerEvent<HTMLDivElement>) {
    if (!dragStart.current) return
    const dx = e.clientX - dragStart.current.x
    const dy = e.clientY - dragStart.current.y
    if (Math.hypot(dx, dy) >= DRAG_THRESHOLD_PX) {
      moved.current = true
      setOpen(false)
      setDragPos({
        x: e.clientX - FAB_SIZE_PX / 2,
        y: e.clientY - FAB_SIZE_PX / 2,
      })
    }
  }

  function handlePointerUp(e: React.PointerEvent<HTMLDivElement>) {
    const wasDrag = moved.current
    dragStart.current = null
    moved.current = false
    if (wasDrag) {
      setCorner(nearestCorner(e.clientX, e.clientY))
      setDragPos(null)
    } else {
      // Click — toggle menu
      setOpen((o) => !o)
    }
  }

  const positionStyle: React.CSSProperties =
    dragPos != null
      ? { top: dragPos.y, left: dragPos.x }
      : cornerStyle(corner)

  // Menu position: opens TOWARD the page center based on corner.
  const menuPositionStyle: React.CSSProperties = (() => {
    const gap = FAB_SIZE_PX + 8
    switch (corner) {
      case "top-left":
        return { top: gap, left: 0 }
      case "top-right":
        return { top: gap, right: 0 }
      case "bottom-left":
        return { bottom: gap, left: 0 }
      case "bottom-right":
        return { bottom: gap, right: 0 }
    }
  })()

  const onCatalog = location.pathname === "/"

  return (
    <div
      style={{
        position: "fixed",
        zIndex: 1000,
        ...positionStyle,
      }}
    >
      <div style={{ position: "relative" }}>
        <div
          role="button"
          aria-label="Open f0compose controls"
          tabIndex={0}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          style={{
            width: FAB_SIZE_PX,
            height: FAB_SIZE_PX,
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: dragPos ? "grabbing" : "pointer",
            touchAction: "none",
            userSelect: "none",
            boxShadow: "0 6px 24px rgba(0,0,0,0.18)",
          }}
          className="bg-f1-background border border-f1-border"
        >
          <F0Icon icon={Sliders} size="md" />
        </div>

        {open && (
          <div
            style={{
              position: "absolute",
              minWidth: 220,
              ...menuPositionStyle,
            }}
          >
            <F0Box
              display="flex"
              flexDirection="column"
              gap="xs"
              padding="xs"
              background="primary"
              border="default"
              borderRadius="lg"
            >
              <F0Button
                label={
                  theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
                }
                icon={theme === "dark" ? Lightbulb : Moon}
                variant="outline"
                onClick={() => {
                  setTheme((t) => (t === "dark" ? "light" : "dark"))
                  setOpen(false)
                }}
              />
              <F0Button
                label="Back to catalog"
                icon={Home}
                variant="outline"
                disabled={onCatalog}
                onClick={() => {
                  navigate("/")
                  setOpen(false)
                }}
              />
            </F0Box>
          </div>
        )}
      </div>
    </div>
  )
}
