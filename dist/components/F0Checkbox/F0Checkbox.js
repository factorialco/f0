import { jsx as C } from "react/jsx-runtime";
import { withDataTestId as b } from "../../lib/data-testid/index.js";
import { experimentalComponent as h } from "../../lib/experimental.js";
import { Checkbox as k } from "../../ui/checkbox.js";
function d({
  title: o,
  onCheckedChange: e,
  id: t,
  disabled: r,
  indeterminate: a = !1,
  checked: f = !1,
  value: i,
  hideLabel: m = !1,
  presentational: n = !1,
  stopPropagation: s = !1,
  name: p,
  required: l = !1,
  ...x
}) {
  return /* @__PURE__ */ C(
    k,
    {
      title: o,
      onCheckedChange: e,
      id: t,
      disabled: r,
      indeterminate: a,
      checked: f,
      value: i,
      name: p,
      hideLabel: m,
      required: l,
      tabIndex: n ? -1 : void 0,
      onClick: (c) => s && c.stopPropagation(),
      ...x
    }
  );
}
const j = b(
  h("F0Checkbox", d)
);
export {
  j as F0Checkbox
};
