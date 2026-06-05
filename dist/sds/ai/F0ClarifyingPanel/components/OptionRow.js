import { jsxs as i, jsx as n } from "react/jsx-runtime";
import { forwardRef as m } from "react";
import { cn as t, focusRing as f } from "../../../../lib/utils.js";
import { RadioIndicator as u } from "./RadioIndicator.js";
import { F0Checkbox as p } from "../../../../components/F0Checkbox/F0Checkbox.js";
const b = m(
  ({ option: r, isSelected: o, mode: c, isTabStop: s, onToggle: e, onKeyNavigate: l }, d) => c === "single" ? /* @__PURE__ */ i(
    "div",
    {
      ref: d,
      role: "radio",
      "aria-checked": o,
      tabIndex: s ? 0 : -1,
      className: t(
        "flex cursor-pointer items-center gap-2 rounded-md px-2 py-2 transition-colors hover:bg-f1-background-secondary",
        f()
      ),
      onClick: () => e(r.id),
      onKeyDown: (a) => {
        if (a.key === " " || a.key === "Enter") {
          a.preventDefault(), e(r.id);
          return;
        }
        l?.(a);
      },
      children: [
        /* @__PURE__ */ n(u, { isSelected: o }),
        /* @__PURE__ */ n("span", { className: "text-base font-medium text-f1-foreground", children: r.label })
      ]
    }
  ) : /* @__PURE__ */ i(
    "div",
    {
      ref: d,
      className: t(
        "flex cursor-pointer items-center rounded-md pl-2 transition-colors hover:bg-f1-background-secondary"
      ),
      children: [
        /* @__PURE__ */ n(
          p,
          {
            checked: o,
            onCheckedChange: () => e(r.id),
            title: r.label,
            hideLabel: !0
          }
        ),
        /* @__PURE__ */ n(
          "span",
          {
            className: "w-full py-2 pl-2 pr-2 text-base font-medium text-f1-foreground",
            onClick: () => e(r.id),
            children: r.label
          }
        )
      ]
    }
  )
);
b.displayName = "OptionRow";
export {
  b as OptionRow
};
