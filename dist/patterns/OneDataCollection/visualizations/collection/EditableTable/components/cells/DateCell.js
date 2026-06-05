import { jsx as r } from "react/jsx-runtime";
import { useMemo as y } from "react";
import { F0DatePicker as g } from "../../../../../../../components/F0DatePicker/index.js";
import { cn as n } from "../../../../../../../lib/utils.js";
import { BaseCell as D } from "./BaseCell.js";
import { parseISO as x } from "../../../../../../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/parseISO.js";
import { isValid as _ } from "../../../../../../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/isValid.js";
import { formatDate as w } from "../../../../../../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/format.js";
const I = "yyyy-MM-dd";
function j({
  editableColumn: t,
  value: a,
  inputPlaceholder: s,
  error: m,
  loading: d,
  isLastColumn: c,
  onChange: f,
  hint: p
}) {
  const o = t.dateConfig, h = y(() => {
    if (!a) return;
    const e = x(a);
    if (_(e))
      return { granularity: "day", value: { from: e, to: e } };
  }, [a]), u = (e) => {
    const l = e?.value?.from, i = l ? w(l, I) : "";
    i !== a && f(i);
  };
  return /* @__PURE__ */ r(D, { showRightBorder: !c, error: m, hint: p, children: /* @__PURE__ */ r(
    "div",
    {
      className: n(
        "flex w-full min-w-0 items-center",
        t.align === "right" && "justify-end"
      ),
      children: /* @__PURE__ */ r(
        g,
        {
          className: n(
            "[&_input]:!py-0",
            "[&_[data-slot='placeholder']]:!flex",
            "[&_[data-slot='placeholder']]:!items-center",
            "[&_[data-slot='placeholder']]:!py-0",
            "[&_[data-slot='placeholder']]:!truncate"
          ),
          placeholder: s ?? t.inputPlaceholder,
          label: t.label,
          hideLabel: !0,
          showIcon: !1,
          transparent: !0,
          displayFormat: "default",
          value: h,
          onChange: u,
          loading: d,
          minDate: o?.minDate,
          maxDate: o?.maxDate
        }
      )
    }
  ) });
}
export {
  j as DateCell
};
