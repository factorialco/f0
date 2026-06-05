const t = {
  lastWeek: "eeee 'گذشته در' p",
  yesterday: "'دیروز در' p",
  today: "'امروز در' p",
  tomorrow: "'فردا در' p",
  nextWeek: "eeee 'در' p",
  other: "P"
}, r = (e, o, a, p) => t[e];
export {
  r as formatRelative
};
