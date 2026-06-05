import { buildFormatLongFn as t } from "../../_lib/buildFormatLongFn.js";
const m = {
  full: "EEEE, d בMMMM y",
  long: "d בMMMM y",
  medium: "d בMMM y",
  short: "d.M.y"
}, e = {
  full: "H:mm:ss zzzz",
  long: "H:mm:ss z",
  medium: "H:mm:ss",
  short: "H:mm"
}, o = {
  full: "{{date}} 'בשעה' {{time}}",
  long: "{{date}} 'בשעה' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, a = {
  date: t({
    formats: m,
    defaultWidth: "full"
  }),
  time: t({
    formats: e,
    defaultWidth: "full"
  }),
  dateTime: t({
    formats: o,
    defaultWidth: "full"
  })
};
export {
  a as formatLong
};
