import { OneEllipsis as e } from "../../../../lib/OneEllipsis/PlainEllipsis.js";
import { F0AvatarFlag as t } from "../../../../components/avatars/F0AvatarFlag/index.js";
import { jsx as n, jsxs as r } from "react/jsx-runtime";
//#region src/ui/value-display/types/country/country.tsx
var i = (i, a) => {
	let o = i.label ?? a.i18n.countries[i.code] ?? i.code;
	return /* @__PURE__ */ r("div", {
		"data-cell-type": "country",
		className: "flex items-center gap-2",
		children: [/* @__PURE__ */ n(t, {
			size: "xs",
			flag: i.code,
			"aria-label": o
		}), /* @__PURE__ */ n(e, {
			className: "min-w-0 flex-1 text-f1-foreground",
			tag: "span",
			children: o
		})]
	});
};
//#endregion
export { i as CountryCell };
