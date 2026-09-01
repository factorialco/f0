export interface BundleMetric {
  initialJsBrotli: number
  totalJsBrotli: number
  cssBrotli: number
  retainedF0Modules: number
}

export interface DeliveryCeiling {
  maxInitialJsBrotli: number
  maxTotalJsBrotli?: number
  maxCssBrotli?: number
}

export interface OwnedInputMetric {
  path: string
  bytes: number
}

interface RootSubpathTolerance {
  maxAdditionalBytes: number
  maxAdditionalModules: number
}

export function validateDeliveryCeiling(
  scenario: string,
  metric: BundleMetric,
  ceiling: DeliveryCeiling
): string[] {
  const errors: string[] = []

  if (metric.initialJsBrotli > ceiling.maxInitialJsBrotli) {
    errors.push(
      `${scenario} initial JS Brotli is ${metric.initialJsBrotli} B; ceiling is ${ceiling.maxInitialJsBrotli} B`
    )
  }
  if (
    ceiling.maxTotalJsBrotli !== undefined &&
    metric.totalJsBrotli > ceiling.maxTotalJsBrotli
  ) {
    errors.push(
      `${scenario} total JS Brotli is ${metric.totalJsBrotli} B; ceiling is ${ceiling.maxTotalJsBrotli} B`
    )
  }
  if (
    ceiling.maxCssBrotli !== undefined &&
    metric.cssBrotli > ceiling.maxCssBrotli
  ) {
    errors.push(
      `${scenario} CSS Brotli is ${metric.cssBrotli} B; ceiling is ${ceiling.maxCssBrotli} B`
    )
  }

  return errors
}

export function validateRootSubpathParity(
  rootInputs: OwnedInputMetric[],
  subpathInputs: OwnedInputMetric[],
  tolerance: RootSubpathTolerance
): string[] {
  const subpathInputPaths = new Set(subpathInputs.map((input) => input.path))
  const rootOnlyInputs = rootInputs.filter(
    (input) => !subpathInputPaths.has(input.path)
  )
  const rootOnlyBytes = rootOnlyInputs.reduce(
    (total, input) => total + input.bytes,
    0
  )
  const rootOnlyPaths = rootOnlyInputs.map((input) => input.path).join(", ")
  const errors: string[] = []

  if (rootOnlyBytes > tolerance.maxAdditionalBytes) {
    errors.push(
      `Root import retains ${rootOnlyBytes} additional F0 bytes; ceiling is ${tolerance.maxAdditionalBytes} B. Root-only modules: ${rootOnlyPaths}`
    )
  }
  if (rootOnlyInputs.length > tolerance.maxAdditionalModules) {
    errors.push(
      `Root import retains ${rootOnlyInputs.length} additional F0 modules; ceiling is ${tolerance.maxAdditionalModules}. Root-only modules: ${rootOnlyPaths}`
    )
  }

  return errors
}

export function validateLazyBoundary(
  scenario: string,
  initialModules: string[],
  allModules: string[],
  lazyDependencies: string[]
): string[] {
  const errors: string[] = []

  for (const dependency of lazyDependencies) {
    if (initialModules.some((moduleId) => moduleId.includes(dependency))) {
      errors.push(
        `${scenario} initial chunks retain lazy dependency: ${dependency}`
      )
    } else if (!allModules.some((moduleId) => moduleId.includes(dependency))) {
      errors.push(`${scenario} does not retain lazy dependency: ${dependency}`)
    }
  }

  return errors
}
