import { HoverCard as e, HoverCardContent as t, HoverCardTrigger as n } from "../../../../ui/hover-card.js";
import { F0Card as r } from "../../../../components/F0Card/F0Card.js";
import { tagColumn as i } from "./types.js";
import { jsx as a, jsxs as o } from "react/jsx-runtime";
//#region src/patterns/F0Graph/components/F0GraphNode/F0GraphNodeHoverCard.tsx
function s(e, t) {
	switch (e.type) {
		case "raw": return { property: {
			type: "tag",
			label: t,
			value: {
				label: e.text,
				icon: e.icon
			}
		} };
		case "status": return { property: {
			type: "status",
			label: t,
			value: {
				status: e.variant,
				label: e.text
			}
		} };
		case "alert": return { property: {
			type: "alertTag",
			label: t,
			value: {
				level: e.level,
				label: e.text
			}
		} };
		case "dot": return "color" in e ? { property: {
			type: "dotTag",
			label: t,
			value: {
				label: e.text,
				color: e.color
			}
		} } : { property: {
			type: "text",
			label: t,
			value: e.text
		} };
		case "person": return { property: {
			type: "person",
			label: t,
			value: {
				firstName: e.name,
				lastName: "",
				src: e.src
			}
		} };
		case "team": return { property: {
			type: "team",
			label: t,
			value: {
				name: e.name,
				src: e.src
			}
		} };
		case "company": return { property: {
			type: "company",
			label: t,
			value: {
				name: e.name,
				src: e.src
			}
		} };
		default: return null;
	}
}
function c({ trigger: c, avatar: l, title: u, subtitle: d, tags: f, tagLabels: p }) {
	let m = f?.map((e) => s(e, p?.[i(e)] ?? "")).filter((e) => e !== null);
	return /* @__PURE__ */ o(e, {
		openDelay: 300,
		closeDelay: 100,
		children: [/* @__PURE__ */ a(n, {
			asChild: !0,
			children: c
		}), /* @__PURE__ */ a(t, {
			side: "top",
			align: "center",
			className: "w-64 rounded-2xl border-none p-0 text-f1-foreground shadow-md",
			children: /* @__PURE__ */ a(r, {
				avatar: l,
				title: u,
				description: d,
				metadata: m && m.length > 0 ? m : void 0
			})
		})]
	});
}
//#endregion
export { c as F0GraphNodeHoverCard };
