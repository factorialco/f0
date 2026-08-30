import { useMediaQuery as e } from "usehooks-ts";
//#region src/lib/useIsDesktop.ts
var t = () => e("(min-width: 640px)", { initializeWithValue: !1 }), n = () => e("(max-width: 639px)", { initializeWithValue: !1 });
//#endregion
export { t as useIsDesktop, n as useIsMobile };
