import { cn as e } from "../../../../lib/utils.js";
import t from "../../../../icons/app/Quote.js";
import { useI18n as n } from "../../../../lib/providers/i18n/i18n-provider.js";
import { ButtonInternal as r } from "../../../../components/F0Button/internal.js";
import { useLayoutEffect as i, useRef as a, useState as o } from "react";
import { createPortal as s } from "react-dom";
import { jsx as c } from "react/jsx-runtime";
//#region src/kits/ai/F0AiMessagesContainer/components/ReplyPopover.tsx
var l = 8, u = 8;
function d({ anchor: d, onReply: f }) {
	let p = n(), m = a(null), [h, g] = o(null);
	if (i(() => {
		if (!d) {
			g(null);
			return;
		}
		let e = m.current;
		if (!e) return;
		let t = e.offsetWidth, n = e.offsetHeight, r = window.innerWidth, i = window.innerHeight, a = d.rect.top - n - l;
		a < u && (a = d.rect.bottom + l), a = Math.min(Math.max(a, u), i - n - u);
		let o = d.rect.left + d.rect.width / 2 - t / 2, s = Math.min(Math.max(o, u), r - t - u);
		g({
			top: a,
			left: s
		});
	}, [d]), typeof document > "u" || !d) return null;
	let _ = p.ai.reply;
	return s(/* @__PURE__ */ c("div", {
		style: {
			position: "fixed",
			top: h?.top ?? -9999,
			left: h?.left ?? -9999,
			visibility: h ? "visible" : "hidden"
		},
		className: e("z-50 rounded-md bg-f1-background p-1 border border-solid border-f1-border-secondary", "drop-shadow"),
		children: /* @__PURE__ */ c(r, {
			ref: m,
			type: "button",
			variant: "ghost",
			label: _,
			icon: t,
			onClick: () => {
				f(d.text);
			}
		})
	}), document.body);
}
//#endregion
export { d as ReplyPopover };
