import { withDataTestId as e } from "../../lib/data-testid/index.js";
import { cn as t } from "../../lib/utils.js";
import n from "../../icons/app/Cross.js";
import r from "../../icons/app/Placeholder.js";
import { useI18n as i } from "../../lib/providers/i18n/i18n-provider.js";
import { F0Button as a } from "../F0Button/F0Button.js";
import { F0AvatarIcon as o } from "../avatars/F0AvatarIcon/index.js";
import { F0AvatarAlert as s } from "../avatars/F0AvatarAlert/index.js";
import { F0Link as c } from "../F0Link/F0Link.js";
import { useRef as l } from "react";
import { cva as u } from "cva";
import { jsx as d, jsxs as f } from "react/jsx-runtime";
//#region src/components/F0Alert/F0Alert.tsx
var p = u({
	base: "w-full rounded-md p-2 pr-3 text-f1-foreground",
	variants: { variant: {
		info: "bg-f1-background-info",
		warning: "bg-f1-background-warning",
		critical: "bg-f1-background-critical",
		neutral: "bg-f1-background-tertiary",
		positive: "bg-f1-background-positive"
	} },
	defaultVariants: { variant: "neutral" }
}), m = u({
	base: "font-medium",
	variants: { variant: {
		info: "text-f1-foreground-info",
		warning: "text-f1-foreground-warning",
		critical: "text-f1-foreground-critical",
		neutral: "text-f1-foreground",
		positive: "text-f1-foreground-positive"
	} },
	defaultVariants: { variant: "info" }
}), h = ({ onClose: e }) => {
	let { actions: t } = i();
	return /* @__PURE__ */ d(a, {
		icon: n,
		label: t.close,
		hideLabel: !0,
		variant: "outline",
		size: "sm",
		onClick: e,
		type: "button"
	});
}, g = e(({ title: e, description: n, action: i, link: u, icon: g, variant: _ = "neutral", onClose: v }) => {
	let y = l(null);
	return /* @__PURE__ */ d("div", {
		ref: y,
		className: "@container",
		children: /* @__PURE__ */ d("div", {
			role: _ === "critical" || _ === "warning" ? "alert" : "status",
			className: t(p({ variant: _ }), v && "pr-2"),
			children: /* @__PURE__ */ f("div", {
				className: "flex flex-row gap-2",
				children: [/* @__PURE__ */ f("div", {
					className: "flex flex-1 flex-col items-start gap-3 @xs:flex-row @xs:items-center @xs:justify-between",
					children: [/* @__PURE__ */ f("div", {
						className: t("flex flex-row gap-2", !n && "items-center"),
						children: [/* @__PURE__ */ d("div", {
							className: "h-6 w-6 flex-shrink-0",
							children: _ === "neutral" ? /* @__PURE__ */ d(o, {
								icon: g || r,
								size: "sm"
							}) : /* @__PURE__ */ d(s, {
								type: _,
								size: "sm"
							})
						}), /* @__PURE__ */ f("div", {
							className: "flex flex-col gap-0.5",
							children: [/* @__PURE__ */ d("p", {
								className: m({ variant: _ }),
								children: e
							}), n && /* @__PURE__ */ d("p", {
								className: "text-base text-f1-foreground-secondary",
								children: n
							})]
						})]
					}), (i || u) && /* @__PURE__ */ f("div", {
						className: "flex flex-shrink-0 flex-row items-center gap-3 pl-8 @xs:pl-0",
						children: [u && /* @__PURE__ */ d(c, {
							href: u.href,
							target: "_blank",
							variant: "link",
							size: "sm",
							children: u.label
						}), i && /* @__PURE__ */ d(a, {
							label: i.label,
							variant: "outline",
							onClick: i.onClick,
							size: "sm",
							disabled: i.disabled,
							type: "button"
						})]
					})]
				}), v && /* @__PURE__ */ d("div", {
					className: "flex-shrink-0 self-start @xs:self-center",
					children: /* @__PURE__ */ d(h, { onClose: v })
				})]
			})
		})
	});
});
//#endregion
export { g as F0Alert };
