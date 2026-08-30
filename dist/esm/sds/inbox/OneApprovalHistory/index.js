import { withDataTestId as e } from "../../../lib/data-testid/index.js";
import { experimentalComponent as t } from "../../../lib/experimental.js";
import { cn as n } from "../../../lib/utils.js";
import { useI18n as r } from "../../../lib/providers/i18n/i18n-provider.js";
import i from "./ApprovalStep/index.js";
import { Fragment as a } from "react";
import { jsx as o, jsxs as s } from "react/jsx-runtime";
var c = e(t("OneApprovalHistory", ({ steps: e }) => {
	let t = r().approvals.history, c = e.findIndex((e) => e.status === "pending");
	return /* @__PURE__ */ s("div", {
		className: "flex w-full flex-col gap-4",
		children: [/* @__PURE__ */ o("h2", {
			className: "mb-2 text-lg font-semibold text-f1-foreground",
			children: t
		}), /* @__PURE__ */ s("div", {
			className: "flex flex-row gap-4",
			children: [/* @__PURE__ */ o("div", {
				className: "mt-3.5 flex flex-col items-center",
				children: e.map((t, r) => /* @__PURE__ */ s("div", {
					className: "flex flex-col items-center",
					children: [/* @__PURE__ */ o("div", {
						className: n("flex size-5 items-center justify-center rounded-xs text-sm font-medium", r < c ? "bg-f1-background-selected-bold text-f1-foreground-inverse" : "border border-solid border-f1-border-secondary bg-f1-background-secondary text-f1-foreground"),
						children: /* @__PURE__ */ o("span", { children: r + 1 })
					}), r !== e.length - 1 && /* @__PURE__ */ o("div", { className: "h-[96px] w-px bg-f1-border-secondary" })]
				}, t.title))
			}), /* @__PURE__ */ o("div", {
				className: "flex w-full flex-col rounded-xl border border-solid border-f1-border",
				children: e.map((t, n) => /* @__PURE__ */ s(a, { children: [/* @__PURE__ */ o(i, {
					title: t.title,
					approvalsRequired: t.approvalsRequired,
					status: t.status,
					approvers: t.approvers,
					approvalDate: t.approvalDate
				}), n !== e.length - 1 && /* @__PURE__ */ o("div", { className: "h-px w-full bg-f1-border-secondary" })] }, t.title))
			})]
		})]
	});
}));
//#endregion
export { c as OneApprovalHistory };
