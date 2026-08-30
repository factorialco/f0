import { cn as e } from "../../../../lib/utils.js";
import { Skeleton as t } from "../../../../ui/skeleton.js";
import { F0Avatar as n } from "../../../../components/avatars/F0Avatar/index.js";
import { STACKED_NODE_TITLE_BY_ZOOM as r } from "../../constants.js";
import { Fragment as i, jsx as a, jsxs as o } from "react/jsx-runtime";
//#region src/patterns/F0Graph/components/F0GraphNode/F0GraphNodeStackedRow.tsx
var s = ({ shellProps: s, variant: c, state: l, avatar: u, title: d, trailing: f, loading: p, height: m = 44 }) => {
	let h = l === "selected" || l === "highlighted", g = r[c], _ = g === null;
	return /* @__PURE__ */ o("div", {
		...s,
		"data-zoom-level": c,
		className: e("group flex w-full items-center rounded-xl border border-solid", "outline-none transition-[border-color,background-color,opacity] duration-200", _ ? "justify-center border-transparent bg-transparent" : h ? "border-f1-border-selected-bold bg-f1-background ring-2 ring-f1-background-selected ring-offset-0" : "border-f1-border bg-f1-background hover:bg-f1-background-hover", !_ && "focus-visible:ring-2 focus-visible:ring-f1-background-selected focus-visible:ring-offset-0", l === "dimmed" && "opacity-40"),
		style: {
			height: m,
			paddingLeft: 5,
			paddingRight: 5,
			gap: 8
		},
		children: [p ? /* @__PURE__ */ o(i, { children: [/* @__PURE__ */ a(t, {
			className: "shrink-0 rounded-full",
			style: {
				width: 32,
				height: 32
			}
		}), g && /* @__PURE__ */ a(t, { className: "h-3 w-24 flex-1 rounded-xs" })] }) : /* @__PURE__ */ o(i, { children: [u && /* @__PURE__ */ a("div", {
			className: e("flex shrink-0 items-center justify-center", _ && "rounded-md", _ && h && "ring-2 ring-f1-background-selected ring-offset-0", _ && "group-focus-visible:ring-2 group-focus-visible:ring-f1-background-selected group-focus-visible:ring-offset-0"),
			style: {
				width: 32,
				height: 32
			},
			children: /* @__PURE__ */ a(n, {
				size: "md",
				avatar: u
			})
		}), g && /* @__PURE__ */ a("p", {
			className: "min-w-0 flex-1 truncate font-medium tracking-[-0.07px] text-f1-foreground",
			style: g,
			children: d
		})] }), f && g && /* @__PURE__ */ a("div", {
			className: "flex shrink-0 items-center",
			"data-no-node-select": !0,
			onClick: (e) => e.stopPropagation(),
			children: f
		})]
	});
};
//#endregion
export { s as F0GraphNodeStackedRow };
