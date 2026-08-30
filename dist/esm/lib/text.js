import { useEffect as e } from "react";
import { parse as t } from "twemoji-parser";
//#region src/lib/text.ts
var n = (e) => t(e).length > 0, r = (e, t, r = !1, i = "") => {
	if (t.disallowEmpty && e.length === 0) {
		let e = `${i}: You need to provide some text that is not empty`;
		if (r) console.warn(e);
		else throw Error(e);
	}
	if (t.maxLength !== void 0 && e.length > t.maxLength) {
		let n = `${i}: "${e}" should have no more than ${t.maxLength} characters`;
		if (r) console.warn(n);
		else throw Error(n);
	}
	if (t.minLength !== void 0 && e.length < t.minLength) {
		let n = `${i}: "${e}" should have at least ${t.minLength} characters`;
		if (r) console.warn(n);
		else throw Error(n);
	}
	if (t.disallowEmojis && n(e)) {
		let t = `${i}: Emojis are not allowed here: "${e}"`;
		if (r) console.warn(t);
		else throw Error(t);
	}
}, i = (t, n, i = {
	warn: void 0,
	componentName: ""
}) => {
	e(() => {
		t !== void 0 && n && r(t, n, i.warn ?? !0, i.componentName);
	}, [
		t,
		n,
		i
	]);
};
//#endregion
export { n as containsEmojis, i as useTextFormatEnforcer };
