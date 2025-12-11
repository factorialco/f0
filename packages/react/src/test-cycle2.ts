import { testCycle1Value } from "./test-cycle1"

export const testCycle2Value = 2

export const testCycle2 = () => {
  console.log(testCycle1Value)
}
