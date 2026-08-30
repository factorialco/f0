import { DataTestIdWrapper as e } from "../../../../lib/data-testid/index.js";
import { cn as t } from "../../../../lib/utils.js";
import { useI18n as n } from "../../../../lib/providers/i18n/i18n-provider.js";
import { forwardRef as r } from "react";
import { jsx as i, jsxs as a } from "react/jsx-runtime";
//#region src/patterns/F0Map/components/F0MapList/F0MapList.tsx
var o = (e, t) => {
	if (e.label) return e.label;
	switch (e.variant) {
		case "employee": return `${e.firstName} ${e.lastName}`.trim();
		case "company": return e.name;
		case "stop": return e.letter.charAt(0).toUpperCase();
		default: return t;
	}
}, s = r(function({ points: r, selectedId: s, onSelect: c, visible: l = !1, label: u, id: d, dataTestId: f, className: p }, m) {
	let h = n(), g = u ?? h.map.listLabel;
	return /* @__PURE__ */ i(e, {
		dataTestId: f,
		children: /* @__PURE__ */ a("nav", {
			ref: m,
			id: d,
			"aria-label": g,
			tabIndex: -1,
			className: t("outline-none", l ? "absolute inset-0 z-20 overflow-auto bg-f1-background p-4" : "sr-only", p),
			children: [l && /* @__PURE__ */ i("h2", {
				className: "text-f1-foreground mb-2 text-base font-medium",
				children: g
			}), /* @__PURE__ */ i("ul", {
				className: l ? "flex flex-col gap-0.5" : void 0,
				children: r.map((e) => /* @__PURE__ */ i("li", { children: /* @__PURE__ */ i("button", {
					type: "button",
					"aria-current": e.id === s || void 0,
					onClick: () => c(e.id),
					className: t("w-full text-left", l && "text-f1-foreground hover:bg-f1-background-hover aria-[current=true]:bg-f1-background-selected rounded-md px-3 py-2 text-sm"),
					children: o(e, h.map.unnamedLocation)
				}) }, e.id))
			})]
		})
	});
});
s.displayName = "F0MapList";
//#endregion
export { s as F0MapList };
