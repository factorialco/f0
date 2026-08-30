import { useI18n as e } from "../../../../lib/providers/i18n/i18n-provider.js";
import { F0Button as t } from "../../../../components/F0Button/F0Button.js";
import { F0Avatar as n } from "../../../../components/avatars/F0Avatar/index.js";
import { Card as r, CardContent as i, CardFooter as a } from "../../../../ui/Card/Card.js";
import { jsx as o, jsxs as s } from "react/jsx-runtime";
//#region src/sds/UpsellingKit/ai/F0ModuleCard/F0ModuleCard.tsx
var c = ({ moduleName: c, description: l, onAction: u, actionHref: d, imageSrc: f }) => {
	let p = e()?.ai?.growth?.moduleCard?.actionLabel ?? "Learn more";
	return /* @__PURE__ */ s(r, {
		className: "flex flex-col overflow-hidden",
		children: [/* @__PURE__ */ o(i, {
			className: "flex flex-col gap-3 p-0",
			children: /* @__PURE__ */ s("div", {
				className: "flex items-start gap-3",
				children: [/* @__PURE__ */ o(n, {
					avatar: {
						type: "company",
						name: c || "",
						src: f || ""
					},
					size: "lg"
				}), /* @__PURE__ */ s("div", {
					className: "flex min-w-0 flex-col gap-1",
					children: [/* @__PURE__ */ o("h3", {
						className: "text-lg font-semibold text-f1-foreground",
						children: c
					}), /* @__PURE__ */ o("p", {
						className: "text-base text-f1-foreground-secondary",
						children: l
					})]
				})]
			})
		}), /* @__PURE__ */ o(a, {
			className: "-mx-4 -mb-4 mt-4 flex justify-end rounded-b-xl border-0 border-t border-t-f1-border bg-f1-background-secondary px-4 py-3",
			children: d ? /* @__PURE__ */ o(t, {
				variant: "outline",
				size: "md",
				label: p,
				href: d
			}) : /* @__PURE__ */ o(t, {
				type: "button",
				variant: "outline",
				size: "md",
				label: p,
				onClick: u
			})
		})]
	});
};
//#endregion
export { c as F0ModuleCard };
