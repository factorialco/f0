import { cn as e, focusRing as t } from "../../../../../../../../lib/utils.js";
import { useI18n as n } from "../../../../../../../../lib/providers/i18n/i18n-provider.js";
import { useAiChat as r } from "../../../../../providers/AiChatStateProvider.js";
import { EntityRefHoverCard as i } from "../../components/EntityRefHoverCard.js";
import { forwardRef as a, useMemo as o } from "react";
import { jsx as s, jsxs as c } from "react/jsx-runtime";
//#region src/kits/ai/F0AiChat/components/markdownRenderers/entityRef/entities/person/PersonEntityRef.tsx
var l = a(({ label: n, ...r }, i) => /* @__PURE__ */ c("button", {
	ref: i,
	type: "button",
	className: e("cursor-pointer font-medium text-f1-foreground-secondary hover:text-f1-foreground", t()),
	...r,
	children: ["@", n]
}));
l.displayName = "PersonTrigger";
function u({ id: e, label: t }) {
	let { entityRefs: a } = r(), c = a?.resolvers?.person, u = n(), d = a?.urls?.person?.(e), f = o(() => (e) => ({
		avatar: {
			type: "person",
			firstName: e.firstName,
			lastName: e.lastName,
			src: e.avatarUrl
		},
		title: `${e.firstName} ${e.lastName}`,
		description: e.jobTitle,
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
	return c ? /* @__PURE__ */ s(i, {
		id: e,
		trigger: /* @__PURE__ */ s(l, { label: t }),
		resolver: c,
		mapToCard: f,
		fallbackCard: p
	}) : /* @__PURE__ */ s("span", { children: t });
}
//#endregion
export { u as PersonEntityRef };
