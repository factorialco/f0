const m = {
  xseconds_other: "sekundė_sekundžių_sekundes",
  xminutes_one: "minutė_minutės_minutę",
  xminutes_other: "minutės_minučių_minutes",
  xhours_one: "valanda_valandos_valandą",
  xhours_other: "valandos_valandų_valandas",
  xdays_one: "diena_dienos_dieną",
  xdays_other: "dienos_dienų_dienas",
  xweeks_one: "savaitė_savaitės_savaitę",
  xweeks_other: "savaitės_savaičių_savaites",
  xmonths_one: "mėnuo_mėnesio_mėnesį",
  xmonths_other: "mėnesiai_mėnesių_mėnesius",
  xyears_one: "metai_metų_metus",
  xyears_other: "metai_metų_metus",
  about: "apie",
  over: "daugiau nei",
  almost: "beveik",
  lessthan: "mažiau nei"
}, h = (s, a, e, o) => a ? o ? "kelių sekundžių" : "kelias sekundes" : "kelios sekundės", t = (s, a, e, o) => a ? o ? i(e)[1] : i(e)[2] : i(e)[0], n = (s, a, e, o) => {
  const u = s + " ";
  return s === 1 ? u + t(s, a, e, o) : a ? o ? u + i(e)[1] : u + (d(s) ? i(e)[1] : i(e)[2]) : u + (d(s) ? i(e)[1] : i(e)[0]);
};
function d(s) {
  return s % 10 === 0 || s > 10 && s < 20;
}
function i(s) {
  return m[s].split("_");
}
const x = {
  lessThanXSeconds: {
    one: h,
    other: n
  },
  xSeconds: {
    one: h,
    other: n
  },
  halfAMinute: "pusė minutės",
  lessThanXMinutes: {
    one: t,
    other: n
  },
  xMinutes: {
    one: t,
    other: n
  },
  aboutXHours: {
    one: t,
    other: n
  },
  xHours: {
    one: t,
    other: n
  },
  xDays: {
    one: t,
    other: n
  },
  aboutXWeeks: {
    one: t,
    other: n
  },
  xWeeks: {
    one: t,
    other: n
  },
  aboutXMonths: {
    one: t,
    other: n
  },
  xMonths: {
    one: t,
    other: n
  },
  aboutXYears: {
    one: t,
    other: n
  },
  xYears: {
    one: t,
    other: n
  },
  overXYears: {
    one: t,
    other: n
  },
  almostXYears: {
    one: t,
    other: n
  }
}, f = (s, a, e) => {
  const o = s.match(/about|over|almost|lessthan/i), u = o ? s.replace(o[0], "") : s, l = e?.comparison !== void 0 && e.comparison > 0;
  let r;
  const _ = x[s];
  if (typeof _ == "string" ? r = _ : a === 1 ? r = _.one(
    a,
    e?.addSuffix === !0,
    u.toLowerCase() + "_one",
    l
  ) : r = _.other(
    a,
    e?.addSuffix === !0,
    u.toLowerCase() + "_other",
    l
  ), o) {
    const c = o[0].toLowerCase();
    r = m[c] + " " + r;
  }
  return e?.addSuffix ? e.comparison && e.comparison > 0 ? "po " + r : "prieš " + r : r;
};
export {
  f as formatDistance
};
