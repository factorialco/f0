//#region src/experimental/Navigation/F0TableOfContent/utils.ts
function e(e, t) {
	let n = /* @__PURE__ */ new Set();
	if (!t) return n;
	function r(e, t, i = []) {
		for (let a of e) {
			if (a.id === t) return i.forEach((e) => n.add(e)), !0;
			let e = [...i, a.id];
			if (a.children && r(a.children, t, e)) return n.add(a.id), !0;
		}
		return !1;
	}
	return r(e, t), n;
}
function t(e, t) {
	if (!t.trim()) return e;
	let n = t.toLowerCase().trim();
	function r(e) {
		let t = e.label.toLowerCase().includes(n), i = e.children ? e.children.map(r).filter(Boolean) : void 0;
		return t || i && i.length > 0 ? {
			...e,
			children: i && i.length > 0 ? i : void 0
		} : null;
	}
	return e.map(r).filter(Boolean);
}
function n(e, t) {
	function n(e, t, r = []) {
		for (let i of e) {
			if (i.id === t) return {
				item: i,
				parentPath: r
			};
			if (i.children) {
				let e = n(i.children, t, [...r, i.id]);
				if (e) return e;
			}
		}
		return null;
	}
	return n(e, t);
}
function r(e, t) {
	return e.map((e) => {
		if (e.id === t) return null;
		if (e.children) {
			let n = r(e.children, t);
			return {
				...e,
				children: n.length > 0 ? n : void 0
			};
		}
		return e;
	}).filter(Boolean);
}
function i(e, t, n, r) {
	if (n === null) {
		let n = [...e];
		return n.splice(r, 0, t), n;
	}
	function i(e, n, r) {
		return e.map((e) => {
			if (e.id === n) {
				let n = [...e.children || []];
				return n.splice(r, 0, t), {
					...e,
					children: n
				};
			}
			return e.children ? {
				...e,
				children: i(e.children, n, r)
			} : e;
		});
	}
	return i(e, n, r);
}
function a(e, t, r) {
	if (r === null) return !1;
	if (r === t) return !0;
	if (!n(e, t)) return !1;
	function i(e, t, n) {
		for (let r of e) if (r.id === n || r.children && i(r.children, t, n)) return !0;
		return !1;
	}
	let a = n(e, t);
	return a?.item.children ? i(a.item.children, t, r) : !1;
}
function o(e) {
	return e.map((e) => ({
		id: e.id,
		...e.children && { children: o(e.children) }
	}));
}
function s(e, t, n) {
	return e.map((e) => e.id === t ? n : e.children ? {
		...e,
		children: s(e.children, t, n)
	} : e);
}
function c(e, t, r, i) {
	let a = n(e, t);
	if (!a) return i;
	let o = i;
	if (r !== null) {
		if (n(e, r)) {
			let s = a.parentPath;
			if (s.length > 0 && s[s.length - 1] === r) {
				let r = n(e, s[s.length - 1]);
				if (r) {
					let e = r.item.children?.findIndex((e) => e.id === t);
					e !== void 0 && e < i && (o = i - 1);
				}
			}
		}
	} else a.parentPath.length === 0 && e.findIndex((e) => e.id === t) < i && (o = i - 1);
	return o;
}
//#endregion
export { c as calculateAdjustedIndex, o as convertToIds, t as filterTree, e as findExpandedPath, n as findItemInTree, i as insertItemInTree, r as removeItemFromTree, s as updateItemInTree, a as wouldCreateCycle };
