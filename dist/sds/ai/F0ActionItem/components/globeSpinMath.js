const Gt = 60, Nt = 40, wt = 2e3, Ct = 500, Vt = 12e3;
const E = [255, 60, 0], W = [160, 140, 220], Y = { x: -12, y: 0, z: 0 }, j = { x: -12, y: 12, z: 90 }, p = {
  20: 0.72,
  28: 0.66,
  32: 0.72,
  60: 0.77,
  80: 0.8,
  120: 0.85
}, k = Math.PI / 180, Tt = 2 / 8 * Math.PI, gt = 4 * Math.PI;
function $(t, n) {
  return [
    t[0] * n[0] - t[1] * n[1] - t[2] * n[2] - t[3] * n[3],
    t[0] * n[1] + t[1] * n[0] + t[2] * n[3] - t[3] * n[2],
    t[0] * n[2] - t[1] * n[3] + t[2] * n[0] + t[3] * n[1],
    t[0] * n[3] + t[1] * n[2] - t[2] * n[1] + t[3] * n[0]
  ];
}
function Ot(t) {
  const n = Math.sqrt(t[0] ** 2 + t[1] ** 2 + t[2] ** 2 + t[3] ** 2);
  return [t[0] / n, t[1] / n, t[2] / n, t[3] / n];
}
function P(t, n, o, r) {
  const c = Math.sin(r / 2);
  return [Math.cos(r / 2), t * c, n * c, o * c];
}
const M = [0, 0, 0];
function rt(t, n, o, r, c) {
  const e = t[0], s = t[1], i = t[2], u = t[3], L = 2 * (i * r - u * o), T = 2 * (u * n - s * r), g = 2 * (s * o - i * n);
  c[0] = n + e * L + i * g - u * T, c[1] = o + e * T + u * L - s * g, c[2] = r + e * g + s * T - i * L;
}
function St(t, n, o) {
  const r = P(1, 0, 0, t * k), c = P(0, 1, 0, n * k), e = P(0, 0, 1, o * k);
  return Ot($($(c, r), e));
}
function mt(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}
const q = 256, dt = (() => {
  const t = new Array(q);
  for (let n = 0; n < q; n++) {
    const o = n / (q - 1), r = Math.round(E[0] + (W[0] - E[0]) * o), c = Math.round(E[1] + (W[1] - E[1]) * o), e = Math.round(E[2] + (W[2] - E[2]) * o);
    t[n] = `rgb(${r},${c},${e})`;
  }
  return t;
})();
function Rt(t) {
  const n = t <= 0 ? 0 : t >= 1 ? q - 1 : t * (q - 1) | 0;
  return dt[n];
}
const Pt = Object.keys(p).map(Number).sort((t, n) => t - n);
function qt(t) {
  const n = Pt;
  if (t <= n[0]) return p[n[0]];
  if (t >= n[n.length - 1])
    return p[n[n.length - 1]];
  for (let o = 0; o < n.length - 1; o++)
    if (t >= n[o] && t <= n[o + 1]) {
      const r = (t - n[o]) / (n[o + 1] - n[o]);
      return p[n[o]] + (p[n[o + 1]] - p[n[o]]) * r;
    }
  return 0.72;
}
const et = Math.sqrt(60 ** 2 + 40 ** 2), H = [60 / et, 40 / et, 0], vt = St(Y.x, Y.y, Y.z), Zt = St(j.x, j.y, j.z), A = 6, Z = 41, at = (A + 1) * Z, K = 4 * A * 40, J = [
  [0, 0, 0, 0],
  [0, 0, 0, 0]
], $t = (t, n) => t.avgZ - n.avgZ;
function Dt() {
  const t = new Array(K);
  for (let o = 0; o < K; o++)
    t[o] = { points: "", color: "", avgZ: 1 / 0 };
  const n = new Array(at);
  for (let o = 0; o < at; o++)
    n[o] = { x: 0, y: 0, z: 0, t: 0 };
  return { quads: t, grid: n };
}
function Bt(t, n, o, r) {
  const { quads: c, grid: e } = t, s = o * 0.392, i = o / 2, u = o / 2, L = Tt * qt(o), T = n * gt, g = P(0, 0, 1, r * 2 * Math.PI);
  rt(g, H[0], H[1], H[2], M);
  const b = P(M[0], M[1], M[2], T), it = $(b, vt), ut = $(b, Zt);
  J[0] = it, J[1] = ut;
  let v = 0;
  for (let l = 0; l < 4; l++) {
    const _t = J[l >> 1], lt = l & 1 ? -1 : 1;
    for (let S = 0; S <= A; S++) {
      const O = lt * (Math.PI / 2 - S / A * L), d = Math.cos(O), y = Math.sin(O), I = Math.sin(S / A * Math.PI), f = S * Z;
      for (let a = 0; a <= 40; a++) {
        const _ = a / 40 * Math.PI * 2;
        rt(_t, d * Math.cos(_), y, d * Math.sin(_), M);
        const R = e[f + a];
        R.x = M[0], R.y = M[1], R.z = M[2], R.t = I;
      }
    }
    for (let S = 0; S < A; S++) {
      const O = S * Z, d = (S + 1) * Z;
      for (let y = 0; y < 40; y++) {
        const I = e[O + y], f = e[O + y + 1], a = e[d + y], _ = e[d + y + 1];
        if ((I.t + f.t + a.t + _.t) * 0.25 < 1e-3) continue;
        const tt = (I.x + f.x + a.x + _.x) * 0.25, yt = (I.y + f.y + a.y + _.y) * 0.25, It = (I.z + f.z + a.z + _.z) * 0.25, h = tt * s, x = yt * s, G = I.x * s - h, N = I.y * s - x, w = Math.sqrt(G * G + N * N), nt = w > 0 ? (w + 0.9) / w : 1, ft = i + h + G * nt, ht = u - x - N * nt, C = f.x * s - h, V = f.y * s - x, m = Math.sqrt(C * C + V * V), ot = m > 0 ? (m + 0.9) / m : 1, xt = i + h + C * ot, Mt = u - x - V * ot, D = _.x * s - h, B = _.y * s - x, Q = Math.sqrt(D * D + B * B), ct = Q > 0 ? (Q + 0.9) / Q : 1, Et = i + h + D * ct, pt = u - x - B * ct, z = a.x * s - h, F = a.y * s - x, U = Math.sqrt(z * z + F * F), st = U > 0 ? (U + 0.9) / U : 1, At = i + h + z * st, Lt = u - x - F * st, X = c[v];
        X.points = `${ft},${ht} ${xt},${Mt} ${Et},${pt} ${At},${Lt}`, X.color = Rt((tt + 1) * 0.5), X.avgZ = It, v++;
      }
    }
  }
  for (let l = v; l < K; l++)
    c[l].avgZ = 1 / 0;
  return c.sort($t), v;
}
export {
  Ct as PAUSE_MS,
  Vt as PRECESSION_MS,
  K as QUAD_POOL_SIZE,
  wt as SPIN_MS,
  Gt as VEL_X,
  Nt as VEL_Y,
  Bt as buildFrameInto,
  Dt as createGlobeSpinState,
  mt as easeInOutCubic
};
