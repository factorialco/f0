/// <reference types="vitest/browser" />
/// <reference types="react" />

import "@testing-library/jest-dom/vitest"

// Global React namespace declaration for test files
// This allows using React types (React.ReactNode, React.ReactElement, etc.) without importing React
// Using global augmentation to ensure it works in module contexts
import type * as ReactTypes from "react"

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
}

// Make this file a module so global augmentation works
export {}
