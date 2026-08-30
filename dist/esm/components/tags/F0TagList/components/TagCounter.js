import { Tooltip as e } from "../../../../experimental/Overlays/Tooltip/index.js";
import { ScrollArea as t } from "../../../../ui/scrollarea.js";
import { F0TagRaw as n } from "../../F0TagRaw/index.js";
import { Tag as r } from "../../F0Tag/F0Tag.js";
import { HoverCard as i, HoverCardContent as a, HoverCardTrigger as o } from "../../../../ui/hover-card.js";
import { jsx as s, jsxs as c } from "react/jsx-runtime";
//#region src/components/tags/F0TagList/components/TagCounter.tsx
var l = ({ count: l, list: u }) => {
	let d = /* @__PURE__ */ s(n, { text: `+${l}` });
	return u?.length ? /* @__PURE__ */ c(i, { children: [/* @__PURE__ */ s(o, { children: /* @__PURE__ */ s("span", {
		className: "pointer-events-auto relative z-[1] cursor-pointer",
		children: d
	}) }), /* @__PURE__ */ s(a, {
		side: "top",
		className: "w-fit bg-f1-background text-f1-foreground shadow-md ring-1 ring-f1-border-secondary",
		children: /* @__PURE__ */ s(t, {
			className: "flex max-h-[220px] w-fit flex-col",
			children: u.map((t, n) => /* @__PURE__ */ s("div", {
				className: "flex w-max max-w-72 items-center gap-1.5 px-2 py-1 [&:first-child]:pt-2 [&:last-child]:pb-2",
				children: t.description ? /* @__PURE__ */ s(e, {
					label: t.description,
					children: /* @__PURE__ */ s("div", { children: /* @__PURE__ */ s(r, { tag: t }) })
				}) : /* @__PURE__ */ s(r, { tag: t })
			}, n))
		})
	})] }) : d;
};
l.displayName = "TagCounter";
//#endregion
export { l as TagCounter };
