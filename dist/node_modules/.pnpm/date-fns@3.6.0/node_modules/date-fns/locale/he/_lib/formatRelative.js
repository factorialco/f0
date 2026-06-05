const t = {
  lastWeek: "eeee 'שעבר בשעה' p",
  yesterday: "'אתמול בשעה' p",
  today: "'היום בשעה' p",
  tomorrow: "'מחר בשעה' p",
  nextWeek: "eeee 'בשעה' p",
  other: "P"
}, r = (e, o, a, p) => t[e];
export {
  r as formatRelative
};
