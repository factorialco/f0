import { jsx as m } from "react/jsx-runtime";
import { forwardRef as T } from "react";
import { F0Icon as B } from "../../F0Icon/index.js";
import M from "../../../icons/app/ArrowDown.js";
import O from "../../../icons/app/ArrowUp.js";
import "../../../icons/app/Menu.js";
import { useNormalizeNumericValueWithFormatter as P } from "../../../lib/numeric/hooks/useNormalizeNumericValueWithFormatter.js";
import { isEmptyNumeric as u } from "../../../lib/numeric/utils/isEmptyNumeric.js";
import { numericFinalValue as f } from "../../../lib/numeric/utils/numericFinalValue.js";
import { cn as p } from "../../../lib/utils.js";
import { BaseTag as k } from "../internal/BaseTag/index.js";
const w = {
  "-1": M,
  1: O
}, z = {
  "-1": "negative",
  0: "neutral",
  1: "positive"
}, A = T(
  ({ percentage: g, amount: d, invertStatus: x, info: v, hint: F, nullText: a }, N) => {
    const n = P(), e = n(d, {
      formatterOptions: {
        decimalPlaces: 2
      }
    }), o = n(
      g,
      {
        formatterOptions: {
          decimalPlaces: 0,
          emptyPlaceholder: a ?? "N/A"
        }
      }
    ), r = f(o.numericValue), b = f(e.numericValue);
    let i = "", c = null, l = "", t = "null", s = F;
    if (u(b))
      i = a ?? "N/A", s = void 0;
    else {
      const V = Math.sign(r ?? 0).toString();
      t = z[Math.sign(
        (r ?? 0) * (x ? -1 : 1)
      ).toString()];
      const h = u(r) ? null : o.formatter(
        {
          ...o.numericValue,
          units: "%",
          unitsPosition: "append"
        },
        o.formatterOptions
      ), y = e.formatter(
        e.numericValue,
        e.formatterOptions
      );
      i = [h, y].filter(Boolean).join(" · "), l = `${t} balance`, c = t === "neutral" ? null : /* @__PURE__ */ m(
        B,
        {
          icon: w[V],
          size: "sm",
          className: p(
            {
              positive: "text-f1-icon-positive",
              neutral: "text-f1-icon-secondary",
              negative: "text-f1-icon-critical"
            }[t]
          )
        }
      );
    }
    return /* @__PURE__ */ m(
      k,
      {
        ref: N,
        className: p(
          {
            positive: "bg-f1-background-positive text-f1-foreground-positive",
            neutral: "bg-f1-background-secondary text-f1-foreground-secondary",
            negative: "bg-f1-background-critical text-f1-foreground-critical",
            null: "text-f1-foreground-secondary"
          }[t]
        ),
        info: v,
        hint: s,
        left: c,
        additionalAccessibleText: l,
        text: i
      }
    );
  }
);
A.displayName = "F0TagBalance";
export {
  A as F0TagBalance
};
