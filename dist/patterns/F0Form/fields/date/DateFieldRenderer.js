import { jsx as s } from "react/jsx-runtime";
import { useMemo as c } from "react";
import { F0DatePicker as p } from "../../../../components/F0DatePicker/index.js";
import { FORM_SIZE as m } from "../../constants.js";
function g(e, a) {
  if (e)
    return {
      value: { from: e, to: e },
      granularity: a?.[0] ?? "day"
    };
}
function h(e) {
  return e?.value?.from;
}
function k({
  field: e,
  formField: a,
  error: n,
  loading: t,
  status: o
}) {
  const u = c(
    () => g(
      a.value ?? void 0,
      e.granularities
    ),
    [a.value, e.granularities]
  ), l = (r) => {
    a.onChange(h(r) ?? null);
  }, i = (r) => {
    r || a.onBlur();
  };
  return /* @__PURE__ */ s(
    p,
    {
      label: e.label,
      placeholder: e.placeholder,
      disabled: e.disabled,
      granularities: e.granularities,
      minDate: e.minDate,
      maxDate: e.maxDate,
      presets: e.presets,
      clearable: e.clearable,
      value: u,
      onChange: l,
      onOpenChange: i,
      size: m,
      hideLabel: !0,
      error: n,
      status: o,
      loading: t
    }
  );
}
export {
  k as DateFieldRenderer
};
