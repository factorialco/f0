import React, { useState } from "react"
import { ScrollView, View } from "react-native"

import { F0Chip } from "../../../src/components/F0Chip"
import { F0Text } from "../../../src/components/primitives/F0Text"
import { AppIcons } from "../../../src/icons"

const { Placeholder, Archive, Check, Home } = AppIcons

export function F0ChipShowcase() {
  const [selected, setSelected] = useState<Set<string>>(new Set())

  const toggle = (id: string) => {
    setSelected((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  const sectionTitle = (title: string) => (
    <F0Text variant="heading-sm" className="mb-3">
      {title}
    </F0Text>
  )

  return (
    <ScrollView
      className="p-4"
      contentContainerStyle={{ paddingBottom: 40 }}
      style={{ width: "100%" }}
    >
      {sectionTitle("Default and Selected")}
      <View className="mb-6 flex-row flex-wrap gap-2">
        <F0Chip label="Default" />
        <F0Chip label="Selected" variant="selected" />
      </View>

      {sectionTitle("With Icons")}
      <View className="mb-6 flex-row flex-wrap gap-2">
        <F0Chip label="Placeholder" icon={Placeholder} />
        <F0Chip label="Archive" icon={Archive} />
        <F0Chip label="Selected icon" icon={Check} variant="selected" />
      </View>

      {sectionTitle("With Avatars")}
      <View className="mb-6 flex-row flex-wrap gap-2">
        <F0Chip
          label="Alex Taylor"
          avatar={{
            type: "person",
            firstName: "Alex",
            lastName: "Taylor",
            "aria-label": "Alex Taylor avatar",
          }}
        />
        <F0Chip
          label="Design engineers"
          avatar={{
            type: "team",
            name: "Design engineers",
            "aria-label": "Design engineers avatar",
          }}
        />
        <F0Chip
          label="Factorial"
          avatar={{
            type: "company",
            name: "Factorial",
            "aria-label": "Factorial avatar",
          }}
        />
      </View>

      {sectionTitle("Deactivated")}
      <View className="mb-6 flex-row flex-wrap gap-2">
        <F0Chip label="Deactivated label" deactivated />
        <F0Chip
          label="Deactivated user"
          deactivated
          avatar={{
            type: "person",
            firstName: "Deactivated",
            lastName: "User",
            deactivated: true,
            "aria-label": "Deactivated User avatar",
          }}
        />
      </View>

      {sectionTitle("Closeable")}
      <View className="mb-6 flex-row flex-wrap gap-2">
        <F0Chip label="Default close" onClose={() => {}} />
        <F0Chip label="Selected close" variant="selected" onClose={() => {}} />
        <F0Chip label="Avatar close" onClose={() => {}} avatar={{ type: "team", name: "People" }} />
      </View>

      {sectionTitle("Interactive")}
      <View className="mb-6 flex-row flex-wrap gap-2">
        <F0Chip
          label="Clickable"
          variant={selected.has("default") ? "selected" : "default"}
          onPress={() => toggle("default")}
        />
        <F0Chip
          label="With icon"
          icon={Home}
          variant={selected.has("icon") ? "selected" : "default"}
          onPress={() => toggle("icon")}
        />
        <F0Chip
          label="With close"
          variant={selected.has("close") ? "selected" : "default"}
          onPress={() => toggle("close")}
          onClose={() => toggle("close")}
        />
      </View>

      {sectionTitle("Web parity combinations")}
      <View className="mb-6 flex-row flex-wrap gap-2">
        <F0Chip label="Label" />
        <F0Chip label="Label" onClose={() => {}} />
        <F0Chip label="Label" icon={Placeholder} />
        <F0Chip
          label="Deactivated User"
          deactivated
          avatar={{
            type: "person",
            firstName: "Deactivated",
            lastName: "User",
            deactivated: true,
          }}
        />
        <F0Chip label="Label" variant="selected" onClose={() => {}} />
      </View>
    </ScrollView>
  )
}