import { withDataTestId as e } from "../../../lib/data-testid/index.js";
import { experimentalComponent as t } from "../../../lib/experimental.js";
import { cn as n } from "../../../lib/utils.js";
import { Tooltip as r, TooltipContent as i, TooltipProvider as a, TooltipTrigger as o } from "../../../ui/tooltip.js";
import { stripNativeTitle as s } from "../../../lib/strip-native-title.js";
import { Shortcut as c } from "../../../ui/Shortcut/index.js";
import l, { useCallback as u, useEffect as d, useMemo as f, useRef as p, useState as m } from "react";
import { Fragment as h, jsx as g, jsxs as _ } from "react/jsx-runtime";
//#region src/experimental/Overlays/Tooltip/index.tsx
function v({ label: e, description: t, items: v, children: y, shortcut: b, instant: x = !1, delay: S = 700, onOpen: C }) {
	let [w, T] = m(!1), E = p(null), D = f(() => x ? 100 : S, [S, x]), O = !!(e || t || v?.length || b), k = u(() => {
		E.current &&= (clearTimeout(E.current), null);
	}, []), A = u(() => {
		k(), T(!1);
	}, [k]), j = u(() => {
		O && (C?.(), k(), E.current = setTimeout(() => T(!0), D));
	}, [
		k,
		O,
		C,
		D
	]);
	d(() => A, [A]);
	let M = u((e) => {
		try {
			return e.matches(":focus-visible");
		} catch {
			return !1;
		}
	}, []), N = l.isValidElement(y) && y.type !== l.Fragment;
	return /* @__PURE__ */ g(h, { children: /* @__PURE__ */ g(a, {
		delayDuration: D,
		disableHoverableContent: x,
		children: /* @__PURE__ */ _(r, {
			open: O && w,
			onOpenChange: (e) => {
				e || A();
			},
			children: [/* @__PURE__ */ g(o, {
				asChild: !0,
				className: "pointer-events-auto",
				onPointerEnter: (e) => {
					e.pointerType !== "touch" && j();
				},
				onPointerLeave: () => A(),
				onPointerDown: () => A(),
				onFocus: (e) => {
					O && (M(e.currentTarget) ? (C?.(), T(!0)) : A());
				},
				onBlur: () => A(),
				children: N ? s(y) : /* @__PURE__ */ g("span", {
					className: "inline-flex h-fit w-fit",
					children: y
				})
			}), /* @__PURE__ */ g(i, {
				className: n("max-w-xs", b && "pr-1.5", x && "pointer-events-none"),
				children: /* @__PURE__ */ _("div", {
					className: "flex flex-col gap-0.5",
					children: [
						/* @__PURE__ */ _("div", {
							className: "flex items-center gap-2",
							children: [e && /* @__PURE__ */ g("p", {
								className: "font-semibold",
								children: e
							}), b && /* @__PURE__ */ g(c, {
								keys: b,
								variant: "inverse"
							})]
						}),
						t && /* @__PURE__ */ g("p", {
							className: "font-normal",
							children: t.toString()
						}),
						v && v.length > 0 && /* @__PURE__ */ g("ul", {
							className: "m-0 flex list-disc flex-col gap-0.5 pl-4 font-normal",
							children: v.map((e, t) => /* @__PURE__ */ g("li", { children: typeof e == "string" ? e : /* @__PURE__ */ _(h, { children: [/* @__PURE__ */ g("span", {
								className: "font-semibold",
								children: e.title
							}), e.description && /* @__PURE__ */ _(h, { children: [" ", e.description] })] }) }, `${t}-${typeof e == "string" ? e : e.title}`))
						})
					]
				})
			})]
		})
	}) });
}
var y = ["delay", "onOpen"], b = e(t("Tooltip", (e) => {
	let t = y.reduce((e, t) => {
		let { [t]: n, ...r } = e;
		return r;
	}, e);
	return /* @__PURE__ */ g(v, { ...t });
}));
//#endregion
export { b as Tooltip, v as TooltipInternal };
