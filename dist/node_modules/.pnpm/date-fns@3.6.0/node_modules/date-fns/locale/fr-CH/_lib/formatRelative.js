const a = {
  lastWeek: "eeee 'la semaine dernière à' p",
  yesterday: "'hier à' p",
  today: "'aujourd’hui à' p",
  tomorrow: "'demain à' p'",
  nextWeek: "eeee 'la semaine prochaine à' p",
  other: "P"
}, i = (e, t, o, r) => a[e];
export {
  i as formatRelative
};
