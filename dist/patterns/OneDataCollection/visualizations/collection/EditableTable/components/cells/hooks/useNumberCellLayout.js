import { useMemo as f } from "react";
import { useInputTextWidth as p } from "./useInputTextWidth.js";
import { useL10n as x } from "../../../../../../../../lib/providers/l10n/l10n-provider.js";
function d(t, o) {
  if (t?.units)
    return typeof t.units == "function" ? t.units(o) : t.units;
}
function L(t, o, u) {
  const { locale: i } = x(), s = t?.locale ?? i, e = d(t, u), r = e ? t?.unitsPosition === "before" : !1, m = f(
    () => new Intl.NumberFormat(s, {
      maximumFractionDigits: t?.maxDecimals,
      useGrouping: !1
    }),
    [s, t?.maxDecimals]
  ), n = o != null ? m.format(o) : "", l = e ? r ? `${e} ${n}` : `${n} ${e}` : n, { ref: a, width: c } = p(l);
  return { ref: a, width: c, locale: s, units: e, unitsBefore: r };
}
export {
  d as resolveUnits,
  L as useNumberCellLayout
};
