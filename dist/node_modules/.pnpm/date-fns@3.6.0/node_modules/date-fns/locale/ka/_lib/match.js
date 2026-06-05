import { buildMatchFn as a } from "../../_lib/buildMatchFn.js";
import { buildMatchPatternFn as e } from "../../_lib/buildMatchPatternFn.js";
const i = /^(\d+)(-ლი|-ე)?/i, r = /\d+/i, n = {
  narrow: /^(ჩვ?\.წ)/i,
  abbreviated: /^(ჩვ?\.წ)/i,
  wide: /^(ჩვენს წელთაღრიცხვამდე|ქრისტეშობამდე|ჩვენი წელთაღრიცხვით|ქრისტეშობიდან)/i
}, s = {
  any: [
    /^(ჩვენს წელთაღრიცხვამდე|ქრისტეშობამდე)/i,
    /^(ჩვენი წელთაღრიცხვით|ქრისტეშობიდან)/i
  ]
}, d = {
  narrow: /^[1234]/i,
  abbreviated: /^[1234]-(ლი|ე)? კვ/i,
  wide: /^[1234]-(ლი|ე)? კვარტალი/i
}, h = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, c = {
  any: /^(ია|თე|მა|აპ|მს|ვნ|ვლ|აგ|სე|ოქ|ნო|დე)/i
}, o = {
  any: [
    /^ია/i,
    /^თ/i,
    /^მარ/i,
    /^აპ/i,
    /^მაი/i,
    /^ი?ვნ/i,
    /^ი?ვლ/i,
    /^აგ/i,
    /^ს/i,
    /^ო/i,
    /^ნ/i,
    /^დ/i
  ]
}, P = {
  narrow: /^(კვ|ორ|სა|ოთ|ხუ|პა|შა)/i,
  short: /^(კვი|ორშ|სამ|ოთხ|ხუთ|პარ|შაბ)/i,
  wide: /^(კვირა|ორშაბათი|სამშაბათი|ოთხშაბათი|ხუთშაბათი|პარასკევი|შაბათი)/i
}, m = {
  any: [/^კვ/i, /^ორ/i, /^სა/i, /^ოთ/i, /^ხუ/i, /^პა/i, /^შა/i]
}, l = {
  any: /^([ap]\.?\s?m\.?|შუაღ|დილ)/i
}, u = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^შუაღ/i,
    noon: /^შუადღ/i,
    morning: /^დილ/i,
    afternoon: /ნაშუადღევს/i,
    evening: /საღამო/i,
    night: /ღამ/i
  }
}, f = {
  ordinalNumber: e({
    matchPattern: i,
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
    parsePatterns: h,
    defaultParseWidth: "any",
    valueCallback: (t) => t + 1
  }),
  month: a({
    matchPatterns: c,
    defaultMatchWidth: "any",
    parsePatterns: o,
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
  f as match
};
