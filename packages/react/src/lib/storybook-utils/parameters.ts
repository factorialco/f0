interface ChromaticOptions {
  disableSnapshot?: boolean
  diffThreshold?: number
  forceColors: string
}

export const withSnapshot = (
  parameters: Record<string, unknown>,
  options?: ChromaticOptions
) => {
  return { ...parameters, chromatic: { disableSnapshot: false, ...options } }
}
