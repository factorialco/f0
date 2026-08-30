export interface AssetMetric {
  raw: number
  gzip: number
  brotli: number
}

export interface BundleVariantReport {
  assets: {
    js: AssetMetric
    initialJs: AssetMetric
    css: AssetMetric
  }
  retainedF0Modules: string[]
}

export interface BundleReport {
  variants: Record<string, BundleVariantReport>
}

const STABLE_CHUNK_NAMES = new Set([
  "ai.js",
  "component-status.js",
  "experimental.js",
  "f0.js",
  "i18n-provider-defaults.js",
])

export function normalizeChunkName(fileName: string): string {
  if (STABLE_CHUNK_NAMES.has(fileName)) return fileName
  return fileName.replace(/-[A-Za-z0-9_-]{8}\.js$/, ".js")
}

export function compareBundleReport(
  actual: BundleReport,
  baseline: BundleReport
): string[] {
  const failures: string[] = []
  const assetKinds = ["js", "initialJs", "css"] as const
  const metricKinds = ["raw", "gzip", "brotli"] as const

  for (const variantName of Object.keys(actual.variants)) {
    if (!baseline.variants[variantName]) {
      failures.push(
        `Unexpected consumer bundle variant without baseline: ${variantName}`
      )
    }
  }

  for (const [variantName, baselineVariant] of Object.entries(
    baseline.variants
  )) {
    const actualVariant = actual.variants[variantName]
    if (!actualVariant) {
      failures.push(`Missing consumer bundle variant: ${variantName}`)
      continue
    }

    for (const assetKind of assetKinds) {
      for (const metricKind of metricKinds) {
        const baselineValue = baselineVariant.assets[assetKind][metricKind]
        const actualValue = actualVariant.assets[assetKind][metricKind]
        if (actualValue > baselineValue) {
          failures.push(
            `${variantName} ${assetKind.toUpperCase()} ${metricKind} grew ` +
              `from ${baselineValue} B to ${actualValue} B ` +
              `(+${actualValue - baselineValue} B)`
          )
        }
      }
    }

    const allowedModules = new Set(baselineVariant.retainedF0Modules)
    for (const moduleName of actualVariant.retainedF0Modules) {
      if (!allowedModules.has(moduleName)) {
        failures.push(`${variantName} retained new F0 module: ${moduleName}`)
      }
    }
  }

  return failures
}
