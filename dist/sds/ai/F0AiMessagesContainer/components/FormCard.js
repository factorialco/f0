import { jsx as u } from "react/jsx-runtime";
import { useRef as _, useEffect as E } from "react";
import { secondsToFields as B } from "../../../../components/F0DurationInput/utils.js";
import { DetailsItemsList as P } from "../../../../experimental/Lists/DetailsItemsList/index.js";
import { useAiChat as V } from "../../F0AiChat/providers/AiChatStateProvider.js";
import { useFormCardValueFormatter as H } from "../../F0AiChat/providers/FormCardValueFormatterProvider.js";
import { F0CanvasCard as R } from "../../canvas/F0CanvasCard/F0CanvasCard.js";
const F = 7, U = 625, C = /* @__PURE__ */ new Set();
function W(t) {
  return typeof DOMParser < "u" ? new DOMParser().parseFromString(t, "text/html").body.textContent?.replace(/\s+/g, " ").trim() ?? "" : t.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}
function k(t) {
  return t && t.charAt(0).toUpperCase() + t.slice(1);
}
function z(t) {
  const { days: n, hours: e, minutes: r, seconds: s } = B(t), o = [];
  return n > 0 && o.push(`${n}d`), e > 0 && o.push(`${e}h`), r > 0 && o.push(`${r}m`), (s > 0 || o.length === 0) && o.push(`${s}s`), o.join(" ");
}
function S(t) {
  if (t instanceof Date) return !0;
  if (typeof t != "string") return !1;
  const n = new Date(t);
  return !Number.isNaN(n.getTime());
}
function w(t) {
  return (t instanceof Date ? t : new Date(t)).toLocaleDateString();
}
function D(t) {
  return t.type === "item" ? t.text : "";
}
function A(t, n) {
  if (t == null || t === "") return { type: "item", text: "—" };
  if (n === "duration" && typeof t == "number")
    return { type: "item", text: z(t) };
  if (n === "richtext" && typeof t == "object" && t !== null && "value" in t) {
    const e = t.value;
    return { type: "item", text: (e ? W(e) : "") || "—" };
  }
  if (n === "daterange" && typeof t == "object" && t !== null && "from" in t && "to" in t) {
    const { from: e, to: r } = t, s = S(e) ? w(e) : String(e), o = S(r) ? w(r) : String(r);
    return { type: "item", text: `${s} – ${o}` };
  }
  if (t instanceof Date)
    return { type: "item", text: t.toLocaleDateString() };
  if (typeof t == "boolean")
    return { type: "item", text: t ? "Yes" : "No" };
  if (Array.isArray(t))
    return { type: "item", text: t.map((r) => {
      const s = A(r);
      return Array.isArray(s) ? s.map(D).join(", ") : D(s);
    }).filter(Boolean).join(", ") || "—" };
  if (typeof t == "object" && t !== null) {
    const e = t;
    return typeof e.label == "string" ? { type: "item", text: e.label } : typeof e.name == "string" ? { type: "item", text: e.name } : typeof e.text == "string" ? { type: "item", text: e.text } : { type: "item", text: JSON.stringify(t) };
  }
  return { type: "item", text: k(String(t)) };
}
function J({
  formName: t,
  formDescription: n,
  module: e,
  cardTitle: r,
  cardDescription: s,
  fieldDescriptions: o,
  formValues: m,
  valueFormatter: j
}) {
  const { canvasContent: l, openCanvas: L, closeCanvas: O } = V(), T = H(t), N = j ?? T, y = _(() => {
  }), d = r ?? t, x = s ?? n ?? "", f = l?.type === "form" && l.formName === t, p = () => L({
    type: "form",
    title: d,
    description: x,
    formName: t,
    formDescription: n,
    formModule: e
  });
  y.current = p, E(() => {
    typeof window > "u" || window.innerWidth < U || C.has(t) || (C.add(t), y.current());
  }, [t]);
  const h = o && m ? Object.entries(o).map(([i, c]) => {
    const a = m[i], b = N?.(i, a, {
      fieldType: c.fieldType,
      customFieldName: c.customFieldName
    });
    if (!b && c.fieldType === "custom" && typeof a == "object" && a !== null)
      return null;
    const $ = b ?? A(a, c.fieldType), M = ["richtext", "textarea"];
    return {
      label: c.label,
      content: $,
      verticalLayout: M.includes(c.fieldType ?? "")
    };
  }).filter((i) => {
    if (!i) return !1;
    const c = Array.isArray(i.content) ? i.content[0] : i.content;
    return !(c?.type === "item" && c.text === "—");
  }) : [], g = h.slice(0, F), I = h.length > F;
  return /* @__PURE__ */ u(
    R,
    {
      avatar: e ? { type: "module", module: e } : void 0,
      title: d,
      description: x,
      isActive: f,
      action: {
        type: "open",
        onOpen: p,
        onClose: O,
        showButton: f
      },
      children: g.length > 0 && !f && /* @__PURE__ */ u("div", { className: "-mx-3 flex w-full flex-col overflow-hidden pb-1", children: /* @__PURE__ */ u(
        P,
        {
          details: g.map((i) => ({
            title: i.label,
            content: i.content,
            ...i.verticalLayout && { verticalLayout: !0 }
          })),
          showSeeMore: I,
          onClickSeeMore: p,
          tableView: !0
        }
      ) })
    }
  );
}
J.displayName = "FormCard";
export {
  J as FormCard
};
