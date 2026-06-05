import { jsx as a } from "react/jsx-runtime";
import { useState as g, useMemo as S } from "react";
import { InputInternal as m } from "../../../../components/F0TextInput/internal.js";
import b from "../../../../icons/app/Equal.js";
import h from "../../../../icons/app/EqualApproximately.js";
import "../../../../icons/app/Menu.js";
import { useI18n as T } from "../../../../lib/providers/i18n/i18n-provider.js";
function j({
  schema: e,
  value: r,
  onChange: i
}) {
  const t = "options" in e ? e.options : void 0, f = (t && "defaultStrict" in t && t.defaultStrict) ?? !1, l = {
    strictToggle: t ? t.strictToggle : !1,
    defaultStrict: t ? f : !1,
    ...e.options
  }, s = T(), p = (o) => {
    l.strictToggle ? i({
      value: o,
      strict: c
    }) : i(o);
  }, d = (o) => {
    u(o), i({
      value: n ?? "",
      strict: o
    });
  }, [c, u] = g(l.defaultStrict), n = S(() => typeof r == "object" && "value" in r ? r.value : r ?? "", [r]);
  return /* @__PURE__ */ a("div", { className: "space-y-4 p-2", children: /* @__PURE__ */ a(
    m,
    {
      label: `Search ${e.label.toLowerCase()}...`,
      hideLabel: !0,
      placeholder: `Search ${e.label.toLowerCase()}...`,
      value: n,
      onChange: p,
      clearable: !0,
      buttonToggle: l.strictToggle ? {
        label: [
          s.filters.search.relaxed,
          s.filters.search.strict
        ],
        icon: [h, b],
        selected: c,
        onChange: d
      } : void 0
    }
  ) });
}
export {
  j as SearchFilter
};
