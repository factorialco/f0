import { cn as e } from "../../../lib/utils.js";
import { F0AvatarModule as t } from "../../avatars/F0AvatarModule/index.js";
import { F0AvatarEmoji as n } from "../../avatars/F0AvatarEmoji/index.js";
import { F0AvatarFile as r } from "../../avatars/F0AvatarFile/F0AvatarFile.js";
import { F0AvatarIcon as i } from "../../avatars/F0AvatarIcon/index.js";
import { F0Avatar as a } from "../../avatars/F0Avatar/index.js";
import { F0AvatarAlert as o } from "../../avatars/F0AvatarAlert/index.js";
import { F0AvatarDate as s } from "../../avatars/F0AvatarDate/index.js";
import { jsx as c } from "react/jsx-runtime";
//#region src/components/F0Card/components/CardAvatar.tsx
var l = ({ avatar: e, size: l }) => e.type === "emoji" ? /* @__PURE__ */ c(n, {
	emoji: e.emoji,
	size: l
}) : e.type === "file" ? /* @__PURE__ */ c(r, {
	file: e.file,
	size: l
}) : e.type === "icon" ? /* @__PURE__ */ c(i, {
	icon: e.icon,
	size: l
}) : e.type === "module" ? /* @__PURE__ */ c(t, {
	module: e.module,
	size: l
}) : e.type === "alert" ? /* @__PURE__ */ c(o, {
	type: e.variant,
	size: l
}) : e.type === "date" ? /* @__PURE__ */ c(s, { date: e.date }) : /* @__PURE__ */ c(a, {
	avatar: e,
	size: l
});
function u({ avatar: t, overlay: n = !1, compact: r = !1, size: i }) {
	let a = t.type === "person", o = i ?? (r ? "sm" : "lg");
	return /* @__PURE__ */ c("div", {
		className: e("mb-1.5 flex h-fit w-fit", n && !r && "absolute -top-9 left-0 rounded-md ring-[3px] ring-f1-background", n && a && "rounded-full", (r || i) && "mb-0"),
		"data-testid": "card-avatar",
		children: /* @__PURE__ */ c(l, {
			avatar: t,
			size: o
		})
	});
}
//#endregion
export { u as CardAvatar };
