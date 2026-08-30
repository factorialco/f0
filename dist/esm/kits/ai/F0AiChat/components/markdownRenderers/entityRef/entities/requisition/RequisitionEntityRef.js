import { cn as e, focusRing as t } from "../../../../../../../../lib/utils.js";
import { useI18n as n } from "../../../../../../../../lib/providers/i18n/i18n-provider.js";
import { F0TagStatus as r } from "../../../../../../../../components/tags/F0TagStatus/index.js";
import { F0AvatarPerson as i } from "../../../../../../../../components/avatars/F0AvatarPerson/index.js";
import { useAiChat as a } from "../../../../../providers/AiChatStateProvider.js";
import { EntityRefHoverCard as o } from "../../components/EntityRefHoverCard.js";
import { EntityRefDetails as s } from "../../components/EntityRefDetails.js";
import { forwardRef as c, useMemo as l } from "react";
import { jsx as u, jsxs as d } from "react/jsx-runtime";
//#region src/kits/ai/F0AiChat/components/markdownRenderers/entityRef/entities/requisition/RequisitionEntityRef.tsx
var f = c(({ label: n, ...r }, i) => /* @__PURE__ */ u("button", {
	ref: i,
	type: "button",
	className: e("cursor-pointer font-medium text-f1-foreground-secondary hover:text-f1-foreground", t()),
	...r,
	children: n
}));
f.displayName = "RequisitionTrigger";
function p({ id: e, label: t }) {
	let { entityRefs: c } = a(), p = c?.resolvers?.requisition, m = n(), h = c?.urls?.requisition?.(e), g = l(() => (e) => {
		let t = e.lineManager ? `${e.lineManager.firstName} ${e.lineManager.lastName}` : void 0, n = [
			e.status ? {
				label: m.t("ai.entityRef.requisition.status"),
				value: /* @__PURE__ */ u("div", {
					className: "flex items-center pt-1",
					children: /* @__PURE__ */ u(r, {
						text: e.status,
						variant: e.statusVariant ?? "neutral"
					})
				})
			} : void 0,
			e.lineManager ? {
				label: m.t("ai.entityRef.requisition.lineManager"),
				value: /* @__PURE__ */ d("div", {
					className: "flex items-center gap-1.5 pt-1",
					children: [/* @__PURE__ */ u(i, {
						firstName: e.lineManager.firstName,
						lastName: e.lineManager.lastName,
						src: e.lineManager.avatarUrl,
						size: "xs"
					}), /* @__PURE__ */ u("span", { children: t })]
				})
			} : void 0,
			e.reason ? {
				label: m.t("ai.entityRef.requisition.reason"),
				value: e.reason
			} : void 0
		].filter((e) => e !== void 0);
		return {
			title: e.title,
			...e.location && { description: e.location },
			...n.length > 0 && { children: /* @__PURE__ */ u(s, { rows: n }) },
			...h && { secondaryActions: {
				label: m.t("ai.view"),
				href: h
			} }
		};
	}, [m, h]), _ = l(() => ({
		title: t,
		...h && { secondaryActions: {
			label: m.t("ai.view"),
			href: h
		} }
	}), [
		t,
		m,
		h
	]);
	return p ? /* @__PURE__ */ u(o, {
		id: e,
		trigger: /* @__PURE__ */ u(f, { label: t }),
		resolver: p,
		mapToCard: g,
		fallbackCard: _
	}) : /* @__PURE__ */ u("span", { children: t });
}
//#endregion
export { p as RequisitionEntityRef };
