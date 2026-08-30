//#region src/hooks/toast/store.ts
var e = [], t = e, n = /* @__PURE__ */ new Set(), r = 0, i = /* @__PURE__ */ new Set(), a = /* @__PURE__ */ new Set(), o = () => {
	for (let e of n) e();
}, s = () => {
	for (let e of a) e();
}, c = {
	subscribe(e) {
		return n.add(e), () => {
			n.delete(e);
		};
	},
	getSnapshot() {
		return t;
	},
	getServerSnapshot() {
		return e;
	},
	addItem(e) {
		let n = t.findIndex((t) => t.id === e.id);
		if (n !== -1) {
			let r = [...t];
			r[n] = e, t = r;
		} else t = [...t, e];
		o();
	},
	removeItem(e) {
		t.some((t) => t.id === e) && (t = t.filter((t) => t.id !== e), o());
	},
	clear() {
		t.length !== 0 && (t = e, o());
	},
	acquireRenderer() {
		r += 1;
		let e = r;
		return i.add(e), s(), {
			id: e,
			release() {
				i.delete(e), s();
			}
		};
	},
	getActiveRendererId() {
		let e = null;
		for (let t of i) (e === null || t < e) && (e = t);
		return e;
	},
	subscribeRenderer(e) {
		return a.add(e), () => {
			a.delete(e);
		};
	},
	hasProvider() {
		return i.size > 0;
	}
};
//#endregion
export { c as toastStore };
