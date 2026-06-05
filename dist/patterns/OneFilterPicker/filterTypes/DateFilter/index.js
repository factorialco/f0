import { jsx as n } from "react/jsx-runtime";
import { getOptionsWithDefaults as i } from "../utils.js";
import { DateFilter as m } from "./DateFilter.js";
import { getGranularitySimpleDefinition as s } from "../../../../components/OneCalendar/OneCalendar.js";
const a = (t, o) => !t || "from" in t && !t.from && o.schema.options.mode === "single" || "from" in t && !t.from && !t.to && o.schema.options.mode === "range", r = {
  mode: "single",
  view: "day"
}, h = {
  emptyValue: void 0,
  render: (t) => {
    const o = i(t.schema.options, r);
    return /* @__PURE__ */ n(m, { ...t, schema: { ...t.schema, options: o } });
  },
  isEmpty: a,
  chipLabel: (t, o) => {
    const e = i(o.schema.options, r);
    return s(e.view).toString(t, o.i18n);
  },
  formHeight: 520
};
export {
  h as dateFilter,
  h as default
};
