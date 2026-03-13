import { render } from "@testing-library/react-native"
import React from "react"

import {
  F0Avatar,
  F0_AVATAR_SIZES,
  F0_AVATAR_ALERT_TYPES,
  F0_AVATAR_UTILITY_SIZES,
  F0_AVATAR_FLAG_SIZES,
  F0_AVATAR_MODULE_SIZES,
} from "../"
import { Calendar } from "../../../icons/app"

describe("F0Avatar", () => {
  let mathRandomSpy: jest.SpyInstance

  beforeEach(() => {
    mathRandomSpy = jest.spyOn(Math, "random").mockReturnValue(0.123456789)
  })

  afterEach(() => {
    mathRandomSpy.mockRestore()
  })

  it("exposes namespaced components", () => {
    expect(F0Avatar.Person).toBeDefined()
    expect(F0Avatar.Team).toBeDefined()
    expect(F0Avatar.Company).toBeDefined()
    expect(F0Avatar.Emoji).toBeDefined()
    expect(F0Avatar.File).toBeDefined()
    expect(F0Avatar.Icon).toBeDefined()
    expect(F0Avatar.Flag).toBeDefined()
    expect(F0Avatar.Alert).toBeDefined()
    expect(F0Avatar.Date).toBeDefined()
    expect(F0Avatar.Module).toBeDefined()
    expect(F0Avatar.List).toBeDefined()
  })

  describe("Person", () => {
    it("Snapshot - default size", () => {
      const { toJSON } = render(
        <F0Avatar.Person firstName="Jane" lastName="Doe" />
      )
      expect(toJSON()).toMatchSnapshot()
    })

    it("Snapshot - all sizes", () => {
      F0_AVATAR_SIZES.forEach((size) => {
        const { toJSON } = render(
          <F0Avatar.Person firstName="Jane" lastName="Doe" size={size} />
        )
        expect(toJSON()).toMatchSnapshot()
      })
    })

    it("Snapshot - with badge", () => {
      const { toJSON } = render(
        <F0Avatar.Person
          firstName="Jane"
          lastName="Doe"
          size="md"
          badge={{ type: "module", module: "home" }}
        />
      )
      expect(toJSON()).toMatchSnapshot()
    })

    it("Snapshot - deactivated", () => {
      const { toJSON } = render(
        <F0Avatar.Person
          firstName="Jane"
          lastName="Doe"
          size="md"
          deactivated
        />
      )
      expect(toJSON()).toMatchSnapshot()
    })

    it("Snapshot - with icon badge", () => {
      const { toJSON } = render(
        <F0Avatar.Person
          firstName="Jane"
          lastName="Doe"
          size="lg"
          badge={{ type: "positive", icon: Calendar }}
        />
      )
      expect(toJSON()).toMatchSnapshot()
    })
  })

  describe("Team", () => {
    it("Snapshot - default", () => {
      const { toJSON } = render(<F0Avatar.Team name="Engineering" />)
      expect(toJSON()).toMatchSnapshot()
    })

    it("Snapshot - with badge", () => {
      const { toJSON } = render(
        <F0Avatar.Team
          name="Design"
          size="md"
          badge={{ type: "module", module: "home" }}
        />
      )
      expect(toJSON()).toMatchSnapshot()
    })
  })

  describe("Company", () => {
    it("Snapshot - default", () => {
      const { toJSON } = render(<F0Avatar.Company name="Factorial" />)
      expect(toJSON()).toMatchSnapshot()
    })

    it("Snapshot - with badge", () => {
      const { toJSON } = render(
        <F0Avatar.Company
          name="Factorial"
          size="lg"
          badge={{ type: "positive", icon: Calendar }}
        />
      )
      expect(toJSON()).toMatchSnapshot()
    })
  })

  describe("Emoji", () => {
    it("Snapshot - all sizes", () => {
      F0_AVATAR_UTILITY_SIZES.forEach((size) => {
        const { toJSON } = render(<F0Avatar.Emoji emoji="peach" size={size} />)
        expect(toJSON()).toMatchSnapshot()
      })
    })
  })

  describe("File", () => {
    it("Snapshot - PDF", () => {
      const { toJSON } = render(
        <F0Avatar.File file={{ name: "report.pdf" }} size="md" />
      )
      expect(toJSON()).toMatchSnapshot()
    })

    it("Snapshot - DOC", () => {
      const { toJSON } = render(
        <F0Avatar.File file={{ name: "doc.docx" }} size="md" />
      )
      expect(toJSON()).toMatchSnapshot()
    })

    it("Snapshot - with badge", () => {
      const { toJSON } = render(
        <F0Avatar.File
          file={{ name: "report.pdf" }}
          size="lg"
          badge={{ type: "module", module: "documents" }}
        />
      )
      expect(toJSON()).toMatchSnapshot()
    })
  })

  describe("Icon", () => {
    it("Snapshot - all sizes", () => {
      F0_AVATAR_UTILITY_SIZES.forEach((size) => {
        const { toJSON } = render(<F0Avatar.Icon icon={Calendar} size={size} />)
        expect(toJSON()).toMatchSnapshot()
      })
    })
  })

  describe("Flag", () => {
    it("Snapshot - all sizes", () => {
      F0_AVATAR_FLAG_SIZES.forEach((size) => {
        const { toJSON } = render(<F0Avatar.Flag flag="ES" size={size} />)
        expect(toJSON()).toMatchSnapshot()
      })
    })

    it("renders with accessibility label", () => {
      const { toJSON } = render(<F0Avatar.Flag flag="FR" />)
      expect(toJSON()).toMatchSnapshot()
    })

    it("Snapshot - with module badge", () => {
      const { toJSON } = render(
        <F0Avatar.Flag
          flag="US"
          size="md"
          badge={{ type: "module", module: "home" }}
        />
      )
      expect(toJSON()).toMatchSnapshot()
    })

    it("Snapshot - with icon badge", () => {
      const { toJSON } = render(
        <F0Avatar.Flag
          flag="DE"
          size="lg"
          badge={{ type: "positive", icon: Calendar }}
        />
      )
      expect(toJSON()).toMatchSnapshot()
    })
  })

  describe("Alert", () => {
    it("Snapshot - all types at sm", () => {
      F0_AVATAR_ALERT_TYPES.forEach((alertType) => {
        const { toJSON } = render(
          <F0Avatar.Alert alertType={alertType} size="sm" />
        )
        expect(toJSON()).toMatchSnapshot()
      })
    })

    it("Snapshot - all types at lg", () => {
      F0_AVATAR_ALERT_TYPES.forEach((alertType) => {
        const { toJSON } = render(
          <F0Avatar.Alert alertType={alertType} size="lg" />
        )
        expect(toJSON()).toMatchSnapshot()
      })
    })
  })

  describe("Date", () => {
    it("Snapshot - default", () => {
      const { toJSON } = render(<F0Avatar.Date date={new Date(2025, 6, 10)} />)
      expect(toJSON()).toMatchSnapshot()
    })
  })

  describe("Module", () => {
    it("Snapshot - all sizes", () => {
      F0_AVATAR_MODULE_SIZES.forEach((size) => {
        const { toJSON } = render(<F0Avatar.Module module="home" size={size} />)
        expect(toJSON()).toMatchSnapshot()
      })
    })
  })

  describe("List", () => {
    it("Snapshot - person list", () => {
      const { toJSON } = render(
        <F0Avatar.List
          type="person"
          size="md"
          avatars={[
            { firstName: "Ana", lastName: "G" },
            { firstName: "Ben", lastName: "T" },
            { firstName: "Cai", lastName: "L" },
          ]}
          max={3}
        />
      )
      expect(toJSON()).toMatchSnapshot()
    })

    it("Snapshot - team list with overflow", () => {
      const { toJSON } = render(
        <F0Avatar.List
          type="team"
          size="sm"
          avatars={[
            { name: "Engineering" },
            { name: "Design" },
            { name: "Product" },
            { name: "Marketing" },
          ]}
          max={2}
        />
      )
      expect(toJSON()).toMatchSnapshot()
    })

    it("Snapshot - company list with remainingCount", () => {
      const { toJSON } = render(
        <F0Avatar.List
          type="company"
          size="md"
          avatars={[{ name: "Factorial" }, { name: "Google" }]}
          max={2}
          remainingCount={5}
        />
      )
      expect(toJSON()).toMatchSnapshot()
    })

    it("Snapshot - flag list", () => {
      const { toJSON } = render(
        <F0Avatar.List
          type="flag"
          size="xs"
          avatars={[{ flag: "ES" }, { flag: "FR" }, { flag: "DE" }]}
          max={3}
        />
      )
      expect(toJSON()).toMatchSnapshot()
    })

    it("Snapshot - file list", () => {
      const { toJSON } = render(
        <F0Avatar.List
          type="file"
          size="md"
          avatars={[
            { file: { name: "report.pdf" } },
            { file: { name: "data.xlsx" } },
          ]}
          max={2}
        />
      )
      expect(toJSON()).toMatchSnapshot()
    })
  })

  describe("Polymorphic root", () => {
    it("Snapshot - person via root", () => {
      const { toJSON } = render(
        <F0Avatar
          avatar={{ type: "person", firstName: "Ada", lastName: "L" }}
          size="md"
        />
      )
      expect(toJSON()).toMatchSnapshot()
    })

    it("Snapshot - company via root", () => {
      const { toJSON } = render(
        <F0Avatar avatar={{ type: "company", name: "Factorial" }} size="md" />
      )
      expect(toJSON()).toMatchSnapshot()
    })

    it("Snapshot - alert via root", () => {
      const { toJSON } = render(
        <F0Avatar avatar={{ type: "alert", alertType: "critical" }} size="md" />
      )
      expect(toJSON()).toMatchSnapshot()
    })

    it("Snapshot - flag with badge via root", () => {
      const { toJSON } = render(
        <F0Avatar
          avatar={{
            type: "flag",
            flag: "ES",
            badge: { type: "module", module: "home" },
          }}
          size="md"
        />
      )
      expect(toJSON()).toMatchSnapshot()
    })
  })
})
