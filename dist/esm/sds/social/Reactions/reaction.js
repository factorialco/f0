import { cn as e } from "../../../lib/utils.js";
import { EmojiImage as t, getEmojiLabel as n, useEmojiConfetti as r } from "../../../lib/emojis.js";
import { TooltipInternal as i } from "../../../experimental/Overlays/Tooltip/index.js";
import { Action as a } from "../../../ui/Action/Action.js";
import { useEffect as o, useRef as s, useState as c } from "react";
import { jsx as l } from "react/jsx-runtime";
import u from "@number-flow/react";
//#region src/sds/social/Reactions/reaction.tsx
function d({ emoji: d, initialCount: f, hasReacted: p = !1, users: m, loadUsers: h, onInteraction: g, size: _ = "md" }) {
	let [v, y] = c(p), [b, x] = c(f), [S, C] = c(m), w = s(null), T = s(null), E = s(0), { fireEmojiConfetti: D } = r();
	o(() => {
		E.current += 1, C(m), T.current = null;
	}, [
		d,
		f,
		m
	]);
	let O = () => {
		if (!h || T.current || (S?.length ?? 0) >= f) return;
		let e = h(), t = E.current;
		T.current = e, e.then((e) => {
			E.current === t && C(e);
		}).catch(() => {}).finally(() => {
			T.current === e && (T.current = null);
		});
	}, k = (e, t) => {
		e.stopPropagation(), x(b + (v ? -1 : 1)), y(!v), g?.(t), v || D(t, w);
	}, A = S?.map((e) => e.name).join(", ") || "", j = /* @__PURE__ */ l(a, {
		ref: w,
		variant: "outline",
		size: "md",
		compact: !0,
		onClick: (e) => {
			k(e, d);
		},
		className: e("flex items-center gap-1 px-0.5 font-medium leading-tight shadow-none transition-all active:scale-90 motion-reduce:transition-none motion-reduce:active:scale-100", v && "border-f1-border-selected bg-f1-background-selected hover:border-f1-border-selected-bold"),
		"aria-label": `${n(d)}: ${b}`,
		"aria-pressed": v,
		prepend: /* @__PURE__ */ l(t, {
			emoji: d,
			size: _
		}),
		children: /* @__PURE__ */ l(u, {
			value: b,
			spinTiming: {
				duration: 200,
				easing: "cubic-bezier(0.175, 0.885, 0.32, 1.275)"
			},
			className: e("tabular-nums", v ? "text-f1-foreground-selected" : "text-f1-foreground")
		})
	});
	return A || h ? /* @__PURE__ */ l(i, {
		label: A || n(d),
		onOpen: O,
		children: j
	}) : j;
}
//#endregion
export { d as Reaction };
