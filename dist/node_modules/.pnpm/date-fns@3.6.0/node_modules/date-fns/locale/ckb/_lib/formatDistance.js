const s = {
  lessThanXSeconds: {
    one: "کەمتر لە یەک چرکە",
    other: "کەمتر لە {{count}} چرکە"
  },
  xSeconds: {
    one: "1 چرکە",
    other: "{{count}} چرکە"
  },
  halfAMinute: "نیو کاتژمێر",
  lessThanXMinutes: {
    one: "کەمتر لە یەک خولەک",
    other: "کەمتر لە {{count}} خولەک"
  },
  xMinutes: {
    one: "1 خولەک",
    other: "{{count}} خولەک"
  },
  aboutXHours: {
    one: "دەوروبەری 1 کاتژمێر",
    other: "دەوروبەری {{count}} کاتژمێر"
  },
  xHours: {
    one: "1 کاتژمێر",
    other: "{{count}} کاتژمێر"
  },
  xDays: {
    one: "1 ڕۆژ",
    other: "{{count}} ژۆژ"
  },
  aboutXWeeks: {
    one: "دەوروبەری 1 هەفتە",
    other: "دوروبەری {{count}} هەفتە"
  },
  xWeeks: {
    one: "1 هەفتە",
    other: "{{count}} هەفتە"
  },
  aboutXMonths: {
    one: "داوروبەری 1 مانگ",
    other: "دەوروبەری {{count}} مانگ"
  },
  xMonths: {
    one: "1 مانگ",
    other: "{{count}} مانگ"
  },
  aboutXYears: {
    one: "دەوروبەری  1 ساڵ",
    other: "دەوروبەری {{count}} ساڵ"
  },
  xYears: {
    one: "1 ساڵ",
    other: "{{count}} ساڵ"
  },
  overXYears: {
    one: "زیاتر لە ساڵێک",
    other: "زیاتر لە {{count}} ساڵ"
  },
  almostXYears: {
    one: "بەنزیکەیی ساڵێک  ",
    other: "بەنزیکەیی {{count}} ساڵ"
  }
}, u = (r, n, t) => {
  let o;
  const e = s[r];
  return typeof e == "string" ? o = e : n === 1 ? o = e.one : o = e.other.replace("{{count}}", n.toString()), t?.addSuffix ? t.comparison && t.comparison > 0 ? "لە ماوەی " + o + "دا" : o + "پێش ئێستا" : o;
};
export {
  u as formatDistance
};
