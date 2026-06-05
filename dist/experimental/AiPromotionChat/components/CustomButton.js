import { jsx as r } from "react/jsx-runtime";
import { ButtonInternal as i } from "../../../components/F0Button/internal.js";
import { Spinner as a } from "../../../ui/Spinner/index.js";
const c = ({ action: e, onClose: o }) => {
  const n = () => {
    e.onClick(), o();
  };
  switch (e.buttonType) {
    case "gradient":
      return /* @__PURE__ */ r(
        "button",
        {
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
          onMouseEnter: (t) => {
            t.currentTarget.style.opacity = "0.9";
          },
          onMouseLeave: (t) => {
            t.currentTarget.style.opacity = "1";
          },
          onClick: n,
          children: e.isLoading ? /* @__PURE__ */ r(a, { size: "small" }) : e.label
        }
      );
    case "internal":
      return /* @__PURE__ */ r(
        i,
        {
          label: e.label || "",
          onClick: n,
          variant: e.buttonVariant,
          icon: e.icon
        }
      );
  }
};
export {
  c as CustomButton
};
