import { Component as e } from "../../lib/component/component.js";
import { withDataTestId as t } from "../../lib/data-testid/index.js";
import { durationInputSizes as n, durationUnits as r } from "./types.js";
import { fieldsToSeconds as i, secondsToFields as a, secondsToVisibleFields as o } from "./utils.js";
import { F0DurationInput as s } from "./F0DurationInput.js";
//#region src/components/F0DurationInput/index.tsx
var c = t(e({
	name: "F0DurationInput",
	type: "form"
}, s));
//#endregion
export { c as F0DurationInput, n as durationInputSizes, r as durationUnits, i as fieldsToSeconds, a as secondsToFields, o as secondsToVisibleFields };
