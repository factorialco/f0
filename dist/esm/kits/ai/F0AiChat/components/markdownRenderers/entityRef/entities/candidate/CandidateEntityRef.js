import { cn as e, focusRing as t } from "../../../../../../../../lib/utils.js";
import { useI18n as n } from "../../../../../../../../lib/providers/i18n/i18n-provider.js";
import { useAiChat as r } from "../../../../../providers/AiChatStateProvider.js";
import { EntityRefHoverCard as i } from "../../components/EntityRefHoverCard.js";
import { forwardRef as a, useMemo as o } from "react";
import { jsx as s, jsxs as c } from "react/jsx-runtime";
//#region src/kits/ai/F0AiChat/components/markdownRenderers/entityRef/entities/candidate/CandidateEntityRef.tsx
var l = a(({ label: n, ...r }, i) => /* @__PURE__ */ s("button", {
	ref: i,
	type: "button",
	className: e("cursor-pointer font-medium text-f1-foreground-secondary hover:text-f1-foreground", t()),
	...r,
	children: n
}));
l.displayName = "CandidateTrigger";
function u({ id: e, label: t }) {
	let { entityRefs: a } = r(), u = a?.resolvers?.candidate, d = n(), f = a?.urls?.candidate?.(e), p = o(() => (e) => {
		let t = [];
		return e.source && t.push({
			title: d.t("ai.entityRef.candidate.source"),
			value: e.source
		}), e.appliedAt && t.push({
			title: d.t("ai.entityRef.candidate.applied"),
			value: e.appliedAt
		}), {
			avatar: {
				type: "person",
				firstName: e.firstName,
				lastName: e.lastName,
				src: e.avatarUrl
			},
			title: `${e.firstName} ${e.lastName}`,
			...t.length > 0 && { children: /* @__PURE__ */ s("div", {
				className: "flex flex-col gap-2",
				children: t.map((e) => /* @__PURE__ */ c("div", {
					className: "flex flex-col",
					children: [/* @__PURE__ */ s("p", {
						className: "text-f1-foreground-secondary",
						children: e.title
					}), /* @__PURE__ */ s("div", {
						className: "flex items-center gap-1.5 font-medium text-f1-foreground",
						children: e.value
					})]
				}, e.title))
			}) },
			...f && { secondaryActions: {
				label: d.t("ai.view"),
				href: f
			} }
		};
	}, [d, f]), m = o(() => ({
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
	return u ? /* @__PURE__ */ s(i, {
		id: e,
		trigger: /* @__PURE__ */ s(l, { label: t }),
		resolver: u,
		mapToCard: p,
		fallbackCard: m
	}) : /* @__PURE__ */ s("span", { children: t });
}
//#endregion
export { u as CandidateEntityRef };
