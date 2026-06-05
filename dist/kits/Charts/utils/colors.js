const e = (a, c) => {
  const o = [
    "categorical-1",
    "categorical-2",
    "categorical-3",
    "categorical-4",
    "categorical-5",
    "categorical-6",
    "categorical-7",
    "categorical-8"
  ];
  return r(o[a % o.length], c);
}, r = (a, c) => {
  const o = c !== void 0 ? ` / ${c}` : "";
  return `hsl(var(--${`chart-${a}`})${o})`;
};
export {
  e as getCategoricalColor,
  r as getColor
};
