import { jsx as t } from "react/jsx-runtime";
import { F0TagAlert as e } from "../F0TagAlert/index.js";
import { F0TagBalance as n } from "../F0TagBalance/index.js";
import { F0TagCompany as m } from "../F0TagCompany/index.js";
import { F0TagDot as i } from "../F0TagDot/index.js";
import { F0TagPerson as a } from "../F0TagPerson/index.js";
import { F0TagRaw as f } from "../F0TagRaw/index.js";
import { F0TagStatus as p } from "../F0TagStatus/index.js";
import { F0TagTeam as u } from "../F0TagTeam/index.js";
const T = (r) => {
  const { type: o } = r;
  if (o === "dot") return /* @__PURE__ */ t(i, { ...r });
  if (o === "person") return /* @__PURE__ */ t(a, { ...r });
  if (o === "team") return /* @__PURE__ */ t(u, { ...r });
  if (o === "company") return /* @__PURE__ */ t(m, { ...r });
  if (o === "alert") return /* @__PURE__ */ t(e, { ...r });
  if (o === "status") return /* @__PURE__ */ t(p, { ...r });
  if (o === "balance") return /* @__PURE__ */ t(n, { ...r });
  if (o === "raw") return /* @__PURE__ */ t(f, { ...r });
}, x = ({ tag: r }) => {
  const o = T(r);
  return o || "Invalid tag type";
};
export {
  x as Tag
};
