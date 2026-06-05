const s = {
  lessThanXSeconds: {
    one: "פחות משנייה",
    two: "פחות משתי שניות",
    other: "פחות מ־{{count}} שניות"
  },
  xSeconds: {
    one: "שנייה",
    two: "שתי שניות",
    other: "{{count}} שניות"
  },
  halfAMinute: "חצי דקה",
  lessThanXMinutes: {
    one: "פחות מדקה",
    two: "פחות משתי דקות",
    other: "פחות מ־{{count}} דקות"
  },
  xMinutes: {
    one: "דקה",
    two: "שתי דקות",
    other: "{{count}} דקות"
  },
  aboutXHours: {
    one: "כשעה",
    two: "כשעתיים",
    other: "כ־{{count}} שעות"
  },
  xHours: {
    one: "שעה",
    two: "שעתיים",
    other: "{{count}} שעות"
  },
  xDays: {
    one: "יום",
    two: "יומיים",
    other: "{{count}} ימים"
  },
  aboutXWeeks: {
    one: "כשבוע",
    two: "כשבועיים",
    other: "כ־{{count}} שבועות"
  },
  xWeeks: {
    one: "שבוע",
    two: "שבועיים",
    other: "{{count}} שבועות"
  },
  aboutXMonths: {
    one: "כחודש",
    two: "כחודשיים",
    other: "כ־{{count}} חודשים"
  },
  xMonths: {
    one: "חודש",
    two: "חודשיים",
    other: "{{count}} חודשים"
  },
  aboutXYears: {
    one: "כשנה",
    two: "כשנתיים",
    other: "כ־{{count}} שנים"
  },
  xYears: {
    one: "שנה",
    two: "שנתיים",
    other: "{{count}} שנים"
  },
  overXYears: {
    one: "יותר משנה",
    two: "יותר משנתיים",
    other: "יותר מ־{{count}} שנים"
  },
  almostXYears: {
    one: "כמעט שנה",
    two: "כמעט שנתיים",
    other: "כמעט {{count}} שנים"
  }
}, u = (r, e, t) => {
  if (r === "xDays" && t?.addSuffix && e <= 2)
    return t.comparison && t.comparison > 0 ? e === 1 ? "מחר" : "מחרתיים" : e === 1 ? "אתמול" : "שלשום";
  let o;
  const n = s[r];
  return typeof n == "string" ? o = n : e === 1 ? o = n.one : e === 2 ? o = n.two : o = n.other.replace("{{count}}", String(e)), t?.addSuffix ? t.comparison && t.comparison > 0 ? "בעוד " + o : "לפני " + o : o;
};
export {
  u as formatDistance
};
