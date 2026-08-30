import { useCallback as e, useEffect as t, useRef as n, useState as r } from "react";
import { animate as i, useMotionValue as a, useMotionValueEvent as o } from "motion/react";
import { useTrackVolume as s } from "@livekit/components-react";
//#region src/kits/ai/F0AuraVoiceAnimation/hooks/useAuraVoiceAnimation.ts
var c = 10, l = 2, u = .5, d = .2, f = 1.5, p = {
	duration: .5,
	ease: "easeOut"
}, m = {
	duration: .35,
	ease: "easeOut",
	repeat: Infinity,
	repeatType: "mirror"
};
function h(t) {
	let [s, c] = r(t), l = a(t), u = n(null);
	return o(l, "change", (e) => c(e)), {
		value: s,
		motionValue: l,
		controls: u,
		animate: e((e, t) => {
			u.current = i(l, e, t);
		}, [l])
	};
}
function g(e, n) {
	let [i, a] = r(c), { value: o, animate: g, motionValue: _ } = h(d), { value: v, animate: y } = h(l), { value: b, animate: x } = h(u), { value: S, animate: C } = h(f), w = s(n, {
		fftSize: 512,
		smoothingTimeConstant: .55
	});
	return t(() => {
		switch (e) {
			case "idle":
			case "failed":
			case "disconnected":
				a(10), g(.2, p), y(1.2, p), x(.4, p), C(1, p);
				return;
			case "listening":
			case "pre-connect-buffering":
				a(20), g(.3, {
					type: "spring",
					duration: 1,
					bounce: .35
				}), y(1, p), x(.7, p), C([1.5, 2], m);
				return;
			case "thinking":
			case "connecting":
			case "initializing":
				a(30), g(.3, p), y(.5, p), x(1, p), C([.5, 2.5], m);
				return;
			case "speaking":
				a(70), g(.3, p), y(.75, p), x(1.25, p), C(1.5, p);
				return;
		}
	}, [
		e,
		g,
		y,
		x,
		C
	]), t(() => {
		e === "speaking" && w > 0 && !_.isAnimating() && g(.2 + .2 * w, { duration: 0 });
	}, [
		e,
		w,
		_,
		g,
		y,
		x,
		C
	]), {
		speed: i,
		scale: o,
		amplitude: v,
		frequency: b,
		brightness: S
	};
}
//#endregion
export { g as useAuraVoiceAnimation };
