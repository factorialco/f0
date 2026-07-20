interface SliderRangeLabelsProps {
  minLabel?: string
  maxLabel?: string
}

export const SliderRangeLabels = ({
  minLabel,
  maxLabel,
}: SliderRangeLabelsProps) => {
  if (!minLabel && !maxLabel) return null

  return (
    <div
      data-testid="slider-range-labels"
      className="flex justify-between text-sm text-f1-foreground-secondary"
    >
      <span>{minLabel}</span>
      <span>{maxLabel}</span>
    </div>
  )
}
