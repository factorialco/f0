import { jsx as k } from "react/jsx-runtime";
import { useState as v, useEffect as f, useMemo as g, useCallback as S, useRef as j } from "react";
import { DatePickerPopup as q } from "../../ui/DatePickerPopup/DatePickerPopup.js";
import { isSameDatePickerValue as d } from "../../ui/DatePickerPopup/utils.js";
import { DateInput as A } from "./components/DateInput.js";
import { granularityDefinitions as V } from "../OneCalendar/granularities/index.js";
import { useI18n as L } from "../../lib/providers/i18n/i18n-provider.js";
function Q({
  onChange: I,
  value: y,
  presets: m = [],
  granularities: a = ["day"],
  minDate: O,
  maxDate: P,
  open: u = !1,
  showIcon: w = !0,
  displayFormat: G,
  ...p
}) {
  const [r, h] = v(), [i, l] = v(u);
  f(() => {
    l(u);
  }, [u]);
  const R = L(), C = g(() => a[0] ?? "day", [a]), t = S(
    (e) => {
      const n = e || C;
      if (!V[n])
        throw new Error(`Invalid granularity ${n}`);
      return {
        ...V[n],
        key: n
      };
    },
    [C]
  ), s = S(
    (e) => {
      if (!e) return;
      const n = t(e.granularity), o = n.toRange(
        n.calendarMode === "range" ? e.value : e.value?.from ?? void 0
      );
      if (o)
        return { value: o, granularity: e.granularity };
    },
    [t]
  ), M = g(() => t(r?.granularity), [r?.granularity, t]);
  f(() => {
    const e = s(y);
    d(r, e) || h(e);
  }, [y]);
  const b = (e) => {
    const n = s(e), F = t(n?.granularity).calendarMode !== "range" && !d(n, r);
    D(n), F && l(!1);
  }, D = (e) => {
    const n = s(e);
    if (h(n), !d(n, r)) {
      const o = t(n?.granularity);
      I?.(n, o.toString(n?.value, R));
    }
  }, x = (e) => {
    l(e), p.onOpenChange?.(e);
  }, E = g(() => m.filter(
    (e) => a.includes(e.granularity)
  ), [m, a]), c = j(null);
  return f(() => {
    i && c.current && requestAnimationFrame(() => {
      c.current?.focus();
    });
  }, [i]), /* @__PURE__ */ k(
    q,
    {
      hideCalendarInput: !0,
      onSelect: b,
      value: r,
      presets: E,
      granularities: a,
      minDate: O,
      maxDate: P,
      open: i,
      onOpenChange: x,
      asChild: !0,
      children: /* @__PURE__ */ k(
        A,
        {
          ref: c,
          ...p,
          value: r,
          granularity: M,
          onDateChange: D,
          showIcon: w,
          displayFormat: G
        }
      )
    }
  );
}
export {
  Q as F0DatePicker
};
