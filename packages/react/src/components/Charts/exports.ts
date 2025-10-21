import { Component } from "../../lib/component/component"

import { AreaChart as AreaChartComponent } from "./AreaChart"
import { BarChart as BarChartComponent } from "./BarChart"
import { CategoryBarChart as CategoryBarChartComponent } from "./CategoryBarChart"
import { LineChart as LineChartComponent } from "./LineChart"
import { PieChart as PieChartComponent } from "./PieChart"
import { ProgressBar as ProgressBarComponent } from "./ProgressChart"
import { VerticalBarChart as VerticalBarChartComponent } from "./VerticalBarChart"

export const AreaChart = Component(
  {
    name: "AreaChart",
    type: "info",
  },
  AreaChartComponent
)

export const BarChart = Component(
  {
    name: "BarChart",
    type: "info",
  },
  BarChartComponent
)

export const CategoryBarChart = Component(
  {
    name: "CategoryBarChart",
    type: "info",
  },
  CategoryBarChartComponent
)

export const LineChart = Component(
  {
    name: "LineChart",
    type: "info",
  },
  LineChartComponent
)

export const PieChart = Component(
  {
    name: "PieChart",
    type: "info",
  },
  PieChartComponent
)

export const VerticalBarChart = Component(
  {
    name: "VerticalBarChart",
    type: "info",
  },
  VerticalBarChartComponent
)

export const ProgressBarChart = Component(
  {
    name: "ProgressBarChart",
    type: "info",
  },
  ProgressBarComponent
)
