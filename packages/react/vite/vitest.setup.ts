import "@testing-library/jest-dom/vitest"
import type * as ReactTypes from "react"

import { cleanup } from "@testing-library/react"
import { afterEach, vi } from "vitest"

afterEach(() => {
  cleanup()
})

// Global React namespace declaration for test files
// This allows using React types (React.ReactNode, React.ReactElement, etc.) without importing React
declare global {
  namespace React {
    type ReactNode = ReactTypes.ReactNode
    type ReactElement = ReactTypes.ReactElement
    type ComponentType<P = {}> = ReactTypes.ComponentType<P>
    type FC<P = {}> = ReactTypes.FC<P>
    type Component<P = {}, S = {}> = ReactTypes.Component<P, S>
    type ComponentState = ReactTypes.ComponentState
    type PropsWithChildren<P = unknown> = ReactTypes.PropsWithChildren<P>
    type RefObject<T> = ReactTypes.RefObject<T>
    type MutableRefObject<T> = ReactTypes.MutableRefObject<T>
    type RefCallback<T> = ReactTypes.RefCallback<T>
    type Ref<T> = ReactTypes.Ref<T>
  }

  const TestI18nProvider: ({
    children,
  }: {
    children: React.ReactNode
  }) => JSX.Element
}

const escapeCssIdentifier = (value: string) =>
  value.replace(/[^a-zA-Z0-9_-]/g, (character) => `\\${character}`)

vi.stubGlobal("CSS", {
  ...(typeof CSS !== "undefined" ? CSS : {}),
  supports: () => true,
  escape:
    typeof CSS !== "undefined" && CSS.escape
      ? CSS.escape.bind(CSS)
      : escapeCssIdentifier,
})

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

// Mock ResizeObserver - must be a class constructor for 'new ResizeObserver()' to work
vi.stubGlobal(
  "ResizeObserver",
  class MockedResizeObserver {
    observe = vi.fn()
    unobserve = vi.fn()
    disconnect = vi.fn()
  }
)

// Mock IntersectionObserver - required by @emoji-mart/react and other libs
vi.stubGlobal(
  "IntersectionObserver",
  class MockedIntersectionObserver {
    readonly root = null
    readonly rootMargin = "0px"
    readonly thresholds: ReadonlyArray<number> = [0]
    observe = vi.fn()
    unobserve = vi.fn()
    disconnect = vi.fn()
    takeRecords = vi.fn().mockReturnValue([])
  }
)

// Add pointer event polyfills for testing environment
if (typeof window !== "undefined") {
  window.HTMLElement.prototype.hasPointerCapture = () => false
  window.HTMLElement.prototype.setPointerCapture = () => {}
  window.HTMLElement.prototype.releasePointerCapture = () => {}
  window.HTMLElement.prototype.scrollIntoView = () => {}
}

// ProseMirror's scrollToSelection path calls Range.getClientRects() and
// Range.getBoundingClientRect(), which JSDOM does not implement.
// Without these stubs, any test that triggers editor focus + scroll throws:
//   TypeError: target.getClientRects is not a function
// Rects must be non-zero (1×1) because ProseMirror's nonZero() filter rejects zero-area rects.
if (typeof Range !== "undefined") {
  if (!Range.prototype.getClientRects) {
    Range.prototype.getClientRects = () => {
      const rect = {
        top: 0,
        left: 0,
        bottom: 1,
        right: 1,
        width: 1,
        height: 1,
        x: 0,
        y: 0,
        toJSON: () => ({}),
      }
      return [rect] as unknown as DOMRectList
    }
  }
  if (!Range.prototype.getBoundingClientRect) {
    Range.prototype.getBoundingClientRect = () =>
      ({
        top: 0,
        left: 0,
        bottom: 1,
        right: 1,
        width: 1,
        height: 1,
        x: 0,
        y: 0,
        toJSON: () => ({}),
      }) as DOMRect
  }
}
