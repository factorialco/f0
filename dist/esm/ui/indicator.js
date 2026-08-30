import { cn as e } from "../lib/utils.js";
import { F0Icon as t } from "../components/F0Icon/index.js";
import { EmojiImage as n } from "../lib/emojis.js";
import { forwardRef as r } from "react";
import { jsx as i, jsxs as a } from "react/jsx-runtime";
//#region src/ui/indicator.tsx
var o = r(function({ content: r, label: o, color: s, ...c }, l) {
	return /* @__PURE__ */ a("div", {
		className: "flex flex-col gap-1",
		ref: l,
		children: [/* @__PURE__ */ i("p", {
			className: "text-3xl font-semibold",
			children: r
		}), /* @__PURE__ */ a("div", {
			className: "flex items-center gap-1",
			children: [
				/* @__PURE__ */ i("p", {
					className: "line-clamp-1 text-f1-foreground-secondary",
					title: o,
					children: o
				}),
				"icon" in c && c.icon && /* @__PURE__ */ i("span", {
					className: e("flex", s),
					children: /* @__PURE__ */ i(t, { icon: c.icon })
				}),
				"emoji" in c && c.emoji && /* @__PURE__ */ i("span", {
					className: e("flex", s),
					children: /* @__PURE__ */ i(n, {
						emoji: c.emoji,
						size: "md"
					})
				})
			]
		})]
	}, o);
});
//#endregion
export { o as Indicator };
