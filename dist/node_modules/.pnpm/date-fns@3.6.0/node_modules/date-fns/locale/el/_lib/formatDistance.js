const s = {
  lessThanXSeconds: {
    one: "λιγότερο από ένα δευτερόλεπτο",
    other: "λιγότερο από {{count}} δευτερόλεπτα"
  },
  xSeconds: {
    one: "1 δευτερόλεπτο",
    other: "{{count}} δευτερόλεπτα"
  },
  halfAMinute: "μισό λεπτό",
  lessThanXMinutes: {
    one: "λιγότερο από ένα λεπτό",
    other: "λιγότερο από {{count}} λεπτά"
  },
  xMinutes: {
    one: "1 λεπτό",
    other: "{{count}} λεπτά"
  },
  aboutXHours: {
    one: "περίπου 1 ώρα",
    other: "περίπου {{count}} ώρες"
  },
  xHours: {
    one: "1 ώρα",
    other: "{{count}} ώρες"
  },
  xDays: {
    one: "1 ημέρα",
    other: "{{count}} ημέρες"
  },
  aboutXWeeks: {
    one: "περίπου 1 εβδομάδα",
    other: "περίπου {{count}} εβδομάδες"
  },
  xWeeks: {
    one: "1 εβδομάδα",
    other: "{{count}} εβδομάδες"
  },
  aboutXMonths: {
    one: "περίπου 1 μήνας",
    other: "περίπου {{count}} μήνες"
  },
  xMonths: {
    one: "1 μήνας",
    other: "{{count}} μήνες"
  },
  aboutXYears: {
    one: "περίπου 1 χρόνο",
    other: "περίπου {{count}} χρόνια"
  },
  xYears: {
    one: "1 χρόνο",
    other: "{{count}} χρόνια"
  },
  overXYears: {
    one: "πάνω από 1 χρόνο",
    other: "πάνω από {{count}} χρόνια"
  },
  almostXYears: {
    one: "περίπου 1 χρόνο",
    other: "περίπου {{count}} χρόνια"
  }
}, u = (r, n, t) => {
  let e;
  const o = s[r];
  return typeof o == "string" ? e = o : n === 1 ? e = o.one : e = o.other.replace("{{count}}", String(n)), t?.addSuffix ? t.comparison && t.comparison > 0 ? "σε " + e : e + " πριν" : e;
};
export {
  u as formatDistance
};
