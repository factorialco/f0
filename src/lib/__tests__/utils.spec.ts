import { cn, omitProps } from "../utils"

describe("utils", () => {
  describe("omitProps", () => {
    it("returns empty object when given empty object", () => {
      expect(omitProps({}, ["style"])).toEqual({})
    })

    it("returns all props when no keys to omit", () => {
      const props = { a: 1, b: 2, c: 3 }
      expect(omitProps(props, [])).toEqual(props)
    })

    it("omits single key", () => {
      const props = { a: 1, b: 2, style: { color: "red" } }
      expect(omitProps(props, ["style"])).toEqual({ a: 1, b: 2 })
    })

    it("omits multiple keys", () => {
      const props = { a: 1, style: { color: "red" }, className: "text-lg" }
      expect(omitProps(props, ["style", "className"])).toEqual({ a: 1 })
    })

    it("does not mutate original object", () => {
      const props = { a: 1, style: { color: "red" } }
      omitProps(props, ["style"])
      expect(props).toEqual({ a: 1, style: { color: "red" } })
    })

    it("works with readonly keys array (F0_TEXT_BANNED_PROPS pattern)", () => {
      const BANNED = ["style"] as const
      const props = { a: 1, style: { color: "red" } }
      expect(omitProps(props, BANNED)).toEqual({ a: 1 })
    })

    it("ignores keys that do not exist", () => {
      const props = { a: 1, b: 2 }
      expect(omitProps(props, ["style", "className"])).toEqual({ a: 1, b: 2 })
    })
  })

  describe("cn", () => {
    it("merges class names", () => {
      expect(cn("foo", "bar")).toContain("foo")
      expect(cn("foo", "bar")).toContain("bar")
    })
  })
})
