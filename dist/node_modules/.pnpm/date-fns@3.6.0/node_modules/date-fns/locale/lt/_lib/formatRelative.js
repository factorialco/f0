const t = {
  lastWeek: "'Praėjusį' eeee p",
  yesterday: "'Vakar' p",
  today: "'Šiandien' p",
  tomorrow: "'Rytoj' p",
  nextWeek: "eeee p",
  other: "P"
}, p = (e, a, o, r) => t[e];
export {
  p as formatRelative
};
