import { jsxs as o, jsx as r } from "react/jsx-runtime";
import { TooltipProvider as x, Tooltip as v, TooltipTrigger as g, TooltipContent as C } from "../../../ui/tooltip.js";
import { getColor as d, getCategoricalColor as c } from "../utils/colors.js";
import { fixedForwardRef as N } from "../utils/forwardRef.js";
const w = ({ data: t, legend: m = !0, hideTooltip: f = !1 }, u) => {
  const s = t.reduce((e, l) => e + l.value, 0);
  return /* @__PURE__ */ o(x, { children: [
    /* @__PURE__ */ r("div", { className: "w-full", ref: u, children: /* @__PURE__ */ r("div", { className: "flex h-2 gap-1 overflow-hidden", children: t.map((e, l) => {
      const n = e.value / s * 100, i = e.color ? d(e.color) : c(l), p = (h) => {
        const a = h / s * 100;
        return a % 1 === 0 ? a.toFixed(0) : a.toFixed(1);
      };
      return n === 0 ? null : /* @__PURE__ */ o(v, { children: [
        /* @__PURE__ */ r(
          g,
          {
            className: "h-full cursor-default overflow-hidden rounded-2xs",
            style: { width: `${n}%` },
            title: e.name,
            asChild: !0,
            children: /* @__PURE__ */ r(
              "div",
              {
                className: "h-full w-full",
                style: { backgroundColor: i },
                role: "img",
                title: e.name,
                tabIndex: 0
              }
            )
          }
        ),
        !f && /* @__PURE__ */ o(C, { className: "flex items-center gap-1 text-sm", children: [
          /* @__PURE__ */ r(
            "div",
            {
              className: "h-2.5 w-2.5 shrink-0 translate-y-px rounded-full",
              style: { backgroundColor: i }
            }
          ),
          /* @__PURE__ */ r("span", { className: "pl-0.5 pr-2 text-f1-foreground-inverse-secondary dark:text-f1-foreground-secondary", children: e.name }),
          /* @__PURE__ */ o("span", { className: "font-mono font-medium tabular-nums text-f1-foreground-inverse dark:text-f1-foreground", children: [
            e.value,
            " (",
            p(e.value),
            "%)"
          ] })
        ] })
      ] }, e.name);
    }) }) }),
    m && /* @__PURE__ */ r(
      "div",
      {
        className: "mt-2 flex w-full flex-wrap gap-x-2.5 gap-y-0.5",
        role: "list",
        children: t.map((e, l) => {
          const n = e.color ? d(e.color) : c(l);
          return /* @__PURE__ */ o(
            "div",
            {
              className: "flex items-center gap-1.5",
              role: "listitem",
              children: [
                /* @__PURE__ */ r(
                  "div",
                  {
                    className: "h-2 w-2 shrink-0 rounded-full",
                    style: { backgroundColor: n }
                  }
                ),
                /* @__PURE__ */ r("span", { className: "text-f1-foreground", children: e.name })
              ]
            },
            e.name
          );
        })
      }
    )
  ] });
}, j = N(w);
export {
  j as CategoryBarChart
};
