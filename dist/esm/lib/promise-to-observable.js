import { Observable as e } from "zen-observable-ts";
//#region src/lib/promise-to-observable.ts
function t(e) {
	return typeof e == "object" && !!e && "subscribe" in e;
}
function n(e) {
	return typeof e == "object" && !!e && "then" in e;
}
function r(t) {
	return new e((e) => (e.next({
		loading: !0,
		error: null,
		data: null
	}), t.then((t) => {
		e.next({
			loading: !1,
			error: null,
			data: t
		}), e.complete();
	}).catch((t) => {
		e.next({
			loading: !1,
			error: t,
			data: null
		}), e.complete();
	}), () => {}));
}
//#endregion
export { t as isObservableLike, n as isPromiseLike, r as promiseToObservable };
