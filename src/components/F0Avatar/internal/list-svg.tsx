import React from "react"
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

import {
  AVATAR_ITEM_WIDTHS,
  CLIP_MASK,
  CLIP_VIEWBOXES,
  CLIP_VIEWBOX_SIZES,
} from "../F0AvatarList.clips"
import type { AvatarListSize } from "../F0AvatarList.types"

import type { SvgAvatarData } from "./list-types"

const RING_STROKE = "rgba(0,0,0,0.06)"

const BASE_BORDER_RADIUS: Record<AvatarListSize, number> = {
  xs: 2,
  sm: 4,
  md: 6,
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

export function ClippedAvatar({
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
    <Svg width={itemWidth} height={itemWidth} viewBox={CLIP_VIEWBOXES[size]}>
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
