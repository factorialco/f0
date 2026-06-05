import { jsx as s } from "react/jsx-runtime";
import { cn as i } from "../../../../lib/utils.js";
import { tableDisplayClassNames as n } from "../../const.js";
import { resolveValue as a, isShowingPlaceholder as m } from "../../utils.js";
import { OneEllipsis as c } from "../../../../lib/OneEllipsis/OneEllipsis.js";
const h = (t, e) => {
  const o = a(t, "text"), r = m(t, "text"), l = o?.toString() ?? "";
  return /* @__PURE__ */ s(
    c,
    {
      lines: 1,
      tag: "span",
      className: i(
        "text-f1-foreground",
        r && "text-f1-foreground-secondary",
        e.visualization === "table" && n.text
      ),
      children: l
    }
  );
};
export {
  h as TextCell
};
