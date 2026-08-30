import { cn as e, focusRing as t } from "../../../../../lib/utils.js";
import { F0Icon as n } from "../../../../F0Icon/index.js";
import r from "../../../../../icons/app/Alert.js";
import i from "../../../../../icons/app/Check.js";
import a from "../../../../../icons/app/Cross.js";
import o from "../../../../../icons/app/CrossedCircle.js";
import s from "../../../../../icons/app/Link.js";
import { useI18n as c } from "../../../../../lib/providers/i18n/i18n-provider.js";
import { ButtonInternal as l } from "../../../../F0Button/internal.js";
import { F0Button as u } from "../../../../F0Button/F0Button.js";
import { Badge as d } from "../../../../../ui/IconBadge/index.js";
import { F0ButtonToggle as f } from "../../../../F0ButtonToggle/F0ButtonToggle.js";
import { useState as p } from "react";
import { jsx as m, jsxs as h } from "react/jsx-runtime";
import { AnimatePresence as g, motion as _ } from "motion/react";
import * as v from "@radix-ui/react-popover";
//#region src/components/RichText/internal/Toolbar/LinkPopup/index.tsx
var y = ({ editor: y, disabled: b }) => {
	let x = c(), [S, C] = p(!1), [w, T] = p(y.getAttributes("link").href || ""), E = (e) => {
		e && e.preventDefault(), !b && C(!S);
	}, D = (e) => {
		let t = e.trim();
		return /^(https?:\/\/)([\w-]+(\.[\w-]+)+)(:[0-9]{1,5})?(\/.*)?$/i.test(t);
	}, O = () => {
		let e = w.trim();
		e && D(e) && (y.chain().focus().extendMarkRange("link").setLink({ href: e }).run(), C(!1));
	}, k = () => {
		T(""), navigator.clipboard.readText().then((e) => {
			T(e);
		});
	}, A = () => {
		y.chain().focus().unsetLink().run(), T("");
	}, j = () => {
		C(!1);
	};
	return /* @__PURE__ */ h(v.Root, {
		open: S,
		onOpenChange: (e) => {
			C(e), e && T(y.getAttributes("link").href || "");
		},
		children: [/* @__PURE__ */ m(v.Trigger, {
			asChild: !0,
			children: /* @__PURE__ */ m(f, {
				selected: y.isActive("link") || S,
				label: x.richTextEditor.link,
				icon: s,
				disabled: b,
				onSelectedChange: () => E()
			})
		}), /* @__PURE__ */ m(v.Portal, {
			container: document.body,
			children: /* @__PURE__ */ m(v.Content, {
				side: "top",
				align: "start",
				sideOffset: 10,
				collisionPadding: 10,
				alignOffset: -5,
				style: { zIndex: 9999 },
				children: /* @__PURE__ */ m(g, { children: S && /* @__PURE__ */ m(_.div, {
					initial: {
						opacity: 0,
						y: 10,
						scale: .95
					},
					animate: {
						opacity: 1,
						y: 0,
						scale: 1
					},
					exit: {
						opacity: 0,
						y: 10,
						scale: .95
					},
					transition: { duration: .2 },
					"aria-label": "Link popup",
					children: /* @__PURE__ */ h("div", {
						className: "dark z-50 flex w-max flex-row gap-1 rounded-lg border border-solid border-f1-border bg-f1-background p-1 drop-shadow-sm",
						children: [
							/* @__PURE__ */ m(l, {
								compact: !0,
								variant: "ghost",
								size: "md",
								onClick: (e) => {
									e.preventDefault(), j();
								},
								className: "[&>button]:aspect-square [&>button]:px-0",
								label: "Close link popup",
								hideLabel: !0,
								icon: a
							}),
							/* @__PURE__ */ h("div", {
								className: e("flex w-80 appearance-none items-center gap-2 rounded border-0 bg-f1-background py-1 pl-2 pr-1 ring-1 ring-inset ring-f1-border transition-all placeholder:text-f1-foreground-tertiary", y.isActive("link") ? "cursor-auto" : t("focus:ring-f1-border-hover") + "hover:ring-f1-border-hover"),
								children: [
									/* @__PURE__ */ m("div", {
										className: e("flex items-center justify-center", w.length > 0 ? "w-6" : "w-4"),
										children: /* @__PURE__ */ m(d, {
											icon: w.length > 0 ? D(w) ? i : r : s,
											type: w ? D(w) ? "positive" : "warning" : "neutral",
											size: w.length > 0 ? "sm" : "lg"
										})
									}),
									/* @__PURE__ */ m("input", {
										className: "w-full shrink text-f1-foreground disabled:cursor-not-allowed",
										type: "text",
										placeholder: x.richTextEditor.linkPlaceholder,
										value: w,
										onChange: (e) => T(e.target.value),
										onKeyDown: (e) => {
											e.key === "Enter" && O();
										}
									}),
									y.isActive("link") && /* @__PURE__ */ m(n, {
										size: "md",
										icon: o,
										className: "cursor-pointer text-f1-foreground-tertiary hover:text-f1-foreground-secondary",
										onClick: A
									}),
									/* @__PURE__ */ m(u, {
										variant: "outline",
										type: "button",
										size: "sm",
										onClick: k,
										label: x.actions.paste
									})
								]
							}),
							/* @__PURE__ */ m(u, {
								variant: "default",
								type: "button",
								size: "sm",
								onClick: (e) => {
									e.preventDefault(), O();
								},
								label: x.actions.save
							})
						]
					})
				}) })
			})
		})]
	});
};
//#endregion
export { y as LinkPopup };
