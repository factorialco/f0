import { HoverCard as e, HoverCardContent as t, HoverCardTrigger as n } from "../../../../../../../ui/hover-card.js";
import { F0Card as r } from "../../../../../../../components/F0Card/F0Card.js";
import { useCallback as i, useEffect as a, useRef as o, useState as s } from "react";
import { jsx as c, jsxs as l } from "react/jsx-runtime";
//#region src/kits/ai/F0AiChat/components/markdownRenderers/entityRef/components/EntityRefHoverCard.tsx
function u({ id: u, trigger: d, resolver: f, mapToCard: p, fallbackCard: m }) {
	let h = o(/* @__PURE__ */ new Map()), [g, _] = s(() => h.current.get(u) ?? null), [v, y] = s(!1), [b, x] = s(!1), S = o(!0);
	a(() => () => {
		S.current = !1;
	}, []);
	let C = i(() => {
		if (g || v) return;
		let e = h.current.get(u);
		if (e) {
			_(e);
			return;
		}
		y(!0), x(!1), f(u).then((e) => {
			h.current.set(u, e), S.current && _(e);
		}).catch(() => {
			S.current && x(!0);
		}).finally(() => {
			S.current && y(!1);
		});
	}, [
		f,
		u,
		g,
		v
	]), w = b || !g ? m : p(g);
	return /* @__PURE__ */ l(e, {
		openDelay: 300,
		closeDelay: 100,
		onOpenChange: (e) => {
			e && C();
		},
		children: [/* @__PURE__ */ c(n, {
			asChild: !0,
			children: d
		}), /* @__PURE__ */ c(t, {
			side: "top",
			align: "start",
			className: "w-64 rounded-2xl border-none p-0 shadow-md",
			children: v ? /* @__PURE__ */ c(r.Skeleton, {}) : /* @__PURE__ */ c(r, { ...w })
		})]
	});
}
//#endregion
export { u as EntityRefHoverCard };
