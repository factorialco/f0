import { jsx as n } from "react/jsx-runtime";
import { getGranularityDefinition as s } from "../../../../../components/OneCalendar/OneCalendar.js";
import { OneDateNavigator as m } from "../../../../OneDateNavigator/OneDateNavigator.js";
import { useI18n as g } from "../../../../../lib/providers/i18n/i18n-provider.js";
function v({
  filter: e,
  value: i,
  onChange: o
}) {
  const l = g(), r = {
    granularity: "day",
    ...e
  }, t = Array.isArray(r.granularity) ? r.granularity : [r.granularity], u = s(
    i.granularity || t[0]
  );
  return /* @__PURE__ */ n("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ n(
    m,
    {
      onSelect: (a) => {
        !a || !a.value || o({
          value: a.value,
          granularity: a.granularity,
          valueString: u.toString(a.value, l)
        });
      },
      defaultValue: i,
      granularities: t,
      minDate: r.min,
      maxDate: r.max,
      presets: r.presets,
      hideGoToCurrent: r.hideGoToCurrent
    }
  ) });
}
export {
  v as DateNavigation
};
