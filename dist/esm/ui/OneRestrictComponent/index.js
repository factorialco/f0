import { useIsDev as e } from "../../lib/providers/user-platafform/UserPlatformProvider.js";
import { useMemo as t } from "react";
//#region src/ui/OneRestrictComponent/index.tsx
var n = ({ identifier: n, allowedRoutes: r, disallowedRoutes: i, children: a }) => {
	let o = e(), s = window.location.pathname, c = t(() => r?.length ? r.includes(s) : !i?.length || !i.includes(s), [
		s,
		r,
		i
	]), l = t(() => {
		let e = `The component ${n} is not allowed to be rendered in the current route.`;
		return r && r.length > 0 && (e += ` Allowed routes: ${r.join(", ")}`), i && i.length > 0 && (e += ` Disallowed routes: ${i.join(", ")}`), e;
	}, [
		n,
		r,
		i
	]);
	return c ? a : (o && console.error(l), null);
};
//#endregion
export { n as OneRestrictComponent };
