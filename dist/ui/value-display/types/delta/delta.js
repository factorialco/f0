import { jsxs as i, jsx as e } from "react/jsx-runtime";
import { cn as n } from "../../../../lib/utils.js";
import c from "../../../../icons/app/ArrowDown.js";
import l from "../../../../icons/app/ArrowUp.js";
import "../../../../icons/app/Menu.js";
import { F0Icon as s } from "../../../../components/F0Icon/index.js";
const a = {
  positive: l,
  negative: c
}, p = {
  positive: "text-f1-foreground-positive",
  negative: "text-f1-foreground-critical"
}, g = (o) => {
  const t = a[o.deltaStatus], r = p[o.deltaStatus];
  return /* @__PURE__ */ i("div", { className: n("flex items-center gap-1", r), children: [
    t ? /* @__PURE__ */ e(s, { icon: t }) : null,
    /* @__PURE__ */ e("span", { children: o.label })
  ] });
};
export {
  g as DeltaCell
};
