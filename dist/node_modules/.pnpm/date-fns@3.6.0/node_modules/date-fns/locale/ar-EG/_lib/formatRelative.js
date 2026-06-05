const t = {
  lastWeek: "eeee 'اللي جاي الساعة' p",
  yesterday: "'إمبارح الساعة' p",
  today: "'النهاردة الساعة' p",
  tomorrow: "'بكرة الساعة' p",
  nextWeek: "eeee 'الساعة' p",
  other: "P"
}, r = (e, o, a, p) => t[e];
export {
  r as formatRelative
};
