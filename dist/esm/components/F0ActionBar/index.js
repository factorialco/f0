import { withDataTestId as e } from "../../lib/data-testid/index.js";
import { cn as t } from "../../lib/utils.js";
import { F0Icon as n } from "../F0Icon/index.js";
import r from "../../icons/app/AlertCircle.js";
import i from "../../icons/app/AlertCircleLine.js";
import { F0Button as a } from "../F0Button/F0Button.js";
import { Dropdown as o, MobileDropdown as s } from "../../experimental/Navigation/Dropdown/index.js";
import { F0ButtonDropdown as c } from "../F0ButtonDropdown/F0ButtonDropdown.js";
import l from "../../icons/animated/CheckCircle.js";
import { Spinner as u } from "../../ui/Spinner/index.js";
import { Fragment as d, forwardRef as f, useCallback as p, useEffect as m, useImperativeHandle as h, useMemo as g, useRef as _, useState as v } from "react";
import { Fragment as y, jsx as b, jsxs as x } from "react/jsx-runtime";
import { AnimatePresence as S, motion as C } from "motion/react";
//#region src/components/F0ActionBar/index.tsx
function w(e) {
	return "items" in e;
}
var T = (e) => Array.isArray(e) ? e.every((e) => w(e)) ? e : [{ items: e }] : [e], E = [
	"idle",
	"loading",
	"success",
	"error"
], D = "f0-action-bar-error-navigate", O = "f0-action-bar-wiggle", k = 600, A = ({ status: e, isLight: a }) => e === "loading" ? /* @__PURE__ */ b(u, {
	size: "small",
	className: t(!a && "text-f1-foreground-inverse")
}) : e === "success" ? /* @__PURE__ */ b(l, {
	animate: "animate",
	className: "h-5 w-5 text-f1-icon-positive"
}) : e === "error" ? /* @__PURE__ */ b(n, {
	icon: r,
	size: "md",
	color: a ? "critical" : "inverse"
}) : /* @__PURE__ */ b(n, {
	icon: i,
	size: "md",
	color: a ? "currentColor" : "inverse"
}), j = f(({ isOpen: e, secondaryActions: n = [], label: r, variant: i = "dark", leftContent: l, status: u = "idle", ...f }, w) => {
	let E = _(null), j = _(null), [M, N] = v(null);
	m(() => {
		let e = document.getElementById("content");
		if (!e) return;
		let t = () => {
			let t = e.getBoundingClientRect(), n = t.left, r = t.width;
			N((e) => e && e.left === n && e.width === r ? e : {
				left: n,
				width: r
			});
		};
		t();
		let n = new ResizeObserver(t);
		return n.observe(e), () => n.disconnect();
	}, []), m(() => () => {
		j.current && clearTimeout(j.current);
	}, []), h(w, () => ({ wiggle(e) {
		let t = E.current;
		if (!t) return;
		let n = e?.errorHighlight ? D : O;
		j.current && clearTimeout(j.current), t.classList.remove(D, O), t.offsetWidth, t.classList.add(n), j.current = setTimeout(() => {
			t.classList.remove(D, O), j.current = null;
		}, k);
	} }));
	let [P, F] = v(!1);
	m(() => {
		if (u === "error") {
			let e = E.current;
			if (!e) return;
			j.current && clearTimeout(j.current), F(!1), e.classList.remove(D), e.offsetWidth, e.classList.add(D), j.current = setTimeout(() => {
				e.classList.remove(D), j.current = null, F(!0);
			}, k);
		} else F(!1), j.current &&= (clearTimeout(j.current), null), E.current?.classList.remove(D, O);
	}, [u]);
	let I = n.slice(0, 2), L = n.slice(2).map((e) => ({
		...e,
		critical: e.critical || !1
	})), R = i === "light", z = u === "loading" || u === "success", B = g(() => T(f.primaryActions ?? []), [f.primaryActions]), V = B.some((e) => e.items.some((e) => e.loading)), H = g(() => B.map((e) => ({
		...e,
		items: e.items.map((e) => ({
			value: e.label,
			label: e.label,
			icon: e.icon,
			critical: e.critical,
			description: e.description,
			disabled: e.disabled
		}))
	})), [B]), U = g(() => B.length === 1 && B[0].items.length === 1 ? B[0].items[0] : null, [B]), W = p((e) => B.flatMap((e) => e.items).find((t) => t.label === e), [B]), G = R ? "" : "dark";
	return /* @__PURE__ */ b(S, { children: e && /* @__PURE__ */ x(C.div, {
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
		style: M ? {
			left: M.left,
			right: window.innerWidth - M.left - M.width
		} : void 0,
		className: t("fixed bottom-2 left-2 right-2 z-50 flex h-fit flex-col items-center gap-2 rounded-xl p-2 shadow-lg backdrop-blur-sm sm:bottom-5 sm:h-12 sm:w-max sm:flex-row sm:gap-5 sm:justify-between", M ? "sm:left-auto sm:right-auto sm:mx-auto" : "sm:left-2 sm:right-2 sm:mx-auto", R ? "border border-solid bg-f1-background text-f1-foreground" : "bg-f1-background-inverse text-f1-foreground dark:bg-f1-background-tertiary", R && P ? "border-f1-border-critical-bold bg-f1-background-critical/10" : R ? "border-f1-border-secondary" : ""),
		children: [
			l,
			(!!r || u && u !== "idle") && /* @__PURE__ */ x("div", {
				className: "ml-2 flex items-center gap-2",
				children: [u && u !== "idle" && /* @__PURE__ */ b(A, {
					status: u,
					isLight: R
				}), !!r && /* @__PURE__ */ b("span", {
					className: t("font-medium", R ? "text-f1-foreground" : "text-f1-foreground-inverse"),
					children: r
				})]
			}),
			/* @__PURE__ */ x("div", { children: [/* @__PURE__ */ b("div", {
				className: t(G, "flex flex-col items-center gap-2 sm:hidden [&_button]:w-full [&_div]:w-full"),
				children: /* @__PURE__ */ x(d, { children: [/* @__PURE__ */ b(s, { items: n }), U ? /* @__PURE__ */ b(a, {
					label: U.label,
					icon: U.icon,
					onClick: U.onClick,
					disabled: z || U.disabled,
					loading: U.loading ?? u === "loading",
					size: "lg"
				}) : /* @__PURE__ */ b(c, {
					items: H,
					onClick: (e) => {
						W(e)?.onClick?.();
					},
					size: "lg",
					disabled: z || V,
					loading: V
				})] }, "mobile-actions")
			}), /* @__PURE__ */ b("div", {
				className: t(G, "hidden items-center gap-2 sm:flex"),
				children: /* @__PURE__ */ x(d, { children: [
					L.length > 0 && /* @__PURE__ */ b(o, { items: L }),
					I.slice().reverse().map((e) => /* @__PURE__ */ b(a, {
						variant: e.critical ? "critical" : "outline",
						label: e.label,
						icon: e.icon,
						onClick: e.onClick,
						disabled: z || e.disabled
					}, e.label)),
					U ? /* @__PURE__ */ b(a, {
						label: U.label,
						icon: U.icon,
						onClick: U.onClick,
						disabled: z || U.disabled,
						loading: U.loading ?? u === "loading"
					}) : /* @__PURE__ */ b(y, { children: /* @__PURE__ */ b(c, {
						items: H,
						onClick: (e) => {
							W(e)?.onClick?.();
						},
						disabled: z || V,
						loading: V
					}) })
				] }, "desktop-actions")
			})] })
		]
	}) });
});
j.displayName = "F0ActionBar";
var M = e(j);
//#endregion
export { M as F0ActionBar, E as actionBarStatuses };
