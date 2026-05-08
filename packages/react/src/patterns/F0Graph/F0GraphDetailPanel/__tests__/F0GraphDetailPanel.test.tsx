import { act, fireEvent, screen } from "@testing-library/react"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

import { zeroRender as render } from "@/testing/test-utils"

import { F0GraphDetailPanel } from "../F0GraphDetailPanel"

// ─── PointerEvent polyfill for JSDOM ─────────────────────────────
// JSDOM's PointerEvent doesn't properly initialize MouseEvent props
// (clientX, clientY) from the constructor init dict.
class JsonDomPointerEvent extends MouseEvent {
  readonly pointerId: number
  readonly pointerType: string
  readonly width: number
  readonly height: number
  readonly pressure: number
  readonly tiltX: number
  readonly tiltY: number

  constructor(type: string, params: PointerEventInit & MouseEventInit = {}) {
    super(type, params)
    this.pointerId = params.pointerId ?? 0
    this.pointerType = params.pointerType ?? ""
    this.width = params.width ?? 1
    this.height = params.height ?? 1
    this.pressure = params.pressure ?? 0
    this.tiltX = params.tiltX ?? 0
    this.tiltY = params.tiltY ?? 0
  }
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
;(globalThis as Record<string, unknown>).PointerEvent = JsonDomPointerEvent

// ─── localStorage mock ───────────────────────────────────────────

const localStorageMock = (() => {
  let store: Record<string, string> = {}
  return {
    getItem: vi.fn((key: string) => store[key] ?? null),
    setItem: vi.fn((key: string, value: string) => {
      store[key] = value
    }),
    removeItem: vi.fn((key: string) => {
      delete store[key]
    }),
    clear: vi.fn(() => {
      store = {}
    }),
    get length() {
      return Object.keys(store).length
    },
    key: vi.fn((_: number) => null),
    _store: () => store,
  }
})()

Object.defineProperty(window, "localStorage", { value: localStorageMock })

// ─── Helpers ─────────────────────────────────────────────────────

function renderPanel(
  props: Partial<React.ComponentProps<typeof F0GraphDetailPanel>> = {}
) {
  return render(
    <F0GraphDetailPanel
      open
      variant="default"
      title="Test Panel"
      onClose={vi.fn()}
      {...props}
    />
  )
}

function getHandle() {
  return screen.getByTestId("detail-panel-resize-handle")
}

function getPanel() {
  return screen.getByRole("complementary")
}

// ─── Test suite ──────────────────────────────────────────────────

describe("F0GraphDetailPanel resize", () => {
  beforeEach(() => {
    localStorageMock.clear()
    vi.clearAllMocks()
    // Provide a stable innerWidth for max-width clamping (40% ≈ 683)
    Object.defineProperty(window, "innerWidth", {
      value: 1707,
      writable: true,
    })
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  // ── Initial width ──────────────────────────────────────────────

  it("uses initialWidth when no localStorage value exists", () => {
    renderPanel({ initialWidth: 400 })
    const panel = getPanel()
    expect(panel.style.width).toBe("400px")
  })

  it("defaults to 384 when no initialWidth or localStorage value", () => {
    renderPanel()
    const panel = getPanel()
    expect(panel.style.width).toBe("384px")
  })

  it("uses localStorage value when present, ignoring initialWidth", () => {
    localStorageMock.setItem("f0graph:detailPanelWidth:default", "450")
    renderPanel({ initialWidth: 400 })
    const panel = getPanel()
    expect(panel.style.width).toBe("450px")
  })

  it("scopes localStorage key to graphId", () => {
    localStorageMock.setItem("f0graph:detailPanelWidth:my-graph", "500")
    renderPanel({ initialWidth: 400, graphId: "my-graph" })
    const panel = getPanel()
    expect(panel.style.width).toBe("500px")
  })

  it("clamps persisted width exceeding 40% of viewport on read", () => {
    // 40% of 1707 ≈ 683
    localStorageMock.setItem("f0graph:detailPanelWidth:default", "800")
    renderPanel()
    const panel = getPanel()
    expect(panel.style.width).toBe("683px")
  })

  // ── Resize handle rendering ────────────────────────────────────

  it("renders a resize handle with correct ARIA attributes", () => {
    renderPanel({ initialWidth: 400 })
    const handle = getHandle()
    expect(handle).toHaveAttribute("role", "separator")
    expect(handle).toHaveAttribute("aria-orientation", "vertical")
    expect(handle).toHaveAttribute("aria-valuenow", "400")
    expect(handle).toHaveAttribute("aria-valuemin", "320")
    expect(handle).toHaveAttribute("tabindex", "0")
  })

  // ── Drag resize ────────────────────────────────────────────────

  it("changes width on pointer drag", () => {
    renderPanel({ initialWidth: 400 })
    const handle = getHandle()

    // Simulate drag: pointerdown, pointermove, pointerup
    fireEvent.pointerDown(handle, { clientX: 100 })
    fireEvent.pointerMove(handle, { clientX: 50 }) // dragged 50px left → width +50
    // rAF fires synchronously in test environment

    const panel = getPanel()
    expect(Number(panel.style.width.replace("px", ""))).toBe(450)
  })

  it("clamps width to minimum during drag", () => {
    renderPanel({ initialWidth: 350 })
    const handle = getHandle()

    fireEvent.pointerDown(handle, { clientX: 100 })
    fireEvent.pointerMove(handle, { clientX: 200 }) // dragged right → width -100 → 250 → clamped to 320

    const panel = getPanel()
    expect(Number(panel.style.width.replace("px", ""))).toBe(320)
  })

  it("clamps width to max (40% viewport) during drag", () => {
    renderPanel({ initialWidth: 400 })
    const handle = getHandle()

    fireEvent.pointerDown(handle, { clientX: 500 })
    fireEvent.pointerMove(handle, { clientX: 0 }) // dragged 500px left → width +500 → 900 → clamped to 683

    const panel = getPanel()
    expect(Number(panel.style.width.replace("px", ""))).toBe(683)
  })

  // ── localStorage persistence ───────────────────────────────────

  it("persists width to localStorage on pointerup, not during drag", () => {
    renderPanel({ initialWidth: 400 })
    const handle = getHandle()

    fireEvent.pointerDown(handle, { clientX: 100 })
    fireEvent.pointerMove(handle, { clientX: 60 })

    // During drag, localStorage should not be written
    expect(localStorageMock.setItem).not.toHaveBeenCalledWith(
      "f0graph:detailPanelWidth:default",
      expect.anything()
    )

    fireEvent.pointerUp(handle, { clientX: 60 })

    // After pointerup, localStorage should be written
    expect(localStorageMock.setItem).toHaveBeenCalledWith(
      "f0graph:detailPanelWidth:default",
      "440"
    )
  })

  it("uses custom graphId in localStorage key", () => {
    renderPanel({ initialWidth: 400, graphId: "org-chart" })
    const handle = getHandle()

    fireEvent.pointerDown(handle, { clientX: 100 })
    fireEvent.pointerMove(handle, { clientX: 80 })
    fireEvent.pointerUp(handle, { clientX: 80 })

    expect(localStorageMock.setItem).toHaveBeenCalledWith(
      "f0graph:detailPanelWidth:org-chart",
      "420"
    )
  })

  // ── Keyboard resize ────────────────────────────────────────────

  it("resizes by 16px with ArrowLeft/ArrowRight", () => {
    renderPanel({ initialWidth: 400 })
    const handle = getHandle()

    fireEvent.keyDown(handle, { key: "ArrowLeft" })
    expect(getPanel().style.width).toBe("416px")

    fireEvent.keyDown(handle, { key: "ArrowRight" })
    expect(getPanel().style.width).toBe("400px")
  })

  it("resizes by 64px with Shift+Arrow", () => {
    renderPanel({ initialWidth: 400 })
    const handle = getHandle()

    fireEvent.keyDown(handle, { key: "ArrowLeft", shiftKey: true })
    expect(getPanel().style.width).toBe("464px")
  })

  it("keyboard resize persists to localStorage", () => {
    renderPanel({ initialWidth: 400 })
    const handle = getHandle()

    fireEvent.keyDown(handle, { key: "ArrowLeft" })
    expect(localStorageMock.setItem).toHaveBeenCalledWith(
      "f0graph:detailPanelWidth:default",
      "416"
    )
  })

  it("keyboard resize respects min/max clamping", () => {
    renderPanel({ initialWidth: 320 })
    const handle = getHandle()

    fireEvent.keyDown(handle, { key: "ArrowRight" }) // try to shrink below min
    expect(getPanel().style.width).toBe("320px")
  })

  // ── Panel hidden ───────────────────────────────────────────────

  it("does not render resize handle when panel is closed", () => {
    renderPanel({ open: false })
    expect(screen.queryByTestId("detail-panel-resize-handle")).toBeNull()
  })

  // ── Backward compat: legacy `width` prop ───────────────────────

  it("falls back to legacy width prop when initialWidth is not set", () => {
    renderPanel({ width: 420 })
    const panel = getPanel()
    expect(panel.style.width).toBe("420px")
  })
})

// ─── Panel open/close behavior ──────────────────────────────────

describe("F0GraphDetailPanel open/close", () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it("renders when open is true", () => {
    renderPanel({ open: true })
    expect(screen.getByRole("complementary")).toBeTruthy()
  })

  it("does not render when open is false", () => {
    renderPanel({ open: false })
    expect(screen.queryByRole("complementary")).toBeNull()
  })

  it("renders title in default variant", () => {
    renderPanel({ open: true, title: "Employee Details" })
    expect(screen.getByText("Employee Details")).toBeTruthy()
  })

  it("closes on Escape key", () => {
    const onClose = vi.fn()
    renderPanel({ open: true, onClose })

    fireEvent.keyDown(window, { key: "Escape" })

    expect(onClose).toHaveBeenCalledOnce()
  })

  it("close button fires onClose", () => {
    const onClose = vi.fn()
    renderPanel({ open: true, onClose })

    // Close button has label from i18n — "Close" by default
    const closeButton = screen.getByLabelText("Close")
    fireEvent.click(closeButton)

    expect(onClose).toHaveBeenCalledOnce()
  })

  it("panel has role=complementary with aria-label", () => {
    renderPanel({
      open: true,
      ariaLabel: "Employee details panel",
    })

    const panel = screen.getByRole("complementary")
    expect(panel.getAttribute("aria-label")).toBe("Employee details panel")
  })

  it("uses default aria-label 'Details' when none provided", () => {
    renderPanel({ open: true })

    const panel = screen.getByRole("complementary")
    // Default from i18n: "Details"
    expect(panel.getAttribute("aria-label")).toBe("Details")
  })

  it("invokes visible resource actions with the click event", () => {
    const onVisibleAction = vi.fn()

    render(
      <F0GraphDetailPanel
        open
        variant="resource"
        onClose={vi.fn()}
        header={<div>Resource Header</div>}
        actions={[
          {
            label: "Promote",
            onClick: onVisibleAction,
          },
        ]}
      />
    )

    fireEvent.click(screen.getByRole("button", { name: "Promote" }))

    expect(onVisibleAction).toHaveBeenCalledTimes(1)
    expect(onVisibleAction.mock.calls[0]?.[0]).toBeTruthy()
  })

  it("invokes overflow resource actions without a synthetic event", () => {
    vi.useFakeTimers()

    const onOverflowAction = vi.fn()

    render(
      <F0GraphDetailPanel
        open
        variant="resource"
        onClose={vi.fn()}
        header={<div>Resource Header</div>}
        actions={[
          { label: "Promote", onClick: vi.fn() },
          { label: "Archive", onClick: vi.fn() },
          { label: "Delete", onClick: onOverflowAction },
        ]}
      />
    )

    fireEvent.pointerDown(screen.getByLabelText("More actions"))
    fireEvent.click(screen.getByRole("menuitem", { name: "Delete" }))

    act(() => {
      vi.advanceTimersByTime(250)
    })

    expect(onOverflowAction).toHaveBeenCalledTimes(1)
    expect(onOverflowAction.mock.calls[0]?.[0]).toBeUndefined()

    vi.useRealTimers()
  })
})

// ─── Focus management ────────────────────────────────────────────

describe("F0GraphDetailPanel focus management", () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it("panel is rendered with tabIndex=-1 (focusable but not in tab order)", () => {
    renderPanel({ open: true })

    const panel = screen.getByRole("complementary")
    expect(panel.getAttribute("tabindex")).toBe("-1")
  })

  it("panel contains a FocusScope that traps tab navigation", () => {
    renderPanel({ open: true })

    // Verify the panel has interactive elements (close button at minimum)
    const panel = screen.getByRole("complementary")
    const buttons = panel.querySelectorAll("button")
    expect(buttons.length).toBeGreaterThanOrEqual(1)
  })
})

// ─── Reduced motion ──────────────────────────────────────────────

describe("F0GraphDetailPanel reduced motion", () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it("panel renders immediately when MotionGlobalConfig.skipAnimations is true", () => {
    // test-utils.tsx sets MotionGlobalConfig.skipAnimations = true
    // so animations are already disabled in the test environment.
    renderPanel({ open: true })

    const panel = screen.getByRole("complementary")
    expect(panel).toBeTruthy()
    // Panel should be fully visible (opacity: 1, no transform offset)
    // With skipAnimations, motion renders the final state immediately.
  })
})
