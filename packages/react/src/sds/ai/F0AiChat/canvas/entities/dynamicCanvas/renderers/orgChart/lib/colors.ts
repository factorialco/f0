const CATEGORICAL_PALETTE = [
  "#3b82f6", // blue
  "#ef4444", // red
  "#22c55e", // green
  "#f59e0b", // amber
  "#8b5cf6", // violet
  "#ec4899", // pink
  "#14b8a6", // teal
  "#f97316", // orange
  "#6366f1", // indigo
  "#84cc16", // lime
]

const SEQUENTIAL_PALETTE = [
  "#dbeafe",
  "#bfdbfe",
  "#93c5fd",
  "#60a5fa",
  "#3b82f6",
  "#2563eb",
  "#1d4ed8",
  "#1e40af",
]

export function buildColorMap(
  values: (string | number | null | undefined)[],
  palette: "categorical" | "sequential" | string[]
): Map<string | number, string> {
  const uniqueValues = [...new Set(values.filter((v) => v != null))]
  const colors = Array.isArray(palette)
    ? palette
    : palette === "sequential"
      ? SEQUENTIAL_PALETTE
      : CATEGORICAL_PALETTE

  return new Map(
    uniqueValues.map((value, i) => [value, colors[i % colors.length]!])
  )
}

export function buildScale(
  values: number[],
  range: [number, number]
): (value: number) => number {
  const min = Math.min(...values)
  const max = Math.max(...values)
  const span = max - min || 1
  const [outMin, outMax] = range

  return (value: number) => outMin + ((value - min) / span) * (outMax - outMin)
}
