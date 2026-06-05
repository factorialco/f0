import { jsxs as T, jsx as i } from "react/jsx-runtime";
import { useMemo as r, useCallback as g } from "react";
import { DateFieldRenderer as y } from "./DateFieldRenderer.js";
import { TimeFieldRenderer as N } from "./TimeFieldRenderer.js";
import { dateToTimeString as p, combineDateAndTime as o } from "./utils.js";
function k({
  field: e,
  formField: a,
  error: l,
  loading: c,
  status: d
}) {
  const t = a.value ?? void 0, m = r(() => p(t), [t]), u = g(
    (n) => {
      if (!n) {
        a.onChange(null);
        return;
      }
      a.onChange(o(n, m));
    },
    [a, m]
  ), h = g(
    (n) => {
      if (!n) {
        if (t) {
          const s = new Date(t);
          s.setHours(0, 0, 0, 0), a.onChange(s);
        }
        return;
      }
      const b = p(n);
      if (!t) {
        const s = /* @__PURE__ */ new Date();
        s.setHours(0, 0, 0, 0), a.onChange(o(s, b));
        return;
      }
      a.onChange(o(t, b));
    },
    [a, t]
  ), C = r(
    () => ({
      id: `${e.id}-date`,
      type: "date",
      label: e.label,
      placeholder: e.placeholder,
      disabled: e.disabled,
      granularities: e.granularities ?? ["day"],
      presets: e.presets,
      minDate: e.minDate,
      maxDate: e.maxDate,
      clearable: e.clearable
    }),
    [e]
  ), D = r(
    () => ({
      ...a,
      value: t,
      onChange: u
    }),
    [a, t, u]
  ), v = r(
    () => ({
      id: `${e.id}-time`,
      type: "time",
      label: "Time",
      disabled: e.disabled,
      clearable: !1
      // Time clearing is handled via date clear
    }),
    [e.id, e.disabled]
  ), x = r(
    () => ({
      ...a,
      value: t,
      onChange: h
    }),
    [a, t, h]
  );
  return /* @__PURE__ */ T("div", { className: "flex gap-2", children: [
    /* @__PURE__ */ i("div", { className: "flex-1", children: /* @__PURE__ */ i(
      y,
      {
        field: C,
        formField: D,
        error: l,
        status: d,
        loading: c
      }
    ) }),
    /* @__PURE__ */ i("div", { className: "w-32", children: /* @__PURE__ */ i(
      N,
      {
        field: v,
        formField: x,
        error: l,
        status: d,
        loading: c
      }
    ) })
  ] });
}
export {
  k as DateTimeFieldRenderer
};
