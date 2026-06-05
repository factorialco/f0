import { Component as t } from "../../../lib/component/component.js";
import { AutoGrid as o } from "./AutoGrid/index.js";
import { Split as a } from "./Split/index.js";
import { Stack as p } from "./Stack/index.js";
const n = t(
  {
    name: "Stack",
    type: "layout"
  },
  p
), S = t(
  {
    name: "Split",
    type: "layout"
  },
  a
), c = t(
  {
    name: "AutoGrid",
    type: "layout"
  },
  o
);
export {
  c as AutoGrid,
  S as Split,
  n as Stack
};
