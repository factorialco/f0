function d(r, t, n) {
  const e = r.createShader(t);
  if (!e) throw new Error("Failed to create shader");
  if (r.shaderSource(e, n), r.compileShader(e), !r.getShaderParameter(e, r.COMPILE_STATUS)) {
    const a = r.getShaderInfoLog(e) || "Unknown shader error";
    throw r.deleteShader(e), new Error(a);
  }
  return e;
}
function S(r, t, n) {
  const e = d(r, r.VERTEX_SHADER, t), a = d(r, r.FRAGMENT_SHADER, n), o = r.createProgram();
  if (!o) throw new Error("Failed to create program");
  if (r.attachShader(o, e), r.attachShader(o, a), r.linkProgram(o), !r.getProgramParameter(o, r.LINK_STATUS)) {
    const h = r.getProgramInfoLog(o) || "Unknown link error";
    throw r.deleteProgram(o), r.deleteShader(e), r.deleteShader(a), new Error(h);
  }
  return r.deleteShader(e), r.deleteShader(a), o;
}
export {
  d as compileShader,
  S as createProgram
};
