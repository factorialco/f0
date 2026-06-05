import { unwrapToZodObject as d, getF0Config as m, inferFieldType as u } from "./f0Schema.js";
import { isFieldRequired as h } from "./fields/schema.js";
function T(l) {
  const p = d(l).shape, n = [];
  for (const [r, a] of Object.entries(p)) {
    const t = a, e = m(t);
    if (!e) continue;
    const c = u(t, e), f = h(t, c), o = {
      name: r,
      type: c,
      label: e.label,
      required: f
    };
    if (e.placeholder && (o.placeholder = e.placeholder), e.helpText && (o.helpText = e.helpText), e.section && (o.section = e.section), e.customFieldName && (o.customFieldName = e.customFieldName), c === "select") {
      if ("source" in e && e.source)
        o.optionsSource = "dynamic";
      else if ("options" in e && e.options) {
        const s = [];
        for (const i of e.options)
          "label" in i && "value" in i && s.push({ label: i.label, value: i.value });
        o.options = s;
      }
    }
    n.push(o);
  }
  return n;
}
export {
  T as describeFormSchema
};
