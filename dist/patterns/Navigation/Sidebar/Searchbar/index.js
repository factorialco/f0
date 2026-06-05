import { jsx as r, jsxs as e } from "react/jsx-runtime";
import { Shortcut as c } from "../../../../ui/Shortcut/index.js";
import { F0Icon as s } from "../../../../components/F0Icon/index.js";
import "../../../../icons/app/Menu.js";
import d from "../../../../icons/app/Search.js";
import { cn as a, focusRing as m } from "../../../../lib/utils.js";
function h({
  onClick: o,
  placeholder: n,
  shortcut: i = ["cmd", "k"],
  ...t
}) {
  return /* @__PURE__ */ r("div", { className: "px-3", children: /* @__PURE__ */ e(
    "button",
    {
      onClick: o,
      className: a(
        "mb-[calc(0.75rem-1px)] flex w-full cursor-pointer items-center justify-between rounded bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary p-1.5 text-f1-foreground-secondary ring-1 ring-inset ring-f1-border-secondary transition-all hover:ring-f1-border-hover",
        m()
      ),
      type: "button",
      ...t,
      children: [
        /* @__PURE__ */ e("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ r(s, { icon: d, size: "md" }),
          /* @__PURE__ */ r("span", { children: n })
        ] }),
        /* @__PURE__ */ r("div", { className: "hidden xs:block", children: /* @__PURE__ */ r(c, { keys: i }) })
      ]
    }
  ) });
}
export {
  h as SearchBar
};
