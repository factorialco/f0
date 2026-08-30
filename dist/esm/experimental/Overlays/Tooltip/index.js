import { withDataTestId as e } from "../../../lib/data-testid/index.js";
import { experimentalComponent as t } from "../../../lib/experimental.js";
import { cn as n } from "../../../lib/utils.js";
import { Tooltip as r, TooltipContent as i, TooltipProvider as a, TooltipTrigger as o } from "../../../ui/tooltip.js";
import { stripNativeTitle as s } from "../../../lib/strip-native-title.js";
import { Shortcut as c } from "../../../ui/Shortcut/index.js";
import { useCallback as l, useEffect as u, useMemo as d, useRef as f, useState as p } from "react";
import { Fragment as m, jsx as h, jsxs as g } from "react/jsx-runtime";
//#region src/experimental/Overlays/Tooltip/index.tsx
function _({ label: e, description: t, items: _, children: v, shortcut: y, instant: b = !1, delay: x = 700, onOpen: S }) {
	let [C, w] = p(!1), T = f(null), E = d(() => b ? 100 : x, [x, b]), D = !!(e || t || _?.length || y), O = l(() => {
		T.current &&= (clearTimeout(T.current), null);
	}, []), k = l(() => {
		O(), w(!1);
	}, [O]), A = l(() => {
		D && (S?.(), O(), T.current = setTimeout(() => w(!0), E));
	}, [
		O,
		D,
		S,
		E
	]);
	u(() => k, [k]);
	let j = l((e) => {
		try {
			return e.matches(":focus-visible");
		} catch {
			return !1;
		}
	}, []);
	return /* @__PURE__ */ h(m, { children: /* @__PURE__ */ h(a, {
		delayDuration: E,
		disableHoverableContent: b,
		children: /* @__PURE__ */ g(r, {
			open: D && C,
			onOpenChange: (e) => {
				e || k();
			},
			children: [/* @__PURE__ */ h(o, {
				asChild: !0,
				className: "pointer-events-auto",
				onPointerEnter: (e) => {
					e.pointerType !== "touch" && A();
				},
				onPointerLeave: () => k(),
				onPointerDown: () => k(),
				onFocus: (e) => {
					D && (j(e.currentTarget) ? (S?.(), w(!0)) : k());
				},
				onBlur: () => k(),
				children: s(v)
			}), /* @__PURE__ */ h(i, {
				className: n("max-w-xs", y && "pr-1.5", b && "pointer-events-none"),
				children: /* @__PURE__ */ g("div", {
					className: "flex flex-col gap-0.5",
					children: [
						/* @__PURE__ */ g("div", {
							className: "flex items-center gap-2",
							children: [e && /* @__PURE__ */ h("p", {
								className: "font-semibold",
								children: e
							}), y && /* @__PURE__ */ h(c, {
								keys: y,
								variant: "inverse"
							})]
						}),
						t && /* @__PURE__ */ h("p", {
							className: "font-normal",
							children: t.toString()
						}),
						_ && _.length > 0 && /* @__PURE__ */ h("ul", {
							className: "m-0 flex list-disc flex-col gap-0.5 pl-4 font-normal",
							children: _.map((e, t) => /* @__PURE__ */ h("li", { children: typeof e == "string" ? e : /* @__PURE__ */ g(m, { children: [/* @__PURE__ */ h("span", {
								className: "font-semibold",
								children: e.title
							}), e.description && /* @__PURE__ */ g(m, { children: [" ", e.description] })] }) }, `${t}-${typeof e == "string" ? e : e.title}`))
						})
					]
				})
			})]
		})
	}) });
}
var v = ["delay", "onOpen"], y = e(t("Tooltip", (e) => {
	let t = v.reduce((e, t) => {
		let { [t]: n, ...r } = e;
		return r;
	}, e);
	return /* @__PURE__ */ h(_, { ...t });
}));
//#endregion
export { y as Tooltip, _ as TooltipInternal };
