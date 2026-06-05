function r(e) {
  return e.map((a) => ({ x: a.label, ...a.values }));
}
export {
  r as prepareData
};
