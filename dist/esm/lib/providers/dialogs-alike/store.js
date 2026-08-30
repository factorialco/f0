//#region src/lib/providers/dialogs-alike/store.ts
var e = [], t = e, n = /* @__PURE__ */ new Set(), r = {
	ok: "Ok",
	cancel: "Cancel"
}, i = 0, a = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set(), s = () => {
	for (let e of n) e();
}, c = () => {
	for (let e of o) e();
}, l = {
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
		t = [...t, e], s();
	},
	removeItem(e) {
		t.some((t) => t.id === e) && (t = t.filter((t) => t.id !== e), s());
	},
	clear() {
		t.length !== 0 && (t = e, s());
	},
	setDefaultActionLabels(e) {
		r = e;
	},
	getDefaultActionLabels() {
		return r;
	},
	acquireRenderer() {
		i += 1;
		let e = i;
		return a.add(e), c(), {
			id: e,
			release() {
				a.delete(e), c();
			}
		};
	},
	getActiveRendererId() {
		let e = null;
		for (let t of a) (e === null || t < e) && (e = t);
		return e;
	},
	subscribeRenderer(e) {
		return o.add(e), () => {
			o.delete(e);
		};
	},
	hasProvider() {
		return a.size > 0;
	}
};
//#endregion
export { l as dialogsAlikeStore };
