import { jsx as o } from "react/jsx-runtime";
import { getOptionsWithDefaults as i } from "../utils.js";
import { NumberFilter as n } from "./NumberFilter.js";
const m = (r) => !r || r?.mode === "range" && r?.from?.value === r?.to?.value && r?.from?.value === void 0 || r?.mode === "single" && r?.value === void 0, s = {
  min: void 0,
  max: void 0
}, u = {
  emptyValue: void 0,
  render: (r) => {
    const e = i(r.schema.options, s);
    return /* @__PURE__ */ o(n, { ...r, schema: { ...r.schema, options: e } });
  },
  isEmpty: m,
  chipLabel: (r, e) => {
    const t = e.i18n;
    if (r?.mode === "single" || r?.mode === void 0)
      return r?.value === void 0 ? "" : t.t("filters.number.equalShort", {
        value: r?.value?.toString()
      });
    if (r?.mode === "range") {
      if (r?.from?.value !== void 0 && r?.to?.value !== void 0)
        return t.t("filters.number.range", {
          min: r?.from?.value,
          max: r?.to?.value,
          minStrict: r?.from?.closed ? "≥" : ">",
          maxStrict: r?.to?.closed ? "≤" : "<"
        });
      if (r?.to?.value !== void 0)
        return r?.to?.closed ? t.t("filters.number.lessThanOrEqualShort", {
          value: r?.to?.value
        }) : t.t("filters.number.lessThanShort", {
          value: r?.to?.value
        });
      if (r?.from?.value !== void 0)
        return r?.from?.closed ? t.t("filters.number.greaterThanOrEqualShort", {
          value: r?.from?.value
        }) : t.t("filters.number.greaterThanShort", {
          value: r?.from?.value
        });
    }
    return "";
  }
};
export {
  u as default,
  u as numberFilter
};
