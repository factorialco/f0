var e = 2e3, t = 12e3, n = 40, r = 1.05, i = [
	255,
	60,
	0
], a = [
	160,
	140,
	220
], o = 4 * Math.PI;
function s(e, t) {
	return [
		e[0] * t[0] - e[1] * t[1] - e[2] * t[2] - e[3] * t[3],
		e[0] * t[1] + e[1] * t[0] + e[2] * t[3] - e[3] * t[2],
		e[0] * t[2] - e[1] * t[3] + e[2] * t[0] + e[3] * t[1],
		e[0] * t[3] + e[1] * t[2] - e[2] * t[1] + e[3] * t[0]
	];
}
function c(e, t, n, r) {
	let i = Math.sin(r / 2);
	return [
		Math.cos(r / 2),
		e * i,
		t * i,
		n * i
	];
}
var l = [
	0,
	0,
	0
];
function u(e, t, n, r, i) {
	let a = e[0], o = e[1], s = e[2], c = e[3], l = 2 * (s * r - c * n), u = 2 * (c * t - o * r), d = 2 * (o * n - s * t);
	i[0] = t + a * l + s * d - c * u, i[1] = n + a * u + c * l - o * d, i[2] = r + a * d + o * u - s * l;
}
var d = .15;
function f(e) {
	if (e <= 0) return 0;
	if (e >= 1) return 1;
	let t = .85;
	if (e <= d) return e * e / (2 * d) / t;
	if (e >= .85) {
		let n = 1 - e;
		return (t - n * n / (2 * d)) / t;
	}
	return (e - d / 2) / t;
}
var p = 256, m = (() => {
	let e = Array(p);
	for (let t = 0; t < p; t++) {
		let n = t / 255, r = Math.round(i[0] + (a[0] - i[0]) * n), o = Math.round(i[1] + (a[1] - i[1]) * n), s = Math.round(i[2] + (a[2] - i[2]) * n);
		e[t] = `rgb(${r},${o},${s})`;
	}
	return e;
})();
function h(e) {
	return m[e <= 0 ? 0 : e >= 1 ? 255 : e * 255 | 0];
}
var g = Math.sqrt(5200), _ = [
	60 / g,
	40 / g,
	0
], v = 6, y = 41, b = 287, x = (() => {
	let e = 1.5472, t = Array(41);
	for (let r = 0; r <= n; r++) {
		let i = r / n * Math.PI * 2, a = Math.sin(i) ** 2, o = a < 1e-9 ? 2.4043997499999996 / (2 * e) : (e - Math.sqrt(e * e - a * (3.3938278399999997 - a - .9894280900000001))) / a;
		t[r] = Math.acos(Math.max(-1, Math.min(1, o)));
	}
	return t;
})(), S = Array(41), C = Array(41);
for (let e = 0; e <= n; e++) {
	let t = e / n * Math.PI * 2;
	S[e] = Math.cos(t), C[e] = Math.sin(t);
}
var w = [
	0,
	1,
	2,
	3
].map((e) => c(0, 0, 1, e * Math.PI / 2)), T = [
	[
		0,
		0,
		0,
		0
	],
	[
		0,
		0,
		0,
		0
	],
	[
		0,
		0,
		0,
		0
	],
	[
		0,
		0,
		0,
		0
	]
], E = (e, t) => e.avgZ - t.avgZ;
function D() {
	let e = Array(960);
	for (let t = 0; t < 960; t++) e[t] = {
		points: "",
		color: "",
		avgZ: Infinity
	};
	let t = Array(b);
	for (let e = 0; e < b; e++) t[e] = {
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
function O(e, t, i, a) {
	let { quads: d, grid: f } = e, p = i * .392, m = i / 2, g = i / 2, b = t * o;
	u(c(0, 0, 1, a * 2 * Math.PI), _[0], _[1], _[2], l);
	let D = c(l[0], l[1], l[2], b);
	for (let e = 0; e < 4; e++) T[e] = s(D, w[e]);
	let O = 0;
	for (let e = 0; e < 4; e++) {
		let t = T[e];
		for (let e = 0; e <= v; e++) {
			let r = e / v, i = Math.sin(r * Math.PI), a = e * y;
			for (let e = 0; e <= n; e++) {
				let n = r * x[e], o = Math.sin(n);
				u(t, o * S[e], Math.cos(n), o * C[e], l);
				let s = f[a + e];
				s.x = l[0], s.y = l[1], s.z = l[2], s.t = i;
			}
		}
		for (let e = 0; e < v; e++) {
			let t = e * y, i = (e + 1) * y;
			for (let e = 0; e < n; e++) {
				let n = f[t + e], a = f[t + e + 1], o = f[i + e], s = f[i + e + 1];
				if ((n.t + a.t + o.t + s.t) * .25 < .001) continue;
				let c = (n.x + a.x + o.x + s.x) * .25, l = (n.y + a.y + o.y + s.y) * .25, u = (n.z + a.z + o.z + s.z) * .25, _ = c * p, v = l * p, y = n.x * p - _, b = n.y * p - v, x = m + _ + y * r, S = g - v - b * r, C = a.x * p - _, w = a.y * p - v, T = m + _ + C * r, E = g - v - w * r, D = s.x * p - _, k = s.y * p - v, A = m + _ + D * r, j = g - v - k * r, M = o.x * p - _, N = o.y * p - v, P = m + _ + M * r, F = g - v - N * r, I = d[O];
				I.points = `${x},${S} ${T},${E} ${A},${j} ${P},${F}`, I.color = h((c + 1) * .5), I.avgZ = u, O++;
			}
		}
	}
	for (let e = O; e < 960; e++) d[e].avgZ = Infinity;
	return d.sort(E), O;
}
//#endregion
export { t as PRECESSION_MS, e as SPIN_MS, O as buildFrameInto, D as createGlobeSpinState, f as spinEase };
