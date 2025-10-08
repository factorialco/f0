export type ColorScheme = "one-color" | "categorical" | "feedback"

export const getColorScheme = (
  category: ColorScheme,
  index: number,
  opacity?: number
) => {
  switch (category) {
    case "one-color":
      return getColor("default", opacity)

    case "categorical": {
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
      return getColor(
        categoricalColors[index % categoricalColors.length],
        opacity
      )
    }

    case "feedback": {
      const feedbackColors = [
        "feedback-negative",
        "feedback-neutral",
        "feedback-positive",
      ]
      return getColor(feedbackColors[index % feedbackColors.length], opacity)
    }

    default:
      return getColor("default", opacity)
  }
}

export const getColor = (color: string, opacity?: number) => {
  const opacityString = opacity !== undefined ? ` / ${opacity}` : ""
  const chartColorName = color.startsWith("chart-") ? color : `chart-${color}`

  return `hsl(var(--${chartColorName})${opacityString})`
}
