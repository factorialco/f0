const t = {
  lastWeek: "'पिछले' eeee p",
  yesterday: "'कल' p",
  today: "'आज' p",
  tomorrow: "'कल' p",
  nextWeek: "eeee 'को' p",
  other: "P"
}, r = (e, o, a, p) => t[e];
export {
  r as formatRelative
};
