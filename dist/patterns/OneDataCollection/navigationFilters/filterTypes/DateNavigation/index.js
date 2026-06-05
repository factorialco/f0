import { jsx as e } from "react/jsx-runtime";
import { DateNavigation as u } from "./DateNavigation.js";
import { granularityDefinitions as g } from "../../../../../components/OneCalendar/granularities/index.js";
const s = (r) => "date" in r, d = {
  valueConverter: function(r, t, i) {
    const o = Array.isArray(t.granularity) ? t.granularity : [t.granularity], a = t.defaultGranularity || o[0] || "day";
    if (r || (r = /* @__PURE__ */ new Date()), s(r))
      return r;
    const n = g[a];
    return {
      value: n.toRange(r),
      valueString: n.toString(r, i),
      granularity: a
    };
  },
  render: (r) => /* @__PURE__ */ e(u, { ...r })
};
export {
  d as default
};
