import { isValidElement, type ReactElement } from "react"
import { describe, expect, test } from "vitest"

import { stripNativeTitle } from "./strip-native-title"

describe("stripNativeTitle", () => {
  test("removes the title attribute from an element that has one", () => {
    const result = stripNativeTitle(<button title="Save">Save</button>)
    expect(isValidElement(result)).toBe(true)
    expect((result as ReactElement).props.title).toBeUndefined()
  })

  test("promotes the title to aria-label when there is no accessible name", () => {
    const result = stripNativeTitle(<button title="Save">Save</button>)
    const props = (result as ReactElement).props
    expect(props.title).toBeUndefined()
    expect(props["aria-label"]).toBe("Save")
  })

  test("keeps an existing aria-label instead of overriding it", () => {
    const result = stripNativeTitle(
      <button title="Native tooltip" aria-label="Save the document">
        Save
      </button>
    )
    const props = (result as ReactElement).props
    expect(props.title).toBeUndefined()
    expect(props["aria-label"]).toBe("Save the document")
  })

  test("does not add aria-label when the child has aria-labelledby", () => {
    const result = stripNativeTitle(
      <button title="Native tooltip" aria-labelledby="label-id">
        Save
      </button>
    )
    const props = (result as ReactElement).props
    expect(props.title).toBeUndefined()
    expect(props["aria-label"]).toBeUndefined()
  })

  test("returns the same element when there is no title", () => {
    const element = <button>Save</button>
    expect(stripNativeTitle(element)).toBe(element)
  })

  test("returns the same element when title is null", () => {
    const element = <button title={undefined}>Save</button>
    expect(stripNativeTitle(element)).toBe(element)
  })

  test("preserves other props while stripping the title", () => {
    const result = stripNativeTitle(
      <button title="Save" aria-label="Save" disabled>
        Save
      </button>
    )
    const props = (result as ReactElement).props
    expect(props.title).toBeUndefined()
    expect(props["aria-label"]).toBe("Save")
    expect(props.disabled).toBe(true)
  })

  test("returns non-element children untouched", () => {
    expect(stripNativeTitle("plain text")).toBe("plain text")
    expect(stripNativeTitle(null)).toBe(null)
  })
})
