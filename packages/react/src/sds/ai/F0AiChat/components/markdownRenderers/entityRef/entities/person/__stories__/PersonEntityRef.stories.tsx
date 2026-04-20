import type { Meta, StoryObj } from "@storybook/react-vite"

import { I18nProvider, defaultTranslations } from "@/lib/providers/i18n"

import type { EntityRefs } from "../../../../../../types"
import { AiChatStateProvider } from "../../../../../../providers/AiChatStateProvider"
import { PersonEntityRef } from "../PersonEntityRef"
import type { PersonProfile } from "../types"

const fullProfile: PersonProfile = {
  id: "42",
  firstName: "Ana",
  lastName: "García",
  avatarUrl:
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=128&h=128&fit=crop",
  jobTitle: "Staff Software Engineer",
  managerId: "99",
  managerFirstName: "Marta",
  managerLastName: "Ruiz",
}

const minimalProfile: PersonProfile = {
  id: "43",
  firstName: "Leandro",
  lastName: "Bechtelar",
  jobTitle: "Product Designer",
}

const makeEntityRefs = (profile: PersonProfile, delayMs = 200): EntityRefs => ({
  resolvers: {
    person: (id: string) =>
      new Promise((resolve) => {
        setTimeout(() => resolve({ ...profile, id }), delayMs)
      }),
  },
  urls: {
    person: (id: string) => `https://app.factorialhr.com/employees/${id}`,
  },
})

type StoryArgs = {
  profile: PersonProfile
  includeResolver: boolean
  rejectResolver: boolean
  neverResolves: boolean
}

const Wrapper = ({
  profile,
  includeResolver,
  rejectResolver,
  neverResolves,
}: StoryArgs) => {
  let entityRefs: EntityRefs | undefined

  if (includeResolver) {
    if (rejectResolver) {
      entityRefs = {
        resolvers: {
          person: () => Promise.reject(new Error("Network error")),
        },
      }
    } else if (neverResolves) {
      entityRefs = {
        resolvers: {
          person: () => new Promise(() => {}),
        },
      }
    } else {
      entityRefs = makeEntityRefs(profile)
    }
  }

  return (
    <I18nProvider translations={defaultTranslations}>
      <AiChatStateProvider enabled entityRefs={entityRefs}>
        <div className="p-12">
          <p className="text-f1-foreground">
            Hover the mention:{" "}
            <PersonEntityRef
              id={String(profile.id)}
              label={`${profile.firstName} ${profile.lastName}`}
            />
          </p>
        </div>
      </AiChatStateProvider>
    </I18nProvider>
  )
}

const meta: Meta<typeof Wrapper> = {
  title: "AI/EntityRef/PersonEntityRef",
  component: Wrapper,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    profile: fullProfile,
    includeResolver: true,
    rejectResolver: false,
    neverResolves: false,
  },
}

export default meta
type Story = StoryObj<typeof Wrapper>

export const Default: Story = {}

export const MinimalProfile: Story = {
  args: {
    profile: minimalProfile,
  },
}

export const Loading: Story = {
  args: {
    neverResolves: true,
  },
}

export const Error: Story = {
  args: {
    rejectResolver: true,
  },
}

export const NoResolver: Story = {
  args: {
    includeResolver: false,
  },
}
