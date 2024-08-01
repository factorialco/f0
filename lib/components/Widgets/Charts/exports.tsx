import { Component } from "@/lib/component"
import { AreaChartWidget as AreaChartWidgetComponent } from "./AreaChartWidget"
import { BarChartWidget as BarChartWidgetComponent } from "./BarChartWidget"
import { LineChartWidget as LineChartWidgetComponent } from "./LineChartWidget"
import { PieChartWidget as PieChartWidgetComponent } from "./PieChartWidget"
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
