import { render } from "@testing-library/react-native"
import React from "react"

import { F0Image } from "../"

describe("F0Image", () => {
  it("renders with a remote source", () => {
    const { getByTestId } = render(
      <F0Image
        source={{ uri: "https://example.com/avatar.png" }}
        testID="f0-image"
      />
    )

    expect(getByTestId("f0-image")).toBeTruthy()
  })

  it("applies sane defaults", () => {
    const { getByTestId } = render(
      <F0Image
        source={{ uri: "https://example.com/defaults.png" }}
        testID="f0-image-defaults"
      />
    )
    const image = getByTestId("f0-image-defaults")

    expect(image.props.contentFit).toBe("cover")
    expect(image.props.transition).toBe(150)
    expect(image.props.cachePolicy).toBe("memory-disk")
  })

  it("accepts className overrides", () => {
    const { getByTestId } = render(
      <F0Image
        source={{ uri: "https://example.com/classname.png" }}
        className="h-8 w-8 rounded-full"
        testID="f0-image-classname"
      />
    )
    const image = getByTestId("f0-image-classname")

    expect(image.props.className).toContain("h-8")
    expect(image.props.className).toContain("w-8")
    expect(image.props.className).toContain("rounded-full")
  })
})
