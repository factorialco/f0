import { buildMatchFn as a } from "../../_lib/buildMatchFn.js";
import { buildMatchPatternFn as i } from "../../_lib/buildMatchPatternFn.js";
const e = /^(\d+)\./i, r = /\d+/i, n = {
  narrow: /^(pr\.n\.e\.|AD)/i,
  abbreviated: /^(pr\.\s?Kr\.|po\.\s?Kr\.)/i,
  wide: /^(Prije Krista|prije nove ere|Poslije Krista|nova era)/i
}, s = {
  any: [/^pr/i, /^(po|nova)/i]
}, o = {
  narrow: /^[1234]/i,
  abbreviated: /^[1234]\.\s?kv\.?/i,
  wide: /^[1234]\. kvartal/i
}, d = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, p = {
  narrow: /^(10|11|12|[123456789])\./i,
  abbreviated: /^(sij|velj|(ožu|ozu)|tra|svi|lip|srp|kol|ruj|lis|stu|pro)/i,
  wide: /^((siječanj|siječnja|sijecanj|sijecnja)|(veljača|veljače|veljaca|veljace)|(ožujak|ožujka|ozujak|ozujka)|(travanj|travnja)|(svibanj|svibnja)|(lipanj|lipnja)|(srpanj|srpnja)|(kolovoz|kolovoza)|(rujan|rujna)|(listopad|listopada)|(studeni|studenog)|(prosinac|prosinca))/i
}, u = {
  narrow: [
    /1/i,
    /2/i,
    /3/i,
    /4/i,
    /5/i,
    /6/i,
    /7/i,
    /8/i,
    /9/i,
    /10/i,
    /11/i,
    /12/i
  ],
  abbreviated: [
    /^sij/i,
    /^velj/i,
    /^(ožu|ozu)/i,
    /^tra/i,
    /^svi/i,
    /^lip/i,
    /^srp/i,
    /^kol/i,
    /^ruj/i,
    /^lis/i,
    /^stu/i,
    /^pro/i
  ],
  wide: [
    /^sij/i,
    /^velj/i,
    /^(ožu|ozu)/i,
    /^tra/i,
    /^svi/i,
    /^lip/i,
    /^srp/i,
    /^kol/i,
    /^ruj/i,
    /^lis/i,
    /^stu/i,
    /^pro/i
  ]
}, c = {
  narrow: /^[npusčc]/i,
  short: /^(ned|pon|uto|sri|(čet|cet)|pet|sub)/i,
  abbreviated: /^(ned|pon|uto|sri|(čet|cet)|pet|sub)/i,
  wide: /^(nedjelja|ponedjeljak|utorak|srijeda|(četvrtak|cetvrtak)|petak|subota)/i
}, l = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, j = {
  any: /^(am|pm|ponoc|ponoć|(po)?podne|navecer|navečer|noću|poslije podne|ujutro)/i
}, h = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^pono/i,
    noon: /^pod/i,
    morning: /jutro/i,
    afternoon: /(poslije\s|po)+podne/i,
    evening: /(navece|naveče)/i,
    night: /(nocu|noću)/i
  }
}, m = {
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
    matchPatterns: o,
    defaultMatchWidth: "wide",
    parsePatterns: d,
    defaultParseWidth: "any",
    valueCallback: (t) => t + 1
  }),
  month: a({
    matchPatterns: p,
    defaultMatchWidth: "wide",
    parsePatterns: u,
    defaultParseWidth: "wide"
  }),
  day: a({
    matchPatterns: c,
    defaultMatchWidth: "wide",
    parsePatterns: l,
    defaultParseWidth: "any"
  }),
  dayPeriod: a({
    matchPatterns: j,
    defaultMatchWidth: "any",
    parsePatterns: h,
    defaultParseWidth: "any"
  })
};
export {
  m as match
};
