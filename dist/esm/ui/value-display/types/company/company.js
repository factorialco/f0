import { cn as e } from "../../../../lib/utils.js";
import { F0Avatar as t } from "../../../../components/avatars/F0Avatar/index.js";
import { tableDisplayClassNames as n } from "../../const.js";
import { jsx as r, jsxs as i } from "react/jsx-runtime";
//#region src/ui/value-display/types/company/company.tsx
var a = (a, o) => /* @__PURE__ */ i("div", {
	className: e("flex items-center gap-2", o.visualization === "table" && n.avatar),
	children: [/* @__PURE__ */ r(t, {
		avatar: {
			type: "company",
			name: a.name,
			src: a.src
		},
		size: "xs"
	}), /* @__PURE__ */ r("span", {
		className: "text-f1-foreground",
		children: a.name.toString()
	})]
});
//#endregion
export { a as CompanyCell };
