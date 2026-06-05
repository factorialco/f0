import { Component as t } from "../../../lib/component/component.js";
import { AreaChartWidget as e } from "./AreaChartWidget/index.js";
import { BarChartWidget as r } from "./BarChartWidget/index.js";
import { LineChartWidget as i } from "./LineChartWidget/index.js";
import { PieChartWidget as a } from "./PieChartWidget/index.js";
import { SummariesWidget as m } from "./SummariesWidget/index.js";
import { VerticalBarChartWidget as o } from "./VerticalBarChartWidget/index.js";
const p = t(
  {
    name: "AreaChartWidget",
    type: "info"
  },
  e
), f = t(
  {
    name: "BarChartWidget",
    type: "info"
  },
  r
), c = t(
  {
    name: "LineChartWidget",
    type: "info"
  },
  i
), B = t(
  {
    name: "PieChartWidget",
    type: "info"
  },
  a
), y = t(
  {
    name: "VerticalBarChartWidget",
    type: "info"
  },
  o
), $ = t(
  {
    name: "SummariesWidget",
    type: "info"
  },
  m
);
export {
  p as AreaChartWidget,
  f as BarChartWidget,
  c as LineChartWidget,
  B as PieChartWidget,
  $ as SummariesWidget,
  y as VerticalBarChartWidget
};
