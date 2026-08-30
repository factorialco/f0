import { F0Button as e } from "../../../components/F0Button/F0Button.js";
import { Dropdown as t } from "../../../experimental/Navigation/Dropdown/index.js";
import { jsx as n, jsxs as r } from "react/jsx-runtime";
//#region src/sds/timeline/components/Actions.tsx
var i = ({ primaryAction: i, secondaryActions: a, otherActions: o }) => {
	let s = a && a.length > 0, c = o && o.length > 0;
	return /* @__PURE__ */ r("div", {
		className: "flex flex-col gap-2 xs:flex-row xs:items-center [&>*]:w-full [&>*]:xs:w-auto",
		children: [
			c && /* @__PURE__ */ n(t, {
				items: o,
				size: "md"
			}),
			a?.map((t, r) => /* @__PURE__ */ n(e, {
				label: t.label,
				icon: t.icon,
				variant: "outline",
				size: "md",
				onClick: t.onClick,
				disabled: t.disabled,
				loading: t.loading
			}, `${t.label}-${r}`)),
			i && (c || s) && /* @__PURE__ */ n("div", { className: "mx-1 hidden h-4 w-px bg-f1-background-secondary-hover xs:block" }),
			i && /* @__PURE__ */ n(e, {
				label: i.label,
				icon: i.icon,
				variant: "default",
				size: "md",
				onClick: i.onClick,
				disabled: i.disabled,
				loading: i.loading
			})
		]
	});
};
//#endregion
export { i as Actions };
