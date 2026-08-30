import { cn as e, focusRing as t } from "../../lib/utils.js";
import { Skeleton as n } from "../skeleton.js";
import { Counter as r } from "../Counter/index.js";
import { F0Checkbox as i } from "../../components/F0Checkbox/F0Checkbox.js";
import { Await as a } from "../../lib/Await/Await.js";
import { ChevronToggle as o } from "../ChevronToggle/ChevronToggle.js";
import { useEffect as s, useState as c } from "react";
import { jsx as l, jsxs as u } from "react/jsx-runtime";
//#region src/ui/GroupHeader/GroupHeader.tsx
var d = ({ label: d, itemCount: f, open: p, onOpenChange: m, showOpenChange: h, selectable: g, select: _, onSelectChange: v, className: y, chevronPosition: b = "trailing", closedRotation: x, openRotation: S }) => {
	let [C, w] = c(p);
	s(() => {
		w(p);
	}, [p]);
	let T = () => {
		w(!C), m?.(!C);
	}, E = () => {
		h ? T() : g && v?.(!_);
	}, D = h && /* @__PURE__ */ l("span", {
		className: "text-f1-icon-secondary",
		"data-testid": "group-header-chevron",
		children: /* @__PURE__ */ l(o, {
			open: C,
			size: "sm",
			closedRotation: x,
			openRotation: S
		})
	}), O = (e) => {
		(e.key === "Enter" || e.key === " ") && (e.key === " " && e.preventDefault(), E());
	}, k = h || g;
	return /* @__PURE__ */ u("div", {
		className: e("pointer-events-auto flex items-center gap-2", k && t("rounded"), y),
		onClick: E,
		...k && {
			role: "button",
			tabIndex: 0,
			onKeyDown: O
		},
		children: [
			b === "leading" && D,
			g && /* @__PURE__ */ l(i, {
				checked: !!_,
				indeterminate: _ === "indeterminate",
				title: "Select all",
				hideLabel: !0,
				onCheckedChange: (e) => v?.(e),
				stopPropagation: !0
			}),
			/* @__PURE__ */ l(a, {
				resolve: d,
				fallback: /* @__PURE__ */ l(n, { className: "h-4 w-24" }),
				children: (e) => /* @__PURE__ */ l("h6", {
					className: "text-base font-semibold text-f1-foreground",
					children: e
				})
			}),
			/* @__PURE__ */ l(a, {
				resolve: f,
				fallback: /* @__PURE__ */ l(n, { className: "h-4 w-5" }),
				children: (e) => e !== void 0 && /* @__PURE__ */ l(r, { value: e })
			}),
			b === "trailing" && D
		]
	});
};
//#endregion
export { d as GroupHeader };
