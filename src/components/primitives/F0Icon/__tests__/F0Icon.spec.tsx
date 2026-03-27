import { render } from "@testing-library/react-native"
import React from "react"

import { Archive } from "../../../../icons/app"
import { Home } from "../../../../icons/modules"
import { applyIconInterop } from "../F0Icon"
import F0Icon from "../F0Icon"

describe("F0Icon", () => {
  it("renders correctly with an app icon", () => {
    const { getByTestId } = render(<F0Icon icon={Archive} testID="icon" />)
    expect(getByTestId("icon")).toBeTruthy()
  })

  it("renders correctly with a module icon", () => {
    const { getByTestId } = render(<F0Icon icon={Home} testID="icon" />)
    expect(getByTestId("icon")).toBeTruthy()
  })

  it("applies the correct size variant", () => {
    const { getByTestId } = render(
      <F0Icon icon={Archive} size="lg" testID="icon" />
    )
    expect(getByTestId("icon")).toBeTruthy()
  })

  it("returns null when no icon is provided", () => {
    // @ts-expect-error - Testing runtime behavior
    const { queryByTestId } = render(<F0Icon testID="icon" />)
    expect(queryByTestId("icon")).toBeNull()
  })

  it("applies default size when size prop is not provided", () => {
    const { getByTestId } = render(<F0Icon icon={Archive} testID="icon" />)
    expect(getByTestId("icon")).toBeTruthy()
  })

  it("forwards ref correctly", () => {
    const ref = React.createRef<React.ElementRef<typeof F0Icon>>()
    render(<F0Icon icon={Archive} ref={ref} testID="icon" />)
    expect(ref.current).toBeTruthy()
  })

  it("renders with a color prop", () => {
    const { getByTestId } = render(
      <F0Icon icon={Archive} color="critical" testID="icon" />
    )
    expect(getByTestId("icon")).toBeTruthy()
  })

  it("caches wrapped icon: applyIconInterop returns same instance for same icon", () => {
    const wrapped1 = applyIconInterop(Archive)
    const wrapped2 = applyIconInterop(Archive)
    expect(wrapped1).toBe(wrapped2)
  })

  it("caches per icon type: different icons return different wrapped instances", () => {
    const wrappedArchive = applyIconInterop(Archive)
    const wrappedHome = applyIconInterop(Home)
    expect(wrappedArchive).not.toBe(wrappedHome)
  })

  it("renders with both color and className", () => {
    const { getByTestId } = render(
      <F0Icon icon={Archive} color="info" className="-ml-0.5" testID="icon" />
    )
    expect(getByTestId("icon")).toBeTruthy()
  })

  describe("className — cn() merging", () => {
    it("passes through layout classes from className", () => {
      const { getByTestId } = render(
        <F0Icon icon={Archive} className="-ml-0.5" testID="icon" />
      )
      const element = getByTestId("icon")
      expect(element.props.className).toContain("-ml-0.5")
    })

    it("merges conflicting size: custom w-* overrides variant", () => {
      const { getByTestId } = render(
        <F0Icon icon={Archive} size="md" className="h-10 w-10" testID="icon" />
      )
      const element = getByTestId("icon")
      expect(element.props.className).toContain("w-10")
      expect(element.props.className).toContain("h-10")
      expect(element.props.className).not.toContain("w-5")
      expect(element.props.className).not.toContain("h-5")
    })

    it("merges conflicting color: custom text-* overrides variant", () => {
      const { getByTestId } = render(
        <F0Icon
          icon={Archive}
          color="critical"
          className="text-red-500"
          testID="icon"
        />
      )
      const element = getByTestId("icon")
      expect(element.props.className).toContain("text-red-500")
      expect(element.props.className).not.toContain("text-f0-icon-critical")
    })

    it("uses only variant classes when className is undefined", () => {
      const { getByTestId } = render(
        <F0Icon icon={Archive} size="sm" color="positive" testID="icon" />
      )
      const element = getByTestId("icon")
      expect(element.props.className).toContain("w-4")
      expect(element.props.className).toContain("h-4")
      expect(element.props.className).toContain("text-f0-icon-positive")
    })

    it("combines non-conflicting variant and className", () => {
      const { getByTestId } = render(
        <F0Icon
          icon={Archive}
          size="lg"
          color="info"
          className="opacity-50"
          testID="icon"
        />
      )
      const element = getByTestId("icon")
      expect(element.props.className).toContain("w-6")
      expect(element.props.className).toContain("h-6")
      expect(element.props.className).toContain("text-f0-icon-info")
      expect(element.props.className).toContain("opacity-50")
    })
  })
})
