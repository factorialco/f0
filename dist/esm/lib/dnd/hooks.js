import { useDndContextOptional as e } from "./context.js";
import { useEffect as t } from "react";
//#region src/lib/dnd/hooks.ts
function n(n) {
	let r = e(), { ref: i, payload: a, disabled: o, handleRef: s } = n, c = a.data, l = a.id + "|" + (c?.currentParentId ?? "null");
	t(() => {
		if (i.current && !(!r || o)) return r.driver.registerDraggable(i.current, {
			payload: a,
			disabled: o,
			handle: s?.current ?? null
		});
	}, [
		r,
		i,
		l,
		o,
		s,
		a
	]);
}
function r(n) {
	let r = e(), i = n?.ref, a = n?.id, o = n?.accepts;
	t(() => {
		if (i?.current && !(!r || !a || !o)) return r.driver.registerDroppable(i.current, {
			id: a,
			accepts: o
		});
	}, [
		r,
		i,
		a,
		o
	]);
}
function i(n) {
	let r = e();
	t(() => r ? r.driver.subscribe(n) : void 0, [r, n]);
}
//#endregion
export { i as useDndEvents, n as useDraggable, r as useDroppableList };
