import { buildMatchFn as a } from "../../_lib/buildMatchFn.js";
import { buildMatchPatternFn as i } from "../../_lib/buildMatchPatternFn.js";
const e = /^(\d+)(чи)?/i, r = /\d+/i, n = {
  narrow: /^(м\.а|м\.)/i,
  abbreviated: /^(м\.а|м\.)/i,
  wide: /^(милоддан аввал|милоддан кейин)/i
}, s = {
  any: [/^м/i, /^а/i]
}, d = {
  narrow: /^[1234]/i,
  abbreviated: /^[1234]-чор./i,
  wide: /^[1234]-чорак/i
}, o = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, h = {
  narrow: /^[яфмамииасонд]/i,
  abbreviated: /^(янв|фев|мар|апр|май|июн|июл|авг|сен|окт|ноя|дек)/i,
  wide: /^(январ|феврал|март|апрел|май|июн|июл|август|сентабр|октабр|ноябр|декабр)/i
}, c = {
  narrow: [
    /^я/i,
    /^ф/i,
    /^м/i,
    /^а/i,
    /^м/i,
    /^и/i,
    /^и/i,
    /^а/i,
    /^с/i,
    /^о/i,
    /^н/i,
    /^д/i
  ],
  any: [
    /^я/i,
    /^ф/i,
    /^мар/i,
    /^ап/i,
    /^май/i,
    /^июн/i,
    /^июл/i,
    /^ав/i,
    /^с/i,
    /^о/i,
    /^н/i,
    /^д/i
  ]
}, P = {
  narrow: /^[ядсчпжш]/i,
  short: /^(як|ду|се|чо|па|жу|ша)/i,
  abbreviated: /^(якш|душ|сеш|чор|пай|жум|шан)/i,
  wide: /^(якшанба|душанба|сешанба|чоршанба|пайшанба|жума|шанба)/i
}, m = {
  narrow: [/^я/i, /^д/i, /^с/i, /^ч/i, /^п/i, /^ж/i, /^ш/i],
  any: [/^як/i, /^ду/i, /^се/i, /^чор/i, /^пай/i, /^жу/i, /^шан/i]
}, l = {
  any: /^(п\.о\.|п\.к\.|ярим тун|пешиндан кейин|(эрталаб|пешиндан кейин|кечаси|тун))/i
}, u = {
  any: {
    am: /^п\.о\./i,
    pm: /^п\.к\./i,
    midnight: /^ярим тун/i,
    noon: /^пешиндан кейин/i,
    morning: /эрталаб/i,
    afternoon: /пешиндан кейин/i,
    evening: /кечаси/i,
    night: /тун/i
  }
}, b = {
  ordinalNumber: i({
    matchPattern: e,
    parsePattern: r,
    valueCallback: (t) => parseInt(t, 10)
  }),
  era: a({
    matchPatterns: n,
    defaultMatchWidth: "wide",
    parsePatterns: s,
    defaultParseWidth: "any"
  }),
  quarter: a({
    matchPatterns: d,
    defaultMatchWidth: "wide",
    parsePatterns: o,
    defaultParseWidth: "any",
    valueCallback: (t) => t + 1
  }),
  month: a({
    matchPatterns: h,
    defaultMatchWidth: "wide",
    parsePatterns: c,
    defaultParseWidth: "any"
  }),
  day: a({
    matchPatterns: P,
    defaultMatchWidth: "wide",
    parsePatterns: m,
    defaultParseWidth: "any"
  }),
  dayPeriod: a({
    matchPatterns: l,
    defaultMatchWidth: "any",
    parsePatterns: u,
    defaultParseWidth: "any"
  })
};
export {
  b as match
};
