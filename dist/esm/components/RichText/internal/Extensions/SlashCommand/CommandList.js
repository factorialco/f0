import { cn as e } from "../../../../../lib/utils.js";
import { F0Icon as t } from "../../../../F0Icon/index.js";
import { forwardRef as n, useCallback as r, useEffect as i, useImperativeHandle as a, useMemo as o, useRef as s, useState as c } from "react";
import { jsx as l, jsxs as u } from "react/jsx-runtime";
//#region src/components/RichText/internal/Extensions/SlashCommand/CommandList.tsx
var d = n(({ items: n, groups: d, command: f }, p) => {
	let [m, h] = c(0), g = s(null), _ = s(null), v = o(() => d || [{
		title: "",
		commands: n
	}], [d, n]), y = o(() => v.flatMap((e) => e.commands), [v]), b = o(() => {
		let e = [], t = 0;
		for (let n of v) e.push(t), t += n.commands.length;
		return e;
	}, [v]), x = r((e) => {
		let t = y[e];
		t && f(t);
	}, [y, f]), S = r((e) => {
		let t = g.current;
		if (!t) return;
		let n = t.getBoundingClientRect(), r = e.getBoundingClientRect();
		r.top < n.top ? t.scrollTop += r.top - n.top : r.bottom > n.bottom && (t.scrollTop += r.bottom - n.bottom);
	}, []), C = r(() => {
		h((e) => e <= 0 ? y.length - 1 : e - 1);
	}, [y.length]), w = r(() => {
		h((e) => e >= y.length - 1 ? 0 : e + 1);
	}, [y.length]), T = r(() => {
		x(m);
	}, [m, x]);
	i(() => {
		_.current && S(_.current);
	}, [m, S]), i(() => {
		h(0);
	}, [n.length]), a(p, () => ({ onKeyDown: ({ event: e }) => e.key === "ArrowUp" ? (e.preventDefault(), C(), !0) : e.key === "ArrowDown" ? (e.preventDefault(), w(), !0) : e.key === "Enter" && (e.preventDefault(), T(), !0) }), [
		C,
		w,
		T
	]);
	let E = (e, t) => b[e] + t;
	return /* @__PURE__ */ l("div", {
		ref: g,
		className: "scrollbar-macos max-h-96 w-72 overflow-y-auto rounded-lg border border-solid border-f1-border-secondary bg-f1-background drop-shadow-md",
		children: v.map((n, r) => /* @__PURE__ */ u("div", { children: [/* @__PURE__ */ u("div", {
			className: "p-1",
			children: [d && n.title && /* @__PURE__ */ l("div", {
				className: "p-2",
				children: /* @__PURE__ */ l("p", {
					className: "text-sm font-medium tracking-wide text-f1-foreground-secondary",
					children: n.title
				})
			}), n.commands.map((n, i) => {
				let a = E(r, i), o = a === m;
				return /* @__PURE__ */ u("div", {
					ref: o ? _ : null,
					className: e("flex w-full cursor-pointer items-center gap-2 rounded px-2 py-1.5 text-left text-sm hover:bg-f1-background-hover", o && "bg-f1-background-secondary"),
					onClick: () => {
						h(a), x(a);
					},
					onMouseEnter: () => h(a),
					children: [n.emoji ? /* @__PURE__ */ l("span", {
						className: "text-base",
						children: n.emoji
					}) : n.icon ? /* @__PURE__ */ l(t, {
						icon: n.icon,
						className: "text-f1-foreground-secondary"
					}) : null, /* @__PURE__ */ l("p", {
						className: "flex-grow text-sm font-medium text-f1-foreground",
						children: n.title
					})]
				}, `${r}-${i}`);
			})]
		}), d && r < v.length - 1 && /* @__PURE__ */ l("div", {
			className: "py-1",
			children: /* @__PURE__ */ l("div", { className: "h-[1px] w-full bg-f1-border-secondary" })
		})] }, r))
	});
});
d.displayName = "CommandList";
//#endregion
export { d as CommandList };
