import { cn as e } from "../../../../lib/utils.js";
import { F0TagAlert as t } from "../../../../components/tags/F0TagAlert/index.js";
import { F0AvatarCompany as n } from "../../../../components/avatars/F0AvatarCompany/index.js";
import { F0AvatarPerson as r } from "../../../../components/avatars/F0AvatarPerson/index.js";
import { F0AvatarTeam as i } from "../../../../components/avatars/F0AvatarTeam/index.js";
import { F0AvatarList as a } from "../../../../components/avatars/F0AvatarList/index.js";
import { F0TagBalance as o } from "../../../../components/tags/F0TagBalance/index.js";
import { headingVariants as s, labelVariants as c } from "../variants.js";
import { jsx as l, jsxs as u } from "react/jsx-runtime";
import { motion as d } from "motion/react";
//#region src/kits/ai/F0AiInsightCard/components/CardMetadata.tsx
var f = /* @__PURE__ */ new Set([
	"person",
	"people",
	"team",
	"company",
	"alert",
	"balance"
]), p = ({ balance: e }) => /* @__PURE__ */ l(o, {
	amount: e.amount,
	percentage: e.percentage ?? void 0,
	invertStatus: e.invertStatus,
	hint: e.hint
}), m = (o) => {
	let { heading: m, label: h, content: g, shouldFadeContent: _ = !1, fadeTransition: v } = o;
	return /* @__PURE__ */ u("div", {
		className: "flex flex-1 flex-col gap-2",
		children: [
			/* @__PURE__ */ l("span", {
				className: e(s()),
				children: m
			}),
			/* @__PURE__ */ u(d.div, {
				className: "flex flex-1 flex-col justify-end gap-2",
				animate: { opacity: +!_ },
				transition: v,
				children: [
					g === "person" && /* @__PURE__ */ u("div", {
						className: "flex items-center gap-1",
						children: [/* @__PURE__ */ l(r, {
							firstName: o.avatar.firstName,
							lastName: o.avatar.lastName,
							src: o.avatar.src,
							size: "xs"
						}), h && /* @__PURE__ */ l("span", {
							className: e(c()),
							children: h
						})]
					}),
					g === "people" && /* @__PURE__ */ l(a, {
						type: "person",
						avatars: o.avatars,
						size: "md",
						max: 3
					}),
					g === "team" && /* @__PURE__ */ u("div", {
						className: "flex items-center gap-1",
						children: [/* @__PURE__ */ l(i, {
							name: o.avatar.name,
							src: o.avatar.src,
							size: "xs"
						}), h && /* @__PURE__ */ l("span", {
							className: e(c()),
							children: h
						})]
					}),
					g === "company" && /* @__PURE__ */ u("div", {
						className: "flex items-center gap-1",
						children: [/* @__PURE__ */ l(n, {
							name: o.avatar.name,
							src: o.avatar.src,
							size: "xs"
						}), h && /* @__PURE__ */ l("span", {
							className: e(c()),
							children: h
						})]
					}),
					g === "alert" && /* @__PURE__ */ l(t, {
						text: o.alertLabel,
						level: o.level
					}),
					g === "balance" && /* @__PURE__ */ l(p, { balance: o.balance })
				]
			}),
			h && !f.has(g) && /* @__PURE__ */ l(d.span, {
				className: e(c()),
				animate: { opacity: +!_ },
				transition: v,
				children: h
			})
		]
	});
};
//#endregion
export { m as CardMetadata };
