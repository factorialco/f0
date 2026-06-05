const a = {
  lastWeek: (o) => {
    const e = o.getDay();
    let t = "'läschte";
    return (e === 2 || e === 4) && (t += "n"), t += "' eeee 'um' p", t;
  },
  yesterday: "'gëschter um' p",
  today: "'haut um' p",
  tomorrow: "'moien um' p",
  nextWeek: "eeee 'um' p",
  other: "P"
}, s = (o, e, t, n) => {
  const r = a[o];
  return typeof r == "function" ? r(e) : r;
};
export {
  s as formatRelative
};
