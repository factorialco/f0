//#region src/ui/DatePickerPopup/utils.ts
var e = (e) => e instanceof Date ? e : new Date(e), t = (t) => {
	if (!t?.value) return t;
	let { from: n, to: r } = t.value;
	return n instanceof Date && r instanceof Date ? t : {
		...t,
		value: {
			from: e(n),
			to: e(r)
		}
	};
}, n = (e, t) => !e && !t ? !0 : !e || !t ? !1 : e.value?.from.getTime() === t.value?.from.getTime() && e.value?.to.getTime() === t.value?.to.getTime() && e.granularity === t.granularity;
//#endregion
export { n as isSameDatePickerValue, t as reviveDatePickerValue };
