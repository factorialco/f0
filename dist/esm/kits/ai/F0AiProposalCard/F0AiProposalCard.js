import { cn as e, focusRing as t } from "../../../lib/utils.js";
import { F0Button as n } from "../../../components/F0Button/F0Button.js";
import { F0AvatarModule as r } from "../../../components/avatars/F0AvatarModule/index.js";
import { useEffect as i, useId as a, useRef as o, useState as s } from "react";
import { Fragment as c, jsx as l, jsxs as u } from "react/jsx-runtime";
//#region src/kits/ai/F0AiProposalCard/F0AiProposalCard.tsx
var d = 180, f = (e) => Number.isFinite(e) ? Math.max(0, Math.floor(e)) : d, p = (e, t) => e.length <= t ? e : `${e.slice(0, t).trimEnd()}...`, m = (e) => e.showActions !== !1, h = (e) => Object.fromEntries(Object.entries(e).filter(([e]) => e.startsWith("data-")));
function g(g) {
	let { module: _, heading: v, title: y, subtitle: b, description: x, seeMoreLabel: S, maxCollapsedDescriptionLength: C = d } = g, [w, T] = s(!1), E = a(), D = o(null), O = f(C), k = x.length > O, A = w ? x : p(x, O), j = m(g) ? g : null, M = h(g);
	return i(() => {
		w && D.current?.focus();
	}, [w]), /* @__PURE__ */ u("section", {
		className: "overflow-hidden rounded-xl border border-solid border-f1-border-secondary bg-f1-background",
		...M,
		children: [
			/* @__PURE__ */ u("div", {
				className: "flex items-center gap-3 px-4 py-3",
				children: [_ && /* @__PURE__ */ l(r, {
					module: _,
					size: "md"
				}), /* @__PURE__ */ u("div", {
					className: "min-w-0 flex-1",
					children: [/* @__PURE__ */ l("h2", {
						className: "truncate text-lg font-semibold text-f1-foreground",
						children: v
					}), b && /* @__PURE__ */ l("p", {
						className: "truncate text-base text-f1-foreground-secondary",
						children: b
					})]
				})]
			}),
			/* @__PURE__ */ u("div", {
				className: "flex flex-col gap-2 px-4 py-3",
				children: [/* @__PURE__ */ l("h3", {
					className: "text-lg font-semibold text-f1-foreground",
					children: y
				}), /* @__PURE__ */ u("p", {
					id: E,
					ref: D,
					tabIndex: w ? -1 : void 0,
					className: e("text-base text-f1-foreground whitespace-pre-wrap break-words", w && t(), !w && "inline"),
					children: [A, k && !w && /* @__PURE__ */ u(c, { children: [" ", /* @__PURE__ */ l("button", {
						type: "button",
						className: e("inline cursor-pointer rounded-none border-0 bg-transparent p-0 text-base text-f1-foreground underline underline-offset-2 hover:text-f1-foreground-secondary", t()),
						"aria-controls": E,
						"aria-expanded": w,
						onClick: () => T(!0),
						children: S
					})] })]
				})]
			}),
			j && /* @__PURE__ */ l("div", {
				className: "flex items-center justify-end gap-3 border-0 border-t border-solid border-f1-border-secondary px-4 py-3",
				children: /* @__PURE__ */ l(n, {
					type: "button",
					label: j.primaryActionLabel,
					icon: j.primaryActionIcon,
					onClick: j.onPrimaryAction
				})
			})
		]
	});
}
g.displayName = "F0AiProposalCard";
//#endregion
export { g as F0AiProposalCard };
