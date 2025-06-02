import "@testing-library/jest-dom/vitest"
import { cleanup } from "@testing-library/react"
import { afterEach, vi } from "vitest"

afterEach(() => {
  cleanup()
})

vi.stubGlobal("CSS", { supports: () => true })

vi.stubGlobal("matchMedia", (query) => ({
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
vi.stubGlobal("getComputedStyle", () => ({
  lineHeight: "20px",
}))

// Add pointer event polyfills for testing environment
if (typeof window !== "undefined") {
  window.HTMLElement.prototype.hasPointerCapture = () => false
  window.HTMLElement.prototype.setPointerCapture = () => {}
  window.HTMLElement.prototype.releasePointerCapture = () => {}
  window.HTMLElement.prototype.scrollIntoView = () => {}
}
