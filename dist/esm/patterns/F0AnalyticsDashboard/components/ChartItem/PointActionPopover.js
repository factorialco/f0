import { cn as e } from "../../../../lib/utils.js";
import { useI18n as t } from "../../../../lib/providers/i18n/i18n-provider.js";
import { ButtonInternal as n } from "../../../../components/F0Button/internal.js";
import r from "../../../../icons/ai/One.js";
import { useEffect as i, useLayoutEffect as a, useRef as o, useState as s } from "react";
import { createPortal as c } from "react-dom";
import { jsx as l } from "react/jsx-runtime";
//#region src/patterns/F0AnalyticsDashboard/components/ChartItem/PointActionPopover.tsx
var u = 8, d = 8;
function f({ anchor: f, onAsk: p, onDismiss: m }) {
	let h = t(), g = o(null), [_, v] = s(null);
	return a(() => {
		if (!f) {
			v(null);
			return;
		}
		let e = g.current;
		if (!e) return;
		let { offsetWidth: t, offsetHeight: n } = e, r = f.clientY - n - u;
		r < d && (r = f.clientY + u), r = Math.min(Math.max(r, d), window.innerHeight - n - d);
		let i = f.clientX - t / 2, a = Math.min(Math.max(i, d), window.innerWidth - t - d);
		v({
			top: r,
			left: a
		});
	}, [f]), i(() => {
		if (!f) return;
		let e = requestAnimationFrame(() => {
			g.current?.querySelector("button")?.focus();
		}), t = (e) => {
			e.key === "Escape" && m("escape");
		}, n = (e) => {
			let t = g.current;
			t && e.target instanceof Node && t.contains(e.target) || m("outside");
		};
		document.addEventListener("keydown", t), document.addEventListener("pointerdown", n, !0);
		let r = () => m("viewport");
		return window.addEventListener("scroll", r, !0), window.addEventListener("resize", r), () => {
			cancelAnimationFrame(e), document.removeEventListener("keydown", t), document.removeEventListener("pointerdown", n, !0), window.removeEventListener("scroll", r, !0), window.removeEventListener("resize", r);
		};
	}, [f, m]), typeof document > "u" || !f ? null : c(/* @__PURE__ */ l("div", {
		ref: g,
		style: {
			position: "fixed",
			top: _?.top ?? -9999,
			left: _?.left ?? -9999,
			visibility: _ ? "visible" : "hidden"
		},
		className: e("z-50 rounded-md bg-f1-background p-1 border border-solid border-f1-border-secondary", "drop-shadow"),
		children: /* @__PURE__ */ l(n, {
			type: "button",
			variant: "ghost",
			label: h.ai.dashboardItem.askOne,
			icon: r,
			onClick: p
		})
	}), document.body);
}
//#endregion
export { f as PointActionPopover };
