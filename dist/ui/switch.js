import { jsxs as l, jsx as a } from "react/jsx-runtime";
import { Root as c, Thumb as f } from "../node_modules/.pnpm/@radix-ui_react-switch@1.2.6_@types_react-dom@18.3.1_@types_react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@radix-ui/react-switch/dist/index.js";
import * as u from "react";
import { useId as h } from "react";
import { cn as o, focusRing as b } from "../lib/utils.js";
const w = u.forwardRef(({ className: i, disabled: t, hideLabel: n, required: s, ...e }, d) => {
  const m = h(), r = e.id || m;
  return /* @__PURE__ */ l("div", { className: "flex items-center", children: [
    /* @__PURE__ */ a(
      c,
      {
        ...e,
        ref: d,
        id: r,
        name: r,
        "aria-label": e.title ?? "Switch",
        className: o(
          "relative h-5 w-[1.875rem] rounded-full bg-f1-border hover:bg-f1-border-hover data-[state=checked]:bg-f1-background-selected-bold",
          // `!cursor-not-allowed` defends against consumer CSS resets (e.g. ress.css)
          // that target `[disabled]` / `[aria-disabled='true']` with the same
          // specificity as `.cursor-not-allowed` and would otherwise win when
          // loaded after F0 styles.
          t && "!cursor-not-allowed opacity-50",
          b(),
          i
        ),
        disabled: t,
        children: /* @__PURE__ */ a(
          f,
          {
            className: o(
              "block h-4 w-4 translate-x-[0.125rem] rounded-full bg-f1-background transition-transform duration-300 data-[state=checked]:translate-x-[0.75rem]"
            )
          }
        )
      }
    ),
    e.title && !n && /* @__PURE__ */ l(
      "label",
      {
        htmlFor: r,
        className: o(
          "flex items-center justify-center pl-2.5 text-current",
          t && "!cursor-not-allowed opacity-50 hover:!cursor-not-allowed"
        ),
        children: [
          e.title,
          s && /* @__PURE__ */ a("span", { className: "ml-0.5 text-f1-foreground-critical", children: "*" })
        ]
      }
    )
  ] });
});
w.displayName = c.displayName;
export {
  w as Switch
};
