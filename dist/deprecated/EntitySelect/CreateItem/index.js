import { jsx as r, jsxs as s } from "react/jsx-runtime";
import "../../../icons/app/Menu.js";
import c from "../../../icons/app/Plus.js";
import { cn as l } from "../../../lib/utils.js";
import { focusNextFocusable as a, focusPreviousFocusable as f } from "../ListItem/index.js";
import { F0Button as u } from "../../../components/F0Button/F0Button.js";
const y = ({
  label: o,
  onCreate: i,
  goToFirst: n,
  goToLast: t
}) => /* @__PURE__ */ r("div", { className: "w-full pl-1 pr-1", onKeyDown: (e) => {
  e.key === "ArrowDown" || e.key === "Tab" ? a(e.currentTarget, n) : e.key === "ArrowUp" && f(e.currentTarget, t);
}, children: /* @__PURE__ */ s(
  "label",
  {
    "aria-label": o,
    className: l(
      "flex flex-row flex-wrap items-center gap-1.5 rounded border px-1.5 py-1.5 hover:cursor-pointer",
      "focus-within:outline focus-within:outline-1 focus-within:-outline-offset-1 focus-within:outline-f1-border-selected-bold hover:bg-f1-background-hover",
      "select-none"
    ),
    children: [
      /* @__PURE__ */ r(
        u,
        {
          hideLabel: !0,
          label: o,
          onClick: () => i(),
          icon: c,
          size: "sm",
          variant: "outline"
        }
      ),
      /* @__PURE__ */ r("div", { className: "flex flex-1 flex-col", children: /* @__PURE__ */ r("div", { className: "flex flex-1 flex-row items-center gap-2 break-all", children: /* @__PURE__ */ r("span", { className: l("line-clamp-1"), children: o }) }) })
    ]
  }
) });
export {
  y as CreateItem
};
