import { cn as e } from "../../../../lib/utils.js";
import { useI18n as t } from "../../../../lib/providers/i18n/i18n-provider.js";
import { F0Button as n } from "../../../../components/F0Button/F0Button.js";
import { Card as r, CardContent as i, CardFooter as a } from "../../../../ui/Card/Card.js";
import { jsx as o, jsxs as s } from "react/jsx-runtime";
//#region src/sds/UpsellingKit/ai/F0DemoCard/F0DemoCard.tsx
var c = ({ preview: c, moduleName: l, description: u, onAction: d, actionHref: f }) => {
	let p = t(), m = p?.ai?.growth?.demoCard?.title ?? "Show {{moduleName}} in action", h = p?.ai?.growth?.demoCard?.actionLabel ?? "Start demo", g = m.replace("{{moduleName}}", l);
	return /* @__PURE__ */ s(r, {
		className: "flex flex-col overflow-hidden",
		children: [/* @__PURE__ */ s(i, {
			className: "flex flex-col gap-4 p-0",
			children: [/* @__PURE__ */ o("div", {
				className: e("overflow-hidden rounded-lg border border-f1-border", "ring-1 ring-f1-border/50 bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary"),
				children: c
			}), /* @__PURE__ */ s("div", {
				className: "flex flex-col gap-1",
				children: [/* @__PURE__ */ o("h3", {
					className: "text-lg font-semibold text-f1-foreground",
					children: g
				}), /* @__PURE__ */ o("p", {
					className: "text-base text-f1-foreground-secondary",
					children: u
				})]
			})]
		}), /* @__PURE__ */ o(a, {
			className: "-mx-4 -mb-4 mt-4 flex justify-end rounded-b-xl border-0 border-t border-t-f1-border bg-f1-background-secondary px-4 py-3",
			children: f ? /* @__PURE__ */ o(n, {
				variant: "default",
				size: "md",
				label: h,
				href: f,
				target: "_blank"
			}) : /* @__PURE__ */ o(n, {
				type: "button",
				variant: "default",
				size: "md",
				label: h,
				onClick: d
			})
		})]
	});
};
//#endregion
export { c as F0DemoCard };
