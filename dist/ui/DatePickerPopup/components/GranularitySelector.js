import { jsxs as c, jsx as t } from "react/jsx-runtime";
import { Select as i } from "../../Select/components/Select.js";
import { SelectContent as s } from "../../Select/components/SelectContent.js";
import { SelectItem as a } from "../../Select/components/SelectItem.js";
import { useI18n as d } from "../../../lib/providers/i18n/i18n-provider.js";
function S({
  granularities: o,
  value: n,
  onChange: m
}) {
  const l = d(), r = (e) => {
    m(e);
  };
  return /* @__PURE__ */ c("div", { className: "flex flex-col gap-2", children: [
    /* @__PURE__ */ t("h6", { className: "text-sm font-medium", children: l.date.selectedBy }),
    /* @__PURE__ */ t(i, { value: n, onValueChange: r, as: "list", children: /* @__PURE__ */ t(s, { children: o.map((e) => /* @__PURE__ */ t(a, { value: e, children: l.date.granularities[e]?.label || e }, e)) }) })
  ] });
}
export {
  S as GranularitySelector
};
