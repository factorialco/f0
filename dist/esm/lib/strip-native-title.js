import { cloneElement as e, isValidElement as t } from "react";
//#region src/lib/strip-native-title.tsx
function n(n) {
	if (!t(n)) return n;
	let r = n.props;
	if (r.title == null) return n;
	let i = { title: void 0 };
	return r["aria-label"] == null && r["aria-labelledby"] == null && typeof r.title == "string" && (i["aria-label"] = r.title), e(n, i);
}
//#endregion
export { n as stripNativeTitle };
