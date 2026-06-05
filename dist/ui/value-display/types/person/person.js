import { jsxs as o, jsx as e } from "react/jsx-runtime";
import { F0Avatar as m } from "../../../../components/avatars/F0Avatar/index.js";
import { cn as a } from "../../../../lib/utils.js";
import { tableDisplayClassNames as s } from "../../const.js";
import { OneEllipsis as l } from "../../../../lib/OneEllipsis/OneEllipsis.js";
const N = (t, i) => {
  const r = `${t.firstName.toString()} ${t.lastName.toString()}`;
  return /* @__PURE__ */ o(
    "div",
    {
      className: a(
        "flex min-w-0 flex-1 items-center gap-2",
        i.visualization === "table" && s.avatar
      ),
      children: [
        /* @__PURE__ */ e(
          m,
          {
            avatar: {
              type: "person",
              firstName: t.firstName.toString(),
              lastName: t.lastName.toString(),
              src: t.src,
              badge: t.badge,
              deactivated: t.deactivated
            },
            size: "xs"
          }
        ),
        /* @__PURE__ */ e(
          l,
          {
            className: a(
              "min-w-0 flex-1",
              t.deactivated ? "text-f1-foreground/[0.61]" : "text-f1-foreground"
            ),
            tag: "span",
            children: r
          }
        )
      ]
    }
  );
};
export {
  N as PersonCell
};
