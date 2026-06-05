import { jsxs as i, jsx as r } from "react/jsx-runtime";
import { forwardRef as u } from "react";
import { F0Icon as c } from "../../../F0Icon/index.js";
import { Tooltip as w } from "../../../../experimental/Overlays/Tooltip/index.js";
import g from "../../../../icons/app/InfoCircleLine.js";
import "../../../../icons/app/Menu.js";
import { cn as x } from "../../../../lib/utils.js";
import { OneEllipsis as y } from "../../../../lib/OneEllipsis/OneEllipsis.js";
const N = u(
  ({
    left: s,
    text: e,
    right: a,
    additionalAccessibleText: o,
    className: d,
    hint: m,
    info: n,
    shape: t = "rounded",
    hideLabel: f,
    deactivated: l
  }, p) => (o = o || (f ? e : void 0), /* @__PURE__ */ i("div", { className: "flex w-fit max-w-full flex-row items-center justify-start gap-1", children: [
    /* @__PURE__ */ i(
      "div",
      {
        ref: p,
        className: x(
          "inline-flex w-fit max-w-full flex-row items-center justify-start gap-1 py-0.5 pr-2 text-base font-medium text-f1-foreground",
          !e && "aspect-square w-6 items-center justify-center p-1",
          s ? "pl-1" : "pl-2",
          t === "rounded" && "rounded-full",
          t === "square" && "rounded-sm",
          d
        ),
        children: [
          s,
          !!e && !f && /* @__PURE__ */ r(
            y,
            {
              tag: "span",
              lines: 1,
              className: l ? "text-f1-foreground-disabled" : void 0,
              children: e
            }
          ),
          o && /* @__PURE__ */ r("span", { className: "sr-only", children: o }),
          a
        ]
      }
    ),
    m && /* @__PURE__ */ r("span", { className: "text-base font-medium text-f1-foreground-secondary", children: m }),
    n && /* @__PURE__ */ r(w, { description: n, children: /* @__PURE__ */ r(c, { icon: g, size: "md" }) })
  ] }))
);
N.displayName = "BaseTag";
export {
  N as BaseTag
};
