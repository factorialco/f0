import { jsx as a } from "react/jsx-runtime";
import { useContext as l } from "react";
import { CardSelectableContainer as s } from "../../../../components/CardSelectable/index.js";
import { CardSelectDepsContext as i } from "./CardSelectDepsContext.js";
function c({
  field: t,
  formField: n
}) {
  const o = l(i), r = t.options.map((e) => ({
    value: e.value,
    title: e.label,
    description: e.description,
    selectedContent: o?.get(e.value)
  }));
  return /* @__PURE__ */ a(
    s,
    {
      grouped: t.grouped !== !1,
      items: r,
      value: n.value,
      onChange: (e) => n.onChange(e),
      label: t.label,
      disabled: t.disabled
    }
  );
}
export {
  c as CardSelectFieldRenderer
};
