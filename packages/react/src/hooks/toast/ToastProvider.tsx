import {
  Fragment,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from "react"
import { createPortal } from "react-dom"
import { Toaster, useSonner } from "sonner"
import { useIsomorphicLayoutEffect } from "usehooks-ts"

import { useIsMobile } from "@/lib/useIsDesktop"

import { toastStore } from "./store"
import { ToastTimerPauseContext } from "./ToastItem"

type ToastProviderProps = {
  children: React.ReactNode
  portalTargets?: Record<"mobile" | "desktop", string>
}

// The toast layer paints from `#f0-overlay-root` (above the fullscreen AI chat
// and any dialog), but is positioned to the box of this element — the main
// content region — so it sits in the content's bottom-left corner and never
// covers the sidebar. Falls back to a plain viewport inset when the element is
// absent (e.g. outside ApplicationFrame).
const toastAnchorSelector = "#content"

// Inset between the toasts and the anchor's edges (the old toast panel's p-6).
const TOAST_LAYER_PADDING = 24

// How many toasts sonner keeps visible in the collapsed stack.
const maxVisibleToasts = 3
const maxVisibleToastsMobile = 2

type AnchorOffsets = { left: number; right: number; bottom: number }

const fallbackOffsets: AnchorOffsets = {
  left: TOAST_LAYER_PADDING,
  right: TOAST_LAYER_PADDING,
  bottom: TOAST_LAYER_PADDING,
}

/**
 * Offsets from the viewport edges to the content region's bottom-left corner,
 * fed to sonner's `<Toaster offset />`. Only measured while there are open
 * toasts, so the anchor is re-queried lazily (it may mount after the provider).
 */
const useContentAnchorOffsets = (enabled: boolean) => {
  const [offsets, setOffsets] = useState<AnchorOffsets>(fallbackOffsets)

  useIsomorphicLayoutEffect(() => {
    if (typeof document === "undefined" || !enabled) return

    const anchor = document.querySelector<HTMLElement>(toastAnchorSelector)
    if (!anchor) {
      setOffsets(fallbackOffsets)
      return
    }

    const update = () => {
      const rect = anchor.getBoundingClientRect()
      setOffsets({
        left: rect.left + TOAST_LAYER_PADDING,
        right:
          Math.max(window.innerWidth - rect.right, 0) + TOAST_LAYER_PADDING,
        bottom:
          Math.max(window.innerHeight - rect.bottom, 0) + TOAST_LAYER_PADDING,
      })
    }

    update()
    const observer = new ResizeObserver(update)
    observer.observe(anchor)
    window.addEventListener("resize", update)
    window.addEventListener("scroll", update, true)
    return () => {
      observer.disconnect()
      window.removeEventListener("resize", update)
      window.removeEventListener("scroll", update, true)
    }
  }, [enabled])

  return offsets
}

const ToastsContainer = () => {
  const isMobile = useIsMobile()
  const { toasts: activeToasts } = useSonner()
  const offsets = useContentAnchorOffsets(activeToasts.length > 0)

  // F0Toast owns the auto-dismiss countdown (sonner toasts are created with
  // duration: Infinity), so we replicate sonner's "pause while the stack is
  // hovered or swiped" here and fan it out through ToastTimerPauseContext.
  // Sonner renders its <ol> inline (fixed-positioned but not portaled), so
  // pointer events bubble up to this wrapper.
  const [isPaused, setIsPaused] = useState(false)

  return (
    <ToastTimerPauseContext.Provider value={isPaused}>
      <div
        style={{ display: "contents" }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onPointerDown={() => setIsPaused(true)}
        onPointerUp={() => setIsPaused(false)}
      >
        <Toaster
          position="bottom-left"
          visibleToasts={isMobile ? maxVisibleToastsMobile : maxVisibleToasts}
          gap={16}
          offset={offsets}
          mobileOffset={offsets}
          style={
            {
              // Above dialogs (z-50) and the fullscreen AI chat (z-20);
              // overrides sonner's stylesheet z-index.
              zIndex: 100,
              // The old toast panel was 350px including 24px padding per side.
              "--width": "302px",
            } as React.CSSProperties
          }
        />
      </div>
    </ToastTimerPauseContext.Provider>
  )
}

export const ToastProvider = ({
  children,
  portalTargets = {
    // Portal into the top-level overlay root (outside the ApplicationFrame
    // `isolate` where the fullscreen AI chat paints at z-20, and where dialogs
    // also portal). Combined with the Toaster's z-index 100 this keeps toasts
    // on top of the fullscreen chat and any open dialog (which sit at z-50).
    mobile: "#f0-overlay-root",
    desktop: "#f0-overlay-root",
  },
}: ToastProviderProps) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Elect a single renderer among all mounted providers. Sonner's toast state
  // is global, so without this every mounted ToastProvider (e.g. one per
  // Storybook canvas) would render its own <Toaster /> with the same toasts.
  const rendererIdRef = useRef<number | null>(null)
  const activeRendererId = useSyncExternalStore(
    toastStore.subscribeRenderer,
    toastStore.getActiveRendererId,
    () => null
  )
  useEffect(() => {
    const { id, release } = toastStore.acquireRenderer()
    rendererIdRef.current = id
    return release
  }, [])
  const isRenderer = activeRendererId === rendererIdRef.current

  const isMobile = useIsMobile()
  const [portalTarget, setPortalTarget] = useState<HTMLElement | null>(null)
  const [portalKey, setPortalKey] = useState(0)
  const prevPortalTargetRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (typeof document === "undefined") return
    const selector = isMobile
      ? portalTargets?.mobile || "body"
      : portalTargets?.desktop || "body"
    const target =
      document.querySelector<HTMLElement>(selector) ?? document.body
    if (prevPortalTargetRef.current !== target) {
      prevPortalTargetRef.current = target
      setPortalKey((k) => k + 1)
    }
    setPortalTarget(target)
  }, [isMobile, portalTargets?.mobile, portalTargets?.desktop])

  return (
    <>
      {isRenderer &&
        isMounted &&
        typeof document !== "undefined" &&
        portalTarget != null &&
        createPortal(
          <Fragment key={portalKey}>
            <ToastsContainer />
          </Fragment>,
          portalTarget
        )}
      {children}
    </>
  )
}
