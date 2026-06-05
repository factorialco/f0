import { buildFormatLongFn as t } from "../../_lib/buildFormatLongFn.js";
const m = {
  full: "EEEE, d MMMM yyyy",
  long: "d MMMM yyyy",
  medium: "d MMM yyyy",
  short: "d/M/yyyy"
}, e = {
  full: "HH.mm.ss",
  long: "HH.mm.ss",
  medium: "HH.mm",
  short: "HH.mm"
}, o = {
  full: "{{date}} 'pukul' {{time}}",
  long: "{{date}} 'pukul' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, l = {
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
  l as formatLong
};
