import { PureComponent } from "react"
import { Bar, BarProps, Rectangle, RectangleProps } from "recharts"

type GradientSign = "positive" | "negative"

type BarShapeProps = RectangleProps & {
  payload?: Record<string, unknown>
}

// `ref` is dropped because BarProps types it against the underlying SVG
// element, which does not match the class instance `<Bar>` expects.
export type ProjectedBarProps = Omit<BarProps, "shape" | "fill" | "ref"> & {
  /** Solid series color the gradient fades from. */
  fill: string
  /**
   * dataKeys of every bar series in the stack, in stacking order. When set,
   * the segment rounds its outer tip only while it is the outermost same-sign
   * segment of the stack, mirroring how solid stacked segments behave.
   */
  stackKeys?: string[]
}

let instanceCounter = 0

/**
 * Drop-in replacement for recharts' `<Bar>` for projected (provisional)
 * series: the solid `fill` becomes a gradient that fades toward the zero
 * line, flipping direction for segments hanging below the axis.
 *
 * Recharts locates and drives its graphical children through statics on the
 * element type (`displayName`, `defaultProps`, `getComposedData`), so this
 * class mirrors Bar's statics and forwards every prop the chart injects to a
 * real `<Bar>`. It stays a class component because React 18.3 function
 * components warn on `defaultProps`, which recharts requires on the type.
 */
export class ProjectedBar extends PureComponent<ProjectedBarProps> {
  static displayName = Bar.displayName
  static defaultProps = Bar.defaultProps
  static getComposedData = Bar.getComposedData

  // useId is unavailable in class components, so gradient ids come from a
  // module counter: unique per mounted bar and stable across re-renders.
  private uid = instanceCounter++

  private gradientId(sign: GradientSign) {
    return `projected-bar-${this.uid}-${sign}`
  }

  private renderShape = (props: unknown) => {
    const { payload, ...rest } = props as BarShapeProps
    const { dataKey, stackKeys } = this.props
    const valueOf = (key: string) => {
      const value = payload?.[key]
      return typeof value === "number" ? value : 0
    }

    const value = valueOf(String(dataKey))
    const fill = `url(#${this.gradientId(value < 0 ? "negative" : "positive")})`

    if (!stackKeys) {
      return <Rectangle {...rest} fill={fill} />
    }

    const outermost = [...stackKeys]
      .reverse()
      .find((key) => (value < 0 ? valueOf(key) < 0 : valueOf(key) > 0))

    // Segments below zero come in with a negative height and Rectangle mirrors
    // the path for them, so the first two radius slots land on the bar tip on
    // both sides of the axis.
    const radius: [number, number, number, number] =
      outermost === String(dataKey) ? [4, 4, 0, 0] : [0, 0, 0, 0]

    return <Rectangle {...rest} fill={fill} radius={radius} />
  }

  render() {
    const { stackKeys: _stackKeys, ...barProps } = this.props

    return (
      <>
        <defs>
          {/* One gradient per sign: the strong stop sits on the bar tip and
              fades toward the zero line. */}
          {(["positive", "negative"] as const).map((sign) => (
            <linearGradient
              key={sign}
              id={this.gradientId(sign)}
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
        <Bar {...barProps} shape={this.renderShape} />
      </>
    )
  }
}
