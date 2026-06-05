const s = {
  lessThanXSeconds: {
    one: "بىر سىكۇنت ئىچىدە",
    other: "سىكۇنت ئىچىدە {{count}}"
  },
  xSeconds: {
    one: "بىر سىكۇنت",
    other: "سىكۇنت {{count}}"
  },
  halfAMinute: "يىرىم مىنۇت",
  lessThanXMinutes: {
    one: "بىر مىنۇت ئىچىدە",
    other: "مىنۇت ئىچىدە {{count}}"
  },
  xMinutes: {
    one: "بىر مىنۇت",
    other: "مىنۇت {{count}}"
  },
  aboutXHours: {
    one: "تەخمىنەن بىر سائەت",
    other: "سائەت {{count}} تەخمىنەن"
  },
  xHours: {
    one: "بىر سائەت",
    other: "سائەت {{count}}"
  },
  xDays: {
    one: "بىر كۈن",
    other: "كۈن {{count}}"
  },
  aboutXWeeks: {
    one: "تەخمىنەن بىرھەپتە",
    other: "ھەپتە {{count}} تەخمىنەن"
  },
  xWeeks: {
    one: "بىرھەپتە",
    other: "ھەپتە {{count}}"
  },
  aboutXMonths: {
    one: "تەخمىنەن بىر ئاي",
    other: "ئاي {{count}} تەخمىنەن"
  },
  xMonths: {
    one: "بىر ئاي",
    other: "ئاي {{count}}"
  },
  aboutXYears: {
    one: "تەخمىنەن بىر يىل",
    other: "يىل {{count}} تەخمىنەن"
  },
  xYears: {
    one: "بىر يىل",
    other: "يىل {{count}}"
  },
  overXYears: {
    one: "بىر يىلدىن ئارتۇق",
    other: "يىلدىن ئارتۇق {{count}}"
  },
  almostXYears: {
    one: "ئاساسەن بىر يىل",
    other: "يىل {{count}} ئاساسەن"
  }
}, u = (r, n, t) => {
  let e;
  const o = s[r];
  return typeof o == "string" ? e = o : n === 1 ? e = o.one : e = o.other.replace("{{count}}", String(n)), t?.addSuffix ? t.comparison && t.comparison > 0 ? e : e + " بولدى" : e;
};
export {
  u as formatDistance
};
