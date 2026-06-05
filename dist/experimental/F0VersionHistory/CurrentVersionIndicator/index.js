import { jsxs as s, jsx as t } from "react/jsx-runtime";
import { F0Icon as n } from "../../../components/F0Icon/index.js";
import { OneEllipsis as i } from "../../../lib/OneEllipsis/OneEllipsis.js";
import d from "../../../icons/app/Bullet.js";
import "../../../icons/app/Menu.js";
import { cn as l, focusRing as a } from "../../../lib/utils.js";
function b({
  title: o,
  isActive: e = !1,
  onClick: r
}) {
  return /* @__PURE__ */ s(
    "button",
    {
      type: "button",
      className: l(
        "flex w-full flex-row items-center gap-[6px] rounded-md p-[6px] pr-2 text-left transition-colors",
        e && "bg-f1-background-tertiary",
        r && "cursor-pointer hover:bg-f1-background-hover",
        a("focus-visible:ring-inset")
      ),
      onClick: r,
      disabled: !r,
      "aria-label": `${o}${e ? " (selected)" : ""}`,
      "aria-pressed": r ? e : void 0,
      children: [
        /* @__PURE__ */ t(n, { icon: d, size: "md", color: "selected" }),
        /* @__PURE__ */ t(
          i,
          {
            lines: 1,
            className: "text-[13px] font-semibold leading-5 text-f1-foreground-selected",
            children: o
          }
        )
      ]
    }
  );
}
export {
  b as CurrentVersionIndicator
};
