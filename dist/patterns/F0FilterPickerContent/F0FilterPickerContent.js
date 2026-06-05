import { jsx as m } from "react/jsx-runtime";
import { useState as y, useEffect as h, useMemo as I } from "react";
import { DataTestIdWrapper as K } from "../../lib/data-testid/index.js";
import { cn as P } from "../../lib/utils.js";
import { FilterPickerInternal as _ } from "./internal.js";
import { useI18n as C } from "../../lib/providers/i18n/i18n-provider.js";
import { getFilterType as b } from "../OneFilterPicker/filterTypes/utils.js";
const M = 388;
function g({
  filters: e,
  value: c,
  onChange: a,
  height: l,
  width: x = 600,
  className: k,
  showApplyButton: p = !0,
  applyButtonLabel: H,
  dataTestId: T
}) {
  const F = C(), j = Object.keys(e)[0] ?? null, [s, u] = y(j), [o, f] = y(c);
  h(() => {
    f(c);
  }, [c]), h(() => {
    if (!s && e) {
      const r = Object.keys(e);
      if (r.length > 0) {
        const n = r.find((t) => {
          const i = o[t], d = b(e[t].type);
          return i !== void 0 && !d.isEmpty(i, {
            schema: e[t],
            i18n: F
          });
        });
        u(n ?? r[0]);
      }
    }
  }, [e, s, o, F]);
  const O = (r, n) => {
    const t = {
      ...o,
      [r]: n
    };
    f(t), p || a(t);
  }, V = () => {
    a(o);
  }, E = I(() => l || Object.entries(e).reduce((n, [t, i]) => {
    const d = b(i.type);
    return Math.max(n, d?.formHeight || M);
  }, 0), [e, l]);
  return !e || Object.keys(e).length === 0 ? null : /* @__PURE__ */ m(K, { dataTestId: T, children: /* @__PURE__ */ m(
    "div",
    {
      className: P(
        "overflow-hidden rounded-xl border border-solid border-f1-border-secondary bg-f1-background",
        k
      ),
      style: { maxWidth: x },
      children: /* @__PURE__ */ m(
        _,
        {
          filters: e,
          tempFilters: o,
          selectedFilterKey: s,
          onFilterSelect: u,
          onFilterChange: O,
          onApply: V,
          height: E,
          showApplyButton: p,
          applyButtonLabel: H
        }
      )
    }
  ) });
}
g.displayName = "F0FilterPickerContent";
const G = g;
export {
  G as F0FilterPickerContent
};
