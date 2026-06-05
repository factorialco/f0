import { jsx as s } from "react/jsx-runtime";
import { experimentalComponent as p } from "../../../../lib/experimental.js";
import { Switch as h } from "../../../../ui/switch.js";
function l({
  title: t,
  onCheckedChange: o,
  id: e,
  disabled: i,
  checked: r = !1,
  value: f,
  hideLabel: m = !1,
  presentational: n = !1,
  required: a = !1,
  ...c
}) {
  return /* @__PURE__ */ s(
    h,
    {
      title: t,
      onCheckedChange: o,
      id: e,
      disabled: i,
      checked: r,
      value: f,
      hideLabel: m,
      required: a,
      tabIndex: n ? -1 : void 0,
      ...c
    }
  );
}
const d = p("Switch", l);
export {
  d as Switch
};
