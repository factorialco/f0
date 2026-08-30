import { cn as e, focusRing as t } from "../../lib/utils.js";
import { F0Icon as n } from "../F0Icon/index.js";
import ee from "../../icons/app/CrossedCircle.js";
import { F0Avatar as te } from "../avatars/F0Avatar/F0Avatar.js";
import { Spinner as ne } from "../../ui/Spinner/index.js";
import { F0ButtonToggle as re } from "../F0ButtonToggle/F0ButtonToggle.js";
import { AppendTag as ie } from "./AppendTag.js";
import { InputMessages as ae } from "./components/InputMessages.js";
import { Label as oe } from "./components/Label.js";
import { cloneElement as se, forwardRef as r, useEffect as i, useId as ce, useMemo as le, useRef as a, useState as o } from "react";
import { cva as s } from "cva";
import { jsx as c, jsxs as l } from "react/jsx-runtime";
import { AnimatePresence as u, motion as ue } from "motion/react";
//#region src/components/F0InputField/F0InputField.tsx
var d = ["sm", "md"], f = "", de = (e) => e === f || e ? e.toString().length === 0 : !0, fe = (e) => e ? e.toString().length : 0, p = s({
	base: "",
	variants: { size: {
		sm: "py-1",
		md: "py-2"
	} },
	defaultVariants: { size: "md" }
}), pe = s({
	base: "",
	variants: {
		canGrow: {
			true: "flex-1",
			false: "flex-none"
		},
		size: {
			sm: "rounded",
			md: "rounded-md"
		}
	},
	compoundVariants: [
		{
			size: "sm",
			canGrow: !0,
			class: "min-h-[32px]"
		},
		{
			size: "md",
			canGrow: !0,
			class: "min-h-[40px]"
		},
		{
			size: "sm",
			canGrow: !1,
			class: "h-[32px]"
		},
		{
			size: "md",
			canGrow: !1,
			class: "h-[40px]"
		}
	],
	defaultVariants: {
		size: "md",
		canGrow: !1
	}
}), me = s({
	base: "",
	variants: { size: {
		sm: "gap-1",
		md: "gap-2"
	} }
}), he = s({
	base: "focus-within:ring-2 focus-within:ring-offset-0 focus-within:transition-none active:transition-none",
	variants: {
		status: {
			default: "focus-within:border-f1-border-selected-bold focus-within:ring-f1-background-selected",
			warning: "border-f1-border-warning-bold focus-within:border-f1-border-warning-bold focus-within:ring-f1-border-warning",
			info: "border-f1-border-info-bold focus-within:border-f1-border-info-bold focus-within:ring-f1-border-info",
			error: "border-f1-border-critical-bold focus-within:border-f1-border-critical-bold focus-within:ring-f1-border-critical bg-f1-background-critical bg-opacity-10"
		},
		disabled: {
			true: "",
			false: ""
		}
	},
	compoundVariants: [
		{
			disabled: !1,
			status: "default",
			class: "hover:border-f1-border-selected-bold"
		},
		{
			disabled: !1,
			status: "warning",
			class: "hover:border-f1-border-warning-bold"
		},
		{
			disabled: !1,
			status: "info",
			class: "hover:border-f1-border-info-bold"
		},
		{
			disabled: !1,
			status: "error",
			class: "hover:border-f1-border-critical-bold"
		}
	]
}), m = r(({ children: r, disabled: s, readonly: d, label: m, labelIcon: ge, hideLabel: h = !1, className: _e, required: ve, error: g, status: _, hint: v, size: y = "sm", icon: b, canGrow: x = !1, value: S, loading: C = !1, loadingIndicator: w, placeholder: T, clearable: E = !1, isEmpty: D = de, emptyValue: O = f, lengthProvider: k = fe, maxLength: A, hideMaxLength: j = !1, append: M, hidePlaceholder: ye = !1, onClickPlaceholder: N, onClickChildren: P, onClickContent: be, name: xe, role: F, appendTag: I, avatar: L, "aria-controls": Se, "aria-expanded": Ce, "aria-activedescendant": we, "aria-autocomplete": Te, buttonToggle: R, transparent: z, ...B }, Ee) => {
	let De = ce(), V = B.id ?? De, H = s || d, [U, W] = o(S);
	v && (_ = {
		type: "default",
		message: v
	}), g && (_ = {
		type: "error",
		message: typeof g == "string" ? g : void 0
	}), m || console.error("F0InputField: label is required for accessibility reasons. If you don't want to show a label, set hideLabel to true."), i(() => {
		W(A && S && k(S) > A ? S?.substring(0, A) : S);
	}, [
		S,
		k,
		A
	]);
	let G = (e) => {
		let t = (typeof e == "string" ? e : e.target.value) ?? O;
		if (A && k(t) > A) {
			if (typeof t == "string") t = t.substring(0, A);
			else return;
		}
		W(t), B.onChange?.(t);
	}, Oe = () => {
		G(O), B.onClear?.();
	}, K = () => {
		s || be?.();
	}, ke = () => {
		s || P?.();
	}, q = () => {
		s || N?.();
	}, [J, Y] = o(!1), Ae = (e) => {
		e.animationName === "autofill" && Y(!0);
	}, X = a(null), Z = a(null), Q = le(() => B.inputRef ?? Z, [B.inputRef, Z]);
	i(() => (J && !X.current && (X.current = setInterval(() => {
		let e = typeof Q == "object" && Q?.current ? Q.current : null;
		e && (e.matches(":-webkit-autofill") || e.matches(":autofill") || (Y(!1), X.current &&= (clearInterval(X.current), null)));
	}, 100)), () => {
		X.current &&= (clearInterval(X.current), null);
	}), [J, Q]);
	let $ = M || I || R;
	return /* @__PURE__ */ l("div", {
		className: e("flex flex-col gap-2", "pointer-events-none", s && "cursor-not-allowed", z && "bg-transparent h-full w-full", _e),
		ref: Ee,
		children: [
			(!h && m || A && !j) && /* @__PURE__ */ c("div", {
				className: e("flex max-w-full items-center", me({ size: y })),
				children: /* @__PURE__ */ l("div", {
					className: e("flex min-w-0 flex-1 flex-row gap-4"),
					"data-testid": "input-field-top",
					children: [!h && m && /* @__PURE__ */ c(oe, {
						label: m,
						required: ve,
						htmlFor: V,
						icon: ge,
						className: "min-w-0 flex-1",
						disabled: s
					}), A && !j && !H && /* @__PURE__ */ l("div", {
						className: "text-right text-f1-foreground-secondary",
						children: [
							k(U),
							"/",
							A
						]
					})]
				})
			}),
			/* @__PURE__ */ c("div", {
				className: e("relative h-fit transition-all", !H && !s && "hover:border-f1-border-hover", !z && [
					"border-[1px] border-solid border-f1-border bg-f1-background",
					"group focus-within:border-f1-border-hover focus-within:ring-1 focus-within:ring-f1-border-hover",
					"focus-within:outline-none focus-within:ring-1 focus-within:ring-offset-1",
					he({
						status: _?.type ?? "default",
						disabled: s || d
					}),
					pe({
						size: y,
						canGrow: x
					})
				], "active-within:border-f1-border active-within:ring-1 active-within:ring-f1-border-hover", d && "border-f1-border-secondary bg-f1-background-secondary", s && "cursor-not-allowed bg-f1-background-tertiary", z && "h-full w-full "),
				"data-testid": "input-field-wrapper",
				children: /* @__PURE__ */ l("div", {
					className: "pointer-events-auto relative flex h-full w-full min-w-0 flex-1",
					onClick: K,
					children: [
						(b || L) && /* @__PURE__ */ l("div", {
							"data-slot": "icon",
							className: e("pointer-events-none absolute left-2 top-[5px] my-auto h-5 w-5 shrink-0", y === "md" && "left-3 top-[9px]"),
							children: [b && /* @__PURE__ */ c(n, {
								onClick: K,
								icon: b,
								color: "default"
							}), L && /* @__PURE__ */ c(te, {
								avatar: L,
								size: "xs"
							})]
						}),
						/* @__PURE__ */ c("div", {
							onClick: ke,
							className: "w-full min-w-0 flex-1",
							children: se(r, {
								onChange: G,
								onBlur: B.onBlur,
								onFocus: B.onFocus,
								onAnimationStart: Ae,
								disabled: H,
								readOnly: d,
								role: F,
								ref: Q,
								"aria-controls": Se,
								"aria-expanded": F === "combobox" ? Ce : void 0,
								"aria-activedescendant": we,
								"aria-autocomplete": Te,
								id: V,
								value: U ?? "",
								"aria-label": m || T || "no-label",
								"aria-busy": C,
								"aria-disabled": H,
								name: xe,
								className: e("h-full w-full min-w-0 px-3 text-f1-foreground", "[&::-webkit-search-cancel-button]:hidden", (b || L) && "pl-8", (b || L) && y === "md" && "pl-9", s && "cursor-not-allowed", r.props.className, p({ size: y }))
							})
						}),
						/* @__PURE__ */ c("div", {
							"data-slot": "placeholder",
							className: e("pointer-events-none absolute left-0 top-[1px] z-10 flex flex-1 justify-start px-3 text-f1-foreground-secondary transition-opacity line-clamp-1", !x && "bottom-0", x && "items-start", (b || L) && "pl-8", (b || L) && y === "md" && "pl-9", p({ size: y }), T && !ye && D(U) && !J ? "opacity-100" : "opacity-0"),
							onClick: q,
							"aria-hidden": "true",
							title: T,
							children: T
						}),
						(E || $ || C) && /* @__PURE__ */ l("div", {
							className: e("flex h-fit min-w-6 items-center gap-1.5 self-center pr-[3px]", y === "md" && "pr-[7px]", "relative"),
							children: [
								E && !H && /* @__PURE__ */ c(u, {
									initial: !D(U),
									children: !D(U) && /* @__PURE__ */ c(ue.button, {
										initial: { opacity: 0 },
										animate: { opacity: 1 },
										exit: { opacity: 0 },
										transition: { duration: .2 },
										className: e("flex h-5 w-5 shrink-0 cursor-pointer items-center justify-center rounded-full p-0", t()),
										"aria-label": "Clear",
										type: "button",
										tabIndex: 0,
										"data-testid": "clear-button",
										onClick: (e) => {
											e.stopPropagation(), Oe();
										},
										children: /* @__PURE__ */ c(n, {
											icon: ee,
											color: "default",
											size: "md"
										})
									})
								}),
								$ && /* @__PURE__ */ l("div", {
									className: "flex min-h-6 min-w-6 items-center justify-center self-center",
									children: [
										M,
										I && /* @__PURE__ */ c(ie, { text: I }),
										R && /* @__PURE__ */ c(re, {
											label: R.label,
											icon: R.icon,
											selected: R.selected,
											disabled: R.disabled,
											onSelectedChange: R.onChange,
											size: "sm"
										})
									]
								}),
								/* @__PURE__ */ c(u, { children: C && /* @__PURE__ */ c("div", {
									className: e("pointer-events-none flex h-6 w-6 items-center justify-center", w?.asOverlay && e("absolute bottom-0 right-2 top-0", "bg-gradient-to-l from-[#FFFFFF] from-0% dark:from-[#192231]", "via-[#FFFFFF] via-60% dark:via-[#192231]", "to-transparent to-100%", y === "md" && "right-3"), p({ size: y })),
									style: { right: typeof w?.offset == "number" ? w?.offset + (y === "md" ? 6 : 0) : void 0 },
									children: /* @__PURE__ */ c(ne, {
										size: "small",
										className: "mt-[1px]"
									})
								}) })
							]
						})
					]
				})
			}),
			/* @__PURE__ */ c(ae, { status: _ })
		]
	});
});
m.displayName = "F0InputField";
//#endregion
export { m as F0InputField, d as INPUTFIELD_SIZES };
