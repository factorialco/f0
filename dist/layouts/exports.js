import { Component as o } from "../lib/component/component.js";
import { withDataTestId as t } from "../lib/data-testid/index.js";
import { HomeLayout as a } from "./HomeLayout/index.js";
import { StandardLayout as m } from "./StandardLayout/index.js";
import { TwoColumnLayout as r } from "./TwoColumnLayout/index.js";
const p = m, d = r, s = t(
  o(
    {
      name: "HomeLayout",
      type: "layout"
    },
    a
  )
);
export {
  s as HomeLayout,
  p as StandardLayout,
  d as TwoColumnLayout
};
