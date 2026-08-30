import { useEffect as e, useState as t } from "react";
//#region src/hooks/datasource/useGroups.ts
var n = (e, t) => e.reduce((e, n) => (e[n.key] = typeof t == "boolean" ? t : t.includes(n.key), e), {}), r = (r, i = []) => {
	let [a, o] = t(() => n(r, i));
	return e(() => {
		let e = n(r, i);
		Object.values(e).length > 0 && o(e);
	}, [JSON.stringify(r), JSON.stringify(i)]), {
		openGroups: a,
		setGroupOpen: (e, t) => {
			o((n) => ({
				...n,
				[e]: t
			}));
		}
	};
}, i = {
	delay: .03,
	duration: .03,
	maxDelay: 20
}, a = (e) => {
	let { delay: t, duration: n, maxDelay: r } = {
		...i,
		...e
	};
	return {
		hidden: {
			opacity: 0,
			y: -10
		},
		visible: (e) => ({
			opacity: 1,
			y: 0,
			transition: {
				delay: Math.min(e * t, r),
				duration: n,
				type: "spring",
				stiffness: 100,
				damping: 10
			}
		})
	};
};
//#endregion
export { a as getAnimationVariants, r as useGroups };
