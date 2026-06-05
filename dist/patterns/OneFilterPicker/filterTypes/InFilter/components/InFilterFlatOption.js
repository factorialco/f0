import { jsx as e, jsxs as s } from "react/jsx-runtime";
import { cn as i, focusRing as a } from "../../../../../lib/utils.js";
import { OneEllipsis as c } from "../../../../../lib/OneEllipsis/OneEllipsis.js";
import { F0Checkbox as d } from "../../../../../components/F0Checkbox/F0Checkbox.js";
function h({
  option: n,
  isSelected: l,
  onToggle: o,
  isCompactMode: r
}) {
  const t = `option-${String(n.value)}`;
  return /* @__PURE__ */ e("div", { className: i("w-full", !r && "px-2"), children: /* @__PURE__ */ s(
    "div",
    {
      className: i(
        "flex w-full min-w-0 flex-1 cursor-pointer appearance-none items-center justify-between gap-1 rounded p-1.5 font-medium transition-colors hover:bg-f1-background-secondary",
        r && "py-1 pr-1",
        a()
      ),
      onClick: o,
      children: [
        /* @__PURE__ */ e("span", { className: "min-w-0 flex-1", children: /* @__PURE__ */ e(c, { children: n.label }) }),
        /* @__PURE__ */ e("div", { className: "shrink-0", children: /* @__PURE__ */ e(
          d,
          {
            id: t,
            title: n.label,
            checked: l,
            presentational: !0,
            hideLabel: !0
          }
        ) })
      ]
    }
  ) });
}
export {
  h as InFilterFlatOption
};
