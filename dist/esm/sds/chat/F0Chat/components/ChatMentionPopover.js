import { cn as e } from "../../../../lib/utils.js";
import { F0Icon as t } from "../../../../components/F0Icon/index.js";
import { OneEllipsis as n } from "../../../../lib/OneEllipsis/OneEllipsis.js";
import r from "../../../../icons/app/People.js";
import { Skeleton as i } from "../../../../ui/skeleton.js";
import { F0Avatar as a } from "../../../../components/avatars/F0Avatar/index.js";
import { useEffect as o, useLayoutEffect as s, useRef as c } from "react";
import { Fragment as l, jsx as u, jsxs as d } from "react/jsx-runtime";
//#region src/sds/chat/F0Chat/components/ChatMentionPopover.tsx
var f = (e, t) => `${e}-option-${(t.kind === "everyone" ? "everyone" : `user-${t.user.id}`).replace(/[^a-zA-Z0-9_-]/g, "-")}`, p = f;
function m({ isOpen: p, listboxId: m, results: h, isLoading: g, selectedIndex: _, position: v, onSelect: y, everyoneDescription: b }) {
	let x = c(null), S = c(null);
	o(() => {
		S.current?.scrollIntoView({ block: "nearest" });
	}, [_]), s(() => {
		let e = x.current, t = e?.offsetParent;
		if (!e || !t) return;
		let n = e.offsetLeft + e.offsetWidth - t.clientWidth;
		n > 0 && (e.style.left = `${Math.max(0, e.offsetLeft - n)}px`);
	}, [v]);
	let C = h.some((e) => e.kind === "user"), w = g && !C;
	return !p || h.length === 0 && !g ? null : /* @__PURE__ */ d("div", {
		ref: x,
		id: m,
		role: "listbox",
		style: {
			position: "absolute",
			bottom: v ? `${v.bottom}px` : "100%",
			left: v ? `${v.left}px` : 0
		},
		className: e("z-50", "w-64 max-h-60 overflow-y-auto", "rounded-lg border border-solid border-f1-border-secondary", "bg-f1-background shadow-md", "p-1"),
		children: [h.map((i, o) => {
			let s = o === _, c = i.kind === "everyone" ? "@everyone" : i.user.id;
			return /* @__PURE__ */ u("div", {
				ref: s ? S : void 0,
				id: f(m, i),
				role: "option",
				"aria-selected": s,
				className: e("flex cursor-pointer items-center gap-2 p-2 rounded", "transition-colors", s ? "bg-f1-background-secondary" : "hover:bg-f1-background-secondary-hover"),
				onMouseDown: (e) => {
					e.preventDefault(), y(i);
				},
				children: i.kind === "everyone" ? /* @__PURE__ */ d(l, { children: [/* @__PURE__ */ u("span", {
					className: "flex size-5 shrink-0 items-center justify-center rounded-full bg-f1-background-secondary",
					children: /* @__PURE__ */ u(t, {
						icon: r,
						size: "sm",
						color: "default"
					})
				}), /* @__PURE__ */ d("div", {
					className: "flex min-w-0 flex-1 flex-col",
					children: [/* @__PURE__ */ u(n, {
						className: "text-base font-medium text-f1-foreground",
						children: i.label
					}), /* @__PURE__ */ u(n, {
						className: "text-sm text-f1-foreground-secondary",
						children: b
					})]
				})] }) : /* @__PURE__ */ d(l, { children: [/* @__PURE__ */ u(a, {
					size: "xs",
					avatar: i.user.avatar ?? {
						type: "person",
						firstName: i.user.name,
						lastName: ""
					}
				}), /* @__PURE__ */ u("div", {
					className: "flex min-w-0 flex-1 flex-col",
					children: /* @__PURE__ */ u(n, {
						className: "text-base font-medium text-f1-foreground",
						children: i.user.name
					})
				})] })
			}, c);
		}), w && Array.from({ length: 3 }, (t, n) => /* @__PURE__ */ d("div", {
			className: "flex items-center gap-2 p-2",
			"aria-hidden": "true",
			children: [/* @__PURE__ */ u(i, { className: "size-5 shrink-0 rounded-full" }), /* @__PURE__ */ u(i, { className: e("h-4 rounded", n === 1 ? "w-24" : "w-32") })]
		}, `skeleton-${n}`))]
	});
}
//#endregion
export { m as ChatMentionPopover, p as getChatMentionOptionId };
