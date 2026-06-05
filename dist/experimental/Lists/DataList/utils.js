const r = (t, e) => t && t.type === "copy" ? { type: "copy", text: t.text ?? e } : t;
export {
  r as getInternalAction
};
