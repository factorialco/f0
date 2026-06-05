import { collectNestedFilterKeys as l } from "../filterTypes/InFilter/components/option-utils.js";
import { getFilterType as c } from "../filterTypes/utils.js";
function y(o) {
  const t = {};
  for (const [r, e] of Object.entries(o)) {
    const i = r, n = c(e.type);
    if (t[i] = n.emptyValue, !(e.type !== "in" || !("options" in e)))
      for (const s of l(e.options))
        t[s] = [];
  }
  return t;
}
export {
  y as getClearedFiltersValue
};
