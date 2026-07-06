import { Component, type ReactNode } from "react"

interface RenderErrorBoundaryProps {
  children: ReactNode
  /** Rendered when a descendant throws during render. Defaults to nothing. */
  fallback?: ReactNode
  /** Called with the thrown error, e.g. to log it with context. */
  onError?: (error: Error) => void
}

interface RenderErrorBoundaryState {
  hasError: boolean
}

/**
 * Boundary for non-critical UI: a render error in `children` degrades to
 * `fallback` instead of propagating and unmounting the whole tree above it.
 *
 * The fallback is permanent for the lifetime of the boundary instance — there
 * is no retry — so only wrap subtrees the user can live without.
 */
export class RenderErrorBoundary extends Component<
  RenderErrorBoundaryProps,
  RenderErrorBoundaryState
> {
  state: RenderErrorBoundaryState = { hasError: false }

  static getDerivedStateFromError(): RenderErrorBoundaryState {
    return { hasError: true }
  }

  componentDidCatch(error: Error) {
    this.props.onError?.(error)
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback ?? null
    }
    return this.props.children
  }
}
