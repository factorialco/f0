import { Component as r } from "../../lib/component/component.js";
import { withDataTestId as a } from "../../lib/data-testid/index.js";
import { AreaChart as t } from "./AreaChart/index.js";
import { BarChart as o } from "./BarChart/index.js";
import { CategoryBarChart as e } from "./CategoryBarChart/index.js";
import { ComboChart as C } from "./ComboChart/index.js";
import { LineChart as m } from "./LineChart/index.js";
import { PieChart as h } from "./PieChart/index.js";
import { ProgressBar as i } from "./ProgressChart/index.js";
import { RadarChart as n } from "./RadarChart/index.js";
import { VerticalBarChart as s } from "./VerticalBarChart/index.js";
const A = a(
  r({ name: "AreaChart", type: "info" }, t)
), L = a(
  r({ name: "BarChart", type: "info" }, o)
), R = a(
  r(
    { name: "CategoryBarChart", type: "info" },
    e
  )
), V = a(
  r({ name: "LineChart", type: "info" }, m)
), w = a(
  r({ name: "PieChart", type: "info" }, h)
), x = a(
  r(
    { name: "VerticalBarChart", type: "info" },
    s
  )
), D = a(
  r({ name: "ProgressBarChart", type: "info" }, i)
), I = a(
  r({ name: "ComboChart", type: "info" }, C)
), T = a(
  r({ name: "RadarChart", type: "info" }, n)
);
export {
  A as AreaChart,
  L as BarChart,
  R as CategoryBarChart,
  I as ComboChart,
  V as LineChart,
  w as PieChart,
  D as ProgressBarChart,
  T as RadarChart,
  x as VerticalBarChart
};
