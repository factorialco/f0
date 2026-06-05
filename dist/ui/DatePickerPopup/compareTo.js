import { granularityDefinitions as o } from "../../components/OneCalendar/granularities/index.js";
const a = (r, e, n) => {
  const t = o[n];
  return t ? t.add(r, e) : { from: /* @__PURE__ */ new Date(), to: /* @__PURE__ */ new Date() };
};
export {
  a as getCompareToValue
};
