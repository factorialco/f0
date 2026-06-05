const s = {
  lastWeek: (t) => {
    const e = t.getDay();
    return "'" + (e === 0 || e === 6 ? "último" : "última") + "' eeee 'às' p";
  },
  yesterday: "'ontem às' p",
  today: "'hoje às' p",
  tomorrow: "'amanhã às' p",
  nextWeek: "eeee 'às' p",
  other: "P"
}, r = (t, e, a, n) => {
  const o = s[t];
  return typeof o == "function" ? o(e) : o;
};
export {
  r as formatRelative
};
