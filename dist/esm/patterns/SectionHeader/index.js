import { experimentalComponent as e } from "../../lib/experimental.js";
import { cn as t } from "../../lib/utils.js";
import { useLayout as n } from "../../layouts/LayoutProvider.js";
import { F0Button as r } from "../../components/F0Button/F0Button.js";
import { F0Link as i } from "../../components/F0Link/F0Link.js";
import { Fragment as a, jsx as o, jsxs as s } from "react/jsx-runtime";
//#region src/patterns/SectionHeader/index.tsx
var c = "bg-repeat-x bg-origin-border [background-image:repeating-linear-gradient(to_right,theme(colors.f1.border.DEFAULT)_0,theme(colors.f1.border.DEFAULT)_3px,transparent_3px,transparent_7px)] [background-size:7px_1px]", l = e("SectionHeader", ({ title: e, description: l, action: u, link: d, separator: f }) => {
	let p = n();
	return /* @__PURE__ */ s("div", {
		className: t("flex flex-col justify-between gap-4 border border-transparent px-6 pb-5 pt-5 first:pb-0 first:pt-0 md:flex-row md:gap-2", p === "standard" && "-mx-[23px]", f === "top" && t(c, "bg-left-top first:pt-5"), f === "bottom" && t(c, "bg-left-bottom first:pb-5")),
		children: [/* @__PURE__ */ s("div", {
			className: "flex grow flex-col gap-3",
			children: [/* @__PURE__ */ s("div", {
				className: "flex max-w-[640px] flex-col gap-1",
				children: [/* @__PURE__ */ o("h2", {
					className: "text-lg font-semibold text-f1-foreground",
					children: e
				}), /* @__PURE__ */ o("p", {
					className: "text-f1-foreground-secondary",
					children: l
				})]
			}), d && /* @__PURE__ */ o("div", {
				className: "w-fit",
				children: /* @__PURE__ */ o(i, {
					href: d.href,
					target: "_blank",
					children: d.label
				})
			})]
		}), u && /* @__PURE__ */ s(a, { children: [/* @__PURE__ */ o("div", {
			className: "hidden md:block",
			children: /* @__PURE__ */ o(r, {
				label: u.label,
				variant: u.variant ?? "outline",
				icon: u.icon,
				size: "md",
				onClick: u.onClick
			})
		}), /* @__PURE__ */ o("div", {
			className: "w-full md:hidden [&>button]:w-full",
			children: /* @__PURE__ */ o(r, {
				label: u.label,
				variant: u.variant ?? "outline",
				icon: u.icon,
				size: "lg",
				onClick: u.onClick
			})
		})] })]
	});
});
//#endregion
export { l as SectionHeader };
