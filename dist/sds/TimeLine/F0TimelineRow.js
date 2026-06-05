import { jsx as t } from "react/jsx-runtime";
import { MultitaskRow as n } from "./components/MultitaskRow.js";
import { NestedtaskRow as o } from "./components/NestedtaskRow.js";
import { TaskRow as e } from "./components/TaskRow.js";
const m = (i) => ("items" in i || "content" in i) && "icon" in i && i.icon !== void 0, c = (i) => "items" in i && !("icon" in i && i.icon !== void 0), k = (i) => m(i) ? /* @__PURE__ */ t(o, { props: i }) : c(i) ? /* @__PURE__ */ t(n, { props: i }) : /* @__PURE__ */ t(e, { props: i });
export {
  k as F0TimelineRow
};
