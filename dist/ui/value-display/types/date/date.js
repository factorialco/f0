import { jsx as a } from "react/jsx-runtime";
import { cn as l } from "../../../../lib/utils.js";
import { tableDisplayClassNames as s } from "../../const.js";
import { formatDateValue as i, isShowingPlaceholder as m } from "../../utils.js";
const p = (o, t) => {
  const e = i(o), r = m(o, "date");
  return /* @__PURE__ */ a(
    "div",
    {
      className: l(
        "monospace text-f1-foreground",
        r && "text-f1-foreground-secondary",
        t.visualization === "table" && s.text
      ),
      children: e
    }
  );
};
export {
  p as DateCell
};
