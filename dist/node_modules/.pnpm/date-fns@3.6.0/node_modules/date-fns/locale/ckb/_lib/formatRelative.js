const t = {
  lastWeek: "'هەفتەی ڕابردوو' eeee 'کاتژمێر' p",
  yesterday: "'دوێنێ کاتژمێر' p",
  today: "'ئەمڕۆ کاتژمێر' p",
  tomorrow: "'بەیانی کاتژمێر' p",
  nextWeek: "eeee 'کاتژمێر' p",
  other: "P"
}, r = (e, o, a, p) => t[e];
export {
  r as formatRelative
};
