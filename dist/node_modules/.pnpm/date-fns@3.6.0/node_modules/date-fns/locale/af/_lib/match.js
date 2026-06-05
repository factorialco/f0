import { buildMatchFn as a } from "../../_lib/buildMatchFn.js";
import { buildMatchPatternFn as e } from "../../_lib/buildMatchPatternFn.js";
const i = /^(\d+)(ste|de)?/i, r = /\d+/i, n = {
  narrow: /^([vn]\.? ?C\.?)/,
  abbreviated: /^([vn]\. ?C\.?)/,
  wide: /^((voor|na) Christus)/
}, d = {
  any: [/^v/, /^n/]
}, s = {
  narrow: /^[1234]/i,
  abbreviated: /^K[1234]/i,
  wide: /^[1234](st|d)e kwartaal/i
}, o = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, m = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(Jan|Feb|Mrt|Apr|Mei|Jun|Jul|Aug|Sep|Okt|Nov|Dec)\.?/i,
  wide: /^(Januarie|Februarie|Maart|April|Mei|Junie|Julie|Augustus|September|Oktober|November|Desember)/i
}, u = {
  narrow: [
    /^J/i,
    /^F/i,
    /^M/i,
    /^A/i,
    /^M/i,
    /^J/i,
    /^J/i,
    /^A/i,
    /^S/i,
    /^O/i,
    /^N/i,
    /^D/i
  ],
  any: [
    /^Jan/i,
    /^Feb/i,
    /^Mrt/i,
    /^Apr/i,
    /^Mei/i,
    /^Jun/i,
    /^Jul/i,
    /^Aug/i,
    /^Sep/i,
    /^Okt/i,
    /^Nov/i,
    /^Dec/i
  ]
}, c = {
  narrow: /^[smdwv]/i,
  short: /^(So|Ma|Di|Wo|Do|Vr|Sa)/i,
  abbreviated: /^(Son|Maa|Din|Woe|Don|Vry|Sat)/i,
  wide: /^(Sondag|Maandag|Dinsdag|Woensdag|Donderdag|Vrydag|Saterdag)/i
}, h = {
  narrow: [/^S/i, /^M/i, /^D/i, /^W/i, /^D/i, /^V/i, /^S/i],
  any: [/^So/i, /^Ma/i, /^Di/i, /^Wo/i, /^Do/i, /^Vr/i, /^Sa/i]
}, P = {
  any: /^(vm|nm|middernag|(?:uur )?die (oggend|middag|aand))/i
}, l = {
  any: {
    am: /^vm/i,
    pm: /^nm/i,
    midnight: /^middernag/i,
    noon: /^middaguur/i,
    morning: /oggend/i,
    afternoon: /middag/i,
    evening: /laat middag/i,
    night: /aand/i
  }
}, b = {
  ordinalNumber: e({
    matchPattern: i,
    parsePattern: r,
    valueCallback: (t) => parseInt(t, 10)
  }),
  era: a({
    matchPatterns: n,
    defaultMatchWidth: "wide",
    parsePatterns: d,
    defaultParseWidth: "any"
  }),
  quarter: a({
    matchPatterns: s,
    defaultMatchWidth: "wide",
    parsePatterns: o,
    defaultParseWidth: "any",
    valueCallback: (t) => t + 1
  }),
  month: a({
    matchPatterns: m,
    defaultMatchWidth: "wide",
    parsePatterns: u,
    defaultParseWidth: "any"
  }),
  day: a({
    matchPatterns: c,
    defaultMatchWidth: "wide",
    parsePatterns: h,
    defaultParseWidth: "any"
  }),
  dayPeriod: a({
    matchPatterns: P,
    defaultMatchWidth: "any",
    parsePatterns: l,
    defaultParseWidth: "any"
  })
};
export {
  b as match
};
