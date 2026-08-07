import { F0Box, F0Button, F0Heading, F0TagStatus, F0Text } from "@factorialco/f0-react"
import { Add, ArrowRight, Delete, Ellipsis, Pencil } from "@factorialco/f0-react/icons/app"
import { Dropdown, Switch } from "@factorialco/f0-react/dist/experimental"
import { strings } from "./state"

const ts = strings.trainingSettings

/**
 * A settings content block — the new Factorial settings layout (Settings → ONE):
 * a header (heading + description) STACKED on top, then the controls below at
 * full width. (Replaces the old `Section.TwoThirds` two-column split.)
 */
export function SectionRow({
  title,
  description,
  children,
}: {
  title: string
  description: string
  children: React.ReactNode
}) {
  return (
    <F0Box
      display="flex"
      flexDirection="column"
      gap="lg"
      maxWidth="150"
      paddingBottom="2xl"
    >
      <F0Box display="flex" flexDirection="column" gap="sm">
        <F0Heading variant="heading-large" as="h2" content={title} />
        <F0Text variant="description" content={description} />
      </F0Box>
      {children}
    </F0Box>
  )
}

/**
 * A bordered card holding a toggle: title + description on the left, Switch on
 * the right. Optionally `disabled` (e.g. capability not entitled) with a `badge`
 * slot below the description for an upsell tag/link.
 */
export function ToggleCard({
  title,
  description,
  checked,
  onChange,
  disabled,
  badge,
  listMode,
}: {
  title: string
  description?: string
  checked: boolean
  onChange: (v: boolean) => void
  disabled?: boolean
  badge?: React.ReactNode
  /** Renders without outer border/radius — for use inside a ToggleCardList container. */
  listMode?: boolean
}) {
  return (
    <F0Box
      border={listMode ? undefined : "default"}
      borderColor={listMode ? undefined : "secondary"}
      borderRadius={listMode ? undefined : "lg"}
      paddingY="md"
      paddingX="lg"
      maxWidth={listMode ? undefined : "150"}
      display="flex"
      flexDirection="row"
      justifyContent="between"
      alignItems="start"
      gap="lg"
    >
      <F0Box display="flex" flexDirection="column" gap="xs" alignItems="start">
        <F0Text variant="label" content={title} />
        {description && <F0Text variant="description" content={description} />}
        {badge}
      </F0Box>
      <Switch checked={checked} onCheckedChange={onChange} disabled={disabled} hideLabel title={title} />
    </F0Box>
  )
}

/** A bordered card with a description and a trailing action button (no toggle). */
export function ActionCard({
  title,
  description,
  actionLabel,
  onClick,
}: {
  title: string
  description: string
  actionLabel: string
  onClick: () => void
}) {
  return (
    <F0Box
      border="default"
      borderColor="secondary"
      borderRadius="lg"
      paddingY="md"
      paddingX="lg"
      maxWidth="150"
      display="flex"
      flexDirection="row"
      justifyContent="between"
      alignItems="center"
      gap="lg"
    >
      <F0Box display="flex" flexDirection="column" gap="xs">
        <F0Text variant="label" content={title} />
        <F0Text variant="body" content={description} />
      </F0Box>
      <F0Button label={actionLabel} icon={ArrowRight} variant="outline" onClick={onClick} />
    </F0Box>
  )
}

/** One FUNDAE mapping row — title + "map your fields" hint + a "Mapping needed" tag + arrow button. */
export function MapRow({ title, onConfigure, listMode }: { title: string; onConfigure: () => void; listMode?: boolean }) {
  return (
    <F0Box
      border={listMode ? undefined : "default"}
      borderColor={listMode ? undefined : "secondary"}
      borderRadius={listMode ? undefined : "lg"}
      paddingY="md"
      paddingX="lg"
      maxWidth={listMode ? undefined : "150"}
      display="flex"
      flexDirection="row"
      justifyContent="between"
      alignItems="center"
      gap="lg"
    >
      <F0Box display="flex" flexDirection="column" gap="xs" alignItems="start">
        <F0Text variant="label" content={title} />
        <F0Text variant="body" content={ts.fundaeMapDesc} />
        <F0TagStatus variant="critical" text={ts.fundaeMappingNeeded} />
      </F0Box>
      <F0Button label={ts.fundaeMapDesc} hideLabel icon={ArrowRight} variant="outline" onClick={onConfigure} />
    </F0Box>
  )
}

export type ListItem = { id: string; name: string; meta?: string; tag?: React.ReactNode }

/**
 * A settings taxonomy/template list — a title + "New …" action and a bordered
 * list of rows (name + optional meta + delete). Mirrors production's settings
 * managers (e.g. ATS TagManager / RejectionReasonsManager): a light managed
 * list, not a heavy data collection.
 */
export function SettingsList({
  title,
  description,
  addLabel,
  emptyLabel,
  items,
  onAdd,
  onDelete,
  onEdit,
  onDuplicate,
}: {
  title: string
  description: string
  addLabel: string
  emptyLabel: string
  items: ListItem[]
  onAdd: () => void
  onDelete: (id: string) => void
  onEdit?: (id: string) => void
  /** When provided, the row gets 3 actions (Edit · Duplicate · Delete) collapsed into a ⋮ menu. */
  onDuplicate?: (id: string) => void
}) {
  const ts = strings.trainingSettings
  return (
    <F0Box display="flex" flexDirection="column" gap="md" maxWidth="200">
      <F0Box display="flex" flexDirection="row" justifyContent="between" alignItems="start" gap="lg">
        <F0Box display="flex" flexDirection="column" gap="xs">
          <F0Heading variant="heading-large" as="h2" content={title} />
          <F0Text variant="description" content={description} />
        </F0Box>
        <F0Button label={addLabel} icon={Add} variant="outline" onClick={onAdd} />
      </F0Box>

      {items.length === 0 ? (
        <F0Box border="default" borderColor="secondary" borderRadius="lg" padding="xl">
          <F0Text variant="body" content={emptyLabel} />
        </F0Box>
      ) : (
        <F0Box border="default" borderColor="secondary" borderRadius="lg" display="flex" flexDirection="column">
          {items.map((item, i) => (
            <F0Box
              key={item.id}
              paddingY="md"
              paddingX="lg"
              borderTop={i === 0 ? undefined : "default"}
              borderColor="secondary"
              display="flex"
              flexDirection="row"
              justifyContent="between"
              alignItems="center"
              gap="md"
            >
              <F0Box display="flex" flexDirection="row" alignItems="center" gap="md">
                <F0Text variant="label" content={item.name} />
                {item.tag}
                {item.meta && <F0Text variant="description" content={item.meta} />}
              </F0Box>
              {onDuplicate ? (
                <Dropdown
                  icon={Ellipsis}
                  align="end"
                  items={[
                    ...(onEdit ? [{ label: ts.edit, onClick: () => onEdit(item.id) }] : []),
                    { label: ts.tplDuplicate, onClick: () => onDuplicate(item.id) },
                    { type: "separator" as const },
                    { label: ts.tplDelete, onClick: () => onDelete(item.id), critical: true },
                  ]}
                />
              ) : (
                <F0Box display="flex" flexDirection="row" gap="sm">
                  {onEdit && (
                    <F0Button label={ts.edit} hideLabel icon={Pencil} variant="outline" onClick={() => onEdit(item.id)} />
                  )}
                  <F0Button
                    label={ts.remove}
                    hideLabel
                    icon={Delete}
                    variant="outline"
                    onClick={() => onDelete(item.id)}
                  />
                </F0Box>
              )}
            </F0Box>
          ))}
        </F0Box>
      )}
    </F0Box>
  )
}
