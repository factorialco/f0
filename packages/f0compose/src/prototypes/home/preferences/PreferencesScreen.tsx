import {
  F0AvatarCompany,
  F0Box,
  F0Button,
  F0Heading,
  F0Text,
} from "@factorialco/f0-react"
import {
  CardSelectableContainer,
  Input,
} from "@factorialco/f0-react/dist/experimental"
import { Pencil } from "@factorialco/f0-react/icons/app"
/** Ported from irene-mallafre/factorial-ai, f7405eb; see IMPORT.md.
 * Original sections and state operations retained; controls use real F0. */
import { useState } from "react"

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
      <F0AvatarCompany name={connector.name} size="sm" />
      <F0Box display="flex" flexDirection="column" grow minWidth="0">
        <F0Text content={connector.name} variant="label" />
        <F0Text content={connector.description} variant="description" />
      </F0Box>
      <F0Box shrink={false}>
        <F0Text
          content={connected ? "Connected" : "Not connected"}
          variant="description"
        />
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
          onClick={() => toggleConnection(connector.id)}
        />
      )}
    </F0Box>
  )
}

function Connections() {
  const prefs = usePreferences()
  const [url, setUrl] = useState("")
  const all = [...BUILT_IN_CONNECTORS, ...prefs.customConnectors]
  const submit = () => {
    addCustomConnector(url)
    setUrl("")
  }
  return (
    <F0Box display="flex" flexDirection="column" gap="lg" width="full">
      <SectionHeader
        title="Connections"
        description="MCP servers your work buddy can use to read from and act on other tools. Each one asks for your permission before its first action."
      />
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
  return (
    <div className="mx-auto flex w-[712px] max-w-full flex-col gap-8 px-4 pb-8 pt-2">
      <Connections />
      <SaveLocation />
      <Behaviour />
    </div>
  )
}
