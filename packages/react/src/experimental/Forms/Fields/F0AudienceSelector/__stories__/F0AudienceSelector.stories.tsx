import type { Meta, StoryObj } from "@storybook/react-vite"
import { useMemo, useState } from "react"

import { F0Button } from "@/components/F0Button"
import { F0Dialog } from "@/components/dialog-alike/F0Dialog"
import { F0AudienceListItem } from "@/experimental/Lists/F0AudienceListItem"
import { Dropdown } from "@/experimental/Navigation/Dropdown"
import { ChevronDown } from "@/icons/app"
import { withSnapshot } from "@/lib/storybook-utils/parameters"

import { F0AudienceSelector } from "../index"
import {
  audienceEntityKey,
  type F0AudienceEntity,
  type F0AudienceOption,
  type F0AudienceSelectorProps,
} from "../types"
import {
  createAudienceAdapter,
  createInfiniteAudienceAdapter,
  employees,
  everyone,
  mapRecordToOption,
  suggestions,
  teams,
  type AudienceRecord,
} from "./mocks"

// Stable adapter instances so story re-renders never re-init the datasource
const DEFAULT_ADAPTER = createAudienceAdapter()
const SLOW_ADAPTER = createAudienceAdapter({ latencyMs: 1500 })
const EMPTY_ADAPTER = createAudienceAdapter({ results: [] })
const INFINITE_ADAPTER = createInfiniteAudienceAdapter()

const meta = {
  title: "Components/F0AudienceSelector",
  component: F0AudienceSelector,
  tags: ["experimental"],
  args: {
    label: "Share with people, teams & groups",
    source: { dataAdapter: createAudienceAdapter() },
    mapEntity: (record) => mapRecordToOption(record as AudienceRecord),
    value: [],
    onChange: () => {},
  },
  parameters: {
    docs: {
      description: {
        component:
          "Bulk selector for arbitrary people or groups of people (teams, legal entities, workplaces, roles, permission groups). Selected entities render as chips inside the field; groups are selected atomically. Data arrives through a narrowed data adapter that is never called with an empty query.",
      },
    },
  },
} satisfies Meta<typeof F0AudienceSelector>

export default meta
type Story = StoryObj<typeof meta>

const SelectorDemo = ({
  adapter,
  ...props
}: Partial<F0AudienceSelectorProps<AudienceRecord>> & {
  adapter?:
    | ReturnType<typeof createAudienceAdapter>
    | ReturnType<typeof createInfiniteAudienceAdapter>
}) => {
  const [value, setValue] = useState<F0AudienceEntity[]>([])
  const dataAdapter = adapter ?? DEFAULT_ADAPTER
  const source = useMemo(() => ({ dataAdapter }), [dataAdapter])

  return (
    <div className="max-w-[560px]">
      <F0AudienceSelector<AudienceRecord>
        label="Share with people, teams & groups"
        hideLabel
        placeholder="Search people, teams & groups"
        source={source}
        mapEntity={mapRecordToOption}
        value={value}
        onChange={setValue}
        {...props}
      />
    </div>
  )
}

export const Default: Story = {
  render: () => <SelectorDemo />,
}

export const WithSuggestions: Story = {
  render: () => <SelectorDemo suggestions={suggestions} />,
}

const CURRENT_USER_ID = employees[1].id // Marie Curie
const EXISTING_ACCESS = new Set([audienceEntityKey(employees[0])]) // Ada

export const DisabledReasons: Story = {
  render: () => (
    <SelectorDemo
      mapEntity={(record: AudienceRecord): F0AudienceOption => ({
        entity: record.entity,
        disabledReason:
          record.entity.kind === "individual" &&
          record.entity.id === CURRENT_USER_ID
            ? "That's you"
            : EXISTING_ACCESS.has(audienceEntityKey(record.entity))
              ? "Already has access"
              : undefined,
      })}
    />
  ),
}

const RoleTrailingDropdown = () => {
  const [role, setRole] = useState("Viewer")
  return (
    <Dropdown
      items={["Owner", "Editor", "Viewer"].map((label) => ({
        label,
        onClick: () => setRole(label),
      }))}
    >
      <F0Button
        variant="ghost"
        size="sm"
        label={role}
        icon={ChevronDown}
        iconPosition="right"
      />
    </Dropdown>
  )
}

export const WithTrailingRoleDropdown: Story = {
  render: () => <SelectorDemo trailing={<RoleTrailingDropdown />} />,
}

const WarningDemo = () => {
  const [value, setValue] = useState<F0AudienceEntity[]>([employees[2]])
  const source = useMemo(() => ({ dataAdapter: createAudienceAdapter() }), [])
  const outOfLine = value.filter(
    (entity) => entity.kind === "individual" && entity.id === employees[2].id
  )

  return (
    <div className="max-w-[560px]">
      <F0AudienceSelector<AudienceRecord>
        label="Share with people, teams & groups"
        hideLabel
        placeholder="Search people, teams & groups"
        source={source}
        mapEntity={mapRecordToOption}
        value={value}
        onChange={setValue}
        warning={
          outOfLine.length > 0
            ? {
                title: "Sharing outside your reporting line",
                description: `${outOfLine[0].name} isn't in your reporting line. They'll be able to view this confidential policy.`,
              }
            : undefined
        }
      />
    </div>
  )
}

export const WithWarning: Story = {
  render: () => <WarningDemo />,
}

export const LoadingAndEmptyStates: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <p className="mb-2 text-f1-foreground-secondary">
          Slow adapter (1.5s latency)
        </p>
        <SelectorDemo adapter={SLOW_ADAPTER} />
      </div>
      <div>
        <p className="mb-2 text-f1-foreground-secondary">
          Adapter with no results
        </p>
        <SelectorDemo adapter={EMPTY_ADAPTER} />
      </div>
    </div>
  ),
}

export const InfiniteScroll: Story = {
  render: () => <SelectorDemo adapter={INFINITE_ADAPTER} />,
}

const InsideDialogDemo = () => {
  const [isOpen, setIsOpen] = useState(true)
  return (
    <>
      <F0Button label="Share this policy" onClick={() => setIsOpen(true)} />
      <F0Dialog
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Share this policy"
      >
        <div className="flex flex-col gap-2 p-4">
          <SelectorDemo suggestions={suggestions} />
          <p className="text-f1-foreground-secondary">
            Escape closes only the dropdown while it is open; a second Escape
            closes the dialog.
          </p>
        </div>
      </F0Dialog>
    </>
  )
}

export const InsideDialog: Story = {
  render: () => <InsideDialogDemo />,
}

/**
 * The full share-dialog composition the CIAM ShareModal builds from this kit:
 * the selector (with a batch role dropdown and a Share button), the access
 * list rows (expandable groups) and a general-access footer.
 */
const ShareDialogRecipeDemo = () => {
  const [isOpen, setIsOpen] = useState(true)
  const [selection, setSelection] = useState<F0AudienceEntity[]>([])
  const [accessList, setAccessList] = useState<F0AudienceEntity[]>([
    employees[1],
    teams[0],
    employees[0],
  ])
  const source = useMemo(() => ({ dataAdapter: createAudienceAdapter() }), [])
  const accessKeys = new Set(accessList.map(audienceEntityKey))

  return (
    <>
      <F0Button label="Share this policy" onClick={() => setIsOpen(true)} />
      <F0Dialog
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Share this policy"
      >
        <div className="flex flex-col gap-2 p-4">
          <div className="flex items-start gap-2">
            <div className="min-w-0 flex-1">
              <F0AudienceSelector<AudienceRecord>
                label="Share with people, teams & groups"
                hideLabel
                placeholder="Search people, teams & groups"
                source={source}
                mapEntity={(record) => ({
                  entity: record.entity,
                  disabledReason: accessKeys.has(
                    audienceEntityKey(record.entity)
                  )
                    ? "Already has access"
                    : undefined,
                })}
                value={selection}
                onChange={setSelection}
                suggestions={suggestions}
                trailing={<RoleTrailingDropdown />}
              />
            </div>
            <F0Button
              label="Share"
              disabled={selection.length === 0}
              onClick={() => {
                setAccessList((current) => [...current, ...selection])
                setSelection([])
              }}
            />
          </div>
          <div className="flex flex-col">
            {accessList.map((entity, index) => (
              <F0AudienceListItem
                key={audienceEntityKey(entity)}
                entity={entity}
                isYou={index === 0}
                right={
                  index === 0 ? (
                    <span className="font-medium text-f1-foreground">
                      Owner
                    </span>
                  ) : (
                    <RoleTrailingDropdown />
                  )
                }
                members={
                  entity.kind !== "individual"
                    ? {
                        fetch: () =>
                          new Promise((resolve) =>
                            setTimeout(
                              () =>
                                resolve([
                                  {
                                    id: "m1",
                                    firstName: "Diego",
                                    lastName: "Hernández",
                                    subtitle: "Payroll Specialist",
                                  },
                                  {
                                    id: "m2",
                                    firstName: "Grace",
                                    lastName: "Hopper",
                                    subtitle: "Principal Engineer",
                                  },
                                ]),
                              600
                            )
                          ),
                        note: "New members in this group automatically gain access.",
                      }
                    : undefined
                }
              />
            ))}
          </div>
          <div className="border-0 border-t border-solid border-f1-border-secondary pt-2">
            <p className="text-sm font-medium text-f1-foreground-secondary">
              General access
            </p>
            <F0AudienceListItem
              entity={everyone}
              right={<RoleTrailingDropdown />}
            />
          </div>
        </div>
      </F0Dialog>
    </>
  )
}

export const ShareDialogRecipe: Story = {
  render: () => <ShareDialogRecipeDemo />,
}

/** Static variants consolidated for Chromatic visual-regression coverage. */
export const Snapshot: Story = {
  parameters: withSnapshot({}),
  render: () => (
    <div className="flex w-[560px] flex-col gap-4">
      <F0AudienceSelector<AudienceRecord>
        label="Empty"
        hideLabel
        placeholder="Search people, teams & groups"
        source={{ dataAdapter: DEFAULT_ADAPTER }}
        mapEntity={mapRecordToOption}
        value={[]}
        onChange={() => {}}
      />
      <F0AudienceSelector<AudienceRecord>
        label="With chips"
        hideLabel
        source={{ dataAdapter: DEFAULT_ADAPTER }}
        mapEntity={mapRecordToOption}
        value={[employees[0], teams[0]]}
        onChange={() => {}}
      />
      <F0AudienceSelector<AudienceRecord>
        label="With warning"
        hideLabel
        source={{ dataAdapter: DEFAULT_ADAPTER }}
        mapEntity={mapRecordToOption}
        value={[employees[2]]}
        onChange={() => {}}
        warning={{
          title: "Sharing outside your reporting line",
          description: "Alan Turing isn't in your reporting line.",
        }}
      />
    </div>
  ),
}
