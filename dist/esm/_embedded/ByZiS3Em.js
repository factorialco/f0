import './D1pfxmHv.css';/* empty css         */
import e from "./BmFjcMV4.js";
import { presetStrokeColors as t, presetStrokeWidth as n } from "./CHwnzGs7.js";
import * as r from "react";
//#region ../../node_modules/.pnpm/@atlaskit+pragmatic-drag-and-drop-react-drop-indicator@3.2.11_@types+react@18.3.18_react@18.3.1/node_modules/@atlaskit/pragmatic-drag-and-drop-react-drop-indicator/dist/esm/internal/line.js
var i = {
	top: "horizontal",
	bottom: "horizontal",
	left: "vertical",
	right: "vertical"
}, a = { root: "_1e0c1ule _kqswstnw _1pbykb7n _lcxvglyw _bfhkys7w _rfx31ssb _3l8810ly _kzdanqa1 _15m6ys7w _cfu11ld9 _1kt9b3bt _1cs8stnw _13y0usvi _1mp4vjfa _kfgtvjfa" }, o = {
	horizontal: "_4t3i10ly _1e02fghn _rjxpidpf _z5wtuj5p",
	vertical: "_1bsb10ly _154ifghn _94n5idpf _1aukuj5p"
}, s = {
	top: "_154ihv0e _1auk70hn",
	right: "_1xi2hv0e _ooun70hn",
	bottom: "_94n5hv0e _19wo70hn",
	left: "_1ltvhv0e _qnec70hn"
}, c = {
	terminal: function(e) {
		return `calc(var(--terminal-radius) + ${e.indent})`;
	},
	"terminal-no-bleed": function(e) {
		return `calc(var(--terminal-diameter) + ${e.indent})`;
	},
	"no-terminal": function(e) {
		return e.indent;
	}
};
function l(l) {
	var u = l.edge, d = l.gap, f = d === void 0 ? "0px" : d, p = l.indent, m = p === void 0 ? "0px" : p, h = l.strokeColor, g = h === void 0 ? t.default : h, _ = l.strokeWidth, v = _ === void 0 ? n : _, y = l.type, b = y === void 0 ? "terminal" : y, x = i[u];
	return /*#__PURE__*/ r.createElement("div", {
		style: {
			"--stroke-color": g,
			"--stroke-width": v,
			"--main-axis-offset": `calc(-0.5 * (${f} + var(--stroke-width)))`,
			"--line-main-axis-start": c[b]({ indent: m }),
			"--terminal-display": b === "no-terminal" ? "none" : "block",
			"--terminal-diameter": "calc(var(--stroke-width) * 4)",
			"--terminal-radius": "calc(var(--terminal-diameter) / 2)",
			"--terminal-main-axis-start": "calc(-1 * var(--terminal-diameter))",
			"--terminal-cross-axis-offset": "calc(calc(var(--stroke-width) - var(--terminal-diameter)) / 2)"
		},
		className: e([
			a.root,
			o[x],
			s[u]
		])
	});
}
//#endregion
export { l as Line, l as default };
