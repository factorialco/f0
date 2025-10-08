export const getCategoricalColor = (index: number, opacity?: number) => {
  const categoricalColors = [
    "categorical-1",
    "categorical-2",
    "categorical-3",
    "categorical-4",
    "categorical-5",
    "categorical-6",
    "categorical-7",
    "categorical-8",
  ]
  return getColor(categoricalColors[index % categoricalColors.length], opacity)
}

export const getColor = (color: string, opacity?: number) => {
  const opacityString = opacity !== undefined ? ` / ${opacity}` : ""
  const chartColorName = color.startsWith("chart-") ? color : `chart-${color}`

  return `hsl(var(--${chartColorName})${opacityString})`
}
