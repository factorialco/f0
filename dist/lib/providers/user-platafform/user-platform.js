const a = async () => {
  if (navigator.userAgentData) {
    const t = (await navigator.userAgentData.getHighEntropyValues([
      "platform"
    ])).platform?.toLowerCase() || "";
    switch (!0) {
      case t.includes("mac"):
        return "mac";
      case t.includes("windows"):
        return "windows";
      case t.includes("linux"):
        return "linux";
      case navigator.userAgentData.mobile:
        return "mobile";
    }
  }
  const e = navigator.userAgent.toLowerCase();
  switch (!0) {
    case /mac|iphone|ipod|ipad/.test(e):
      return "mac";
    case /win/.test(e):
      return "windows";
    case /linux/.test(e):
      return "linux";
    case /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
      e
    ):
      return "mobile";
    default:
      return "unknown";
  }
};
export {
  a as detectPlatform
};
