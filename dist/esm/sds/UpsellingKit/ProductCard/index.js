import { withDataTestId as e } from "../../../lib/data-testid/index.js";
import { F0Icon as t } from "../../../components/F0Icon/index.js";
import n from "../../../icons/app/Cross.js";
import { F0Button as r } from "../../../components/F0Button/F0Button.js";
import { F0AvatarModule as i } from "../../../components/avatars/F0AvatarModule/index.js";
import a from "../../../icons/special/One.js";
import { useEffect as o, useState as s } from "react";
import { Fragment as c, jsx as l, jsxs as u } from "react/jsx-runtime";
//#region src/sds/UpsellingKit/ProductCard/index.tsx
function d({ title: e, description: d, onClick: f, onClose: p, isVisible: m, dismissable: h = !1, trackVisibility: g, type: _, ...v }) {
	let [y, b] = s(m);
	return o(() => {
		b(m), g && g(m);
	}, [m, g]), y && /* @__PURE__ */ l("div", { children: /* @__PURE__ */ l("div", {
		className: "p-2",
		children: /* @__PURE__ */ l("div", {
			style: _ === "one-campaign" ? {
				background: "linear-gradient(98.39deg, rgba(249, 115, 22, 0.49) 0%, rgba(229, 25, 67, 0.49) 20%, rgba(229, 25, 67, 0.49) 49.97%, rgba(229, 25, 67, 0.49) 80%, rgba(164, 165, 222, 0.49) 100%)",
				borderRadius: "12px",
				padding: "1px"
			} : {},
			children: /* @__PURE__ */ u("div", {
				className: _ === "one-campaign" ? "flex h-auto w-auto cursor-pointer flex-row gap-2 p-3 text-f1-foreground shadow-md hover:bg-f1-background-secondary" : "flex h-auto w-auto cursor-pointer flex-row gap-2 rounded-md border-f1-border p-3 text-f1-foreground shadow-md hover:bg-f1-background-secondary",
				style: _ === "one-campaign" ? {
					background: "#fef7f8",
					borderRadius: "11px"
				} : {},
				onClick: f,
				children: [/* @__PURE__ */ u(c, { children: [_ === "one-campaign" ? /* @__PURE__ */ l("div", {
					className: "relative flex h-8 w-8 shrink-0 items-center justify-center",
					children: /* @__PURE__ */ l(t, {
						icon: a,
						size: "lg",
						className: "!h-8 !w-8"
					})
				}) : /* @__PURE__ */ l("div", {
					className: "relative flex h-8 w-8 shrink-0 items-center justify-center",
					children: /* @__PURE__ */ l(i, {
						module: v.module,
						size: "md"
					})
				}), /* @__PURE__ */ l("div", {
					className: "flex flex-1 flex-col",
					children: /* @__PURE__ */ u("div", { children: [/* @__PURE__ */ l("h3", {
						className: "text-lg font-medium",
						children: e
					}), /* @__PURE__ */ l("p", {
						className: "text-f1-foreground-secondary",
						children: d
					})] })
				})] }), h && /* @__PURE__ */ l("div", {
					className: "h-6 w-6",
					children: /* @__PURE__ */ l(r, {
						variant: "ghost",
						icon: n,
						size: "sm",
						hideLabel: !0,
						onClick: () => {
							b(!1), p && p();
						},
						label: "Close"
					})
				})]
			})
		})
	}) });
}
var f = e(d);
//#endregion
export { f as ProductCard };
