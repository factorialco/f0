import { cn as e, focusRing as t } from "../../../../lib/utils.js";
import { F0Icon as n } from "../../../../components/F0Icon/index.js";
import { useReducedMotion as r } from "../../../../lib/a11y.js";
import { useI18n as i } from "../../../../lib/providers/i18n/i18n-provider.js";
import { actionVariants as a, buttonSizeVariants as o } from "../../../../ui/Action/variants.js";
import { useEffect as s, useRef as c, useState as l } from "react";
import { jsx as u, jsxs as d } from "react/jsx-runtime";
import { LayoutGroup as f, motion as p } from "motion/react";
//#region src/patterns/Navigation/Sidebar/Tabs/index.tsx
var m = () => /* @__PURE__ */ u("div", {
	className: "absolute -right-0.5 -top-0.5 flex h-3 w-3 items-center justify-center rounded-full",
	children: /* @__PURE__ */ u("span", { className: "h-2 w-2 rounded-full bg-f1-special-highlight" })
}), h = ({ tab: i, isActive: c, showLabel: f, grow: h = !0, probe: g = !1, onClick: _ }) => {
	let v = r(), y = v ? { duration: 0 } : {
		type: "spring",
		duration: .35,
		bounce: 0
	}, b = i.variant === "ai", [x, S] = l(!1);
	return s(() => {
		if (!(b && c)) {
			S(!1);
			return;
		}
		let e = setTimeout(() => S(!0), v ? 0 : 350);
		return () => clearTimeout(e);
	}, [
		b,
		c,
		v
	]), /* @__PURE__ */ d("button", {
		type: "button",
		"aria-label": i.label,
		"aria-pressed": c,
		onClick: _,
		disabled: g,
		tabIndex: g ? -1 : void 0,
		className: e(h && !g ? "flex-1" : "shrink-0", a({ variant: "ghost" }), o({ size: "md" }), t(), "hover:bg-transparent hover:shadow-none", "active:bg-transparent active:shadow-none", "data-[pressed=true]:bg-transparent data-[pressed=true]:shadow-none"),
		children: [
			x && /* @__PURE__ */ d("span", {
				"aria-hidden": "true",
				className: "pointer-events-none absolute inset-0 rounded",
				children: [/* @__PURE__ */ u("span", {
					style: { animationDuration: "8s" },
					className: "absolute inset-0 animate-rotate-gradient rounded bg-[conic-gradient(from_var(--gradient-angle),hsla(229,57%,76%,0.7),hsla(348,80%,50%,0.7),hsla(348,80%,50%,0.7),hsla(18,80%,50%,0.7),hsla(229,57%,76%,0.7),hsla(229,57%,76%,0.7))] opacity-80 blur-sm [--gradient-angle:0deg]"
				}), /* @__PURE__ */ u("span", { className: "absolute inset-0 rounded bg-f1-background" })]
			}),
			c && /* @__PURE__ */ u(p.span, {
				layoutId: "sidebar-tab-active-pill",
				transition: y,
				"aria-hidden": "true",
				className: "absolute inset-0 rounded bg-f1-background-inverse-secondary ring-1 ring-inset ring-f1-border dark:bg-f1-background"
			}),
			/* @__PURE__ */ d("div", {
				className: "main flex h-8 min-w-0 items-center justify-center",
				children: [/* @__PURE__ */ u("span", {
					className: e("relative flex items-center text-f1-icon transition-colors", "group-hover:text-f1-icon-bold", c && "text-f1-icon-bold"),
					children: /* @__PURE__ */ u(n, {
						icon: i.icon,
						size: "md",
						color: "currentColor"
					})
				}), /* @__PURE__ */ u("span", {
					className: e("grid transition-[grid-template-columns] duration-300 ease-out motion-reduce:transition-none", f ? "grid-cols-[1fr]" : "grid-cols-[0fr]"),
					children: /* @__PURE__ */ u("span", {
						className: "min-w-0 overflow-hidden",
						children: /* @__PURE__ */ u("span", {
							className: e("block whitespace-nowrap pl-1 pr-0.5 font-semibold group-hover:text-f1-foreground transition-colors", c ? "text-f1-foreground" : "text-f1-foreground-secondary"),
							children: i.label
						})
					})
				})]
			}),
			i.badge && /* @__PURE__ */ u(m, {})
		]
	});
}, g = ({ tabs: e, activeTab: t, onTabChange: n, persistKey: r }) => {
	let a = i(), o = c(null), p = c(null), [m, g] = l(!1), _ = r ? `f0-sidebar-tab:${r}` : null, v = c(!1);
	s(() => {
		if (!_ || v.current) return;
		v.current = !0;
		let r = null;
		try {
			r = localStorage.getItem(_);
		} catch {}
		r && r !== t && e.some((e) => e.id === r) && n(r);
	}, [_]), s(() => {
		if (_) try {
			localStorage.setItem(_, t);
		} catch {}
	}, [_, t]);
	let y = e.map((e) => `${e.id}:${e.label}`).join("|");
	return s(() => {
		let e = o.current, t = p.current;
		if (!e || !t) return;
		let n = () => {
			g(t.scrollWidth <= e.clientWidth);
		};
		n();
		let r = new ResizeObserver(n);
		r.observe(e);
		for (let e of Array.from(t.children)) r.observe(e);
		return () => r.disconnect();
	}, [y]), /* @__PURE__ */ u("div", {
		className: "mb-4 flex items-stretch justify-between px-3",
		children: /* @__PURE__ */ d("div", {
			role: "group",
			ref: o,
			"aria-label": a.navigation.sidebar.tabs.label,
			className: "relative flex w-full flex-row justify-between gap-0 rounded bg-f1-background-secondary p-0",
			children: [/* @__PURE__ */ u("div", {
				ref: p,
				"aria-hidden": "true",
				className: "pointer-events-none invisible absolute left-0 top-0 flex flex-row overflow-hidden",
				children: e.map((e) => /* @__PURE__ */ u(h, {
					tab: e,
					isActive: !1,
					showLabel: !0,
					probe: !0
				}, e.id))
			}), /* @__PURE__ */ u(f, { children: e.map((e) => /* @__PURE__ */ u(h, {
				tab: e,
				isActive: e.id === t,
				showLabel: e.id === t || m,
				grow: m || e.id !== t,
				onClick: () => n(e.id)
			}, e.id)) })]
		})
	});
};
//#endregion
export { g as SidebarTabs };
