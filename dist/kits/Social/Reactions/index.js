import { jsxs as a, jsx as i } from "react/jsx-runtime";
import { experimentalComponent as l } from "../../../lib/experimental.js";
import { Picker as s } from "./Picker/index.js";
import { Reaction as m } from "./reaction.js";
import { F0Button as c } from "../../../components/F0Button/F0Button.js";
function p({ items: n, onInteraction: r, locale: t, action: o }) {
  return /* @__PURE__ */ a("div", { className: "flex flex-wrap gap-2", children: [
    o && /* @__PURE__ */ i(
      c,
      {
        label: o.label,
        icon: o.icon,
        onClick: o.onClick,
        variant: "outline",
        hideLabel: !0
      }
    ),
    /* @__PURE__ */ i(s, { onSelect: r, locale: t }),
    n.map((e) => /* @__PURE__ */ i(
      m,
      {
        emoji: e.emoji,
        initialCount: e.initialCount,
        hasReacted: e.hasReacted,
        users: e.users,
        onInteraction: r
      },
      e.emoji
    ))
  ] });
}
const j = l("Reactions", p);
export {
  j as Reactions
};
