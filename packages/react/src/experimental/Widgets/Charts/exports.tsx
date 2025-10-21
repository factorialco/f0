import { Component } from "../../../lib/component/component"
import { AreaChartWidget as AreaChartWidgetComponent } from "./AreaChartWidget"
import { BarChartWidget as BarChartWidgetComponent } from "./BarChartWidget"
import { LineChartWidget as LineChartWidgetComponent } from "./LineChartWidget"
import { PieChartWidget as PieChartWidgetComponent } from "./PieChartWidget"
import { SummariesWidget as SummariesWidgetComponent } from "./SummariesWidget"
import { VerticalBarChartWidget as VerticalBarChartWidgetComponent } from "./VerticalBarChartWidget"

export const AreaChartWidget = Component(
  {
    name: "AreaChartWidget",
    type: "info",
  },
  AreaChartWidgetComponent
)

export const BarChartWidget = Component(
  {
    name: "BarChartWidget",
    type: "info",
  },
  BarChartWidgetComponent
)

export const LineChartWidget = Component(
  {
    name: "LineChartWidget",
    type: "info",
  },
  LineChartWidgetComponent
)

export const PieChartWidget = Component(
  {
    name: "PieChartWidget",
    type: "info",
  },
  PieChartWidgetComponent
)

export const VerticalBarChartWidget = Component(
  {
    name: "VerticalBarChartWidget",
    type: "info",
  },
  VerticalBarChartWidgetComponent
)

export const SummariesWidget = Component(
  {
    name: "SummariesWidget",
    type: "info",
  },
  SummariesWidgetComponent
)
