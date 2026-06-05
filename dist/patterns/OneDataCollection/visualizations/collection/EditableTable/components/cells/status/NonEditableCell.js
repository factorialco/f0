import { jsx as e } from "react/jsx-runtime";
import { useI18n as l } from "../../../../../../../../lib/providers/i18n/i18n-provider.js";
import { cn as m } from "../../../../../../../../lib/utils.js";
import { renderProperty as s } from "../../../../../../property-render.js";
import { BaseCell as f } from "../BaseCell.js";
function u({
  editableColumn: r,
  item: o,
  isLastColumn: i,
  hint: t
}) {
  const n = l();
  return /* @__PURE__ */ e(f, { showRightBorder: !i, borderOnHover: !1, hint: t, children: /* @__PURE__ */ e(
    "div",
    {
      className: m(
        "flex w-full min-w-0",
        "cursor-pointer items-center px-3",
        r.align === "right" && "justify-end"
      ),
      children: s(o, r, "editableTable", n)
    }
  ) });
}
export {
  u as NonEditableCell
};
