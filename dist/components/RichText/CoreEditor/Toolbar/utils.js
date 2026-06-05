import i from "../../../../icons/app/AlignTextCenter.js";
import r from "../../../../icons/app/AlignTextJustify.js";
import e from "../../../../icons/app/AlignTextLeft.js";
import n from "../../../../icons/app/AlignTextRight.js";
import "../../../../icons/app/Menu.js";
const s = (t) => t.isActive({ textAlign: "left" }) ? "Left" : t.isActive({ textAlign: "center" }) ? "Center" : t.isActive({ textAlign: "right" }) ? "Right" : t.isActive({ textAlign: "justify" }) ? "Justify" : "Left", u = (t) => t.isActive({ textAlign: "left" }) ? e : t.isActive({ textAlign: "center" }) ? i : t.isActive({ textAlign: "right" }) ? n : t.isActive({ textAlign: "justify" }) ? r : e;
export {
  u as getTextAlignIcon,
  s as getTextAlignLabel
};
