import { describe, expect, test } from "vitest"
import { getInitials } from "../utils.ts"

describe("getInitials", () => {
  test("returns first two letters in uppercase from the name, if a string passed", () => {
    expect(getInitials("j")).eq("J")
    expect(getInitials("John")).eq("JO")
    expect(getInitials("John Doe", "md")).eq("JO")
    expect(getInitials("John Doe", "lg")).eq("JO")
  })

  test("returns first letter in uppercase from the name, if requested size is xs or sm", () => {
    expect(getInitials("John Doe", "sm")).eq("J")
    expect(getInitials("John Doe", "sm")).eq("J")
    expect(getInitials(["John"], "xs")).eq("J")
    expect(getInitials(["John", "Doe"], "xs")).eq("J")
  })

  test("returns first letter in uppercase from them name, if one element array is passed", () => {
    expect(getInitials(["John"])).eq("J")
  })

  test("returns a letter from the first two names if an array is passed", () => {
    expect(getInitials(["John", "Doe"])).eq("JD")
    expect(getInitials(["Daniel", "Moreno", "Roldán"])).eq("DM")
  })

  test("returns an empty string if name is an empty array or an empty string", () => {
    expect(getInitials("")).eq("")
    expect(getInitials([])).eq("")
    expect(getInitials([""], "xs")).eq("")
  })
})
