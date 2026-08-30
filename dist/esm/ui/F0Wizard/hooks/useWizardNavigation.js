import { useCallback as e, useRef as t, useState as n } from "react";
//#region src/ui/F0Wizard/hooks/useWizardNavigation.ts
function r({ steps: r, defaultStepIndex: i = 0, onSubmit: a, onStepChanged: o, allowStepSkipping: s = !1, autoCloseOnLastStepSubmit: c = !1, onClose: l }) {
	let [u, d] = n(i), [f, p] = n(!1), m = t(r);
	m.current = r;
	let h = e((e) => {
		d(e), o?.(e);
	}, [o]);
	return {
		currentStep: u,
		loading: f,
		goToStep: e(async (e) => {
			if (!(e < 0 || e >= m.current.length) && m.current[u]?.hasErrors?.() !== !0 && !(!s && e > u + 1) && !(e > u && m.current.slice(u, e).some((e) => e.hasErrors?.() === !0)) && m.current.slice(0, e).every((e) => e.isCompleted?.() !== !1)) {
				if (e > u) {
					p(!0);
					try {
						for (let t = u; t < e; t++) {
							let e = m.current[t];
							e?.onNext && await e.onNext();
						}
						h(e);
					} catch {} finally {
						p(!1);
					}
					return;
				}
				h(e);
			}
		}, [
			h,
			u,
			s
		]),
		goNext: e(async () => {
			let e = m.current[u];
			if (e) {
				p(!0);
				try {
					e.onNext && await e.onNext(), u === m.current.length - 1 ? (a && await a(), c && l?.()) : h(u + 1);
				} catch {} finally {
					p(!1);
				}
			}
		}, [
			u,
			a,
			h,
			c,
			l
		]),
		goPrevious: e(() => {
			u > 0 && h(u - 1);
		}, [u, h])
	};
}
//#endregion
export { r as useWizardNavigation };
