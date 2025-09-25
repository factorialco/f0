import { Platform } from "./types"

export const detectPlatform = async (): Promise<Platform> => {
  // In Chromium-based browsers we can use high accuracy User-Agent Client Hints API (https://developer.mozilla.org/en-US/docs/Web/API/User-Agent_Client_Hints_API)
  if (navigator.userAgentData) {
    const userAgentValues = await navigator.userAgentData.getHighEntropyValues([
      "platform",
    ])
    const platformString = userAgentValues.platform?.toLowerCase() || ""

    switch (true) {
      case platformString.includes("mac"):
        return "mac"
      case platformString.includes("windows"):
        return "windows"
      case platformString.includes("linux"):
        return "linux"
      case navigator.userAgentData.mobile:
        return "mobile"
    }
  }

  const userAgent = navigator.userAgent.toLowerCase()

  switch (true) {
    case /mac|iphone|ipod|ipad/.test(userAgent):
      return "mac"
    case /win/.test(userAgent):
      return "windows"
    case /linux/.test(userAgent):
      return "linux"
    case /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
      userAgent
    ):
      return "mobile"
    default:
      return "unknown"
  }
}
