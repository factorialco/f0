import { buildMatchFn as t } from "../../_lib/buildMatchFn.js";
import { buildMatchPatternFn as i } from "../../_lib/buildMatchPatternFn.js";
const e = /^(\d+)(-?[врмт][и])?/i, r = /\d+/i, n = {
  narrow: /^((пр)?н\.?\s?е\.?)/i,
  abbreviated: /^((пр)?н\.?\s?е\.?)/i,
  wide: /^(пред нашата ера|нашата ера)/i
}, s = {
  any: [/^п/i, /^н/i]
}, d = {
  narrow: /^[1234]/i,
  abbreviated: /^[1234](-?[врт]?и?)? кв.?/i,
  wide: /^[1234](-?[врт]?и?)? квартал/i
}, h = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, c = {
  narrow: /^[нпвсч]/i,
  short: /^(не|по|вт|ср|че|пе|са)/i,
  abbreviated: /^(нед|пон|вто|сре|чет|пет|саб)/i,
  wide: /^(недела|понеделник|вторник|среда|четврток|петок|сабота)/i
}, o = {
  narrow: [/^н/i, /^п/i, /^в/i, /^с/i, /^ч/i, /^п/i, /^с/i],
  any: [/^н[ед]/i, /^п[он]/i, /^вт/i, /^ср/i, /^ч[ет]/i, /^п[ет]/i, /^с[аб]/i]
}, P = {
  abbreviated: /^(јан|фев|мар|апр|мај|јун|јул|авг|сеп|окт|ноем|дек)/i,
  wide: /^(јануари|февруари|март|април|мај|јуни|јули|август|септември|октомври|ноември|декември)/i
}, m = {
  any: [
    /^ја/i,
    /^Ф/i,
    /^мар/i,
    /^ап/i,
    /^мај/i,
    /^јун/i,
    /^јул/i,
    /^ав/i,
    /^се/i,
    /^окт/i,
    /^но/i,
    /^де/i
  ]
}, l = {
  any: /^(претп|попл|полноќ|утро|пладне|вечер|ноќ)/i
}, u = {
  any: {
    am: /претпладне/i,
    pm: /попладне/i,
    midnight: /полноќ/i,
    noon: /напладне/i,
    morning: /наутро/i,
    afternoon: /попладне/i,
    evening: /навечер/i,
    night: /ноќе/i
  }
}, b = {
  ordinalNumber: i({
    matchPattern: e,
    parsePattern: r,
    valueCallback: (a) => parseInt(a, 10)
  }),
  era: t({
    matchPatterns: n,
    defaultMatchWidth: "wide",
    parsePatterns: s,
    defaultParseWidth: "any"
  }),
  quarter: t({
    matchPatterns: d,
    defaultMatchWidth: "wide",
    parsePatterns: h,
    defaultParseWidth: "any",
    valueCallback: (a) => a + 1
  }),
  month: t({
    matchPatterns: P,
    defaultMatchWidth: "wide",
    parsePatterns: m,
    defaultParseWidth: "any"
  }),
  day: t({
    matchPatterns: c,
    defaultMatchWidth: "wide",
    parsePatterns: o,
    defaultParseWidth: "any"
  }),
  dayPeriod: t({
    matchPatterns: l,
    defaultMatchWidth: "any",
    parsePatterns: u,
    defaultParseWidth: "any"
  })
};
export {
  b as match
};
