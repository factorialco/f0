import { jsxs as m, jsx as r } from "react/jsx-runtime";
import { F0Icon as t } from "../../../../../components/F0Icon/index.js";
import s from "../../../../../icons/app/DropdownDefault.js";
import "../../../../../icons/app/Menu.js";
import { cn as a } from "../../../../../lib/utils.js";
function u({
  text: o,
  placeholder: f,
  icon: e,
  onClick: n
}) {
  return /* @__PURE__ */ m(
    "div",
    {
      className: "flex cursor-default flex-row items-center gap-1 rounded-xs px-1 py-0.5 hover:bg-f1-background-hover",
      onClick: n,
      children: [
        e && /* @__PURE__ */ r(t, { icon: e, className: "text-f1-icon" }),
        /* @__PURE__ */ r(
          "span",
          {
            className: a(
              "font-medium",
              o ? "text-f1-foreground" : "text-f1-foreground-secondary"
            ),
            children: o ?? f
          }
        ),
        /* @__PURE__ */ r(t, { icon: s })
      ]
    }
  );
}
export {
  u as default
};
