import { jsx as h } from "react/jsx-runtime";
import { useRef as s, useCallback as p, useEffect as C } from "react";
import { RichTextEditor as R } from "../../../../components/RichText/RichTextEditor/index.js";
function v({
  field: e,
  formField: o,
  error: l,
  loading: u
}) {
  const { ref: r, ...m } = o, c = s(null), i = s(""), f = p(
    (t) => {
      c.current = t, typeof r == "function" && r(t);
    },
    [r]
  ), a = o.value, n = typeof a == "string" ? a : a?.value ?? "";
  return C(() => {
    n !== i.current && c.current?.setContent(n);
  }, [n]), /* @__PURE__ */ h(
    R,
    {
      ref: f,
      ...m,
      title: e.label,
      placeholder: e.placeholder ?? "",
      maxCharacters: e.maxCharacters,
      mentionsConfig: e.mentionsConfig,
      height: e.height,
      plainHtmlMode: e.plainHtmlMode,
      disabled: e.disabled,
      error: l,
      loading: u,
      initialEditorState: {
        content: n
      },
      onChange: (t) => {
        i.current = t.value ?? "", o.onChange({
          value: t.value,
          mentionIds: t.mentionIds
        });
      }
    }
  );
}
export {
  v as RichTextFieldRenderer
};
