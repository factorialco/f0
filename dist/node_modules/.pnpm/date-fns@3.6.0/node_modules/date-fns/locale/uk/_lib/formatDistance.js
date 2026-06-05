function t(i, n) {
  if (i.one !== void 0 && n === 1)
    return i.one;
  const e = n % 10, r = n % 100;
  return e === 1 && r !== 11 ? i.singularNominative.replace("{{count}}", String(n)) : e >= 2 && e <= 4 && (r < 10 || r > 20) ? i.singularGenitive.replace("{{count}}", String(n)) : i.pluralGenitive.replace("{{count}}", String(n));
}
function u(i) {
  return (n, e) => e && e.addSuffix ? e.comparison && e.comparison > 0 ? i.future ? t(i.future, n) : "за " + t(i.regular, n) : i.past ? t(i.past, n) : t(i.regular, n) + " тому" : t(i.regular, n);
}
const a = (i, n) => n && n.addSuffix ? n.comparison && n.comparison > 0 ? "за півхвилини" : "півхвилини тому" : "півхвилини", l = {
  lessThanXSeconds: u({
    regular: {
      one: "менше секунди",
      singularNominative: "менше {{count}} секунди",
      singularGenitive: "менше {{count}} секунд",
      pluralGenitive: "менше {{count}} секунд"
    },
    future: {
      one: "менше, ніж за секунду",
      singularNominative: "менше, ніж за {{count}} секунду",
      singularGenitive: "менше, ніж за {{count}} секунди",
      pluralGenitive: "менше, ніж за {{count}} секунд"
    }
  }),
  xSeconds: u({
    regular: {
      singularNominative: "{{count}} секунда",
      singularGenitive: "{{count}} секунди",
      pluralGenitive: "{{count}} секунд"
    },
    past: {
      singularNominative: "{{count}} секунду тому",
      singularGenitive: "{{count}} секунди тому",
      pluralGenitive: "{{count}} секунд тому"
    },
    future: {
      singularNominative: "за {{count}} секунду",
      singularGenitive: "за {{count}} секунди",
      pluralGenitive: "за {{count}} секунд"
    }
  }),
  halfAMinute: a,
  lessThanXMinutes: u({
    regular: {
      one: "менше хвилини",
      singularNominative: "менше {{count}} хвилини",
      singularGenitive: "менше {{count}} хвилин",
      pluralGenitive: "менше {{count}} хвилин"
    },
    future: {
      one: "менше, ніж за хвилину",
      singularNominative: "менше, ніж за {{count}} хвилину",
      singularGenitive: "менше, ніж за {{count}} хвилини",
      pluralGenitive: "менше, ніж за {{count}} хвилин"
    }
  }),
  xMinutes: u({
    regular: {
      singularNominative: "{{count}} хвилина",
      singularGenitive: "{{count}} хвилини",
      pluralGenitive: "{{count}} хвилин"
    },
    past: {
      singularNominative: "{{count}} хвилину тому",
      singularGenitive: "{{count}} хвилини тому",
      pluralGenitive: "{{count}} хвилин тому"
    },
    future: {
      singularNominative: "за {{count}} хвилину",
      singularGenitive: "за {{count}} хвилини",
      pluralGenitive: "за {{count}} хвилин"
    }
  }),
  aboutXHours: u({
    regular: {
      singularNominative: "близько {{count}} години",
      singularGenitive: "близько {{count}} годин",
      pluralGenitive: "близько {{count}} годин"
    },
    future: {
      singularNominative: "приблизно за {{count}} годину",
      singularGenitive: "приблизно за {{count}} години",
      pluralGenitive: "приблизно за {{count}} годин"
    }
  }),
  xHours: u({
    regular: {
      singularNominative: "{{count}} годину",
      singularGenitive: "{{count}} години",
      pluralGenitive: "{{count}} годин"
    }
  }),
  xDays: u({
    regular: {
      singularNominative: "{{count}} день",
      singularGenitive: "{{count}} днi",
      pluralGenitive: "{{count}} днів"
    }
  }),
  aboutXWeeks: u({
    regular: {
      singularNominative: "близько {{count}} тижня",
      singularGenitive: "близько {{count}} тижнів",
      pluralGenitive: "близько {{count}} тижнів"
    },
    future: {
      singularNominative: "приблизно за {{count}} тиждень",
      singularGenitive: "приблизно за {{count}} тижні",
      pluralGenitive: "приблизно за {{count}} тижнів"
    }
  }),
  xWeeks: u({
    regular: {
      singularNominative: "{{count}} тиждень",
      singularGenitive: "{{count}} тижні",
      pluralGenitive: "{{count}} тижнів"
    }
  }),
  aboutXMonths: u({
    regular: {
      singularNominative: "близько {{count}} місяця",
      singularGenitive: "близько {{count}} місяців",
      pluralGenitive: "близько {{count}} місяців"
    },
    future: {
      singularNominative: "приблизно за {{count}} місяць",
      singularGenitive: "приблизно за {{count}} місяці",
      pluralGenitive: "приблизно за {{count}} місяців"
    }
  }),
  xMonths: u({
    regular: {
      singularNominative: "{{count}} місяць",
      singularGenitive: "{{count}} місяці",
      pluralGenitive: "{{count}} місяців"
    }
  }),
  aboutXYears: u({
    regular: {
      singularNominative: "близько {{count}} року",
      singularGenitive: "близько {{count}} років",
      pluralGenitive: "близько {{count}} років"
    },
    future: {
      singularNominative: "приблизно за {{count}} рік",
      singularGenitive: "приблизно за {{count}} роки",
      pluralGenitive: "приблизно за {{count}} років"
    }
  }),
  xYears: u({
    regular: {
      singularNominative: "{{count}} рік",
      singularGenitive: "{{count}} роки",
      pluralGenitive: "{{count}} років"
    }
  }),
  overXYears: u({
    regular: {
      singularNominative: "більше {{count}} року",
      singularGenitive: "більше {{count}} років",
      pluralGenitive: "більше {{count}} років"
    },
    future: {
      singularNominative: "більше, ніж за {{count}} рік",
      singularGenitive: "більше, ніж за {{count}} роки",
      pluralGenitive: "більше, ніж за {{count}} років"
    }
  }),
  almostXYears: u({
    regular: {
      singularNominative: "майже {{count}} рік",
      singularGenitive: "майже {{count}} роки",
      pluralGenitive: "майже {{count}} років"
    },
    future: {
      singularNominative: "майже за {{count}} рік",
      singularGenitive: "майже за {{count}} роки",
      pluralGenitive: "майже за {{count}} років"
    }
  })
}, o = (i, n, e) => (e = e || {}, l[i](n, e));
export {
  o as formatDistance
};
