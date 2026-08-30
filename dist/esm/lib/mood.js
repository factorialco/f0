import e from "../icons/app/FaceNegative.js";
import t from "../icons/app/FaceNeutral.js";
import n from "../icons/app/FacePositive.js";
import r from "../icons/app/FaceSuperNegative.js";
import i from "../icons/app/FaceSuperPositive.js";
//#region src/lib/mood.ts
var a = [
	"superNegative",
	"negative",
	"neutral",
	"positive",
	"superPositive"
], o = {
	superNegative: r,
	negative: e,
	neutral: t,
	positive: n,
	superPositive: i
}, s = {
	superNegative: "mood-super-negative",
	negative: "mood-negative",
	neutral: "mood-neutral",
	positive: "mood-positive",
	superPositive: "mood-super-positive"
};
//#endregion
export { o as pulseIcon, s as pulseIconColor, a as pulses };
