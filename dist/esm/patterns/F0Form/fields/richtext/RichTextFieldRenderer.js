import { F0RichTextEditor as e } from "../../../../components/RichText/F0RichTextEditor/F0RichTextEditor.js";
import { useCallback as t, useEffect as n, useRef as r } from "react";
import { jsx as i } from "react/jsx-runtime";
//#region src/patterns/F0Form/fields/richtext/RichTextFieldRenderer.tsx
function a(e, t) {
	let n = e ?? [], r = t ?? [];
	return n.length === r.length && n.every((e, t) => e === r[t]);
}
function o(e, t) {
	return (typeof e == "string" ? e : e?.value ?? "") === (t.value ?? "") && a(typeof e == "string" ? void 0 : e?.mentionIds, t.mentionIds);
}
function s({ field: a, formField: s, error: c, loading: l }) {
	let { ref: u, ...d } = s, f = s.value, p = r(null), m = r(""), h = r(f), g = t((e) => {
		p.current = e, typeof u == "function" && u(e);
	}, [u]), _ = typeof f == "string" ? f : f?.value ?? "";
	return n(() => {
		h.current = f;
	}, [f]), n(() => {
		_ !== m.current && p.current?.setContent(_);
	}, [_]), /* @__PURE__ */ i(e, {
		ref: g,
		...d,
		title: a.label,
		placeholder: a.placeholder ?? "",
		maxCharacters: a.maxCharacters,
		mentionsConfig: a.mentionsConfig,
		height: a.height,
		plainHtmlMode: a.plainHtmlMode,
		disabled: a.disabled,
		error: c,
		loading: l,
		initialEditorState: { content: _ },
		onChange: (e) => {
			m.current = e.value ?? "";
			let t = {
				value: e.value,
				mentionIds: e.mentionIds
			}, n = h.current;
			h.current = t, !o(n, t) && s.onChange(t);
		}
	});
}
//#endregion
export { s as RichTextFieldRenderer };
