import { withDataTestId as e } from "../../lib/data-testid/index.js";
import { cn as t } from "../../lib/utils.js";
import { F0Icon as n } from "../F0Icon/index.js";
import r from "../../icons/app/AlertCircle.js";
import i from "../../icons/app/AlertCircleLine.js";
import { TooltipInternal as a } from "../../experimental/Overlays/Tooltip/index.js";
import { F0Button as o } from "../F0Button/F0Button.js";
import { Dropdown as s, MobileDropdown as c } from "../../experimental/Navigation/Dropdown/index.js";
import { F0ButtonDropdown as l } from "../F0ButtonDropdown/F0ButtonDropdown.js";
import u from "../../icons/animated/CheckCircle.js";
import { Spinner as d } from "../../ui/Spinner/index.js";
import { Fragment as f, forwardRef as p, useCallback as m, useEffect as h, useImperativeHandle as g, useMemo as _, useRef as v, useState as y } from "react";
import { Fragment as b, jsx as x, jsxs as S } from "react/jsx-runtime";
import { AnimatePresence as C, motion as w } from "motion/react";
//#region src/components/F0ActionBar/index.tsx
var T = ({ reason: e, children: t }) => e ? /* @__PURE__ */ x(a, {
	label: e,
	children: /* @__PURE__ */ x("span", {
		className: "inline-flex",
		tabIndex: 0,
		children: t
	})
}) : t;
function E(e) {
	return "items" in e;
}
var D = (e) => Array.isArray(e) ? e.every((e) => E(e)) ? e : [{ items: e }] : [e], O = [
	"idle",
	"loading",
	"success",
	"error"
], k = "f0-action-bar-error-navigate", A = "f0-action-bar-wiggle", j = 600, M = ({ status: e, isLight: a }) => e === "loading" ? /* @__PURE__ */ x(d, {
	size: "small",
	className: t(!a && "text-f1-foreground-inverse")
}) : e === "success" ? /* @__PURE__ */ x(u, {
	animate: "animate",
	className: "h-5 w-5 text-f1-icon-positive"
}) : e === "error" ? /* @__PURE__ */ x(n, {
	icon: r,
	size: "md",
	color: a ? "critical" : "inverse"
}) : /* @__PURE__ */ x(n, {
	icon: i,
	size: "md",
	color: a ? "currentColor" : "inverse"
}), N = p(({ isOpen: e, secondaryActions: n = [], label: r, variant: i = "dark", leftContent: a, status: u = "idle", ...d }, p) => {
	let E = v(null), O = v(null), [N, P] = y(null);
	h(() => {
		let e = document.getElementById("content");
		if (!e) return;
		let t = () => {
			let t = e.getBoundingClientRect(), n = t.left, r = t.width;
			P((e) => e && e.left === n && e.width === r ? e : {
				left: n,
				width: r
			});
		};
		t();
		let n = new ResizeObserver(t);
		return n.observe(e), () => n.disconnect();
	}, []), h(() => () => {
		O.current && clearTimeout(O.current);
	}, []), g(p, () => ({ wiggle(e) {
		let t = E.current;
		if (!t) return;
		let n = e?.errorHighlight ? k : A;
		O.current && clearTimeout(O.current), t.classList.remove(k, A), t.offsetWidth, t.classList.add(n), O.current = setTimeout(() => {
			t.classList.remove(k, A), O.current = null;
		}, j);
	} }));
	let [F, I] = y(!1);
	h(() => {
		if (u === "error") {
			let e = E.current;
			if (!e) return;
			O.current && clearTimeout(O.current), I(!1), e.classList.remove(k), e.offsetWidth, e.classList.add(k), O.current = setTimeout(() => {
				e.classList.remove(k), O.current = null, I(!0);
			}, j);
		} else I(!1), O.current &&= (clearTimeout(O.current), null), E.current?.classList.remove(k, A);
	}, [u]);
	let L = n.slice(0, 2), R = n.slice(2).map((e) => ({
		...e,
		critical: e.critical || !1
	})), z = i === "light", B = u === "loading" || u === "success", V = _(() => D(d.primaryActions ?? []), [d.primaryActions]), H = V.some((e) => e.items.some((e) => e.loading)), U = _(() => V.map((e) => ({
		...e,
		items: e.items.map((e) => ({
			value: e.label,
			label: e.label,
			icon: e.icon,
			critical: e.critical,
			description: e.description,
			disabled: e.disabled
		}))
	})), [V]), W = _(() => V.length === 1 && V[0].items.length === 1 ? V[0].items[0] : null, [V]), G = m((e) => V.flatMap((e) => e.items).find((t) => t.label === e), [V]), K = z ? "" : "dark";
	return /* @__PURE__ */ x(C, { children: e && /* @__PURE__ */ S(w.div, {
		ref: E,
		"data-variant": i,
		initial: {
			opacity: 0,
			y: 32,
			filter: "blur(6px)"
		},
		animate: {
			opacity: 1,
			y: 0,
			filter: "blur(0px)"
		},
		exit: {
			opacity: 0,
			y: 32,
			filter: "blur(6px)"
		},
		transition: {
			ease: [
				.175,
				.885,
				.32,
				1.275
			],
			duration: .3
		},
		style: N ? {
			left: N.left,
			right: window.innerWidth - N.left - N.width
		} : void 0,
		className: t("fixed bottom-2 left-2 right-2 z-50 flex h-fit flex-col items-center gap-2 rounded-xl p-2 shadow-lg backdrop-blur-sm sm:bottom-5 sm:h-12 sm:w-max sm:flex-row sm:gap-5 sm:justify-between", N ? "sm:left-auto sm:right-auto sm:mx-auto" : "sm:left-2 sm:right-2 sm:mx-auto", z ? "border border-solid bg-f1-background text-f1-foreground" : "bg-f1-background-inverse text-f1-foreground dark:bg-f1-background-tertiary", z && F ? "border-f1-border-critical-bold bg-f1-background-critical/10" : z ? "border-f1-border-secondary" : ""),
		children: [
			a,
			(!!r || u && u !== "idle") && /* @__PURE__ */ S("div", {
				className: "ml-2 flex items-center gap-2",
				children: [u && u !== "idle" && /* @__PURE__ */ x(M, {
					status: u,
					isLight: z
				}), !!r && /* @__PURE__ */ x("span", {
					className: t("font-medium", z ? "text-f1-foreground" : "text-f1-foreground-inverse"),
					children: r
				})]
			}),
			/* @__PURE__ */ S("div", { children: [/* @__PURE__ */ x("div", {
				className: t(K, "flex flex-col items-center gap-2 sm:hidden [&_button]:w-full [&_div]:w-full"),
				children: /* @__PURE__ */ S(f, { children: [/* @__PURE__ */ x(c, { items: n }), W ? /* @__PURE__ */ x(T, {
					reason: W.tooltip,
					children: /* @__PURE__ */ x(o, {
						label: W.label,
						icon: W.icon,
						onClick: W.onClick,
						disabled: B || W.disabled,
						loading: W.loading ?? u === "loading",
						size: "lg"
					})
				}) : /* @__PURE__ */ x(l, {
					items: U,
					onClick: (e) => {
						G(e)?.onClick?.();
					},
					size: "lg",
					disabled: B || H,
					loading: H
				})] }, "mobile-actions")
			}), /* @__PURE__ */ x("div", {
				className: t(K, "hidden items-center gap-2 sm:flex"),
				children: /* @__PURE__ */ S(f, { children: [
					R.length > 0 && /* @__PURE__ */ x(s, { items: R }),
					L.slice().reverse().map((e) => /* @__PURE__ */ x(o, {
						variant: e.critical ? "critical" : "outline",
						label: e.label,
						icon: e.icon,
						onClick: e.onClick,
						disabled: B || e.disabled
					}, e.label)),
					W ? /* @__PURE__ */ x(T, {
						reason: W.tooltip,
						children: /* @__PURE__ */ x(o, {
							label: W.label,
							icon: W.icon,
							onClick: W.onClick,
							disabled: B || W.disabled,
							loading: W.loading ?? u === "loading"
						})
					}) : /* @__PURE__ */ x(b, { children: /* @__PURE__ */ x(l, {
						items: U,
						onClick: (e) => {
							G(e)?.onClick?.();
						},
						disabled: B || H,
						loading: H
					}) })
				] }, "desktop-actions")
			})] })
		]
	}) });
});
N.displayName = "F0ActionBar";
var P = e(N);
//#endregion
export { P as F0ActionBar, O as actionBarStatuses };
