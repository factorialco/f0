import { jsxs as c, jsx as r } from "react/jsx-runtime";
import { Root as i, Indicator as u } from "../node_modules/.pnpm/@radix-ui_react-checkbox@1.1.3_@types_react-dom@18.3.1_@types_react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@radix-ui/react-checkbox/dist/index.js";
import * as b from "react";
import { useId as k } from "react";
import { F0Icon as d } from "../components/F0Icon/index.js";
import x from "../icons/app/Check.js";
import "../icons/app/Menu.js";
import g from "../icons/app/Minus.js";
import { cn as n, focusRing as v } from "../lib/utils.js";
import { AnimatePresence as w } from "../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/components/AnimatePresence/index.js";
const y = b.forwardRef(
  ({ className: f, indeterminate: a, disabled: t, hideLabel: s, required: l, ...e }, m) => {
    const h = k(), o = e.id || h;
    return /* @__PURE__ */ c("div", { className: "flex items-center", children: [
      /* @__PURE__ */ r(
        i,
        {
          ...e,
          ref: m,
          id: o,
          name: e.name || o,
          "aria-label": e.title,
          className: n(
            "relative h-6 w-6 shrink-0 rounded-sm text-f1-foreground-selected data-[state=checked]:text-f1-foreground-inverse",
            "after:absolute after:left-0.5 after:top-0.5 after:z-[1] after:h-5 after:w-5 after:rounded-xs after:border after:border-solid after:border-f1-border after:transition-[background-color,border-color] after:content-[''] hover:after:border-f1-border-hover data-[state=checked]:after:bg-f1-background-selected-bold hover:data-[state=checked]:after:border-transparent",
            t && "cursor-not-allowed opacity-50 hover:border-f1-border",
            a && "data-[state=checked]:text-f1-foreground-inverse",
            e.checked && t && "data-[state=checked]:bg-f1-background-secondary data-[state=checked]:text-f1-foreground-secondary",
            v("focus-visible:ring-offset-0"),
            f
          ),
          checked: e.checked,
          onCheckedChange: e.onCheckedChange,
          disabled: t,
          children: /* @__PURE__ */ r(w, { children: /* @__PURE__ */ r(u, { className: "absolute inset-0 z-[2] flex items-center justify-center text-current transition-none", children: a ? /* @__PURE__ */ r(d, { icon: g, size: "sm" }) : /* @__PURE__ */ r(d, { icon: x, size: "sm" }) }) })
        }
      ),
      e.title && !s && /* @__PURE__ */ c(
        "label",
        {
          htmlFor: o,
          className: n(
            "flex items-center justify-center pl-2.5 text-current hover:cursor-pointer disabled:cursor-not-allowed disabled:opacity-50",
            t && "cursor-not-allowed opacity-50 hover:cursor-not-allowed"
          ),
          children: [
            e.title,
            l && /* @__PURE__ */ r("span", { className: "ml-0.5 text-f1-foreground-critical", children: "*" })
          ]
        }
      )
    ] });
  }
);
y.displayName = i.displayName;
export {
  y as Checkbox
};
