import { t as e } from "./dist-CqnuTXEz.js";
import { d as t } from "./OneEllipsis-DuhKMtYp.js";
import { D as n, S as r, ct as i, f as a, ft as o, ht as s, k as c, lt as l, mt as u, n as d, s as f, t as p, w as m } from "./variants-B0wDByLy.js";
import { n as h, t as g } from "./utils-CVzxZnoI.js";
import { A as _ } from "./tooltip-BPSwDQpD.js";
import { i as v, l as y, o as b, p as x, r as S, u as C } from "./F0Button-BJ1vAMQc.js";
import { F as w, I as T, J as ee, K as te, Y as ne, nn as E, rn as D, t as O } from "./F0Select-DU4XdF-o.js";
import { a as re, r as ie } from "./F0AvatarIcon-CA2HDqKH.js";
import { ct as ae, i as oe, it as se, lt as k, m as ce, o as A, p as le, r as ue, rt as de, st as fe, v as pe } from "./F0Checkbox-8vfzQrD0.js";
import { _ as me, g as he, p as j, v as ge, x as _e } from "./popover-By8ytmVb.js";
import { t as ve } from "./Cross-BIv5udZr.js";
import { _ as ye, a as be, c as xe, d as Se, g as Ce, h as we, i as Te, l as Ee, m as De, o as Oe, p as ke, r as Ae, s as je, t as Me, u as Ne, x as Pe } from "./progress-BwOpf5S2.js";
import { t as Fe } from "./Maximize-CyNX1-Xd.js";
import { h as Ie } from "./F0Avatar-AdTCknCK.js";
import "./chevron-right-DQKib3pL.js";
import { c as Le, d as Re, i as ze, l as M, n as N, o as Be, r as P, s as F, t as Ve } from "./dist-zRL9MpsG.js";
import { n as He } from "./skeleton-gsHEXIPQ.js";
import { t as Ue } from "./dist-m0B3zKBj.js";
import * as I from "react";
import { Fragment as We, createContext as Ge, forwardRef as L, memo as Ke, useCallback as R, useContext as z, useEffect as B, useId as qe, useLayoutEffect as Je, useMemo as V, useRef as H, useState as U } from "react";
import Ye from "react-dom";
import { Fragment as W, jsx as G, jsxs as K } from "react/jsx-runtime";
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/context/DeprecatedLayoutGroupContext.mjs
var Xe = Ge(null);
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/utils/use-is-mounted.mjs
function Ze() {
	let e = H(!1);
	return o(() => (e.current = !0, () => {
		e.current = !1;
	}), []), e;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/utils/use-force-update.mjs
function Qe() {
	let e = Ze(), [t, n] = U(0), r = R(() => {
		e.current && n(t + 1);
	}, [t]);
	return [R(() => i.postRender(r), [r]), t];
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/projection/node/group.mjs
var $e = (e) => !e.isLayoutDirty && e.willUpdate(!1);
function et() {
	let e = /* @__PURE__ */ new Set(), t = /* @__PURE__ */ new WeakMap(), n = () => e.forEach($e);
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
var tt = (e) => e === !0, nt = (e) => tt(e === !0) || e === "id", rt = ({ children: e, id: t, inherit: n = !0 }) => {
	let r = z(u), i = z(Xe), [a, o] = Qe(), s = H(null), c = r.id || i;
	s.current === null && (nt(n) && c && (t = t ? c + "-" + t : c), s.current = {
		id: t,
		group: tt(n) && r.group || et()
	});
	let l = V(() => ({
		...s.current,
		forceRender: a
	}), [o]);
	return G(u.Provider, {
		value: l,
		children: e
	});
}, it = L((e, t) => /* @__PURE__ */ K("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	fill: "none",
	viewBox: "0 0 24 24",
	ref: t,
	...e,
	children: [/* @__PURE__ */ G("path", {
		stroke: "currentColor",
		strokeLinecap: "round",
		d: "M9 20H10.4C13.7603 20 15.4405 20 16.7239 19.346C17.8529 18.7708 18.7708 17.8529 19.346 16.7239C20 15.4405 20 13.7603 20 10.4V9"
	}), /* @__PURE__ */ G("path", {
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		d: "M8 5H14C15.6569 5 17 6.34315 17 8V14C17 15.6569 15.6569 17 14 17H8C6.34315 17 5 15.6569 5 14V8C5 6.34315 6.34315 5 8 5Z"
	})]
})), at = L((e, t) => /* @__PURE__ */ G("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	fill: "none",
	viewBox: "0 0 36 36",
	ref: t,
	...e,
	children: /* @__PURE__ */ G("path", {
		fill: "#F5A51C",
		d: "M21.0778 6.85106C21.0778 6.14261 20.6191 5.51571 19.9438 5.30139C19.2686 5.08708 18.5323 5.33468 18.1237 5.91346L8.36863 19.7332C8.01836 20.2294 7.97389 20.8795 8.25333 21.4187C8.53277 21.958 9.08951 22.2966 9.6969 22.2966H14.5744V29.6129C14.5744 30.3034 15.0106 30.9185 15.6621 31.1471C16.3137 31.3756 17.0385 31.1677 17.4699 30.6286L27.2249 18.4347C27.6153 17.9467 27.6915 17.2781 27.4207 16.7148C27.15 16.1515 26.5803 15.7932 25.9554 15.7932H21.0778V6.85106Z"
	})
})), ot = Ge(null);
function st({ children: e, layout: t }) {
	return /* @__PURE__ */ G(ot.Provider, {
		value: t,
		children: e
	});
}
function ct() {
	return z(ot);
}
ge("Ellipsis", [
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
var lt = (e) => Array.isArray(e) ? e.every(ut) ? [{ items: e }] : e : [e];
function ut(e) {
	return "value" in e;
}
var dt = ({ onClick: e, value: t, items: r, size: i, variant: o, disabled: s, loading: c, tooltip: l }) => {
	let u = a(), [f, m] = U(!1), _ = V(() => lt(r), [r]), v = V(() => _.flatMap((e) => e.items), [_]), y = V(() => t || v[0]?.value, [t, v]), x = V(() => v.find((e) => e.value === y), [y, v]), S = () => {
		let t = v.find((e) => e.value === y);
		t && e(y, t);
	}, C = V(() => _.map((e) => e.items).reduce((t, n) => (t.length > 0 && t.push({ type: "separator" }), t.push(...n.filter((e) => e.value !== y).map((t) => ({
		...t,
		onClick: () => {
			e(t.value, t), m(!1);
		}
	}))), t), []), [
		_,
		e,
		y
	]), w = i === "sm" ? "[&_.main]:w-6" : i === "lg" ? "[&_.main]:w-10" : "[&_.main]:w-8";
	return x && /* @__PURE__ */ G("div", {
		className: g(s && "opacity-30"),
		children: /* @__PURE__ */ G(b, {
			onClick: S,
			variant: o,
			size: i,
			disabled: s,
			loading: c,
			"data-testid": "button-main",
			"aria-label": x.label,
			prepend: x.icon && /* @__PURE__ */ G(n, { icon: x.icon }),
			className: "rounded-r-none after:rounded-r-none disabled:opacity-100",
			tooltip: {
				label: l,
				description: x.label
			},
			appendOutside: /* @__PURE__ */ G(ye, {
				items: C,
				align: "end",
				open: f && !s,
				onOpenChange: (e) => {
					s || m(e);
				},
				children: /* @__PURE__ */ G("button", {
					className: g(p({
						variant: o,
						pressed: f && !s
					}), d({ size: i }), "-translate-x-px rounded-l-none px-0 after:rounded-l-none disabled:opacity-100", w, h()),
					disabled: s,
					"data-testid": "button-menu",
					"data-pressed": f && !s,
					children: /* @__PURE__ */ K("div", {
						className: "main flex items-center justify-center gap-1",
						children: [/* @__PURE__ */ G("span", {
							className: "sr-only",
							children: u.actions.more
						}), /* @__PURE__ */ G(n, {
							icon: k,
							size: i === "sm" ? "sm" : "md"
						})]
					})
				})
			}),
			children: x.label
		})
	});
}, ft = ({ onClick: e, trigger: t, value: r, items: i, size: a, variant: o, disabled: s, loading: c, tooltip: l }) => {
	let [u, d] = U(!1), f = V(() => lt(i), [i]), p = V(() => f.flatMap((e) => e.items), [f]), m = V(() => p.find((e) => e.value === r), [r, p]), h = t || m?.label || p[0]?.label, g = m ? {
		label: l,
		description: m.label
	} : l, _ = V(() => f.map((e) => e.items).reduce((t, n) => (t.length > 0 && t.push({ type: "separator" }), t.push(...n.map((t) => ({
		...t,
		onClick: () => {
			e(t.value, t), d(!1);
		}
	}))), t), []), [f, e]);
	return h ? /* @__PURE__ */ G(ye, {
		items: _,
		align: "end",
		open: u && !s,
		onOpenChange: (e) => {
			s || d(e);
		},
		children: /* @__PURE__ */ G(b, {
			variant: o,
			size: a,
			disabled: s,
			loading: c,
			"data-testid": "button-dropdown-trigger",
			"aria-label": h,
			prepend: m?.icon && /* @__PURE__ */ G(n, { icon: m.icon }),
			append: /* @__PURE__ */ G(n, {
				icon: k,
				size: a === "sm" ? "sm" : "md"
			}),
			pressed: u && !s,
			tooltip: g,
			children: h
		})
	}) : null;
}, q = t((e) => (e.mode ?? "split") === "dropdown" ? /* @__PURE__ */ G(ft, {
	onClick: e.onClick,
	trigger: "trigger" in e ? e.trigger : void 0,
	value: "value" in e ? e.value : void 0,
	items: e.items,
	size: e.size,
	variant: e.variant,
	disabled: e.disabled,
	loading: e.loading,
	tooltip: e.tooltip
}) : /* @__PURE__ */ G(dt, {
	onClick: e.onClick,
	value: "value" in e ? e.value : void 0,
	items: e.items,
	size: e.size,
	variant: e.variant,
	disabled: e.disabled,
	loading: e.loading,
	tooltip: e.tooltip
})), pt = (e) => e.type === "infinite-scroll" ? e : {
	type: "infinite-scroll",
	records: e.records,
	total: e.total,
	perPage: e.perPage,
	cursor: String(e.currentPage + 1),
	hasMore: e.currentPage < e.pagesCount,
	summaries: e.summaries
}, mt = (e, t) => ee(e) ? e.map((e) => {
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
}) : ne(e) ? e.then(t) : t(e), ht = (e) => {
	if (te(e) !== "pages") return e;
	let t = e;
	return {
		...t,
		paginationType: "infinite-scroll",
		fetchData: (e) => {
			let n = "cursor" in e.pagination ? e.pagination.cursor : null, r = Math.max(1, Number(n) || 1);
			return mt(t.fetchData({
				...e,
				pagination: {
					currentPage: r,
					perPage: e.pagination.perPage
				}
			}), pt);
		}
	};
}, gt = L(({ className: e, ...t }, n) => /* @__PURE__ */ G(ke, {
	ref: n,
	className: g("fixed inset-0 z-50 bg-f1-background-overlay data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", e),
	...t
}));
gt.displayName = ke.displayName;
//#endregion
//#region src/ui/Dialog/components/DialogPortal.tsx
var _t = De, vt = L(({ wrapperClassName: e, className: t, children: n, withTranslateAnimation: r = !0, animation: i = "scale", overlayClassName: a, container: o, defaultContainerId: s = "content", ...c }, l) => {
	let [u, d] = U();
	return B(() => {
		d(o === void 0 ? document.getElementById(s) ?? document.getElementById("content") ?? document.body : o);
	}, [o, s]), u === void 0 ? null : /* @__PURE__ */ K(_t, {
		container: u,
		children: [/* @__PURE__ */ G(gt, { className: a }), /* @__PURE__ */ G(Se, {
			ref: l,
			className: g("fixed inset-0 z-50 flex items-center justify-center", "pointer-events-none duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", i === "scale" && "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95", i === "scale" && r && "data-[state=closed]:slide-out-to-top-[10%] data-[state=open]:slide-in-from-top-[10%]", e),
			...c,
			children: /* @__PURE__ */ G("div", {
				className: g("relative flex w-[90%] flex-col rounded-xl bg-f1-background shadow-lg", "pointer-events-auto", t),
				children: n
			})
		})]
	});
});
vt.displayName = Se.displayName;
//#endregion
//#region src/ui/Dialog/components/DialogTitle.tsx
var J = L(({ className: e, ...t }, n) => /* @__PURE__ */ G(Ce, {
	ref: n,
	className: g("text-lg font-medium text-f1-foreground", e),
	...t
}));
J.displayName = Ce.displayName;
//#endregion
//#region src/ui/Dialog/dialog.tsx
var yt = we, bt = ({ position: e }) => /* @__PURE__ */ G(c.div, {
	initial: { opacity: 0 },
	animate: { opacity: .6 },
	exit: { opacity: 0 },
	transition: {
		duration: .2,
		ease: "easeOut"
	},
	className: g("pointer-events-none absolute inset-x-0 z-10 h-4", e === "top" ? [
		"top-0",
		"bg-gradient-to-b from-f1-background-secondary to-transparent",
		"after:top-0"
	] : [
		"bottom-0",
		"bg-gradient-to-t from-f1-background-secondary to-transparent",
		"after:bottom-0"
	])
}), xt = ({ children: e, disableContentPadding: t = !1 }) => {
	let { position: n } = T(), r = H(null), [i, a] = U(!0), [o, s] = U(!0), c = R(() => {
		let e = r.current;
		if (!e) return;
		let { scrollTop: t, scrollHeight: n, clientHeight: i } = e;
		a(t <= 0), s(t + i >= n - 1);
	}, []);
	return B(() => {
		let e = r.current;
		if (!e) return;
		e.addEventListener("scroll", c, { passive: !0 }), c();
		let t = new ResizeObserver(() => c());
		return t.observe(e), () => {
			e.removeEventListener("scroll", c), t.disconnect();
		};
	}, [c]), /* @__PURE__ */ K("div", {
		className: "relative flex flex-1 flex-col overflow-hidden",
		children: [/* @__PURE__ */ K(le, {
			viewportRef: r,
			className: g("[*[data-state=visible]_div]:bg-f1-background flex flex-1 flex-col", "[&_.resource-header]:p-0 [&_.resource-header]:pr-1", !t && "px-4 [&>div]:py-4", n === "fullscreen" && "h-full [&>div]:h-full [&>div>div]:h-full"),
			children: [/* @__PURE__ */ G(st, {
				layout: null,
				children: e
			}), /* @__PURE__ */ G(ce, {
				orientation: "vertical",
				className: "[&_div]:bg-f1-background"
			})]
		}), /* @__PURE__ */ K(l, { children: [!i && /* @__PURE__ */ G(bt, { position: "top" }, "shadow-top"), !o && /* @__PURE__ */ G(bt, { position: "bottom" }, "shadow-bottom")] })]
	});
}, St = (e) => Array.isArray(e), Ct = (e) => Array.isArray(e), wt = ({ primaryAction: e, secondaryAction: t }) => {
	let n = t, r = e;
	return !r && !n ? null : /* @__PURE__ */ K("div", {
		className: "flex flex-row items-center justify-between border-x-0 border-b-0 border-t border-solid border-f1-border-secondary px-4 py-3",
		children: [/* @__PURE__ */ G("div", { className: "flex-1" }), /* @__PURE__ */ K("div", {
			className: "flex flex-row items-center gap-2",
			children: [n ? Ct(t) ? /* @__PURE__ */ G(q, {
				items: t.map((e) => ({
					value: e.value,
					label: e.label,
					icon: e.icon
				})),
				onClick: (e) => {
					t.find((t) => t.value === e)?.onClick();
				},
				variant: "outline"
			}) : /* @__PURE__ */ G(S, {
				label: t.label,
				onClick: t.onClick,
				variant: "outline",
				icon: t.icon,
				iconPosition: t.iconPosition,
				disabled: t.disabled,
				loading: t.loading
			}) : null, r ? St(e) ? /* @__PURE__ */ G(q, {
				items: e.map((e) => ({
					value: e.value,
					label: e.label,
					icon: e.icon
				})),
				onClick: (t) => {
					e.find((e) => e.value === t)?.onClick();
				},
				variant: "default"
			}) : /* @__PURE__ */ G(S, {
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
}, Tt = ({ description: e }) => {
	let [t, n] = U(!1), [r, i] = U(!1), o = a(), s = H(null), l = H(null), u = m({ ref: s }), d = m({ ref: l });
	return B(() => {
		d.height && u.height && i(d.height > u.height);
	}, [d.height, u.height]), /* @__PURE__ */ K("div", {
		className: "flex max-w-[640px] flex-col gap-1",
		children: [/* @__PURE__ */ K(c.div, {
			initial: !1,
			animate: { height: t ? d.height ?? u.height : u.height ?? "3rem" },
			transition: {
				duration: r ? .15 : 0,
				ease: [
					.165,
					.84,
					.44,
					1
				]
			},
			className: g(t ? "overflow-y-scroll" : "overflow-clip", "relative max-h-80"),
			children: [/* @__PURE__ */ G("div", {
				ref: l,
				className: "pointer-events-none invisible absolute left-0 top-0 -z-10 text-lg text-f1-foreground-secondary",
				"aria-hidden": "true",
				children: e
			}), /* @__PURE__ */ G("div", {
				ref: s,
				className: g("text-lg text-f1-foreground-secondary", !t && "line-clamp-2"),
				children: e
			})]
		}), (r || t) && /* @__PURE__ */ G("button", {
			onClick: () => n((e) => !e),
			className: "relative w-fit font-medium text-f1-foreground after:absolute after:-bottom-0.5 after:left-0 after:right-0 after:h-[1.5px] after:bg-f1-border after:transition-all after:content-[''] hover:after:bg-f1-border-hover",
			children: t ? o.actions.showLess : o.actions.showAll
		})]
	});
}, Et = {
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
}, Dt = {
	duration: .15,
	ease: "easeOut"
}, Ot = L(({ valueToCopy: e, onCopy: t, copyTooltipLabel: r, copiedTooltipLabel: i, variant: o = "neutral", size: s = "sm", ...u }, d) => {
	let [f, p] = U(!1), m = a(), h = r ?? m.actions.copy, g = f ? i ?? "Copied" : h;
	return B(() => {
		let e = null;
		return f && (e = setTimeout(() => p(!1), 1e3)), () => {
			e && clearTimeout(e);
		};
	}, [f]), /* @__PURE__ */ G(b, {
		ref: d,
		variant: o,
		size: s,
		onClick: (n) => {
			n.stopPropagation(), window.navigator.clipboard.writeText(e), p(!0), t?.(n);
		},
		"aria-live": "polite",
		"aria-label": g,
		title: g,
		...u,
		compact: !0,
		children: /* @__PURE__ */ G(l, {
			mode: "wait",
			initial: !1,
			children: /* @__PURE__ */ G(c.span, {
				variants: Et,
				initial: "initial",
				animate: "animate",
				exit: "exit",
				transition: Dt,
				style: {
					display: "inline-flex",
					alignItems: "center",
					justifyContent: "center",
					verticalAlign: "middle"
				},
				children: /* @__PURE__ */ G(n, {
					size: s === "sm" ? "sm" : "md",
					icon: f ? _e : it
				})
			}, f ? "check" : "copy")
		})
	});
});
Ot.displayName = "ButtonCopy";
//#endregion
//#region src/experimental/Information/Headers/Metadata/MetadataValue.tsx
var kt = {
	warning: {
		icon: ie,
		iconColor: "warning",
		textColor: "text-f1-foreground-warning"
	},
	critical: {
		icon: re,
		iconColor: "critical",
		textColor: "text-f1-foreground-critical"
	}
};
function At({ item: e, collapse: t = !1 }) {
	let { value: r } = e;
	switch (r.type) {
		case "text": return /* @__PURE__ */ G("span", { children: r.content });
		case "avatar": return /* @__PURE__ */ K("div", {
			className: "flex items-center gap-1",
			children: [/* @__PURE__ */ G(de, {
				avatar: r.variant,
				size: "xs"
			}), r.text && /* @__PURE__ */ G("span", { children: r.text })]
		});
		case "status": return /* @__PURE__ */ G(se, {
			text: r.label,
			variant: r.variant
		});
		case "list": return /* @__PURE__ */ G(Te, {
			type: r.variant,
			avatars: r.avatars,
			size: "xs",
			max: r.max ?? 3
		});
		case "data-list": return t ? /* @__PURE__ */ K("div", {
			className: "flex items-center justify-center gap-1 font-medium",
			children: [r.data[0], r.data.length > 1 && /* @__PURE__ */ K("span", {
				className: "tabular-nums text-f1-foreground-secondary",
				children: ["+", r.data.length - 1]
			})]
		}) : /* @__PURE__ */ G("div", {
			className: "flex flex-col gap-1.5",
			children: r.data.map((e) => /* @__PURE__ */ G("span", { children: e }, e))
		});
		case "tag-list": return t ? /* @__PURE__ */ K("div", {
			className: "flex flex-wrap items-center justify-center gap-1 font-medium",
			children: [/* @__PURE__ */ G(oe, { text: r.tags[0] }), r.tags.length > 1 && /* @__PURE__ */ K("span", {
				className: "tabular-nums text-f1-foreground-secondary",
				children: ["+", r.tags.length - 1]
			})]
		}) : /* @__PURE__ */ G("div", {
			className: g("flex flex-col gap-1 [&>div]:w-fit", r.tags.length > 1 && "-mt-[3px]"),
			children: r.tags.map((e) => /* @__PURE__ */ G(oe, { text: e }, e))
		});
		case "dot-tag": return /* @__PURE__ */ G(A, {
			text: r.label,
			color: r.color
		});
		case "date": {
			if (r.icon === void 0) return /* @__PURE__ */ G("span", { children: r.formattedDate });
			let { icon: e, iconColor: t, textColor: i } = kt[r.icon];
			return /* @__PURE__ */ K("div", {
				className: "flex items-center justify-center gap-0.5 font-medium",
				children: [/* @__PURE__ */ G(n, {
					icon: e,
					color: t
				}), /* @__PURE__ */ G("span", {
					className: i,
					children: r.formattedDate
				})]
			});
		}
		case "progress-bar": {
			let t = r.color ? Ae(r.color) : Ae("categorical-1"), n = r.max && r.max > 0 ? r.max : 100, i = Math.min(Math.max(0, r.value), n), a = i / n * 100;
			return /* @__PURE__ */ K("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ G("div", {
					className: "min-w-16",
					children: /* @__PURE__ */ G(Me, {
						color: t,
						value: a,
						max: 100,
						"aria-label": e.label,
						"aria-valuemin": 0,
						"aria-valuemax": n,
						"aria-valuenow": i,
						"aria-valuetext": r.label
					})
				}), r.label && /* @__PURE__ */ G("span", {
					className: "whitespace-nowrap text-sm font-medium",
					children: r.label
				})]
			});
		}
	}
}
//#endregion
//#region src/experimental/Information/Headers/Metadata/index.tsx
var jt = (e) => e?.type !== "copy", Mt = (e) => e?.type === "copy", Nt = {
	none: "gap-y-0",
	xs: "gap-y-1",
	sm: "gap-y-2",
	md: "gap-y-3"
};
function Pt({ item: e }) {
	let [t, r] = U(!1), i = e.value.type === "data-list" && e.value.data.length > 1 || e.value.type === "tag-list" && e.value.tags.length > 1, a = !!e.actions?.length, o = a || i, s = (e, t) => {
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
	return /* @__PURE__ */ K("div", {
		className: "flex h-8 items-center gap-2",
		children: [
			e.icon && /* @__PURE__ */ G("span", {
				className: "flex shrink-0 items-center text-f1-foreground-secondary",
				children: /* @__PURE__ */ G(n, {
					icon: e.icon,
					size: "md"
				})
			}),
			/* @__PURE__ */ K("div", {
				className: g("flex w-28 items-center gap-1 truncate text-f1-foreground-secondary md:w-fit", e.hideLabel && "md:hidden"),
				children: [e.label, e.info && /* @__PURE__ */ G("div", {
					className: "flex h-4 w-4 items-center text-f1-foreground-tertiary hover:cursor-help",
					children: /* @__PURE__ */ G(f, {
						label: e.info.title,
						description: e.info.description,
						children: /* @__PURE__ */ G(n, {
							icon: fe,
							size: "sm"
						})
					})
				})]
			}),
			/* @__PURE__ */ K("div", {
				role: "button",
				tabIndex: o ? 0 : -1,
				onMouseEnter: () => o && r(!0),
				onMouseLeave: () => o && r(!1),
				onFocus: () => o && r(!0),
				onBlur: () => o && r(!1),
				className: "relative flex h-5 w-fit items-center hover:cursor-default",
				"aria-label": `${e.label} actions`,
				children: [
					/* @__PURE__ */ G("div", {
						className: g("hidden font-medium text-f1-foreground md:block", !a && "block"),
						children: /* @__PURE__ */ G(At, {
							item: e,
							collapse: !0
						})
					}),
					a && /* @__PURE__ */ G("div", {
						className: "w-full md:hidden",
						children: /* @__PURE__ */ G(Oe, {
							items: e.actions?.filter(jt).map((e) => ({
								label: e.label,
								icon: e.icon,
								onClick: e.onClick
							})) ?? [],
							children: /* @__PURE__ */ G(At, {
								item: e,
								collapse: !0
							})
						})
					}),
					/* @__PURE__ */ G(l, { children: t && o && /* @__PURE__ */ K(c.div, {
						className: g("absolute -left-1.5 -top-1.5 z-50 hidden max-h-[80vh] items-start justify-center gap-1.5 overflow-y-auto whitespace-nowrap rounded-sm bg-f1-background py-1 pl-1.5 shadow-md ring-1 ring-inset ring-f1-border-secondary md:flex", !i && "h-8 items-start", a ? "pr-1" : "pr-1.5"),
						initial: { opacity: 0 },
						animate: { opacity: 1 },
						exit: { opacity: 0 },
						transition: { duration: .1 },
						children: [/* @__PURE__ */ G("div", {
							className: g("flex h-6 items-center font-medium text-f1-foreground", i && "h-auto items-start pt-0.5"),
							children: /* @__PURE__ */ G(At, { item: e })
						}), a && /* @__PURE__ */ G(c.div, {
							className: "flex gap-1",
							initial: { x: -16 },
							animate: { x: 0 },
							exit: { x: -16 },
							transition: { duration: .1 },
							children: e.actions?.map((t, n) => Mt(t) ? /* @__PURE__ */ G(Ot, { valueToCopy: s(e.value, t.copyValue) }, `copy-${n}`) : /* @__PURE__ */ G(f, {
								label: t.label,
								children: /* @__PURE__ */ G(S, {
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
var Ft = Ke(function({ items: e, rowGap: t = "none" }) {
	let n = e.filter((e) => typeof e == "object");
	return /* @__PURE__ */ G("div", {
		className: g("flex flex-col items-start gap-x-3 md:flex-row md:flex-wrap md:items-center", Nt[t]),
		children: n.map((e, t) => /* @__PURE__ */ K(We, { children: [/* @__PURE__ */ G(Pt, { item: e }), t < n.length - 1 && /* @__PURE__ */ G("div", { className: "hidden h-4 w-[1px] bg-f1-border md:block" })] }, `metadata-item-${t}`))
	});
}), It = s("Metadata", Ft), Lt = (e) => e.isVisible !== !1;
function Rt({ title: e, avatar: t, deactivated: n, description: r, primaryAction: i, secondaryActions: o = [], otherActions: s = [], status: c, metadata: l = [], metadataRowGap: u = "none", showBottomBorder: d = !1, onClose: f }) {
	let p = a(), m = [c && {
		label: c.label,
		value: {
			type: "status",
			label: c.text,
			variant: c.variant
		},
		actions: c.actions,
		hideLabel: !0
	}, ...l], h = o.filter(Lt), _ = s.filter(Lt), v = i && Lt(i), y = h.length > 0, b = _.length > 0, x = (e) => !!e && "items" in e, C = (e) => !!e && "label" in e && !("items" in e), w = (e, t) => `${Y(e) ? `${e.value ?? "default"}-${e.items.map((e) => e.value).join("-")}` : e.label}-${t}`;
	return /* @__PURE__ */ K("div", {
		className: g("resource-header px-page flex flex-col gap-3 pb-5 pt-3", d && "border-0 border-b border-solid border-f1-border-secondary"),
		children: [/* @__PURE__ */ K("div", {
			className: g("flex flex-col items-start justify-start gap-4 md:flex-row", !r && "md:items-center"),
			children: [
				/* @__PURE__ */ K("div", {
					className: g("flex grow flex-col items-start justify-start gap-3 md:flex-row md:items-start", !r && "md:items-center"),
					children: [t && /* @__PURE__ */ G("div", {
						className: "flex items-start",
						children: /* @__PURE__ */ G(de, {
							avatar: { ...t.type === "generic" ? {
								...t,
								type: "company"
							} : t },
							size: "xl"
						})
					}), /* @__PURE__ */ K("div", {
						className: "flex flex-col gap-1",
						children: [/* @__PURE__ */ G("span", {
							className: g("text-2xl font-semibold", n ? "text-f1-foreground/[0.61]" : "text-f1-foreground"),
							children: e
						}), r && /* @__PURE__ */ G(Tt, { description: r })]
					})]
				}),
				m.length > 0 && /* @__PURE__ */ G("div", {
					className: "flex flex-wrap items-center gap-x-3 gap-y-1 md:hidden",
					children: /* @__PURE__ */ G(It, {
						items: m,
						rowGap: u
					})
				}),
				/* @__PURE__ */ K("div", {
					className: "flex w-full shrink-0 flex-col gap-x-2 gap-y-3 md:hidden",
					children: [
						v && C(i) && /* @__PURE__ */ G("div", {
							className: "w-full md:hidden [&>*]:w-full",
							children: /* @__PURE__ */ G(S, {
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
						v && x(i) && /* @__PURE__ */ G("div", {
							className: "w-full md:hidden [&>*]:w-full",
							children: /* @__PURE__ */ G(q, {
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
						h.map((e, t) => /* @__PURE__ */ G(We, { children: /* @__PURE__ */ G("div", {
							className: "w-full md:hidden [&>*]:w-full [&>span]:block [&>span_div]:w-full",
							children: Y(e) ? /* @__PURE__ */ G(q, {
								items: e.items,
								onClick: e.onClick,
								variant: e.variant ?? "outline",
								value: e.value,
								size: "lg",
								disabled: e.disabled,
								tooltip: e.tooltip,
								loading: e.loading
							}) : /* @__PURE__ */ G(S, {
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
						_.length > 0 && /* @__PURE__ */ G("div", {
							className: "w-full [&>*]:w-full [&_button]:w-full",
							children: /* @__PURE__ */ G(Oe, { items: _ })
						}),
						f && /* @__PURE__ */ G("div", {
							className: "w-full md:hidden [&>*]:w-full",
							children: /* @__PURE__ */ G(S, {
								label: p.actions.close,
								icon: ve,
								variant: "outline",
								size: "lg",
								onClick: f
							})
						})
					]
				}),
				/* @__PURE__ */ K("div", {
					className: "-m-1 hidden w-fit shrink-0 flex-wrap items-center gap-x-2 gap-y-2 p-1 md:flex md:overflow-x-auto",
					children: [
						_.length > 0 && /* @__PURE__ */ G("div", { children: /* @__PURE__ */ G(be, { items: _ }) }),
						h.map((e, t) => /* @__PURE__ */ G(We, { children: /* @__PURE__ */ G("div", {
							className: "hidden md:block",
							children: Y(e) ? /* @__PURE__ */ G(q, {
								items: e.items,
								onClick: e.onClick,
								variant: e.variant ?? "outline",
								value: e.value,
								size: "md",
								disabled: e.disabled,
								tooltip: e.tooltip,
								loading: e.loading
							}) : /* @__PURE__ */ G(S, {
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
						v && (y || b) && /* @__PURE__ */ G("div", { className: "mx-1 h-4 w-px bg-f1-background-secondary-hover" }),
						v && C(i) && /* @__PURE__ */ G("div", {
							className: "hidden md:block",
							children: /* @__PURE__ */ G(S, {
								label: i.label,
								onClick: i.onClick,
								variant: "default",
								icon: i.icon,
								disabled: i.disabled,
								tooltip: i.tooltip,
								loading: i.loading
							})
						}),
						v && x(i) && /* @__PURE__ */ G("div", {
							className: "hidden md:block",
							children: /* @__PURE__ */ G(q, {
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
						f && /* @__PURE__ */ K(W, { children: [/* @__PURE__ */ G("div", { className: "mx-1 h-4 w-px bg-f1-background-secondary-hover" }), /* @__PURE__ */ G("div", {
							className: "hidden md:block",
							children: /* @__PURE__ */ G(S, {
								label: p.actions.close,
								hideLabel: !0,
								icon: ve,
								variant: "outline",
								onClick: f
							})
						})] })
					]
				})
			]
		}), m.length > 0 && /* @__PURE__ */ G("div", {
			className: "hidden flex-wrap items-center gap-x-3 gap-y-1 md:block",
			children: /* @__PURE__ */ G(It, {
				items: m,
				rowGap: u
			})
		})]
	});
}
var Y = (e) => "items" in e, zt = (e) => e && "type" in e && e.type === "collection-select" ? `collection-select-${e.collectionId}` : e?.id;
//#endregion
//#region src/experimental/Navigation/Header/Breadcrumbs/internal/BreadcrumbSelect/index.tsx
function Bt({ ...e }) {
	let [t, r] = U(e.open), i = (t) => {
		r(t), e.onOpenChange?.(t);
	}, a = e.placeholder || e.label, [o, s] = U(a), [l, u] = U(a);
	l !== a && (u(a), s(a));
	let d = (t, n, r) => {
		e.onChange?.(t, n, r);
	}, f = (e) => {
		s(e?.label || "");
	};
	return /* @__PURE__ */ G(O, {
		...e,
		onOpenChange: i,
		onChange: d,
		onChangeSelectedOption: f,
		label: o,
		hideLabel: !0,
		children: /* @__PURE__ */ K("button", {
			className: "flex h-6 items-center justify-between rounded-sm border px-1.5 py-0.5 font-medium text-f1-foreground no-underline transition-colors hover:bg-f1-background-secondary",
			"aria-label": o,
			children: [/* @__PURE__ */ G("span", {
				className: "block grow text-f1-foreground",
				children: o
			}), /* @__PURE__ */ G("div", {
				className: "ml-2",
				children: /* @__PURE__ */ G(c.div, {
					animate: { rotate: t ? 180 : 0 },
					className: "h-[16px] w-[16px]",
					children: /* @__PURE__ */ G(n, {
						icon: k,
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
var Vt = L((e, t) => /* @__PURE__ */ G("div", {
	ref: t,
	className: "px-1.5",
	...e,
	children: /* @__PURE__ */ G(y, {
		className: "h-4 w-24",
		"aria-hidden": "true"
	})
}));
Vt.displayName = "BreadcrumbSkeleton";
//#endregion
//#region src/ui/breadcrumb.tsx
var Ht = L(({ ...e }, t) => /* @__PURE__ */ G("nav", {
	ref: t,
	"aria-label": "breadcrumb",
	...e
}));
Ht.displayName = "Breadcrumb";
var Ut = L(({ className: e, children: t, ...n }, r) => {
	let i = qe();
	return /* @__PURE__ */ G("ol", {
		ref: r,
		className: g("flex h-8 list-none flex-nowrap items-center text-f1-foreground-secondary", e),
		...n,
		children: /* @__PURE__ */ G(rt, {
			id: i,
			children: /* @__PURE__ */ G(l, {
				initial: !1,
				children: t
			})
		})
	});
});
Ut.displayName = "BreadcrumbList";
var Wt = ({ className: e, ...t }) => /* @__PURE__ */ G("li", {
	className: g("inline-flex items-center gap-0.5 pr-1", e),
	...t
});
Wt.displayName = "BreadcrumbItem";
var Gt = L(({ asChild: e, className: t, ...n }, r) => /* @__PURE__ */ G(e ? _ : C, {
	ref: r,
	className: g("rounded-sm px-1.5 py-0.5 font-medium text-f1-foreground no-underline transition-colors hover:bg-f1-background-secondary", t),
	...n
}));
Gt.displayName = "BreadcrumbLink";
var Kt = L(({ className: e, ...t }, n) => /* @__PURE__ */ G("span", {
	ref: n,
	role: "link",
	"aria-disabled": "true",
	"aria-current": "page",
	className: g("truncate px-1.5 py-0.5 text-f1-foreground", e),
	...t
}));
Kt.displayName = "BreadcrumbPage";
var qt = (e) => `datacollection-${e}`, Jt = {
	get: () => ({}),
	set: () => Promise.resolve()
}, Yt = Ge(Jt), Xt = ({ children: e, handler: t }) => /* @__PURE__ */ G(Yt.Provider, {
	value: t ?? Jt,
	children: e
}), Zt = () => {
	let e = z(Yt);
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
		dataAdapter: ht(e.dataAdapter)
	};
}
//#endregion
//#region src/experimental/Navigation/Header/Breadcrumbs/internal/BreadcrumbCollectionSelect/index.tsx
function on({ item: e }) {
	let [t] = U(() => an(e.source, tn(e.collectionId), {
		seed: e.seed,
		showFilters: e.showFilters
	})), n = H(e);
	n.current = e;
	let r = Zt(), i = H(r);
	i.current = r;
	let a = R((e) => n.current.mapOptions(e), []), o = R((e) => {
		let t = n.current;
		t.onFiltersChange?.(e), t.showFilters && (async () => {
			let n = await i.current.get(t.collectionId);
			await i.current.set(t.collectionId, rn(n ?? {}, e)), en(t.collectionId);
		})().catch(() => {});
	}, []), [s, c] = U(null), l = H(null);
	Je(() => {
		s && (l.current?.click(), c(null));
	}, [s]);
	let u = R((e, t) => {
		let r = n.current;
		if (e === void 0 || e === r.value) return;
		let i = r.getItemHref?.(e, t);
		i && c(i), r.onSelect?.(e, t);
	}, []);
	return /* @__PURE__ */ K(W, { children: [/* @__PURE__ */ G(Bt, {
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
	}), s && /* @__PURE__ */ G(C, {
		href: s,
		ref: l,
		tabIndex: -1,
		"aria-hidden": !0,
		className: "hidden"
	})] });
}
//#endregion
//#region src/experimental/Navigation/Header/Breadcrumbs/internal/BreadcrumbSeparator.tsx
var sn = L((e, t) => /* @__PURE__ */ G("span", {
	ref: t,
	role: "presentation",
	"aria-hidden": "true",
	className: "h-4 w-4 text-f1-icon-secondary",
	...e,
	children: /* @__PURE__ */ G(ae, {})
}));
sn.displayName = "BreadcrumbSeparator";
//#endregion
//#region src/experimental/Navigation/Header/Breadcrumbs/internal/BreadcrumbItem.tsx
var cn = L(({ item: e, isLast: t, isOnly: n = !1, isFirst: r = !1, children: i }, a) => /* @__PURE__ */ K(Wt, {
	ref: a,
	children: [
		!r && /* @__PURE__ */ G(sn, {}),
		/* @__PURE__ */ G(ln, {
			item: e,
			isLast: t,
			isOnly: n,
			isFirst: r
		}),
		i
	]
}, zt(e)));
cn.displayName = "BreadcrumbItem";
var ln = L(({ item: e, isLast: t, isOnly: n = !1, isFirst: r = !1 }, i) => {
	let a = "loading" in e && e.loading, o = a ? "loading" : "type" in e && e.type ? e.type : t || n ? "page" : "link", s = /* @__PURE__ */ K(c.div, {
		layoutId: `breadcrumb-${e.id}`,
		className: g("flex items-center gap-2 px-1.5", r && "pl-0", n && "text-2xl font-semibold"),
		transition: { duration: .15 },
		children: [!a && "module" in e && e.module && (n || r) && /* @__PURE__ */ G(Ie, {
			module: e.module,
			size: n ? "md" : "xs"
		}), /* @__PURE__ */ G("span", {
			className: "truncate",
			children: !a && "label" in e ? e.label : ""
		})]
	}), l = {
		loading: /* @__PURE__ */ G(Vt, {}),
		select: "type" in e && e.type === "select" && (e.options || e.source) && /* @__PURE__ */ G(W, { children: /* @__PURE__ */ G(Bt, {
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
		"collection-select": "type" in e && e.type === "collection-select" && /* @__PURE__ */ G(on, { item: e }),
		page: /* @__PURE__ */ G(Kt, {
			"aria-hidden": "true",
			className: "p-0",
			children: s
		}),
		link: /* @__PURE__ */ G(Gt, {
			asChild: !0,
			className: "p-0",
			children: /* @__PURE__ */ G(C, {
				..."href" in e && !("type" in e) ? e : {},
				className: "block",
				children: s
			})
		})
	}, u = o === "select" || o === "collection-select";
	return /* @__PURE__ */ G(c.div, {
		ref: i,
		layout: !u,
		className: g(a && "max-w-40"),
		transition: { duration: .15 },
		children: l[o]
	});
});
ln.displayName = "BreadcrumbContent";
//#endregion
//#region src/experimental/Navigation/Header/PageNavigation/index.tsx
function un({ icon: e, target: t, fallbackLabel: n }) {
	let r = !t, i = t?.title || n, a = t?.onClick, o = a ? void 0 : t?.url;
	return /* @__PURE__ */ G(v, {
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
	return /* @__PURE__ */ K("div", {
		className: "flex items-center gap-3",
		children: [n && /* @__PURE__ */ K("span", {
			className: "text-sm text-f1-foreground-secondary",
			children: [
				n.current,
				"/",
				n.total
			]
		}), /* @__PURE__ */ K("div", {
			className: "flex items-center gap-2",
			children: [/* @__PURE__ */ G(un, {
				icon: E,
				target: e,
				fallbackLabel: "Previous"
			}), /* @__PURE__ */ G(un, {
				icon: ae,
				target: t,
				fallbackLabel: "Next"
			})]
		})]
	});
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-visually-hidden@1.1.1_@types+react-dom@18.3.1_@types+react@18.3.18_reac_6232f8da9b78ecdf4e0098cbb7814d3f/node_modules/@radix-ui/react-visually-hidden/dist/index.mjs
var fn = "VisuallyHidden", pn = I.forwardRef((e, t) => /* @__PURE__ */ G(P.span, {
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
var mn = pn, X = "NavigationMenu", [hn, gn, _n] = Ue(X), [vn, yn, bn] = Ue(X), [xn, Sn] = Re(X, [_n, bn]), [Cn, Z] = xn(X), [wn, Tn] = xn(X), En = I.forwardRef((e, t) => {
	let { __scopeNavigationMenu: n, value: r, onValueChange: i, defaultValue: a, delayDuration: o = 200, skipDelayDuration: s = 300, orientation: c = "horizontal", dir: l, ...u } = e, [d, f] = I.useState(null), p = F(t, (e) => f(e)), m = pe(l), h = I.useRef(0), g = I.useRef(0), _ = I.useRef(0), [v, y] = I.useState(!0), [b = "", x] = Ve({
		prop: r,
		onChange: (e) => {
			let t = e !== "", n = s > 0;
			t ? (window.clearTimeout(_.current), n && y(!1)) : (window.clearTimeout(_.current), _.current = window.setTimeout(() => y(!0), s)), i?.(e);
		},
		defaultProp: a
	}), S = I.useCallback(() => {
		window.clearTimeout(g.current), g.current = window.setTimeout(() => x(""), 150);
	}, [x]), C = I.useCallback((e) => {
		window.clearTimeout(g.current), x(e);
	}, [x]), w = I.useCallback((e) => {
		b === e ? window.clearTimeout(g.current) : h.current = window.setTimeout(() => {
			window.clearTimeout(g.current), x(e);
		}, o);
	}, [
		b,
		x,
		o
	]);
	return I.useEffect(() => () => {
		window.clearTimeout(h.current), window.clearTimeout(g.current), window.clearTimeout(_.current);
	}, []), /* @__PURE__ */ G(kn, {
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
		children: /* @__PURE__ */ G(P.nav, {
			"aria-label": "Main",
			"data-orientation": c,
			dir: m,
			...u,
			ref: p
		})
	});
});
En.displayName = X;
var Dn = "NavigationMenuSub", On = I.forwardRef((e, t) => {
	let { __scopeNavigationMenu: n, value: r, onValueChange: i, defaultValue: a, orientation: o = "horizontal", ...s } = e, c = Z(Dn, n), [l = "", u] = Ve({
		prop: r,
		onChange: i,
		defaultProp: a
	});
	return /* @__PURE__ */ G(kn, {
		scope: n,
		isRootMenu: !1,
		value: l,
		dir: c.dir,
		orientation: o,
		rootNavigationMenu: c.rootNavigationMenu,
		onTriggerEnter: (e) => u(e),
		onItemSelect: (e) => u(e),
		onItemDismiss: () => u(""),
		children: /* @__PURE__ */ G(P.div, {
			"data-orientation": o,
			...s,
			ref: t
		})
	});
});
On.displayName = Dn;
var kn = (e) => {
	let { scope: t, isRootMenu: n, rootNavigationMenu: r, dir: i, orientation: a, children: o, value: s, onItemSelect: c, onItemDismiss: l, onTriggerEnter: u, onTriggerLeave: d, onContentEnter: f, onContentLeave: p } = e, [m, h] = I.useState(null), [g, _] = I.useState(/* @__PURE__ */ new Map()), [v, y] = I.useState(null);
	return /* @__PURE__ */ G(Cn, {
		scope: t,
		isRootMenu: n,
		rootNavigationMenu: r,
		value: s,
		previousValue: ue(s),
		baseId: me(),
		dir: i,
		orientation: a,
		viewport: m,
		onViewportChange: h,
		indicatorTrack: v,
		onIndicatorTrackChange: y,
		onTriggerEnter: M(u),
		onTriggerLeave: M(d),
		onContentEnter: M(f),
		onContentLeave: M(p),
		onItemSelect: M(c),
		onItemDismiss: M(l),
		onViewportContentChange: I.useCallback((e, t) => {
			_((n) => (n.set(e, t), new Map(n)));
		}, []),
		onViewportContentRemove: I.useCallback((e) => {
			_((t) => t.has(e) ? (t.delete(e), new Map(t)) : t);
		}, []),
		children: /* @__PURE__ */ G(hn.Provider, {
			scope: t,
			children: /* @__PURE__ */ G(wn, {
				scope: t,
				items: g,
				children: o
			})
		})
	});
}, An = "NavigationMenuList", jn = I.forwardRef((e, t) => {
	let { __scopeNavigationMenu: n, ...r } = e, i = Z(An, n), a = /* @__PURE__ */ G(P.ul, {
		"data-orientation": i.orientation,
		...r,
		ref: t
	});
	return /* @__PURE__ */ G(P.div, {
		style: { position: "relative" },
		ref: i.onIndicatorTrackChange,
		children: /* @__PURE__ */ G(hn.Slot, {
			scope: n,
			children: i.isRootMenu ? /* @__PURE__ */ G(Qn, {
				asChild: !0,
				children: a
			}) : a
		})
	});
});
jn.displayName = An;
var Mn = "NavigationMenuItem", [Nn, Pn] = xn(Mn), Fn = I.forwardRef((e, t) => {
	let { __scopeNavigationMenu: n, value: r, ...i } = e, a = me(), o = r || a || "LEGACY_REACT_AUTO_VALUE", s = I.useRef(null), c = I.useRef(null), l = I.useRef(null), u = I.useRef(() => {}), d = I.useRef(!1), f = I.useCallback((e = "start") => {
		if (s.current) {
			u.current();
			let t = nr(s.current);
			t.length && rr(e === "start" ? t : t.reverse());
		}
	}, []), p = I.useCallback(() => {
		if (s.current) {
			let e = nr(s.current);
			e.length && (u.current = ir(e));
		}
	}, []);
	return /* @__PURE__ */ G(Nn, {
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
		children: /* @__PURE__ */ G(P.li, {
			...i,
			ref: t
		})
	});
});
Fn.displayName = Mn;
var In = "NavigationMenuTrigger", Ln = I.forwardRef((e, t) => {
	let { __scopeNavigationMenu: n, disabled: r, ...i } = e, a = Z(In, e.__scopeNavigationMenu), o = Pn(In, e.__scopeNavigationMenu), s = I.useRef(null), c = F(s, o.triggerRef, t), l = sr(a.baseId, o.value), u = cr(a.baseId, o.value), d = I.useRef(!1), f = I.useRef(!1), p = o.value === a.value;
	return /* @__PURE__ */ K(W, { children: [/* @__PURE__ */ G(hn.ItemSlot, {
		scope: n,
		value: o.value,
		children: /* @__PURE__ */ G(tr, {
			asChild: !0,
			children: /* @__PURE__ */ G(P.button, {
				id: l,
				disabled: r,
				"data-disabled": r ? "" : void 0,
				"data-state": or(p),
				"aria-expanded": p,
				"aria-controls": u,
				...i,
				ref: c,
				onPointerEnter: N(e.onPointerEnter, () => {
					f.current = !1, o.wasEscapeCloseRef.current = !1;
				}),
				onPointerMove: N(e.onPointerMove, lr(() => {
					r || f.current || o.wasEscapeCloseRef.current || d.current || (a.onTriggerEnter(o.value), d.current = !0);
				})),
				onPointerLeave: N(e.onPointerLeave, lr(() => {
					r || (a.onTriggerLeave(), d.current = !1);
				})),
				onClick: N(e.onClick, () => {
					a.onItemSelect(o.value), f.current = p;
				}),
				onKeyDown: N(e.onKeyDown, (e) => {
					let t = {
						horizontal: "ArrowDown",
						vertical: a.dir === "rtl" ? "ArrowLeft" : "ArrowRight"
					}[a.orientation];
					p && e.key === t && (o.onEntryKeyDown(), e.preventDefault());
				})
			})
		})
	}), p && /* @__PURE__ */ K(W, { children: [/* @__PURE__ */ G(mn, {
		"aria-hidden": !0,
		tabIndex: 0,
		ref: o.focusProxyRef,
		onFocus: (e) => {
			let t = o.contentRef.current, n = e.relatedTarget, r = n === s.current, i = t?.contains(n);
			(r || !i) && o.onFocusProxyEnter(r ? "start" : "end");
		}
	}), a.viewport && /* @__PURE__ */ G("span", { "aria-owns": u })] })] });
});
Ln.displayName = In;
var Rn = "NavigationMenuLink", zn = "navigationMenu.linkSelect", Bn = I.forwardRef((e, t) => {
	let { __scopeNavigationMenu: n, active: r, onSelect: i, ...a } = e;
	return /* @__PURE__ */ G(tr, {
		asChild: !0,
		children: /* @__PURE__ */ G(P.a, {
			"data-active": r ? "" : void 0,
			"aria-current": r ? "page" : void 0,
			...a,
			ref: t,
			onClick: N(e.onClick, (e) => {
				let t = e.target, n = new CustomEvent(zn, {
					bubbles: !0,
					cancelable: !0
				});
				if (t.addEventListener(zn, (e) => i?.(e), { once: !0 }), ze(t, n), !n.defaultPrevented && !e.metaKey) {
					let e = new CustomEvent(Kn, {
						bubbles: !0,
						cancelable: !0
					});
					ze(t, e);
				}
			}, { checkForDefaultPrevented: !1 })
		})
	});
});
Bn.displayName = Rn;
var Vn = "NavigationMenuIndicator", Hn = I.forwardRef((e, t) => {
	let { forceMount: n, ...r } = e, i = Z(Vn, e.__scopeNavigationMenu), a = !!i.value;
	return i.indicatorTrack ? Ye.createPortal(/* @__PURE__ */ G(j, {
		present: n || a,
		children: /* @__PURE__ */ G(Un, {
			...r,
			ref: t
		})
	}), i.indicatorTrack) : null;
});
Hn.displayName = Vn;
var Un = I.forwardRef((e, t) => {
	let { __scopeNavigationMenu: n, ...r } = e, i = Z(Vn, n), a = gn(n), [o, s] = I.useState(null), [c, l] = I.useState(null), u = i.orientation === "horizontal", d = !!i.value;
	I.useEffect(() => {
		let e = a().find((e) => e.value === i.value)?.ref.current;
		e && s(e);
	}, [a, i.value]);
	let f = () => {
		o && l({
			size: u ? o.offsetWidth : o.offsetHeight,
			offset: u ? o.offsetLeft : o.offsetTop
		});
	};
	return ar(o, f), ar(i.indicatorTrack, f), c ? /* @__PURE__ */ G(P.div, {
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
}), Q = "NavigationMenuContent", Wn = I.forwardRef((e, t) => {
	let { forceMount: n, ...r } = e, i = Z(Q, e.__scopeNavigationMenu), a = Pn(Q, e.__scopeNavigationMenu), o = F(a.contentRef, t), s = a.value === i.value, c = {
		value: a.value,
		triggerRef: a.triggerRef,
		focusProxyRef: a.focusProxyRef,
		wasEscapeCloseRef: a.wasEscapeCloseRef,
		onContentFocusOutside: a.onContentFocusOutside,
		onRootContentClose: a.onRootContentClose,
		...r
	};
	return i.viewport ? /* @__PURE__ */ G(Gn, {
		forceMount: n,
		...c,
		ref: o
	}) : /* @__PURE__ */ G(j, {
		present: n || s,
		children: /* @__PURE__ */ G(qn, {
			"data-state": or(s),
			...c,
			ref: o,
			onPointerEnter: N(e.onPointerEnter, i.onContentEnter),
			onPointerLeave: N(e.onPointerLeave, lr(i.onContentLeave)),
			style: {
				pointerEvents: !s && i.isRootMenu ? "none" : void 0,
				...c.style
			}
		})
	});
});
Wn.displayName = Q;
var Gn = I.forwardRef((e, t) => {
	let { onViewportContentChange: n, onViewportContentRemove: r } = Z(Q, e.__scopeNavigationMenu);
	return Le(() => {
		n(e.value, {
			ref: t,
			...e
		});
	}, [
		e,
		t,
		n
	]), Le(() => () => r(e.value), [e.value, r]), null;
}), Kn = "navigationMenu.rootContentDismiss", qn = I.forwardRef((e, t) => {
	let { __scopeNavigationMenu: n, value: r, triggerRef: i, focusProxyRef: a, wasEscapeCloseRef: o, onRootContentClose: s, onContentFocusOutside: c, ...l } = e, u = Z(Q, n), d = I.useRef(null), f = F(d, t), p = sr(u.baseId, r), m = cr(u.baseId, r), h = gn(n), g = I.useRef(null), { onItemDismiss: _ } = u;
	I.useEffect(() => {
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
	let v = I.useMemo(() => {
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
	return /* @__PURE__ */ G(Qn, {
		asChild: !0,
		children: /* @__PURE__ */ G(he, {
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
			onFocusOutside: N(e.onFocusOutside, (e) => {
				c();
				let t = e.target;
				u.rootNavigationMenu?.contains(t) && e.preventDefault();
			}),
			onPointerDownOutside: N(e.onPointerDownOutside, (e) => {
				let t = e.target, n = h().some((e) => e.ref.current?.contains(t)), r = u.isRootMenu && u.viewport?.contains(t);
				(n || r || !u.isRootMenu) && e.preventDefault();
			}),
			onKeyDown: N(e.onKeyDown, (e) => {
				let t = e.altKey || e.ctrlKey || e.metaKey;
				if (e.key === "Tab" && !t) {
					let t = nr(e.currentTarget), n = document.activeElement, r = t.findIndex((e) => e === n);
					rr(e.shiftKey ? t.slice(0, r).reverse() : t.slice(r + 1, t.length)) ? e.preventDefault() : a.current?.focus();
				}
			}),
			onEscapeKeyDown: N(e.onEscapeKeyDown, (e) => {
				o.current = !0;
			})
		})
	});
}), Jn = "NavigationMenuViewport", Yn = I.forwardRef((e, t) => {
	let { forceMount: n, ...r } = e, i = !!Z(Jn, e.__scopeNavigationMenu).value;
	return /* @__PURE__ */ G(j, {
		present: n || i,
		children: /* @__PURE__ */ G(Xn, {
			...r,
			ref: t
		})
	});
});
Yn.displayName = Jn;
var Xn = I.forwardRef((e, t) => {
	let { __scopeNavigationMenu: n, children: r, ...i } = e, a = Z(Jn, n), o = F(t, a.onViewportChange), s = Tn(Q, e.__scopeNavigationMenu), [c, l] = I.useState(null), [u, d] = I.useState(null), f = c ? c?.width + "px" : void 0, p = c ? c?.height + "px" : void 0, m = !!a.value, h = m ? a.value : a.previousValue;
	return ar(u, () => {
		u && l({
			width: u.offsetWidth,
			height: u.offsetHeight
		});
	}), /* @__PURE__ */ G(P.div, {
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
		onPointerEnter: N(e.onPointerEnter, a.onContentEnter),
		onPointerLeave: N(e.onPointerLeave, lr(a.onContentLeave)),
		children: Array.from(s.items).map(([e, { ref: t, forceMount: n, ...r }]) => {
			let i = h === e;
			return /* @__PURE__ */ G(j, {
				present: n || i,
				children: /* @__PURE__ */ G(qn, {
					...r,
					ref: Be(t, (e) => {
						i && e && d(e);
					})
				})
			}, e);
		})
	});
}), Zn = "FocusGroup", Qn = I.forwardRef((e, t) => {
	let { __scopeNavigationMenu: n, ...r } = e, i = Z(Zn, n);
	return /* @__PURE__ */ G(vn.Provider, {
		scope: n,
		children: /* @__PURE__ */ G(vn.Slot, {
			scope: n,
			children: /* @__PURE__ */ G(P.div, {
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
], er = "FocusGroupItem", tr = I.forwardRef((e, t) => {
	let { __scopeNavigationMenu: n, ...r } = e, i = yn(n), a = Z(er, n);
	return /* @__PURE__ */ G(vn.ItemSlot, {
		scope: n,
		children: /* @__PURE__ */ G(P.button, {
			...r,
			ref: t,
			onKeyDown: N(e.onKeyDown, (e) => {
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
	let n = M(t);
	Le(() => {
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
	let i = I.Children.only(r);
	return I.cloneElement(i, { children: typeof t == "function" ? t(i.props.children) : t });
}
var hr = e({
	base: "relative flex items-center justify-start gap-1 overflow-x-auto whitespace-nowrap px-page py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
	variants: { secondary: {
		true: "bg-f1-foreground/[.02] dark:bg-f1-foreground/[.02]",
		false: "bg-f1-background-transparent pt-1"
	} },
	defaultVariants: { secondary: !1 }
}), gr = I.forwardRef(({ className: e, children: t, secondary: n, ...r }, i) => {
	let a = qe();
	return /* @__PURE__ */ K(ur, {
		ref: i,
		...r,
		asChild: !1,
		className: "relative",
		children: [/* @__PURE__ */ G("div", { className: "absolute inset-x-0 bottom-0 left-0 right-0 h-px bg-f1-border-secondary" }), /* @__PURE__ */ G(rt, {
			id: a,
			children: /* @__PURE__ */ G(dr, {
				className: g(hr({ secondary: n }), e),
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
}), vr = I.forwardRef(function({ asChild: e, disabled: t, active: n, className: r, children: i, secondary: a, ...o }, s) {
	return /* @__PURE__ */ G(fr, {
		className: "flex",
		children: /* @__PURE__ */ G(pr, {
			"data-active": n ? "true" : void 0,
			"aria-disabled": t || void 0,
			className: g("group relative flex shrink-0 select-none items-center justify-center rounded-md no-underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1", t ? "pointer-events-none" : ""),
			ref: s,
			onSelect: () => {},
			asChild: e,
			...o,
			children: mr({
				asChild: e,
				children: i
			}, (e) => /* @__PURE__ */ K("span", {
				className: g("text-f1-foreground-secondary ring-1 ring-inset ring-transparent", _r({
					secondary: a,
					disabled: t
				}), r),
				children: [e, n && !a && /* @__PURE__ */ G(c.div, {
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
}), $ = He(vr, ({ className: e }) => /* @__PURE__ */ G("li", {
	className: "list-none",
	children: /* @__PURE__ */ G(y, {
		className: g("mr-4 w-20 rounded-md py-1.5 ring-1 ring-inset ring-transparent", e),
		children: "\xA0"
	})
})), yr = ({ tabs: e, activeTabId: t, setActiveTabId: r, secondary: i = !1, embedded: a = !1 }) => {
	let o = e[0], [s, c] = U(t ?? ("id" in o ? o.id : void 0));
	B(() => {
		s && r?.(s);
	}, [r, s]);
	let { isActive: l } = x(), u = a ? [e[0]] : e, d = [...u].sort((e, t) => e.index ? 1 : t.index ? -1 : 0).find((e) => "href" in e ? l(e.href) : s === e.id);
	return /* @__PURE__ */ G(gr, {
		secondary: i,
		asChild: !0,
		"aria-label": i ? "primary-navigation" : "secondary-navigation",
		children: u.length === 1 ? /* @__PURE__ */ G("li", {
			className: "flex h-8 items-center justify-center whitespace-nowrap text-lg font-medium text-f1-foreground",
			children: u[0].label
		}) : u.map(({ label: e, ...t }, r) => {
			let a = d && "href" in d && "href" in t ? d.href === t.href : "id" in t && s === t.id;
			return /* @__PURE__ */ G($, {
				active: a,
				href: "href" in t ? t.href : void 0,
				onClick: () => {
					"id" in t && c?.(t.id);
				},
				secondary: i,
				asChild: !0,
				children: /* @__PURE__ */ K(C, {
					role: "link",
					...t,
					children: [t.variant === "upsell" && /* @__PURE__ */ G(n, {
						icon: at,
						size: "md",
						className: "mr-1 text-[hsl(var(--promote-50))]"
					}), e]
				})
			}, r);
		})
	});
}, br = ({ secondary: e }) => /* @__PURE__ */ K(gr, {
	"aria-label": e ? "Secondary empty nav" : "Main empty nav",
	secondary: e,
	"aria-busy": "true",
	"aria-live": "polite",
	children: [
		/* @__PURE__ */ G($.Skeleton, { className: "w-24" }),
		/* @__PURE__ */ G($.Skeleton, { className: "w-20" }),
		/* @__PURE__ */ G($.Skeleton, { className: "w-28" }),
		/* @__PURE__ */ G($.Skeleton, { className: "w-20" })
	]
}), xr = t(s("Tabs", He(yr, br))), Sr = ({ title: e, description: t, module: n, otherActions: r, navigation: i, resourceHeader: o, controls: s, headerStatus: c, dismissable: l = !0, tabs: u, activeTabId: d, setActiveTabId: f }) => {
	let p = a(), { onClose: m } = T(), h = !!u, _ = () => /* @__PURE__ */ G("div", { className: "h-4 w-px self-center bg-f1-background-secondary" }), y = r?.filter((e) => e.type !== "separator" && e.type !== "label") ?? [], b = () => {
		if (!y.length || !r) return null;
		let e = y.some((e) => e.critical);
		return y.length <= 2 && !e ? /* @__PURE__ */ G("div", {
			className: "flex flex-row gap-2",
			children: y.map((e) => /* @__PURE__ */ G(v, {
				variant: "outline",
				icon: e.icon,
				onClick: e.onClick,
				label: e.label,
				hideLabel: !0
			}, e.label))
		}) : /* @__PURE__ */ G(ye, {
			items: r,
			icon: Pe
		});
	}, x = () => n ? /* @__PURE__ */ G(Ut, { children: /* @__PURE__ */ G(cn, {
		item: {
			id: n.id,
			label: n.label,
			href: n.href,
			module: n.id
		},
		isLast: !1,
		isFirst: !0
	}) }) : null, S = () => c ? /* @__PURE__ */ G("span", {
		className: "whitespace-nowrap text-f1-foreground-secondary",
		children: c
	}) : null, C = () => l ? /* @__PURE__ */ G(v, {
		variant: "outline",
		icon: ve,
		onClick: m,
		label: p.actions.close,
		hideLabel: !0
	}) : null, w = () => u ? /* @__PURE__ */ G("div", {
		className: "shrink-0 overflow-hidden",
		children: /* @__PURE__ */ G("div", {
			className: "-mx-2",
			children: /* @__PURE__ */ G(xr, {
				tabs: u,
				activeTabId: d,
				setActiveTabId: f
			})
		})
	}) : null;
	return o || s ? /* @__PURE__ */ K(W, { children: [
		/* @__PURE__ */ K("div", {
			className: "flex flex-row items-center justify-between gap-3 px-4 py-3",
			children: [/* @__PURE__ */ G("div", {
				className: "flex flex-row items-center gap-2",
				children: /* @__PURE__ */ G(() => s ? s.kind === "back" ? /* @__PURE__ */ G(v, {
					variant: "outline",
					icon: D,
					onClick: s.onClick,
					label: s.label
				}) : /* @__PURE__ */ K(W, { children: [
					s.expand && (s.expand.url === void 0 ? /* @__PURE__ */ G(v, {
						variant: "outline",
						icon: Fe,
						onClick: s.expand.onClick,
						label: s.expand.label
					}) : /* @__PURE__ */ G(v, {
						variant: "outline",
						icon: Fe,
						href: s.expand.url,
						label: s.expand.label
					})),
					s.expand && s.navigation && /* @__PURE__ */ G(_, {}),
					s.navigation && /* @__PURE__ */ G(dn, { ...s.navigation })
				] }) : null, {})
			}), /* @__PURE__ */ K("div", {
				className: "flex flex-row items-center gap-2",
				children: [
					/* @__PURE__ */ G(S, {}),
					/* @__PURE__ */ G(b, {}),
					/* @__PURE__ */ G(C, {})
				]
			})]
		}),
		o ? /* @__PURE__ */ K(W, { children: [/* @__PURE__ */ G(J, {
			className: "sr-only",
			children: o.title
		}), /* @__PURE__ */ G("div", {
			className: "[&_.resource-header]:px-4",
			children: /* @__PURE__ */ G(Rt, { ...o })
		})] }) : e && /* @__PURE__ */ G(J, {
			className: "sr-only",
			children: e
		}),
		/* @__PURE__ */ G(w, {})
	] }) : /* @__PURE__ */ K(W, { children: [/* @__PURE__ */ K("div", {
		className: g("flex flex-row items-start justify-between gap-3 px-4 py-3", !h && "border border-x-0 border-b border-t-0 border-solid border-f1-border-secondary"),
		children: [/* @__PURE__ */ G("div", {
			className: "flex flex-row items-center gap-3",
			children: (n || e || !!t) && /* @__PURE__ */ K("div", {
				className: "flex flex-col gap-1",
				children: [n ? /* @__PURE__ */ G(x, {}) : e && /* @__PURE__ */ G(J, {
					className: "py-1 text-lg font-semibold text-f1-foreground",
					children: e
				}), !!t && /* @__PURE__ */ G(Ee, {
					className: "text-base text-f1-foreground-secondary",
					children: t
				})]
			})
		}), /* @__PURE__ */ K("div", {
			className: "flex flex-row items-center gap-2",
			children: [
				i && /* @__PURE__ */ G(dn, { ...i }),
				/* @__PURE__ */ G(S, {}),
				/* @__PURE__ */ G(b, {}),
				(i || r) && /* @__PURE__ */ G(_, {}),
				/* @__PURE__ */ G(C, {})
			]
		})]
	}), /* @__PURE__ */ G(w, {})] });
}, Cr = () => r("(max-width: 560px)", { initializeWithValue: !1 }), wr = e({
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
}), Er = ({ dismissable: e = !0, asBottomSheetInMobile: t = !0, position: n = "center", onClose: r, isOpen: i, children: a, width: o = "md", primaryAction: s, secondaryAction: c, title: l, description: u, module: d, otherActions: f, navigation: p, resourceHeader: m, controls: h, headerStatus: _, sideControls: v, tabs: y, activeTabId: b, setActiveTabId: x, disableContentPadding: S, container: C }) => {
	let [T, ee] = U(null), te = R((e) => {
		ee(e);
	}, []), ne = (t) => {
		!t && e && r();
	}, E = Cr(), D = n === "left" || n === "right", O = V(() => E && t ? "bottomSheet" : n === "fullscreen" ? "fullscreen" : D ? "sidePosition" : "center", [
		E,
		t,
		D,
		n
	]), re = V(() => (o && ![
		"center",
		"left",
		"right"
	].includes(n) && console.warn("F0Dialog: `width` prop is only applicable to center and side panel positions"), o), [
		O,
		o,
		n
	]), ie = V(() => Tr({
		variant: O,
		position: n,
		width: re
	}), [
		O,
		n,
		re
	]), ae = D ? "content" : "f0-overlay-root";
	m && !D && console.warn("F0Dialog: `resourceHeader` is only applicable to side panel positions (left/right)");
	let oe = {
		title: l,
		description: u,
		module: d,
		otherActions: f,
		navigation: p,
		resourceHeader: m,
		controls: h,
		headerStatus: _,
		dismissable: e,
		tabs: y,
		activeTabId: b,
		setActiveTabId: x
	}, se = E, k = E && n === "fullscreen", ce = "absolute top-1/2 z-10 -translate-y-1/2", A = v ? se ? /* @__PURE__ */ K("div", {
		className: g("sticky bottom-0 z-10 flex shrink-0 flex-row items-center justify-between gap-2", "border border-x-0 border-b-0 border-t border-solid border-f1-border-secondary", "bg-f1-background px-4 py-3"),
		children: [v.previous, v.next]
	}) : /* @__PURE__ */ K(W, { children: [v.previous ? /* @__PURE__ */ G("div", {
		className: g(ce, "-left-14"),
		children: v.previous
	}) : null, v.next ? /* @__PURE__ */ G("div", {
		className: g(ce, "-right-14"),
		children: v.next
	}) : null] }) : null;
	return E && t ? /* @__PURE__ */ G(w, {
		isOpen: i,
		onClose: r,
		position: n,
		portalContainer: T,
		shownBottomSheet: !0,
		children: /* @__PURE__ */ K(je, {
			open: i,
			onOpenChange: ne,
			children: [/* @__PURE__ */ G(Ne, { className: "bg-f1-background-overlay" }), /* @__PURE__ */ K(xe, {
				ref: te,
				className: ie,
				children: [
					/* @__PURE__ */ G(Sr, { ...oe }),
					/* @__PURE__ */ G(xt, {
						disableContentPadding: S,
						children: a
					}),
					A,
					/* @__PURE__ */ G(wt, {
						primaryAction: s,
						secondaryAction: c
					})
				]
			})]
		})
	}) : /* @__PURE__ */ G(w, {
		isOpen: i,
		onClose: r,
		position: n,
		portalContainer: T,
		children: /* @__PURE__ */ G(yt, {
			open: i,
			onOpenChange: ne,
			modal: n === "center" || n === "fullscreen",
			children: /* @__PURE__ */ K(vt, {
				ref: te,
				withTranslateAnimation: !D,
				animation: k ? "fade" : "scale",
				overlayClassName: k ? "bg-transparent" : void 0,
				wrapperClassName: wr({
					variant: O,
					position: n
				}),
				className: ie,
				onOpenAutoFocus: (e) => e.preventDefault(),
				container: C,
				defaultContainerId: ae,
				children: [
					se ? null : A,
					/* @__PURE__ */ G(Sr, { ...oe }),
					/* @__PURE__ */ G(xt, {
						disableContentPadding: S,
						children: a
					}),
					se ? A : null,
					/* @__PURE__ */ G(wt, {
						primaryAction: s,
						secondaryAction: c
					})
				]
			})
		})
	});
}, Dr = (e) => /* @__PURE__ */ G(Er, { ...e });
Dr.displayName = "F0Dialog";
//#endregion
//#region src/patterns/F0Dialog/index.tsx
var Or = t(s("F0Dialog", Dr));
//#endregion
export { q as A, It as C, vt as D, J as E, rt as F, ct as M, at as N, _t as O, it as P, Y as S, yt as T, Wt as _, br as a, zt as b, sn as c, nn as d, $t as f, Ht as g, qt as h, xr as i, st as j, ht as k, rn as l, Zt as m, Cr as n, dn as o, Xt as p, yr as r, cn as s, Or as t, tn as u, Ut as v, Ot as w, Rt as x, Bt as y };
