import { useId } from "react"
import { Bar, BarProps, Rectangle, RectangleProps } from "recharts"

type GradientSign = "positive" | "negative"

type BarShapeProps = RectangleProps & {
  payload?: Record<string, unknown>
}

export type ProjectedBarProps = Omit<BarProps, "shape" | "fill" | "ref"> & {
  fill: string
  /**
   * dataKeys of every bar series in the stack, in stacking order. When set,
   * the segment rounds its outer tip only while it is the outermost same-sign
   * segment of the stack.
   */
  stackKeys?: string[]
}

/**
 * Drop-in replacement for recharts' `<Bar>` for projected (provisional)
 * series: the solid `fill` becomes a gradient that fades toward the zero
 * line, flipping direction for segments hanging below the axis.
 */
const ProjectedBarComponent = ({
  stackKeys,
  ...barProps
}: ProjectedBarProps) => {
  const uid = useId().replace(/:/g, "")
  const gradientId = (sign: GradientSign) => `projected-bar-${uid}-${sign}`

  const renderShape = (props: unknown) => {
    const { payload, ...rest } = props as BarShapeProps
    const valueOf = (key: string) => {
      const value = payload?.[key]
      return typeof value === "number" ? value : 0
    }

    const value = valueOf(String(barProps.dataKey))
    const fill = `url(#${gradientId(value < 0 ? "negative" : "positive")})`

    if (!stackKeys) {
      return <Rectangle {...rest} fill={fill} />
    }

    const outermost = [...stackKeys]
      .reverse()
      .find((key) => (value < 0 ? valueOf(key) < 0 : valueOf(key) > 0))
    const radius: [number, number, number, number] =
      outermost === String(barProps.dataKey) ? [4, 4, 0, 0] : [0, 0, 0, 0]

    return <Rectangle {...rest} fill={fill} radius={radius} />
  }

  return (
    <>
      <defs>
        {(["positive", "negative"] as const).map((sign) => (
          <linearGradient
            key={sign}
            id={gradientId(sign)}
            x1="0"
            y1="0"
            x2="0"
            y2="1"
          >
            <stop
              offset="0%"
              stopColor={barProps.fill}
              stopOpacity={sign === "positive" ? 0.4 : 0.05}
            />
            <stop
              offset="100%"
              stopColor={barProps.fill}
              stopOpacity={sign === "positive" ? 0.05 : 0.4}
            />
          </linearGradient>
        ))}
      </defs>
      <Bar {...barProps} shape={renderShape} />
    </>
  )
}

// Recharts locates and drives its graphical children through these statics
// on the element type, so ProjectedBar must mirror Bar's.
export const ProjectedBar = Object.assign(ProjectedBarComponent, {
  displayName: Bar.displayName,
  defaultProps: Bar.defaultProps,
  getComposedData: Bar.getComposedData,
})
