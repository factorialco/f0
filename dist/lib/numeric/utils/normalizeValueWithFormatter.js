import { numericFormatter as m } from "./numericFormatter.js";
import { toNumericValue as e } from "./toNumericValue.js";
const f = (r, t) => {
  if (r == null)
    return {
      numericValue: { value: void 0 },
      formatter: t?.formatter || m,
      formatterOptions: t?.formatterOptions || {}
    };
  const o = {
    formatter: t?.formatter || m,
    formatterOptions: t?.formatterOptions || {}
  };
  return typeof r == "number" ? { numericValue: { value: r }, ...o } : typeof r == "object" && r !== null && "numericValue" in r ? {
    numericValue: e(r.numericValue),
    formatter: r.formatter ? r.formatter : o.formatter,
    formatterOptions: {
      ...o.formatterOptions,
      ...r.formatterOptions
    }
  } : { ...o, numericValue: r };
};
export {
  f as normalizeNumericWithFormatter
};
