import { jsxs as r, jsx as e } from "react/jsx-runtime";
import { F0Avatar as m } from "../../../../components/avatars/F0Avatar/index.js";
import { cn as s } from "../../../../lib/utils.js";
import { tableDisplayClassNames as o } from "../../const.js";
const c = (a, t) => /* @__PURE__ */ r(
  "div",
  {
    className: s(
      "flex items-center gap-2",
      t.visualization === "table" && o.avatar
    ),
    children: [
      /* @__PURE__ */ e(
        m,
        {
          avatar: {
            type: "company",
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
  c as CompanyCell
};
