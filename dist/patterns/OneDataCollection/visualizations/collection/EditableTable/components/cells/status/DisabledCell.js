import { jsx as e } from "react/jsx-runtime";
import { useI18n as n } from "../../../../../../../../lib/providers/i18n/i18n-provider.js";
import { cn as t } from "../../../../../../../../lib/utils.js";
import { renderProperty as f } from "../../../../../../property-render.js";
import { BaseCell as m } from "../BaseCell.js";
function u({
  editableColumn: r,
  item: o,
  hint: i
}) {
  const l = n();
  return /* @__PURE__ */ e(m, { borderOnHover: !1, hint: i, children: /* @__PURE__ */ e(
    "div",
    {
      className: t(
        r.align === "right" ? "justify-end" : "",
        "flex p-4 min-h-12 items-center border-0 h-full",
        "bg-f1-background-disabled h-full",
        "cursor-pointer w-full"
      ),
      children: f(o, r, "editableTable", l)
    }
  ) });
}
export {
  u as DisabledCell
};
