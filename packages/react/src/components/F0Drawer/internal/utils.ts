import { useMediaQuery } from "usehooks-ts"

export const useIsSmallScreen = () =>
  useMediaQuery("(max-width: 560px)", {
    initializeWithValue: false,
  })
