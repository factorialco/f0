import { buildFormatLongFn as t } from "../../_lib/buildFormatLongFn.js";
const m = {
  full: "EEEE, do MMMM y 'р.'",
  long: "do MMMM y 'р.'",
  medium: "d MMM y 'р.'",
  short: "dd.MM.y"
}, o = {
  full: "H:mm:ss zzzz",
  long: "H:mm:ss z",
  medium: "H:mm:ss",
  short: "H:mm"
}, d = {
  full: "{{date}} 'о' {{time}}",
  long: "{{date}} 'о' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, a = {
  date: t({
    formats: m,
    defaultWidth: "full"
  }),
  time: t({
    formats: o,
    defaultWidth: "full"
  }),
  dateTime: t({
    formats: d,
    defaultWidth: "full"
  })
};
export {
  a as formatLong
};
