function r(e) {
  return e.replace(/sekuntia?/, "sekunnin");
}
function s(e) {
  return e.replace(/minuuttia?/, "minuutin");
}
function a(e) {
  return e.replace(/tuntia?/, "tunnin");
}
function k(e) {
  return e.replace(/päivää?/, "päivän");
}
function c(e) {
  return e.replace(/(viikko|viikkoa)/, "viikon");
}
function f(e) {
  return e.replace(/(kuukausi|kuukautta)/, "kuukauden");
}
function u(e) {
  return e.replace(/(vuosi|vuotta)/, "vuoden");
}
const l = {
  lessThanXSeconds: {
    one: "alle sekunti",
    other: "alle {{count}} sekuntia",
    futureTense: r
  },
  xSeconds: {
    one: "sekunti",
    other: "{{count}} sekuntia",
    futureTense: r
  },
  halfAMinute: {
    one: "puoli minuuttia",
    other: "puoli minuuttia",
    futureTense: (e) => "puolen minuutin"
  },
  lessThanXMinutes: {
    one: "alle minuutti",
    other: "alle {{count}} minuuttia",
    futureTense: s
  },
  xMinutes: {
    one: "minuutti",
    other: "{{count}} minuuttia",
    futureTense: s
  },
  aboutXHours: {
    one: "noin tunti",
    other: "noin {{count}} tuntia",
    futureTense: a
  },
  xHours: {
    one: "tunti",
    other: "{{count}} tuntia",
    futureTense: a
  },
  xDays: {
    one: "päivä",
    other: "{{count}} päivää",
    futureTense: k
  },
  aboutXWeeks: {
    one: "noin viikko",
    other: "noin {{count}} viikkoa",
    futureTense: c
  },
  xWeeks: {
    one: "viikko",
    other: "{{count}} viikkoa",
    futureTense: c
  },
  aboutXMonths: {
    one: "noin kuukausi",
    other: "noin {{count}} kuukautta",
    futureTense: f
  },
  xMonths: {
    one: "kuukausi",
    other: "{{count}} kuukautta",
    futureTense: f
  },
  aboutXYears: {
    one: "noin vuosi",
    other: "noin {{count}} vuotta",
    futureTense: u
  },
  xYears: {
    one: "vuosi",
    other: "{{count}} vuotta",
    futureTense: u
  },
  overXYears: {
    one: "yli vuosi",
    other: "yli {{count}} vuotta",
    futureTense: u
  },
  almostXYears: {
    one: "lähes vuosi",
    other: "lähes {{count}} vuotta",
    futureTense: u
  }
}, h = (e, i, t) => {
  const n = l[e], o = i === 1 ? n.one : n.other.replace("{{count}}", String(i));
  return t?.addSuffix ? t.comparison && t.comparison > 0 ? n.futureTense(o) + " kuluttua" : o + " sitten" : o;
};
export {
  h as formatDistance
};
