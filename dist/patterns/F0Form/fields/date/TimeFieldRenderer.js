import { jsx as u } from "react/jsx-runtime";
import { useMemo as p, useCallback as s } from "react";
import b from "../../../../icons/app/Clock.js";
import "../../../../icons/app/Menu.js";
import { FORM_SIZE as c } from "../../constants.js";
import { dateToTimeString as g, timeStringToDate as h } from "./utils.js";
import { F0TextInput as C } from "../../../../components/F0TextInput/F0TextInput.js";
function B({
  field: t,
  formField: e,
  error: n,
  loading: r,
  status: o
}) {
  const i = p(
    () => g(e.value ?? void 0),
    [e.value]
  ), m = s(
    (a) => {
      if (!a) {
        e.onChange(null);
        return;
      }
      const l = h(a);
      e.onChange(l);
    },
    [e]
  );
  return /* @__PURE__ */ u(
    C,
    {
      type: "time",
      label: t.label,
      disabled: t.disabled,
      value: i,
      onChange: m,
      onBlur: e.onBlur,
      size: c,
      hideLabel: !0,
      error: n,
      status: o,
      loading: r,
      clearable: t.clearable,
      name: e.name,
      ref: e.ref,
      icon: b
    }
  );
}
export {
  B as TimeFieldRenderer
};
