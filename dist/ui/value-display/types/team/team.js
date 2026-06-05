import { jsxs as r, jsx as e } from "react/jsx-runtime";
import { F0Avatar as m } from "../../../../components/avatars/F0Avatar/index.js";
import { cn as s } from "../../../../lib/utils.js";
import { tableDisplayClassNames as i } from "../../const.js";
const p = (a, t) => /* @__PURE__ */ r(
  "div",
  {
    className: s(
      "flex items-center gap-2",
      t.visualization === "table" && i.avatar
    ),
    children: [
      /* @__PURE__ */ e(
        m,
        {
          avatar: {
            type: "team",
            name: a.name,
            src: a.src
          },
          size: "xs"
        }
      ),
      /* @__PURE__ */ e("span", { className: "text-f1-foreground", children: a.name.toString() })
    ]
  }
);
export {
  p as TeamCell
};
