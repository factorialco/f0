const r = {
  lessThanXSeconds: {
    one: "inqas minn sekonda",
    other: "inqas minn {{count}} sekondi"
  },
  xSeconds: {
    one: "sekonda",
    other: "{{count}} sekondi"
  },
  halfAMinute: "nofs minuta",
  lessThanXMinutes: {
    one: "inqas minn minuta",
    other: "inqas minn {{count}} minuti"
  },
  xMinutes: {
    one: "minuta",
    other: "{{count}} minuti"
  },
  aboutXHours: {
    one: "madwar siegħa",
    other: "madwar {{count}} siegħat"
  },
  xHours: {
    one: "siegħa",
    other: "{{count}} siegħat"
  },
  xDays: {
    one: "ġurnata",
    other: "{{count}} ġranet"
  },
  aboutXWeeks: {
    one: "madwar ġimgħa",
    other: "madwar {{count}} ġimgħat"
  },
  xWeeks: {
    one: "ġimgħa",
    other: "{{count}} ġimgħat"
  },
  aboutXMonths: {
    one: "madwar xahar",
    other: "madwar {{count}} xhur"
  },
  xMonths: {
    one: "xahar",
    other: "{{count}} xhur"
  },
  aboutXYears: {
    one: "madwar sena",
    two: "madwar sentejn",
    other: "madwar {{count}} snin"
  },
  xYears: {
    one: "sena",
    two: "sentejn",
    other: "{{count}} snin"
  },
  overXYears: {
    one: "aktar minn sena",
    two: "aktar minn sentejn",
    other: "aktar minn {{count}} snin"
  },
  almostXYears: {
    one: "kważi sena",
    two: "kważi sentejn",
    other: "kważi {{count}} snin"
  }
}, s = (o, t, a) => {
  let n;
  const e = r[o];
  return typeof e == "string" ? n = e : t === 1 ? n = e.one : t === 2 && e.two ? n = e.two : n = e.other.replace("{{count}}", String(t)), a?.addSuffix ? a.comparison && a.comparison > 0 ? "f'" + n : n + " ilu" : n;
};
export {
  s as formatDistance
};
