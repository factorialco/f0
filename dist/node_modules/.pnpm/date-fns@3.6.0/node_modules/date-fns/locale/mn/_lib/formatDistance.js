const c = {
  lessThanXSeconds: {
    one: "секунд хүрэхгүй",
    other: "{{count}} секунд хүрэхгүй"
  },
  xSeconds: {
    one: "1 секунд",
    other: "{{count}} секунд"
  },
  halfAMinute: "хагас минут",
  lessThanXMinutes: {
    one: "минут хүрэхгүй",
    other: "{{count}} минут хүрэхгүй"
  },
  xMinutes: {
    one: "1 минут",
    other: "{{count}} минут"
  },
  aboutXHours: {
    one: "ойролцоогоор 1 цаг",
    other: "ойролцоогоор {{count}} цаг"
  },
  xHours: {
    one: "1 цаг",
    other: "{{count}} цаг"
  },
  xDays: {
    one: "1 өдөр",
    other: "{{count}} өдөр"
  },
  aboutXWeeks: {
    one: "ойролцоогоор 1 долоо хоног",
    other: "ойролцоогоор {{count}} долоо хоног"
  },
  xWeeks: {
    one: "1 долоо хоног",
    other: "{{count}} долоо хоног"
  },
  aboutXMonths: {
    one: "ойролцоогоор 1 сар",
    other: "ойролцоогоор {{count}} сар"
  },
  xMonths: {
    one: "1 сар",
    other: "{{count}} сар"
  },
  aboutXYears: {
    one: "ойролцоогоор 1 жил",
    other: "ойролцоогоор {{count}} жил"
  },
  xYears: {
    one: "1 жил",
    other: "{{count}} жил"
  },
  overXYears: {
    one: "1 жил гаран",
    other: "{{count}} жил гаран"
  },
  almostXYears: {
    one: "бараг 1 жил",
    other: "бараг {{count}} жил"
  }
}, u = (a, n, t) => {
  let e;
  const o = c[a];
  if (typeof o == "string" ? e = o : n === 1 ? e = o.one : e = o.other.replace("{{count}}", String(n)), t?.addSuffix) {
    const r = e.split(" "), s = r.pop();
    switch (e = r.join(" "), s) {
      case "секунд":
        e += " секундийн";
        break;
      case "минут":
        e += " минутын";
        break;
      case "цаг":
        e += " цагийн";
        break;
      case "өдөр":
        e += " өдрийн";
        break;
      case "сар":
        e += " сарын";
        break;
      case "жил":
        e += " жилийн";
        break;
      case "хоног":
        e += " хоногийн";
        break;
      case "гаран":
        e += " гараны";
        break;
      case "хүрэхгүй":
        e += " хүрэхгүй хугацааны";
        break;
      default:
        e += s + "-н";
    }
    return t.comparison && t.comparison > 0 ? e + " дараа" : e + " өмнө";
  }
  return e;
};
export {
  u as formatDistance
};
