import { act, renderHook } from "@testing-library/react"
import { beforeEach, describe, expect, it } from "vitest"
import {
  LEGACY_SIDE_PANEL_LAYOUT_KEYS,
  LEGACY_SIDE_PANEL_OPEN_KEYS,
  LEGACY_SIDE_PANEL_VIEW_ID_KEYS,
  LEGACY_SIDE_PANEL_WIDTH_KEYS,
  SIDE_PANEL_LAYOUT_KEY,
  SIDE_PANEL_OPEN_KEY,
  SIDE_PANEL_VIEW_ID_KEY,
  SIDE_PANEL_WIDTH_KEY,
} from "../storage"
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

  /**
   * The mechanism above is exercised through `width`; what this covers is the
   * WIRING — that each of the four keys was actually paired with its own
   * predecessor. A rename typed into three of four places loses one preference
   * silently, and the one it loses is nobody's fault to find.
   */
  describe("every renamed key", () => {
    it.each([
      {
        name: "width",
        key: SIDE_PANEL_WIDTH_KEY,
        legacyKeys: LEGACY_SIDE_PANEL_WIDTH_KEYS,
        stored: "480",
        expected: 480,
      },
      {
        name: "open",
        key: SIDE_PANEL_OPEN_KEY,
        legacyKeys: LEGACY_SIDE_PANEL_OPEN_KEYS,
        stored: "true",
        expected: true,
      },
      {
        name: "layout",
        key: SIDE_PANEL_LAYOUT_KEY,
        legacyKeys: LEGACY_SIDE_PANEL_LAYOUT_KEYS,
        stored: '"fullscreen"',
        expected: "fullscreen",
      },
      {
        name: "view id",
        key: SIDE_PANEL_VIEW_ID_KEY,
        legacyKeys: LEGACY_SIDE_PANEL_VIEW_ID_KEYS,
        stored: '"communications"',
        expected: "communications",
      },
    ])(
      "carries the old $name over",
      ({ key, legacyKeys, stored, expected }) => {
        localStorage.setItem(legacyKeys[0], stored)

        const { result } = renderHook(() =>
          usePersistedState<unknown>({ key, legacyKeys, fallback: null })
        )

        expect(result.current[0]).toEqual(expected)
      }
    )

    /**
     * The layout key is the one rename that also narrows its values: it used to
     * be `visualization-mode`, which had a third state. `"canvas"` is not a
     * layout, so it must fall back rather than arrive as one.
     */
    it("refuses a visualization mode that was never a layout", () => {
      localStorage.setItem(LEGACY_SIDE_PANEL_LAYOUT_KEYS[0], '"canvas"')

      const { result } = renderHook(() =>
        usePersistedState<string>({
          key: SIDE_PANEL_LAYOUT_KEY,
          legacyKeys: LEGACY_SIDE_PANEL_LAYOUT_KEYS,
          fallback: "sidepanel",
          validate: (v): v is string => v === "sidepanel" || v === "fullscreen",
        })
      )

      expect(result.current[0]).toBe("sidepanel")
    })
  })
})
