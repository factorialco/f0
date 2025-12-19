import "@testing-library/jest-dom/vitest"
import { cleanup } from "@testing-library/react"
import type * as ReactTypes from "react"
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

// Add pointer event polyfills for testing environment
if (typeof window !== "undefined") {
  window.HTMLElement.prototype.hasPointerCapture = () => false
  window.HTMLElement.prototype.setPointerCapture = () => {}
  window.HTMLElement.prototype.releasePointerCapture = () => {}
  window.HTMLElement.prototype.scrollIntoView = () => {}
}
