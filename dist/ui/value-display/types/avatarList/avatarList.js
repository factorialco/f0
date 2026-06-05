import { jsx as a } from "react/jsx-runtime";
import { F0AvatarList as r } from "../../../../components/avatars/F0AvatarList/index.js";
import { cn as l } from "../../../../lib/utils.js";
import { tableDisplayClassNames as s } from "../../const.js";
const v = (t, o) => {
  const i = t.type ?? "person";
  return /* @__PURE__ */ a(
    "div",
    {
      className: l(
        "pointer-events-auto w-full",
        o.visualization === "table" && s.avatarList
      ),
      children: /* @__PURE__ */ a(
        r,
        {
          type: i,
          avatars: t.avatarList,
          size: "xs",
          max: t.max,
          tooltipScroll: t.tooltipScroll
        }
      )
    }
  );
};
export {
  v as AvatarListCell
};
