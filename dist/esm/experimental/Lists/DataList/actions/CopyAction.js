import { cn as e } from "../../../../lib/utils.js";
import { F0Icon as t } from "../../../../components/F0Icon/index.js";
import n from "../../../../icons/app/CheckCircle.js";
import r from "../../../../icons/app/LayersFront.js";
import { useEffect as i, useState as a } from "react";
import { jsx as o, jsxs as s } from "react/jsx-runtime";
import { AnimatePresence as c, motion as l } from "motion/react";
//#region src/experimental/Lists/DataList/actions/CopyAction.tsx
var u = 750, d = ({ text: d, children: f }) => {
	let [p, m] = a(!1);
	return i(() => {
		if (p) {
			let e = setTimeout(() => m(!1), u);
			return () => clearTimeout(e);
		}
	}, [p]), /* @__PURE__ */ s("button", {
		type: "button",
		"aria-label": p ? "Copied!" : `Copy ${d}`,
		className: e("group flex items-center gap-1.5 rounded p-1.5", "focus-visible:outline focus-visible:outline-2 focus-visible:outline-f1-border-selected-bold", "transition-colors duration-300 hover:bg-f1-background-hover active:bg-f1-background-secondary-hover", p ? "hover:bg-f1-background-positive focus-visible:bg-f1-background-positive" : void 0),
		onClick: async () => {
			try {
				await navigator.clipboard.writeText(d), m(!0);
			} catch {}
		},
		children: [f, /* @__PURE__ */ o("div", {
			className: "relative h-5 w-5",
			children: /* @__PURE__ */ s(c, {
				mode: "wait",
				children: [!p && /* @__PURE__ */ o(l.div, {
					initial: {
						opacity: 0,
						scale: .8
					},
					animate: {
						opacity: 1,
						scale: 1
					},
					exit: {
						opacity: 0,
						scale: .8
					},
					transition: { duration: .1 },
					className: "absolute inset-0",
					children: /* @__PURE__ */ o(t, {
						icon: r,
						size: "md",
						"aria-hidden": !0,
						color: "default",
						className: e("opacity-0 transition-opacity duration-300", !p && "group-hover:opacity-100 group-focus-visible:opacity-100")
					})
				}, "copy-icon"), p && /* @__PURE__ */ o(l.div, {
					initial: {
						opacity: 0,
						scale: .8
					},
					animate: {
						opacity: 1,
						scale: 1
					},
					exit: {
						opacity: 0,
						scale: .8
					},
					transition: { duration: .1 },
					className: "absolute inset-0",
					children: /* @__PURE__ */ o(t, {
						icon: n,
						size: "md",
						"aria-hidden": !0,
						color: "positive",
						className: e("text-f1-icon-positive opacity-0 transition-opacity duration-300", p && "group-hover:opacity-100 group-focus-visible:opacity-100")
					})
				}, "check-icon")]
			})
		})]
	});
};
//#endregion
export { d as CopyAction };
