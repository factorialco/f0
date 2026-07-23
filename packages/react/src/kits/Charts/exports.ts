import { Component } from "../../lib/component/component"
import { withDataTestId } from "../../lib/data-testid"
import { AreaChart as AreaChartComponent } from "./AreaChart"
import { BarChart as BarChartComponent } from "./BarChart"
import { CategoryBarChart as CategoryBarChartComponent } from "./CategoryBarChart"
import { ComboChart as ComboChartComponent } from "./ComboChart"
import { LineChart as LineChartComponent } from "./LineChart"
import { PieChart as PieChartComponent } from "./PieChart"
import { ProgressBar as ProgressBarComponent } from "./ProgressChart"
import { RadarChart as RadarChartComponent } from "./RadarChart"
import { VerticalBarChart as VerticalBarChartComponent } from "./VerticalBarChart"

/**
 * @deprecated The Charts kit (Recharts) is deprecated in favor of
 * `F0DataChart`. Renders a line chart with area fill — use
 * `<F0DataChart type="line" showArea />` instead.
 */
export const AreaChart = withDataTestId(
  Component({ name: "AreaChart", type: "info" }, AreaChartComponent)
)

/**
 * @deprecated The Charts kit (Recharts) is deprecated in favor of
 * `F0DataChart`. Despite the name, this renders VERTICAL columns — use
 * `<F0DataChart type="bar" />` instead.
 */
export const BarChart = withDataTestId(
  Component({ name: "BarChart", type: "info" }, BarChartComponent)
)

/**
 * @deprecated The Charts kit (Recharts) is deprecated in favor of
 * `F0DataChart`. Use `<F0DataChart type="categoryBar" />` instead.
 */
export const CategoryBarChart = withDataTestId(
  Component(
    { name: "CategoryBarChart", type: "info" },
    CategoryBarChartComponent
  )
)

/**
 * @deprecated The Charts kit (Recharts) is deprecated in favor of
 * `F0DataChart`. Use `<F0DataChart type="line" />` instead.
 */
export const LineChart = withDataTestId(
  Component({ name: "LineChart", type: "info" }, LineChartComponent)
)

/**
 * @deprecated The Charts kit (Recharts) is deprecated in favor of
 * `F0DataChart`. Use `<F0DataChart type="pie" />` (with `innerRadius` for
 * the donut style) instead.
 */
export const PieChart = withDataTestId(
  Component({ name: "PieChart", type: "info" }, PieChartComponent)
)

/**
 * @deprecated The Charts kit (Recharts) is deprecated in favor of
 * `F0DataChart`. Despite the name, this renders HORIZONTAL bars — use
 * `<F0DataChart type="bar" orientation="horizontal" />` instead.
 */
export const VerticalBarChart = withDataTestId(
  Component(
    { name: "VerticalBarChart", type: "info" },
    VerticalBarChartComponent
  )
)

/**
 * @deprecated The Charts kit (Recharts) is deprecated. This is a progress
 * indicator, not a data chart — use the `progressBar` value-display type
 * (data collections / cards) or the `ui/progress` primitive instead.
 */
export const ProgressBarChart = withDataTestId(
  Component({ name: "ProgressBarChart", type: "info" }, ProgressBarComponent)
)

/**
 * @deprecated The Charts kit (Recharts) is deprecated and ComboChart has no
 * known consumers — it will be removed without a replacement. Compose
 * `F0DataChart` charts or use `echartsOptions` for mixed series.
 */
export const ComboChart = withDataTestId(
  Component({ name: "ComboChart", type: "info" }, ComboChartComponent)
)

/**
 * @deprecated The Charts kit (Recharts) is deprecated in favor of
 * `F0DataChart`. Use `<F0DataChart type="radar" />` instead.
 */
export const RadarChart = withDataTestId(
  Component({ name: "RadarChart", type: "info" }, RadarChartComponent)
)
