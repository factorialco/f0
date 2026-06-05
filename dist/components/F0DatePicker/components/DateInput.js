import { jsx as v, Fragment as V } from "react/jsx-runtime";
import { forwardRef as B, useState as I, useEffect as F } from "react";
import { isActiveDate as N } from "../../OneCalendar/utils.js";
import j from "../../../icons/app/Calendar.js";
import "../../../icons/app/Menu.js";
import { Input as q } from "../../../ui/input.js";
import { useI18n as A } from "../../../lib/providers/i18n/i18n-provider.js";
const K = B(
  ({
    value: l,
    onDateChange: m,
    granularity: o,
    onOpenChange: i,
    minDate: k,
    maxDate: w,
    onClear: D,
    showIcon: x = !0,
    displayFormat: u,
    ...r
  }, C) => {
    const [a, f] = I(""), [E, s] = I(!1), c = A();
    F(() => {
      f(
        o.toString(l?.value, c, u ?? "long")
      );
    }, [l, o, c, u]);
    const d = (e) => N(e, o, {
      minDate: k,
      maxDate: w
    }), p = (e, t) => {
      if (e === "") {
        m?.({
          value: void 0,
          granularity: t.key
        }), s(r.required ?? !1);
        return;
      }
      const n = t.toRange(
        t.fromString(e, c)
      );
      n && (d(n?.from) && d(n?.to) ? (m?.({
        value: n,
        granularity: t.key
      }), s(!1)) : s(!0));
    }, h = () => {
      p(a, o);
    }, R = (e) => {
      f(e);
    }, S = r.placeholder ?? o.placeholder();
    return /* @__PURE__ */ v(V, { children: /* @__PURE__ */ v(
      q,
      {
        ...r,
        placeholder: S,
        icon: x ? j : void 0,
        ref: C,
        onFocus: () => i?.(!0),
        onClear: () => {
          D?.(), f(""), p("", o);
        },
        onKeyDown: (e) => {
          e.key === "Enter" && h();
        },
        type: "text",
        onChange: R,
        error: E || r.error,
        onBlur: h,
        value: a,
        onClickContent: () => i?.(!0)
      }
    ) });
  }
);
K.displayName = "DateInput";
export {
  K as DateInput
};
