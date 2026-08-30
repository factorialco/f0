import { cn as e } from "../../../lib/utils.js";
import { jsx as t } from "react/jsx-runtime";
//#region src/deprecated/EntitySelect/HighLightText/index.tsx
var n = ({ text: n, search: r, searchKeys: i = [], semiBold: a = !1 }) => {
	if (!r) return /* @__PURE__ */ t("span", {
		className: e("line-clamp-1", a ? "font-semibold" : ""),
		children: n
	});
	if (n.toLowerCase().indexOf(r.toLowerCase()) === -1) {
		if (i.find((e) => e.toLowerCase().indexOf(r.toLowerCase().trim()) >= 0)) r = n.split(" ")[0];
		else return /* @__PURE__ */ t("span", {
			className: e("line-clamp-1", a ? "font-semibold" : ""),
			children: n
		});
	}
	let o = RegExp(`(${r})`, "gi"), s = n.split(o);
	return /* @__PURE__ */ t("span", {
		className: e("line-clamp-1", a ? "font-semibold" : ""),
		children: s.map((e, n) => e.toLowerCase() === r.toLowerCase() ? /* @__PURE__ */ t("span", {
			className: "truncate font-medium",
			style: { fontWeight: "bold" },
			children: e
		}, n) : e)
	});
};
//#endregion
export { n as HighlightText };
