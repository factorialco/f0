import { jsx as t } from "react/jsx-runtime";
import { cn as o } from "../../../../../../../lib/utils.js";
import { BaseCell as p } from "./BaseCell.js";
import { F0TextInput as a } from "../../../../../../../components/F0TextInput/F0TextInput.js";
function u({
  editableColumn: e,
  value: r,
  error: i,
  loading: l,
  onChange: n,
  hint: m
}) {
  return /* @__PURE__ */ t(p, { error: i, hint: m, children: /* @__PURE__ */ t(
    "div",
    {
      className: o(
        "flex w-full min-w-0",
        "cursor-text items-center",
        e.align === "right" && "[&_input]:text-right"
      ),
      children: /* @__PURE__ */ t(
        a,
        {
          type: "text",
          label: e.label,
          hideLabel: !0,
          value: r,
          onChange: n,
          loading: l,
          transparent: !0
        }
      )
    }
  ) });
}
export {
  u as TextCell
};
