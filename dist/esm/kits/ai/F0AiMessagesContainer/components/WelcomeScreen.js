import { cn as e } from "../../../../lib/utils.js";
import { ButtonInternal as t } from "../../../../components/F0Button/internal.js";
import { useReducedMotion as n } from "../../../../lib/a11y.js";
import { useEffect as r, useRef as i, useState as a } from "react";
import { jsx as o, jsxs as s } from "react/jsx-runtime";
//#region src/kits/ai/F0AiMessagesContainer/components/WelcomeScreen.tsx
var c = 35, l = 22, u = 400, d = 2500, f = 220, p = ({ messages: p, caption: m, subtitle: h, cta: g, onClick: _, fullscreen: v = !1 }) => {
	let [y, b] = a(0), [x, S] = a(0), [C, w] = a("starting"), T = n(), E = p[y] ?? "", D = p.join("\0"), O = i(!0);
	r(() => {
		if (O.current) {
			O.current = !1;
			return;
		}
		b(0), S(0), w("writing");
	}, [D]), r(() => {
		if (T) return;
		let e;
		if (C === "starting") e = setTimeout(() => w("writing"), u);
		else if (C === "writing") x < E.length ? e = setTimeout(() => S((e) => e + 1), c) : w("holding");
		else if (C === "holding") {
			if (p.length <= 1) return;
			e = setTimeout(() => w("erasing"), d);
		} else C === "erasing" && (e = x > 0 ? setTimeout(() => S((e) => e - 1), l) : setTimeout(() => {
			b((e) => (e + 1) % p.length), w("starting");
		}, f));
		return () => {
			e && clearTimeout(e);
		};
	}, [
		C,
		x,
		E.length,
		p.length,
		T
	]);
	let k = !!_, A = k ? (e) => {
		(e.key === "Enter" || e.key === " ") && (e.preventDefault(), _?.());
	} : void 0;
	return /* @__PURE__ */ o("div", {
		className: e("flex w-full flex-1 justify-center px-4", v ? "items-end pb-24" : "items-center"),
		children: /* @__PURE__ */ s("div", {
			className: "flex flex-col items-center",
			children: [
				g && /* @__PURE__ */ o(t, {
					variant: "neutral",
					size: "sm",
					className: "mb-4",
					label: g.label,
					icon: g.icon,
					onClick: g.onClick
				}),
				m && /* @__PURE__ */ o("p", {
					className: "animate-in fade-in-0 text-center text-2xl font-semibold leading-[28px] text-f1-foreground-secondary duration-500",
					children: m
				}),
				/* @__PURE__ */ s("p", {
					role: k ? "button" : void 0,
					tabIndex: k ? 0 : void 0,
					onClick: _,
					onKeyDown: A,
					className: e("min-h-[28px] bg-gradient-to-r from-[#E55619] via-[#E51943] to-[#A1ADE5] bg-clip-text text-center text-2xl font-semibold leading-[28px] text-transparent", k && e("cursor-pointer transition-transform duration-200", "hover:scale-[1.02] focus-visible:scale-[1.02]", "motion-reduce:transition-none motion-reduce:hover:scale-100 motion-reduce:focus-visible:scale-100")),
					"aria-label": k ? E : void 0,
					children: [/* @__PURE__ */ o("span", {
						"aria-hidden": "true",
						children: T ? E : E.slice(0, x)
					}), /* @__PURE__ */ o("span", {
						className: "sr-only",
						children: E
					})]
				}, y),
				h && /* @__PURE__ */ o("p", {
					className: "animate-in fade-in-0 mt-3 text-center text-base leading-snug text-f1-foreground-secondary duration-500",
					children: h
				})
			]
		})
	});
};
//#endregion
export { p as WelcomeScreen };
