import e from "../../../../icons/app/Check.js";
import t from "../../../../icons/app/Cross.js";
import n from "../../../../icons/app/Question.js";
import { useI18n as r } from "../../../../lib/providers/i18n/i18n-provider.js";
import { F0TagStatus as i } from "../../../../components/tags/F0TagStatus/index.js";
import { useDateFnsLocale as a } from "../../../../lib/providers/l10n/use-date-fns-locale.js";
import { F0AvatarList as o } from "../../../../components/avatars/F0AvatarList/index.js";
import { useMemo as s } from "react";
import { jsx as c, jsxs as l } from "react/jsx-runtime";
import { format as u } from "date-fns";
//#region src/sds/inbox/OneApprovalHistory/ApprovalStep/index.tsx
var d = {
	waiting: "neutral",
	pending: "neutral",
	approved: "positive",
	rejected: "critical"
}, f = {
	approved: {
		icon: e,
		type: "positive",
		size: "sm"
	},
	rejected: {
		icon: t,
		type: "critical",
		size: "sm"
	}
}, p = {
	icon: n,
	type: "neutral",
	size: "sm"
}, m = {
	positive: 4,
	highlight: 3,
	critical: 2,
	warning: 1,
	neutral: 0
}, h = (e) => e in f ? f[e] : p;
function g(e) {
	return m[e ?? "neutral"] ?? 0;
}
var _ = ({ title: e, approvalsRequired: t = 1, status: n, approvers: f, approvalDate: p }) => {
	let m = r(), _ = a(), v = t === 1 ? m.approvals.requiredNumbers.one : m.approvals.requiredNumbers.other.replace("{{count}}", t.toString()), y = m.approvals.statuses[n], b = s(() => f.map((e) => {
		let t = h(e.status);
		return {
			firstName: e.firstName,
			lastName: e.lastName,
			src: e.avatar,
			badge: t
		};
	}).sort((e, t) => g(t.badge?.type) - g(e.badge?.type)), [f]);
	return /* @__PURE__ */ l("div", {
		className: "flex flex-col gap-3 pb-5 pl-4 pr-3 pt-3",
		children: [
			/* @__PURE__ */ l("div", {
				className: "flex flex-row items-start justify-between",
				children: [/* @__PURE__ */ l("div", { children: [/* @__PURE__ */ c("p", {
					className: "font-medium text-f1-foreground",
					children: e
				}), /* @__PURE__ */ c("p", {
					className: "text-f1-foreground-secondary",
					children: v
				})] }), /* @__PURE__ */ c(i, {
					text: y,
					variant: d[n]
				})]
			}),
			/* @__PURE__ */ c("div", {
				className: "w-full",
				children: /* @__PURE__ */ c(o, {
					avatars: b,
					layout: "fill",
					type: "person",
					size: "md"
				})
			}),
			p && /* @__PURE__ */ c("p", {
				className: "text-sm text-f1-foreground-secondary",
				children: u(p, "PP", { locale: _ })
			})
		]
	});
};
//#endregion
export { _ as default };
