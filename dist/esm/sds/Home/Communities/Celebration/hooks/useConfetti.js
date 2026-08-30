import { useCallback as e, useRef as t } from "react";
import n from "canvas-confetti";
//#region src/sds/Home/Communities/Celebration/hooks/useConfetti.ts
function r(r) {
	let i = t(null), a = t();
	return {
		canvasRef: i,
		handleMouseEnter: e(() => {
			let e = i.current;
			if (!e) return;
			let t = n.create(e, {
				resize: !0,
				useWorker: !1
			}), o = [
				"9D76F3",
				"3FC495",
				"E61D46",
				"F6AF3D"
			], s = .1;
			a.current = setInterval(() => {
				t({
					particleCount: 1,
					angle: 90,
					spread: 45,
					origin: {
						x: s + Math.random() * (1 - s * 2),
						y: -.1
					},
					gravity: .65,
					scalar: 1,
					ticks: 80,
					startVelocity: 1,
					disableForReducedMotion: r,
					colors: [o[Math.floor(Math.random() * o.length)]]
				});
			}, 100);
		}, [r]),
		handleMouseLeave: e(() => {
			clearInterval(a.current);
		}, [])
	};
}
//#endregion
export { r as useConfetti };
