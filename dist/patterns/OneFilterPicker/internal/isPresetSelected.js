import n from "../../../_virtual/isEqual.js";
const f = (s, r) => {
  const t = s.filter;
  if (t == null || typeof t != "object" || Array.isArray(t))
    return !1;
  const i = Object.keys(t).filter(
    (e) => t[e] !== void 0
  ), o = Object.keys(r).filter(
    (e) => r[e] !== void 0
  );
  return i.length === o.length && Object.entries(t).filter(([, e]) => e !== void 0).every(([e, l]) => n(r[e], l));
};
export {
  f as isPresetSelected
};
