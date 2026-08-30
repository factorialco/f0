import { F0Box as e } from "../../../F0Box.js";
import { jsx as t, jsxs as n } from "react/jsx-runtime";
//#region src/kits/surveys/SurveySampleQuestion/index.tsx
function r(r) {
	return /* @__PURE__ */ n(e, {
		display: "flex",
		flexDirection: "column",
		gap: "lg",
		padding: "lg",
		background: "secondary",
		borderRadius: "lg",
		children: [/* @__PURE__ */ t("p", {
			className: "m-0 text-sm font-semibold text-f1-foreground",
			children: r.question
		}), r.type === "rating" ? /* @__PURE__ */ t(i, {
			steps: r.steps ?? 5,
			minLabel: r.minLabel,
			maxLabel: r.maxLabel
		}) : /* @__PURE__ */ t(a, { options: r.options })]
	});
}
function i({ steps: r, minLabel: i, maxLabel: a }) {
	return /* @__PURE__ */ n(e, {
		display: "flex",
		flexDirection: "column",
		gap: "sm",
		children: [/* @__PURE__ */ t(e, {
			display: "grid",
			columns: String(r),
			gap: "sm",
			children: Array.from({ length: r }).map((n, r) => /* @__PURE__ */ t(e, {
				height: "8",
				border: "default",
				borderRadius: "md",
				background: "primary"
			}, r))
		}), (i || a) && /* @__PURE__ */ n(e, {
			display: "flex",
			justifyContent: "between",
			alignItems: "center",
			children: [/* @__PURE__ */ t("span", {
				className: "text-xs text-f1-foreground-secondary",
				children: i
			}), /* @__PURE__ */ t("span", {
				className: "text-xs text-f1-foreground-secondary",
				children: a
			})]
		})]
	});
}
function a({ options: r }) {
	return /* @__PURE__ */ t(e, {
		display: "flex",
		flexDirection: "column",
		gap: "md",
		children: r.map((r) => /* @__PURE__ */ n(e, {
			display: "flex",
			alignItems: "center",
			gap: "md",
			paddingX: "md",
			paddingY: "sm",
			border: "default",
			borderRadius: "md",
			background: "primary",
			children: [/* @__PURE__ */ t(e, {
				shrink: !1,
				width: "4",
				height: "4",
				border: "thick",
				borderRadius: "full"
			}), /* @__PURE__ */ t("span", {
				className: "text-sm text-f1-foreground-secondary",
				children: r
			})]
		}, r))
	});
}
//#endregion
export { r as SurveySampleQuestion };
