import { jsxs as m, jsx as r } from "react/jsx-runtime";
import { F0AvatarAlert as s } from "../../../../../components/avatars/F0AvatarAlert/index.js";
import { F0AvatarEmoji as f } from "../../../../../components/avatars/F0AvatarEmoji/index.js";
import { F0AvatarList as u } from "../../../../../components/avatars/F0AvatarList/index.js";
import { cn as j } from "../../../../../lib/utils.js";
const v = ({
  onClick: t,
  withEmoji: a,
  withPointerCursor: n,
  children: i
}) => {
  const o = j(
    "flex flex-row items-center rounded-md border border-solid border-transparent p-2 text-f1-foreground",
    a ? "gap-2" : "gap-2.5",
    n ? "cursor-pointer" : "cursor-default",
    t ? "hover:bg-f1-background-tertiary focus:border-f1-background-selected-bold focus:outline-none" : void 0
  );
  return t ? /* @__PURE__ */ r("a", { className: o, onClick: t, children: i }) : /* @__PURE__ */ r("div", { className: o, children: i });
};
function y({
  id: t,
  title: a,
  subtitle: n,
  avatars: i,
  remainingCount: o,
  withPointerCursor: l = !1,
  onClick: d,
  ...e
}) {
  return /* @__PURE__ */ m(
    v,
    {
      onClick: (c) => {
        c.preventDefault(), d?.(t);
      },
      withEmoji: "emoji" in e && !!e.emoji,
      withPointerCursor: l,
      children: [
        "alert" in e && e.alert && /* @__PURE__ */ r(s, { type: e.alert }),
        "emoji" in e && e.emoji && /* @__PURE__ */ r(f, { emoji: e.emoji }),
        /* @__PURE__ */ m("div", { className: "flex-1", children: [
          /* @__PURE__ */ r("p", { className: "line-clamp-1 font-medium", children: a }),
          /* @__PURE__ */ r("p", { className: "line-clamp-1 text-f1-foreground-secondary", children: n })
        ] }),
        /* @__PURE__ */ r("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ r(
          u,
          {
            avatars: i,
            remainingCount: o,
            size: "emoji" in e && e.emoji ? "md" : "sm",
            type: "person"
          }
        ) })
      ]
    }
  );
}
export {
  y as WidgetAvatarsListItem
};
