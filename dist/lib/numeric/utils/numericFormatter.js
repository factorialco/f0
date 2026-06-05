import { isEmptyNumeric as a } from "./isEmptyNumeric.js";
import { numericFinalValue as i } from "./numericFinalValue.js";
const o = (r, e = {}) => {
  if (a(r))
    return e.emptyPlaceholder || "";
  e = {
    locale: "en-US",
    decimalPlaces: 2,
    hideUnits: !1,
    compact: !1,
    emptyPlaceholder: "",
    useGrouping: !0,
    unitsSpaced: !1,
    ...e
  }, typeof r == "number" && (r = { value: r });
  const c = i(r);
  if (c === void 0)
    return e.emptyPlaceholder || "";
  const t = new Intl.NumberFormat(e.locale, {
    maximumFractionDigits: e.decimalPlaces,
    notation: e.compact ? "compact" : "standard",
    compactDisplay: e.compact ? "short" : void 0,
    useGrouping: e.useGrouping
  }).format(c);
  if (e.hideUnits || !r.units)
    return t;
  const m = e.unitsSpaced ? " " : "";
  return r.unitsPosition === "prepend" ? `${r.units}${m}${t}` : `${t}${m}${r.units}`;
};
export {
  o as numericFormatter
};
