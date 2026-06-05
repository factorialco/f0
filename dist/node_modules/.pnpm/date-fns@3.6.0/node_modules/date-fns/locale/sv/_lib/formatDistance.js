const u = {
  lessThanXSeconds: {
    one: "mindre än en sekund",
    other: "mindre än {{count}} sekunder"
  },
  xSeconds: {
    one: "en sekund",
    other: "{{count}} sekunder"
  },
  halfAMinute: "en halv minut",
  lessThanXMinutes: {
    one: "mindre än en minut",
    other: "mindre än {{count}} minuter"
  },
  xMinutes: {
    one: "en minut",
    other: "{{count}} minuter"
  },
  aboutXHours: {
    one: "ungefär en timme",
    other: "ungefär {{count}} timmar"
  },
  xHours: {
    one: "en timme",
    other: "{{count}} timmar"
  },
  xDays: {
    one: "en dag",
    other: "{{count}} dagar"
  },
  aboutXWeeks: {
    one: "ungefär en vecka",
    other: "ungefär {{count}} veckor"
  },
  xWeeks: {
    one: "en vecka",
    other: "{{count}} veckor"
  },
  aboutXMonths: {
    one: "ungefär en månad",
    other: "ungefär {{count}} månader"
  },
  xMonths: {
    one: "en månad",
    other: "{{count}} månader"
  },
  aboutXYears: {
    one: "ungefär ett år",
    other: "ungefär {{count}} år"
  },
  xYears: {
    one: "ett år",
    other: "{{count}} år"
  },
  overXYears: {
    one: "över ett år",
    other: "över {{count}} år"
  },
  almostXYears: {
    one: "nästan ett år",
    other: "nästan {{count}} år"
  }
}, a = [
  "noll",
  "en",
  "två",
  "tre",
  "fyra",
  "fem",
  "sex",
  "sju",
  "åtta",
  "nio",
  "tio",
  "elva",
  "tolv"
], s = (r, n, o) => {
  let e;
  const t = u[r];
  return typeof t == "string" ? e = t : n === 1 ? e = t.one : e = t.other.replace(
    "{{count}}",
    n < 13 ? a[n] : String(n)
  ), o?.addSuffix ? o.comparison && o.comparison > 0 ? "om " + e : e + " sedan" : e;
};
export {
  s as formatDistance
};
