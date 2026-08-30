import { jsx as e } from "react/jsx-runtime";
//#region src/components/RichText/F0NotesTextEditor/components/Title/index.tsx
var t = ({ value: t, onChange: n, placeholder: r, disabled: i = !1 }) => /* @__PURE__ */ e("div", {
	className: "mx-auto flex w-full max-w-[824px] flex-col pb-4 pt-5 transition-all duration-300 sm:px-14 px-0",
	children: /* @__PURE__ */ e("textarea", {
		ref: (e) => {
			e && (e.style.height = "auto", e.style.height = `${e.scrollHeight}px`);
		},
		disabled: i,
		value: t,
		onChange: (e) => {
			let t = e.target.value.replace(/[\r\n]/g, "");
			n?.(t), e.target.style.height = "auto", e.target.style.height = `${e.target.scrollHeight}px`;
		},
		onKeyDown: (e) => {
			e.key === "Enter" && e.preventDefault();
		},
		placeholder: r,
		className: "resize-none overflow-hidden font-semibold text-f1-foreground placeholder-f1-foreground-tertiary sm:text-[39px] sm:leading-[49px] text-[34px] leading-[42px]",
		rows: 1
	})
});
//#endregion
export { t as Title };
