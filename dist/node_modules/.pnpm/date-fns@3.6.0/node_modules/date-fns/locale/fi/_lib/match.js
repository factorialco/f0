import { buildMatchFn as a } from "../../_lib/buildMatchFn.js";
import { buildMatchPatternFn as t } from "../../_lib/buildMatchPatternFn.js";
const e = /^(\d+)(\.)/i, n = /\d+/i, r = {
  narrow: /^(e|j)/i,
  abbreviated: /^(eaa.|jaa.)/i,
  wide: /^(ennen ajanlaskun alkua|jälkeen ajanlaskun alun)/i
}, s = {
  any: [/^e/i, /^j/i]
}, l = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234]\.? kvartaali/i
}, u = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, o = {
  narrow: /^[thmkeslj]/i,
  abbreviated: /^(tammi|helmi|maalis|huhti|touko|kesä|heinä|elo|syys|loka|marras|joulu)/i,
  wide: /^(tammikuu|helmikuu|maaliskuu|huhtikuu|toukokuu|kesäkuu|heinäkuu|elokuu|syyskuu|lokakuu|marraskuu|joulukuu)(ta)?/i
}, h = {
  narrow: [
    /^t/i,
    /^h/i,
    /^m/i,
    /^h/i,
    /^t/i,
    /^k/i,
    /^h/i,
    /^e/i,
    /^s/i,
    /^l/i,
    /^m/i,
    /^j/i
  ],
  any: [
    /^ta/i,
    /^hel/i,
    /^maa/i,
    /^hu/i,
    /^to/i,
    /^k/i,
    /^hei/i,
    /^e/i,
    /^s/i,
    /^l/i,
    /^mar/i,
    /^j/i
  ]
}, k = {
  narrow: /^[smtkpl]/i,
  short: /^(su|ma|ti|ke|to|pe|la)/i,
  abbreviated: /^(sunn.|maan.|tiis.|kesk.|torst.|perj.|la)/i,
  wide: /^(sunnuntai|maanantai|tiistai|keskiviikko|torstai|perjantai|lauantai)(na)?/i
}, m = {
  narrow: [/^s/i, /^m/i, /^t/i, /^k/i, /^t/i, /^p/i, /^l/i],
  any: [/^s/i, /^m/i, /^ti/i, /^k/i, /^to/i, /^p/i, /^l/i]
}, d = {
  narrow: /^(ap|ip|keskiyö|keskipäivä|aamupäivällä|iltapäivällä|illalla|yöllä)/i,
  any: /^(ap|ip|keskiyöllä|keskipäivällä|aamupäivällä|iltapäivällä|illalla|yöllä)/i
}, p = {
  any: {
    am: /^ap/i,
    pm: /^ip/i,
    midnight: /^keskiyö/i,
    noon: /^keskipäivä/i,
    morning: /aamupäivällä/i,
    afternoon: /iltapäivällä/i,
    evening: /illalla/i,
    night: /yöllä/i
  }
}, y = {
  ordinalNumber: t({
    matchPattern: e,
    parsePattern: n,
    valueCallback: (i) => parseInt(i, 10)
  }),
  era: a({
    matchPatterns: r,
    defaultMatchWidth: "wide",
    parsePatterns: s,
    defaultParseWidth: "any"
  }),
  quarter: a({
    matchPatterns: l,
    defaultMatchWidth: "wide",
    parsePatterns: u,
    defaultParseWidth: "any",
    valueCallback: (i) => i + 1
  }),
  month: a({
    matchPatterns: o,
    defaultMatchWidth: "wide",
    parsePatterns: h,
    defaultParseWidth: "any"
  }),
  day: a({
    matchPatterns: k,
    defaultMatchWidth: "wide",
    parsePatterns: m,
    defaultParseWidth: "any"
  }),
  dayPeriod: a({
    matchPatterns: d,
    defaultMatchWidth: "any",
    parsePatterns: p,
    defaultParseWidth: "any"
  })
};
export {
  y as match
};
