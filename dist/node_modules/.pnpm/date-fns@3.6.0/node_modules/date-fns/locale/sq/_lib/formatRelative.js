const t = {
  lastWeek: "'të' eeee 'e shkuar në' p",
  yesterday: "'dje në' p",
  today: "'sot në' p",
  tomorrow: "'nesër në' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, r = (e, o, a, n) => t[e];
export {
  r as formatRelative
};
