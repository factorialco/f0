import { ButtonInternal as e } from "../../../components/F0Button/internal.js";
import { Spinner as t } from "../../../ui/Spinner/index.js";
import { jsx as n } from "react/jsx-runtime";
//#region src/experimental/AiPromotionChat/components/CustomButton.tsx
var r = ({ action: r, onClose: i }) => {
	let a = () => {
		r.onClick(), i();
	};
	switch (r.buttonType) {
		case "gradient": return /* @__PURE__ */ n("button", {
			style: {
				color: "white",
				background: "linear-gradient(270deg, rgba(161, 173, 229, 0.7) 0%, rgba(229, 25, 67, 0.7) 50%, rgba(229, 86, 25, 0.7) 100%)",
				border: "none",
				borderRadius: "8px",
				padding: "12px 24px",
				fontSize: "14px",
				fontWeight: "500",
				cursor: "pointer",
				transition: "opacity 0.2s ease",
				height: "32px",
				display: "flex",
				alignItems: "center",
				justifyContent: "center"
			},
			onMouseEnter: (e) => {
				e.currentTarget.style.opacity = "0.9";
			},
			onMouseLeave: (e) => {
				e.currentTarget.style.opacity = "1";
			},
			onClick: a,
			children: r.isLoading ? /* @__PURE__ */ n(t, { size: "small" }) : r.label
		});
		case "internal": return /* @__PURE__ */ n(e, {
			label: r.label || "",
			onClick: a,
			variant: r.buttonVariant,
			icon: r.icon
		});
	}
};
//#endregion
export { r as CustomButton };
