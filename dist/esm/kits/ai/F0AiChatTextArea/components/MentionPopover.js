import { cn as e } from "../../../../lib/utils.js";
import { OneEllipsis as t } from "../../../../lib/OneEllipsis/OneEllipsis.js";
import { Skeleton as n } from "../../../../ui/skeleton.js";
import { F0AvatarPerson as r } from "../../../../components/avatars/F0AvatarPerson/F0AvatarPerson.js";
import { useEffect as i, useLayoutEffect as a, useRef as o } from "react";
import { jsx as s, jsxs as c } from "react/jsx-runtime";
//#region src/kits/ai/F0AiChatTextArea/components/MentionPopover.tsx
function l({ isOpen: l, results: u, isLoading: d, selectedIndex: f, position: p, onSelect: m }) {
	let h = o(null), g = o(null);
	i(() => {
		g.current?.scrollIntoView({ block: "nearest" });
	}, [f]), a(() => {
		let e = h.current, t = e?.offsetParent;
		if (!e || !t) return;
		let n = e.offsetLeft + e.offsetWidth - t.clientWidth;
		n > 0 && (e.style.left = `${Math.max(0, e.offsetLeft - n)}px`);
	}, [p]);
	let _ = d && u.length === 0, v = !d && u.length === 0;
	return !l || v ? null : /* @__PURE__ */ s("div", {
		ref: h,
		role: "listbox",
		style: {
			position: "absolute",
			bottom: p ? `${p.bottom}px` : "100%",
			left: p ? `${p.left}px` : 0
		},
		className: e("z-50", "w-64 max-h-60 overflow-y-auto", "rounded-lg border border-solid border-f1-border-secondary", "bg-f1-background shadow-md", "p-1"),
		children: _ ? Array.from({ length: 3 }, (t, r) => /* @__PURE__ */ c("div", {
			className: "flex items-center gap-2 p-2",
			"aria-hidden": "true",
			children: [/* @__PURE__ */ s(n, { className: "size-5 shrink-0 rounded-full" }), /* @__PURE__ */ s(n, { className: e("h-4 rounded", r === 1 ? "w-24" : "w-32") })]
		}, r)) : u.map((n, i) => {
			let a = i === f, o = `${n.firstName} ${n.lastName}`.trim();
			return /* @__PURE__ */ c("div", {
				ref: a ? g : void 0,
				role: "option",
				"aria-selected": a,
				className: e("flex cursor-pointer items-center gap-2 p-2 rounded", "transition-colors", a ? "bg-f1-background-secondary" : "hover:bg-f1-background-secondary-hover"),
				onMouseDown: (e) => {
					e.preventDefault(), m(n);
				},
				onMouseEnter: () => {},
				children: [/* @__PURE__ */ s(r, {
					firstName: n.firstName,
					lastName: n.lastName,
					src: n.avatarUrl,
					size: "xsmall"
				}), /* @__PURE__ */ s("div", {
					className: "flex min-w-0 flex-1 flex-col",
					children: /* @__PURE__ */ s(t, {
						className: "text-base font-medium text-f1-foreground",
						children: o
					})
				})]
			}, String(n.id));
		})
	});
}
//#endregion
export { l as MentionPopover };
