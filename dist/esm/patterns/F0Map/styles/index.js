import e from "../../../_embedded/6uGKfb-O.js";
import t from "./f0-dark.js";
import n from "./f0-light.js";
import r from "maplibre-gl";
//#region src/patterns/F0Map/styles/index.ts
if (typeof window < "u" && typeof r.getRTLTextPluginStatus == "function" && r.getRTLTextPluginStatus() === "unavailable") try {
	r.setRTLTextPlugin(e, !0);
} catch {}
var i = {
	light: n,
	dark: t
};
//#endregion
export { i as f0MapStyles };
