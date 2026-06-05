import { buildLocalizeFn as e } from "../../_lib/buildLocalizeFn.js";
const r = {
  narrow: ["BC", "AC"],
  abbreviated: ["きげんぜん", "せいれき"],
  wide: ["きげんぜん", "せいれき"]
}, i = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["だい1しはんき", "だい2しはんき", "だい3しはんき", "だい4しはんき"]
}, o = {
  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
  abbreviated: [
    "1がつ",
    "2がつ",
    "3がつ",
    "4がつ",
    "5がつ",
    "6がつ",
    "7がつ",
    "8がつ",
    "9がつ",
    "10がつ",
    "11がつ",
    "12がつ"
  ],
  wide: [
    "1がつ",
    "2がつ",
    "3がつ",
    "4がつ",
    "5がつ",
    "6がつ",
    "7がつ",
    "8がつ",
    "9がつ",
    "10がつ",
    "11がつ",
    "12がつ"
  ]
}, d = {
  narrow: ["にち", "げつ", "か", "すい", "もく", "きん", "ど"],
  short: ["にち", "げつ", "か", "すい", "もく", "きん", "ど"],
  abbreviated: ["にち", "げつ", "か", "すい", "もく", "きん", "ど"],
  wide: [
    "にちようび",
    "げつようび",
    "かようび",
    "すいようび",
    "もくようび",
    "きんようび",
    "どようび"
  ]
}, u = {
  narrow: {
    am: "ごぜん",
    pm: "ごご",
    midnight: "しんや",
    noon: "しょうご",
    morning: "あさ",
    afternoon: "ごご",
    evening: "よる",
    night: "しんや"
  },
  abbreviated: {
    am: "ごぜん",
    pm: "ごご",
    midnight: "しんや",
    noon: "しょうご",
    morning: "あさ",
    afternoon: "ごご",
    evening: "よる",
    night: "しんや"
  },
  wide: {
    am: "ごぜん",
    pm: "ごご",
    midnight: "しんや",
    noon: "しょうご",
    morning: "あさ",
    afternoon: "ごご",
    evening: "よる",
    night: "しんや"
  }
}, m = {
  narrow: {
    am: "ごぜん",
    pm: "ごご",
    midnight: "しんや",
    noon: "しょうご",
    morning: "あさ",
    afternoon: "ごご",
    evening: "よる",
    night: "しんや"
  },
  abbreviated: {
    am: "ごぜん",
    pm: "ごご",
    midnight: "しんや",
    noon: "しょうご",
    morning: "あさ",
    afternoon: "ごご",
    evening: "よる",
    night: "しんや"
  },
  wide: {
    am: "ごぜん",
    pm: "ごご",
    midnight: "しんや",
    noon: "しょうご",
    morning: "あさ",
    afternoon: "ごご",
    evening: "よる",
    night: "しんや"
  }
}, s = (a, t) => {
  const n = Number(a);
  switch (String(t?.unit)) {
    case "year":
      return `${n}ねん`;
    case "quarter":
      return `だい${n}しはんき`;
    case "month":
      return `${n}がつ`;
    case "week":
      return `だい${n}しゅう`;
    case "date":
      return `${n}にち`;
    case "hour":
      return `${n}じ`;
    case "minute":
      return `${n}ふん`;
    case "second":
      return `${n}びょう`;
    default:
      return `${n}`;
  }
}, h = {
  ordinalNumber: s,
  era: e({
    values: r,
    defaultWidth: "wide"
  }),
  quarter: e({
    values: i,
    defaultWidth: "wide",
    argumentCallback: (a) => Number(a) - 1
  }),
  month: e({
    values: o,
    defaultWidth: "wide"
  }),
  day: e({
    values: d,
    defaultWidth: "wide"
  }),
  dayPeriod: e({
    values: u,
    defaultWidth: "wide",
    formattingValues: m,
    defaultFormattingWidth: "wide"
  })
};
export {
  h as localize
};
