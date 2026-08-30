import { cn as e } from "../../../../lib/utils.js";
import { useReducedMotion as t } from "../../../../lib/a11y.js";
import { useEffect as n, useRef as r, useState as i } from "react";
import { jsx as a, jsxs as o } from "react/jsx-runtime";
import { AnimatePresence as s, motion as c } from "motion/react";
//#region src/kits/ai/F0AiChatTextArea/components/TypewriterPlaceholder.tsx
var l = ({ placeholders: l, defaultPlaceholder: u, inputValue: d, inProgress: f }) => {
	let p = t(), [m, h] = i(""), [g, _] = i(0), [v, y] = i(!1), b = r(null), x = r(null), S = r(null), C = l[g] ?? u;
	return n(() => {
		let e = () => {
			x.current &&= (clearInterval(x.current), null), S.current &&= (clearInterval(S.current), null), b.current &&= (clearTimeout(b.current), null);
		};
		if (d.length > 0 || f) {
			y(!1), h(""), e();
			return;
		}
		if (p) return y(!1), h(C), e(), b.current = setTimeout(() => {
			let e = (g + 1) % Math.max(l.length, 1);
			_(e);
		}, 4e3), () => {
			e();
		};
		y(!0), h("");
		let t = 0;
		return x.current = setInterval(() => {
			t < C.length ? (h(C.slice(0, t + 1)), t++) : (x.current &&= (clearInterval(x.current), null), b.current = setTimeout(() => {
				S.current = setInterval(() => {
					t > 0 ? (t--, h(C.slice(0, t))) : (S.current &&= (clearInterval(S.current), null), b.current = setTimeout(() => {
						let e = (g + 1) % Math.max(l.length, 1);
						_(e);
					}, 1e3));
				}, 30);
			}, 2e3));
		}, 50), () => {
			e();
		};
	}, [
		d,
		f,
		C,
		g,
		l.length,
		p
	]), d.length > 0 || f ? null : /* @__PURE__ */ a(s, { children: /* @__PURE__ */ a(c.div, {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		transition: { duration: p ? 0 : .4 },
		className: e("col-start-1 row-start-1", "pointer-events-none", "text-f1-foreground-secondary", "text-[16px] sm:text-[14px] leading-[20px] font-normal", "pt-3 px-3"),
		children: /* @__PURE__ */ o("div", {
			className: e("overflow-hidden text-ellipsis whitespace-nowrap", "whitespace-pre-wrap break-words overflow-visible"),
			children: [m, v && !p && /* @__PURE__ */ a("span", {
				className: "f0-chat-cursor-blink",
				children: "|"
			})]
		})
	}) });
};
//#endregion
export { l as TypewriterPlaceholder };
