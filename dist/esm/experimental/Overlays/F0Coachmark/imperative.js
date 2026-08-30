import { coachmarkStore as e } from "./store.js";
import { nanoid as t } from "nanoid";
//#region src/experimental/Overlays/F0Coachmark/imperative.ts
var n = process.env.NODE_ENV !== "production", r = (e) => {
	n && console.warn(`[f0] ${e}`);
}, i = (t) => {
	n && !e.hasProvider() && console.warn(`[f0] ${t} was called but no <F0Provider> is mounted, so the coachmark will not render. Make sure your app is wrapped in <F0Provider>.`);
}, a = (e) => Array.isArray(e.steps), o = (e) => (a(e) ? e.steps : [{
	title: e.title,
	description: e.description,
	action: e.action
}]).flatMap((t) => {
	let n = t.targetElement ?? e.targetElement;
	return n === void 0 ? (r(`coachmarks.open(): step "${t.title}" has no targetElement, so it cannot be anchored. Skipping it.`), []) : [{
		title: t.title,
		description: t.description,
		action: t.action,
		targetElement: n,
		arrow: t.arrow ?? e.arrow,
		side: t.side ?? e.side,
		align: t.align ?? e.align,
		sideOffset: t.sideOffset ?? e.sideOffset
	}];
}), s = {
	open: (n) => {
		let a = n.id ?? t();
		i("coachmarks.open()");
		let s = o(n);
		return s.length === 0 ? (r("coachmarks.open() was called with no anchorable step. Nothing to show."), a) : (e.addItem({
			id: a,
			steps: s,
			onDismiss: n.onDismiss,
			onComplete: n.onComplete
		}), a);
	},
	close: (t) => {
		e.removeItem(t);
	},
	closeAll: () => {
		e.clear();
	}
};
//#endregion
export { s as coachmarks, o as resolveSteps };
