import { withDataTestId as e } from "../../../lib/data-testid/index.js";
import { cn as t } from "../../../lib/utils.js";
import { F0Icon as n } from "../../../components/F0Icon/index.js";
import r from "../../../icons/app/Cross.js";
import { useI18n as i } from "../../../lib/providers/i18n/i18n-provider.js";
import { F0Button as a } from "../../../components/F0Button/F0Button.js";
import { UpsellingButton as o } from "../UpsellingButton/index.js";
import { jsx as s, jsxs as c } from "react/jsx-runtime";
//#region src/sds/UpsellingKit/UpsellingAlert/index.tsx
var l = ({ onDismiss: e }) => {
	let { actions: t } = i();
	return /* @__PURE__ */ s(a, {
		icon: r,
		label: t.close,
		hideLabel: !0,
		variant: "outline",
		size: "sm",
		onClick: e,
		type: "button"
	});
};
function u({ icon: e, title: r, description: i, action: a, onDismiss: u }) {
	return /* @__PURE__ */ s("div", {
		className: "@container",
		children: /* @__PURE__ */ s("div", {
			role: "status",
			className: t("w-full rounded-md p-3 text-f1-foreground [background:hsl(var(--promote-50)/0.1)]", u && "pr-2"),
			children: /* @__PURE__ */ c("div", {
				className: "flex flex-row gap-2",
				children: [/* @__PURE__ */ c("div", {
					className: t("flex flex-1 flex-col items-start gap-3 @xs:flex-row @xs:justify-between", i ? "@xs:items-start" : "@xs:items-center"),
					children: [/* @__PURE__ */ c("div", {
						className: t("flex flex-row gap-2", i ? "items-start" : "items-center"),
						children: [e && /* @__PURE__ */ s("div", {
							className: "flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-sm border border-solid text-f1-icon-promote [background:hsl(var(--promote-50)/0.1)] [border-color:hsl(var(--promote-50)/0.1)]",
							children: /* @__PURE__ */ s(n, {
								icon: e,
								size: "sm"
							})
						}), /* @__PURE__ */ c("div", {
							className: "flex flex-col gap-0.5",
							children: [/* @__PURE__ */ s("p", {
								className: "font-medium text-f1-foreground",
								children: r
							}), i && /* @__PURE__ */ s("p", {
								className: "text-base text-f1-foreground-secondary",
								children: i
							})]
						})]
					}), /* @__PURE__ */ s("div", {
						className: t("flex flex-shrink-0 @xs:pl-0", e && "pl-8"),
						children: /* @__PURE__ */ s(o, {
							label: a.label,
							onRequest: a.onRequest,
							errorMessage: a.errorMessage,
							successMessage: a.successMessage,
							loadingState: a.loadingState,
							nextSteps: a.nextSteps,
							closeLabel: a.closeLabel,
							showConfirmation: a.showConfirmation,
							variant: "outlinePromote",
							size: "sm"
						})
					})]
				}), u && /* @__PURE__ */ s("div", {
					className: t("flex-shrink-0 self-start", !i && "@xs:self-center"),
					children: /* @__PURE__ */ s(l, { onDismiss: u })
				})]
			})
		})
	});
}
var d = e(u);
//#endregion
export { d as UpsellingAlert };
