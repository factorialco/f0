import { useL10n as e } from "../../providers/l10n/l10n-provider.js";
import { normalizeNumericWithFormatter as t } from "../utils/normalizeValueWithFormatter.js";
import { useCallback as n } from "react";
//#region src/lib/numeric/hooks/useNormalizeNumericValueWithFormatter.ts
var r = () => {
	let { locale: r } = e();
	return n((e, n) => t(e, {
		...n,
		formatterOptions: {
			locale: r,
			...n?.formatterOptions
		}
	}), [r]);
};
//#endregion
export { r as useNormalizeNumericValueWithFormatter };
