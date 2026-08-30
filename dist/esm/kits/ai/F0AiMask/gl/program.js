//#region src/kits/ai/F0AiMask/gl/program.ts
function e(e, t, n) {
	let r = e.createShader(t);
	if (!r) throw Error("Failed to create shader");
	if (e.shaderSource(r, n), e.compileShader(r), !e.getShaderParameter(r, e.COMPILE_STATUS)) {
		let t = e.getShaderInfoLog(r) || "Unknown shader error";
		throw e.deleteShader(r), Error(t);
	}
	return r;
}
function t(t, n, r) {
	let i = e(t, t.VERTEX_SHADER, n), a = e(t, t.FRAGMENT_SHADER, r), o = t.createProgram();
	if (!o) throw Error("Failed to create program");
	if (t.attachShader(o, i), t.attachShader(o, a), t.linkProgram(o), !t.getProgramParameter(o, t.LINK_STATUS)) {
		let e = t.getProgramInfoLog(o) || "Unknown link error";
		throw t.deleteProgram(o), t.deleteShader(i), t.deleteShader(a), Error(e);
	}
	return t.deleteShader(i), t.deleteShader(a), o;
}
//#endregion
export { e as compileShader, t as createProgram };
