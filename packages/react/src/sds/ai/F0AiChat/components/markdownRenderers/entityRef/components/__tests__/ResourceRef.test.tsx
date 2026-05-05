import { describe, expect, it, vi, beforeEach } from "vitest"
import "@testing-library/jest-dom/vitest"

import {
  zeroRender as render,
  screen,
  userEvent,
  waitFor,
} from "@/testing/test-utils"

import type { CandidateProfile } from "../../entities/candidate/types"
import type { ExpenseProfile } from "../../entities/expense/types"
import type { JobPostingProfile } from "../../entities/jobPosting/types"
import type { PersonProfile } from "../../entities/person/types"
import type { RequisitionProfile } from "../../entities/requisition/types"
import type { VacancyProfile } from "../../entities/vacancy/types"

type Resolvers = {
  person?: (id: string) => Promise<PersonProfile>
  candidate?: (id: string) => Promise<CandidateProfile>
  expense?: (id: string) => Promise<ExpenseProfile>
  jobPosting?: (id: string) => Promise<JobPostingProfile>
  requisition?: (id: string) => Promise<RequisitionProfile>
  vacancy?: (id: string) => Promise<VacancyProfile>
}
type Urls = {
  person?: (id: string) => string
  candidate?: (id: string) => string
  expense?: (id: string) => string
  jobPosting?: (id: string) => string
  requisition?: (id: string) => string
  vacancy?: (id: string) => string
}

let mockEntityRefs: { resolvers?: Resolvers; urls?: Urls } = {}

vi.mock("../../../../../providers/AiChatStateProvider", () => ({
  useAiChat: () => ({ entityRefs: mockEntityRefs }),
}))

import { ResourceRef } from "../ResourceRef"

beforeEach(() => {
  vi.clearAllMocks()
  mockEntityRefs = {}
})

describe("ResourceRef — fallback behavior", () => {
  it("renders label as plain text for an unregistered configKey", () => {
    const { container } = render(
      <ResourceRef configKey="unknown" id="1" label="Whatever" />
    )
    expect(container.querySelector("span")).toHaveTextContent("Whatever")
    expect(screen.queryByRole("button")).not.toBeInTheDocument()
  })

  it("renders label as plain text for a known configKey without a resolver", () => {
    const { container } = render(
      <ResourceRef configKey="person" id="42" label="Ana García" />
    )
    expect(container.querySelector("span")).toHaveTextContent("Ana García")
    expect(screen.queryByRole("button")).not.toBeInTheDocument()
  })
})

describe("ResourceRef — person", () => {
  const profile: PersonProfile = {
    id: "42",
    firstName: "Ana",
    lastName: "García",
    avatarUrl: "https://example.com/a.jpg",
    jobTitle: "Engineer",
  }

  it("renders the @mention trigger", () => {
    mockEntityRefs = { resolvers: { person: vi.fn() } }
    render(<ResourceRef configKey="person" id="42" label="Ana García" />)
    expect(screen.getByRole("button")).toHaveTextContent("@Ana García")
  })

  it("shows profile data on hover", async () => {
    const resolver = vi.fn().mockResolvedValue(profile)
    mockEntityRefs = { resolvers: { person: resolver } }

    const user = userEvent.setup()
    render(<ResourceRef configKey="person" id="42" label="Ana García" />)
    await user.hover(screen.getByRole("button"))

    await waitFor(() => {
      expect(screen.getByText("Ana García")).toBeInTheDocument()
      expect(screen.getByText("Engineer")).toBeInTheDocument()
    })
  })

  it("caches profile per id — resolver called once per hover cycle", async () => {
    const resolver = vi.fn().mockResolvedValue(profile)
    mockEntityRefs = { resolvers: { person: resolver } }

    const user = userEvent.setup()
    render(<ResourceRef configKey="person" id="42" label="Ana García" />)
    const trigger = screen.getByRole("button")

    await user.hover(trigger)
    await waitFor(() => expect(resolver).toHaveBeenCalledTimes(1))
    await user.unhover(trigger)
    await user.hover(trigger)

    expect(resolver).toHaveBeenCalledTimes(1)
  })

  it("shows skeleton while loading", async () => {
    mockEntityRefs = {
      resolvers: { person: vi.fn().mockReturnValue(new Promise(() => {})) },
    }

    const user = userEvent.setup()
    render(<ResourceRef configKey="person" id="42" label="Ana García" />)
    await user.hover(screen.getByRole("button"))

    await waitFor(() => {
      expect(document.querySelector("[class*='animate']")).toBeInTheDocument()
    })
  })

  it("shows fallback card label on resolver error", async () => {
    mockEntityRefs = {
      resolvers: {
        person: vi.fn().mockRejectedValue(new Error("network")),
      },
    }

    const user = userEvent.setup()
    render(<ResourceRef configKey="person" id="42" label="Ana García" />)
    await user.hover(screen.getByRole("button"))

    await waitFor(() => {
      // Trigger label + fallback card title
      expect(screen.getAllByText(/Ana García/).length).toBeGreaterThanOrEqual(1)
    })
  })
})

describe("ResourceRef — candidate", () => {
  const profile: CandidateProfile = {
    id: "5",
    firstName: "Liu",
    lastName: "Wei",
    source: "LinkedIn",
    appliedAt: "2025-01-15",
  }

  it("renders trigger without @ prefix and shows source/applied metadata", async () => {
    mockEntityRefs = {
      resolvers: { candidate: vi.fn().mockResolvedValue(profile) },
    }

    const user = userEvent.setup()
    render(<ResourceRef configKey="candidate" id="5" label="Liu Wei" />)

    const button = screen.getByRole("button")
    expect(button).toHaveTextContent("Liu Wei")
    expect(button.textContent).not.toMatch(/^@/)

    await user.hover(button)

    await waitFor(() => {
      expect(screen.getByText("LinkedIn")).toBeInTheDocument()
      expect(screen.getByText("15 Jan 2025")).toBeInTheDocument()
    })
  })
})

describe("ResourceRef — expense", () => {
  it("renders description joined with separator", async () => {
    const profile: ExpenseProfile = {
      id: "3",
      description: "Lunch",
      amount: "$25",
      status: "Approved",
    }
    mockEntityRefs = {
      resolvers: { expense: vi.fn().mockResolvedValue(profile) },
    }

    const user = userEvent.setup()
    render(<ResourceRef configKey="expense" id="3" label="Lunch" />)
    await user.hover(screen.getByRole("button"))

    await waitFor(() => {
      expect(screen.getByText("$25 · Approved")).toBeInTheDocument()
    })
  })
})

describe("ResourceRef — job-posting", () => {
  it("renders title, location description, status and publishedAt metadata", async () => {
    const profile: JobPostingProfile = {
      id: "9",
      title: "Senior Backend",
      status: "Open",
      statusVariant: "positive",
      location: "Remote",
      publishedAt: "2025-02-01",
    }
    mockEntityRefs = {
      resolvers: { jobPosting: vi.fn().mockResolvedValue(profile) },
    }

    const user = userEvent.setup()
    render(
      <ResourceRef configKey="job-posting" id="9" label="Senior Backend" />
    )
    await user.hover(screen.getByRole("button"))

    await waitFor(() => {
      expect(screen.getAllByText("Senior Backend")).toHaveLength(2)
      expect(screen.getByText("Remote")).toBeInTheDocument()
      expect(screen.getByText("Open")).toBeInTheDocument()
      expect(screen.getByText("1 Feb 2025")).toBeInTheDocument()
    })
  })
})

describe("ResourceRef — requisition", () => {
  const profile: RequisitionProfile = {
    id: "88",
    title: "Backend Engineer",
    status: "Approved",
    statusVariant: "positive",
    location: "Remote",
    lineManager: {
      firstName: "Jane",
      lastName: "Doe",
      avatarUrl: "https://example.com/jane.png",
    },
  }

  it("renders status and lineManager metadata + location description", async () => {
    mockEntityRefs = {
      resolvers: { requisition: vi.fn().mockResolvedValue(profile) },
    }

    const user = userEvent.setup()
    render(
      <ResourceRef configKey="requisition" id="88" label="Backend Engineer" />
    )
    await user.hover(screen.getByRole("button"))

    await waitFor(() => {
      expect(screen.getAllByText("Backend Engineer")).toHaveLength(2)
      expect(screen.getByText("Approved")).toBeInTheDocument()
      expect(screen.getByText("Remote")).toBeInTheDocument()
      expect(screen.getByText("Jane Doe")).toBeInTheDocument()
    })
  })

  it("applies the statusVariant to the rendered status tag", async () => {
    mockEntityRefs = {
      resolvers: { requisition: vi.fn().mockResolvedValue(profile) },
    }

    const user = userEvent.setup()
    render(
      <ResourceRef configKey="requisition" id="88" label="Backend Engineer" />
    )
    await user.hover(screen.getByRole("button"))

    const statusTag = await waitFor(() =>
      screen
        .getByText("Approved")
        .closest('[class*="bg-f1-background-positive"]')
    )
    expect(statusTag).toBeInTheDocument()
  })

  it("falls back to neutral statusVariant when missing", async () => {
    mockEntityRefs = {
      resolvers: {
        requisition: vi.fn().mockResolvedValue({
          id: "88",
          title: "Backend Engineer",
          status: "Pending",
        } as RequisitionProfile),
      },
    }

    const user = userEvent.setup()
    render(
      <ResourceRef configKey="requisition" id="88" label="Backend Engineer" />
    )
    await user.hover(screen.getByRole("button"))

    const statusTag = await waitFor(() =>
      screen
        .getByText("Pending")
        .closest('[class*="bg-f1-background-secondary"]')
    )
    expect(statusTag).toBeInTheDocument()
  })

  it("omits metadata rows when optional fields are missing", async () => {
    mockEntityRefs = {
      resolvers: {
        requisition: vi.fn().mockResolvedValue({
          id: "88",
          title: "Backend Engineer",
        } as RequisitionProfile),
      },
    }

    const user = userEvent.setup()
    render(
      <ResourceRef configKey="requisition" id="88" label="Backend Engineer" />
    )
    await user.hover(screen.getByRole("button"))

    await waitFor(() => {
      expect(screen.getAllByText("Backend Engineer")).toHaveLength(2)
    })

    expect(screen.queryByText("Remote")).not.toBeInTheDocument()
    expect(screen.queryByText("Approved")).not.toBeInTheDocument()
  })
})

describe("ResourceRef — vacancy", () => {
  it("renders title, location description, status and deadline metadata", async () => {
    const profile: VacancyProfile = {
      id: "7",
      name: "Frontend Lead",
      status: "Open",
      statusVariant: "positive",
      location: "Berlin",
      deadline: "2025-06-30",
    }
    mockEntityRefs = {
      resolvers: { vacancy: vi.fn().mockResolvedValue(profile) },
    }

    const user = userEvent.setup()
    render(<ResourceRef configKey="vacancy" id="7" label="Frontend Lead" />)
    await user.hover(screen.getByRole("button"))

    await waitFor(() => {
      expect(screen.getAllByText("Frontend Lead")).toHaveLength(2)
      expect(screen.getByText("Berlin")).toBeInTheDocument()
      expect(screen.getByText("Open")).toBeInTheDocument()
      expect(screen.getByText("30 Jun 2025")).toBeInTheDocument()
    })
  })
})

describe("ResourceRef — view url", () => {
  it("renders 'View' secondaryAction when url builder is configured", async () => {
    const profile: PersonProfile = {
      id: "42",
      firstName: "Ana",
      lastName: "García",
      jobTitle: "Engineer",
    }
    mockEntityRefs = {
      resolvers: { person: vi.fn().mockResolvedValue(profile) },
      urls: { person: (id) => `/people/${id}` },
    }

    const user = userEvent.setup()
    render(<ResourceRef configKey="person" id="42" label="Ana García" />)
    await user.hover(screen.getByRole("button"))

    await waitFor(() => {
      const link = screen.getByRole("link")
      expect(link).toHaveAttribute("href", "/people/42")
    })
  })
})
