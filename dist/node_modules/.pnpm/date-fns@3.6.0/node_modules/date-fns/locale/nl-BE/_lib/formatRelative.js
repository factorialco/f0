const o = {
  lastWeek: "'vorige' eeee 'om' p",
  yesterday: "'gisteren om' p",
  today: "'vandaag om' p",
  tomorrow: "'morgen om' p",
  nextWeek: "eeee 'om' p",
  other: "P"
}, m = (e, t, a, r) => o[e];
export {
  m as formatRelative
};
