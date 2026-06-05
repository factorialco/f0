import { ZodIssueCode as a } from "../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/ZodError.js";
function i(m) {
  const { validation: r } = m.forms;
  return (e, n) => {
    switch (e.code) {
      case a.invalid_type:
        return e.received === "undefined" || e.received === "null" ? { message: r.required } : { message: r.invalidType };
      case a.invalid_string:
        if (e.validation === "email")
          return { message: r.string.email };
        if (e.validation === "url")
          return { message: r.string.url };
        break;
      case a.too_small:
        if (e.type === "string")
          return e.minimum === 1 ? { message: r.required } : {
            message: r.string.min.replace(
              "{{min}}",
              String(e.minimum)
            )
          };
        if (e.type === "number")
          return e.minimum === 0 && !e.inclusive ? { message: r.number.positive } : {
            message: r.number.min.replace(
              "{{min}}",
              String(e.minimum)
            )
          };
        if (e.type === "array")
          return {
            message: r.array.min.replace(
              "{{min}}",
              String(e.minimum)
            )
          };
        if (e.type === "date")
          return {
            message: r.date.min.replace(
              "{{min}}",
              String(e.minimum)
            )
          };
        break;
      case a.too_big:
        if (e.type === "string")
          return {
            message: r.string.max.replace(
              "{{max}}",
              String(e.maximum)
            )
          };
        if (e.type === "number")
          return e.maximum === 0 && !e.inclusive ? { message: r.number.negative } : {
            message: r.number.max.replace(
              "{{max}}",
              String(e.maximum)
            )
          };
        if (e.type === "array")
          return {
            message: r.array.max.replace(
              "{{max}}",
              String(e.maximum)
            )
          };
        if (e.type === "date")
          return {
            message: r.date.max.replace(
              "{{max}}",
              String(e.maximum)
            )
          };
        break;
      case a.invalid_date:
        return { message: r.date.invalid };
      case a.not_multiple_of:
        if (e.multipleOf === 1)
          return { message: r.number.integer };
        break;
      case a.invalid_literal:
        if (e.expected === !0)
          return { message: r.checkbox.mustBeChecked };
        break;
    }
    return { message: n.defaultError };
  };
}
export {
  i as createZodErrorMap
};
