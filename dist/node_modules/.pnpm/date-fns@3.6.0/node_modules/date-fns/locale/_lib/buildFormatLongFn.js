function r(t) {
  return (d = {}) => {
    const n = d.width ? String(d.width) : t.defaultWidth;
    return t.formats[n] || t.formats[t.defaultWidth];
  };
}
export {
  r as buildFormatLongFn
};
