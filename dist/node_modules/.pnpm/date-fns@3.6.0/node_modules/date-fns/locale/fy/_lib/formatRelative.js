const o = {
  lastWeek: "'ôfrûne' eeee 'om' p",
  yesterday: "'juster om' p",
  today: "'hjoed om' p",
  tomorrow: "'moarn om' p",
  nextWeek: "eeee 'om' p",
  other: "P"
}, m = (e, t, a, r) => o[e];
export {
  m as formatRelative
};
