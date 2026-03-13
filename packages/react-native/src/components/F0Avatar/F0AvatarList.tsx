import React, { useId, useMemo } from "react"
import { View } from "react-native"
import Svg, {
  Circle,
  ClipPath,
  Defs,
  G,
  Image as SvgImage,
  Path,
  Rect,
  Text as SvgText,
} from "react-native-svg"
import { tv } from "tailwind-variants"

import { EllipsisHorizontal } from "../../icons/app"
import { F0Icon } from "../primitives/F0Icon"
import { F0Text, type TypographyVariant } from "../primitives/F0Text"

import { getFileTypeInfo } from "./F0Avatar.fileUtils"
import { getAvatarColor, getInitials } from "./F0Avatar.utils"
import { F0AvatarCompany } from "./F0AvatarCompany"
import { F0AvatarFile } from "./F0AvatarFile"
import { F0AvatarFlag } from "./F0AvatarFlag"
import {
  AVATAR_ITEM_WIDTHS,
  AVATAR_LIST_GAPS,
  CLIP_MASK,
  CLIP_VIEWBOXES,
  CLIP_VIEWBOX_SIZES,
} from "./F0AvatarList.clips"
import {
  type AvatarListSize,
  type F0AvatarListProps,
} from "./F0AvatarList.types"
import { F0AvatarPerson } from "./F0AvatarPerson"
import { F0AvatarTeam } from "./F0AvatarTeam"

// ─── SVG fill colors (light-mode values from theme.css) ─────────────

const AVATAR_FILL: Record<string, string> = {
  viridian: "hsl(184, 92%, 35%)",
  malibu: "hsl(216, 90%, 65%)",
  yellow: "hsl(38, 92%, 54%)",
  purple: "hsl(258, 88%, 67%)",
  lilac: "hsl(340, 49%, 60%)",
  barbie: "hsl(331, 84%, 63%)",
  smoke: "hsl(192, 26%, 54%)",
  army: "hsl(162, 44%, 33%)",
  flubber: "hsl(84, 55%, 53%)",
  indigo: "hsl(239, 91%, 64%)",
  camel: "hsl(25, 46%, 53%)",
}

const FILE_TEXT_FILL: Record<string, string> = {
  accent: "hsl(347, 80%, 34%)",
  info: "hsl(216, 48%, 44%)",
  positive: "hsl(161, 84%, 27%)",
  warning: "hsl(24, 69%, 40%)",
  secondary: "hsla(217, 96%, 11%, 0.61)",
  default: "hsl(218, 48%, 10%)",
}

const SVG_FONT_SIZE: Record<AvatarListSize, number> = {
  xs: 14,
  sm: 14,
  md: 16,
}

const SVG_FILE_FONT_SIZE: Record<AvatarListSize, number> = {
  xs: 12,
  sm: 12,
  md: 12,
}

const LIST_INTERNAL_SIZE = {
  xs: "xsmall",
  sm: "small",
  md: "medium",
} as const

// ─── SVG avatar data (what to draw inside the clip) ─────────────────

type SvgAvatarData =
  | { kind: "image"; src: string }
  | { kind: "initials"; fill: string; text: string }
  | { kind: "file"; text: string; textFill: string }

function getSvgAvatarData(
  type: F0AvatarListProps["type"],
  avatar: Record<string, unknown>,
  size: AvatarListSize
): SvgAvatarData {
  const internalSize = LIST_INTERNAL_SIZE[size]

  switch (type) {
    case "person": {
      const firstName = avatar.firstName as string
      const lastName = avatar.lastName as string
      if (avatar.src) return { kind: "image", src: avatar.src as string }
      const colorName = getAvatarColor(firstName + lastName) ?? "viridian"
      return {
        kind: "initials",
        fill: AVATAR_FILL[colorName],
        text: getInitials([firstName, lastName], internalSize),
      }
    }
    case "team": {
      const name = avatar.name as string
      if (avatar.src) return { kind: "image", src: avatar.src as string }
      const colorName = getAvatarColor(name) ?? "viridian"
      return {
        kind: "initials",
        fill: AVATAR_FILL[colorName],
        text: getInitials(name, internalSize),
      }
    }
    case "company": {
      const name = avatar.name as string
      if (avatar.src) return { kind: "image", src: avatar.src as string }
      return {
        kind: "initials",
        fill: AVATAR_FILL.viridian,
        text: getInitials(name, internalSize),
      }
    }
    case "flag": {
      const flag = avatar.flag as string
      return {
        kind: "image",
        src: `https://flagcdn.com/w80/${flag.toLowerCase()}.png`,
      }
    }
    case "file": {
      const file = avatar.file as { name: string; type?: string }
      const { type: fileType, color: fileColor } = getFileTypeInfo(file)
      const isSmall = internalSize === "xsmall" || internalSize === "small"
      return {
        kind: "file",
        text: isSmall ? fileType[0] : fileType,
        textFill: FILE_TEXT_FILL[fileColor] ?? FILE_TEXT_FILL.default,
      }
    }
  }
}

// ─── Counter styles ─────────────────────────────────────────────────

const counterVariants = tv({
  base: "flex shrink-0 items-center justify-center bg-f0-background-secondary",
  variants: {
    size: {
      xs: "h-5 w-5 rounded-xs",
      sm: "h-6 min-w-6 rounded-sm px-1",
      md: "h-8 min-w-8 rounded px-1.5",
    } satisfies Record<AvatarListSize, string>,
    shape: {
      base: "",
      rounded: "rounded-full",
    },
  },
  compoundVariants: [
    { size: "sm", shape: "rounded", className: "px-1.5" },
    { size: "md", shape: "rounded", className: "px-2" },
  ],
  defaultVariants: {
    size: "md",
    shape: "base",
  },
})

const counterTextVariant: Record<AvatarListSize, TypographyVariant> = {
  xs: "body-xs-medium",
  sm: "body-xs-medium",
  md: "body-sm-medium",
}

// ─── React Native avatar renderer (used only for the last/unclipped item) ──

function renderAvatar(
  type: F0AvatarListProps["type"],
  avatar: Record<string, unknown>,
  size: AvatarListSize
) {
  switch (type) {
    case "person":
      return (
        <F0AvatarPerson
          firstName={avatar.firstName as string}
          lastName={avatar.lastName as string}
          src={avatar.src as string | undefined}
          size={size}
        />
      )
    case "team":
      return (
        <F0AvatarTeam
          name={avatar.name as string}
          src={avatar.src as string | undefined}
          size={size}
        />
      )
    case "company":
      return (
        <F0AvatarCompany
          name={avatar.name as string}
          src={avatar.src as string | undefined}
          size={size}
        />
      )
    case "flag":
      return <F0AvatarFlag flag={avatar.flag as string} size={size} />
    case "file":
      return (
        <F0AvatarFile
          file={avatar.file as { name: string; type?: string }}
          size={size}
        />
      )
  }
}

// ─── SVG content renderer (pure SVG, no ForeignObject) ──────────────

const RING_STROKE = "rgba(0,0,0,0.06)"

const BASE_BORDER_RADIUS: Record<AvatarListSize, number> = {
  xs: 2,
  sm: 4,
  md: 6,
}

/**
 * Draws a 1px inset ring that matches the web's `ring-1 ring-inset ring-f1-border-secondary`.
 * For "rounded" (person) → circle, for "base" → rounded rect.
 */
function SvgRing({
  shape,
  size,
}: {
  shape: "base" | "rounded"
  size: AvatarListSize
}) {
  const vb = CLIP_VIEWBOX_SIZES[size]

  if (shape === "rounded") {
    return (
      <Circle
        cx={vb / 2}
        cy={vb / 2}
        r={vb / 2 - 0.5}
        fill="none"
        stroke={RING_STROKE}
        strokeWidth={1}
      />
    )
  }

  return (
    <Rect
      x={0.5}
      y={0.5}
      width={vb - 1}
      height={vb - 1}
      rx={BASE_BORDER_RADIUS[size]}
      fill="none"
      stroke={RING_STROKE}
      strokeWidth={1}
    />
  )
}

function SvgAvatarContent({
  data,
  size,
  shape,
}: {
  data: SvgAvatarData
  size: AvatarListSize
  shape: "base" | "rounded"
}) {
  const vb = CLIP_VIEWBOX_SIZES[size]
  const center = vb / 2

  if (data.kind === "image") {
    return (
      <>
        <SvgImage
          href={data.src}
          x={0}
          y={0}
          width={vb}
          height={vb}
          preserveAspectRatio="xMidYMid slice"
        />
        <SvgRing shape={shape} size={size} />
      </>
    )
  }

  if (data.kind === "file") {
    const fontSize = SVG_FILE_FONT_SIZE[size]
    return (
      <>
        <Rect
          x={0.5}
          y={0.5}
          width={vb - 1}
          height={vb - 1}
          fill="white"
          stroke={RING_STROKE}
          strokeWidth={1}
        />
        <SvgText
          x={center}
          y={center}
          dy={fontSize * 0.35}
          textAnchor="middle"
          fill={data.textFill}
          fontSize={fontSize}
          fontWeight="500"
        >
          {data.text}
        </SvgText>
      </>
    )
  }

  const fontSize = SVG_FONT_SIZE[size]
  return (
    <>
      <Rect x={0} y={0} width={vb} height={vb} fill={data.fill} />
      <SvgText
        x={center}
        y={center}
        dy={fontSize * 0.35}
        textAnchor="middle"
        fill="rgba(255,255,255,0.9)"
        fontSize={fontSize}
        fontWeight="600"
      >
        {data.text}
      </SvgText>
      <SvgRing shape={shape} size={size} />
    </>
  )
}

// ─── Clipped avatar wrapper ─────────────────────────────────────────

/**
 * Non-last avatars are rendered entirely in SVG (Rect/Text/Image) inside
 * an SVG ClipPath — this avoids ForeignObject which is unreliable on Android.
 * The last avatar renders the full React Native component (no clipping needed).
 */
function ClippedAvatar({
  children,
  clipId,
  shape,
  size,
  isLast,
  svgData,
}: {
  children: React.ReactNode
  clipId: string
  shape: "base" | "rounded"
  size: AvatarListSize
  isLast: boolean
  svgData: SvgAvatarData
}) {
  const itemWidth = AVATAR_ITEM_WIDTHS[size]

  if (isLast) {
    return (
      <View style={{ width: itemWidth, height: itemWidth }}>{children}</View>
    )
  }

  return (
    <Svg
      width={itemWidth}
      height={itemWidth}
      viewBox={CLIP_VIEWBOXES[size]}
    >
      <Defs>
        <ClipPath id={clipId}>
          <Path d={CLIP_MASK[shape][size]} />
        </ClipPath>
      </Defs>
      <G clipPath={`url(#${clipId})`}>
        <SvgAvatarContent data={svgData} size={size} shape={shape} />
      </G>
    </Svg>
  )
}

// ─── F0AvatarList ───────────────────────────────────────────────────

export const F0AvatarList = React.memo(function F0AvatarList({
  avatars,
  size = "md",
  type,
  max = 3,
  remainingCount,
}: F0AvatarListProps) {
  const listId = useId()
  const visibleCount = Math.min(avatars.length, max)
  const overflowCount = (remainingCount ?? 0) + (avatars.length - visibleCount)
  const showCounter = overflowCount > 0

  const gap = AVATAR_LIST_GAPS[size]
  const shape = type === "person" ? "rounded" : "base"
  const itemWidth = AVATAR_ITEM_WIDTHS[size]

  const visibleAvatars = useMemo(
    () => avatars.slice(0, visibleCount),
    [avatars, visibleCount]
  )

  return (
    <View className="flex-row items-center">
      {visibleAvatars.map((avatar, index) => {
        const avatarData = avatar as Record<string, unknown>
        const marginLeft = index === 0 ? 0 : gap
        const isLast = index === visibleCount - 1 && !showCounter

        return (
          <View key={index} style={{ marginLeft }}>
            <ClippedAvatar
              clipId={`${listId}-clip-${index}`}
              shape={shape}
              size={size}
              isLast={isLast}
              svgData={getSvgAvatarData(type, avatarData, size)}
            >
              {isLast ? renderAvatar(type, avatarData, size) : null}
            </ClippedAvatar>
          </View>
        )
      })}
      {showCounter && (
        <View
          style={{
            marginLeft: gap,
            minWidth: itemWidth,
            height: itemWidth,
          }}
        >
          <View className={counterVariants({ size, shape })}>
            {size === "xs" ? (
              <F0Icon icon={EllipsisHorizontal} size="xs" />
            ) : (
              <F0Text variant={counterTextVariant[size]} color="secondary">
                +{overflowCount}
              </F0Text>
            )}
          </View>
        </View>
      )}
    </View>
  )
})
