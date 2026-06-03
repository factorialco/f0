import { F0Box, F0Card, F0Icon, F0TagStatus, F0Text } from "@factorialco/f0-react"
import { LayersFront } from "@factorialco/f0-react/icons/app"
import type { ComponentProps, ComponentType, CSSProperties } from "react"

// F0Box drops `style` from its public props; the cast opts it back in for the
// absolute overlay positioning + stack offsets the variants can't express.
type F0BoxWithStyle = ComponentProps<typeof F0Box> & { style?: CSSProperties }
const Box = F0Box as ComponentType<F0BoxWithStyle>

type CardMetadata = NonNullable<ComponentProps<typeof F0Card>["metadata"]>
type CardPrimaryAction = NonNullable<ComponentProps<typeof F0Card>["primaryAction"]>
type TagVariant = ComponentProps<typeof F0TagStatus>["variant"]

export interface CatalogCardProps {
  title: string
  description: string
  image: string
  /** Render the "deck" effect — cards peeking behind, marking a multi-item pack. */
  stacked?: boolean
  /** "Bundle · 3 courses"-style badge shown over the thumbnail (packs only). */
  badge?: string
  /** State chip shown over the thumbnail (Included / Purchased / urgency). */
  stateTag?: { label: string; variant: TagVariant }
  metadata: CardMetadata
  primaryAction: CardPrimaryAction
}

/** One "card back" peeking out behind the main card — a sheet in the deck. */
function StackLayer({ inset, lift }: { inset: string; lift: string }) {
  return (
    <Box
      position="absolute"
      background="secondary"
      border="default"
      borderColor="default"
      borderRadius="xl"
      style={{
        top: `-${lift}`,
        left: inset,
        right: inset,
        height: "3.5rem",
        zIndex: 0,
        boxShadow: "0 -2px 6px rgba(0, 0, 0, 0.06)",
      }}
    />
  )
}

/**
 * One catalog item. Every item — free course or paid bundle — uses the exact
 * same chrome (image thumbnail + title + description + metadata + one primary
 * action), so they read as siblings. A bundle adds a "deck" of cards peeking
 * behind the thumbnail plus a high-contrast pack badge, so at a glance you can
 * tell a multi-course pack from a single course before reading a word.
 */
export function CatalogCard({
  title,
  description,
  image,
  stacked,
  badge,
  stateTag,
  metadata,
  primaryAction,
}: CatalogCardProps) {
  return (
    <Box position="relative" height="full">
      {/* Deck: two sheets peeking behind, narrower + higher as they recede. */}
      {stacked ? (
        <>
          <StackLayer inset="1.4rem" lift="1rem" />
          <StackLayer inset="0.7rem" lift="0.5rem" />
        </>
      ) : null}

      {/* Front card sits above the deck. */}
      <Box position="relative" height="full" style={{ zIndex: 1 }}>
        <F0Card
          fullHeight
          image={image}
          imageAspectRatio="video"
          imageFit="cover"
          blurredBackground={false}
          title={title}
          description={description}
          metadata={metadata}
          primaryAction={primaryAction}
        />

        {/* Overlays stack at the top-left so they never collide, however narrow
            the card gets — pack badge first, then the state chip below it. */}
        {badge || stateTag ? (
          <Box
            position="absolute"
            display="flex"
            flexDirection="column"
            alignItems="start"
            gap="xs"
            style={{ top: "0.75rem", left: "0.75rem", zIndex: 2 }}
          >
            {badge ? (
              <Box
                display="flex"
                alignItems="center"
                gap="xs"
                paddingX="sm"
                paddingY="xs"
                borderRadius="md"
                background="primary"
                border="default"
                borderColor="default"
                style={{ boxShadow: "0 1px 4px rgba(0, 0, 0, 0.25)" }}
              >
                <F0Icon icon={LayersFront} size="sm" />
                <F0Text content={badge} variant="label" />
              </Box>
            ) : null}
            {stateTag ? (
              <F0TagStatus text={stateTag.label} variant={stateTag.variant} />
            ) : null}
          </Box>
        ) : null}
      </Box>
    </Box>
  )
}
