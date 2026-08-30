import { cn as e, focusRing as t } from "../../../../../../../../lib/utils.js";
import { useI18n as n } from "../../../../../../../../lib/providers/i18n/i18n-provider.js";
import { useAiChat as r } from "../../../../../providers/AiChatStateProvider.js";
import { EntityRefHoverCard as i } from "../../components/EntityRefHoverCard.js";
import { forwardRef as a, useMemo as o } from "react";
import { jsx as s } from "react/jsx-runtime";
//#region src/kits/ai/F0AiChat/components/markdownRenderers/entityRef/entities/vacancy/VacancyEntityRef.tsx
var c = a(({ label: n, ...r }, i) => /* @__PURE__ */ s("button", {
	ref: i,
	type: "button",
	className: e("cursor-pointer font-medium text-f1-foreground-secondary hover:text-f1-foreground", t()),
	...r,
	children: n
}));
c.displayName = "VacancyTrigger";
function l({ id: e, label: t }) {
	let { entityRefs: a } = r(), l = a?.resolvers?.vacancy, u = n(), d = a?.urls?.vacancy?.(e), f = o(() => (e) => ({
		title: e.name,
		description: [e.status, e.vacancyType].filter(Boolean).join(" · "),
		...d && { secondaryActions: {
			label: u.t("ai.view"),
			href: d
		} }
	}), [u, d]), p = o(() => ({
		title: t,
		...d && { secondaryActions: {
			label: u.t("ai.view"),
			href: d
		} }
	}), [
		t,
		u,
		d
	]);
	return l ? /* @__PURE__ */ s(i, {
		id: e,
		trigger: /* @__PURE__ */ s(c, { label: t }),
		resolver: l,
		mapToCard: f,
		fallbackCard: p
	}) : /* @__PURE__ */ s("span", { children: t });
}
//#endregion
export { l as VacancyEntityRef };
