import { jsxs as i, jsx as o } from "react/jsx-runtime";
import { F0TimelineConnector as t } from "./F0TimelineConnector.js";
import { F0Icon as r } from "../../../components/F0Icon/index.js";
import m from "../../../icons/app/CheckCircle.js";
import n from "../../../icons/app/DottedCircle.js";
import "../../../icons/app/Menu.js";
import a from "../../../icons/app/PartiallyCompleted.js";
const f = {
  completed: /* @__PURE__ */ o(r, { icon: m, color: "positive", size: "lg" }),
  "in-progress": /* @__PURE__ */ o(r, { icon: a, size: "lg", color: "warning" }),
  "not-started": /* @__PURE__ */ o(r, { icon: n, size: "lg", color: "secondary" })
}, h = ({
  status: e,
  isLast: l,
  hideStatus: c,
  children: s
}) => /* @__PURE__ */ i("div", { className: "flex gap-4", children: [
  !c && /* @__PURE__ */ i("div", { className: "flex flex-col items-center", children: [
    /* @__PURE__ */ o(
      "div",
      {
        className: "h-8 flex flex-col justify-center",
        "data-testid": `timeline-status-${e}`,
        children: f[e]
      }
    ),
    !l && /* @__PURE__ */ o(t, { status: e })
  ] }),
  /* @__PURE__ */ o("div", { className: "flex flex-1 flex-col gap-3 pb-5", children: s })
] });
export {
  h as TimelineRowLayout
};
