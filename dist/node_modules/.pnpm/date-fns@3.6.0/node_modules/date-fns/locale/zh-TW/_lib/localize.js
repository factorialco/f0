import { buildLocalizeFn as e } from "../../_lib/buildLocalizeFn.js";
const i = {
  narrow: ["前", "公元"],
  abbreviated: ["前", "公元"],
  wide: ["公元前", "公元"]
}, o = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["第一刻", "第二刻", "第三刻", "第四刻"],
  wide: ["第一刻鐘", "第二刻鐘", "第三刻鐘", "第四刻鐘"]
}, r = {
  narrow: [
    "一",
    "二",
    "三",
    "四",
    "五",
    "六",
    "七",
    "八",
    "九",
    "十",
    "十一",
    "十二"
  ],
  abbreviated: [
    "1月",
    "2月",
    "3月",
    "4月",
    "5月",
    "6月",
    "7月",
    "8月",
    "9月",
    "10月",
    "11月",
    "12月"
  ],
  wide: [
    "一月",
    "二月",
    "三月",
    "四月",
    "五月",
    "六月",
    "七月",
    "八月",
    "九月",
    "十月",
    "十一月",
    "十二月"
  ]
}, d = {
  narrow: ["日", "一", "二", "三", "四", "五", "六"],
  short: ["日", "一", "二", "三", "四", "五", "六"],
  abbreviated: ["週日", "週一", "週二", "週三", "週四", "週五", "週六"],
  wide: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
}, m = {
  narrow: {
    am: "上",
    pm: "下",
    midnight: "凌晨",
    noon: "午",
    morning: "早",
    afternoon: "下午",
    evening: "晚",
    night: "夜"
  },
  abbreviated: {
    am: "上午",
    pm: "下午",
    midnight: "凌晨",
    noon: "中午",
    morning: "早晨",
    afternoon: "中午",
    evening: "晚上",
    night: "夜間"
  },
  wide: {
    am: "上午",
    pm: "下午",
    midnight: "凌晨",
    noon: "中午",
    morning: "早晨",
    afternoon: "中午",
    evening: "晚上",
    night: "夜間"
  }
}, u = {
  narrow: {
    am: "上",
    pm: "下",
    midnight: "凌晨",
    noon: "午",
    morning: "早",
    afternoon: "下午",
    evening: "晚",
    night: "夜"
  },
  abbreviated: {
    am: "上午",
    pm: "下午",
    midnight: "凌晨",
    noon: "中午",
    morning: "早晨",
    afternoon: "中午",
    evening: "晚上",
    night: "夜間"
  },
  wide: {
    am: "上午",
    pm: "下午",
    midnight: "凌晨",
    noon: "中午",
    morning: "早晨",
    afternoon: "中午",
    evening: "晚上",
    night: "夜間"
  }
}, g = (a, t) => {
  const n = Number(a);
  switch (t?.unit) {
    case "date":
      return n + "日";
    case "hour":
      return n + "時";
    case "minute":
      return n + "分";
    case "second":
      return n + "秒";
    default:
      return "第 " + n;
  }
}, l = {
  ordinalNumber: g,
  era: e({
    values: i,
    defaultWidth: "wide"
  }),
  quarter: e({
    values: o,
    defaultWidth: "wide",
    argumentCallback: (a) => a - 1
  }),
  month: e({
    values: r,
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
  l as localize
};
