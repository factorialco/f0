const t = {
  lastWeek: "'ўтган' eeee p 'да'",
  yesterday: "'кеча' p 'да'",
  today: "'бугун' p 'да'",
  tomorrow: "'эртага' p 'да'",
  nextWeek: "eeee p 'да'",
  other: "P"
}, r = (e, o, a, p) => t[e];
export {
  r as formatRelative
};
