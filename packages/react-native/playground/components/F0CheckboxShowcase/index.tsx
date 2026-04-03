import React, { useState } from "react"
import { ScrollView, View } from "react-native"

import { F0Checkbox } from "../../../src/components/F0Checkbox"
import { F0Text } from "../../../src/components/primitives/F0Text"

function Section({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <View className="mb-8">
      <F0Text
        variant="body-xs-medium"
        color="secondary"
        className="mb-4 uppercase"
      >
        {title}
      </F0Text>
      <View className="gap-3 rounded-xl border border-f0-border-secondary p-4">
        {children}
      </View>
    </View>
  )
}

function ControlledCheckbox({ label }: { label: string }) {
  const [checked, setChecked] = useState(false)
  return (
    <F0Checkbox label={label} checked={checked} onValueChange={setChecked} />
  )
}

export function F0CheckboxShowcase() {
  return (
    <ScrollView className="p-4" contentContainerStyle={{ paddingBottom: 40 }}>
      <Section title="States">
        <F0Checkbox label="Unchecked" checked={false} />
        <F0Checkbox label="Checked" checked />
        <F0Checkbox label="Indeterminate" indeterminate />
        <F0Checkbox label="Disabled unchecked" disabled />
        <F0Checkbox label="Disabled checked" checked disabled />
      </Section>

      <Section title="Interactive">
        <ControlledCheckbox label="Toggle me" />
      </Section>

      <Section title="Hide label">
        <View className="flex-row gap-4">
          <F0Checkbox label="Hidden label (unchecked)" hideLabel />
          <F0Checkbox label="Hidden label (checked)" checked hideLabel />
          <F0Checkbox label="Hidden label (indeterminate)" indeterminate hideLabel />
        </View>
      </Section>
    </ScrollView>
  )
}
