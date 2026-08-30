import { t as e } from "./dist-HAF2K0vx.js";
import { d as t } from "./OneEllipsis-DuhKMtYp.js";
import { F as n, L as r, N as i, S as a, St as o, Tt as s, _ as c, c as l, f as u, g as d, i as f, o as p, p as m, r as h, s as g, vt as _, wt as v, yt as y, z as b } from "./F0Button-BFtTqm8n.js";
import { n as x, t as S } from "./utils-CVzxZnoI.js";
import { A as C } from "./tooltip-BPSwDQpD.js";
import { F as w, I as ee, J as te, K as ne, Y as re, _n as T, t as E, yn as D } from "./F0Select-D7w3Lovd.js";
import { At as O, Ft as ie, Ot as ae, St as oe, bt as k, i as A, jt as j, m as M, o as se, p as ce, r as le, rt as ue, v as de, wt as fe } from "./F0Checkbox-B2ZT94HT.js";
import { A as pe, C as me, E as N, L as he, O as ge, T as _e, _ as ve, b as P, g as ye, p as be, v as xe, w as F, x as Se, y as I } from "./popover-DDfM6CZG.js";
import { S as Ce, _ as we, a as Te, c as Ee, d as De, g as Oe, h as ke, i as Ae, l as je, m as Me, o as Ne, p as Pe, r as Fe, s as Ie, t as Le, u as Re, x as ze } from "./progress-BJOpxq7D.js";
import { t as Be } from "./Maximize-CyNX1-Xd.js";
import { n as Ve } from "./skeleton-gsHEXIPQ.js";
import { t as He } from "./dist-DwMhXw0f.js";
import * as L from "react";
import { Fragment as Ue, createContext as We, forwardRef as R, memo as Ge, useCallback as z, useContext as B, useEffect as V, useId as Ke, useLayoutEffect as qe, useMemo as H, useRef as U, useState as W } from "react";
import Je from "react-dom";
import { Fragment as G, jsx as K, jsxs as q } from "react/jsx-runtime";
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/context/DeprecatedLayoutGroupContext.mjs
var Ye = We(null);
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/utils/use-is-mounted.mjs
function Xe() {
	let e = U(!1);
	return o(() => (e.current = !0, () => {
		e.current = !1;
	}), []), e;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/utils/use-force-update.mjs
function Ze() {
	let e = Xe(), [t, n] = W(0), r = z(() => {
		e.current && n(t + 1);
	}, [t]);
	return [z(() => _.postRender(r), [r]), t];
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/projection/node/group.mjs
var Qe = (e) => !e.isLayoutDirty && e.willUpdate(!1);
function $e() {
	let e = /* @__PURE__ */ new Set(), t = /* @__PURE__ */ new WeakMap(), n = () => e.forEach(Qe);
	return {
		add: (r) => {
			e.add(r), t.set(r, r.addEventListener("willUpdate", n));
		},
		remove: (r) => {
			e.delete(r);
			let i = t.get(r);
			i && (i(), t.delete(r)), n();
		},
		dirty: n
	};
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/components/LayoutGroup/index.mjs
var et = (e) => e === !0, tt = (e) => et(e === !0) || e === "id", nt = ({ children: e, id: t, inherit: n = !0 }) => {
	let r = B(v), i = B(Ye), [a, o] = Ze(), s = U(null), c = r.id || i;
	s.current === null && (tt(n) && c && (t = t ? c + "-" + t : c), s.current = {
		id: t,
		group: et(n) && r.group || $e()
	});
	let l = H(() => ({
		...s.current,
		forceRender: a
	}), [o]);
	return K(v.Provider, {
		value: l,
		children: e
	});
}, rt = R((e, t) => /* @__PURE__ */ q("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	fill: "none",
	viewBox: "0 0 24 24",
	ref: t,
	...e,
	children: [/* @__PURE__ */ K("path", {
		stroke: "currentColor",
		strokeLinecap: "round",
		d: "M9 20H10.4C13.7603 20 15.4405 20 16.7239 19.346C17.8529 18.7708 18.7708 17.8529 19.346 16.7239C20 15.4405 20 13.7603 20 10.4V9"
	}), /* @__PURE__ */ K("path", {
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		d: "M8 5H14C15.6569 5 17 6.34315 17 8V14C17 15.6569 15.6569 17 14 17H8C6.34315 17 5 15.6569 5 14V8C5 6.34315 6.34315 5 8 5Z"
	})]
})), it = R((e, t) => /* @__PURE__ */ K("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	fill: "none",
	viewBox: "0 0 36 36",
	ref: t,
	...e,
	children: /* @__PURE__ */ K("path", {
		fill: "#F5A51C",
		d: "M21.0778 6.85106C21.0778 6.14261 20.6191 5.51571 19.9438 5.30139C19.2686 5.08708 18.5323 5.33468 18.1237 5.91346L8.36863 19.7332C8.01836 20.2294 7.97389 20.8795 8.25333 21.4187C8.53277 21.958 9.08951 22.2966 9.6969 22.2966H14.5744V29.6129C14.5744 30.3034 15.0106 30.9185 15.6621 31.1471C16.3137 31.3756 17.0385 31.1677 17.4699 30.6286L27.2249 18.4347C27.6153 17.9467 27.6915 17.2781 27.4207 16.7148C27.15 16.1515 26.5803 15.7932 25.9554 15.7932H21.0778V6.85106Z"
	})
})), at = We(null);
function ot({ children: e, layout: t }) {
	return /* @__PURE__ */ K(at.Provider, {
		value: t,
		children: e
	});
}
function st() {
	return B(at);
}
pe("Ellipsis", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "1",
		key: "41hilf"
	}],
	["circle", {
		cx: "19",
		cy: "12",
		r: "1",
		key: "1wjl8i"
	}],
	["circle", {
		cx: "5",
		cy: "12",
		r: "1",
		key: "1pcz8c"
	}]
]);
//#endregion
//#region ../../node_modules/.pnpm/lucide-react@0.383.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/ellipsis.js
var ct = (e) => Array.isArray(e) ? e.every(lt) ? [{ items: e }] : e : [e];
function lt(e) {
	return "value" in e;
}
var ut = ({ onClick: e, value: t, items: n, size: i, variant: o, disabled: s, loading: c, tooltip: u }) => {
	let d = a(), [f, m] = W(!1), h = H(() => ct(n), [n]), _ = H(() => h.flatMap((e) => e.items), [h]), v = H(() => t || _[0]?.value, [t, _]), y = H(() => _.find((e) => e.value === v), [v, _]), b = () => {
		let t = _.find((e) => e.value === v);
		t && e(v, t);
	}, C = H(() => h.map((e) => e.items).reduce((t, n) => (t.length > 0 && t.push({ type: "separator" }), t.push(...n.filter((e) => e.value !== v).map((t) => ({
		...t,
		onClick: () => {
			e(t.value, t), m(!1);
		}
	}))), t), []), [
		h,
		e,
		v
	]), w = i === "sm" ? "[&_.main]:w-6" : i === "lg" ? "[&_.main]:w-10" : "[&_.main]:w-8";
	return y && /* @__PURE__ */ K("div", {
		className: S(s && "opacity-30"),
		children: /* @__PURE__ */ K(p, {
			onClick: b,
			variant: o,
			size: i,
			disabled: s,
			loading: c,
			"data-testid": "button-main",
			"aria-label": y.label,
			prepend: y.icon && /* @__PURE__ */ K(r, { icon: y.icon }),
			className: "rounded-r-none after:rounded-r-none disabled:opacity-100",
			tooltip: {
				label: u,
				description: y.label
			},
			appendOutside: /* @__PURE__ */ K(we, {
				items: C,
				align: "end",
				open: f && !s,
				onOpenChange: (e) => {
					s || m(e);
				},
				children: /* @__PURE__ */ K("button", {
					className: S(g({
						variant: o,
						pressed: f && !s
					}), l({ size: i }), "-translate-x-px rounded-l-none px-0 after:rounded-l-none disabled:opacity-100", w, x()),
					disabled: s,
					"data-testid": "button-menu",
					"data-pressed": f && !s,
					children: /* @__PURE__ */ q("div", {
						className: "main flex items-center justify-center gap-1",
						children: [/* @__PURE__ */ K("span", {
							className: "sr-only",
							children: d.actions.more
						}), /* @__PURE__ */ K(r, {
							icon: j,
							size: i === "sm" ? "sm" : "md"
						})]
					})
				})
			}),
			children: y.label
		})
	});
}, dt = ({ onClick: e, trigger: t, value: n, items: i, size: a, variant: o, disabled: s, loading: c, tooltip: l }) => {
	let [u, d] = W(!1), f = H(() => ct(i), [i]), m = H(() => f.flatMap((e) => e.items), [f]), h = H(() => m.find((e) => e.value === n), [n, m]), g = t || h?.label || m[0]?.label, _ = h ? {
		label: l,
		description: h.label
	} : l, v = H(() => f.map((e) => e.items).reduce((t, n) => (t.length > 0 && t.push({ type: "separator" }), t.push(...n.map((t) => ({
		...t,
		onClick: () => {
			e(t.value, t), d(!1);
		}
	}))), t), []), [f, e]);
	return g ? /* @__PURE__ */ K(we, {
		items: v,
		align: "end",
		open: u && !s,
		onOpenChange: (e) => {
			s || d(e);
		},
		children: /* @__PURE__ */ K(p, {
			variant: o,
			size: a,
			disabled: s,
			loading: c,
			"data-testid": "button-dropdown-trigger",
			"aria-label": g,
			prepend: h?.icon && /* @__PURE__ */ K(r, { icon: h.icon }),
			append: /* @__PURE__ */ K(r, {
				icon: j,
				size: a === "sm" ? "sm" : "md"
			}),
			pressed: u && !s,
			tooltip: _,
			children: g
		})
	}) : null;
}, J = t((e) => (e.mode ?? "split") === "dropdown" ? /* @__PURE__ */ K(dt, {
	onClick: e.onClick,
	trigger: "trigger" in e ? e.trigger : void 0,
	value: "value" in e ? e.value : void 0,
	items: e.items,
	size: e.size,
	variant: e.variant,
	disabled: e.disabled,
	loading: e.loading,
	tooltip: e.tooltip
}) : /* @__PURE__ */ K(ut, {
	onClick: e.onClick,
	value: "value" in e ? e.value : void 0,
	items: e.items,
	size: e.size,
	variant: e.variant,
	disabled: e.disabled,
	loading: e.loading,
	tooltip: e.tooltip
})), ft = (e) => e.type === "infinite-scroll" ? e : {
	type: "infinite-scroll",
	records: e.records,
	total: e.total,
	perPage: e.perPage,
	cursor: String(e.currentPage + 1),
	hasMore: e.currentPage < e.pagesCount,
	summaries: e.summaries
}, pt = (e, t) => te(e) ? e.map((e) => {
	let n = e.data;
	return n == null ? {
		loading: e.loading,
		error: e.error,
		data: null
	} : {
		loading: e.loading,
		error: e.error,
		data: t(n)
	};
}) : re(e) ? e.then(t) : t(e), mt = (e) => {
	if (ne(e) !== "pages") return e;
	let t = e;
	return {
		...t,
		paginationType: "infinite-scroll",
		fetchData: (e) => {
			let n = "cursor" in e.pagination ? e.pagination.cursor : null, r = Math.max(1, Number(n) || 1);
			return pt(t.fetchData({
				...e,
				pagination: {
					currentPage: r,
					perPage: e.pagination.perPage
				}
			}), ft);
		}
	};
}, ht = R(({ className: e, ...t }, n) => /* @__PURE__ */ K(Pe, {
	ref: n,
	className: S("fixed inset-0 z-50 bg-f1-background-overlay data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", e),
	...t
}));
ht.displayName = Pe.displayName;
//#endregion
//#region src/ui/Dialog/components/DialogPortal.tsx
var gt = Me, _t = R(({ wrapperClassName: e, className: t, children: n, withTranslateAnimation: r = !0, animation: i = "scale", overlayClassName: a, container: o, defaultContainerId: s = "content", ...c }, l) => {
	let [u, d] = W();
	return V(() => {
		d(o === void 0 ? document.getElementById(s) ?? document.getElementById("content") ?? document.body : o);
	}, [o, s]), u === void 0 ? null : /* @__PURE__ */ q(gt, {
		container: u,
		children: [/* @__PURE__ */ K(ht, { className: a }), /* @__PURE__ */ K(De, {
			ref: l,
			className: S("fixed inset-0 z-50 flex items-center justify-center", "pointer-events-none duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", i === "scale" && "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95", i === "scale" && r && "data-[state=closed]:slide-out-to-top-[10%] data-[state=open]:slide-in-from-top-[10%]", e),
			...c,
			children: /* @__PURE__ */ K("div", {
				className: S("relative flex w-[90%] flex-col rounded-xl bg-f1-background shadow-lg", "pointer-events-auto", t),
				children: n
			})
		})]
	});
});
_t.displayName = De.displayName;
//#endregion
//#region src/ui/Dialog/components/DialogTitle.tsx
var Y = R(({ className: e, ...t }, n) => /* @__PURE__ */ K(Oe, {
	ref: n,
	className: S("text-lg font-medium text-f1-foreground", e),
	...t
}));
Y.displayName = Oe.displayName;
//#endregion
//#region src/ui/Dialog/dialog.tsx
var vt = ke, yt = ({ position: e }) => /* @__PURE__ */ K(b.div, {
	initial: { opacity: 0 },
	animate: { opacity: .6 },
	exit: { opacity: 0 },
	transition: {
		duration: .2,
		ease: "easeOut"
	},
	className: S("pointer-events-none absolute inset-x-0 z-10 h-4", e === "top" ? [
		"top-0",
		"bg-gradient-to-b from-f1-background-secondary to-transparent",
		"after:top-0"
	] : [
		"bottom-0",
		"bg-gradient-to-t from-f1-background-secondary to-transparent",
		"after:bottom-0"
	])
}), bt = ({ children: e, disableContentPadding: t = !1 }) => {
	let { position: n } = ee(), r = U(null), [i, a] = W(!0), [o, s] = W(!0), c = z(() => {
		let e = r.current;
		if (!e) return;
		let { scrollTop: t, scrollHeight: n, clientHeight: i } = e;
		a(t <= 0), s(t + i >= n - 1);
	}, []);
	return V(() => {
		let e = r.current;
		if (!e) return;
		e.addEventListener("scroll", c, { passive: !0 }), c();
		let t = new ResizeObserver(() => c());
		return t.observe(e), () => {
			e.removeEventListener("scroll", c), t.disconnect();
		};
	}, [c]), /* @__PURE__ */ q("div", {
		className: "relative flex flex-1 flex-col overflow-hidden",
		children: [/* @__PURE__ */ q(ce, {
			viewportRef: r,
			className: S("[*[data-state=visible]_div]:bg-f1-background flex flex-1 flex-col", "[&_.resource-header]:p-0 [&_.resource-header]:pr-1", !t && "px-4 [&>div]:py-4", n === "fullscreen" && "h-full [&>div]:h-full [&>div>div]:h-full"),
			children: [/* @__PURE__ */ K(ot, {
				layout: null,
				children: e
			}), /* @__PURE__ */ K(M, {
				orientation: "vertical",
				className: "[&_div]:bg-f1-background"
			})]
		}), /* @__PURE__ */ q(y, { children: [!i && /* @__PURE__ */ K(yt, { position: "top" }, "shadow-top"), !o && /* @__PURE__ */ K(yt, { position: "bottom" }, "shadow-bottom")] })]
	});
}, xt = (e) => Array.isArray(e), St = (e) => Array.isArray(e), Ct = ({ primaryAction: e, secondaryAction: t }) => {
	let n = t, r = e;
	return !r && !n ? null : /* @__PURE__ */ q("div", {
		className: "flex flex-row items-center justify-between border-x-0 border-b-0 border-t border-solid border-f1-border-secondary px-4 py-3",
		children: [/* @__PURE__ */ K("div", { className: "flex-1" }), /* @__PURE__ */ q("div", {
			className: "flex flex-row items-center gap-2",
			children: [n ? St(t) ? /* @__PURE__ */ K(J, {
				items: t.map((e) => ({
					value: e.value,
					label: e.label,
					icon: e.icon
				})),
				onClick: (e) => {
					t.find((t) => t.value === e)?.onClick();
				},
				variant: "outline"
			}) : /* @__PURE__ */ K(h, {
				label: t.label,
				onClick: t.onClick,
				variant: "outline",
				icon: t.icon,
				iconPosition: t.iconPosition,
				disabled: t.disabled,
				loading: t.loading
			}) : null, r ? xt(e) ? /* @__PURE__ */ K(J, {
				items: e.map((e) => ({
					value: e.value,
					label: e.label,
					icon: e.icon
				})),
				onClick: (t) => {
					e.find((e) => e.value === t)?.onClick();
				},
				variant: "default"
			}) : /* @__PURE__ */ K(h, {
				label: e.label,
				onClick: e.onClick,
				variant: "default",
				icon: e.icon,
				iconPosition: e.iconPosition,
				disabled: e.disabled,
				loading: e.loading
			}) : null]
		})]
	});
}, wt = ({ description: e }) => {
	let [t, r] = W(!1), [i, o] = W(!1), s = a(), c = U(null), l = U(null), u = n({ ref: c }), d = n({ ref: l });
	return V(() => {
		d.height && u.height && o(d.height > u.height);
	}, [d.height, u.height]), /* @__PURE__ */ q("div", {
		className: "flex max-w-[640px] flex-col gap-1",
		children: [/* @__PURE__ */ q(b.div, {
			initial: !1,
			animate: { height: t ? d.height ?? u.height : u.height ?? "3rem" },
			transition: {
				duration: i ? .15 : 0,
				ease: [
					.165,
					.84,
					.44,
					1
				]
			},
			className: S(t ? "overflow-y-scroll" : "overflow-clip", "relative max-h-80"),
			children: [/* @__PURE__ */ K("div", {
				ref: l,
				className: "pointer-events-none invisible absolute left-0 top-0 -z-10 text-lg text-f1-foreground-secondary",
				"aria-hidden": "true",
				children: e
			}), /* @__PURE__ */ K("div", {
				ref: c,
				className: S("text-lg text-f1-foreground-secondary", !t && "line-clamp-2"),
				children: e
			})]
		}), (i || t) && /* @__PURE__ */ K("button", {
			onClick: () => r((e) => !e),
			className: "relative w-fit font-medium text-f1-foreground after:absolute after:-bottom-0.5 after:left-0 after:right-0 after:h-[1.5px] after:bg-f1-border after:transition-all after:content-[''] hover:after:bg-f1-border-hover",
			children: t ? s.actions.showLess : s.actions.showAll
		})]
	});
}, Tt = {
	initial: {
		scale: .9,
		opacity: 0
	},
	animate: {
		scale: 1,
		opacity: 1
	},
	exit: {
		scale: .9,
		opacity: 0
	}
}, Et = {
	duration: .15,
	ease: "easeOut"
}, Dt = R(({ valueToCopy: e, onCopy: t, copyTooltipLabel: n, copiedTooltipLabel: i, variant: o = "neutral", size: s = "sm", ...c }, l) => {
	let [u, d] = W(!1), f = a(), m = n ?? f.actions.copy, h = u ? i ?? "Copied" : m;
	return V(() => {
		let e = null;
		return u && (e = setTimeout(() => d(!1), 1e3)), () => {
			e && clearTimeout(e);
		};
	}, [u]), /* @__PURE__ */ K(p, {
		ref: l,
		variant: o,
		size: s,
		onClick: (n) => {
			n.stopPropagation(), window.navigator.clipboard.writeText(e), d(!0), t?.(n);
		},
		"aria-live": "polite",
		"aria-label": h,
		title: h,
		...c,
		compact: !0,
		children: /* @__PURE__ */ K(y, {
			mode: "wait",
			initial: !1,
			children: /* @__PURE__ */ K(b.span, {
				variants: Tt,
				initial: "initial",
				animate: "animate",
				exit: "exit",
				transition: Et,
				style: {
					display: "inline-flex",
					alignItems: "center",
					justifyContent: "center",
					verticalAlign: "middle"
				},
				children: /* @__PURE__ */ K(r, {
					size: s === "sm" ? "sm" : "md",
					icon: u ? he : rt
				})
			}, u ? "check" : "copy")
		})
	});
});
Dt.displayName = "ButtonCopy";
//#endregion
//#region src/experimental/Information/Headers/Metadata/MetadataValue.tsx
var Ot = {
	warning: {
		icon: fe,
		iconColor: "warning",
		textColor: "text-f1-foreground-warning"
	},
	critical: {
		icon: ie,
		iconColor: "critical",
		textColor: "text-f1-foreground-critical"
	}
};
function kt({ item: e, collapse: t = !1 }) {
	let { value: n } = e;
	switch (n.type) {
		case "text": return /* @__PURE__ */ K("span", { children: n.content });
		case "avatar": return /* @__PURE__ */ q("div", {
			className: "flex items-center gap-1",
			children: [/* @__PURE__ */ K(ue, {
				avatar: n.variant,
				size: "xs"
			}), n.text && /* @__PURE__ */ K("span", { children: n.text })]
		});
		case "status": return /* @__PURE__ */ K(oe, {
			text: n.label,
			variant: n.variant
		});
		case "list": return /* @__PURE__ */ K(Ae, {
			type: n.variant,
			avatars: n.avatars,
			size: "xs",
			max: n.max ?? 3
		});
		case "data-list": return t ? /* @__PURE__ */ q("div", {
			className: "flex items-center justify-center gap-1 font-medium",
			children: [n.data[0], n.data.length > 1 && /* @__PURE__ */ q("span", {
				className: "tabular-nums text-f1-foreground-secondary",
				children: ["+", n.data.length - 1]
			})]
		}) : /* @__PURE__ */ K("div", {
			className: "flex flex-col gap-1.5",
			children: n.data.map((e) => /* @__PURE__ */ K("span", { children: e }, e))
		});
		case "tag-list": return t ? /* @__PURE__ */ q("div", {
			className: "flex flex-wrap items-center justify-center gap-1 font-medium",
			children: [/* @__PURE__ */ K(A, { text: n.tags[0] }), n.tags.length > 1 && /* @__PURE__ */ q("span", {
				className: "tabular-nums text-f1-foreground-secondary",
				children: ["+", n.tags.length - 1]
			})]
		}) : /* @__PURE__ */ K("div", {
			className: S("flex flex-col gap-1 [&>div]:w-fit", n.tags.length > 1 && "-mt-[3px]"),
			children: n.tags.map((e) => /* @__PURE__ */ K(A, { text: e }, e))
		});
		case "dot-tag": return /* @__PURE__ */ K(se, {
			text: n.label,
			color: n.color
		});
		case "date": {
			if (n.icon === void 0) return /* @__PURE__ */ K("span", { children: n.formattedDate });
			let { icon: e, iconColor: t, textColor: i } = Ot[n.icon];
			return /* @__PURE__ */ q("div", {
				className: "flex items-center justify-center gap-0.5 font-medium",
				children: [/* @__PURE__ */ K(r, {
					icon: e,
					color: t
				}), /* @__PURE__ */ K("span", {
					className: i,
					children: n.formattedDate
				})]
			});
		}
		case "progress-bar": {
			let t = n.color ? Fe(n.color) : Fe("categorical-1"), r = n.max && n.max > 0 ? n.max : 100, i = Math.min(Math.max(0, n.value), r), a = i / r * 100;
			return /* @__PURE__ */ q("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ K("div", {
					className: "min-w-16",
					children: /* @__PURE__ */ K(Le, {
						color: t,
						value: a,
						max: 100,
						"aria-label": e.label,
						"aria-valuemin": 0,
						"aria-valuemax": r,
						"aria-valuenow": i,
						"aria-valuetext": n.label
					})
				}), n.label && /* @__PURE__ */ K("span", {
					className: "whitespace-nowrap text-sm font-medium",
					children: n.label
				})]
			});
		}
	}
}
//#endregion
//#region src/experimental/Information/Headers/Metadata/index.tsx
var At = (e) => e?.type !== "copy", jt = (e) => e?.type === "copy", Mt = {
	none: "gap-y-0",
	xs: "gap-y-1",
	sm: "gap-y-2",
	md: "gap-y-3"
};
function Nt({ item: e }) {
	let [t, n] = W(!1), i = e.value.type === "data-list" && e.value.data.length > 1 || e.value.type === "tag-list" && e.value.tags.length > 1, a = !!e.actions?.length, o = a || i, s = (e, t) => {
		if (t) return t;
		let n;
		switch (e.type) {
			case "text": return e.content;
			case "avatar": return e.text;
			case "status":
			case "dot-tag": return e.label;
			case "date": return e.formattedDate;
			case "tag-list": return e.tags.join(", ");
			case "data-list": return e.data.join(", ");
			case "list": return "";
			case "progress-bar": {
				let t = typeof e.max == "number" && e.max > 0 ? e.max : 100;
				return e.label ?? `${e.value}/${t}`;
			}
			default: return n = e, n;
		}
	};
	return /* @__PURE__ */ q("div", {
		className: "flex h-8 items-center gap-2",
		children: [
			e.icon && /* @__PURE__ */ K("span", {
				className: "flex shrink-0 items-center text-f1-foreground-secondary",
				children: /* @__PURE__ */ K(r, {
					icon: e.icon,
					size: "md"
				})
			}),
			/* @__PURE__ */ q("div", {
				className: S("flex w-28 items-center gap-1 truncate text-f1-foreground-secondary md:w-fit", e.hideLabel && "md:hidden"),
				children: [e.label, e.info && /* @__PURE__ */ K("div", {
					className: "flex h-4 w-4 items-center text-f1-foreground-tertiary hover:cursor-help",
					children: /* @__PURE__ */ K(c, {
						label: e.info.title,
						description: e.info.description,
						children: /* @__PURE__ */ K(r, {
							icon: ae,
							size: "sm"
						})
					})
				})]
			}),
			/* @__PURE__ */ q("div", {
				role: "button",
				tabIndex: o ? 0 : -1,
				onMouseEnter: () => o && n(!0),
				onMouseLeave: () => o && n(!1),
				onFocus: () => o && n(!0),
				onBlur: () => o && n(!1),
				className: "relative flex h-5 w-fit items-center hover:cursor-default",
				"aria-label": `${e.label} actions`,
				children: [
					/* @__PURE__ */ K("div", {
						className: S("hidden font-medium text-f1-foreground md:block", !a && "block"),
						children: /* @__PURE__ */ K(kt, {
							item: e,
							collapse: !0
						})
					}),
					a && /* @__PURE__ */ K("div", {
						className: "w-full md:hidden",
						children: /* @__PURE__ */ K(Ne, {
							items: e.actions?.filter(At).map((e) => ({
								label: e.label,
								icon: e.icon,
								onClick: e.onClick
							})) ?? [],
							children: /* @__PURE__ */ K(kt, {
								item: e,
								collapse: !0
							})
						})
					}),
					/* @__PURE__ */ K(y, { children: t && o && /* @__PURE__ */ q(b.div, {
						className: S("absolute -left-1.5 -top-1.5 z-50 hidden max-h-[80vh] items-start justify-center gap-1.5 overflow-y-auto whitespace-nowrap rounded-sm bg-f1-background py-1 pl-1.5 shadow-md ring-1 ring-inset ring-f1-border-secondary md:flex", !i && "h-8 items-start", a ? "pr-1" : "pr-1.5"),
						initial: { opacity: 0 },
						animate: { opacity: 1 },
						exit: { opacity: 0 },
						transition: { duration: .1 },
						children: [/* @__PURE__ */ K("div", {
							className: S("flex h-6 items-center font-medium text-f1-foreground", i && "h-auto items-start pt-0.5"),
							children: /* @__PURE__ */ K(kt, { item: e })
						}), a && /* @__PURE__ */ K(b.div, {
							className: "flex gap-1",
							initial: { x: -16 },
							animate: { x: 0 },
							exit: { x: -16 },
							transition: { duration: .1 },
							children: e.actions?.map((t, n) => jt(t) ? /* @__PURE__ */ K(Dt, { valueToCopy: s(e.value, t.copyValue) }, `copy-${n}`) : /* @__PURE__ */ K(c, {
								label: t.label,
								children: /* @__PURE__ */ K(h, {
									size: "sm",
									variant: "neutral",
									label: t.label,
									hideLabel: !0,
									icon: t.icon,
									onClick: t.onClick
								}, `action-${n}`)
							}, `tooltip-${n}`))
						})]
					}) })
				]
			})
		]
	});
}
var Pt = Ge(function({ items: e, rowGap: t = "none" }) {
	let n = e.filter((e) => typeof e == "object");
	return /* @__PURE__ */ K("div", {
		className: S("flex flex-col items-start gap-x-3 md:flex-row md:flex-wrap md:items-center", Mt[t]),
		children: n.map((e, t) => /* @__PURE__ */ q(Ue, { children: [/* @__PURE__ */ K(Nt, { item: e }), t < n.length - 1 && /* @__PURE__ */ K("div", { className: "hidden h-4 w-[1px] bg-f1-border md:block" })] }, `metadata-item-${t}`))
	});
}), Ft = s("Metadata", Pt), It = (e) => e.isVisible !== !1;
function Lt({ title: e, avatar: t, deactivated: n, description: r, primaryAction: i, secondaryActions: o = [], otherActions: s = [], status: c, metadata: l = [], metadataRowGap: u = "none", showBottomBorder: d = !1, onClose: f }) {
	let p = a(), m = [c && {
		label: c.label,
		value: {
			type: "status",
			label: c.text,
			variant: c.variant
		},
		actions: c.actions,
		hideLabel: !0
	}, ...l], g = o.filter(It), _ = s.filter(It), v = i && It(i), y = g.length > 0, b = _.length > 0, x = (e) => !!e && "items" in e, C = (e) => !!e && "label" in e && !("items" in e), w = (e, t) => `${Rt(e) ? `${e.value ?? "default"}-${e.items.map((e) => e.value).join("-")}` : e.label}-${t}`;
	return /* @__PURE__ */ q("div", {
		className: S("resource-header px-page flex flex-col gap-3 pb-5 pt-3", d && "border-0 border-b border-solid border-f1-border-secondary"),
		children: [/* @__PURE__ */ q("div", {
			className: S("flex flex-col items-start justify-start gap-4 md:flex-row", !r && "md:items-center"),
			children: [
				/* @__PURE__ */ q("div", {
					className: S("flex grow flex-col items-start justify-start gap-3 md:flex-row md:items-start", !r && "md:items-center"),
					children: [t && /* @__PURE__ */ K("div", {
						className: "flex items-start",
						children: /* @__PURE__ */ K(ue, {
							avatar: { ...t.type === "generic" ? {
								...t,
								type: "company"
							} : t },
							size: "xl"
						})
					}), /* @__PURE__ */ q("div", {
						className: "flex flex-col gap-1",
						children: [/* @__PURE__ */ K("span", {
							className: S("text-2xl font-semibold", n ? "text-f1-foreground/[0.61]" : "text-f1-foreground"),
							children: e
						}), r && /* @__PURE__ */ K(wt, { description: r })]
					})]
				}),
				m.length > 0 && /* @__PURE__ */ K("div", {
					className: "flex flex-wrap items-center gap-x-3 gap-y-1 md:hidden",
					children: /* @__PURE__ */ K(Ft, {
						items: m,
						rowGap: u
					})
				}),
				/* @__PURE__ */ q("div", {
					className: "flex w-full shrink-0 flex-col gap-x-2 gap-y-3 md:hidden",
					children: [
						v && C(i) && /* @__PURE__ */ K("div", {
							className: "w-full md:hidden [&>*]:w-full",
							children: /* @__PURE__ */ K(h, {
								label: i.label,
								onClick: i.onClick,
								variant: "default",
								icon: i.icon,
								size: "lg",
								disabled: i.disabled,
								tooltip: i.tooltip,
								loading: i.loading
							})
						}),
						v && x(i) && /* @__PURE__ */ K("div", {
							className: "w-full md:hidden [&>*]:w-full",
							children: /* @__PURE__ */ K(J, {
								items: i.items,
								onClick: i.onClick,
								variant: "default",
								value: i.value,
								size: "lg",
								disabled: i.disabled,
								tooltip: i.tooltip,
								loading: i.loading
							})
						}),
						g.map((e, t) => /* @__PURE__ */ K(Ue, { children: /* @__PURE__ */ K("div", {
							className: "w-full md:hidden [&>*]:w-full [&>span]:block [&>span_div]:w-full",
							children: Rt(e) ? /* @__PURE__ */ K(J, {
								items: e.items,
								onClick: e.onClick,
								variant: e.variant ?? "outline",
								value: e.value,
								size: "lg",
								disabled: e.disabled,
								tooltip: e.tooltip,
								loading: e.loading
							}) : /* @__PURE__ */ K(h, {
								label: e.label,
								onClick: e.onClick,
								variant: e.variant ?? "outline",
								icon: e.icon,
								size: "lg",
								hideLabel: e.hideLabel,
								disabled: e.disabled,
								tooltip: e.tooltip,
								loading: e.loading
							})
						}) }, w(e, t))),
						_.length > 0 && /* @__PURE__ */ K("div", {
							className: "w-full [&>*]:w-full [&_button]:w-full",
							children: /* @__PURE__ */ K(Ne, { items: _ })
						}),
						f && /* @__PURE__ */ K("div", {
							className: "w-full md:hidden [&>*]:w-full",
							children: /* @__PURE__ */ K(h, {
								label: p.actions.close,
								icon: Ce,
								variant: "outline",
								size: "lg",
								onClick: f
							})
						})
					]
				}),
				/* @__PURE__ */ q("div", {
					className: "-m-1 hidden w-fit shrink-0 flex-wrap items-center gap-x-2 gap-y-2 p-1 md:flex md:overflow-x-auto",
					children: [
						_.length > 0 && /* @__PURE__ */ K("div", { children: /* @__PURE__ */ K(Te, { items: _ }) }),
						g.map((e, t) => /* @__PURE__ */ K(Ue, { children: /* @__PURE__ */ K("div", {
							className: "hidden md:block",
							children: Rt(e) ? /* @__PURE__ */ K(J, {
								items: e.items,
								onClick: e.onClick,
								variant: e.variant ?? "outline",
								value: e.value,
								size: "md",
								disabled: e.disabled,
								tooltip: e.tooltip,
								loading: e.loading
							}) : /* @__PURE__ */ K(h, {
								label: e.label,
								onClick: e.onClick,
								variant: e.variant ?? "outline",
								icon: e.icon,
								hideLabel: e.hideLabel,
								disabled: e.disabled,
								tooltip: e.tooltip,
								loading: e.loading
							})
						}) }, w(e, t))),
						v && (y || b) && /* @__PURE__ */ K("div", { className: "mx-1 h-4 w-px bg-f1-background-secondary-hover" }),
						v && C(i) && /* @__PURE__ */ K("div", {
							className: "hidden md:block",
							children: /* @__PURE__ */ K(h, {
								label: i.label,
								onClick: i.onClick,
								variant: "default",
								icon: i.icon,
								disabled: i.disabled,
								tooltip: i.tooltip,
								loading: i.loading
							})
						}),
						v && x(i) && /* @__PURE__ */ K("div", {
							className: "hidden md:block",
							children: /* @__PURE__ */ K(J, {
								items: i.items,
								onClick: i.onClick,
								variant: "default",
								value: i.value,
								size: "md",
								disabled: i.disabled,
								tooltip: i.tooltip,
								loading: i.loading
							})
						}),
						f && /* @__PURE__ */ q(G, { children: [/* @__PURE__ */ K("div", { className: "mx-1 h-4 w-px bg-f1-background-secondary-hover" }), /* @__PURE__ */ K("div", {
							className: "hidden md:block",
							children: /* @__PURE__ */ K(h, {
								label: p.actions.close,
								hideLabel: !0,
								icon: Ce,
								variant: "outline",
								onClick: f
							})
						})] })
					]
				})
			]
		}), m.length > 0 && /* @__PURE__ */ K("div", {
			className: "hidden flex-wrap items-center gap-x-3 gap-y-1 md:block",
			children: /* @__PURE__ */ K(Ft, {
				items: m,
				rowGap: u
			})
		})]
	});
}
var Rt = (e) => "items" in e, zt = (e) => e && "type" in e && e.type === "collection-select" ? `collection-select-${e.collectionId}` : e?.id;
//#endregion
//#region src/experimental/Navigation/Header/Breadcrumbs/internal/BreadcrumbSelect/index.tsx
function Bt({ ...e }) {
	let [t, n] = W(e.open), i = (t) => {
		n(t), e.onOpenChange?.(t);
	}, a = e.placeholder || e.label, [o, s] = W(a), [c, l] = W(a);
	c !== a && (l(a), s(a));
	let u = (t, n, r) => {
		e.onChange?.(t, n, r);
	}, d = (e) => {
		s(e?.label || "");
	};
	return /* @__PURE__ */ K(E, {
		...e,
		onOpenChange: i,
		onChange: u,
		onChangeSelectedOption: d,
		label: o,
		hideLabel: !0,
		children: /* @__PURE__ */ q("button", {
			className: "flex h-6 items-center justify-between rounded-sm border px-1.5 py-0.5 font-medium text-f1-foreground no-underline transition-colors hover:bg-f1-background-secondary",
			"aria-label": o,
			children: [/* @__PURE__ */ K("span", {
				className: "block grow text-f1-foreground",
				children: o
			}), /* @__PURE__ */ K("div", {
				className: "ml-2",
				children: /* @__PURE__ */ K(b.div, {
					animate: { rotate: t ? 180 : 0 },
					className: "h-[16px] w-[16px]",
					children: /* @__PURE__ */ K(r, {
						icon: j,
						size: "sm",
						className: "rounded-2xs bg-f1-background-secondary p-0.5"
					})
				})
			})]
		})
	});
}
//#endregion
//#region src/experimental/Navigation/Header/Breadcrumbs/internal/BreadcrumbSkeleton.tsx
var Vt = R((e, t) => /* @__PURE__ */ K("div", {
	ref: t,
	className: "px-1.5",
	...e,
	children: /* @__PURE__ */ K(u, {
		className: "h-4 w-24",
		"aria-hidden": "true"
	})
}));
Vt.displayName = "BreadcrumbSkeleton";
//#endregion
//#region src/ui/breadcrumb.tsx
var Ht = R(({ ...e }, t) => /* @__PURE__ */ K("nav", {
	ref: t,
	"aria-label": "breadcrumb",
	...e
}));
Ht.displayName = "Breadcrumb";
var Ut = R(({ className: e, children: t, ...n }, r) => {
	let i = Ke();
	return /* @__PURE__ */ K("ol", {
		ref: r,
		className: S("flex h-8 list-none flex-nowrap items-center text-f1-foreground-secondary", e),
		...n,
		children: /* @__PURE__ */ K(nt, {
			id: i,
			children: /* @__PURE__ */ K(y, {
				initial: !1,
				children: t
			})
		})
	});
});
Ut.displayName = "BreadcrumbList";
var Wt = ({ className: e, ...t }) => /* @__PURE__ */ K("li", {
	className: S("inline-flex items-center gap-0.5 pr-1", e),
	...t
});
Wt.displayName = "BreadcrumbItem";
var Gt = R(({ asChild: e, className: t, ...n }, r) => /* @__PURE__ */ K(e ? C : m, {
	ref: r,
	className: S("rounded-sm px-1.5 py-0.5 font-medium text-f1-foreground no-underline transition-colors hover:bg-f1-background-secondary", t),
	...n
}));
Gt.displayName = "BreadcrumbLink";
var Kt = R(({ className: e, ...t }, n) => /* @__PURE__ */ K("span", {
	ref: n,
	role: "link",
	"aria-disabled": "true",
	"aria-current": "page",
	className: S("truncate px-1.5 py-0.5 text-f1-foreground", e),
	...t
}));
Kt.displayName = "BreadcrumbPage";
var qt = (e) => `datacollection-${e}`, Jt = {
	get: () => ({}),
	set: () => Promise.resolve()
}, Yt = We(Jt), Xt = ({ children: e, handler: t }) => /* @__PURE__ */ K(Yt.Provider, {
	value: t ?? Jt,
	children: e
}), Zt = () => {
	let e = B(Yt);
	if (!e) throw Error("useDataCollectionStorage must be used within a DataCollectionStorageProvider");
	return e;
}, Qt = /* @__PURE__ */ new Map(), $t = (e, t) => {
	let n = Qt.get(e);
	return n || (n = /* @__PURE__ */ new Set(), Qt.set(e, n)), n.add(t), () => {
		n.delete(t), n.size === 0 && Qt.delete(e);
	};
}, en = (e) => {
	Qt.get(e)?.forEach((e) => e());
}, tn = (e) => {
	try {
		let t = localStorage.getItem(qt(e));
		return t === null ? null : JSON.parse(t);
	} catch {
		return null;
	}
}, nn = (e) => {
	if (e) return e.visualizationFilters?.[String(e.visualization ?? 0)] ?? e.filters;
}, rn = (e, t) => {
	let n = String(e.visualization ?? 0), r = e.visualizationFilters?.[n] !== void 0;
	return {
		...e,
		filters: t,
		...r ? { visualizationFilters: {
			...e.visualizationFilters,
			[n]: t
		} } : {}
	};
};
//#endregion
//#region src/experimental/Navigation/Header/Breadcrumbs/internal/BreadcrumbCollectionSelect/buildCollectionBoundSource.ts
function an(e, t, n) {
	let r = n?.seed?.filters ?? !0, i = n?.seed?.sortings ?? !0, a = n?.showFilters ?? !1, o = e.currentFilters;
	if (r && t) {
		let n = nn(t);
		if (n !== void 0) {
			let t = e.filters, r = t ? Object.fromEntries(Object.entries(n).filter(([e]) => e in t)) : n;
			(Object.keys(r).length > 0 || Object.keys(n).length === 0) && (o = r);
		}
	}
	let s = e.currentSortings;
	i && t && t.sortings !== void 0 && (t.sortings === null ? s = null : e.sortings && t.sortings.field in e.sortings && (s = {
		field: t.sortings.field,
		order: t.sortings.order
	}));
	let { filters: c, presets: l, presetsLoading: u, ...d } = e;
	return {
		...d,
		...a && c ? { filters: c } : {},
		currentFilters: o,
		currentSortings: s,
		dataAdapter: mt(e.dataAdapter)
	};
}
//#endregion
//#region src/experimental/Navigation/Header/Breadcrumbs/internal/BreadcrumbCollectionSelect/index.tsx
function on({ item: e }) {
	let [t] = W(() => an(e.source, tn(e.collectionId), {
		seed: e.seed,
		showFilters: e.showFilters
	})), n = U(e);
	n.current = e;
	let r = Zt(), i = U(r);
	i.current = r;
	let a = z((e) => n.current.mapOptions(e), []), o = z((e) => {
		let t = n.current;
		t.onFiltersChange?.(e), t.showFilters && (async () => {
			let n = await i.current.get(t.collectionId);
			await i.current.set(t.collectionId, rn(n ?? {}, e)), en(t.collectionId);
		})().catch(() => {});
	}, []), [s, c] = W(null), l = U(null);
	qe(() => {
		s && (l.current?.click(), c(null));
	}, [s]);
	let u = z((e, t) => {
		let r = n.current;
		if (e === void 0 || e === r.value) return;
		let i = r.getItemHref?.(e, t);
		i && c(i), r.onSelect?.(e, t);
	}, []);
	return /* @__PURE__ */ q(G, { children: [/* @__PURE__ */ K(Bt, {
		label: e.label,
		hideLabel: !0,
		source: t,
		mapOptions: a,
		defaultItem: e.defaultItem,
		clearable: !1,
		onChange: u,
		value: e.value,
		showSearchBox: e.searchbox,
		onFiltersChange: o
	}), s && /* @__PURE__ */ K(m, {
		href: s,
		ref: l,
		tabIndex: -1,
		"aria-hidden": !0,
		className: "hidden"
	})] });
}
//#endregion
//#region src/experimental/Navigation/Header/Breadcrumbs/internal/BreadcrumbSeparator.tsx
var sn = R((e, t) => /* @__PURE__ */ K("span", {
	ref: t,
	role: "presentation",
	"aria-hidden": "true",
	className: "h-4 w-4 text-f1-icon-secondary",
	...e,
	children: /* @__PURE__ */ K(O, {})
}));
sn.displayName = "BreadcrumbSeparator";
//#endregion
//#region src/experimental/Navigation/Header/Breadcrumbs/internal/BreadcrumbItem.tsx
var cn = R(({ item: e, isLast: t, isOnly: n = !1, isFirst: r = !1, children: i }, a) => /* @__PURE__ */ q(Wt, {
	ref: a,
	children: [
		!r && /* @__PURE__ */ K(sn, {}),
		/* @__PURE__ */ K(ln, {
			item: e,
			isLast: t,
			isOnly: n,
			isFirst: r
		}),
		i
	]
}, zt(e)));
cn.displayName = "BreadcrumbItem";
var ln = R(({ item: e, isLast: t, isOnly: n = !1, isFirst: r = !1 }, i) => {
	let a = "loading" in e && e.loading, o = a ? "loading" : "type" in e && e.type ? e.type : t || n ? "page" : "link", s = /* @__PURE__ */ q(b.div, {
		layoutId: `breadcrumb-${e.id}`,
		className: S("flex items-center gap-2 px-1.5", r && "pl-0", n && "text-2xl font-semibold"),
		transition: { duration: .15 },
		children: [!a && "module" in e && e.module && (n || r) && /* @__PURE__ */ K(k, {
			module: e.module,
			size: n ? "md" : "xs"
		}), /* @__PURE__ */ K("span", {
			className: "truncate",
			children: !a && "label" in e ? e.label : ""
		})]
	}), c = {
		loading: /* @__PURE__ */ K(Vt, {}),
		select: "type" in e && e.type === "select" && (e.options || e.source) && /* @__PURE__ */ K(G, { children: /* @__PURE__ */ K(Bt, {
			label: e.label,
			hideLabel: !0,
			source: e.source,
			options: e.options,
			mapOptions: e.mapOptions,
			defaultItem: e.defaultItem,
			clearable: !1,
			onChange: e.onChange,
			value: e.value,
			showSearchBox: e.searchbox
		}) }),
		"collection-select": "type" in e && e.type === "collection-select" && /* @__PURE__ */ K(on, { item: e }),
		page: /* @__PURE__ */ K(Kt, {
			"aria-hidden": "true",
			className: "p-0",
			children: s
		}),
		link: /* @__PURE__ */ K(Gt, {
			asChild: !0,
			className: "p-0",
			children: /* @__PURE__ */ K(m, {
				..."href" in e && !("type" in e) ? e : {},
				className: "block",
				children: s
			})
		})
	}, l = o === "select" || o === "collection-select";
	return /* @__PURE__ */ K(b.div, {
		ref: i,
		layout: !l,
		className: S(a && "max-w-40"),
		transition: { duration: .15 },
		children: c[o]
	});
});
ln.displayName = "BreadcrumbContent";
//#endregion
//#region src/experimental/Navigation/Header/PageNavigation/index.tsx
function un({ icon: e, target: t, fallbackLabel: n }) {
	let r = !t, i = t?.title || n, a = t?.onClick, o = a ? void 0 : t?.url;
	return /* @__PURE__ */ K(f, {
		...a ? {
			onClick: a,
			type: "button"
		} : { href: o ?? "" },
		title: r ? void 0 : i,
		"aria-label": i,
		disabled: r,
		noAutoTooltip: r,
		noTitle: r,
		size: "sm",
		variant: "outline",
		label: i,
		icon: e,
		hideLabel: !0
	});
}
function dn({ previous: e, next: t, counter: n }) {
	return /* @__PURE__ */ q("div", {
		className: "flex items-center gap-3",
		children: [n && /* @__PURE__ */ q("span", {
			className: "text-sm text-f1-foreground-secondary",
			children: [
				n.current,
				"/",
				n.total
			]
		}), /* @__PURE__ */ q("div", {
			className: "flex items-center gap-2",
			children: [/* @__PURE__ */ K(un, {
				icon: T,
				target: e,
				fallbackLabel: "Previous"
			}), /* @__PURE__ */ K(un, {
				icon: O,
				target: t,
				fallbackLabel: "Next"
			})]
		})]
	});
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-visually-hidden@1.1.1_@types+react-dom@18.3.1_@types+react@18.3.18_reac_6232f8da9b78ecdf4e0098cbb7814d3f/node_modules/@radix-ui/react-visually-hidden/dist/index.mjs
var fn = "VisuallyHidden", pn = L.forwardRef((e, t) => /* @__PURE__ */ K(P.span, {
	...e,
	ref: t,
	style: {
		position: "absolute",
		border: 0,
		width: 1,
		height: 1,
		padding: 0,
		margin: -1,
		overflow: "hidden",
		clip: "rect(0, 0, 0, 0)",
		whiteSpace: "nowrap",
		wordWrap: "normal",
		...e.style
	}
}));
pn.displayName = fn;
var mn = pn, X = "NavigationMenu", [hn, gn, _n] = He(X), [vn, yn, bn] = He(X), [xn, Sn] = ge(X, [_n, bn]), [Cn, Z] = xn(X), [wn, Tn] = xn(X), En = L.forwardRef((e, t) => {
	let { __scopeNavigationMenu: n, value: r, onValueChange: i, defaultValue: a, delayDuration: o = 200, skipDelayDuration: s = 300, orientation: c = "horizontal", dir: l, ...u } = e, [d, f] = L.useState(null), p = F(t, (e) => f(e)), m = de(l), h = L.useRef(0), g = L.useRef(0), _ = L.useRef(0), [v, y] = L.useState(!0), [b = "", x] = ve({
		prop: r,
		onChange: (e) => {
			let t = e !== "", n = s > 0;
			t ? (window.clearTimeout(_.current), n && y(!1)) : (window.clearTimeout(_.current), _.current = window.setTimeout(() => y(!0), s)), i?.(e);
		},
		defaultProp: a
	}), S = L.useCallback(() => {
		window.clearTimeout(g.current), g.current = window.setTimeout(() => x(""), 150);
	}, [x]), C = L.useCallback((e) => {
		window.clearTimeout(g.current), x(e);
	}, [x]), w = L.useCallback((e) => {
		b === e ? window.clearTimeout(g.current) : h.current = window.setTimeout(() => {
			window.clearTimeout(g.current), x(e);
		}, o);
	}, [
		b,
		x,
		o
	]);
	return L.useEffect(() => () => {
		window.clearTimeout(h.current), window.clearTimeout(g.current), window.clearTimeout(_.current);
	}, []), /* @__PURE__ */ K(kn, {
		scope: n,
		isRootMenu: !0,
		value: b,
		dir: m,
		orientation: c,
		rootNavigationMenu: d,
		onTriggerEnter: (e) => {
			window.clearTimeout(h.current), v ? w(e) : C(e);
		},
		onTriggerLeave: () => {
			window.clearTimeout(h.current), S();
		},
		onContentEnter: () => window.clearTimeout(g.current),
		onContentLeave: S,
		onItemSelect: (e) => {
			x((t) => t === e ? "" : e);
		},
		onItemDismiss: () => x(""),
		children: /* @__PURE__ */ K(P.nav, {
			"aria-label": "Main",
			"data-orientation": c,
			dir: m,
			...u,
			ref: p
		})
	});
});
En.displayName = X;
var Dn = "NavigationMenuSub", On = L.forwardRef((e, t) => {
	let { __scopeNavigationMenu: n, value: r, onValueChange: i, defaultValue: a, orientation: o = "horizontal", ...s } = e, c = Z(Dn, n), [l = "", u] = ve({
		prop: r,
		onChange: i,
		defaultProp: a
	});
	return /* @__PURE__ */ K(kn, {
		scope: n,
		isRootMenu: !1,
		value: l,
		dir: c.dir,
		orientation: o,
		rootNavigationMenu: c.rootNavigationMenu,
		onTriggerEnter: (e) => u(e),
		onItemSelect: (e) => u(e),
		onItemDismiss: () => u(""),
		children: /* @__PURE__ */ K(P.div, {
			"data-orientation": o,
			...s,
			ref: t
		})
	});
});
On.displayName = Dn;
var kn = (e) => {
	let { scope: t, isRootMenu: n, rootNavigationMenu: r, dir: i, orientation: a, children: o, value: s, onItemSelect: c, onItemDismiss: l, onTriggerEnter: u, onTriggerLeave: d, onContentEnter: f, onContentLeave: p } = e, [m, h] = L.useState(null), [g, _] = L.useState(/* @__PURE__ */ new Map()), [v, y] = L.useState(null);
	return /* @__PURE__ */ K(Cn, {
		scope: t,
		isRootMenu: n,
		rootNavigationMenu: r,
		value: s,
		previousValue: le(s),
		baseId: xe(),
		dir: i,
		orientation: a,
		viewport: m,
		onViewportChange: h,
		indicatorTrack: v,
		onIndicatorTrackChange: y,
		onTriggerEnter: N(u),
		onTriggerLeave: N(d),
		onContentEnter: N(f),
		onContentLeave: N(p),
		onItemSelect: N(c),
		onItemDismiss: N(l),
		onViewportContentChange: L.useCallback((e, t) => {
			_((n) => (n.set(e, t), new Map(n)));
		}, []),
		onViewportContentRemove: L.useCallback((e) => {
			_((t) => t.has(e) ? (t.delete(e), new Map(t)) : t);
		}, []),
		children: /* @__PURE__ */ K(hn.Provider, {
			scope: t,
			children: /* @__PURE__ */ K(wn, {
				scope: t,
				items: g,
				children: o
			})
		})
	});
}, An = "NavigationMenuList", jn = L.forwardRef((e, t) => {
	let { __scopeNavigationMenu: n, ...r } = e, i = Z(An, n), a = /* @__PURE__ */ K(P.ul, {
		"data-orientation": i.orientation,
		...r,
		ref: t
	});
	return /* @__PURE__ */ K(P.div, {
		style: { position: "relative" },
		ref: i.onIndicatorTrackChange,
		children: /* @__PURE__ */ K(hn.Slot, {
			scope: n,
			children: i.isRootMenu ? /* @__PURE__ */ K(Qn, {
				asChild: !0,
				children: a
			}) : a
		})
	});
});
jn.displayName = An;
var Mn = "NavigationMenuItem", [Nn, Pn] = xn(Mn), Fn = L.forwardRef((e, t) => {
	let { __scopeNavigationMenu: n, value: r, ...i } = e, a = xe(), o = r || a || "LEGACY_REACT_AUTO_VALUE", s = L.useRef(null), c = L.useRef(null), l = L.useRef(null), u = L.useRef(() => {}), d = L.useRef(!1), f = L.useCallback((e = "start") => {
		if (s.current) {
			u.current();
			let t = nr(s.current);
			t.length && rr(e === "start" ? t : t.reverse());
		}
	}, []), p = L.useCallback(() => {
		if (s.current) {
			let e = nr(s.current);
			e.length && (u.current = ir(e));
		}
	}, []);
	return /* @__PURE__ */ K(Nn, {
		scope: n,
		value: o,
		triggerRef: c,
		contentRef: s,
		focusProxyRef: l,
		wasEscapeCloseRef: d,
		onEntryKeyDown: f,
		onFocusProxyEnter: f,
		onRootContentClose: p,
		onContentFocusOutside: p,
		children: /* @__PURE__ */ K(P.li, {
			...i,
			ref: t
		})
	});
});
Fn.displayName = Mn;
var In = "NavigationMenuTrigger", Ln = L.forwardRef((e, t) => {
	let { __scopeNavigationMenu: n, disabled: r, ...i } = e, a = Z(In, e.__scopeNavigationMenu), o = Pn(In, e.__scopeNavigationMenu), s = L.useRef(null), c = F(s, o.triggerRef, t), l = sr(a.baseId, o.value), u = cr(a.baseId, o.value), d = L.useRef(!1), f = L.useRef(!1), p = o.value === a.value;
	return /* @__PURE__ */ q(G, { children: [/* @__PURE__ */ K(hn.ItemSlot, {
		scope: n,
		value: o.value,
		children: /* @__PURE__ */ K(tr, {
			asChild: !0,
			children: /* @__PURE__ */ K(P.button, {
				id: l,
				disabled: r,
				"data-disabled": r ? "" : void 0,
				"data-state": or(p),
				"aria-expanded": p,
				"aria-controls": u,
				...i,
				ref: c,
				onPointerEnter: I(e.onPointerEnter, () => {
					f.current = !1, o.wasEscapeCloseRef.current = !1;
				}),
				onPointerMove: I(e.onPointerMove, lr(() => {
					r || f.current || o.wasEscapeCloseRef.current || d.current || (a.onTriggerEnter(o.value), d.current = !0);
				})),
				onPointerLeave: I(e.onPointerLeave, lr(() => {
					r || (a.onTriggerLeave(), d.current = !1);
				})),
				onClick: I(e.onClick, () => {
					a.onItemSelect(o.value), f.current = p;
				}),
				onKeyDown: I(e.onKeyDown, (e) => {
					let t = {
						horizontal: "ArrowDown",
						vertical: a.dir === "rtl" ? "ArrowLeft" : "ArrowRight"
					}[a.orientation];
					p && e.key === t && (o.onEntryKeyDown(), e.preventDefault());
				})
			})
		})
	}), p && /* @__PURE__ */ q(G, { children: [/* @__PURE__ */ K(mn, {
		"aria-hidden": !0,
		tabIndex: 0,
		ref: o.focusProxyRef,
		onFocus: (e) => {
			let t = o.contentRef.current, n = e.relatedTarget, r = n === s.current, i = t?.contains(n);
			(r || !i) && o.onFocusProxyEnter(r ? "start" : "end");
		}
	}), a.viewport && /* @__PURE__ */ K("span", { "aria-owns": u })] })] });
});
Ln.displayName = In;
var Rn = "NavigationMenuLink", zn = "navigationMenu.linkSelect", Bn = L.forwardRef((e, t) => {
	let { __scopeNavigationMenu: n, active: r, onSelect: i, ...a } = e;
	return /* @__PURE__ */ K(tr, {
		asChild: !0,
		children: /* @__PURE__ */ K(P.a, {
			"data-active": r ? "" : void 0,
			"aria-current": r ? "page" : void 0,
			...a,
			ref: t,
			onClick: I(e.onClick, (e) => {
				let t = e.target, n = new CustomEvent(zn, {
					bubbles: !0,
					cancelable: !0
				});
				if (t.addEventListener(zn, (e) => i?.(e), { once: !0 }), Se(t, n), !n.defaultPrevented && !e.metaKey) {
					let e = new CustomEvent(Kn, {
						bubbles: !0,
						cancelable: !0
					});
					Se(t, e);
				}
			}, { checkForDefaultPrevented: !1 })
		})
	});
});
Bn.displayName = Rn;
var Vn = "NavigationMenuIndicator", Hn = L.forwardRef((e, t) => {
	let { forceMount: n, ...r } = e, i = Z(Vn, e.__scopeNavigationMenu), a = !!i.value;
	return i.indicatorTrack ? Je.createPortal(/* @__PURE__ */ K(be, {
		present: n || a,
		children: /* @__PURE__ */ K(Un, {
			...r,
			ref: t
		})
	}), i.indicatorTrack) : null;
});
Hn.displayName = Vn;
var Un = L.forwardRef((e, t) => {
	let { __scopeNavigationMenu: n, ...r } = e, i = Z(Vn, n), a = gn(n), [o, s] = L.useState(null), [c, l] = L.useState(null), u = i.orientation === "horizontal", d = !!i.value;
	L.useEffect(() => {
		let e = a().find((e) => e.value === i.value)?.ref.current;
		e && s(e);
	}, [a, i.value]);
	let f = () => {
		o && l({
			size: u ? o.offsetWidth : o.offsetHeight,
			offset: u ? o.offsetLeft : o.offsetTop
		});
	};
	return ar(o, f), ar(i.indicatorTrack, f), c ? /* @__PURE__ */ K(P.div, {
		"aria-hidden": !0,
		"data-state": d ? "visible" : "hidden",
		"data-orientation": i.orientation,
		...r,
		ref: t,
		style: {
			position: "absolute",
			...u ? {
				left: 0,
				width: c.size + "px",
				transform: `translateX(${c.offset}px)`
			} : {
				top: 0,
				height: c.size + "px",
				transform: `translateY(${c.offset}px)`
			},
			...r.style
		}
	}) : null;
}), Q = "NavigationMenuContent", Wn = L.forwardRef((e, t) => {
	let { forceMount: n, ...r } = e, i = Z(Q, e.__scopeNavigationMenu), a = Pn(Q, e.__scopeNavigationMenu), o = F(a.contentRef, t), s = a.value === i.value, c = {
		value: a.value,
		triggerRef: a.triggerRef,
		focusProxyRef: a.focusProxyRef,
		wasEscapeCloseRef: a.wasEscapeCloseRef,
		onContentFocusOutside: a.onContentFocusOutside,
		onRootContentClose: a.onRootContentClose,
		...r
	};
	return i.viewport ? /* @__PURE__ */ K(Gn, {
		forceMount: n,
		...c,
		ref: o
	}) : /* @__PURE__ */ K(be, {
		present: n || s,
		children: /* @__PURE__ */ K(qn, {
			"data-state": or(s),
			...c,
			ref: o,
			onPointerEnter: I(e.onPointerEnter, i.onContentEnter),
			onPointerLeave: I(e.onPointerLeave, lr(i.onContentLeave)),
			style: {
				pointerEvents: !s && i.isRootMenu ? "none" : void 0,
				...c.style
			}
		})
	});
});
Wn.displayName = Q;
var Gn = L.forwardRef((e, t) => {
	let { onViewportContentChange: n, onViewportContentRemove: r } = Z(Q, e.__scopeNavigationMenu);
	return _e(() => {
		n(e.value, {
			ref: t,
			...e
		});
	}, [
		e,
		t,
		n
	]), _e(() => () => r(e.value), [e.value, r]), null;
}), Kn = "navigationMenu.rootContentDismiss", qn = L.forwardRef((e, t) => {
	let { __scopeNavigationMenu: n, value: r, triggerRef: i, focusProxyRef: a, wasEscapeCloseRef: o, onRootContentClose: s, onContentFocusOutside: c, ...l } = e, u = Z(Q, n), d = L.useRef(null), f = F(d, t), p = sr(u.baseId, r), m = cr(u.baseId, r), h = gn(n), g = L.useRef(null), { onItemDismiss: _ } = u;
	L.useEffect(() => {
		let e = d.current;
		if (u.isRootMenu && e) {
			let t = () => {
				_(), s(), e.contains(document.activeElement) && i.current?.focus();
			};
			return e.addEventListener(Kn, t), () => e.removeEventListener(Kn, t);
		}
	}, [
		u.isRootMenu,
		e.value,
		i,
		_,
		s
	]);
	let v = L.useMemo(() => {
		let e = h().map((e) => e.value);
		u.dir === "rtl" && e.reverse();
		let t = e.indexOf(u.value), n = e.indexOf(u.previousValue), i = r === u.value, a = n === e.indexOf(r);
		if (!i && !a) return g.current;
		let o = (() => {
			if (t !== n) {
				if (i && n !== -1) return t > n ? "from-end" : "from-start";
				if (a && t !== -1) return t > n ? "to-start" : "to-end";
			}
			return null;
		})();
		return g.current = o, o;
	}, [
		u.previousValue,
		u.value,
		u.dir,
		h,
		r
	]);
	return /* @__PURE__ */ K(Qn, {
		asChild: !0,
		children: /* @__PURE__ */ K(ye, {
			id: m,
			"aria-labelledby": p,
			"data-motion": v,
			"data-orientation": u.orientation,
			...l,
			ref: f,
			disableOutsidePointerEvents: !1,
			onDismiss: () => {
				let e = new Event(Kn, {
					bubbles: !0,
					cancelable: !0
				});
				d.current?.dispatchEvent(e);
			},
			onFocusOutside: I(e.onFocusOutside, (e) => {
				c();
				let t = e.target;
				u.rootNavigationMenu?.contains(t) && e.preventDefault();
			}),
			onPointerDownOutside: I(e.onPointerDownOutside, (e) => {
				let t = e.target, n = h().some((e) => e.ref.current?.contains(t)), r = u.isRootMenu && u.viewport?.contains(t);
				(n || r || !u.isRootMenu) && e.preventDefault();
			}),
			onKeyDown: I(e.onKeyDown, (e) => {
				let t = e.altKey || e.ctrlKey || e.metaKey;
				if (e.key === "Tab" && !t) {
					let t = nr(e.currentTarget), n = document.activeElement, r = t.findIndex((e) => e === n);
					rr(e.shiftKey ? t.slice(0, r).reverse() : t.slice(r + 1, t.length)) ? e.preventDefault() : a.current?.focus();
				}
			}),
			onEscapeKeyDown: I(e.onEscapeKeyDown, (e) => {
				o.current = !0;
			})
		})
	});
}), Jn = "NavigationMenuViewport", Yn = L.forwardRef((e, t) => {
	let { forceMount: n, ...r } = e, i = !!Z(Jn, e.__scopeNavigationMenu).value;
	return /* @__PURE__ */ K(be, {
		present: n || i,
		children: /* @__PURE__ */ K(Xn, {
			...r,
			ref: t
		})
	});
});
Yn.displayName = Jn;
var Xn = L.forwardRef((e, t) => {
	let { __scopeNavigationMenu: n, children: r, ...i } = e, a = Z(Jn, n), o = F(t, a.onViewportChange), s = Tn(Q, e.__scopeNavigationMenu), [c, l] = L.useState(null), [u, d] = L.useState(null), f = c ? c?.width + "px" : void 0, p = c ? c?.height + "px" : void 0, m = !!a.value, h = m ? a.value : a.previousValue;
	return ar(u, () => {
		u && l({
			width: u.offsetWidth,
			height: u.offsetHeight
		});
	}), /* @__PURE__ */ K(P.div, {
		"data-state": or(m),
		"data-orientation": a.orientation,
		...i,
		ref: o,
		style: {
			pointerEvents: !m && a.isRootMenu ? "none" : void 0,
			"--radix-navigation-menu-viewport-width": f,
			"--radix-navigation-menu-viewport-height": p,
			...i.style
		},
		onPointerEnter: I(e.onPointerEnter, a.onContentEnter),
		onPointerLeave: I(e.onPointerLeave, lr(a.onContentLeave)),
		children: Array.from(s.items).map(([e, { ref: t, forceMount: n, ...r }]) => {
			let i = h === e;
			return /* @__PURE__ */ K(be, {
				present: n || i,
				children: /* @__PURE__ */ K(qn, {
					...r,
					ref: me(t, (e) => {
						i && e && d(e);
					})
				})
			}, e);
		})
	});
}), Zn = "FocusGroup", Qn = L.forwardRef((e, t) => {
	let { __scopeNavigationMenu: n, ...r } = e, i = Z(Zn, n);
	return /* @__PURE__ */ K(vn.Provider, {
		scope: n,
		children: /* @__PURE__ */ K(vn.Slot, {
			scope: n,
			children: /* @__PURE__ */ K(P.div, {
				dir: i.dir,
				...r,
				ref: t
			})
		})
	});
}), $n = [
	"ArrowRight",
	"ArrowLeft",
	"ArrowUp",
	"ArrowDown"
], er = "FocusGroupItem", tr = L.forwardRef((e, t) => {
	let { __scopeNavigationMenu: n, ...r } = e, i = yn(n), a = Z(er, n);
	return /* @__PURE__ */ K(vn.ItemSlot, {
		scope: n,
		children: /* @__PURE__ */ K(P.button, {
			...r,
			ref: t,
			onKeyDown: I(e.onKeyDown, (e) => {
				if ([
					"Home",
					"End",
					...$n
				].includes(e.key)) {
					let t = i().map((e) => e.ref.current);
					if ([
						a.dir === "rtl" ? "ArrowRight" : "ArrowLeft",
						"ArrowUp",
						"End"
					].includes(e.key) && t.reverse(), $n.includes(e.key)) {
						let n = t.indexOf(e.currentTarget);
						t = t.slice(n + 1);
					}
					setTimeout(() => rr(t)), e.preventDefault();
				}
			})
		})
	});
});
function nr(e) {
	let t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: (e) => {
		let t = e.tagName === "INPUT" && e.type === "hidden";
		return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
	} });
	for (; n.nextNode();) t.push(n.currentNode);
	return t;
}
function rr(e) {
	let t = document.activeElement;
	return e.some((e) => e === t || (e.focus(), document.activeElement !== t));
}
function ir(e) {
	return e.forEach((e) => {
		e.dataset.tabindex = e.getAttribute("tabindex") || "", e.setAttribute("tabindex", "-1");
	}), () => {
		e.forEach((e) => {
			let t = e.dataset.tabindex;
			e.setAttribute("tabindex", t);
		});
	};
}
function ar(e, t) {
	let n = N(t);
	_e(() => {
		let t = 0;
		if (e) {
			let r = new ResizeObserver(() => {
				cancelAnimationFrame(t), t = window.requestAnimationFrame(n);
			});
			return r.observe(e), () => {
				window.cancelAnimationFrame(t), r.unobserve(e);
			};
		}
	}, [e, n]);
}
function or(e) {
	return e ? "open" : "closed";
}
function sr(e, t) {
	return `${e}-trigger-${t}`;
}
function cr(e, t) {
	return `${e}-content-${t}`;
}
function lr(e) {
	return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var ur = En, dr = jn, fr = Fn, pr = Bn;
//#endregion
//#region src/ui/tab-navigation.tsx
function mr(e, t) {
	let { asChild: n, children: r } = e;
	if (!n) return typeof t == "function" ? t(r) : t;
	let i = L.Children.only(r);
	return L.cloneElement(i, { children: typeof t == "function" ? t(i.props.children) : t });
}
var hr = e({
	base: "relative flex items-center justify-start gap-1 overflow-x-auto whitespace-nowrap px-page py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
	variants: { secondary: {
		true: "bg-f1-foreground/[.02] dark:bg-f1-foreground/[.02]",
		false: "bg-f1-background-transparent pt-1"
	} },
	defaultVariants: { secondary: !1 }
}), gr = L.forwardRef(({ className: e, children: t, secondary: n, ...r }, i) => {
	let a = Ke();
	return /* @__PURE__ */ q(ur, {
		ref: i,
		...r,
		asChild: !1,
		className: "relative",
		children: [/* @__PURE__ */ K("div", { className: "absolute inset-x-0 bottom-0 left-0 right-0 h-px bg-f1-border-secondary" }), /* @__PURE__ */ K(nt, {
			id: a,
			children: /* @__PURE__ */ K(dr, {
				className: S(hr({ secondary: n }), e),
				children: t
			})
		})]
	});
});
gr.displayName = "TabNavigation";
var _r = e({
	base: "flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 font-medium transition-all",
	variants: {
		secondary: {
			true: "group-hover:ring-f1-border group-data-[active=true]:bg-f1-background-inverse-secondary dark:group-data-[active=true]:bg-f1-background-tertiary group-data-[active=true]:text-f1-foreground group-data-[active=true]:ring-f1-border",
			false: "bg-f1-background-transparent group-hover:bg-f1-background-tertiary group-hover:text-f1-foreground group-data-[active=true]:bg-f1-background-tertiary group-data-[active=true]:text-f1-foreground"
		},
		disabled: { true: "pointer-events-none text-f1-foreground-disabled" }
	},
	defaultVariants: {
		secondary: !1,
		disabled: !1
	}
}), vr = L.forwardRef(function({ asChild: e, disabled: t, active: n, className: r, children: i, secondary: a, ...o }, s) {
	return /* @__PURE__ */ K(fr, {
		className: "flex",
		children: /* @__PURE__ */ K(pr, {
			"data-active": n ? "true" : void 0,
			"aria-disabled": t || void 0,
			className: S("group relative flex shrink-0 select-none items-center justify-center rounded-md no-underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1", t ? "pointer-events-none" : ""),
			ref: s,
			onSelect: () => {},
			asChild: e,
			...o,
			children: mr({
				asChild: e,
				children: i
			}, (e) => /* @__PURE__ */ q("span", {
				className: S("text-f1-foreground-secondary ring-1 ring-inset ring-transparent", _r({
					secondary: a,
					disabled: t
				}), r),
				children: [e, n && !a && /* @__PURE__ */ K(b.div, {
					layoutId: "underline",
					className: "absolute inset-x-0 -bottom-3 h-px bg-f1-background-inverse",
					transition: {
						type: "spring",
						bounce: .2,
						duration: .5
					}
				})]
			}))
		})
	});
}), $ = Ve(vr, ({ className: e }) => /* @__PURE__ */ K("li", {
	className: "list-none",
	children: /* @__PURE__ */ K(u, {
		className: S("mr-4 w-20 rounded-md py-1.5 ring-1 ring-inset ring-transparent", e),
		children: "\xA0"
	})
})), yr = ({ tabs: e, activeTabId: t, setActiveTabId: n, secondary: i = !1, embedded: a = !1 }) => {
	let o = e[0], [s, c] = W(t ?? ("id" in o ? o.id : void 0));
	V(() => {
		s && n?.(s);
	}, [n, s]);
	let { isActive: l } = d(), u = a ? [e[0]] : e, f = [...u].sort((e, t) => e.index ? 1 : t.index ? -1 : 0).find((e) => "href" in e ? l(e.href) : s === e.id);
	return /* @__PURE__ */ K(gr, {
		secondary: i,
		asChild: !0,
		"aria-label": i ? "primary-navigation" : "secondary-navigation",
		children: u.length === 1 ? /* @__PURE__ */ K("li", {
			className: "flex h-8 items-center justify-center whitespace-nowrap text-lg font-medium text-f1-foreground",
			children: u[0].label
		}) : u.map(({ label: e, ...t }, n) => {
			let a = f && "href" in f && "href" in t ? f.href === t.href : "id" in t && s === t.id;
			return /* @__PURE__ */ K($, {
				active: a,
				href: "href" in t ? t.href : void 0,
				onClick: () => {
					"id" in t && c?.(t.id);
				},
				secondary: i,
				asChild: !0,
				children: /* @__PURE__ */ q(m, {
					role: "link",
					...t,
					children: [t.variant === "upsell" && /* @__PURE__ */ K(r, {
						icon: it,
						size: "md",
						className: "mr-1 text-[hsl(var(--promote-50))]"
					}), e]
				})
			}, n);
		})
	});
}, br = ({ secondary: e }) => /* @__PURE__ */ q(gr, {
	"aria-label": e ? "Secondary empty nav" : "Main empty nav",
	secondary: e,
	"aria-busy": "true",
	"aria-live": "polite",
	children: [
		/* @__PURE__ */ K($.Skeleton, { className: "w-24" }),
		/* @__PURE__ */ K($.Skeleton, { className: "w-20" }),
		/* @__PURE__ */ K($.Skeleton, { className: "w-28" }),
		/* @__PURE__ */ K($.Skeleton, { className: "w-20" })
	]
}), xr = t(s("Tabs", Ve(yr, br))), Sr = ({ title: e, description: t, module: n, otherActions: r, navigation: i, resourceHeader: o, controls: s, headerStatus: c, dismissable: l = !0, tabs: u, activeTabId: d, setActiveTabId: p }) => {
	let m = a(), { onClose: h } = ee(), g = !!u, _ = () => /* @__PURE__ */ K("div", { className: "h-4 w-px self-center bg-f1-background-secondary" }), v = r?.filter((e) => e.type !== "separator" && e.type !== "label") ?? [], y = () => {
		if (!v.length || !r) return null;
		let e = v.some((e) => e.critical);
		return v.length <= 2 && !e ? /* @__PURE__ */ K("div", {
			className: "flex flex-row gap-2",
			children: v.map((e) => /* @__PURE__ */ K(f, {
				variant: "outline",
				icon: e.icon,
				onClick: e.onClick,
				label: e.label,
				hideLabel: !0
			}, e.label))
		}) : /* @__PURE__ */ K(we, {
			items: r,
			icon: ze
		});
	}, b = () => n ? /* @__PURE__ */ K(Ut, { children: /* @__PURE__ */ K(cn, {
		item: {
			id: n.id,
			label: n.label,
			href: n.href,
			module: n.id
		},
		isLast: !1,
		isFirst: !0
	}) }) : null, x = () => c ? /* @__PURE__ */ K("span", {
		className: "whitespace-nowrap text-f1-foreground-secondary",
		children: c
	}) : null, C = () => l ? /* @__PURE__ */ K(f, {
		variant: "outline",
		icon: Ce,
		onClick: h,
		label: m.actions.close,
		hideLabel: !0
	}) : null, w = () => u ? /* @__PURE__ */ K("div", {
		className: "shrink-0 overflow-hidden",
		children: /* @__PURE__ */ K("div", {
			className: "-mx-2",
			children: /* @__PURE__ */ K(xr, {
				tabs: u,
				activeTabId: d,
				setActiveTabId: p
			})
		})
	}) : null;
	return o || s ? /* @__PURE__ */ q(G, { children: [
		/* @__PURE__ */ q("div", {
			className: "flex flex-row items-center justify-between gap-3 px-4 py-3",
			children: [/* @__PURE__ */ K("div", {
				className: "flex flex-row items-center gap-2",
				children: /* @__PURE__ */ K(() => s ? s.kind === "back" ? /* @__PURE__ */ K(f, {
					variant: "outline",
					icon: D,
					onClick: s.onClick,
					label: s.label
				}) : /* @__PURE__ */ q(G, { children: [
					s.expand && (s.expand.url === void 0 ? /* @__PURE__ */ K(f, {
						variant: "outline",
						icon: Be,
						onClick: s.expand.onClick,
						label: s.expand.label
					}) : /* @__PURE__ */ K(f, {
						variant: "outline",
						icon: Be,
						href: s.expand.url,
						label: s.expand.label
					})),
					s.expand && s.navigation && /* @__PURE__ */ K(_, {}),
					s.navigation && /* @__PURE__ */ K(dn, { ...s.navigation })
				] }) : null, {})
			}), /* @__PURE__ */ q("div", {
				className: "flex flex-row items-center gap-2",
				children: [
					/* @__PURE__ */ K(x, {}),
					/* @__PURE__ */ K(y, {}),
					/* @__PURE__ */ K(C, {})
				]
			})]
		}),
		o ? /* @__PURE__ */ q(G, { children: [/* @__PURE__ */ K(Y, {
			className: "sr-only",
			children: o.title
		}), /* @__PURE__ */ K("div", {
			className: "[&_.resource-header]:px-4",
			children: /* @__PURE__ */ K(Lt, { ...o })
		})] }) : e && /* @__PURE__ */ K(Y, {
			className: "sr-only",
			children: e
		}),
		/* @__PURE__ */ K(w, {})
	] }) : /* @__PURE__ */ q(G, { children: [/* @__PURE__ */ q("div", {
		className: S("flex flex-row items-start justify-between gap-3 px-4 py-3", !g && "border border-x-0 border-b border-t-0 border-solid border-f1-border-secondary"),
		children: [/* @__PURE__ */ K("div", {
			className: "flex flex-row items-center gap-3",
			children: (n || e || !!t) && /* @__PURE__ */ q("div", {
				className: "flex flex-col gap-1",
				children: [n ? /* @__PURE__ */ K(b, {}) : e && /* @__PURE__ */ K(Y, {
					className: "py-1 text-lg font-semibold text-f1-foreground",
					children: e
				}), !!t && /* @__PURE__ */ K(je, {
					className: "text-base text-f1-foreground-secondary",
					children: t
				})]
			})
		}), /* @__PURE__ */ q("div", {
			className: "flex flex-row items-center gap-2",
			children: [
				i && /* @__PURE__ */ K(dn, { ...i }),
				/* @__PURE__ */ K(x, {}),
				/* @__PURE__ */ K(y, {}),
				(i || r) && /* @__PURE__ */ K(_, {}),
				/* @__PURE__ */ K(C, {})
			]
		})]
	}), /* @__PURE__ */ K(w, {})] });
}, Cr = () => i("(max-width: 560px)", { initializeWithValue: !1 }), wr = e({
	variants: {
		variant: {
			bottomSheet: "max-h-[95vh] bg-f1-background",
			sidePosition: "absolute flex flex-col rounded-md w-full",
			center: "flex",
			fullscreen: ""
		},
		position: {
			right: "left-auto right-0 items-end p-3",
			left: "left-0 items-start p-3",
			center: "",
			fullscreen: "inset-6 max-[560px]:inset-0"
		}
	},
	defaultVariants: { variant: "center" }
}), Tr = e({
	variants: {
		variant: {
			bottomSheet: "max-h-[95vh] bg-f1-background",
			sidePosition: "flex h-full w-full flex-col rounded-md border border-solid border-f1-border-secondary",
			center: "flex max-h-[95vh] flex-1 flex-col rounded-xl",
			fullscreen: "h-full w-full rounded-xl max-[560px]:rounded-none"
		},
		position: {
			left: "",
			right: "",
			center: "",
			fullscreen: ""
		},
		width: {
			sm: "max-w-[480px]",
			md: "max-w-[640px]",
			lg: "max-w-[800px]",
			xl: "max-w-[960px]"
		}
	},
	compoundVariants: [{
		variant: "fullscreen",
		width: [
			"sm",
			"md",
			"lg",
			"xl"
		],
		class: "max-w-full"
	}],
	defaultVariants: { variant: "center" }
}), Er = ({ dismissable: e = !0, asBottomSheetInMobile: t = !0, position: n = "center", onClose: r, isOpen: i, children: a, width: o = "md", primaryAction: s, secondaryAction: c, title: l, description: u, module: d, otherActions: f, navigation: p, resourceHeader: m, controls: h, headerStatus: g, sideControls: _, tabs: v, activeTabId: y, setActiveTabId: b, disableContentPadding: x, container: C }) => {
	let [ee, te] = W(null), ne = z((e) => {
		te(e);
	}, []), re = (t) => {
		!t && e && r();
	}, T = Cr(), E = n === "left" || n === "right", D = H(() => T && t ? "bottomSheet" : n === "fullscreen" ? "fullscreen" : E ? "sidePosition" : "center", [
		T,
		t,
		E,
		n
	]), O = H(() => (o && ![
		"center",
		"left",
		"right"
	].includes(n) && console.warn("F0Dialog: `width` prop is only applicable to center and side panel positions"), o), [
		D,
		o,
		n
	]), ie = H(() => Tr({
		variant: D,
		position: n,
		width: O
	}), [
		D,
		n,
		O
	]), ae = E ? "content" : "f0-overlay-root";
	m && !E && console.warn("F0Dialog: `resourceHeader` is only applicable to side panel positions (left/right)");
	let oe = {
		title: l,
		description: u,
		module: d,
		otherActions: f,
		navigation: p,
		resourceHeader: m,
		controls: h,
		headerStatus: g,
		dismissable: e,
		tabs: v,
		activeTabId: y,
		setActiveTabId: b
	}, k = T, A = T && n === "fullscreen", j = "absolute top-1/2 z-10 -translate-y-1/2", M = _ ? k ? /* @__PURE__ */ q("div", {
		className: S("sticky bottom-0 z-10 flex shrink-0 flex-row items-center justify-between gap-2", "border border-x-0 border-b-0 border-t border-solid border-f1-border-secondary", "bg-f1-background px-4 py-3"),
		children: [_.previous, _.next]
	}) : /* @__PURE__ */ q(G, { children: [_.previous ? /* @__PURE__ */ K("div", {
		className: S(j, "-left-14"),
		children: _.previous
	}) : null, _.next ? /* @__PURE__ */ K("div", {
		className: S(j, "-right-14"),
		children: _.next
	}) : null] }) : null;
	return T && t ? /* @__PURE__ */ K(w, {
		isOpen: i,
		onClose: r,
		position: n,
		portalContainer: ee,
		shownBottomSheet: !0,
		children: /* @__PURE__ */ q(Ie, {
			open: i,
			onOpenChange: re,
			children: [/* @__PURE__ */ K(Re, { className: "bg-f1-background-overlay" }), /* @__PURE__ */ q(Ee, {
				ref: ne,
				className: ie,
				children: [
					/* @__PURE__ */ K(Sr, { ...oe }),
					/* @__PURE__ */ K(bt, {
						disableContentPadding: x,
						children: a
					}),
					M,
					/* @__PURE__ */ K(Ct, {
						primaryAction: s,
						secondaryAction: c
					})
				]
			})]
		})
	}) : /* @__PURE__ */ K(w, {
		isOpen: i,
		onClose: r,
		position: n,
		portalContainer: ee,
		children: /* @__PURE__ */ K(vt, {
			open: i,
			onOpenChange: re,
			modal: n === "center" || n === "fullscreen",
			children: /* @__PURE__ */ q(_t, {
				ref: ne,
				withTranslateAnimation: !E,
				animation: A ? "fade" : "scale",
				overlayClassName: A ? "bg-transparent" : void 0,
				wrapperClassName: wr({
					variant: D,
					position: n
				}),
				className: ie,
				onOpenAutoFocus: (e) => e.preventDefault(),
				container: C,
				defaultContainerId: ae,
				children: [
					k ? null : M,
					/* @__PURE__ */ K(Sr, { ...oe }),
					/* @__PURE__ */ K(bt, {
						disableContentPadding: x,
						children: a
					}),
					k ? M : null,
					/* @__PURE__ */ K(Ct, {
						primaryAction: s,
						secondaryAction: c
					})
				]
			})
		})
	});
}, Dr = (e) => /* @__PURE__ */ K(Er, { ...e });
Dr.displayName = "F0Dialog";
//#endregion
//#region src/patterns/F0Dialog/index.tsx
var Or = t(s("F0Dialog", Dr));
//#endregion
export { J as A, Ft as C, _t as D, Y as E, nt as F, st as M, it as N, gt as O, rt as P, Rt as S, vt as T, Wt as _, br as a, zt as b, sn as c, nn as d, $t as f, Ht as g, qt as h, xr as i, ot as j, mt as k, rn as l, Zt as m, Cr as n, dn as o, Xt as p, yr as r, cn as s, Or as t, tn as u, Ut as v, Dt as w, Lt as x, Bt as y };
