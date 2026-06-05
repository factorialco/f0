const t = {
  lastWeek: "'પાછલા' eeee p",
  // CLDR #1384
  yesterday: "'ગઈકાલે' p",
  // CLDR #1409
  today: "'આજે' p",
  // CLDR #1410
  tomorrow: "'આવતીકાલે' p",
  // CLDR #1411
  nextWeek: "eeee p",
  // CLDR #1386
  other: "P"
}, r = (e, o, a, p) => t[e];
export {
  r as formatRelative
};
