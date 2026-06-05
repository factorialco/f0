const a = {
  lastWeek: "eeee 'passat a' p",
  yesterday: "'ièr a' p",
  today: "'uèi a' p",
  tomorrow: "'deman a' p",
  nextWeek: "eeee 'a' p",
  other: "P"
}, r = (e, t, o, p) => a[e];
export {
  r as formatRelative
};
