import { metadataRenderer as a } from "../../ui/value-display/renderers.js";
const n = {
  default: "-",
  list: void 0
}, u = (r, t, e, d, o) => {
  const i = t.render(r), l = e in n ? n[e] : n.default;
  return a(
    i,
    {
      visualization: e,
      i18n: d,
      tableAlign: o?.tableAlign
    },
    l
  );
};
export {
  u as renderProperty
};
