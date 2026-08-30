//#region src/lib/providers/user-platafform/user-platform.ts
var e = async () => {
	if (navigator.userAgentData) {
		let e = (await navigator.userAgentData.getHighEntropyValues(["platform"])).platform?.toLowerCase() || "";
		switch (!0) {
			case e.includes("mac"): return "mac";
			case e.includes("windows"): return "windows";
			case e.includes("linux"): return "linux";
			case navigator.userAgentData.mobile: return "mobile";
		}
	}
	let e = navigator.userAgent.toLowerCase();
	switch (!0) {
		case /mac|iphone|ipod|ipad/.test(e): return "mac";
		case /win/.test(e): return "windows";
		case /linux/.test(e): return "linux";
		case /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(e): return "mobile";
		default: return "unknown";
	}
};
//#endregion
export { e as detectPlatform };
