import { buildLocalizeFn as e } from "../../_lib/buildLocalizeFn.js";
const o = {
  narrow: ["e.ə", "b.e"],
  abbreviated: ["e.ə", "b.e"],
  wide: ["eramızdan əvvəl", "bizim era"]
}, c = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["K1", "K2", "K3", "K4"],
  wide: ["1ci kvartal", "2ci kvartal", "3cü kvartal", "4cü kvartal"]
}, g = {
  narrow: ["Y", "F", "M", "A", "M", "İ", "İ", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Yan",
    "Fev",
    "Mar",
    "Apr",
    "May",
    "İyun",
    "İyul",
    "Avq",
    "Sen",
    "Okt",
    "Noy",
    "Dek"
  ],
  wide: [
    "Yanvar",
    "Fevral",
    "Mart",
    "Aprel",
    "May",
    "İyun",
    "İyul",
    "Avqust",
    "Sentyabr",
    "Oktyabr",
    "Noyabr",
    "Dekabr"
  ]
}, d = {
  narrow: ["B.", "B.e", "Ç.a", "Ç.", "C.a", "C.", "Ş."],
  short: ["B.", "B.e", "Ç.a", "Ç.", "C.a", "C.", "Ş."],
  abbreviated: ["Baz", "Baz.e", "Çər.a", "Çər", "Cüm.a", "Cüm", "Şə"],
  wide: [
    "Bazar",
    "Bazar ertəsi",
    "Çərşənbə axşamı",
    "Çərşənbə",
    "Cümə axşamı",
    "Cümə",
    "Şənbə"
  ]
}, m = {
  narrow: {
    am: "am",
    pm: "pm",
    midnight: "gecəyarı",
    noon: "gün",
    morning: "səhər",
    afternoon: "gündüz",
    evening: "axşam",
    night: "gecə"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "gecəyarı",
    noon: "gün",
    morning: "səhər",
    afternoon: "gündüz",
    evening: "axşam",
    night: "gecə"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "gecəyarı",
    noon: "gün",
    morning: "səhər",
    afternoon: "gündüz",
    evening: "axşam",
    night: "gecə"
  }
}, u = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "gecəyarı",
    noon: "gün",
    morning: "səhər",
    afternoon: "gündüz",
    evening: "axşam",
    night: "gecə"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "gecəyarı",
    noon: "gün",
    morning: "səhər",
    afternoon: "gündüz",
    evening: "axşam",
    night: "gecə"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "gecəyarı",
    noon: "gün",
    morning: "səhər",
    afternoon: "gündüz",
    evening: "axşam",
    night: "gecə"
  }
}, r = {
  1: "-inci",
  5: "-inci",
  8: "-inci",
  70: "-inci",
  80: "-inci",
  2: "-nci",
  7: "-nci",
  20: "-nci",
  50: "-nci",
  3: "-üncü",
  4: "-üncü",
  100: "-üncü",
  6: "-ncı",
  9: "-uncu",
  10: "-uncu",
  30: "-uncu",
  60: "-ıncı",
  90: "-ıncı"
}, s = (n) => {
  if (n === 0)
    return n + "-ıncı";
  const i = n % 10, a = n % 100 - i, t = n >= 100 ? 100 : null;
  return r[i] ? r[i] : r[a] ? r[a] : t !== null ? r[t] : "";
}, l = (n, i) => {
  const a = Number(n), t = s(a);
  return a + t;
}, h = {
  ordinalNumber: l,
  era: e({
    values: o,
    defaultWidth: "wide"
  }),
  quarter: e({
    values: c,
    defaultWidth: "wide",
    argumentCallback: (n) => n - 1
  }),
  month: e({
    values: g,
    defaultWidth: "wide"
  }),
  day: e({
    values: d,
    defaultWidth: "wide"
  }),
  dayPeriod: e({
    values: m,
    defaultWidth: "wide",
    formattingValues: u,
    defaultFormattingWidth: "wide"
  })
};
export {
  h as localize
};
