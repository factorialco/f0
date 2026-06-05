import { jsxs as a, jsx as t } from "react/jsx-runtime";
import { useMemo as h } from "react";
import { useNormalizeNumericValueWithFormatter as x } from "../../lib/numeric/hooks/useNormalizeNumericValueWithFormatter.js";
import { numericFinalValue as c } from "../../lib/numeric/utils/numericFinalValue.js";
import { numericFormatter as v } from "../../lib/numeric/utils/numericFormatter.js";
import { withSkeleton as w } from "../../lib/skeleton.js";
import { Skeleton as m } from "../../ui/skeleton.js";
import { F0TagBalance as N } from "../tags/F0TagBalance/index.js";
const g = (e) => typeof e == "boolean" || !e ? {
  show: !!e,
  invertStatus: !1
} : {
  show: e.show ?? !0,
  invertStatus: e.invertStatus ?? !1
}, f = ({ label: e, ...o }) => {
  const s = x(), l = s(o.value, {
    formatterOptions: {
      decimalPlaces: 2
    }
  }), n = g(o.trend), u = s(o.comparison), d = v(
    l.numericValue,
    l.formatterOptions
  ), r = c(u.numericValue), i = c(l.numericValue), p = h(() => {
    if (!(!r || !n.show) && !(!r || !i))
      return (i - r) / r * 100;
  }, [i, r, n.show]);
  return /* @__PURE__ */ a("div", { className: "flex flex-col gap-2", children: [
    e && /* @__PURE__ */ t("div", { children: e }),
    /* @__PURE__ */ a("div", { className: "flex flex-row flex-wrap items-center gap-2", children: [
      /* @__PURE__ */ t("span", { className: "font-bold text-2xl", children: d }),
      r !== void 0 && /* @__PURE__ */ t(
        N,
        {
          percentage: p,
          amount: u,
          invertStatus: n.invertStatus,
          hint: o.comparisonHint
        }
      )
    ] })
  ] });
}, F = () => /* @__PURE__ */ a("div", { className: "relative flex h-full w-full cursor-progress flex-col gap-2", children: [
  /* @__PURE__ */ t(m, { className: "h-3 w-full max-w-16 rounded-md" }),
  /* @__PURE__ */ a("div", { className: "flex flex-row flex-wrap items-end gap-2", children: [
    /* @__PURE__ */ t(m, { className: "h-8 w-full max-w-36 rounded-sm" }),
    /* @__PURE__ */ t(m, { className: "h-6 w-full max-w-18 rounded-sm" })
  ] })
] });
f.displayName = "F0BigNumber";
const C = w(f, F);
export {
  C as F0BigNumber
};
