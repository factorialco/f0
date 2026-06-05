import { buildLocalizeFn as e } from "../../_lib/buildLocalizeFn.js";
const a = {
  locale: {
    1: "१",
    2: "२",
    3: "३",
    4: "४",
    5: "५",
    6: "६",
    7: "७",
    8: "८",
    9: "९",
    0: "०"
  },
  number: {
    "१": "1",
    "२": "2",
    "३": "3",
    "४": "4",
    "५": "5",
    "६": "6",
    "७": "7",
    "८": "8",
    "९": "9",
    "०": "0"
  }
}, i = {
  narrow: ["ईसा-पूर्व", "ईस्वी"],
  abbreviated: ["ईसा-पूर्व", "ईस्वी"],
  wide: ["ईसा-पूर्व", "ईसवी सन"]
}, r = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["ति1", "ति2", "ति3", "ति4"],
  wide: ["पहली तिमाही", "दूसरी तिमाही", "तीसरी तिमाही", "चौथी तिमाही"]
}, d = {
  narrow: [
    "ज",
    "फ़",
    "मा",
    "अ",
    "मई",
    "जू",
    "जु",
    "अग",
    "सि",
    "अक्टू",
    "न",
    "दि"
  ],
  abbreviated: [
    "जन",
    "फ़र",
    "मार्च",
    "अप्रैल",
    "मई",
    "जून",
    "जुल",
    "अग",
    "सित",
    "अक्टू",
    "नव",
    "दिस"
  ],
  wide: [
    "जनवरी",
    "फ़रवरी",
    "मार्च",
    "अप्रैल",
    "मई",
    "जून",
    "जुलाई",
    "अगस्त",
    "सितंबर",
    "अक्टूबर",
    "नवंबर",
    "दिसंबर"
  ]
}, m = {
  narrow: ["र", "सो", "मं", "बु", "गु", "शु", "श"],
  short: ["र", "सो", "मं", "बु", "गु", "शु", "श"],
  abbreviated: ["रवि", "सोम", "मंगल", "बुध", "गुरु", "शुक्र", "शनि"],
  wide: [
    "रविवार",
    "सोमवार",
    "मंगलवार",
    "बुधवार",
    "गुरुवार",
    "शुक्रवार",
    "शनिवार"
  ]
}, u = {
  narrow: {
    am: "पूर्वाह्न",
    pm: "अपराह्न",
    midnight: "मध्यरात्रि",
    noon: "दोपहर",
    morning: "सुबह",
    afternoon: "दोपहर",
    evening: "शाम",
    night: "रात"
  },
  abbreviated: {
    am: "पूर्वाह्न",
    pm: "अपराह्न",
    midnight: "मध्यरात्रि",
    noon: "दोपहर",
    morning: "सुबह",
    afternoon: "दोपहर",
    evening: "शाम",
    night: "रात"
  },
  wide: {
    am: "पूर्वाह्न",
    pm: "अपराह्न",
    midnight: "मध्यरात्रि",
    noon: "दोपहर",
    morning: "सुबह",
    afternoon: "दोपहर",
    evening: "शाम",
    night: "रात"
  }
}, l = {
  narrow: {
    am: "पूर्वाह्न",
    pm: "अपराह्न",
    midnight: "मध्यरात्रि",
    noon: "दोपहर",
    morning: "सुबह",
    afternoon: "दोपहर",
    evening: "शाम",
    night: "रात"
  },
  abbreviated: {
    am: "पूर्वाह्न",
    pm: "अपराह्न",
    midnight: "मध्यरात्रि",
    noon: "दोपहर",
    morning: "सुबह",
    afternoon: "दोपहर",
    evening: "शाम",
    night: "रात"
  },
  wide: {
    am: "पूर्वाह्न",
    pm: "अपराह्न",
    midnight: "मध्यरात्रि",
    noon: "दोपहर",
    morning: "सुबह",
    afternoon: "दोपहर",
    evening: "शाम",
    night: "रात"
  }
}, g = (n, o) => {
  const t = Number(n);
  return s(t);
};
function c(n) {
  const o = n.toString().replace(/[१२३४५६७८९०]/g, function(t) {
    return a.number[t];
  });
  return Number(o);
}
function s(n) {
  return n.toString().replace(/\d/g, function(o) {
    return a.locale[o];
  });
}
const h = {
  ordinalNumber: g,
  era: e({
    values: i,
    defaultWidth: "wide"
  }),
  quarter: e({
    values: r,
    defaultWidth: "wide",
    argumentCallback: (n) => n - 1
  }),
  month: e({
    values: d,
    defaultWidth: "wide"
  }),
  day: e({
    values: m,
    defaultWidth: "wide"
  }),
  dayPeriod: e({
    values: u,
    defaultWidth: "wide",
    formattingValues: l,
    defaultFormattingWidth: "wide"
  })
};
export {
  c as localeToNumber,
  h as localize,
  s as numberToLocale
};
