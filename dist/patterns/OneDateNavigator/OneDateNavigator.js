import { jsx as o } from "react/jsx-runtime";
import { useState as s, useEffect as P, useMemo as w } from "react";
import { DataTestIdWrapper as W } from "../../lib/data-testid/index.js";
import { DatePickerPopup as b } from "../../ui/DatePickerPopup/DatePickerPopup.js";
import { isSameDatePickerValue as I } from "../../ui/DatePickerPopup/utils.js";
import { getGranularityDefinitions as L } from "../../components/OneCalendar/granularities/index.js";
import { WeekStartDay as M } from "../../components/OneCalendar/types.js";
import { DatePickerTrigger as V } from "./components/DateNavigatorTrigger.js";
import { useL10n as j } from "../../lib/providers/l10n/l10n-provider.js";
function E({
  onSelect: D,
  defaultValue: n,
  presets: u = [],
  granularities: d = ["day"],
  hideNavigation: h = !1,
  hideGoToCurrent: y = !1,
  compareTo: p,
  defaultCompareTo: C,
  onCompareToChange: k,
  value: r,
  dataTestId: O,
  ...t
}) {
  const [a, m] = s(
    n ?? r
  );
  P(() => {
    I(r, a) || m(r || n);
  }, [r, n]);
  const [S, x] = s(), [c, g] = s(!1), T = j(), i = t.weekStartsOn ?? T.date?.weekStartsOn ?? M.Monday, l = w(() => {
    const e = a?.granularity ?? "day";
    return L(i)[e];
  }, [a?.granularity, i]), f = (e) => {
    m(e), D?.(e);
  }, v = (e) => {
    x(e), k?.(e);
  }, N = (e) => {
    f({
      value: l.toRange(e),
      granularity: a?.granularity ?? "day"
    });
  };
  return /* @__PURE__ */ o(W, { dataTestId: O, children: /* @__PURE__ */ o(
    b,
    {
      onSelect: f,
      value: a,
      defaultValue: n,
      presets: u,
      granularities: d,
      minDate: t.minDate,
      maxDate: t.maxDate,
      open: c,
      onOpenChange: g,
      compareTo: p,
      defaultCompareTo: C,
      onCompareToChange: v,
      weekStartsOn: i,
      asChild: !0,
      children: /* @__PURE__ */ o(
        V,
        {
          value: a,
          compareToValue: S,
          highlighted: c,
          navigation: !h,
          onDateChange: N,
          granularity: l,
          minDate: t.minDate,
          maxDate: t.maxDate,
          disabled: t.disabled,
          hideGoToCurrent: y,
          onClick: () => g(!0)
        }
      )
    }
  ) });
}
const J = E;
export {
  J as OneDateNavigator
};
