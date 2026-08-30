import { cn as e } from "../../../lib/utils.js";
import t from "../../../icons/app/Cross.js";
import { useI18n as n } from "../../../lib/providers/i18n/i18n-provider.js";
import { F0Button as r } from "../../../components/F0Button/F0Button.js";
import { useReducedMotion as i } from "../../../lib/a11y.js";
import { PongBall as a } from "./components/PongBall.js";
import { useCallback as o, useEffect as s, useRef as c, useState as l } from "react";
import { createPortal as u } from "react-dom";
import { jsx as d, jsxs as f } from "react/jsx-runtime";
import ee from "canvas-confetti";
//#region src/kits/ai/F0AiPong/F0AiPong.tsx
var p = 40, m = 93, te = m * .5, h = 32, g = 24, _ = 8, ne = 48, re = 10, v = 7, y = 18, ie = .25, ae = .15, oe = 800, se = Math.PI / 3, b = p / 2, ce = .12, le = 8, ue = 5, de = .08;
function x(e, t, n) {
	return Math.max(t, Math.min(n, e));
}
function fe() {
	let e = (Math.random() * 50 + 65) * Math.PI / 180, t = Math.random() > .5 ? 1 : -1, n = Math.random() > .5 ? 1 : -1;
	return {
		vx: Math.cos(e) * v * t,
		vy: Math.sin(e) * v * n
	};
}
var S = ({ onClose: S }) => {
	let C = n(), w = i(), T = c(null), pe = c(null), E = c(null), D = c(null), [O, me] = l(null), k = c(/* @__PURE__ */ new Set()), A = c({
		x: 0,
		y: 0,
		vx: 0,
		vy: 0,
		speed: v
	}), j = c(0), M = c(0), N = c(0), P = c({
		player: 0,
		ai: 0
	}), F = c("countdown"), he = c(0), I = c(0), L = c([]), R = c(0), z = c(0), B = c({
		width: 0,
		height: 0
	}), V = c(0), H = c(0), U = c(m), W = c(0), G = c(0), ge = c(0), K = c(0), _e = c(null), [ve, ye] = l({
		x: 0,
		y: 0
	}), [be, xe] = l(0), [Se, Ce] = l(0), [q, we] = l({
		player: 0,
		ai: 0
	}), [Te, Ee] = l(m), [J, Y] = l("countdown"), [De, Oe] = l(3), [ke, Ae] = l([]), [X, je] = l(0), [Me, Ne] = l(0), [Pe, Fe] = l(null), [Ie, Le] = l(null), Z = o(() => {
		let { width: e, height: t } = B.current, n = v + W.current;
		A.current = {
			x: e / 2,
			y: t / 2,
			vx: 0,
			vy: 0,
			speed: n
		}, L.current = [], I.current = 0;
	}, []), Re = o(() => {
		let e = v + W.current, { vx: t, vy: n } = fe(), r = e / v;
		A.current.vx = t * r, A.current.vy = n * r, A.current.speed = e, F.current = "playing", Y("playing"), _e.current = null, Le(null);
	}, []), Q = o(() => {
		Z(), F.current = "countdown", Y("countdown"), Oe(3);
		let e = 3, t = setInterval(() => {
			e--, e <= 0 ? (clearInterval(t), Re()) : Oe(e);
		}, 600);
		return () => clearInterval(t);
	}, [Z, Re]), ze = o(() => {
		w || !D.current || D.current({
			particleCount: 80,
			spread: 70,
			origin: {
				x: .5,
				y: .7
			},
			colors: [
				"#9D76F3",
				"#3FC495",
				"#E61D46",
				"#F6AF3D"
			],
			disableForReducedMotion: !0
		});
	}, [w]), $ = o((e) => {
		let t = { ...P.current };
		if (e === "player" ? t.player++ : t.ai++, P.current = t, we(t), V.current = 8, _e.current = e, Le(e), W.current = Math.min(11, W.current + ae), e === "player" && ze(), t.player >= 3 || t.ai >= 3) {
			F.current = "gameover", Y("gameover"), Z(), Fe(t.player >= 3 ? C.ai.pong.youWin : C.ai.pong.youLose), setTimeout(() => S(), 2e3);
			return;
		}
		F.current = "scored", Y("scored"), Z(), he.current = oe, setTimeout(() => {
			F.current === "scored" && Q();
		}, oe);
	}, [
		Z,
		Q,
		ze,
		C
	]);
	if (s(() => {
		if (T.current) {
			let e = T.current.closest("[aria-hidden]");
			e && me(e);
		}
	}, []), s(() => (E.current && (D.current = ee.create(E.current, {
		resize: !0,
		useWorker: !1
	})), () => {
		D.current?.reset();
	}), [O]), s(() => {
		let e = (e) => {
			e.key === "Escape" && S(), (e.key === "ArrowLeft" || e.key === "ArrowRight") && (e.preventDefault(), k.current.add(e.key));
		}, t = (e) => {
			k.current.delete(e.key);
		};
		return window.addEventListener("keydown", e), window.addEventListener("keyup", t), () => {
			window.removeEventListener("keydown", e), window.removeEventListener("keyup", t);
		};
	}, [S]), s(() => {
		let e = pe.current;
		if (!e) return;
		let t = e.getBoundingClientRect();
		B.current = {
			width: t.width,
			height: t.height
		};
		let n = t.width / 2;
		j.current = n, M.current = n, N.current = n, P.current = {
			player: 0,
			ai: 0
		}, we({
			player: 0,
			ai: 0
		}), H.current = 0, U.current = m, Ee(m), W.current = 0, G.current = 0;
		let r = Q(), i = (t) => {
			let n = e.getBoundingClientRect(), r = U.current;
			j.current = x(t.clientX - n.left, r / 2 + _, n.width - r / 2 - _);
		};
		e.addEventListener("pointermove", i);
		let a = (e) => {
			R.current ||= e;
			let t = (e - R.current) / 16.667, n = Math.min(t, 3);
			R.current = e;
			let { width: r, height: i } = B.current, o = A.current, s = U.current;
			if (k.current.has("ArrowLeft") && (j.current = x(j.current - re * n, s / 2 + _, r - s / 2 - _)), k.current.has("ArrowRight") && (j.current = x(j.current + re * n, s / 2 + _, r - s / 2 - _)), V.current > 0 && (V.current *= .85, V.current < .5 && (V.current = 0)), F.current === "playing") {
				L.current.push({
					x: o.x,
					y: o.y
				}), L.current.length > ue && (L.current = L.current.slice(-5)), o.x += o.vx * n, o.y += o.vy * n, ge.current += K.current * n, K.current *= .96;
				let e = r - _ - p / 2;
				o.x <= 28 && (o.x = 28, o.vx = Math.abs(o.vx), K.current *= -.5), o.x >= e && (o.x = e, o.vx = -Math.abs(o.vx), K.current *= -.5);
				let t = i - g - h, a = s / 2;
				if (o.y + b >= t && o.y - b <= t + h && o.vy > 0 && o.x >= j.current - a - b && o.x <= j.current + a + b) {
					o.y = t - b;
					let e = x((o.x - j.current) / a, -1, 1);
					o.speed = Math.min(o.speed + ie, y);
					let n = e * se;
					o.vx = Math.sin(n) * o.speed, o.vy = -Math.cos(n) * o.speed, K.current = e * 1.2, I.current++, H.current++;
					let r = te / m + (1 - te / m) * Math.exp(-H.current * .03);
					U.current = m * r;
				}
				let c = m / 2;
				if (o.y - b <= 56 && o.y + b >= g && o.vy < 0 && o.x >= M.current - c - b && o.x <= M.current + c + b) {
					o.y = 76;
					let e = x((o.x - M.current) / c, -1, 1);
					o.speed = Math.min(o.speed + ie, y);
					let t = e * se;
					o.vx = Math.sin(t) * o.speed, o.vy = Math.cos(t) * o.speed, K.current = e * 1.2, I.current++;
				}
				if (o.y < -80 ? $("player") : o.y > i + 80 && $("ai"), o.vy < 0) {
					let e = Math.max(1, (o.y - g) / -o.vy), t = o.x + o.vx * e, r = le * (1 + o.speed / y), i = t + (Math.random() - .5) * r - N.current;
					N.current += i * ce * n;
				} else {
					let e = Math.sin(Date.now() * .002) * 15;
					N.current += (r / 2 + e - N.current) * .025 * n;
				}
				let l = (N.current - M.current) * .1 * n;
				G.current += l, G.current *= .88;
				let u = 6 + I.current * .12;
				G.current = x(G.current, -u, u), M.current += G.current * n, M.current = x(M.current, 54.5, r - m / 2 - _);
			}
			ye({
				x: o.x,
				y: o.y
			}), xe(j.current), Ce(M.current), Ae([...L.current]), je(V.current), Ee(U.current), Ne(ge.current), z.current = requestAnimationFrame(a);
		};
		return R.current = 0, z.current = requestAnimationFrame(a), () => {
			cancelAnimationFrame(z.current), e.removeEventListener("pointermove", i), r?.();
		};
	}, [
		O,
		$,
		Q
	]), !O) return /* @__PURE__ */ d("div", { ref: T });
	let Be = X > .5 ? (Math.random() - .5) * X : 0, Ve = X > .5 ? (Math.random() - .5) * X : 0;
	return u(/* @__PURE__ */ f("div", {
		className: "absolute inset-0 z-50 flex flex-col bg-f1-background",
		children: [/* @__PURE__ */ d("style", { children: "\n        @property --gradient-angle {\n          syntax: \"<angle>\";\n          initial-value: 0deg;\n          inherits: false;\n        }\n        @keyframes pong-ai-glow {\n          from { --gradient-angle: 0deg; }\n          to { --gradient-angle: 360deg; }\n        }\n      " }), /* @__PURE__ */ f("div", {
			className: "flex flex-1 flex-col bg-f1-special-page",
			children: [
				/* @__PURE__ */ f("div", {
					className: "flex items-center justify-between px-4 py-3",
					children: [/* @__PURE__ */ d("span", {
						className: "text-base font-medium text-f1-foreground",
						children: C.ai.pong.title
					}), /* @__PURE__ */ d(r, {
						icon: t,
						label: C.actions.close,
						onClick: S,
						variant: "ghost",
						hideLabel: !0
					})]
				}),
				/* @__PURE__ */ f("div", {
					className: "relative flex-1",
					children: [/* @__PURE__ */ f("div", {
						ref: pe,
						className: "absolute inset-0 cursor-none overflow-hidden",
						style: {
							touchAction: "none",
							transform: `translate(${Be}px, ${Ve}px)`
						},
						children: [
							/* @__PURE__ */ d("div", { className: "pointer-events-none absolute left-0 right-0 top-1/2 h-px translate-y-1/2 bg-f1-border" }),
							ke.map((e, t) => {
								let n = (t + 1) / ke.length, r = p * (.15 + n * .25);
								return /* @__PURE__ */ d("div", {
									className: "pointer-events-none absolute rounded-full bg-f1-foreground-secondary/40",
									style: {
										width: r,
										height: r,
										opacity: n * de,
										transform: `translate(${e.x - r / 2}px, ${e.y - r / 2}px)`
									}
								}, t);
							}),
							/* @__PURE__ */ d("div", {
								className: e("absolute isolate rounded", "border border-solid border-f1-border", "before:pointer-events-none before:absolute before:inset-0 before:z-[-1]", "before:rounded-[inherit] before:bg-f1-special-page before:content-['']", "after:pointer-events-none after:absolute after:inset-0.5 after:z-[-2]", "after:rounded-[inherit] after:blur-[5px] after:content-['']", "after:bg-[conic-gradient(from_var(--gradient-angle),var(--tw-gradient-stops))]", "from-[#E55619] via-[#A1ADE5] to-[#E51943]", "after:scale-100 after:opacity-100"),
								style: {
									width: m,
									height: h,
									top: g,
									transform: `translateX(${Se - m / 2}px)`,
									animation: "pong-ai-glow 4s linear infinite",
									"--gradient-angle": "0deg"
								}
							}),
							/* @__PURE__ */ d(a, {
								size: p,
								className: "pointer-events-none absolute z-30",
								style: {
									transform: `translate(${ve.x - p / 2}px, ${ve.y - p / 2}px) rotate(${Me}rad)`,
									opacity: J === "countdown" ? 0 : 1,
									transition: "opacity 0.3s ease-in"
								}
							}),
							/* @__PURE__ */ d("div", {
								className: "absolute rounded border-2 border-solid border-f1-border",
								style: {
									width: Te,
									height: h,
									bottom: g,
									transform: `translateX(${be - Te / 2}px)`,
									transition: "width 0.3s ease-out"
								},
								children: /* @__PURE__ */ d("div", { className: "h-full w-full rounded bg-f1-special-page" })
							}),
							/* @__PURE__ */ d("div", {
								className: "pointer-events-none absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-solid border-f1-border bg-f1-special-page",
								children: /* @__PURE__ */ d("span", {
									className: "text-3xl font-semibold text-f1-foreground-secondary",
									style: {
										opacity: +(J === "countdown"),
										transition: "opacity 0.3s ease-out"
									},
									children: J === "countdown" ? De : ""
								})
							}),
							J === "scored" && Ie && /* @__PURE__ */ d("div", {
								className: e("pointer-events-none absolute left-4 flex items-center", Ie === "player" ? "top-1/2 mt-4" : "bottom-1/2 -mt-4"),
								children: /* @__PURE__ */ d("span", {
									className: "text-2xl font-semibold text-f1-foreground-secondary/60",
									children: C.ai.pong.goal
								})
							}),
							J === "gameover" && Pe && /* @__PURE__ */ d("div", {
								className: "pointer-events-none absolute inset-0 z-40 flex items-center justify-center bg-f1-special-page/60 backdrop-blur-sm",
								children: /* @__PURE__ */ d("span", {
									className: "text-2xl font-semibold text-f1-foreground",
									children: Pe
								})
							}),
							/* @__PURE__ */ d("canvas", {
								ref: E,
								className: "pointer-events-none absolute inset-0 z-50 h-full w-full"
							})
						]
					}), /* @__PURE__ */ d("div", {
						className: "pointer-events-none absolute inset-y-0 right-0 flex flex-col items-center justify-center",
						style: { width: ne },
						children: /* @__PURE__ */ f("div", {
							className: "flex flex-col items-center gap-6",
							children: [/* @__PURE__ */ d("span", {
								className: e("text-2xl font-semibold", q.ai > 0 ? "text-f1-foreground-secondary" : "text-f1-foreground-disabled"),
								children: q.ai
							}), /* @__PURE__ */ d("span", {
								className: e("text-2xl font-semibold", q.player > 0 ? "text-f1-foreground-secondary" : "text-f1-foreground-disabled"),
								children: q.player
							})]
						})
					})]
				}),
				/* @__PURE__ */ d("div", {
					className: "flex items-center justify-center px-4 py-3 text-sm font-medium text-f1-foreground-secondary",
					children: /* @__PURE__ */ f("div", {
						className: "flex gap-5",
						children: [/* @__PURE__ */ d("span", { children: C.ai.pong.controls }), /* @__PURE__ */ d("span", { children: C.ai.pong.escToExit })]
					})
				})
			]
		})]
	}), O);
};
//#endregion
export { S as F0AiPong };
