import { Component } from "../../lib/component/component"
import { withDataTestId } from "../../lib/data-testid"
import { AreaChart as AreaChartComponent } from "./AreaChart"
import { BarChart as BarChartComponent } from "./BarChart"
import { CategoryBarChart as CategoryBarChartComponent } from "./CategoryBarChart"
import { ComboChart as ComboChartComponent } from "./ComboChart"
import { LineChart as LineChartComponent } from "./LineChart"
import { PieChart as PieChartComponent } from "./PieChart"
import { ProgressBar as ProgressBarComponent } from "./ProgressChart"
import { VerticalBarChart as VerticalBarChartComponent } from "./VerticalBarChart"

export const AreaChart = withDataTestId(
  Component({ name: "AreaChart", type: "info" }, AreaChartComponent)
)

export const BarChart = withDataTestId(
  Component({ name: "BarChart", type: "info" }, BarChartComponent)
)

export const CategoryBarChart = withDataTestId(
  Component(
    { name: "CategoryBarChart", type: "info" },
    CategoryBarChartComponent
  )
)

export const LineChart = withDataTestId(
  Component({ name: "LineChart", type: "info" }, LineChartComponent)
)

export const PieChart = withDataTestId(
  Component({ name: "PieChart", type: "info" }, PieChartComponent)
)

export const VerticalBarChart = withDataTestId(
  Component(
    { name: "VerticalBarChart", type: "info" },
    VerticalBarChartComponent
  )
)

export const ProgressBarChart = withDataTestId(
  Component({ name: "ProgressBarChart", type: "info" }, ProgressBarComponent)
)

export const ComboChart = withDataTestId(
  Component({ name: "ComboChart", type: "info" }, ComboChartComponent)
)
