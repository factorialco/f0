import { buildFormatLongFn as t } from "../../_lib/buildFormatLongFn.js";
const m = {
  full: "EEEE, MMMM do, yyyy",
  long: "MMMM do, yyyy",
  medium: "MMM d, yyyy",
  short: "yyyy-MM-dd"
}, a = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, o = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, e = {
  date: t({
    formats: m,
    defaultWidth: "full"
  }),
  time: t({
    formats: a,
    defaultWidth: "full"
  }),
  dateTime: t({
    formats: o,
    defaultWidth: "full"
  })
};
export {
  e as formatLong
};
