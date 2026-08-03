type Listener = () => void

/**
 * Registry of mounted `ToastProvider` instances. The toasts themselves live in
 * sonner's global state; this module only elects which mounted provider renders
 * the sonner `<Toaster />` (multiple mounted Toasters would each render every
 * toast, e.g. one per story canvas on a Storybook docs page) and backs the
 * dev-time "no provider" warning. The renderer is the lowest mounted id; when
 * it unmounts the next lowest takes over automatically.
 */
let rendererSeq = 0
const mountedRenderers = new Set<number>()
const rendererListeners = new Set<Listener>()

const emitRenderer = () => {
  for (const listener of rendererListeners) listener()
}

export const toastStore = {
  /**
   * Register a mounted provider as a candidate renderer. Returns the assigned
   * id and a `release` to call on unmount. Pair with `subscribeRenderer` +
   * `getActiveRendererId` to know whether this instance should render.
   */
  acquireRenderer() {
    rendererSeq += 1
    const id = rendererSeq
    mountedRenderers.add(id)
    emitRenderer()
    return {
      id,
      release() {
        mountedRenderers.delete(id)
        emitRenderer()
      },
    }
  },
  /** The elected renderer (lowest mounted id), or null if none mounted. */
  getActiveRendererId(): number | null {
    let min: number | null = null
    for (const id of mountedRenderers) {
      if (min === null || id < min) min = id
    }
    return min
  },
  subscribeRenderer(listener: Listener) {
    rendererListeners.add(listener)
    return () => {
      rendererListeners.delete(listener)
    }
  },
  hasProvider() {
    return mountedRenderers.size > 0
  },
}
