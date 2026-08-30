import { isObservableLike as e } from "../../../lib/promise-to-observable.js";
//#region src/hooks/datasource/itemNeighbors/resolveItemNeighbors.ts
function t(t) {
	if (e(t)) {
		let e = !1, n = null;
		return {
			promise: new Promise((r, i) => {
				n = t.subscribe({
					next: (t) => {
						e || t.loading || (t.error ? (n?.unsubscribe(), i(t.error)) : t.data !== void 0 && t.data !== null && (n?.unsubscribe(), r(t.data)));
					},
					error: (t) => {
						e || i(t);
					}
				});
			}),
			cancel: () => {
				e = !0, n?.unsubscribe();
			}
		};
	}
	let n = !1;
	return {
		promise: new Promise((e, r) => {
			Promise.resolve(t).then((t) => {
				n || e(t);
			}, (e) => {
				n || r(e);
			});
		}),
		cancel: () => {
			n = !0;
		}
	};
}
//#endregion
export { t as resolveItemNeighbors };
