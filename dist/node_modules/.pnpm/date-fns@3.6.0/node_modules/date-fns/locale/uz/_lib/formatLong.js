import { buildFormatLongFn as t } from "../../_lib/buildFormatLongFn.js";
const m = {
  full: "EEEE, do MMMM, y",
  long: "do MMMM, y",
  medium: "d MMM, y",
  short: "dd/MM/yyyy"
}, o = {
  full: "h:mm:ss zzzz",
  long: "h:mm:ss z",
  medium: "h:mm:ss",
  short: "h:mm"
}, d = {
  any: "{{date}}, {{time}}"
}, s = {
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
    defaultWidth: "any"
  })
};
export {
  s as formatLong
};
