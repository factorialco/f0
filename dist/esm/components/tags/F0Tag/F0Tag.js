import { F0TagAlert as e } from "../F0TagAlert/index.js";
import { F0TagStatus as t } from "../F0TagStatus/index.js";
import { F0TagBalance as n } from "../F0TagBalance/index.js";
import { F0TagCompany as r } from "../F0TagCompany/index.js";
import { F0TagDot as i } from "../F0TagDot/index.js";
import { F0TagPerson as a } from "../F0TagPerson/index.js";
import { F0TagRaw as o } from "../F0TagRaw/index.js";
import { F0TagTeam as s } from "../F0TagTeam/index.js";
import { jsx as c } from "react/jsx-runtime";
//#region src/components/tags/F0Tag/F0Tag.tsx
var l = (l) => {
	let { type: u } = l;
	if (u === "dot") return /* @__PURE__ */ c(i, { ...l });
	if (u === "person") return /* @__PURE__ */ c(a, { ...l });
	if (u === "team") return /* @__PURE__ */ c(s, { ...l });
	if (u === "company") return /* @__PURE__ */ c(r, { ...l });
	if (u === "alert") return /* @__PURE__ */ c(e, { ...l });
	if (u === "status") return /* @__PURE__ */ c(t, { ...l });
	if (u === "balance") return /* @__PURE__ */ c(n, { ...l });
	if (u === "raw") return /* @__PURE__ */ c(o, { ...l });
}, u = ({ tag: e }) => l(e) || "Invalid tag type";
//#endregion
export { u as Tag };
