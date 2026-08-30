import { t as e } from "./dist-CqnuTXEz.js";
import { d as t } from "./OneEllipsis-DuhKMtYp.js";
import { f as n } from "./variants-B0wDByLy.js";
import { t as r } from "./utils-CVzxZnoI.js";
import { r as i } from "./F0Button-BJ1vAMQc.js";
import { t as a } from "./F0AvatarIcon-CA2HDqKH.js";
import { t as o } from "./Cross-BIv5udZr.js";
import { n as s, t as c } from "./F0Link-zUXJEoxw.js";
import { t as l } from "./Placeholder-DPFLvgsk.js";
import { useRef as u } from "react";
import { jsx as d, jsxs as f } from "react/jsx-runtime";
//#region src/components/F0Alert/F0Alert.tsx
var p = e({
	base: "w-full rounded-md p-2 pr-3 text-f1-foreground",
	variants: { variant: {
		info: "bg-f1-background-info",
		warning: "bg-f1-background-warning",
		critical: "bg-f1-background-critical",
		neutral: "bg-f1-background-tertiary",
		positive: "bg-f1-background-positive"
	} },
	defaultVariants: { variant: "neutral" }
}), m = e({
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
	let { actions: t } = n();
	return /* @__PURE__ */ d(i, {
		icon: o,
		label: t.close,
		hideLabel: !0,
		variant: "outline",
		size: "sm",
		onClick: e,
		type: "button"
	});
}, g = t(({ title: e, description: t, action: n, link: o, icon: g, variant: _ = "neutral", onClose: v }) => {
	let y = u(null);
	return /* @__PURE__ */ d("div", {
		ref: y,
		className: "@container",
		children: /* @__PURE__ */ d("div", {
			role: _ === "critical" || _ === "warning" ? "alert" : "status",
			className: r(p({ variant: _ }), v && "pr-2"),
			children: /* @__PURE__ */ f("div", {
				className: "flex flex-row gap-2",
				children: [/* @__PURE__ */ f("div", {
					className: "flex flex-1 flex-col items-start gap-3 @xs:flex-row @xs:items-center @xs:justify-between",
					children: [/* @__PURE__ */ f("div", {
						className: r("flex flex-row gap-2", !t && "items-center"),
						children: [/* @__PURE__ */ d("div", {
							className: "h-6 w-6 flex-shrink-0",
							children: _ === "neutral" ? /* @__PURE__ */ d(a, {
								icon: g || l,
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
							}), t && /* @__PURE__ */ d("p", {
								className: "text-base text-f1-foreground-secondary",
								children: t
							})]
						})]
					}), (n || o) && /* @__PURE__ */ f("div", {
						className: "flex flex-shrink-0 flex-row items-center gap-3 pl-8 @xs:pl-0",
						children: [o && /* @__PURE__ */ d(c, {
							href: o.href,
							target: "_blank",
							variant: "link",
							size: "sm",
							children: o.label
						}), n && /* @__PURE__ */ d(i, {
							label: n.label,
							variant: "outline",
							onClick: n.onClick,
							size: "sm",
							disabled: n.disabled,
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
}), _ = [
	"info",
	"warning",
	"critical",
	"neutral",
	"positive"
];
//#endregion
export { g as F0Alert, _ as alertVariantOptions };
