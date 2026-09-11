import { act, renderHook } from "@testing-library/react"
import { beforeEach, describe, expect, it } from "vitest"
import { LEGACY_SIDE_PANEL_WIDTH_KEYS, SIDE_PANEL_WIDTH_KEY } from "../storage"
import { usePersistedState } from "../usePersistedState"

const LEGACY_KEY = LEGACY_SIDE_PANEL_WIDTH_KEYS[0]

const renderWidth = () =>
  renderHook(() =>
    usePersistedState<number>({
      key: SIDE_PANEL_WIDTH_KEY,
      legacyKeys: LEGACY_SIDE_PANEL_WIDTH_KEYS,
      fallback: 360,
      validate: (v): v is number => typeof v === "number",
    })
  )

/**
 * The panel's storage keys were renamed when it stopped belonging to the AI
 * chat. Nobody's width or open state may reset because of that.
 */
describe("side panel storage migration", () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it("adopts a value written under the old key", () => {
    localStorage.setItem(LEGACY_KEY, "480")

    const { result } = renderWidth()

    expect(result.current[0]).toBe(480)
  })

  it("prefers the new key when both exist", () => {
    localStorage.setItem(LEGACY_KEY, "480")
    localStorage.setItem(SIDE_PANEL_WIDTH_KEY, "520")

    const { result } = renderWidth()

    expect(result.current[0]).toBe(520)
  })

  it("falls through to the fallback when the old value is unusable", () => {
    localStorage.setItem(LEGACY_KEY, '"not a width"')

    const { result } = renderWidth()

    expect(result.current[0]).toBe(360)
  })

  // A rollback to an older build must still find its own key where it left it.
  it("writes only to the new key and leaves the old one intact", () => {
    localStorage.setItem(LEGACY_KEY, "480")
    const { result } = renderWidth()

    act(() => {
      result.current[1](500)
    })

    expect(localStorage.getItem(SIDE_PANEL_WIDTH_KEY)).toBe("500")
    expect(localStorage.getItem(LEGACY_KEY)).toBe("480")
  })
})
