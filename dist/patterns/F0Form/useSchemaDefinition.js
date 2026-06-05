import { useMemo as y } from "react";
import { unwrapToZodObject as x, getF0Config as D, inferFieldType as b } from "./f0Schema.js";
import { extractDateConstraints as c } from "./fields/date/schema.js";
import { extractNumberConstraints as w } from "./fields/number/schema.js";
import { isFieldRequired as F } from "./fields/schema.js";
import { inferInputType as h } from "./fields/text/schema.js";
import { extractTextareaConstraints as C } from "./fields/textarea/schema.js";
function I(l, o, e, a) {
  const r = {
    id: l,
    label: e.label,
    placeholder: e.placeholder,
    helpText: e.helpText,
    status: e.status,
    disabled: e.disabled,
    resetOnDisable: e.resetOnDisable,
    alert: e.alert,
    customFieldName: "customFieldName" in e ? e.customFieldName : void 0,
    validation: o
  }, n = !F(o, a);
  switch (a) {
    case "text": {
      const s = "inputType" in e && e.inputType ? e.inputType : h(o);
      return {
        ...r,
        type: "text",
        inputType: s,
        clearable: n,
        renderIf: e.renderIf
      };
    }
    case "money":
    case "percentage":
    case "number": {
      const { min: s, max: d, isInteger: t } = w(o), i = a === "percentage" ? "%" : a === "money" && "currency" in e ? e.currency : void 0;
      return {
        ...r,
        type: "number",
        step: "step" in e ? e.step : void 0,
        min: s,
        max: d,
        maxDecimals: t ? 0 : void 0,
        units: i,
        locale: "locale" in e ? e.locale : void 0,
        clearable: n,
        renderIf: e.renderIf
      };
    }
    case "duration":
      return {
        ...r,
        type: "duration",
        units: "units" in e ? e.units : void 0,
        fields: "fields" in e ? e.fields : void 0,
        readonly: "readonly" in e ? e.readonly : void 0,
        size: "size" in e ? e.size : void 0,
        renderIf: e.renderIf
      };
    case "textarea": {
      const { maxLength: s } = C(o);
      return {
        ...r,
        type: "textarea",
        rows: "rows" in e ? e.rows : void 0,
        maxHeight: "maxHeight" in e ? e.maxHeight : void 0,
        maxLength: s,
        clearable: n,
        renderIf: e.renderIf
      };
    }
    case "select": {
      const s = "source" in e && e.source;
      return {
        ...r,
        type: "select",
        // Only include options if not using source
        ...s ? {
          source: e.source,
          mapOptions: "mapOptions" in e ? e.mapOptions : void 0
        } : {
          options: "options" in e ? e.options : []
        },
        multiple: "multiple" in e ? e.multiple : void 0,
        clearable: n,
        showSearchBox: "showSearchBox" in e ? e.showSearchBox : void 0,
        searchBoxPlaceholder: "searchBoxPlaceholder" in e ? e.searchBoxPlaceholder : void 0,
        renderIf: e.renderIf
      };
    }
    case "checkbox":
      return {
        ...r,
        type: "checkbox",
        moreInfoLink: "moreInfoLink" in e ? e.moreInfoLink : void 0,
        renderIf: e.renderIf
      };
    case "switch":
      return {
        ...r,
        type: "switch",
        moreInfoLink: "moreInfoLink" in e ? e.moreInfoLink : void 0,
        grouped: "grouped" in e ? e.grouped : void 0,
        renderIf: e.renderIf
      };
    case "date": {
      const s = c(o), d = "minDate" in e ? e.minDate : void 0, t = "maxDate" in e ? e.maxDate : void 0;
      return {
        ...r,
        type: "date",
        granularities: "granularities" in e ? e.granularities : void 0,
        minDate: d ?? s.minDate,
        maxDate: t ?? s.maxDate,
        presets: "presets" in e ? e.presets : void 0,
        clearable: n,
        renderIf: e.renderIf
      };
    }
    case "time": {
      const s = c(o), d = "minDate" in e ? e.minDate : void 0, t = "maxDate" in e ? e.maxDate : void 0;
      return {
        ...r,
        type: "time",
        minDate: d ?? s.minDate,
        maxDate: t ?? s.maxDate,
        clearable: n,
        renderIf: e.renderIf
      };
    }
    case "datetime": {
      const s = c(o), d = "minDate" in e ? e.minDate : void 0, t = "maxDate" in e ? e.maxDate : void 0;
      return {
        ...r,
        type: "datetime",
        minDate: d ?? s.minDate,
        maxDate: t ?? s.maxDate,
        clearable: n,
        renderIf: e.renderIf
      };
    }
    case "daterange":
      return {
        ...r,
        type: "daterange",
        fromLabel: "fromLabel" in e ? e.fromLabel : void 0,
        toLabel: "toLabel" in e ? e.toLabel : void 0,
        granularities: "granularities" in e ? e.granularities : void 0,
        presets: "presets" in e ? e.presets : void 0,
        clearable: n,
        renderIf: e.renderIf
      };
    case "richtext":
      return {
        ...r,
        type: "richtext",
        maxCharacters: "maxCharacters" in e ? e.maxCharacters : void 0,
        mentionsConfig: "mentionsConfig" in e ? e.mentionsConfig : void 0,
        height: "height" in e ? e.height : void 0,
        plainHtmlMode: "plainHtmlMode" in e ? e.plainHtmlMode : void 0,
        renderIf: e.renderIf
      };
    case "file":
      return {
        ...r,
        type: "file",
        accept: "accept" in e ? e.accept : void 0,
        maxSizeMB: "maxSizeMB" in e ? e.maxSizeMB : void 0,
        multiple: "multiple" in e ? e.multiple : void 0,
        maxFiles: "maxFiles" in e ? e.maxFiles : void 0,
        description: "description" in e ? e.description : void 0,
        useUpload: "useUpload" in e ? e.useUpload : void 0,
        renderIf: e.renderIf
      };
    case "cardSelect":
      return {
        ...r,
        type: "cardSelect",
        options: "options" in e ? e.options : [],
        hideLabel: "hideLabel" in e ? e.hideLabel : void 0,
        grouped: "grouped" in e ? e.grouped : void 0,
        renderIf: e.renderIf
      };
    case "custom":
      return {
        ...r,
        type: "custom",
        render: "render" in e ? e.render : void 0,
        fieldConfig: "fieldConfig" in e ? e.fieldConfig : void 0,
        renderIf: e.renderIf
      };
    default:
      return {
        ...r,
        type: "text",
        inputType: h(o),
        renderIf: e.renderIf
      };
  }
}
function m(l) {
  const o = [], e = /* @__PURE__ */ new Set();
  for (let a = 0; a < l.length; a++) {
    if (e.has(a)) continue;
    const r = l[a], n = r.config.row;
    if (n) {
      const s = [];
      for (let t = a; t < l.length; t++)
        l[t].config.row === n && (s.push(l[t]), e.add(t));
      s.sort((t, i) => t.position - i.position);
      const d = {
        type: "row",
        fields: s.map(
          (t) => I(t.id, t.schema, t.config, t.fieldType)
        )
      };
      o.push(d);
    } else {
      e.add(a);
      const s = I(
        r.id,
        r.schema,
        r.config,
        r.fieldType
      );
      o.push({ type: "field", field: s });
    }
  }
  return o;
}
function v(l) {
  const o = l.shape, e = [], a = Object.entries(o);
  for (let r = 0; r < a.length; r++) {
    const [n, s] = a[r], d = D(s);
    if (d) {
      const t = b(s, d);
      e.push({
        id: n,
        schema: s,
        config: d,
        fieldType: t,
        position: r
      });
    }
  }
  return e;
}
function f(l, o) {
  return y(() => {
    const e = x(l), a = v(e), r = [], n = {};
    for (const t of a) {
      const i = t.config.section;
      i ? (n[i] || (n[i] = []), n[i].push(t)) : r.push(t);
    }
    r.sort((t, i) => t.position - i.position);
    for (const t of Object.keys(n))
      n[t].sort((i, p) => i.position - p.position);
    const s = [];
    s.push(...m(r));
    const d = o ? Object.keys(o).filter((t) => n[t]) : Object.keys(n);
    for (const t of d) {
      const i = o?.[t], p = n[t], u = {
        id: t,
        type: "section",
        section: {
          title: i?.title ?? t,
          description: i?.description,
          withInset: i?.withInset,
          renderIf: i?.renderIf,
          action: i?.action,
          fields: m(p)
        }
      };
      s.push(u);
    }
    return s;
  }, [l, o]);
}
function B(l, o) {
  const e = x(l), a = v(e), r = [], n = {};
  for (const t of a) {
    const i = t.config.section;
    i ? (n[i] || (n[i] = []), n[i].push(t)) : r.push(t);
  }
  r.sort((t, i) => t.position - i.position);
  for (const t of Object.keys(n))
    n[t].sort((i, p) => i.position - p.position);
  const s = [];
  s.push(...m(r));
  const d = o ? Object.keys(o).filter((t) => n[t]) : Object.keys(n);
  for (const t of d) {
    const i = o?.[t], p = n[t], u = {
      id: t,
      type: "section",
      section: {
        title: i?.title ?? t,
        description: i?.description,
        withInset: i?.withInset,
        renderIf: i?.renderIf,
        action: i?.action,
        fields: m(p)
      }
    };
    s.push(u);
  }
  return s;
}
export {
  B as getSchemaDefinition,
  f as useSchemaDefinition
};
