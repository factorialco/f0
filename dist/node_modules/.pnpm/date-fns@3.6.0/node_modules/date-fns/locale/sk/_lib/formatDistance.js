function c(t, e) {
  return e === 1 && t.one ? t.one : e >= 2 && e <= 4 && t.twoFour ? t.twoFour : t.other;
}
function r(t, e, o) {
  return c(t, e)[o].replace("{{count}}", String(e));
}
function p(t) {
  return ["lessThan", "about", "over", "almost"].filter(
    function(o) {
      return !!t.match(new RegExp("^" + o));
    }
  )[0];
}
function s(t) {
  let e = "";
  return t === "almost" && (e = "takmer"), t === "about" && (e = "približne"), e.length > 0 ? e + " " : "";
}
function i(t) {
  let e = "";
  return t === "lessThan" && (e = "menej než"), t === "over" && (e = "viac než"), e.length > 0 ? e + " " : "";
}
function f(t) {
  return t.charAt(0).toLowerCase() + t.slice(1);
}
const m = {
  xSeconds: {
    one: {
      present: "sekunda",
      past: "sekundou",
      future: "sekundu"
    },
    twoFour: {
      present: "{{count}} sekundy",
      past: "{{count}} sekundami",
      future: "{{count}} sekundy"
    },
    other: {
      present: "{{count}} sekúnd",
      past: "{{count}} sekundami",
      future: "{{count}} sekúnd"
    }
  },
  halfAMinute: {
    other: {
      present: "pol minúty",
      past: "pol minútou",
      future: "pol minúty"
    }
  },
  xMinutes: {
    one: {
      present: "minúta",
      past: "minútou",
      future: "minútu"
    },
    twoFour: {
      present: "{{count}} minúty",
      past: "{{count}} minútami",
      future: "{{count}} minúty"
    },
    other: {
      present: "{{count}} minút",
      past: "{{count}} minútami",
      future: "{{count}} minút"
    }
  },
  xHours: {
    one: {
      present: "hodina",
      past: "hodinou",
      future: "hodinu"
    },
    twoFour: {
      present: "{{count}} hodiny",
      past: "{{count}} hodinami",
      future: "{{count}} hodiny"
    },
    other: {
      present: "{{count}} hodín",
      past: "{{count}} hodinami",
      future: "{{count}} hodín"
    }
  },
  xDays: {
    one: {
      present: "deň",
      past: "dňom",
      future: "deň"
    },
    twoFour: {
      present: "{{count}} dni",
      past: "{{count}} dňami",
      future: "{{count}} dni"
    },
    other: {
      present: "{{count}} dní",
      past: "{{count}} dňami",
      future: "{{count}} dní"
    }
  },
  xWeeks: {
    one: {
      present: "týždeň",
      past: "týždňom",
      future: "týždeň"
    },
    twoFour: {
      present: "{{count}} týždne",
      past: "{{count}} týždňami",
      future: "{{count}} týždne"
    },
    other: {
      present: "{{count}} týždňov",
      past: "{{count}} týždňami",
      future: "{{count}} týždňov"
    }
  },
  xMonths: {
    one: {
      present: "mesiac",
      past: "mesiacom",
      future: "mesiac"
    },
    twoFour: {
      present: "{{count}} mesiace",
      past: "{{count}} mesiacmi",
      future: "{{count}} mesiace"
    },
    other: {
      present: "{{count}} mesiacov",
      past: "{{count}} mesiacmi",
      future: "{{count}} mesiacov"
    }
  },
  xYears: {
    one: {
      present: "rok",
      past: "rokom",
      future: "rok"
    },
    twoFour: {
      present: "{{count}} roky",
      past: "{{count}} rokmi",
      future: "{{count}} roky"
    },
    other: {
      present: "{{count}} rokov",
      past: "{{count}} rokmi",
      future: "{{count}} rokov"
    }
  }
}, d = (t, e, o) => {
  const n = p(t) || "", a = f(t.substring(n.length)), u = m[a];
  return o?.addSuffix ? o.comparison && o.comparison > 0 ? s(n) + "o " + i(n) + r(u, e, "future") : s(n) + "pred " + i(n) + r(u, e, "past") : s(n) + i(n) + r(u, e, "present");
};
export {
  d as formatDistance
};
