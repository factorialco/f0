import { F0Icon as e } from "../../F0Icon/index.js";
import { Tooltip as t } from "../../../experimental/Overlays/Tooltip/index.js";
import { valueDisplayRenderers as n } from "../../../ui/value-display/renderers.js";
import "react";
import { jsx as r, jsxs as i } from "react/jsx-runtime";
//#region src/components/F0Card/components/CardMetadata.tsx
var a = {
	text: n.text,
	number: n.number,
	date: n.date,
	amount: n.amount,
	person: n.person,
	company: n.company,
	team: n.team,
	status: n.status,
	tag: n.tag,
	avatarList: n.avatarList,
	tagList: n.tagList,
	alertTag: n.alertTag,
	dotTag: n.dotTag,
	file: n.file,
	folder: n.folder,
	progressBar: n.progressBar
};
function o({ metadata: n }) {
	let { type: o, value: s } = n.property, c = a[o];
	if (!c) return /* @__PURE__ */ i("div", {
		className: "flex h-8 items-center gap-1.5",
		children: ["icon" in n && n.icon && /* @__PURE__ */ r(e, {
			icon: n.icon,
			color: "default",
			size: "md"
		}), /* @__PURE__ */ i("span", { children: ["Unsupported property type: ", o] })]
	});
	let l = c;
	return /* @__PURE__ */ i("div", {
		className: "flex h-8 items-center gap-1.5",
		children: ["icon" in n && n.icon && /* @__PURE__ */ r("div", {
			className: "pointer-events-auto flex items-center",
			children: /* @__PURE__ */ r(t, {
				label: n.property.label,
				children: /* @__PURE__ */ r(e, {
					icon: n.icon,
					color: "default",
					size: "md"
				})
			})
		}), l(s, { visualization: "card" })]
	});
}
//#endregion
export { o as CardMetadata, a as cardPropertyRenderers };
