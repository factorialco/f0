import "@testing-library/jest-dom/vitest"
import { cleanup } from "@testing-library/react"
import { afterEach, vi } from "vitest"

afterEach(() => {
  cleanup()
})

// Global declaration for TestI18nProvider
declare global {
  const TestI18nProvider: ({
    children,
  }: {
    children: React.ReactNode
  }) => JSX.Element
}

vi.stubGlobal("CSS", { supports: () => true })

vi.stubGlobal("matchMedia", (query: string) => ({
  matches: false,
  media: query,
  onchange: null,
  addListener: vi.fn(),
  removeListener: vi.fn(),
  addEventListener: vi.fn(),
  removeEventListener: vi.fn(),
  dispatchEvent: vi.fn(),
}))

// Mock ResizeObserver
vi.stubGlobal("ResizeObserver", {
  observe: vi.fn(),
  disconnect: vi.fn(),
})

// Mock getComputedStyle for the OneEllipsis component
// ... existing code ...
vi.stubGlobal("ResizeObserver", {
  observe: vi.fn(),
  disconnect: vi.fn(),
})

// Mock getComputedStyle to return a more complete object
vi.stubGlobal("getComputedStyle", (elt: Element) => {
  const style = (elt as HTMLElement)?.style

  return {
    ...style,
    lineHeight: "20px",
    getPropertyValue: (prop: string) => {
      if (prop in style) {
        // @ts-expect-error TS7010: Prop can be any
        return style[prop]
      }
      return ""
    },
  }
})

// Add pointer event polyfills for testing environment
if (typeof window !== "undefined") {
  window.HTMLElement.prototype.hasPointerCapture = () => false
  window.HTMLElement.prototype.setPointerCapture = () => {}
  window.HTMLElement.prototype.releasePointerCapture = () => {}
  window.HTMLElement.prototype.scrollIntoView = () => {}
}

// Mock ResizeObserver
vi.stubGlobal(
  "ResizeObserver",
  class MockedResizeObserver {
    observe = vi.fn()
    unobserve = vi.fn()
    disconnect = vi.fn()
  }
)
