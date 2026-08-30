import React from "react"
import { View } from "react-native"

import { F0Text } from "../primitives/F0Text"

import {
  metadataItemVariants,
  metadataLabelVariants,
} from "./F0Metadata.styles"
import type { MetadataItem, F0MetadataOrientation } from "./F0Metadata.types"
import { F0MetadataValue } from "./F0MetadataValue"

interface F0MetadataItemProps {
  item: MetadataItem
  orientation: F0MetadataOrientation
}

/**
 * Internal component that renders a single label + value metadata row.
 * Layout adapts to the `orientation` prop from the parent F0Metadata.
 */
export function F0MetadataItem({ item, orientation }: F0MetadataItemProps) {
  return (
    <View className={metadataItemVariants({ orientation })}>
      {!item.hideLabel && (
        <F0Text
          className={metadataLabelVariants({ orientation })}
          variant="body-sm-default"
          color="secondary"
        >
          {item.label}
        </F0Text>
      )}
      <F0MetadataValue value={item.value} />
    </View>
  )
}
