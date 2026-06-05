function t(i, n) {
  if (i.one !== void 0 && n === 1)
    return i.one;
  const e = n % 10, r = n % 100;
  return e === 1 && r !== 11 ? i.singularNominative.replace("{{count}}", String(n)) : e >= 2 && e <= 4 && (r < 10 || r > 20) ? i.singularGenitive.replace("{{count}}", String(n)) : i.pluralGenitive.replace("{{count}}", String(n));
}
function u(i) {
  return (n, e) => e && e.addSuffix ? e.comparison && e.comparison > 0 ? i.future ? t(i.future, n) : "праз " + t(i.regular, n) : i.past ? t(i.past, n) : t(i.regular, n) + " таму" : t(i.regular, n);
}
const a = (i, n) => n && n.addSuffix ? n.comparison && n.comparison > 0 ? "праз паўхвіліны" : "паўхвіліны таму" : "паўхвіліны", l = {
  lessThanXSeconds: u({
    regular: {
      one: "менш за секунду",
      singularNominative: "менш за {{count}} секунду",
      singularGenitive: "менш за {{count}} секунды",
      pluralGenitive: "менш за {{count}} секунд"
    },
    future: {
      one: "менш, чым праз секунду",
      singularNominative: "менш, чым праз {{count}} секунду",
      singularGenitive: "менш, чым праз {{count}} секунды",
      pluralGenitive: "менш, чым праз {{count}} секунд"
    }
  }),
  xSeconds: u({
    regular: {
      singularNominative: "{{count}} секунда",
      singularGenitive: "{{count}} секунды",
      pluralGenitive: "{{count}} секунд"
    },
    past: {
      singularNominative: "{{count}} секунду таму",
      singularGenitive: "{{count}} секунды таму",
      pluralGenitive: "{{count}} секунд таму"
    },
    future: {
      singularNominative: "праз {{count}} секунду",
      singularGenitive: "праз {{count}} секунды",
      pluralGenitive: "праз {{count}} секунд"
    }
  }),
  halfAMinute: a,
  lessThanXMinutes: u({
    regular: {
      one: "менш за хвіліну",
      singularNominative: "менш за {{count}} хвіліну",
      singularGenitive: "менш за {{count}} хвіліны",
      pluralGenitive: "менш за {{count}} хвілін"
    },
    future: {
      one: "менш, чым праз хвіліну",
      singularNominative: "менш, чым праз {{count}} хвіліну",
      singularGenitive: "менш, чым праз {{count}} хвіліны",
      pluralGenitive: "менш, чым праз {{count}} хвілін"
    }
  }),
  xMinutes: u({
    regular: {
      singularNominative: "{{count}} хвіліна",
      singularGenitive: "{{count}} хвіліны",
      pluralGenitive: "{{count}} хвілін"
    },
    past: {
      singularNominative: "{{count}} хвіліну таму",
      singularGenitive: "{{count}} хвіліны таму",
      pluralGenitive: "{{count}} хвілін таму"
    },
    future: {
      singularNominative: "праз {{count}} хвіліну",
      singularGenitive: "праз {{count}} хвіліны",
      pluralGenitive: "праз {{count}} хвілін"
    }
  }),
  aboutXHours: u({
    regular: {
      singularNominative: "каля {{count}} гадзіны",
      singularGenitive: "каля {{count}} гадзін",
      pluralGenitive: "каля {{count}} гадзін"
    },
    future: {
      singularNominative: "прыблізна праз {{count}} гадзіну",
      singularGenitive: "прыблізна праз {{count}} гадзіны",
      pluralGenitive: "прыблізна праз {{count}} гадзін"
    }
  }),
  xHours: u({
    regular: {
      singularNominative: "{{count}} гадзіна",
      singularGenitive: "{{count}} гадзіны",
      pluralGenitive: "{{count}} гадзін"
    },
    past: {
      singularNominative: "{{count}} гадзіну таму",
      singularGenitive: "{{count}} гадзіны таму",
      pluralGenitive: "{{count}} гадзін таму"
    },
    future: {
      singularNominative: "праз {{count}} гадзіну",
      singularGenitive: "праз {{count}} гадзіны",
      pluralGenitive: "праз {{count}} гадзін"
    }
  }),
  xDays: u({
    regular: {
      singularNominative: "{{count}} дзень",
      singularGenitive: "{{count}} дні",
      pluralGenitive: "{{count}} дзён"
    }
  }),
  aboutXWeeks: u({
    regular: {
      singularNominative: "каля {{count}} тыдні",
      singularGenitive: "каля {{count}} тыдняў",
      pluralGenitive: "каля {{count}} тыдняў"
    },
    future: {
      singularNominative: "прыблізна праз {{count}} тыдзень",
      singularGenitive: "прыблізна праз {{count}} тыдні",
      pluralGenitive: "прыблізна праз {{count}} тыдняў"
    }
  }),
  xWeeks: u({
    regular: {
      singularNominative: "{{count}} тыдзень",
      singularGenitive: "{{count}} тыдні",
      pluralGenitive: "{{count}} тыдняў"
    }
  }),
  aboutXMonths: u({
    regular: {
      singularNominative: "каля {{count}} месяца",
      singularGenitive: "каля {{count}} месяцаў",
      pluralGenitive: "каля {{count}} месяцаў"
    },
    future: {
      singularNominative: "прыблізна праз {{count}} месяц",
      singularGenitive: "прыблізна праз {{count}} месяцы",
      pluralGenitive: "прыблізна праз {{count}} месяцаў"
    }
  }),
  xMonths: u({
    regular: {
      singularNominative: "{{count}} месяц",
      singularGenitive: "{{count}} месяцы",
      pluralGenitive: "{{count}} месяцаў"
    }
  }),
  aboutXYears: u({
    regular: {
      singularNominative: "каля {{count}} года",
      singularGenitive: "каля {{count}} гадоў",
      pluralGenitive: "каля {{count}} гадоў"
    },
    future: {
      singularNominative: "прыблізна праз {{count}} год",
      singularGenitive: "прыблізна праз {{count}} гады",
      pluralGenitive: "прыблізна праз {{count}} гадоў"
    }
  }),
  xYears: u({
    regular: {
      singularNominative: "{{count}} год",
      singularGenitive: "{{count}} гады",
      pluralGenitive: "{{count}} гадоў"
    }
  }),
  overXYears: u({
    regular: {
      singularNominative: "больш за {{count}} год",
      singularGenitive: "больш за {{count}} гады",
      pluralGenitive: "больш за {{count}} гадоў"
    },
    future: {
      singularNominative: "больш, чым праз {{count}} год",
      singularGenitive: "больш, чым праз {{count}} гады",
      pluralGenitive: "больш, чым праз {{count}} гадоў"
    }
  }),
  almostXYears: u({
    regular: {
      singularNominative: "амаль {{count}} год",
      singularGenitive: "амаль {{count}} гады",
      pluralGenitive: "амаль {{count}} гадоў"
    },
    future: {
      singularNominative: "амаль праз {{count}} год",
      singularGenitive: "амаль праз {{count}} гады",
      pluralGenitive: "амаль праз {{count}} гадоў"
    }
  })
}, o = (i, n, e) => (e = e || {}, l[i](n, e));
export {
  o as formatDistance
};
