import { useReducedMotion as e } from "./a11y.js";
import { useCallback as t } from "react";
import n from "canvas-confetti";
//#region src/lib/emoji-confetti.ts
var r = () => {
	let r = e();
	return { fireEmojiConfetti: t((e, t) => {
		let i = t.current;
		if (i) {
			let t = i.getBoundingClientRect(), a = t.left + t.width / 2, o = t.top;
			n({
				particleCount: 20,
				gravity: 0,
				spread: 360,
				startVelocity: 10,
				ticks: 50,
				origin: {
					x: a / window.innerWidth,
					y: o / window.innerHeight
				},
				shapes: [n.shapeFromText({
					text: e,
					scalar: 2
				})],
				scalar: 2,
				disableForReducedMotion: r
			});
		}
	}, [r]) };
};
//#endregion
export { r as useEmojiConfetti };
