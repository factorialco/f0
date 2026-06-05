const r = {
  lessThanXSeconds: {
    regular: {
      one: "1 секундтан аз",
      singularNominative: "{{count}} секундтан аз",
      singularGenitive: "{{count}} секундтан аз",
      pluralGenitive: "{{count}} секундтан аз"
    },
    future: {
      one: "бір секундтан кейін",
      singularNominative: "{{count}} секундтан кейін",
      singularGenitive: "{{count}} секундтан кейін",
      pluralGenitive: "{{count}} секундтан кейін"
    }
  },
  xSeconds: {
    regular: {
      singularNominative: "{{count}} секунд",
      singularGenitive: "{{count}} секунд",
      pluralGenitive: "{{count}} секунд"
    },
    past: {
      singularNominative: "{{count}} секунд бұрын",
      singularGenitive: "{{count}} секунд бұрын",
      pluralGenitive: "{{count}} секунд бұрын"
    },
    future: {
      singularNominative: "{{count}} секундтан кейін",
      singularGenitive: "{{count}} секундтан кейін",
      pluralGenitive: "{{count}} секундтан кейін"
    }
  },
  halfAMinute: (i) => i?.addSuffix ? i.comparison && i.comparison > 0 ? "жарты минут ішінде" : "жарты минут бұрын" : "жарты минут",
  lessThanXMinutes: {
    regular: {
      one: "1 минуттан аз",
      singularNominative: "{{count}} минуттан аз",
      singularGenitive: "{{count}} минуттан аз",
      pluralGenitive: "{{count}} минуттан аз"
    },
    future: {
      one: "минуттан кем ",
      singularNominative: "{{count}} минуттан кем",
      singularGenitive: "{{count}} минуттан кем",
      pluralGenitive: "{{count}} минуттан кем"
    }
  },
  xMinutes: {
    regular: {
      singularNominative: "{{count}} минут",
      singularGenitive: "{{count}} минут",
      pluralGenitive: "{{count}} минут"
    },
    past: {
      singularNominative: "{{count}} минут бұрын",
      singularGenitive: "{{count}} минут бұрын",
      pluralGenitive: "{{count}} минут бұрын"
    },
    future: {
      singularNominative: "{{count}} минуттан кейін",
      singularGenitive: "{{count}} минуттан кейін",
      pluralGenitive: "{{count}} минуттан кейін"
    }
  },
  aboutXHours: {
    regular: {
      singularNominative: "шамамен {{count}} сағат",
      singularGenitive: "шамамен {{count}} сағат",
      pluralGenitive: "шамамен {{count}} сағат"
    },
    future: {
      singularNominative: "шамамен {{count}} сағаттан кейін",
      singularGenitive: "шамамен {{count}} сағаттан кейін",
      pluralGenitive: "шамамен {{count}} сағаттан кейін"
    }
  },
  xHours: {
    regular: {
      singularNominative: "{{count}} сағат",
      singularGenitive: "{{count}} сағат",
      pluralGenitive: "{{count}} сағат"
    }
  },
  xDays: {
    regular: {
      singularNominative: "{{count}} күн",
      singularGenitive: "{{count}} күн",
      pluralGenitive: "{{count}} күн"
    },
    future: {
      singularNominative: "{{count}} күннен кейін",
      singularGenitive: "{{count}} күннен кейін",
      pluralGenitive: "{{count}} күннен кейін"
    }
  },
  aboutXWeeks: {
    type: "weeks",
    one: "шамамен 1 апта",
    other: "шамамен {{count}} апта"
  },
  xWeeks: {
    type: "weeks",
    one: "1 апта",
    other: "{{count}} апта"
  },
  aboutXMonths: {
    regular: {
      singularNominative: "шамамен {{count}} ай",
      singularGenitive: "шамамен {{count}} ай",
      pluralGenitive: "шамамен {{count}} ай"
    },
    future: {
      singularNominative: "шамамен {{count}} айдан кейін",
      singularGenitive: "шамамен {{count}} айдан кейін",
      pluralGenitive: "шамамен {{count}} айдан кейін"
    }
  },
  xMonths: {
    regular: {
      singularNominative: "{{count}} ай",
      singularGenitive: "{{count}} ай",
      pluralGenitive: "{{count}} ай"
    }
  },
  aboutXYears: {
    regular: {
      singularNominative: "шамамен {{count}} жыл",
      singularGenitive: "шамамен {{count}} жыл",
      pluralGenitive: "шамамен {{count}} жыл"
    },
    future: {
      singularNominative: "шамамен {{count}} жылдан кейін",
      singularGenitive: "шамамен {{count}} жылдан кейін",
      pluralGenitive: "шамамен {{count}} жылдан кейін"
    }
  },
  xYears: {
    regular: {
      singularNominative: "{{count}} жыл",
      singularGenitive: "{{count}} жыл",
      pluralGenitive: "{{count}} жыл"
    },
    future: {
      singularNominative: "{{count}} жылдан кейін",
      singularGenitive: "{{count}} жылдан кейін",
      pluralGenitive: "{{count}} жылдан кейін"
    }
  },
  overXYears: {
    regular: {
      singularNominative: "{{count}} жылдан астам",
      singularGenitive: "{{count}} жылдан астам",
      pluralGenitive: "{{count}} жылдан астам"
    },
    future: {
      singularNominative: "{{count}} жылдан астам",
      singularGenitive: "{{count}} жылдан астам",
      pluralGenitive: "{{count}} жылдан астам"
    }
  },
  almostXYears: {
    regular: {
      singularNominative: "{{count}} жылға жақын",
      singularGenitive: "{{count}} жылға жақын",
      pluralGenitive: "{{count}} жылға жақын"
    },
    future: {
      singularNominative: "{{count}} жылдан кейін",
      singularGenitive: "{{count}} жылдан кейін",
      pluralGenitive: "{{count}} жылдан кейін"
    }
  }
};
function t(i, e) {
  if (i.one && e === 1) return i.one;
  const u = e % 10, n = e % 100;
  return u === 1 && n !== 11 ? i.singularNominative.replace("{{count}}", String(e)) : u >= 2 && u <= 4 && (n < 10 || n > 20) ? i.singularGenitive.replace("{{count}}", String(e)) : i.pluralGenitive.replace("{{count}}", String(e));
}
const a = (i, e, u) => {
  const n = r[i];
  return typeof n == "function" ? n(u) : n.type === "weeks" ? e === 1 ? n.one : n.other.replace("{{count}}", String(e)) : u?.addSuffix ? u.comparison && u.comparison > 0 ? n.future ? t(n.future, e) : t(n.regular, e) + " кейін" : n.past ? t(n.past, e) : t(n.regular, e) + " бұрын" : t(n.regular, e);
};
export {
  a as formatDistance
};
