import { cn as e, focusRing as t } from "../../../../lib/utils.js";
import { F0Icon as n } from "../../../../components/F0Icon/index.js";
import { useReducedMotion as r } from "../../../../lib/a11y.js";
import i from "../../../../icons/app/ArrowUp.js";
import { ButtonInternal as a } from "../../../../components/F0Button/internal.js";
import { Popover as o, PopoverAnchor as s, PopoverContent as c } from "../../../../ui/popover.js";
import { useHorizontalScrollFade as l } from "../useHorizontalScrollFade.js";
import { useCallback as u, useEffect as d, useId as f, useRef as p, useState as m } from "react";
import { jsx as h, jsxs as g } from "react/jsx-runtime";
//#region src/kits/ai/F0AiChatTextArea/components/WelcomeScreenSuggestionsRow.tsx
var _ = 5, v = 46, y = 400, b = 16, x = 16;
function S(e, t = _) {
	return e.length <= t ? e : [...e].sort(() => .5 - Math.random()).slice(0, t);
}
var C = ({ suggestions: t, onItemClick: r, onItemHover: i, side: u = "top", reserveTwoRows: d = !0, overflow: _ = "wrap" }) => {
	let [v, y] = m(null), b = p(null), x = _ === "scroll", C = l(), T = p(null), E = p(!1), D = f(), O = f(), k = v === null ? null : t[v];
	return t.length === 0 ? null : /* @__PURE__ */ g(o, {
		open: k !== null,
		onOpenChange: (e) => {
			e || (y(null), i?.(null));
		},
		children: [/* @__PURE__ */ h("div", {
			className: e("flex w-full items-end", d && "min-h-[72px]"),
			children: /* @__PURE__ */ h(s, {
				asChild: !0,
				children: /* @__PURE__ */ h("div", {
					ref: (e) => {
						b.current = e, x && C.ref(e);
					},
					style: x ? C.style : void 0,
					className: e("flex w-full items-center gap-2", x ? e("flex-nowrap overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden", "p-1 -m-1") : "flex-wrap"),
					children: t.map((e, t) => /* @__PURE__ */ h(a, {
						type: "button",
						variant: "outline",
						label: e.label,
						icon: e.icon,
						className: x ? "shrink-0" : void 0,
						pressed: v === t,
						"aria-haspopup": "dialog",
						"aria-expanded": v === t,
						"aria-controls": v === t ? D : void 0,
						onClick: (e) => {
							T.current = e.currentTarget, E.current = !1, y((e) => e === t ? null : t), i?.(null);
						}
					}, `${e.label}-${t}`))
				})
			})
		}), k && /* @__PURE__ */ g(c, {
			side: u,
			align: "start",
			sideOffset: 8,
			id: D,
			"aria-labelledby": O,
			onOpenAutoFocus: (e) => e.preventDefault(),
			onCloseAutoFocus: (e) => {
				e.preventDefault(), E.current && T.current?.focus(), E.current = !1;
			},
			onEscapeKeyDown: () => {
				E.current = !0;
			},
			onPointerDownOutside: (e) => {
				let t = e.target;
				t && b.current?.contains(t) ? e.preventDefault() : E.current = !1;
			},
			className: e("flex flex-col gap-1 rounded-md border border-solid border-f1-border-secondary bg-f1-background p-2", "w-[var(--radix-popover-trigger-width)]"),
			children: [/* @__PURE__ */ g("div", {
				id: O,
				className: "flex items-center gap-1.5 p-2 pb-1 text-sm font-medium text-f1-foreground-secondary",
				children: [/* @__PURE__ */ h(n, {
					"aria-hidden": !0,
					icon: k.icon,
					size: "sm"
				}), /* @__PURE__ */ h("span", { children: k.label })]
			}), /* @__PURE__ */ h("div", {
				className: "flex flex-col",
				children: S(k.items).map((e, t) => /* @__PURE__ */ h(w, {
					item: e,
					onHover: i,
					onSelect: (t) => {
						r(e, k), E.current = document.activeElement === t.currentTarget, y(null), i?.(null);
					}
				}, t))
			})]
		})]
	});
};
function w({ item: a, onSelect: o, onHover: s }) {
	let c = p(null), l = p(null), f = p(null), m = r(), _ = u(() => {
		f.current != null && (clearTimeout(f.current), f.current = null);
		let e = l.current, t = c.current;
		e && (e.style.transition = "none", e.style.transform = "translateX(0)", e.style.overflow = ""), t && (t.style.removeProperty("mask-image"), t.style.removeProperty("-webkit-mask-image"));
	}, []), S = u(() => {
		m || (f.current = window.setTimeout(() => {
			let e = l.current, t = c.current;
			if (!e || !t) return;
			let n = e.scrollWidth - e.clientWidth;
			if (n <= 0) return;
			let r = n + b, i = r / v * 1e3;
			e.style.overflow = "visible";
			let a = `linear-gradient(90deg, transparent 0, #000 ${x}px)`;
			t.style.setProperty("mask-image", a), t.style.setProperty("-webkit-mask-image", a), e.style.transition = `transform ${i}ms linear`, e.style.transform = `translateX(-${r}px)`;
		}, y));
	}, [m]), C = u(() => {
		s?.(a), S();
	}, [
		a,
		s,
		S
	]), w = u(() => {
		s?.(null), _();
	}, [s, _]);
	return d(() => () => {
		f.current != null && clearTimeout(f.current);
	}, []), /* @__PURE__ */ g("button", {
		type: "button",
		onClick: o,
		onMouseEnter: C,
		onMouseLeave: w,
		onFocus: C,
		onBlur: w,
		className: e("group flex items-center justify-between gap-2 rounded-sm px-2 py-2 text-left text-base font-medium text-f1-foreground transition-colors hover:bg-f1-background-hover focus-visible:bg-f1-background-hover", t()),
		children: [/* @__PURE__ */ h("span", {
			ref: c,
			className: "min-w-0 flex-1 overflow-hidden",
			children: /* @__PURE__ */ h("span", {
				ref: l,
				className: "block w-full truncate",
				children: a.title
			})
		}), /* @__PURE__ */ h("span", {
			"aria-hidden": !0,
			className: "flex flex-shrink-0 items-center text-f1-foreground-secondary opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100",
			children: /* @__PURE__ */ h(n, {
				icon: i,
				size: "sm"
			})
		})]
	});
}
//#endregion
export { C as WelcomeScreenSuggestionsRow };
