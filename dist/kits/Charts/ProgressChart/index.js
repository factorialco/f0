import { jsxs as m, jsx as r } from "react/jsx-runtime";
import { Progress as c } from "../../../ui/progress.js";
import { getColor as l } from "../utils/colors.js";
import { fixedForwardRef as n } from "../utils/forwardRef.js";
const f = ({ value: e, max: a = 100, label: o, color: s }, d) => {
  const t = s ? l(s) : l("categorical-1"), i = e / a * 100;
  return /* @__PURE__ */ m("div", { className: "flex items-center space-x-2", "aria-live": "polite", children: [
    /* @__PURE__ */ r("div", { className: "flex-grow", children: /* @__PURE__ */ r(
      c,
      {
        color: t,
        value: i,
        className: "w-full",
        "aria-valuemin": 0,
        "aria-valuemax": a,
        "aria-valuenow": e,
        "aria-label": `${i.toFixed(1)}%`
      }
    ) }),
    o && /* @__PURE__ */ r("div", { className: "flex-shrink-0 text-sm font-medium", children: o })
  ] });
}, u = n(f);
export {
  u as ProgressBar
};
