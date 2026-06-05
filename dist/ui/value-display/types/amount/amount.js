import { NumberCell as e } from "../number/number.js";
const m = (o, t) => {
  const n = {
    // if args is an object, use the amount from args, otherwise use the value
    ...typeof o == "object" && "amount" in o ? o : {
      amount: o
    }
  };
  return e(
    {
      ...typeof o == "object" && "amount" in o ? o : {},
      number: n.amount,
      decimalPlaces: n.currency?.decimalPlaces,
      units: n.currency?.symbol,
      unitsPosition: n.currency?.symbolPosition
    },
    t
  );
};
export {
  m as AmountCell
};
