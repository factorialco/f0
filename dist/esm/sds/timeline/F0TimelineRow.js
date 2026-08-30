import { NestedtaskRow as e } from "./components/NestedtaskRow.js";
import { TaskRow as t } from "./components/TaskRow.js";
import { MultitaskRow as n } from "./components/MultitaskRow.js";
import { jsx as r } from "react/jsx-runtime";
//#region src/sds/timeline/F0TimelineRow.tsx
var i = (e) => ("items" in e || "content" in e) && "icon" in e && e.icon !== void 0, a = (e) => "items" in e && !("icon" in e && e.icon !== void 0), o = (o) => i(o) ? /* @__PURE__ */ r(e, { props: o }) : a(o) ? /* @__PURE__ */ r(n, { props: o }) : /* @__PURE__ */ r(t, { props: o });
//#endregion
export { o as F0TimelineRow };
