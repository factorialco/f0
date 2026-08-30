//#region ../../node_modules/.pnpm/raf-schd@4.0.3/node_modules/raf-schd/dist/raf-schd.esm.js
var e = function(e) {
	var t = [], n = null, r = function() {
		t = [...arguments], !n && (n = requestAnimationFrame(function() {
			n = null, e.apply(void 0, t);
		}));
	};
	return r.cancel = function() {
		n &&= (cancelAnimationFrame(n), null);
	}, r;
};
//#endregion
export { e as default };
