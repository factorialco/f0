import { F0Box, F0Icon, F0Text, type IconType } from "@factorialco/f0-react"
import type {
  ComponentProps,
  ComponentType,
  CSSProperties,
  ReactNode,
} from "react"
import { useState } from "react"

import { browseItems, campusCopy, categories } from "../shared/campusData"

/**
 * F0Box omits `className` / `style` from its public props, and crucially its
 * cva-generated className is overwritten by anything spread via `{...rest}` —
 * so passing `className` silently wipes every layout variant. We therefore
 * drive layout exclusively through F0Box variant props (display, gap, width…)
 * and only opt back into `style` (cursor) + DOM hover handlers, which land in
 * rest without colliding with the variant className.
 */
type F0BoxExtras = ComponentProps<typeof F0Box> & {
  style?: CSSProperties
  onMouseEnter?: () => void
  onMouseLeave?: () => void
}
const Box = F0Box as ComponentType<F0BoxExtras>

function NavRow({
  icon,
  label,
  active = false,
  trailing,
  muted = false,
  onClick,
}: {
  icon: IconType
  label: string
  active?: boolean
  trailing?: ReactNode
  muted?: boolean
  onClick?: () => void
}) {
  const [hovered, setHovered] = useState(false)
  const background = active
    ? "selected"
    : hovered && onClick
      ? "secondary"
      : "transparent"
  return (
    <Box
      display="flex"
      alignItems="center"
      gap="sm"
      paddingX="sm"
      paddingY="xs"
      borderRadius="md"
      background={background}
      onClick={onClick}
      onMouseEnter={onClick ? () => setHovered(true) : undefined}
      onMouseLeave={onClick ? () => setHovered(false) : undefined}
      style={{ cursor: onClick ? "pointer" : "default" }}
    >
      <F0Icon
        icon={icon}
        size="sm"
        color={muted ? "secondary" : active ? "selected" : "default"}
      />
      <Box grow display="flex">
        <F0Text
          content={label}
          variant={active ? "label" : muted ? "description" : "body"}
        />
      </Box>
      {trailing}
    </Box>
  )
}

function CountChip({ value }: { value: number }) {
  return (
    <Box
      paddingX="xs"
      borderRadius="full"
      background="secondary"
      display="flex"
      alignItems="center"
      justifyContent="center"
      minWidth="5"
    >
      <F0Text content={String(value)} variant="small" />
    </Box>
  )
}

function SoonTag() {
  return (
    <Box paddingX="xs" borderRadius="full" background="secondary" display="flex">
      <F0Text content={campusCopy.soonTag} variant="small" />
    </Box>
  )
}

export function CampusSidebar({
  activeId,
  onSelect,
}: {
  activeId: string
  onSelect: (id: string) => void
}) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="lg"
      width="60"
      shrink={false}
    >
      {/* Browse */}
      <Box display="flex" flexDirection="column" gap="xs">
        <Box paddingX="sm" paddingBottom="xs">
          <F0Text content={campusCopy.browseLabel} variant="small" />
        </Box>
        {browseItems.map((item) => (
          <NavRow
            key={item.id}
            icon={item.icon}
            label={item.label}
            active={activeId === item.id}
            onClick={() => onSelect(item.id)}
          />
        ))}
      </Box>

      {/* Categories */}
      <Box display="flex" flexDirection="column" gap="xs">
        <Box paddingX="sm" paddingBottom="xs">
          <F0Text content={campusCopy.categoriesLabel} variant="small" />
        </Box>
        {categories.map((cat) =>
          cat.available ? (
            <NavRow
              key={cat.id}
              icon={cat.icon}
              label={cat.label}
              active={activeId === cat.id}
              trailing={
                cat.count !== undefined ? <CountChip value={cat.count} /> : undefined
              }
              onClick={() => onSelect(cat.id)}
            />
          ) : (
            <NavRow
              key={cat.id}
              icon={cat.icon}
              label={cat.label}
              muted
              trailing={<SoonTag />}
            />
          )
        )}
      </Box>
    </Box>
  )
}
