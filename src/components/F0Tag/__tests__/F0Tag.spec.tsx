import { fireEvent, render, screen } from "@testing-library/react-native"
import React from "react"
import { Text } from "react-native"

import {
  F0Tag,
  F0TagList,
  F0_TAG_ALERT_LEVELS,
  F0_TAG_STATUS_VARIANTS,
  f0TagDotColors,
} from "../"
import { AppIcons } from "../../../icons"
import { F0Icon } from "../../primitives/F0Icon"

describe("F0Tag", () => {
  it("exposes namespaced components", () => {
    expect(F0Tag.Dot).toBeDefined()
    expect(F0Tag.Raw).toBeDefined()
    expect(F0Tag.Alert).toBeDefined()
    expect(F0Tag.Status).toBeDefined()
    expect(F0Tag.Person).toBeDefined()
    expect(F0Tag.Team).toBeDefined()
    expect(F0Tag.Company).toBeDefined()
    expect(F0Tag.Balance).toBeDefined()
  })

  it("Snapshot - root composition", () => {
    const { toJSON } = render(
      <F0Tag
        left={<F0Icon icon={AppIcons.Home} size="sm" color="default" />}
        text="In review"
        right={<Text className="text-xs text-f0-foreground-secondary">Q1</Text>}
      />
    )
    expect(toJSON()).toMatchSnapshot()
  })

  it("Snapshot - dot colors", () => {
    f0TagDotColors.forEach((color) => {
      const { toJSON } = render(<F0Tag.Dot text={color} color={color} />)
      expect(toJSON()).toMatchSnapshot()
    })
  })

  it("Snapshot - custom dot color", () => {
    const { toJSON } = render(
      <F0Tag.Dot text="custom" customColor="hsl(216 90% 65%)" />
    )
    expect(toJSON()).toMatchSnapshot()
  })

  it("Snapshot - raw with icon", () => {
    const { toJSON } = render(<F0Tag.Raw text="home" icon={AppIcons.Home} />)
    expect(toJSON()).toMatchSnapshot()
  })

  it("Snapshot - alert levels", () => {
    F0_TAG_ALERT_LEVELS.forEach((level) => {
      const { toJSON } = render(<F0Tag.Alert text={level} level={level} />)
      expect(toJSON()).toMatchSnapshot()
    })
  })

  it("Snapshot - status variants", () => {
    F0_TAG_STATUS_VARIANTS.forEach((variant) => {
      const { toJSON } = render(
        <F0Tag.Status text={variant} variant={variant} />
      )
      expect(toJSON()).toMatchSnapshot()
    })
  })

  it("Snapshot - person, team and company variants", () => {
    const { toJSON: personSnapshot } = render(<F0Tag.Person name="Jane Doe" />)
    expect(personSnapshot()).toMatchSnapshot()

    const { toJSON: teamSnapshot } = render(<F0Tag.Team name="People Ops" />)
    expect(teamSnapshot()).toMatchSnapshot()

    const { toJSON: companySnapshot } = render(
      <F0Tag.Company name="Factorial" />
    )
    expect(companySnapshot()).toMatchSnapshot()
  })

  it("Snapshot - balance variants", () => {
    const { toJSON: positiveSnapshot } = render(
      <F0Tag.Balance percentage={12} amount={102.35} />
    )
    expect(positiveSnapshot()).toMatchSnapshot()

    const { toJSON: negativeSnapshot } = render(
      <F0Tag.Balance percentage={-3} amount={209.8} />
    )
    expect(negativeSnapshot()).toMatchSnapshot()

    const { toJSON: nullSnapshot } = render(<F0Tag.Balance amount={null} />)
    expect(nullSnapshot()).toMatchSnapshot()
  })

  it("supports additional accessible text", () => {
    render(
      <F0Tag.Raw
        text="tag"
        additionalAccessibleText="tag context for screen readers"
      />
    )
    expect(screen.getByText("tag context for screen readers")).toBeDefined()
  })

  it("supports raw onlyIcon accessibility fallback", () => {
    render(<F0Tag.Raw text="only-icon-tag" icon={AppIcons.Home} onlyIcon />)
    expect(screen.queryByText("only-icon-tag")).toBeDefined()
  })

  it("handles press events in root component", () => {
    const onPress = jest.fn()

    render(<F0Tag text="Press me" onPress={onPress} />)
    fireEvent.press(screen.getByText("Press me"))

    expect(onPress).toHaveBeenCalledTimes(1)
  })

  it("renders list with overflow counter", () => {
    render(
      <F0TagList
        type="raw"
        max={2}
        tags={[{ text: "one" }, { text: "two" }, { text: "three" }]}
      />
    )

    expect(screen.getByText("one")).toBeDefined()
    expect(screen.getByText("two")).toBeDefined()
    expect(screen.getByText("+1")).toBeDefined()
  })
})
