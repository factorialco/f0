import { jsx as r } from "react/jsx-runtime";
import { cn as s } from "../../../../lib/utils.js";
import { tableDisplayClassNames as u } from "../../const.js";
import { resolveValue as c, isShowingPlaceholder as f } from "../../utils.js";
import { OneEllipsis as p } from "../../../../lib/OneEllipsis/OneEllipsis.js";
const a = (e) => typeof e == "object" && e !== null && "lines" in e ? e.lines : void 0, m = (e) => (typeof e == "object" && e !== null && "full" in e && e.full) ?? !1, y = (e, l) => {
  const t = c(e, "text")?.toString() || "", o = f(e, "text"), n = m(e), i = a(e) || 3;
  return /* @__PURE__ */ r(
    p,
    {
      className: s(
        "whitespace-pre-wrap break-words text-f1-foreground",
        o && "text-f1-foreground-secondary",
        l.visualization === "table" && u.text
      ),
      lines: i,
      disabled: n,
      children: t
    }
  );
};
export {
  y as LongTextCell
};
