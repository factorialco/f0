import { jsx as C } from "react/jsx-runtime";
import { useState as v, useRef as x, useCallback as N, useMemo as l, createContext as V, useContext as F } from "react";
const f = V(null);
function b({
  children: t
}) {
  const [d, o] = v(0), n = x([]), s = N(
    (r) => {
      const a = n.current, e = a.findIndex(
        (m) => m.formName === r.formName && m.customFieldName === r.customFieldName
      ), c = r;
      e >= 0 ? a[e] = c : a.push(c), o((m) => m + 1);
    },
    []
  ), u = l(
    () => ({
      formatters: [...n.current],
      setFormCardValueFormatter: s
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [s, d]
  );
  return /* @__PURE__ */ C(f.Provider, { value: u, children: t });
}
function M(t) {
  const o = F(f)?.formatters;
  return l(() => !o || o.length === 0 ? null : (n, s, u) => {
    let r, a = -1;
    for (const e of o) {
      const c = e.formName === void 0 || e.formName === t, m = e.customFieldName === void 0 || e.customFieldName === u.customFieldName;
      if (!c || !m) continue;
      let i = 0;
      e.formName !== void 0 && (i += 2), e.customFieldName !== void 0 && (i += 1), i > a && (a = i, r = e);
    }
    if (r)
      return r.format(s, { key: n, ...u });
  }, [o, t]);
}
function S() {
  const t = F(f);
  if (!t)
    throw new Error(
      "useSetFormCardValueFormatter must be used within a FormCardValueFormatterProvider"
    );
  return t.setFormCardValueFormatter;
}
export {
  b as FormCardValueFormatterProvider,
  M as useFormCardValueFormatter,
  S as useSetFormCardValueFormatter
};
