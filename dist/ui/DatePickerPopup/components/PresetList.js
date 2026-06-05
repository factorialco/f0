import { jsx as n, jsxs as m } from "react/jsx-runtime";
import { useState as f, useEffect as v } from "react";
import { Select as h } from "../../Select/components/Select.js";
import { SelectContent as S } from "../../Select/components/SelectContent.js";
import { SelectItem as i } from "../../Select/components/SelectItem.js";
import { SelectSeparator as d } from "../../Select/components/SelectSeparator.js";
import { isEqual as c } from "../../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/isEqual.js";
const u = "__custom__", P = (e, t) => {
  if (!e?.value) return !1;
  const o = typeof t.value == "function" ? t.value() : t.value;
  return e.granularity !== t.granularity ? !1 : c(e.value.from, o.from) && (!e.value.to || !o.to || c(e.value.to, o.to));
}, p = ({ presets: e, ...t }) => {
  const [o, l] = f();
  return v(() => {
    if (t.date) {
      const r = Object.entries(e).find(
        ([a, s]) => P(t.date, s)
      );
      l(r ? r[0] : void 0);
    }
  }, [t.date, e]), /* @__PURE__ */ n(h, { as: "list", value: o, onValueChange: (r) => {
    l(r), t.onSelect?.(r);
  }, children: /* @__PURE__ */ m(S, { children: [
    Object.entries(e).map(([r, a]) => /* @__PURE__ */ n(i, { value: r, children: a?.label || r }, r)),
    /* @__PURE__ */ n(d, {}),
    /* @__PURE__ */ n(i, { value: u, children: "Custom" }, u)
  ] }) });
};
export {
  p as PresetList
};
