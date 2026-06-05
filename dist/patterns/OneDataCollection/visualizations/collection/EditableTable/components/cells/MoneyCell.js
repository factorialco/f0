import { jsx as u } from "react/jsx-runtime";
import { useMemo as c } from "react";
import { resolveUnits as l } from "./hooks/useNumberCellLayout.js";
import { NumberCell as f } from "./NumberCell.js";
import { useL10n as m } from "../../../../../../../lib/providers/l10n/l10n-provider.js";
const a = (t, i = "USD") => {
  try {
    const e = new Intl.NumberFormat(t, {
      style: "currency",
      currency: i
    }).formatToParts(1), s = e.find((o) => o.type === "currency"), n = e.findIndex((o) => o.type === "currency"), r = e.findIndex((o) => o.type === "integer");
    return {
      symbol: s?.value ?? i,
      before: n < r
    };
  } catch {
    return;
  }
};
function I(t) {
  const { locale: i } = m(), e = t.editableColumn.numberConfig, s = e?.locale ?? i, n = l(e, t.item), r = c(
    () => n ? a(s, n) : void 0,
    [s, n]
  ), o = c(() => n ? e?.unitsPosition ? e.unitsPosition === "before" : r?.before ?? !1 : !1, [n, e?.unitsPosition, r]);
  return /* @__PURE__ */ u(
    f,
    {
      ...t,
      editableColumn: {
        ...t.editableColumn,
        numberConfig: {
          ...e,
          units: r?.symbol ?? n ?? "$",
          unitsPosition: o ? "before" : "after"
        }
      }
    }
  );
}
export {
  I as MoneyCell
};
