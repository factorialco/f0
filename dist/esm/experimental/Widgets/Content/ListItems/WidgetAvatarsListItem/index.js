import { cn as e } from "../../../../../lib/utils.js";
import { F0AvatarEmoji as t } from "../../../../../components/avatars/F0AvatarEmoji/index.js";
import { F0AvatarAlert as n } from "../../../../../components/avatars/F0AvatarAlert/index.js";
import { F0AvatarList as r } from "../../../../../components/avatars/F0AvatarList/index.js";
import { jsx as i, jsxs as a } from "react/jsx-runtime";
//#region src/experimental/Widgets/Content/ListItems/WidgetAvatarsListItem/index.tsx
var o = ({ onClick: t, withEmoji: n, withPointerCursor: r, children: a }) => {
	let o = e("flex flex-row items-center rounded-md border border-solid border-transparent p-2 text-f1-foreground", n ? "gap-2" : "gap-2.5", r ? "cursor-pointer" : "cursor-default", t ? "hover:bg-f1-background-tertiary focus:border-f1-background-selected-bold focus:outline-none" : void 0);
	return t ? /* @__PURE__ */ i("a", {
		className: o,
		onClick: t,
		children: a
	}) : /* @__PURE__ */ i("div", {
		className: o,
		children: a
	});
};
function s({ id: e, title: s, subtitle: c, avatars: l, remainingCount: u, withPointerCursor: d = !1, onClick: f, ...p }) {
	return /* @__PURE__ */ a(o, {
		onClick: (t) => {
			t.preventDefault(), f?.(e);
		},
		withEmoji: "emoji" in p && !!p.emoji,
		withPointerCursor: d,
		children: [
			"alert" in p && p.alert && /* @__PURE__ */ i(n, { type: p.alert }),
			"emoji" in p && p.emoji && /* @__PURE__ */ i(t, { emoji: p.emoji }),
			/* @__PURE__ */ a("div", {
				className: "flex-1",
				children: [/* @__PURE__ */ i("p", {
					className: "line-clamp-1 font-medium",
					children: s
				}), /* @__PURE__ */ i("p", {
					className: "line-clamp-1 text-f1-foreground-secondary",
					children: c
				})]
			}),
			/* @__PURE__ */ i("div", {
				className: "min-w-0 flex-1",
				children: /* @__PURE__ */ i(r, {
					avatars: l,
					remainingCount: u,
					size: "emoji" in p && p.emoji ? "md" : "sm",
					type: "person"
				})
			})
		]
	});
}
//#endregion
export { s as WidgetAvatarsListItem };
