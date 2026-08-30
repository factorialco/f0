import { cn as e } from "../../../../../../../lib/utils.js";
import { F0Icon as t } from "../../../../../../../components/F0Icon/index.js";
import { useI18n as n } from "../../../../../../../lib/providers/i18n/i18n-provider.js";
import { useDateFnsLocale as r } from "../../../../../../../lib/providers/l10n/use-date-fns-locale.js";
import { Arrow as i } from "../../../../../../../components/F0Select/components/Arrow.js";
import { getFieldInputIcon as a } from "../../../../../../../lib/field-input-icons.js";
import { resolveUnits as o } from "./hooks/useNumberCellLayout.js";
import { renderProperty as s } from "../../../../../property-render.js";
import { resolveTextCellIcon as c } from "./textIcon.js";
import { jsx as l, jsxs as u } from "react/jsx-runtime";
import { format as d, isValid as f, parseISO as p } from "date-fns";
//#region src/patterns/OneDataCollection/visualizations/collection/EditableTable/components/cells/ReadOnlyCellContent.tsx
function m({ editableColumn: m, item: h, iconColor: g = "default", className: _, showFieldAffordances: v = !0 }) {
	let y = n(), b = r(), x = v ? m.dateConfig ? a("date") : c(m.textConfig) : void 0, S = v && !m.disabledConfig?.hideSelectChevron && !!m.selectConfig, C = m.align === "right", w = m.dateConfig ? m.id === void 0 ? void 0 : h[m.id] : void 0, T = typeof w == "string" && w && f(p(w)) ? d(p(w), "dd MMM yyyy", { locale: b }) : void 0, E = m.id === void 0 ? void 0 : h[m.id], D = Array.isArray(E) ? (() => {
		let e = m.selectConfig, t = e && typeof e.options == "function" ? e.options(h) : e?.options, n = new Map((Array.isArray(t) ? t : []).filter((e) => "value" in e).map((e) => [e.value, e.label]));
		return E.map((e) => n.get(e) ?? String(e)).join(", ");
	})() : void 0, O = v ? o(m.numberConfig, h) : void 0, k = m.numberConfig?.unitsPosition === "before", A = O ? /* @__PURE__ */ l("span", {
		className: "shrink-0 select-none pt-px text-sm",
		children: O
	}) : null;
	return /* @__PURE__ */ u("div", {
		className: e("flex h-full w-full min-w-0 items-center gap-1.5", x ? "pl-2" : "pl-3", S ? "justify-between pr-1" : e("pr-3", C && "justify-end"), _),
		children: [/* @__PURE__ */ u("span", {
			className: "flex min-w-0 items-center gap-1.5",
			children: [
				x && /* @__PURE__ */ l("span", {
					className: "flex h-5 w-5 shrink-0 items-center justify-center",
					children: /* @__PURE__ */ l(t, {
						icon: x,
						color: g
					})
				}),
				k && A,
				/* @__PURE__ */ l("span", {
					className: "min-w-0 truncate",
					children: T ?? D ?? s(h, m, "editableTable", y)
				}),
				!k && A
			]
		}), S && /* @__PURE__ */ l("span", {
			className: "flex shrink-0 items-center",
			children: /* @__PURE__ */ l(i, {
				open: !1,
				size: "sm"
			})
		})]
	});
}
//#endregion
export { m as ReadOnlyCellContent };
