import { jsx as i } from "react/jsx-runtime";
import { useState as c, useEffect as g, useMemo as C } from "react";
import { toArray as a } from "../../../lib/toArray.js";
import { SelectContext as r } from "../SelectContext.js";
import { Root as d } from "./radix-ui/select.js";
const O = (e) => {
  const [f, v] = c(e.as === "list"), n = e.as === "list" ? !0 : e.open !== void 0 ? e.open : f, h = (l) => {
    e.open === void 0 && v(l), e.onOpenChange?.(l);
  }, [t, u] = c(a(e.value));
  g(
    () => {
      u(a(e.value));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps -- we are checking deeply the value
    [JSON.stringify(e.value)]
  );
  const V = C(
    () => ({
      value: e.value !== void 0 ? a(e.value) : t,
      open: n,
      as: e.as,
      multiple: e.multiple || !1
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [JSON.stringify(e.value), t, n, e.as, e.multiple]
  ), m = {
    ...e,
    open: n,
    onOpenChange: h,
    children: /* @__PURE__ */ i(r.Provider, { value: V, children: e.children })
  }, o = (l) => {
    u(a(l)), e.multiple ? e.onValueChange?.(a(l)) : e.onValueChange?.(l);
  }, s = e.multiple ? {
    ...m,
    multiple: !0,
    value: t,
    defaultValue: e.defaultValue,
    onValueChange: o
  } : {
    ...m,
    multiple: !1,
    value: t[0],
    defaultValue: e.defaultValue,
    onValueChange: o
  };
  return /* @__PURE__ */ i("div", { className: "h-full [&>div]:!relative [&>div]:!h-full", children: /* @__PURE__ */ i(d, { ...s }) });
};
O.displayName = d.displayName;
export {
  O as Select
};
