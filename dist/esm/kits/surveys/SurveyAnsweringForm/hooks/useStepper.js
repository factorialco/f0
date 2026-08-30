import { useCallback as e, useState as t } from "react";
//#region src/kits/surveys/SurveyAnsweringForm/hooks/useStepper.ts
function n(n) {
	let [r, i] = t(0), [a, o] = t(null), s = n.length, c = s > 0 ? r / s * 100 : 0;
	return {
		currentStep: r,
		totalSteps: s,
		progress: a ?? c,
		currentQuestion: n[r],
		isFirstStep: r === 0,
		isLastStep: r === s - 1,
		goToNext: e(() => {
			o(null), i((e) => Math.min(e + 1, s - 1));
		}, [s]),
		goToPrevious: e(() => {
			o(null), i((e) => Math.max(e - 1, 0));
		}, []),
		reset: e(() => {
			o(null), i(0);
		}, []),
		setProgress: e((e) => {
			o(e);
		}, [])
	};
}
//#endregion
export { n as useStepper };
