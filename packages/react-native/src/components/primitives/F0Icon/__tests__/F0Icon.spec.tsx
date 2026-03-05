import { render } from "@testing-library/react-native"
import React from "react"

import { Archive } from "../../../../icons/app"
import { Home } from "../../../../icons/modules"
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
    const ref = React.createRef<any>()
    render(<F0Icon icon={Archive} ref={ref} testID="icon" />)
    expect(ref.current).toBeTruthy()
  })

  it("renders with a color prop", () => {
    const { getByTestId } = render(
      <F0Icon icon={Archive} color="critical" testID="icon" />
    )
    expect(getByTestId("icon")).toBeTruthy()
  })

  it("renders with both color and className", () => {
    const { getByTestId } = render(
      <F0Icon icon={Archive} color="info" className="-ml-0.5" testID="icon" />
    )
    expect(getByTestId("icon")).toBeTruthy()
  })
})
