import { jsx as s } from "react/jsx-runtime";
import { useMemo as i } from "react";
import { F0DatePicker as p } from "../../../../components/F0DatePicker/index.js";
import { FORM_SIZE as b } from "../../constants.js";
function g(e) {
  if (!(!e?.from || !e?.to))
    return {
      value: { from: e.from, to: e.to },
      granularity: "range"
    };
}
function h(e) {
  if (!(!e?.value?.from || !e?.value?.to))
    return {
      from: e.value.from,
      to: e.value.to
    };
}
function k({
  field: e,
  formField: a,
  error: o,
  loading: n,
  status: t
}) {
  const l = i(
    () => g(
      a.value ?? void 0
    ),
    [a.value]
  ), u = (r) => {
    a.onChange(h(r) ?? null);
  }, m = (r) => {
    r || a.onBlur();
  }, c = e.fromLabel && e.toLabel ? `${e.label} (${e.fromLabel} - ${e.toLabel})` : e.label;
  return /* @__PURE__ */ s(
    p,
    {
      label: c,
      placeholder: e.placeholder,
      disabled: e.disabled,
      granularities: e.granularities ?? ["range"],
      minDate: e.minDate,
      maxDate: e.maxDate,
      presets: e.presets,
      clearable: e.clearable,
      value: l,
      onChange: u,
      onOpenChange: m,
      size: b,
      hideLabel: !0,
      error: o,
      status: t,
      loading: n
    }
  );
}
export {
  k as DateRangeFieldRenderer
};
