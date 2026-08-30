import { describe, expect, it } from "vitest"

import { createReactExternalizationPlugins } from "./react-externalization"

describe("React externalization", () => {
  it("does not apply the library-only transform to Storybook builds", () => {
    expect(
      createReactExternalizationPlugins({ isStorybookBuild: true })
    ).toEqual([])
  })

  it("applies the transform to published library builds", () => {
    expect(
      createReactExternalizationPlugins({ isStorybookBuild: false })
    ).toHaveLength(1)
  })
})
