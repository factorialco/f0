import { buildFormatLongFn as t } from "../../_lib/buildFormatLongFn.js";
const m = {
  full: "EEEE, dd MMMM yyyy",
  long: "dd MMMM yyyy",
  medium: "dd MMM yyyy",
  short: "dd/MM/yyyy"
}, d = {
  full: "HH:mm:ss zzzz",
  long: "HH:mm:ss z",
  medium: "HH:mm:ss",
  short: "H:mm"
}, o = {
  any: "{{date}} {{time}}"
}, s = {
  date: t({
    formats: m,
    defaultWidth: "full"
  }),
  time: t({
    formats: d,
    defaultWidth: "full"
  }),
  dateTime: t({
    formats: o,
    defaultWidth: "any"
  })
};
export {
  s as formatLong
};
