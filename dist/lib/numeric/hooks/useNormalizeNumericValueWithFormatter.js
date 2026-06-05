import { useCallback as o } from "react";
import { normalizeNumericWithFormatter as m } from "../utils/normalizeValueWithFormatter.js";
import { useL10n as a } from "../../providers/l10n/l10n-provider.js";
const n = () => {
  const { locale: r } = a();
  return o(
    (e, t) => m(e, {
      ...t,
      formatterOptions: {
        locale: r,
        ...t?.formatterOptions
      }
    }),
    [r]
  );
};
export {
  n as useNormalizeNumericValueWithFormatter
};
