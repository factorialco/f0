import e from "../../../icons/app/Ellipsis.js";
import { F0Button as t } from "../../F0Button/F0Button.js";
import { Dropdown as n } from "../../../experimental/Navigation/Dropdown/index.js";
import { F0SegmentedControl as r } from "../../../experimental/Actions/F0SegmentedControl/index.js";
import { jsx as i } from "react/jsx-runtime";
//#region src/components/F0Accordion/components/AccordionActions.tsx
var a = ({ actions: a }) => /* @__PURE__ */ i("div", {
	className: "flex items-center gap-2",
	children: a.map((a, o) => {
		switch (a.type) {
			case "segmentedControl": return /* @__PURE__ */ i(r, {
				items: a.items,
				value: a.value,
				onChange: a.onChange,
				disabled: a.disabled,
				ariaLabel: a.ariaLabel
			}, o);
			case "dropdown": return /* @__PURE__ */ i(n, {
				items: a.items,
				disabled: a.disabled,
				children: /* @__PURE__ */ i(t, {
					variant: "outline",
					size: "sm",
					icon: e,
					label: a.ariaLabel,
					hideLabel: !0,
					disabled: a.disabled
				})
			}, o);
		}
	})
});
//#endregion
export { a as AccordionActions };
