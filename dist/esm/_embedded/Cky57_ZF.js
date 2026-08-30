import e from "./DjbvCfWF.js";
//#region ../../node_modules/.pnpm/@atlaskit+pragmatic-drag-and-drop-hitbox@1.1.0/node_modules/@atlaskit/pragmatic-drag-and-drop-hitbox/dist/esm/closest-edge.js
function t(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function n(n) {
	for (var r = 1; r < arguments.length; r++) {
		var i = arguments[r] == null ? {} : arguments[r];
		r % 2 ? t(Object(i), !0).forEach(function(t) {
			e(n, t, i[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : t(Object(i)).forEach(function(e) {
			Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
		});
	}
	return n;
}
var r = {
	top: function(e, t) {
		return Math.abs(t.y - e.top);
	},
	right: function(e, t) {
		return Math.abs(e.right - t.x);
	},
	bottom: function(e, t) {
		return Math.abs(e.bottom - t.y);
	},
	left: function(e, t) {
		return Math.abs(t.x - e.left);
	}
}, i = Symbol("closestEdge");
function a(t, a) {
	var o = a.element, s = a.input, c = a.allowedEdges, l = {
		x: s.clientX,
		y: s.clientY
	}, u = o.getBoundingClientRect(), d = c.map(function(e) {
		return {
			edge: e,
			value: r[e](u, l)
		};
	}).sort(function(e, t) {
		return e.value - t.value;
	})[0]?.edge ?? null;
	return n(n({}, t), {}, e({}, i, d));
}
function o(e) {
	return e[i] ?? null;
}
//#endregion
export { a as attachClosestEdge, o as extractClosestEdge };
