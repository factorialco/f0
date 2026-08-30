//#region src/ui/DatePickerPopup/dismissal.ts
var e = (e, t) => {
	if (!(e instanceof Element) || !t) return !1;
	let n = e.closest("[role=\"listbox\"]");
	return n?.id ? Array.from(t.querySelectorAll("[aria-controls]")).some((e) => e.getAttribute("aria-controls") === n.id) : !1;
}, t = (e, t) => e instanceof Element && t !== null && e.contains(t), n = (n) => ({
	onPointerDownOutside: (t) => {
		e(t.target, n()) && t.preventDefault();
	},
	onFocusOutside: (r) => {
		let i = n();
		(e(r.target, i) || t(r.target, i)) && r.preventDefault();
	}
});
//#endregion
export { n as createCalendarDismissalHandlers, t as hostsElement, e as isDropdownOwnedBy };
