import { navigationFilterTypes as e } from "../../navigationFilters/index.js";
import t from "react";
import { Fragment as n, jsx as r } from "react/jsx-runtime";
//#region src/patterns/OneDataCollection/components/NavigationFilters/NavigationFilters.tsx
var i = ({ navigationFilters: i, currentNavigationFilters: a, onChangeNavigationFilters: o }) => /* @__PURE__ */ r(n, { children: i && Object.entries(i).map(([n, i]) => {
	let s = e[i.type];
	return /* @__PURE__ */ r(t.Fragment, { children: s.render({
		filter: i,
		value: a[n],
		onChange: (e) => {
			o({
				...a,
				[n]: e
			});
		}
	}) }, n);
}) });
//#endregion
export { i as NavigationFilters };
