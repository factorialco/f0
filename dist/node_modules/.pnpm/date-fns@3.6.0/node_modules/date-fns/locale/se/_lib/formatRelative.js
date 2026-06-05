const t = {
  lastWeek: "'ovddit' eeee 'dii.' p",
  yesterday: "'ikte dii.' p",
  today: "'odne dii.' p",
  tomorrow: "'ihtin dii.' p",
  nextWeek: "EEEE 'dii.' p",
  other: "P"
}, d = (e, i, o, a) => t[e];
export {
  d as formatRelative
};
