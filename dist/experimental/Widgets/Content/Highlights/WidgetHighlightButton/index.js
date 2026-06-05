import { jsx as e, jsxs as l } from "react/jsx-runtime";
import { F0Icon as a } from "../../../../../components/F0Icon/index.js";
import { cn as n } from "../../../../../lib/utils.js";
const c = ({ onClick: r, children: o }) => {
  const d = "block rounded-lg border border-solid border-transparent p-[1px] -m-1";
  return r ? /* @__PURE__ */ e(
    "a",
    {
      className: n(
        d,
        "cursor-pointer focus:border-f1-background-selected-bold focus:outline-none"
      ),
      onClick: r,
      tabIndex: 0,
      children: o
    }
  ) : /* @__PURE__ */ e("div", { className: d, tabIndex: 1, children: o });
};
function p({
  label: r,
  count: o,
  icon: d,
  iconClassName: t,
  onClick: s
}) {
  return /* @__PURE__ */ e(c, { onClick: s, children: /* @__PURE__ */ l(
    "div",
    {
      className: n(
        "flex flex-col gap-0.5 rounded-md border border-solid border-f1-border-secondary px-3 py-2.5",
        s && "hover:border-f1-border-hover"
      ),
      children: [
        /* @__PURE__ */ l("div", { className: "flex flex-row items-center", children: [
          /* @__PURE__ */ e("p", { className: "line-clamp-1 flex-1 text-f1-foreground-secondary", children: r }),
          /* @__PURE__ */ e(a, { icon: d, size: "md", className: t })
        ] }),
        /* @__PURE__ */ e("p", { className: "line-clamp-1 flex-1 text-3xl font-semibold text-f1-foreground", children: o })
      ]
    }
  ) });
}
export {
  p as WidgetHighlightButton
};
