import { F0Icon as e } from "../../F0Icon/index.js";
import { Tooltip as t } from "../../../experimental/Overlays/Tooltip/index.js";
import { AlertTagCell as n } from "../../../ui/value-display/types/alertTag/alertTag.js";
import { NumberCell as r } from "../../../ui/value-display/types/number/number.js";
import { AmountCell as i } from "../../../ui/value-display/types/amount/amount.js";
import { AvatarListCell as a } from "../../../ui/value-display/types/avatarList/avatarList.js";
import { CompanyCell as o } from "../../../ui/value-display/types/company/company.js";
import { DateCell as s } from "../../../ui/value-display/types/date/date.js";
import { DotTagCell as c } from "../../../ui/value-display/types/dotTag/dotTag.js";
import { FileCell as l } from "../../../ui/value-display/types/file/file.js";
import { FolderCell as u } from "../../../ui/value-display/types/folder/folder.js";
import { PersonCell as d } from "../../../ui/value-display/types/person/person.js";
import { ProgressBarCell as f } from "../../../ui/value-display/types/progressBar/progressBar.js";
import { StatusCell as p } from "../../../ui/value-display/types/status/status.js";
import { TagCell as m } from "../../../ui/value-display/types/tag/tag.js";
import { TagListCell as h } from "../../../ui/value-display/types/tagList/tagList.js";
import { TeamCell as g } from "../../../ui/value-display/types/team/team.js";
import { TextCell as _ } from "../../../ui/value-display/types/text/text.js";
import { jsx as v, jsxs as y } from "react/jsx-runtime";
//#region src/components/F0Card/components/CardMetadata.tsx
var b = {
	text: _,
	number: r,
	date: s,
	amount: i,
	person: d,
	company: o,
	team: g,
	status: p,
	tag: m,
	avatarList: a,
	tagList: h,
	alertTag: n,
	dotTag: c,
	file: l,
	folder: u,
	progressBar: f
};
function x({ metadata: n }) {
	let { type: r, value: i } = n.property, a = b[r];
	if (!a) return /* @__PURE__ */ y("div", {
		className: "flex h-8 items-center gap-1.5",
		children: ["icon" in n && n.icon && /* @__PURE__ */ v(e, {
			icon: n.icon,
			color: "default",
			size: "md"
		}), /* @__PURE__ */ y("span", { children: ["Unsupported property type: ", r] })]
	});
	let o = a;
	return /* @__PURE__ */ y("div", {
		className: "flex h-8 items-center gap-1.5",
		children: ["icon" in n && n.icon && /* @__PURE__ */ v("div", {
			className: "pointer-events-auto flex items-center",
			children: /* @__PURE__ */ v(t, {
				label: n.property.label,
				children: /* @__PURE__ */ v(e, {
					icon: n.icon,
					color: "default",
					size: "md"
				})
			})
		}), o(i, { visualization: "card" })]
	});
}
//#endregion
export { x as CardMetadata, b as cardPropertyRenderers };
