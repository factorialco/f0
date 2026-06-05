import { buildLocalizeFn as n } from "../../_lib/buildLocalizeFn.js";
const r = {
  narrow: ["R", "A"],
  abbreviated: ["RC", "AD"],
  wide: ["ro Chrìosta", "anno domini"]
}, t = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["C1", "C2", "C3", "C4"],
  wide: [
    "a' chiad chairteal",
    "an dàrna cairteal",
    "an treas cairteal",
    "an ceathramh cairteal"
  ]
}, o = {
  narrow: ["F", "G", "M", "G", "C", "Ò", "I", "L", "S", "D", "S", "D"],
  abbreviated: [
    "Faoi",
    "Gear",
    "Màrt",
    "Gibl",
    "Cèit",
    "Ògmh",
    "Iuch",
    "Lùn",
    "Sult",
    "Dàmh",
    "Samh",
    "Dùbh"
  ],
  wide: [
    "Am Faoilleach",
    "An Gearran",
    "Am Màrt",
    "An Giblean",
    "An Cèitean",
    "An t-Ògmhios",
    "An t-Iuchar",
    "An Lùnastal",
    "An t-Sultain",
    "An Dàmhair",
    "An t-Samhain",
    "An Dùbhlachd"
  ]
}, d = {
  narrow: ["D", "L", "M", "C", "A", "H", "S"],
  short: ["Dò", "Lu", "Mà", "Ci", "Ar", "Ha", "Sa"],
  abbreviated: ["Did", "Dil", "Dim", "Dic", "Dia", "Dih", "Dis"],
  wide: [
    "Didòmhnaich",
    "Diluain",
    "Dimàirt",
    "Diciadain",
    "Diardaoin",
    "Dihaoine",
    "Disathairne"
  ]
}, h = {
  narrow: {
    am: "m",
    pm: "f",
    midnight: "m.o.",
    noon: "m.l.",
    morning: "madainn",
    afternoon: "feasgar",
    evening: "feasgar",
    night: "oidhche"
  },
  abbreviated: {
    am: "M.",
    pm: "F.",
    midnight: "meadhan oidhche",
    noon: "meadhan là",
    morning: "madainn",
    afternoon: "feasgar",
    evening: "feasgar",
    night: "oidhche"
  },
  wide: {
    am: "m.",
    pm: "f.",
    midnight: "meadhan oidhche",
    noon: "meadhan là",
    morning: "madainn",
    afternoon: "feasgar",
    evening: "feasgar",
    night: "oidhche"
  }
}, m = {
  narrow: {
    am: "m",
    pm: "f",
    midnight: "m.o.",
    noon: "m.l.",
    morning: "sa mhadainn",
    afternoon: "feasgar",
    evening: "feasgar",
    night: "air an oidhche"
  },
  abbreviated: {
    am: "M.",
    pm: "F.",
    midnight: "meadhan oidhche",
    noon: "meadhan là",
    morning: "sa mhadainn",
    afternoon: "feasgar",
    evening: "feasgar",
    night: "air an oidhche"
  },
  wide: {
    am: "m.",
    pm: "f.",
    midnight: "meadhan oidhche",
    noon: "meadhan là",
    morning: "sa mhadainn",
    afternoon: "feasgar",
    evening: "feasgar",
    night: "air an oidhche"
  }
}, s = (e) => {
  const a = Number(e), i = a % 100;
  if (i > 20 || i < 10)
    switch (i % 10) {
      case 1:
        return a + "d";
      case 2:
        return a + "na";
    }
  return i === 12 ? a + "na" : a + "mh";
}, g = {
  ordinalNumber: s,
  era: n({
    values: r,
    defaultWidth: "wide"
  }),
  quarter: n({
    values: t,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: n({
    values: o,
    defaultWidth: "wide"
  }),
  day: n({
    values: d,
    defaultWidth: "wide"
  }),
  dayPeriod: n({
    values: h,
    defaultWidth: "wide",
    formattingValues: m,
    defaultFormattingWidth: "wide"
  })
};
export {
  g as localize
};
