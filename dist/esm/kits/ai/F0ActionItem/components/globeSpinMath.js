var e = 2e3, t = 12e3, n = 2, r = [
	255,
	60,
	0
], i = [
	160,
	140,
	220
], a = {
	x: -12,
	y: 0,
	z: 0
}, o = {
	x: -12,
	y: 12,
	z: 90
}, s = {
	20: .72,
	28: .66,
	32: .72,
	60: .77,
	80: .8,
	120: .85
}, c = Math.PI / 180, l = n / 8 * Math.PI, u = 4 * Math.PI;
function d(e, t) {
	return [
		e[0] * t[0] - e[1] * t[1] - e[2] * t[2] - e[3] * t[3],
		e[0] * t[1] + e[1] * t[0] + e[2] * t[3] - e[3] * t[2],
		e[0] * t[2] - e[1] * t[3] + e[2] * t[0] + e[3] * t[1],
		e[0] * t[3] + e[1] * t[2] - e[2] * t[1] + e[3] * t[0]
	];
}
function f(e) {
	let t = Math.sqrt(e[0] ** 2 + e[1] ** 2 + e[2] ** 2 + e[3] ** 2);
	return [
		e[0] / t,
		e[1] / t,
		e[2] / t,
		e[3] / t
	];
}
function p(e, t, n, r) {
	let i = Math.sin(r / 2);
	return [
		Math.cos(r / 2),
		e * i,
		t * i,
		n * i
	];
}
var m = [
	0,
	0,
	0
];
function h(e, t, n, r, i) {
	let a = e[0], o = e[1], s = e[2], c = e[3], l = 2 * (s * r - c * n), u = 2 * (c * t - o * r), d = 2 * (o * n - s * t);
	i[0] = t + a * l + s * d - c * u, i[1] = n + a * u + c * l - o * d, i[2] = r + a * d + o * u - s * l;
}
function g(e, t, n) {
	let r = p(1, 0, 0, e * c), i = p(0, 1, 0, t * c), a = p(0, 0, 1, n * c);
	return f(d(d(i, r), a));
}
function _(e) {
	return e < .5 ? 4 * e * e * e : 1 - (-2 * e + 2) ** 3 / 2;
}
var v = 256, y = (() => {
	let e = Array(v);
	for (let t = 0; t < v; t++) {
		let n = t / 255, a = Math.round(r[0] + (i[0] - r[0]) * n), o = Math.round(r[1] + (i[1] - r[1]) * n), s = Math.round(r[2] + (i[2] - r[2]) * n);
		e[t] = `rgb(${a},${o},${s})`;
	}
	return e;
})();
function b(e) {
	return y[e <= 0 ? 0 : e >= 1 ? 255 : e * 255 | 0];
}
var x = Object.keys(s).map(Number).sort((e, t) => e - t);
function S(e) {
	let t = x;
	if (e <= t[0]) return s[t[0]];
	if (e >= t[t.length - 1]) return s[t[t.length - 1]];
	for (let n = 0; n < t.length - 1; n++) if (e >= t[n] && e <= t[n + 1]) {
		let r = (e - t[n]) / (t[n + 1] - t[n]);
		return s[t[n]] + (s[t[n + 1]] - s[t[n]]) * r;
	}
	return .72;
}
var C = Math.sqrt(5200), w = [
	60 / C,
	40 / C,
	0
], T = g(a.x, a.y, a.z), E = g(o.x, o.y, o.z), D = 6, O = 41, k = 287, A = [[
	0,
	0,
	0,
	0
], [
	0,
	0,
	0,
	0
]], j = (e, t) => e.avgZ - t.avgZ;
function M() {
	let e = Array(960);
	for (let t = 0; t < 960; t++) e[t] = {
		points: "",
		color: "",
		avgZ: Infinity
	};
	let t = Array(k);
	for (let e = 0; e < k; e++) t[e] = {
		x: 0,
		y: 0,
		z: 0,
		t: 0
	};
	return {
		quads: e,
		grid: t
	};
}
function N(e, t, n, r) {
	let { quads: i, grid: a } = e, o = n * .392, s = n / 2, c = n / 2, f = l * S(n), g = t * u;
	h(p(0, 0, 1, r * 2 * Math.PI), w[0], w[1], w[2], m);
	let _ = p(m[0], m[1], m[2], g), v = d(_, T), y = d(_, E);
	A[0] = v, A[1] = y;
	let x = 0;
	for (let e = 0; e < 4; e++) {
		let t = A[e >> 1], n = e & 1 ? -1 : 1;
		for (let e = 0; e <= D; e++) {
			let r = n * (Math.PI / 2 - e / D * f), i = Math.cos(r), o = Math.sin(r), s = Math.sin(e / D * Math.PI), c = e * O;
			for (let e = 0; e <= 40; e++) {
				let n = e / 40 * Math.PI * 2;
				h(t, i * Math.cos(n), o, i * Math.sin(n), m);
				let r = a[c + e];
				r.x = m[0], r.y = m[1], r.z = m[2], r.t = s;
			}
		}
		for (let e = 0; e < D; e++) {
			let t = e * O, n = (e + 1) * O;
			for (let e = 0; e < 40; e++) {
				let r = a[t + e], l = a[t + e + 1], u = a[n + e], d = a[n + e + 1];
				if ((r.t + l.t + u.t + d.t) * .25 < .001) continue;
				let f = (r.x + l.x + u.x + d.x) * .25, p = (r.y + l.y + u.y + d.y) * .25, m = (r.z + l.z + u.z + d.z) * .25, h = f * o, g = p * o, _ = r.x * o - h, v = r.y * o - g, y = Math.sqrt(_ * _ + v * v), S = y > 0 ? (y + .9) / y : 1, C = s + h + _ * S, w = c - g - v * S, T = l.x * o - h, E = l.y * o - g, D = Math.sqrt(T * T + E * E), O = D > 0 ? (D + .9) / D : 1, k = s + h + T * O, A = c - g - E * O, j = d.x * o - h, M = d.y * o - g, N = Math.sqrt(j * j + M * M), P = N > 0 ? (N + .9) / N : 1, F = s + h + j * P, I = c - g - M * P, L = u.x * o - h, R = u.y * o - g, z = Math.sqrt(L * L + R * R), B = z > 0 ? (z + .9) / z : 1, V = s + h + L * B, H = c - g - R * B, U = i[x];
				U.points = `${C},${w} ${k},${A} ${F},${I} ${V},${H}`, U.color = b((f + 1) * .5), U.avgZ = m, x++;
			}
		}
	}
	for (let e = x; e < 960; e++) i[e].avgZ = Infinity;
	return i.sort(j), x;
}
//#endregion
export { t as PRECESSION_MS, e as SPIN_MS, N as buildFrameInto, M as createGlobeSpinState, _ as easeInOutCubic };
