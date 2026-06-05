import { jsxs as r, Fragment as p, jsx as e } from "react/jsx-runtime";
import d from "../../../icons/app/List.js";
import { GroupHeader as l } from "../../../ui/GroupHeader/GroupHeader.js";
import { F0TagStatus as c } from "../../../components/tags/F0TagStatus/index.js";
import { F0AvatarIcon as u } from "../../../components/avatars/F0AvatarIcon/F0AvatarIcon.js";
const C = ({
  props: n
}) => {
  const { status: a, title: i, taskCount: t, completedCount: o, expanded: s, onExpandToggle: m } = n;
  return /* @__PURE__ */ r(p, { children: [
    /* @__PURE__ */ e(u, { icon: d, size: "sm" }),
    /* @__PURE__ */ r("div", { className: "flex flex-1 items-center justify-between", children: [
      /* @__PURE__ */ e(
        l,
        {
          label: `${t} ${i}`,
          itemCount: void 0,
          open: s,
          onOpenChange: () => m(),
          showOpenChange: !0
        }
      ),
      o !== void 0 && /* @__PURE__ */ e(
        c,
        {
          text: `${o}/${t}`,
          variant: a === "completed" ? "positive" : "warning"
        }
      )
    ] })
  ] });
};
export {
  C as MultitaskHeader
};
