export interface OwnedInputMetric {
  path: string
  bytes: number
}

interface RootSubpathTolerance {
  maxAdditionalBytes: number
  maxAdditionalModules: number
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
