import { jsx as m } from "react/jsx-runtime";
import { F0Widget as s } from "../../../components/F0Widget/F0Widget.js";
const f = ({
  children: t,
  title: o,
  draggable: r = !1,
  actions: e,
  aiButton: i
}) => /* @__PURE__ */ m(
  s,
  {
    title: o,
    draggable: r,
    actions: e,
    AIButton: i,
    children: t
  }
);
export {
  f as DashboardWidget
};
