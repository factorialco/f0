import { experimentalComponent as e } from "../../../lib/experimental.js";
import { cn as t } from "../../../lib/utils.js";
import n from "../../../icons/app/Cross.js";
import { useI18n as r } from "../../../lib/providers/i18n/i18n-provider.js";
import { ButtonInternal as i } from "../../../components/F0Button/internal.js";
import { Popover as a, PopoverAnchor as o, PopoverArrow as s, PopoverContent as c } from "../../../ui/popover.js";
import { useEffect as l, useId as u, useMemo as d, useRef as f } from "react";
import { jsx as p, jsxs as m } from "react/jsx-runtime";
//#region src/experimental/Overlays/F0Coachmark/F0Coachmark.tsx
var h = 12, g = 6, _ = ({ target: e, title: _, description: v, actionLabel: y, onAction: b, onClose: x, step: S, arrow: C = !0, side: w = "bottom", align: T = "center", sideOffset: E = C ? 8 : 4, container: D }) => {
	let O = r(), k = f(null), A = f(null), j = u(), M = `${j}-title`, N = `${j}-description`, P = d(() => ({ current: e }), [e]), F = f(S?.current);
	l(() => {
		F.current !== S?.current && (F.current = S?.current, k.current?.focus());
	}, [S?.current]);
	let I = !S || S.current >= S.total, L = y ?? (I ? O.coachmark.done : O.coachmark.next);
	return /* @__PURE__ */ m(a, {
		open: !0,
		onOpenChange: (e) => {
			e || x();
		},
		children: [/* @__PURE__ */ p(o, { virtualRef: P }), /* @__PURE__ */ m(c, {
			ref: k,
			container: D,
			side: w,
			align: T,
			sideOffset: E,
			collisionPadding: 8,
			tabIndex: -1,
			"aria-labelledby": M,
			"aria-describedby": v ? N : void 0,
			onOpenAutoFocus: (e) => {
				e.preventDefault(), A.current = document.activeElement, k.current?.focus();
			},
			onCloseAutoFocus: (e) => {
				e.preventDefault();
				let t = A.current;
				A.current = null, t && t !== document.body && document.contains(t) && t.focus();
			},
			onInteractOutside: (e) => e.preventDefault(),
			className: t("w-72 overflow-visible rounded-lg border-none p-4", "shadow-lg backdrop-blur-sm", "bg-f1-background-inverse text-f1-foreground-inverse", "dark:bg-f1-background-tertiary"),
			children: [/* @__PURE__ */ m("div", {
				className: "dark flex flex-col gap-3",
				children: [/* @__PURE__ */ m("div", {
					className: "flex flex-col gap-1",
					children: [/* @__PURE__ */ m("div", {
						className: "flex flex-row items-start justify-between gap-2",
						children: [/* @__PURE__ */ p("p", {
							id: M,
							className: "font-semibold",
							children: _
						}), /* @__PURE__ */ p(i, {
							variant: "outline",
							icon: n,
							size: "sm",
							hideLabel: !0,
							onClick: x,
							label: O.actions.close,
							className: "flex-shrink-0"
						})]
					}), v && /* @__PURE__ */ p("p", {
						id: N,
						className: "font-normal text-f1-foreground-inverse-secondary",
						children: v
					})]
				}), /* @__PURE__ */ m("div", {
					className: "flex flex-row items-center gap-3",
					children: [S && /* @__PURE__ */ m("p", {
						className: "text-f1-foreground-inverse-secondary",
						children: [
							S.current,
							"/",
							S.total
						]
					}), /* @__PURE__ */ p(i, {
						variant: "outline",
						label: L,
						onClick: b,
						className: "ml-auto"
					})]
				})]
			}), C && /* @__PURE__ */ p(s, {
				asChild: !0,
				width: h,
				height: g,
				children: /* @__PURE__ */ p("svg", {
					viewBox: `0 0 ${h} ${g}`,
					children: /* @__PURE__ */ p("path", {
						d: `M0 0L${h / 2} ${g}L${h} 0Z`,
						className: "fill-f1-background-inverse dark:fill-f1-background-tertiary"
					})
				})
			})]
		})]
	});
};
_.displayName = "F0Coachmark";
var v = e("F0Coachmark", _);
//#endregion
export { v as F0Coachmark };
