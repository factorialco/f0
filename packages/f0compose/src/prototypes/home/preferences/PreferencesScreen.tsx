import {
  F0AvatarCompany,
  F0Box,
  F0Button,
  F0Heading,
  F0Text,
  StandardLayout,
} from "@factorialco/f0-react"
import {
  CardSelectableContainer,
  Input,
  Tabs,
  Page,
  PageHeader,
} from "@factorialco/f0-react/dist/experimental"
import { Comment, Pencil } from "@factorialco/f0-react/icons/app"
/** Ported from irene-mallafre/factorial-ai, f7405eb; see IMPORT.md.
 * Original sections and state operations retained; controls use real F0. */
import { useContext, useState } from "react"

import { AgentEntryContext } from "../AskFactorial"
import { startPolicyEditing } from "../one/conversationStore"
import {
  BUILT_IN_CONNECTORS,
  SAVE_LOCATIONS,
  addCustomConnector,
  removeCustomConnector,
  toggleConnection,
  updatePreferences,
  usePreferences,
  policyTextFor,
  type Connector,
} from "./state"

import googleLogo from "../onboarding/assets/google-drive.png"
import slackLogo from "../onboarding/assets/slack.svg"
import notionLogo from "../onboarding/assets/notion.svg"
import jiraLogo from "../onboarding/assets/jira.svg"
import githubLogo from "../onboarding/assets/github.svg"
import figmaLogo from "../onboarding/assets/figma.svg"

const connectorLogos: Record<string, string> = {
  "google-drive": googleLogo,
  slack: slackLogo,
  notion: notionLogo,
  jira: jiraLogo,
  github: githubLogo,
  figma: figmaLogo,
}

function SectionHeader({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <F0Box display="flex" flexDirection="column" gap="sm">
      <F0Heading content={title} variant="heading" />
      <F0Text content={description} variant="description" />
    </F0Box>
  )
}

function ConnectorRow({
  connector,
  connected,
  first,
}: {
  connector: Connector
  connected: boolean
  first: boolean
}) {
  return (
    <F0Box
      display="flex"
      alignItems="center"
      gap="lg"
      padding="md"
      borderTop={first ? "none" : "default"}
      borderColor="secondary"
    >
      <F0AvatarCompany
        name={connector.name}
        src={connectorLogos[connector.id]}
        size="sm"
      />
      <F0Box display="flex" flexDirection="column" grow minWidth="0">
        <F0Text content={connector.name} variant="label" />
        <F0Text content={connector.description} variant="description" />
      </F0Box>
      {connector.custom ? (
        <F0Button
          variant="ghost"
          size="sm"
          label="Remove"
          onClick={() => removeCustomConnector(connector.id)}
        />
      ) : (
        <F0Button
          variant={connected ? "ghost" : "outline"}
          size="sm"
          label={connected ? "Disconnect" : "Connect"}
          onClick={async () => {
            if (!connected)
              await new Promise<void>((resolve) => setTimeout(resolve, 1200))
            toggleConnection(connector.id)
          }}
        />
      )}
    </F0Box>
  )
}

export function Connections({ onboarding = false }: { onboarding?: boolean }) {
  const prefs = usePreferences()
  const [url, setUrl] = useState("")
  const all = onboarding
    ? BUILT_IN_CONNECTORS.filter((connector) => connector.id !== "figma")
    : [...BUILT_IN_CONNECTORS, ...prefs.customConnectors]
  const submit = () => {
    addCustomConnector(url)
    setUrl("")
  }
  return (
    <F0Box display="flex" flexDirection="column" gap="lg" width="full">
      {!onboarding && (
        <SectionHeader
          title="Connections"
          description="MCP servers your work buddy can use to read from and act on other tools. Each one asks for your permission before its first action."
        />
      )}
      <F0Box
        border="default"
        borderColor="secondary"
        borderRadius="md"
        background="primary"
        overflow="hidden"
      >
        {all.map((c, i) => (
          <ConnectorRow
            key={c.id}
            connector={c}
            connected={prefs.connected.includes(c.id)}
            first={i === 0}
          />
        ))}
        {!onboarding && (
          <F0Box
            display="flex"
            alignItems="center"
            gap="lg"
            padding="md"
            borderTop="default"
            borderColor="secondary"
          >
            <F0Box grow minWidth="0">
              <Input
                value={url}
                onChange={setUrl}
                label="MCP server URL"
                hideLabel
                placeholder="Add a custom MCP server, e.g. https://mcp.example.com/sse"
                onPressEnter={submit}
              />
            </F0Box>
            <F0Button
              variant="outline"
              size="sm"
              label="Add"
              disabled={url.trim().length === 0}
              onClick={submit}
            />
          </F0Box>
        )}
      </F0Box>
    </F0Box>
  )
}

function SaveLocation() {
  const prefs = usePreferences()
  return (
    <F0Box display="flex" flexDirection="column" gap="lg" width="full">
      <SectionHeader
        title="Files created by your work buddy"
        description="Files are always saved in Factorial Documents. Choose any additional destinations where you want a copy."
      />
      <CardSelectableContainer
        label="Save locations"
        multiple
        value={prefs.saveLocations}
        onChange={(value) => {
          updatePreferences({ saveLocations: value })
        }}
        items={SAVE_LOCATIONS.map((loc) => {
          const missing =
            loc.requires && !prefs.connected.includes(loc.requires)
          return {
            value: loc.id,
            title: loc.name,
            disabled: !!missing || loc.id === "factorial-documents",
            description:
              loc.id === "factorial-documents"
                ? "Always saved in your workspace."
                : missing
                  ? `Connect ${loc.name} above to use it.`
                  : loc.description,
          }
        })}
      />
    </F0Box>
  )
}

function Behaviour() {
  const prefs = usePreferences()
  return (
    <F0Box display="flex" flexDirection="column" gap="xl" width="full">
      <F0Box
        display="flex"
        alignItems="center"
        justifyContent="between"
        gap="lg"
      >
        <F0Heading content="Personal agent memory" variant="heading" />
        <F0Button
          label="Edit"
          icon={Pencil}
          variant="outline"
          size="sm"
          onClick={() => {
            startPolicyEditing()
            window.dispatchEvent(new Event("home-agent:open"))
          }}
        />
      </F0Box>
      {policyTextFor(prefs)
        .split(/\n\s*\n/)
        .map((paragraph, index) => (
          <F0Text key={index} content={paragraph} variant="body" />
        ))}
    </F0Box>
  )
}

export function PreferencesScreen() {
  const [tab, setTab] = useState("connections")
  const one = useContext(AgentEntryContext)
  return (
    <Page
      header={
        <>
          <div data-home-preferences-header>
            <PageHeader
              module={{ id: "home", name: "Home", href: "/p/home" }}
              breadcrumbs={[{ id: "preferences", label: "Preferences" }]}
              actions={[{ label: "Ask One", icon: Comment, onClick: one.open }]}
            />
          </div>
          <Tabs
            secondary={false}
            activeTabId={tab}
            tabs={[
              {
                id: "connections",
                label: "Connections",
                onClick: () => setTab("connections"),
              },
              {
                id: "memory",
                label: "Memory",
                onClick: () => setTab("memory"),
              },
              {
                id: "settings",
                label: "Settings",
                onClick: () => setTab("settings"),
              },
            ]}
          />
        </>
      }
    >
      <StandardLayout variant="narrow">
        {tab === "connections" && <Connections />}
        {tab === "memory" && <Behaviour />}
        {tab === "settings" && <SaveLocation />}
      </StandardLayout>
    </Page>
  )
}
