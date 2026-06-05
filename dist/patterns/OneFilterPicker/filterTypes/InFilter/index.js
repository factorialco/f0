import { jsx as d } from "react/jsx-runtime";
import { InFilter as $ } from "./InFilter.js";
import { getCacheKey as L, getNestedCachedLabel as m, getCachedLabel as h, cacheLabel as S, loadOptions as M } from "./useLoadOptions.js";
const j = {
  emptyValue: [],
  isEmpty: (e) => (e || []).length === 0,
  render: (e) => /* @__PURE__ */ d($, { ...e }),
  chipLabel: async (e, { schema: o, filterKey: r }) => {
    const s = L(o);
    if (r) {
      const t = e.map((n) => m(r, n));
      if (t[0]) {
        const n = t.length - 1;
        return n > 0 ? `${t[0]} +${n}` : t[0];
      }
    }
    const c = e.map((t) => h(s, t));
    if (c[0]) {
      const t = c[0], n = c.length - 1;
      return n > 0 ? `${t} +${n}` : `${t}`;
    }
    if (o.options.getLabel) {
      const t = e[0];
      if (!t)
        return "";
      const n = h(s, t);
      if (n) {
        const g = e.length - 1;
        return g > 0 ? `${n} +${g}` : n;
      }
      const i = await o.options.getLabel(t);
      S(s, t, i);
      const l = e.length - 1;
      return l > 0 ? `${i} +${l}` : i;
    }
    const f = "options" in o.options ? o.options.options : [];
    if (("source" in o.options ? o.options.source : void 0) && "mapOptions" in o.options) {
      const t = e[0], n = e.length - 1;
      return n > 0 ? `${String(t)} +${n}` : String(t);
    }
    const b = await M(
      s,
      f,
      o.options.cache
    ), a = e.map((t) => {
      const n = b.find((l) => l.value === t), i = n?.label ?? String(t);
      return n && S(s, t, i), i;
    }), p = a[0], u = a.length - 1;
    return u > 0 ? `${p} +${u}` : `${p}`;
  }
};
export {
  j as default,
  j as inFilter
};
