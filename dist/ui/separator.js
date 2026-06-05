import { jsx as e } from "react/jsx-runtime";
import { forwardRef as o } from "react";
import { cn as n } from "../lib/utils.js";
const l = o(
  function({ bare: r = !1, ...a }, t) {
    return /* @__PURE__ */ e(
      "div",
      {
        ref: t,
        role: "separator",
        className: n("-mx-4 h-[1px]", r ? void 0 : "my-4"),
        style: {
          backgroundImage: "repeating-linear-gradient(to right, hsl(var(--neutral-20)) 0, hsl(var(--neutral-20)) 3px, transparent 3px, transparent 7px)"
        },
        ...a
      }
    );
  }
);
export {
  l as Separator
};
