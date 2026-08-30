import { CompanySelector as e } from "../CompanySelector/index.js";
import { SidebarIcon as t } from "../Icon/index.js";
import { jsx as n, jsxs as r } from "react/jsx-runtime";
//#region src/patterns/Navigation/Sidebar/Header/index.tsx
function i({ companies: i, selected: a, onChange: o, withNotification: s = !1, additionalOptions: c, isLoading: l = !1 }) {
	return /* @__PURE__ */ r("div", {
		className: "flex h-[72px] w-full flex-1 items-center justify-between gap-3 px-3",
		children: [/* @__PURE__ */ n(e, {
			companies: i,
			selected: a,
			onChange: o,
			isLoading: l,
			withNotification: s,
			additionalOptions: c
		}), /* @__PURE__ */ n(t, {})]
	});
}
//#endregion
export { i as SidebarHeader };
