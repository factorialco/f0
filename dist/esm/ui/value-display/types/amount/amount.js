import { NumberCell as e } from "../number/number.js";
//#region src/ui/value-display/types/amount/amount.tsx
var t = (t, n) => {
	let r = {
		symbolPosition: "right",
		symbol: "",
		...typeof t == "object" && "amount" in t ? t : { amount: t }
	};
	return e({
		...typeof t == "object" && "amount" in t ? t : {},
		number: r.amount,
		decimalPlaces: r.currency?.decimalPlaces,
		units: r.currency?.symbol,
		unitsPosition: r.currency?.symbolPosition
	}, n);
};
//#endregion
export { t as AmountCell };
