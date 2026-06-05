import { buildFormatLongFn as t } from "../../_lib/buildFormatLongFn.js";
const m = {
  // thứ Sáu, ngày 25 tháng 08 năm 2017
  full: "EEEE, 'ngày' d MMMM 'năm' y",
  // ngày 25 tháng 08 năm 2017
  long: "'ngày' d MMMM 'năm' y",
  // 25 thg 08 năm 2017
  medium: "d MMM 'năm' y",
  // 25/08/2017
  short: "dd/MM/y"
}, d = {
  full: "HH:mm:ss zzzz",
  long: "HH:mm:ss z",
  medium: "HH:mm:ss",
  short: "HH:mm"
}, e = {
  // thứ Sáu, ngày 25 tháng 08 năm 2017 23:25:59
  full: "{{date}} {{time}}",
  // ngày 25 tháng 08 năm 2017 23:25
  long: "{{date}} {{time}}",
  medium: "{{date}} {{time}}",
  short: "{{date}} {{time}}"
}, a = {
  date: t({
    formats: m,
    defaultWidth: "full"
  }),
  time: t({
    formats: d,
    defaultWidth: "full"
  }),
  dateTime: t({
    formats: e,
    defaultWidth: "full"
  })
};
export {
  a as formatLong
};
