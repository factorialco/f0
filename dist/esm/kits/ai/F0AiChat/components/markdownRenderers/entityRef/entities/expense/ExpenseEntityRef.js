import { cn as e, focusRing as t } from "../../../../../../../../lib/utils.js";
import n from "../../../../../../../../icons/app/Money.js";
import { useI18n as r } from "../../../../../../../../lib/providers/i18n/i18n-provider.js";
import { useAiChat as i } from "../../../../../providers/AiChatStateProvider.js";
import { EntityRefHoverCard as a } from "../../components/EntityRefHoverCard.js";
import { forwardRef as o, useMemo as s } from "react";
import { jsx as c } from "react/jsx-runtime";
//#region src/kits/ai/F0AiChat/components/markdownRenderers/entityRef/entities/expense/ExpenseEntityRef.tsx
var l = o(({ label: n, ...r }, i) => /* @__PURE__ */ c("button", {
	ref: i,
	type: "button",
	className: e("cursor-pointer font-medium text-f1-foreground-secondary hover:text-f1-foreground", t()),
	...r,
	children: n
}));
l.displayName = "ExpenseTrigger";
function u({ id: e, label: t }) {
	let { entityRefs: o } = i(), u = o?.resolvers?.expense, d = r(), f = o?.urls?.expense?.(e), p = s(() => (e) => ({
		avatar: {
			type: "icon",
			icon: n
		},
		title: e.description || `Expense #${e.id}`,
		description: [e.amount, e.status].filter(Boolean).join(" · "),
		...f && { secondaryActions: {
			label: d.t("ai.view"),
			href: f
		} }
	}), [d, f]), m = s(() => ({
		title: t,
		...f && { secondaryActions: {
			label: d.t("ai.view"),
			href: f
		} }
	}), [
		t,
		d,
		f
	]);
	return u ? /* @__PURE__ */ c(a, {
		id: e,
		trigger: /* @__PURE__ */ c(l, { label: t }),
		resolver: u,
		mapToCard: p,
		fallbackCard: m
	}) : /* @__PURE__ */ c("span", { children: t });
}
//#endregion
export { u as ExpenseEntityRef };
