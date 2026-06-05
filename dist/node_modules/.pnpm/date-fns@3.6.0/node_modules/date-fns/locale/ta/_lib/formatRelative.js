const t = {
  lastWeek: "'கடந்த' eeee p 'மணிக்கு'",
  yesterday: "'நேற்று ' p 'மணிக்கு'",
  today: "'இன்று ' p 'மணிக்கு'",
  tomorrow: "'நாளை ' p 'மணிக்கு'",
  nextWeek: "eeee p 'மணிக்கு'",
  other: "P"
}, r = (e, o, a, p) => t[e];
export {
  r as formatRelative
};
