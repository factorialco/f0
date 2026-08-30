import { experimentalComponent as e } from "../../../lib/experimental.js";
import { F0Button as t } from "../../../components/F0Button/F0Button.js";
import { Picker as n } from "./Picker/index2.js";
import { Reaction as r } from "./reaction.js";
import { jsx as i, jsxs as a } from "react/jsx-runtime";
//#region src/sds/social/Reactions/index.tsx
function o({ items: e, onInteraction: o, locale: s, action: c }) {
	return /* @__PURE__ */ a("div", {
		className: "flex flex-wrap gap-2",
		children: [
			c && /* @__PURE__ */ i(t, {
				label: c.label,
				icon: c.icon,
				onClick: c.onClick,
				variant: "outline",
				hideLabel: !0
			}),
			/* @__PURE__ */ i(n, {
				onSelect: o,
				locale: s
			}),
			e.map((e) => /* @__PURE__ */ i(r, {
				emoji: e.emoji,
				initialCount: e.initialCount,
				hasReacted: e.hasReacted,
				users: e.users,
				loadUsers: e.loadUsers,
				onInteraction: o
			}, e.emoji))
		]
	});
}
var s = e("Reactions", o);
//#endregion
export { s as Reactions };
