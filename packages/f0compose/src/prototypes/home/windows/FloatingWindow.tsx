import { F0Button } from "@factorialco/f0-react"
import { Cross } from "@factorialco/f0-react/icons/app"
import { useLayoutEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"

import { SidePanelIcon } from "./PanelIcons"

/**
 * A widget lifted out of its column into a card that floats over the
 * canvas (Figma 2694:55372). Only Clock in floats — per Oskar it is the
 * one widget worth having on top of your work rather than taking a
 * column or the whole screen.
 *
 * Portalled to `document.body`: the canvas is `overflow-hidden`, and the
 * columns sit inside a stacking context that would clip the card and
 * bury it under the widgets menu.
 *
 * It opens hanging under the control that owns it (the navbar Clock-in
 * button, right edges flush) so the card reads as dropping from the thing
 * you clicked — then you can drag it anywhere by its header.
 */
export function FloatingWindow({
  title,
  width,
  anchorSelector,
  children,
  onDock,
  onClose,
}: {
  title: string
  width: number
  /** The control the card first hangs from. */
  anchorSelector: string
  children: React.ReactNode
  onDock: () => void
  onClose: () => void
}) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null)

  // Position before paint, or the card flashes at 0,0 for a frame.
  useLayoutEffect(() => {
    const anchor = document
      .querySelector(anchorSelector)
      ?.getBoundingClientRect()
    const GAP = 8
    if (anchor) {
      setPos({ x: anchor.right - width, y: anchor.bottom + GAP })
      return
    }
    // No anchor on screen (the navbar is hidden in some modes) — park it
    // in the top-right corner rather than at the origin.
    setPos({ x: window.innerWidth - width - GAP, y: GAP })
  }, [anchorSelector, width])

  const startDrag = (e: React.PointerEvent) => {
    // Let the header's buttons keep their clicks.
    if ((e.target as HTMLElement).closest("button")) return
    e.preventDefault()
    const card = cardRef.current?.getBoundingClientRect()
    if (!card || !pos) return
    const grabX = e.clientX - card.left
    const grabY = e.clientY - card.top
    const onMove = (ev: PointerEvent) => {
      // Clamp so the card can never be dragged fully off screen — at
      // least a header's worth stays reachable on every edge.
      const maxX = window.innerWidth - 48
      const maxY = window.innerHeight - 44
      setPos({
        x: Math.min(maxX, Math.max(48 - card.width, ev.clientX - grabX)),
        y: Math.min(maxY, Math.max(0, ev.clientY - grabY)),
      })
    }
    const onUp = () => {
      window.removeEventListener("pointermove", onMove)
      window.removeEventListener("pointerup", onUp)
    }
    window.addEventListener("pointermove", onMove)
    window.addEventListener("pointerup", onUp)
  }

  if (!pos) return null

  return createPortal(
    <div
      ref={cardRef}
      data-home-floating
      style={{ left: pos.x, top: pos.y, width }}
      className="f0c-card-in fixed z-40 flex flex-col overflow-hidden rounded-md border border-solid border-f1-border-secondary bg-f1-background shadow-[0_8px_28px_-8px_rgba(13,22,37,0.18)]"
      aria-label={title}
    >
      <header
        onPointerDown={startDrag}
        className="flex shrink-0 cursor-grab select-none items-center justify-between py-1.5 pl-3 pr-1.5 active:cursor-grabbing"
      >
        <span className="truncate text-base font-medium text-f1-foreground">
          {title}
        </span>
        <div className="flex shrink-0 items-center">
          {/* Floating, the toggle offers you the side panel back. */}
          <F0Button
            variant="ghost"
            size="md"
            icon={SidePanelIcon}
            hideLabel
            label={`Dock ${title}`}
            onClick={onDock}
          />
          <F0Button
            variant="ghost"
            size="md"
            icon={Cross}
            hideLabel
            label={`Close ${title}`}
            onClick={onClose}
          />
        </div>
      </header>
      {children}
    </div>,
    document.body
  )
}
