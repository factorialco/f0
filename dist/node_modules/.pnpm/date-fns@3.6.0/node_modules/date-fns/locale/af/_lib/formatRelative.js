const o = {
  lastWeek: "'verlede' eeee 'om' p",
  yesterday: "'gister om' p",
  today: "'vandag om' p",
  tomorrow: "'môre om' p",
  nextWeek: "eeee 'om' p",
  other: "P"
}, m = (e, t, a, r) => o[e];
export {
  m as formatRelative
};
