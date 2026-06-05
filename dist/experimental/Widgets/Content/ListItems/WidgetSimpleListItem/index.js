import { jsxs as n, jsx as e } from "react/jsx-runtime";
import { F0Icon as c } from "../../../../../components/F0Icon/index.js";
import { F0TagAlert as b } from "../../../../../components/tags/F0TagAlert/index.js";
import { F0TagRaw as g } from "../../../../../components/tags/F0TagRaw/index.js";
import { Counter as v } from "../../../../../ui/Counter/index.js";
import { cn as s } from "../../../../../lib/utils.js";
const h = ({ onClick: t, className: o, children: r }) => t ? /* @__PURE__ */ e("a", { className: o, onClick: t, tabIndex: 0, children: r }) : /* @__PURE__ */ e("div", { className: o, tabIndex: -1, children: r });
function z({
  id: t,
  title: o,
  alert: r,
  rawTag: a,
  count: m,
  icon: d,
  rightIcon: i,
  iconClassName: f = "text-f1-icon-secondary",
  rightIconClassName: p = "text-f1-icon-secondary",
  onClick: l
}) {
  const x = s(
    "flex flex-row items-start gap-1 rounded-md border border-solid border-transparent px-2 py-1.5 text-f1-foreground",
    l ? "cursor-pointer hover:bg-f1-background-tertiary focus:border-f1-background-selected-bold focus:outline-none" : void 0
  );
  return /* @__PURE__ */ n(h, { onClick: (u) => {
    u.preventDefault(), l?.(t);
  }, className: x, children: [
    /* @__PURE__ */ n("div", { className: "flex flex-1 flex-row items-start gap-1", children: [
      d && /* @__PURE__ */ e(
        c,
        {
          icon: d,
          size: "md",
          className: s("mt-0.5", f)
        }
      ),
      /* @__PURE__ */ e("p", { className: "mt-0.5 line-clamp-2 font-medium", children: o }),
      i && /* @__PURE__ */ e(
        c,
        {
          icon: i,
          size: "md",
          className: s("mt-0.5", p)
        }
      )
    ] }),
    /* @__PURE__ */ n("div", { className: "flex flex-row items-center gap-2", children: [
      r && /* @__PURE__ */ e(b, { ...r }),
      a && /* @__PURE__ */ e(g, { ...a }),
      !!m && /* @__PURE__ */ e(v, { value: m })
    ] })
  ] });
}
export {
  z as WidgetSimpleListItem
};
