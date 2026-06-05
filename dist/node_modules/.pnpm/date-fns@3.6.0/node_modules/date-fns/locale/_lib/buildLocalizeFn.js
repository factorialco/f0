function c(t) {
  return (l, e) => {
    const u = e?.context ? String(e.context) : "standalone";
    let d;
    if (u === "formatting" && t.formattingValues) {
      const n = t.defaultFormattingWidth || t.defaultWidth, i = e?.width ? String(e.width) : n;
      d = t.formattingValues[i] || t.formattingValues[n];
    } else {
      const n = t.defaultWidth, i = e?.width ? String(e.width) : t.defaultWidth;
      d = t.values[i] || t.values[n];
    }
    const a = t.argumentCallback ? t.argumentCallback(l) : l;
    return d[a];
  };
}
export {
  c as buildLocalizeFn
};
